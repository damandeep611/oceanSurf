import React, { useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";

interface Location {
  title: string;
  place: string;
  country: string;
  waveHeight: string;
  duration: string;
  image: string;
  joiners: Array<{ name: string; avatar: string }>;
}

interface WaveForecast {
  day: string;
  waveHeight: number;
  windSpeed: number;
  temprature: number;
}

const locations: Location[] = [
  {
    title: "Bukit peninsula",
    place: "Bali",
    country: "Indonesia",
    waveHeight: "12.8 ft",
    duration: "40 min",
    image:
      "https://images.pexels.com/photos/4014610/pexels-photo-4014610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    joiners: Array(4).fill({
      name: "User",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzapw3WvNto-XDoNE0acsWWG0yIKmbA8-Q_Q&s",
    }),
  },
  {
    title: "Lebloz",
    place: "Suza",
    country: "Jamaica",
    waveHeight: "12.8 ft",
    duration: "40 min",
    image:
      "https://media.istockphoto.com/id/186123880/photo/close-up-of-a-surfer-riding-a-large-blue-wave.jpg?s=612x612&w=0&k=20&c=n9EYTgDDeF_RO7TmHG9TlBGrnAXjEML5rB_ql5xFtp0=",
    joiners: Array(4).fill({
      name: "User",
      avatar:
        "https://img.freepik.com/premium-photo/surfing-woman-happy-full-body-shot-with-realistic-sea-background_1161356-35785.jpg",
    }),
  },
  {
    title: "Nazaré",
    place: "Nazaré",
    country: "Portugal",
    waveHeight: "20.0 ft",
    duration: "50 min",
    image:
      "https://images.pexels.com/photos/4014610/pexels-photo-4014610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    joiners: Array(4).fill({
      name: "User",
      avatar: "https://example.com/avatar.jpg",
    }),
  },
];

const waveForecast: WaveForecast[] = [
  { day: "Mon", waveHeight: 5.2, windSpeed: 10, temprature: 28 },
  { day: "Tue", waveHeight: 6.8, windSpeed: 12, temprature: 27 },
  { day: "Wed", waveHeight: 4.5, windSpeed: 8, temprature: 29 },
  { day: "Thu", waveHeight: 7.2, windSpeed: 15, temprature: 26 },
  { day: "Fri", waveHeight: 5.9, windSpeed: 11, temprature: 28 },
];

const TravelSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedForecastDay, setSelectedForecastDay] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* left big card */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-lg overflow-hidden"
        >
          <img
            src={locations[selectedIndex].image}
            alt="Surfing offers"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-md">
            <div className="absolute top-10 left-8 text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-7xl mb-4"
              >
                {locations[selectedIndex].title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="flex -space-x-2">
                  {locations[selectedIndex].joiners.map((joiner, i) => (
                    <img
                      key={i}
                      src={joiner.avatar}
                      alt={`${joiner.name}'s avatar`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span>are Joining</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-4 flex items-center gap-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  {locations[selectedIndex].place},{" "}
                  {locations[selectedIndex].country}
                </span>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-white text-black px-6 py-2 rounded-full flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Event tour
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* left card contaiing discover and weather report */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-script text-4xl">Discover</h2>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 border rounded"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={selectedIndex === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 border rounded"
                onClick={() => emblaApi?.scrollNext()}
                // disabled={selectedIndex === locations.length - 1} this will diable the infinite loop and only slide till the lenght of the slider
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex-[0_0_100%] max-w-sm p-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg"
                >
                  <img
                    src={location.image}
                    alt={location.title}
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="text-white">
                    <h3 className="text-xl font-medium">{location.title}</h3>
                    <p className="text-sm opacity-80">
                      {location.place}, {location.country}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm opacity-80">Wave Size</p>
                        <p className="font-medium">{location.waveHeight}</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-80">Duration</p>
                        <p className="font-medium">{location.duration}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {location.joiners.map((joiner, i) => (
                          <img
                            key={i}
                            src={joiner.avatar}
                            alt={`${joiner.name}'s avatar`}
                            className="w-8 h-8 rounded-full border-2 border-white"
                          />
                        ))}
                      </div>
                      <span className="text-sm">are joining</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* wave forecast cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="font-semibold text-3xl mb-4">Wave Forecast</h3>
            <div className="flex justify-between mb-4">
              {waveForecast.map((day, index) => (
                <motion.button
                  key={day.day}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-3 py-2 rounded-full ${
                    selectedForecastDay === index
                      ? "bg-blue-500"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedForecastDay(index)}
                >
                  {day.day}
                </motion.button>
              ))}
            </div>
            {/* below div showing forecast when a day is clicked */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedForecastDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-3 gap-4"
              >
                <div className="text-center">
                  <p className="text-sm text-gray-500">Wave Height</p>
                  <p className="text-2xl font-bold">
                    {waveForecast[selectedForecastDay].waveHeight}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Wind Speed</p>
                  <p className="text-2xl font-bold">
                    {waveForecast[selectedForecastDay].windSpeed}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Temprature</p>
                  <p className="text-2xl font-bold">
                    {waveForecast[selectedForecastDay].temprature}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6">
              <motion.svg
                width="100%"
                height="80"
                viewBox="0 0 100 20"
                initial="hidden"
                animate="visible"
              >
                <motion.path
                  d="M 0 10 Q 25 0, 50 10 T 100 10"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="0.5"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 1,
                      transition: {
                        pathLength: { duration: 2, ease: "easeInOut" },
                        opacity: { duration: 0.5 },
                      },
                    },
                  }}
                />
              </motion.svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelSection;
