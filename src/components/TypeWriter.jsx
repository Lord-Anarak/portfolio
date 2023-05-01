import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterWords = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentLetterIndex((prevLetterIndex) => {
        if (!isDeleting) {
          if (prevLetterIndex < words[currentWordIndex].length - 1) {
            return prevLetterIndex + 1;
          } else {
            setTimeout(() => {
              setIsDeleting(true);
            }, 2500);
            return prevLetterIndex;
          }
        } else {
          if (prevLetterIndex > 0) {
            return prevLetterIndex - 1;
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prevWordIndex) =>
              prevWordIndex === words.length - 1 ? 0 : prevWordIndex + 1
            );
            return 0;
          }
        }
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentWordIndex, currentLetterIndex, isDeleting, words]);

  return (
    <h2 className="text-[#804dee] font-black">
      {words[currentWordIndex].substring(0, currentLetterIndex + 1)}
      <motion.span
        layout
        animate={{
          opacity:
            !isDeleting &&
            currentLetterIndex === words[currentWordIndex].length - 1
              ? [1, 0, 1]
              : [1, 1],
        }}
        transition={{
          repeatDelay: 0.3,
          duration: 0.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="text-white"
      >
        _
      </motion.span>
    </h2>
  );
};

const Typewriter = () => {
  return (
    <div>
      <TypewriterWords
        words={["FullStack Developer", "Graphic Designer", "Freelancer"]}
      />
    </div>
  );
};

export default Typewriter;
