"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

type CursorState = 'default' | 'hover' | 'click' | 'text';

interface CursorStyle {
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  backgroundColor: string;
  mixBlendMode: 'normal' | 'difference';
}

const AdvancedCustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    const updateMousePosition = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (): void => setIsVisible(true);
    const handleMouseLeave = (): void => setIsVisible(false);

    // Handle different cursor states
    const handleMouseOver = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('cursor-pointer')) {
        setCursorState('hover');
      } else if (target.tagName === 'INPUT' || 
                 target.tagName === 'TEXTAREA' || 
                 target.contentEditable === 'true') {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseDown = (): void => setCursorState('click');
    const handleMouseUp = (): void => setCursorState('default');

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup
    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const getCursorStyle = (): CursorStyle => {
    switch (cursorState) {
      case 'hover':
        return {
          scale: 1.5,
          backgroundColor: '#ff6b6b',
          mixBlendMode: 'normal',
        };
      case 'click':
        return {
          scale: 0.8,
          backgroundColor: '#4ecdc4',
          mixBlendMode: 'normal',
        };
      case 'text':
        return {
          scaleX: 0.3,
          scaleY: 1.5,
          backgroundColor: '#45b7d1',
          mixBlendMode: 'normal',
        };
      default:
        return {
          scale: 1,
          backgroundColor: '#ffffff',
          mixBlendMode: 'difference',
        };
    }
  };

  const cursorStyle = getCursorStyle();

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          backgroundColor: cursorStyle.backgroundColor,
          mixBlendMode: cursorStyle.mixBlendMode,
        }}
        animate={{
          scale: cursorState === 'text' && cursorStyle.scaleX && cursorStyle.scaleY 
            ? [cursorStyle.scaleX, cursorStyle.scaleY] 
            : cursorStyle.scale,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        {/* Add text cursor line */}
        {cursorState === 'text' && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-current" />
        )}
      </motion.div>

      {/* Cursor trail/ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        animate={{
          scale: cursorState === 'hover' ? 1.2 : cursorState === 'click' ? 0.8 : 1,
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.2,
        }}
      />
    </>
  );
};

export default AdvancedCustomCursor;