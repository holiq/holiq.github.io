import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const scaleOnHover = {
  scale: 1,
  transition: { duration: 0.3 },
};

export const scaleOnHoverActive = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

/** Infinite scale pulse — good for CTAs, notification badges */
export const pulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.06, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/** Horizontal shake — use on error states */
export const shake: Variants = {
  initial: { x: 0 },
  animate: {
    x: [-8, 8, -6, 6, -4, 4, 0],
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Bounce entry — attention-grabbing entrance */
export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: [0.5, 1.15, 0.95, 1.05, 1],
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** Zoom in from slightly smaller — subtle card entrance */
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Rotate in — good for icon reveals */
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -15, scale: 0.8 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Slide up with blur — premium feel */
export const blurUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/** Subtle width-expand for underlines, progress bars, dividers */
export const expandWidth: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
