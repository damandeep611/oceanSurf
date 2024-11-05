import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

// You'll need to install these: npm install embla-carousel-react @types/react

interface Location {
  title: string;
  place: string;
  country: string;
  waveHeight: string;
  duration: string;
  image: string;
  joiners: Array<{ name: string; avatar: string }>;
}

const locations: Location[] = [
  {
    title: "Bukit peninsula",
    place: "Bali",
    country: "Indonesia",
    waveHeight: "12.8 ft",
    duration: "40 min",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSI5lPEDpXrYnnL3-ixD7PPr9H2BEM2ga7kw&s",
    joiners: Array(4).fill({ name: "User", avatar: "https://example.com/avatar.jpg" })
  },
  {
    title: "Lebloz",
    place: "Suza",
    country: "Jamaica",
    waveHeight: "12.8 ft",
    duration: "40 min",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8BSl9G7KXiAn1MGHTPBrlpz7Mguy23i74w&s",
    joiners: Array(4).fill({ name: "User", avatar: "https://example.com/avatar.jpg" })
  },
  
];

const Banner: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://example.com/wave-logo.png" alt="Wave Logo" className="w-8 h-8 rounded" />
          <span className="font-script text-2xl">Wave</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="font-medium">Home</a>
          <a href="/events" className="font-medium">Events</a>
          <a href="/mentor" className="font-medium">Mentor</a>
          <a href="/contact" className="font-medium">Contact us</a>
        </nav>
        <button className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <main className="container mx-auto px-4 grid md:grid-cols-2 gap-8 pt-8">
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VvdRBfkrocpWmVpokRDZwtj-rwVWQG_OJrb4lJI_68Da2TQYHrVgzVnAfT6C_FW2arc&usqp=CAU"
            alt="Surfer riding a wave"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="font-script text-7xl mb-4">Surfing</h1>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {Array(4).fill(0).map((_, i) => (
                  <img
                    key={i}
                    src="https://example.com/avatar.jpg"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span>are joining</span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <h2 className="text-xl font-medium">Hanalei Bay</h2>
              <div className="flex items-center gap-2">
                <img src="https://example.com/location-icon.png" alt="Location" className="w-4 h-4" />
                <span>Hawaii, USA</span>
              </div>
            </div>
            <button className="mt-4 bg-white text-black px-6 py-2 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Event tour
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-script text-4xl">Discover</h2>
            <div className="flex gap-2">
              <button
                className="p-2 border rounded"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={selectedIndex === 0}
              >
                {"<"}
              </button>
              <button
                className="p-2 border rounded"
                onClick={() => emblaApi?.scrollNext()}
                disabled={selectedIndex === locations.length - 1}
              >
                {">"}
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {locations.map((location, index) => (
                <div key={index} className="flex-[0_0_100%] max-w-sm p-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Banner;