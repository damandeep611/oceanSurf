import { Globe, Menu } from "lucide-react"
import React from "react"

const Navigation: React.FC = () => {
  return(
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold">OceanSurf</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-600">Home</a>
            <a href="#" className="hover:text-gray-600">About Us</a>
            <a href="#" className="hover:text-gray-600">Tours</a>
            <a href="#" className="hover:text-gray-600">Prices</a>
            <a href="#" className="hover:text-gray-600">Reviews</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Globe size={20}/>
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-transparent hover:text-black border border-black">Contact Us</button>
          <button className="md:hidden">
            <Menu size={24}/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation