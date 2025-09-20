import React from 'react';
import { motion } from 'framer-motion';

// Home Icon
export const HomeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.1 }}
  >
    <motion.path
      d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
    <motion.polyline
      points="9,22 9,12 15,12 15,22"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, delay: 0.7 }}
    />
  </motion.svg>
);

// Analytics Icon (Chart)
export const AnalyticsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.1 }}
  >
    <motion.path
      d="M3 3v18h18"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4 }}
    />
    <motion.path
      d="m19 9-5 5-4-4-3 3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    />
    <motion.circle
      cx="12"
      cy="10"
      r="2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.8 }}
    />
  </motion.svg>
);

// Reports Icon (File Stack)
export const ReportsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.1 }}
  >
    <motion.path
      d="M21 7h-3a2 2 0 0 1-2-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.path
      d="M16 2v4a2 2 0 0 0 2 2h4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    />
    <motion.path
      d="M19 13H5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 0.8 }}
    />
    <motion.path
      d="M19 17H5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 1.0 }}
    />
  </motion.svg>
);

// Settings Icon (Gear)
export const SettingsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1, rotate: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.1, rotate: 45 }}
  >
    <motion.path
      d="M12.22 2h-.44a2 2 0 0 0-2 2.18l.2 1.83a2 2 0 0 1-.26 1.31l-.24.45a2 2 0 0 1-1.17.81l-1.75.35a2 2 0 0 0-1.54 2.12l.19.87a2 2 0 0 0 1.54 1.29l1.75.35a2 2 0 0 1 1.17.81l.24.45a2 2 0 0 1 .26 1.31l-.2 1.83a2 2 0 0 0 2 2.18h.44a2 2 0 0 0 2-2.18l-.2-1.83a2 2 0 0 1 .26-1.31l.24-.45a2 2 0 0 1 1.17-.81l1.75-.35a2 2 0 0 0 1.54-1.29l.19-.87a2 2 0 0 0-1.54-2.12l-1.75-.35a2 2 0 0 1-1.17-.81l-.24-.45a2 2 0 0 1-.26-1.31l.2-1.83a2 2 0 0 0-2-2.18Z"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.6 }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="3"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.6 }}
    />
  </motion.svg>
);

// Dashboard Cards Icons
export const DollarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
  >
    <motion.line
      x1="12"
      y1="2"
      x2="12"
      y2="22"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3 }}
    />
    <motion.path
      d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    />
  </motion.svg>
);

export const UsersIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.1 }}
  >
    <motion.path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4 }}
    />
    <motion.circle
      cx="9"
      cy="7"
      r="4"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    />
    <motion.path
      d="m22 21v-2a4 4 0 0 0-3-3.87"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, delay: 0.7 }}
    />
    <motion.path
      d="m16 3.13a4 4 0 0 1 0 7.75"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, delay: 1.0 }}
    />
  </motion.svg>
);

export const TrendingUpIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.1 }}
  >
    <motion.polyline
      points="22,7 13.5,15.5 8.5,10.5 2,17"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.polyline
      points="16,7 22,7 22,13"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    />
  </motion.svg>
);

export const PercentIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
  >
    <motion.line
      x1="19"
      y1="5"
      x2="5"
      y2="19"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4 }}
    />
    <motion.circle
      cx="6.5"
      cy="6.5"
      r="2.5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    />
    <motion.circle
      cx="17.5"
      cy="17.5"
      r="2.5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.7 }}
    />
  </motion.svg>
);

// Theme Toggle Icons
export const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, rotate: -45 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.1, rotate: 90 }}
  >
    <motion.circle
      cx="12"
      cy="12"
      r="4"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    />
    <motion.path
      d="m12 2 0 2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 0.5 }}
    />
    <motion.path
      d="m12 20 0 2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 0.6 }}
    />
    <motion.path
      d="m4.93 4.93 1.41 1.41"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 0.7 }}
    />
    <motion.path
      d="m17.66 17.66 1.41 1.41"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 0.8 }}
    />
    <motion.path
      d="m2 12 2 0"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 0.9 }}
    />
    <motion.path
      d="m20 12 2 0"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 1.0 }}
    />
    <motion.path
      d="m6.34 17.66-1.41 1.41"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 1.1 }}
    />
    <motion.path
      d="m19.07 4.93-1.41 1.41"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 1.2 }}
    />
  </motion.svg>
);

export const MoonIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, rotate: 45 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.1, rotate: -15 }}
  >
    <motion.path
      d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    />
  </motion.svg>
);

// Form Input Icons
export const UserIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.path
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4 }}
    />
    <motion.circle
      cx="12"
      cy="7"
      r="4"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    />
  </motion.svg>
);

export const EmailIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4 }}
    />
    <motion.polyline
      points="22,6 12,13 2,6"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    />
  </motion.svg>
);

export const LockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.rect
      width="18"
      height="11"
      x="3"
      y="11"
      rx="2"
      ry="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4 }}
    />
    <motion.path
      d="M7 11V7a5 5 0 0 1 10 0v4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    />
  </motion.svg>
);

export const IdCardIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0.8, opacity: 0.8 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.path
      d="M16 10a4 4 0 0 1-8 0"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3 }}
    />
    <motion.path
      d="M12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    />
    <motion.rect
      width="20"
      height="14"
      x="2"
      y="5"
      rx="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 0.7 }}
    />
  </motion.svg>
);