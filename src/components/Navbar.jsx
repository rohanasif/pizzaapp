import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

function Navbar() {
  return (
    <header>
      <div
        className="logo"
        draggable="false"
        style={{ userSelect: "none", transform: "none" }}
      >
        <svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          style={{ transform: "none", transformOrigin: "45px 35px" }}
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            opacity="1"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={draw}
          ></motion.path>
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            opacity="1"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={draw}
          ></motion.path>
        </svg>
      </div>
      <div
        className="title"
        style={{ transform: "translateY(-10px) translateZ(0px)" }}
      >
        <h1>Pizza Joint</h1>
      </div>
    </header>
  );
}

export default Navbar;
