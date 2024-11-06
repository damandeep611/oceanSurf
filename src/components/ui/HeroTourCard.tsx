import { Star } from "lucide-react";
import React from "react";

interface TourCardProps {
  title: string;
  seatsAvailable: number;
  isNewLocation?: boolean;
  isNewOnTour?: boolean;
  thumbnails?: string[];
}

const HeroTourCard: React.FC<TourCardProps> = ({
  title,
  seatsAvailable,
  isNewLocation = false,
  isNewOnTour = false,
  thumbnails = [],
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">{title}</h2>
        <div className="flex items-center gap-1">
          <span className="text-lg">→</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5">
            <span className="text-2xl">⋯</span>
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-[-8px]">
          <div className="border-t border-gray-200 mx-[-16px]" />
        </div>
      </div>

      <div className="pt-4">
        <div className="space-y-2">
          <div className="text-sm text-gray-600 font-medium">
            {isNewLocation ? "New location" : "Seats are limited"}
            <br />
            HURRY UP!
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm">{seatsAvailable} seats</span>
          </div>
        </div>

        {thumbnails && thumbnails.length > 0 && (
          <div className="mt-4 flex gap-1">
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-14 h-12 object-cover rounded"
              />
            ))}
          </div>
        )}

        {!thumbnails?.length && (
          <div className="mt-4 flex gap-1">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="w-8 h-0.5 bg-gray-300 rounded-full" />
            ))}
          </div>
        )}

        {isNewOnTour && (
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-400 text-lg">*</span>
            <span className="text-xs text-gray-500">New on tour</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroTourCard;
