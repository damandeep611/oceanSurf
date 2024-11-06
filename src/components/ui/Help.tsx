"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HelpCircle, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Help() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate circular elements
      gsap.from(".circle-text", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // Animate surfboard drawings
      gsap.from(".surfboard-line", {
        scrollTrigger: {
          trigger: ".surfboard-line",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        drawSVG: "0%",
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-sky-50 to-white overflow-hidden py-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ opacity }}
          >
            LET US
            <br />
            HELP YOU
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Circle */}
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="relative inline-block">
              <div className="circle-text absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" width="150" height="150">
                  <path
                    id="curve"
                    d="M 25,50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
                    fill="none"
                    className="text-gray-800"
                  />
                  <text className="text-xs">
                    <textPath href="#curve">
                      TO GO • DON'T KNOW WHERE •
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto">
                <HelpCircle className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <motion.p
              className="mt-6 text-xl font-serif max-w-xs mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Trust your faith. Try your luck and find the best deal with us.
            </motion.p>
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://images.pexels.com/photos/4577545/pexels-photo-4577545.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Surfer holding surfboard"
              className="rounded-lg shadow-2xl"
            />
            <svg
              className="surfboard-line absolute -left-20 top-1/2 w-20 h-2 text-primary"
              viewBox="0 0 100 2"
            >
              <line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="surfboard-line absolute -right-20 top-1/2 w-20 h-2 text-primary"
              viewBox="0 0 100 2"
            >
              <line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          {/* Right Circle */}
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="relative inline-block">
              <div className="circle-text absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" width="150" height="150">
                  <path
                    id="curve2"
                    d="M 25,50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
                    fill="none"
                    className="text-gray-800"
                  />
                  <text className="text-xs">
                    <textPath href="#curve2">
                      YOU • DON'T BE SHY • TELL US ABOUT
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <motion.p
              className="mt-6 text-xl font-serif max-w-xs mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              We will find the best destination
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
            Start Your Journey
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
