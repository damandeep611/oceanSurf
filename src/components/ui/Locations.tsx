import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import gsap from "gsap";
import { ChevronRight, ChevronLeft, Sun, Waves, Wind } from "lucide-react";

interface SurfCamp {
  name: string;
  location: string;
  image: string;
  price: string;
  rating: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  waveQuality: number;
  bestSeason: string;
}

const surfCamps: SurfCamp[] = [
  {
    name: "SANTA TERESA",
    location: "COSTA RICA",
    image:
      "https://images.pexels.com/photos/2516418/pexels-photo-2516418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$899",
    rating: 4.8,
    difficulty: "Beginner",
    waveQuality: 4,
    bestSeason: "Dec - Apr",
  },
  {
    name: "LOS CLAVOS",
    location: "NICARAGUA",
    image:
      "https://images.pexels.com/photos/3598176/pexels-photo-3598176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$799",
    rating: 4.7,
    difficulty: "Intermediate",
    waveQuality: 5,
    bestSeason: "Mar - Nov",
  },
  {
    name: "CANGGU",
    location: "BALI",
    image:
      "https://images.pexels.com/photos/16889718/pexels-photo-16889718/free-photo-of-waves-crashing-on-rocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$999",
    rating: 4.9,
    difficulty: "Advanced",
    waveQuality: 5,
    bestSeason: "Apr - Oct",
  },
  {
    name: "AHANGAMA",
    location: "SRI LANKA",
    image:
      "https://images.pexels.com/photos/16889718/pexels-photo-16889718/free-photo-of-waves-crashing-on-rocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$849",
    rating: 4.6,
    difficulty: "Intermediate",
    waveQuality: 4,
    bestSeason: "Nov - Apr",
  },
  {
    name: "ERICEIRA",
    location: "PORTUGAL",
    image:
      "https://images.pexels.com/photos/3155676/pexels-photo-3155676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$949",
    rating: 4.8,
    difficulty: "Advanced",
    waveQuality: 5,
    bestSeason: "Sep - May",
  },
];

export default function Locations() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="bg-[#FDF6EC] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Experience the Thrill of the Waves
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us for an unforgettable surfing adventure at our world-class
            camps. Whether you're a beginner or a pro, we have the perfect spot
            for you to catch the best waves and improve your skills.
          </p>
        </section>

        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-gray-600 mb-4">
            YOUR CHOICE - WHICH CAMP IS YOUR FLAVOUR?
          </h2>
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight"
          >
            SURF CAMPS - OUR MOST POPULAR
            <br />
            CAMPS 2024!
          </h1>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {surfCamps.map((camp, index) => (
                <motion.div
                  key={camp.name}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="relative group cursor-pointer overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="aspect-[3/4] relative">
                      <img
                        src={camp.image}
                        alt={`${camp.name} surf camp`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                        <h3
                          className="text-4xl font-bold mb-2 text-center"
                          style={{ fontFamily: "Brush Script MT, cursive" }}
                        >
                          {camp.name}
                        </h3>
                        <p className="text-2xl">{camp.location}</p>
                      </div>
                      <motion.div
                        className="absolute inset-0 flex flex-col justify-between p-6 text-white bg-black/60"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex justify-between items-start">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                            {camp.difficulty}
                          </span>
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                            {camp.price}
                          </span>
                        </div>
                        <div>
                          <div className="mt-2 flex items-center">
                            {"★".repeat(Math.floor(camp.rating))}
                            <span className="ml-2">{camp.rating}</span>
                          </div>
                          <p className="mt-2">
                            Wave Quality: {"🌊".repeat(camp.waveQuality)}
                          </p>
                          <p className="mt-2">Best Season: {camp.bestSeason}</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {surfCamps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        <section className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Sun className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Perfect Weather</h3>
            <p className="text-gray-700">
              Experience ideal surfing conditions with our carefully selected
              locations and seasons.
            </p>
          </div>
          <div className="text-center">
            <Waves className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">World-Class Waves</h3>
            <p className="text-gray-700">
              Ride some of the best waves the world has to offer, suitable for
              all skill levels.
            </p>
          </div>
          <div className="text-center">
            <Wind className="w-12 h-12 mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Instruction</h3>
            <p className="text-gray-700">
              Learn from our team of professional surfers and certified
              instructors.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
