import React from "react";

import heroBg from "../assets/surfnow.jpg";
import { Plus } from "lucide-react";
import HeroTourCard from "./ui/HeroTourCard";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen rounded-tl-[40px] rounded-tr-[40px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center m-4 border border-red-800 rounded-xl "
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "brightness(0.8)",
        }}
      />
      <div className="relative container mx-auto px-4 pt-32">
        <div className="grid md:grid-cols-[1fr,400px] gap-8 p-8">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              {[
                "EXCURSION",
                "LANDSCAPE",
                "FASCINATINGLY",
                "SCENERY",
                "JOURNEY",
                "TRAVEL",
                "EXCITING",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl text-white max-w-xl">
              Our mission is to make your trip unforgettable, comfortable and
              carefree.
            </p>
            <h1 className="text-6xl font-serif text-white space-y-4">
              <div>Unforgettable Trips</div>
              <div className="italic">To The Most Amazing</div>
              <div>Places In The World</div>
            </h1>
            <button className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90">
              Book A Tour
            </button>
            <p className="text-white/80">
              We have been organizing tours around the world for 10 years.
            </p>
          </div>

          {/* Tour Info Sidebar */}
          <div className="space-y-4">
            <div className="p-4">
              <div className="flex items-center justify-between backdrop-blur-lg rounded-xl p-4 text-2xl text-white font-semibold">
                <h3>Tour Info</h3>
                <Plus size={30} />
              </div>
              <div className="p-4 space-y-4">
                <HeroTourCard title="Relaxing Beaches" seatsAvailable={11} />
                <HeroTourCard
                  title="Natural Wonders"
                  seatsAvailable={23}
                  isNewLocation={true}
                  isNewOnTour={true}
                  thumbnails={[heroBg, heroBg, heroBg, heroBg]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero