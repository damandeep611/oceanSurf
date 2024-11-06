import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, MapPin, Calendar, Wind } from "lucide-react";

interface Location {
  title: string;
  place: string;
  country: string;
  waveHeight: string;
  duration: string;
  image: string;
  joiners: Array<{ name: string; avatar: string }>;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  bestTime: string;
  maxCapacity: number;
  currentJoiners: number;
  description: string;
  nextEvent: string;
}

const locations: Location[] = [
  {
    title: "Bukit peninsula",
    place: "Bali",
    country: "Indonesia",
    waveHeight: "12.8 ft",
    duration: "40 min",
    image: "/api/placeholder/800/600",
    joiners: Array(4).fill({
      name: "User",
      avatar: "/api/placeholder/50/50",
    }),
    difficulty: "Intermediate",
    bestTime: "April to October",
    maxCapacity: 12,
    currentJoiners: 4,
    description:
      "Experience world-class waves at Bukit Peninsula, known for its perfect barrels and consistent swells. Ideal for intermediate to advanced surfers.",
    nextEvent: "2024-04-15",
  },
  {
    title: "Lebloz",
    place: "Suza",
    country: "Jamaica",
    waveHeight: "12.8 ft",
    duration: "40 min",
    image: "/api/placeholder/800/600",
    joiners: Array(4).fill({
      name: "User",
      avatar: "/api/placeholder/50/50",
    }),
    difficulty: "Advanced",
    bestTime: "May to September",
    maxCapacity: 8,
    currentJoiners: 3,
    description:
      "Discover the hidden gems of Jamaica's surfing scene with perfect waves and tropical atmosphere.",
    nextEvent: "2024-05-01",
  },
  {
    title: "Nazaré",
    place: "Nazaré",
    country: "Portugal",
    waveHeight: "20.0 ft",
    duration: "50 min",
    image: "/api/placeholder/800/600",
    joiners: Array(4).fill({
      name: "User",
      avatar: "/api/placeholder/50/50",
    }),
    difficulty: "Advanced",
    bestTime: "October to March",
    maxCapacity: 6,
    currentJoiners: 2,
    description:
      "Home to some of the biggest waves in the world, Nazaré offers an unforgettable experience for advanced surfers.",
    nextEvent: "2024-06-01",
  },
];

const TravelSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handlePrevClick = () => {
    setSelectedIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
    setIsImageLoaded(false);
  };

  const handleNextClick = () => {
    setSelectedIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
    setIsImageLoaded(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 pt-8">
        {/* Enhanced Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[700px] rounded-xl overflow-hidden shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isImageLoaded ? 1 : 0 }}
            className="absolute inset-0"
          >
            <img
              src={locations[selectedIndex].image}
              alt={locations[selectedIndex].title}
              className="w-full h-full object-cover"
              onLoad={() => setIsImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h1 className="text-5xl font-bold mb-2">
                    {locations[selectedIndex].title}
                  </h1>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>
                      {locations[selectedIndex].place},{" "}
                      {locations[selectedIndex].country}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Wind className="h-5 w-5" />
                        <span>Wave Height</span>
                      </div>
                      <p className="text-2xl font-bold mt-1">
                        {locations[selectedIndex].waveHeight}
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        <span>Capacity</span>
                      </div>
                      <p className="text-2xl font-bold mt-1">
                        {locations[selectedIndex].currentJoiners}/
                        {locations[selectedIndex].maxCapacity}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-4">
                    <h3 className="font-semibold mb-2">About</h3>
                    <p className="text-sm opacity-90">
                      {locations[selectedIndex].description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>
                        Next Event:{" "}
                        {new Date(
                          locations[selectedIndex].nextEvent
                        ).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="px-4 py-1 bg-blue-500 rounded-full text-sm">
                      {locations[selectedIndex].difficulty}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 bg-white text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Users className="h-5 w-5" />
                    Join Event
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side content */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-script text-4xl">Discover</h2>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 border rounded"
                onClick={handlePrevClick}
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
                onClick={handleNextClick}
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

          <div className="grid gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg cursor-pointer ${
                  selectedIndex === index ? "ring-2 ring-white" : ""
                }`}
                onClick={() => {
                  setSelectedIndex(index);
                  setIsImageLoaded(false);
                }}
              >
                <img
                  src={location.image}
                  alt={location.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
