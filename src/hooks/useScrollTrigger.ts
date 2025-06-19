import { useEffect, useState, useCallback } from 'react';

interface UseScrollTriggerOptions {
  threshold?: number;
  triggerOnce?: boolean;
  root?: Element | null;
  rootMargin?: string;
}

export const useScrollTrigger = (
  ref: React.RefObject<Element>,
  options: UseScrollTriggerOptions = {}
) => {
  const {
    threshold = 0,
    triggerOnce = false,
    root = null,
    rootMargin = '0px',
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce) {
          setHasTriggered(true);
        }
      } else {
        if (!triggerOnce) {
          setIsVisible(false);
        }
      }
    },
    [triggerOnce]
  );

  useEffect(() => {
    if (hasTriggered) return;

    const observer = new IntersectionObserver(callback, {
      root,
      rootMargin,
      threshold,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, root, rootMargin, callback, hasTriggered]);

  return isVisible;
};

export default useScrollTrigger; 