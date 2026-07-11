import { useState, useEffect, useRef, useCallback } from 'react';
import type { RefObject } from 'react';

export function useTypingAnimation(
  texts: string[],
  options: { typeSpeed?: number; deleteSpeed?: number; pauseTime?: number } = {}
) {
  const { typeSpeed = 80, deleteSpeed = 40, pauseTime = 2000 } = options;
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex % texts.length];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => prev + 1);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.substring(0, displayText.length - 1)
              : current.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, typeSpeed, deleteSpeed, pauseTime]);

  return displayText;
}

/**
 * Magnetic button effect — element translates toward the cursor while hovered.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35): {
  ref: RefObject<T>;
  handleMouseMove: (e: React.MouseEvent<T>) => void;
  handleMouseLeave: () => void;
} {
  const ref = useRef<T>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0px, 0px)';
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}

/**
 * Global mouse position normalized to [-0.5, 0.5] for parallax effects.
 */
export function useMouseParallax() {
  const [normalized, setNormalized] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setNormalized({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return normalized;
}
