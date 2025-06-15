import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ArrowAnimation = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Show and draw paths
      setAnimationStep(1);
      await new Promise(resolve => setTimeout(resolve, 3100)); // 1s delay + 2s draw
      
      // Step 2: Fill the arrow
      setAnimationStep(2);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 0.5s fill + 0.5s delay
      
      // Step 3: Move down
      setAnimationStep(3);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1s move
      
      // Step 4: Hide and reset
      setAnimationStep(0);
      await new Promise(resolve => setTimeout(resolve, 100)); // Quick reset
    };

    const interval = setInterval(sequence, 5500);
    sequence(); // Start immediately
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center overflow-hidden w-full absolute z-10 -left-44">
      {/* Background content */}

      {/* Arrow Animation */}
      <AnimatePresence>
        {animationStep > 0 && (
          <motion.div 
            className="absolute bottom-20 left-1/2 -translate-x-1/2 z-0"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: animationStep >= 1 ? 1 : 0,
              y: animationStep === 3 ? 300 : 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.1 },
              y: { duration: 1, ease: "easeInOut" }
            }}
          >
            <svg
              width="376"
              height="111"
              viewBox="0 0 376 111"
              className="w-96 h-28"
            >
              {/* Left arrow path */}
              <motion.path
                d="M1 1V39.9286L188 110V70.6822L1 1Z"
                stroke="#3f4145"
                strokeWidth="2"
                fill={animationStep >= 2 ? "#ffffff08" : "transparent"}
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: animationStep >= 1 ? 1 : 0,
                }}
                transition={{
                  pathLength: { 
                    duration: 2, 
                    delay: 1,
                    ease: "easeInOut"
                  }
                }}
              />
              
              {/* Right arrow path */}
              <motion.path
                d="M375 1V39.9286L188 110V70.6822L375 1Z"
                stroke="#3f4145"
                strokeWidth="2"
                fill={animationStep >= 2 ? "#ffffff08" : "transparent"}
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: animationStep >= 1 ? 1 : 0,
                }}
                transition={{
                  pathLength: { 
                    duration: 2, 
                    delay: 1,
                    ease: "easeInOut"
                  }
                }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArrowAnimation;