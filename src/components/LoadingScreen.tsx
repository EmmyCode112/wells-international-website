import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { WISLogo } from './WISLogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [shouldHide, setShouldHide] = useState<boolean>(false);

  useEffect(() => {
    // High-end loading animation timing (2.8 seconds total for drawing & reveals)
    const timeout = setTimeout(() => {
      setShouldHide(true);
      // Wait for exit transition to complete before triggering onComplete
      const completeTimeout = setTimeout(onComplete, 400);
      return () => clearTimeout(completeTimeout);
    }, 2800);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: shouldHide ? 0 : 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-slate text-white select-none"
    >
      {/* Visual background atmospheric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-secondary opacity-15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Subtle geometric radar lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.4, opacity: [0, 0.08, 0] }}
            transition={{ duration: 2.8, ease: 'easeOut', repeat: Infinity }}
            className="w-[450px] h-[450px] border border-white/10 rounded-full absolute"
          />
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1.1, opacity: [0, 0.05, 0] }}
            transition={{ duration: 2.8, ease: 'easeOut', delay: 0.8, repeat: Infinity }}
            className="w-[300px] h-[300px] border border-white/5 rounded-full absolute"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8">
        
        {/* Crest Logo drawing canvas */}
        <div className="w-40 h-40 flex items-center justify-center bg-brand-primary/10 rounded-3xl border border-white/5 relative shadow-inner p-4">
          <svg viewBox="0 0 100 100" className="w-28 h-28 text-brand-secondary">
            {/* 1. Diamond Cap Board */}
            <motion.path
              d="M 50 22 L 88 42 L 50 62 L 12 42 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
            {/* 2. Under-Cap Base Skull Area */}
            <motion.path
              d="M 28 51 V 68 C 28 75 38 80 50 80 C 62 80 72 75 72 68 V 51"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3, ease: 'easeInOut', delay: 0.4 }}
            />
            {/* 3. Hanging Tassel */}
            <motion.path
              d="M 76 46 V 61 L 79 66"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.9 }}
            />
            {/* 4. Golden Star Base Accent representing Top Achievement */}
            <motion.path
              d="M 50 85 L 51.5 89 L 55 89 L 52.2 91 L 53.5 95 L 50 93 L 46.5 95 L 47.8 91 L 45 89 L 48.5 89 Z"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.5 }}
            />
          </svg>
        </div>

        {/* School Name Fading In */}
        <div className="text-center space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl font-display font-black tracking-widest text-white leading-none"
          >
            WELLS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.22em' }}
            transition={{ delay: 1.1, duration: 1.0, ease: 'easeOut' }}
            className="text-[9px] font-bold text-brand-secondary uppercase tracking-widest"
          >
            INTERNATIONAL SCHOOLS
          </motion.p>
        </div>

        {/* Simple Progress Bar Tracker */}
        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 2.3, ease: 'easeInOut' }}
            className="h-full w-full bg-gradient-to-r from-brand-secondary to-blue-400 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};
