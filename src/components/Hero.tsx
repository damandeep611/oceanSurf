import React from "react";

import heroBg from '../assets/surfingimg.jpg'


const Hero: React.FC = () => {
  return(
    <div className="relative min-h-screen">
       
        <div className="absolute inset-0 bg-cover bg-center " style={{
          backgroundImage: `url(${heroBg})`,
          filter: 'brightness(0.8)'
        }} />
        <div className="relative container mx-auto px-4 pt-32">
          <div className="grid md:grid-cols-[1fr,400px] gap-8">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2">
                {['EXCURSION', 'LANDSCAPE', 'FASCINATINGLY', 'SCENERY', 'JOURNEY', 'TRAVEL', 'EXCITING'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xl text-white max-w-xl">
                Our mission is to make your trip unforgettable, comfortable and carefree.
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
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Tour Info</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">Relaxing Beaches</h4>
                      <span className="text-sm text-gray-500">11 seats</span>
                    </div>
                    <p className="text-sm text-red-500 font-medium">HURRY UP!</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">Natural Wonders</h4>
                      <span className="text-sm text-gray-500">23 seats</span>
                    </div>
                    <p className="text-sm text-red-500 font-medium">HURRY UP!</p>
                    <p className="text-sm text-gray-500 mt-2">New location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero