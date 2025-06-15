// hooks/useCursor.ts
import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

type CursorState = 'default' | 'hover' | 'click' | 'text';

interface UseCursorReturn {
  mousePosition: MousePosition;
  isVisible: boolean;
  cursorState: CursorState;
}

export const useCursor = (): UseCursorReturn => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');

  useEffect(() => {
    document.body.style.cursor = 'none';
    
    const updateMousePosition = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (): void => setIsVisible(true);
    const handleMouseLeave = (): void => setIsVisible(false);

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

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

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

  return {
    mousePosition,
    isVisible,
    cursorState,
  };
};