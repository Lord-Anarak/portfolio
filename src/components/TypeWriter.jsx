import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterWords = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex((prevLetterIndex) => {
        if (!isDeleting) {
          if (prevLetterIndex < words[currentWordIndex].length - 1) {
            return prevLetterIndex + 1;
          } else {
            setTimeout(() => {
              setIsDeleting(true);
            }, 2000);
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
    }, 150);

    return () => clearInterval(interval);
  }, [currentWordIndex, currentLetterIndex, isDeleting, words]);

  return (
    <h2 className="text-[#804dee] font-black">
      {words[currentWordIndex].substring(0, currentLetterIndex + 1)}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: isDeleting ? 0 : 1,
          scale: isDeleting ? 0.5 : 1,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
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
