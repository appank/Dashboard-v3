import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, children }) => {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-drawer-open');
    } else {
      document.body.classList.remove('mobile-drawer-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-drawer-open');
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="sidebar mobile-drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200,
              mass: 0.8,
            }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;