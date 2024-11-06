import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutInfo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = window.scrollY;
      const element = containerRef.current;
      element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const repeatingText = "SURFING WITH THE FLOW";
  const repeatedText = repeatingText.repeat(4);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* text fade loop animation */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute top-0 whitespace-nowrap text-[150px] font-bold text-gray-100 pointer-events-none"
      >
        {repeatedText}
      </motion.div>

      {/* main contenthere  */}
      <div className="relative container mx-auto px-4 pt-32 pb-8">
        <span className="inline-block mb-8 text-lg font-medium tracking-wider">
          BOOK YOUR ADVENTURE
        </span>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold max-w-4xl mb-8">
          CAREFULLY CRAFTED SURFING EXPERIENCE
        </h1>
        <p className="text-xl max-w-3xl mb-12 text-gray-600">
          {" "}
          Join our expert instructors for an unforgettable surfing adventure.
          From beginners to advanced surfers, we have the perfect program for
          every skill level.
        </p>
        {/* highliger line  */}
        <motion.div className="w-32 h-2 bg-yellow-600" />
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-12 px-8 py-2 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-800 transition-colors duration-200"
        >
          Book Your Sessions
        </motion.button>
      </div>
      {/* Animated Wave Background */}
      {/* Animated Wave Background */}
      <div
        ref={containerRef}
        className="absolute bottom-0 left-0 w-full h-64 overflow-hidden"
      >
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <motion.path
            fill="#0099ff"
            fillOpacity="0.2"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ y: 100 }}
            animate={{
              y: [100, 50, 100],
              transition: {
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              },
            }}
          />
          <motion.path
            fill="#0099ff"
            fillOpacity="0.4"
            d="M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,181.3C672,160,768,160,864,181.3C960,203,1056,245,1152,261.3C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ y: 100 }}
            animate={{
              y: [100, 50, 100],
              transition: {
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
              },
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutInfo;
