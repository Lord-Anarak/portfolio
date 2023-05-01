import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../assets";
import Typewriter from "./TypeWriter";

import { resume } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div
        className={`absolute inset-0 top-[120px] lg:top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 sm:px-16`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#804dee]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-secondary`}>
            Hi, My name is &nbsp;
            <span className="text-white">Muhammed Afrar</span>{" "}
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100 flex`}>
            I am a &nbsp; {<Typewriter />}
          </div>
          <div className="mt-10">
            <a
              href={resume}
              download
              className="bg-[#804dee] text-secondary p-3 px-5 rounded-lg font-bold text-sm hover:text-white"
            >
              Download Resume
            </a>
          </div>
        </div>

        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeOut",
          }}
          className="absolute right-0 mt-48 sm:mt-0 flex justify-center sm:justify-end"
        >
          <img src={profile} alt="profile" className="sm:w-[75%] w-full" />
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 25, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
