import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import styles from './Loader.module.css';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const { isDarkMode } = useTheme();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={`${styles.loaderContainer} ${isDarkMode ? styles.dark : styles.light}`}
          initial={{ scale: 1 }}
          exit={{
            scale: 20,
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <motion.div 
            className={styles.rectangle}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.filler}></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
