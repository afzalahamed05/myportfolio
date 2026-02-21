export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

export const page = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35 } }
};