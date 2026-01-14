import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const Reveal = ({ 
  children, 
  width = 'fit-content', 
  delay = 0, 
  duration = 0.8,
  className = "",
  direction = 'up'
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = () => {
    const distance = 50;
    let initial = { opacity: 0, y: 0, x: 0 };
    
    switch(direction) {
      case 'up': initial.y = distance; break;
      case 'down': initial.y = -distance; break;
      case 'left': initial.x = distance; break;
      case 'right': initial.x = -distance; break;
    }

    if (shouldReduceMotion) {
      initial = { opacity: 0, y: 0, x: 0 };
    }

    return {
      hidden: initial,
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.16, 1, 0.3, 1] // cubic-bezier match from CSS
        }
      }
    };
  };

  return (
    <div ref={ref} style={{ position: 'relative', width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};