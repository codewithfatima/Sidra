export const slideUpVariants = {
  hidden: { y: 50, opacity: 0 }, 
  visible: {
    y: 0, 
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // smaller value, faster animation
      duration: 1.5, 
      ease: "easeOut",
    },
  },
};

export const zoomInVariants = {
  hidden: { scale: 0.5, opacity: 0 }, 
  visible: {
    scale: 1, 
    opacity: 1, 
    transition: {
      staggerChildren: 0.2, // smaller value
      duration: 1.2, 
      ease: "easeOut",
    },
  },
};
