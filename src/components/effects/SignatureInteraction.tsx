import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface SignatureInteractionProps {
  type: 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress';
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ 
  type, 
  children, 
  className = '',
  speed = 20
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  if (type === 'marquee') {
    return (
      <div className={`flex overflow-hidden w-full ${className}`}>
        <motion.div
          className="flex gap-4 flex-shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed,
          }}
        >
          {children}
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === 'parallax') {
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <motion.div style={{ y }} className="w-full h-full">
          {children}
        </motion.div>
      </div>
    );
  }

  return <div className={className}>{children}</div>;
};
