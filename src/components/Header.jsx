import React from 'react';
import cmPhoto from "../assets/cm.png";
import ministerPhoto from "../assets/minister-sir.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-800 via-blue-800 to-orange-600 text-white py-6 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left - CM Photo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src={cmPhoto} 
                alt="Hon'ble Chief Minister" 
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover ring-4 ring-white/30"
              />
            </div>
            <div className="text-sm">
              <p className="font-bold text-lg">Hon'ble Chief Minister</p>
              <p className="text-xs opacity-90 font-medium">Government of Andhra Pradesh</p>
            </div>
          </div>

          {/* Center - Logo and Title */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <h1 className="text-xl font-bold leading-tight mb-1">
                అనంతపురము-హిందూపూర్ పట్టణ అభివృద్ధి అథారిటీ
              </h1>
              <h2 className="text-base font-semibold opacity-95">
                Ananthapuramu–Hindupur Urban Development Authority
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-green-400 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>

          {/* Right - Minister Photo */}
          <div className="flex items-center space-x-4">
            <div className="text-sm text-right">
              <p className="font-bold text-lg">Hon'ble Minister</p>
              <p className="text-xs opacity-90 font-medium">MA&UD, Andhra Pradesh</p>
            </div>
            <div className="relative">
              <img 
                src={ministerPhoto} 
                alt="Hon'ble Minister MA&UD" 
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover ring-4 ring-white/30"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
