export const TitleVariants = {
  hidden: {
    opacity: 0,
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
    scale: 2,
    color: "#000",
  },
  loading: {
    opacity: 1,
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
    scale: 2,
    color: "#000",
  },
  loaded: {
    opacity: 1,
    top: "30px",
    left: "50px",
    x: 0,
    y: 0,
    scale: 1,
    color: "#fff",
  },
};

export const textAnimate = {
  ...TitleVariants.loading,
  scale: [2, 2.15, 2, 2.07, 2],
};

export const heartbeatTransition = {
  scale: {
    duration: 0.8,
    times: [0, 0.2, 0.4, 0.6, 1],
    repeat: Infinity,
    repeatDelay: 0.7,
    ease: [0.5, 0, 0.5, 1],
  },
};

export const pulseVariants = [
  {
    delay: 0,
    size: 140,
    colors: ["rgba(50,100,200,0.25)", "rgba(70,150,240,0.50)"],
  },
  {
    delay: 0.4,
    size: 160,
    colors: ["rgba(70,130,220,0.2)", "rgba(100,180,250,0.42)"],
  },
];

export const pulseAnimate = {
  scale: [0, 1.8],
  opacity: [0.5, 0],
  x: "-50%",
  y: "-50%",
};

const firstTitleTransition = { duration: 0.4, ease: "easeInOut" };
const secondTitleTransition = { duration: 0.4, delay: 0.8, ease: "easeInOut" };
const thirdTitleTransition = { duration: 0.4, delay: 1.6, ease: "easeInOut" };

export const loadedTitleTransition = {
  duration: 0.3,
  ease: "easeInOut",
  scale: firstTitleTransition,
  top: secondTitleTransition,
  left: secondTitleTransition,
  x: secondTitleTransition,
  y: secondTitleTransition,
  color: thirdTitleTransition,
};
