'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const letters = ['S', 'H', 'A', 'O', 'N'];

export default function GlobalLoader() {
  const [show, setShow] = useState(true);
  const [exitPhase, setExitPhase] = useState(false);

  useEffect(() => {
    const startExit = setTimeout(() => {
      setExitPhase(true);
    }, 1800); // after enter animation

    const hidePreloader = setTimeout(() => {
      setShow(false);
    }, 3500); // fully remove

    return () => {
      clearTimeout(startExit);
      clearTimeout(hidePreloader);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex bg-transparent items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          {/* Animated Panels */}
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.div
              key={i}
              className="preloader-item h-full w-[14.2857%] bg-[#9E59F7]"
              initial={{ y: 0 }}
              animate={{ y: '100%' }}
              transition={{
                delay: 2.4 + i * 0.1, // after text exit starts
                duration: 0.5,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Animated Letters */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex text-[20vw] lg:text-[200px] font-bold leading-none font-anton text-white overflow-hidden name-text"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
              exit: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="initial"
            animate={exitPhase ? 'exit' : 'animate'}
          >
            {letters.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  initial: { y: '100%', opacity: 0 },
                  animate: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.8, ease: 'easeOut' },
                  },
                  exit: {
                    y: '100%',
                    opacity: 0,
                    transition: { duration: 0.8, ease: 'easeOut', delay: i*0.2},
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
