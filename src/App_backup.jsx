import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  Settings, 
  Bell, 
  FileText, 
  Download, 
  Phone,
  MapPin,
  Mail,
  Clock,
  Users,
  Building,
  Shield,
  AlertTriangle,
  ChevronRight,
  Calendar,
  Award,
  Target,
  Zap,
  Globe,
  Heart
} from 'lucide-react';
import cmPhoto from "./assets/cm.png";
import ministerPhoto from "./assets/minister-sir.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg",
      title: "Building Tomorrow's Cities Today",
      subtitle: "Sustainable Urban Development for Ananthapuramu–Hindupur"
    },
    {
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
      title: "Smart Infrastructure Solutions",
      subtitle: "Modern amenities for a better quality of life"
    },
    {
      image: "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg",
      title: "Green Urban Planning",
      subtitle: "Eco-friendly development for future generations"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderPageContent = () => {
    if (currentPage === 'about') {
      return (
        <div>
          {/* About Us Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">About AHUDA</h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Ananthapuramu–Hindupur Urban Development Authority
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Formation & Purpose Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">AHUDA Formation</h2>
                    <div className="space-y-6 text-gray-600 leading-relaxed">
                      <p className="text-lg">
                        The Ananthapuramu–Hindupur Urban Development Authority (AHUDA) was established under the Andhra Pradesh Urban Development Authorities Act, 1987, to promote planned and sustainable urban development in the twin cities of Ananthapuramu and Hindupur.
                      </p>
                      <p>
                        AHUDA was constituted with the vision of transforming the urban landscape of these historic cities while preserving their cultural heritage and ensuring balanced growth that benefits all residents.
                      </p>
                      <p>
                        The Authority operates under the administrative control of the Municipal Administration & Urban Development Department, Government of Andhra Pradesh, and works in coordination with local municipal bodies and other government agencies.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Building className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Established Under</h3>
                      <p className="text-gray-600 font-medium">AP Urban Development Authorities Act, 1987</p>
                      <div className="mt-6 space-y-3">
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                          <p className="font-semibold text-blue-600">Coverage Area</p>
                          <p className="text-gray-700">Ananthapuramu & Hindupur</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                          <p className="font-semibold text-green-600">Administrative Control</p>
                          <p className="text-gray-700">MA&UD Department, AP</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Purpose & Objectives Section */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Purpose & Objectives</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Urban Planning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Prepare comprehensive development plans and master plans for orderly growth and development of urban areas.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Land Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Acquire, develop and dispose of land for residential, commercial, industrial and public purposes.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Infrastructure</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Develop essential infrastructure including roads, water supply, drainage, and public amenities.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Regulation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Regulate construction activities and ensure compliance with building bylaws and development regulations.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Public Welfare</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Promote public health, safety, convenience and general welfare of residents in urban areas.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainable Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensure environmentally sustainable and economically viable urban development practices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Roles & Functions Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Roles & Functions</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
                  <p className="text-gray-600 mt-4 text-lg">Key responsibilities and operational functions of AHUDA</p>
                </div>

                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <FileText className="w-6 h-6 text-green-600 mr-3" />
                      Planning & Development
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        Preparation of Master Plans and Zonal Development Plans
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        Layout approvals and building permission processes
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        Land use planning and zoning regulations
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <Building className="w-6 h-6 text-blue-600 mr-3" />
                      Infrastructure Development
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        Development of roads, drainage and water supply systems
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        Creation of parks, playgrounds and public spaces
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        Urban beautification and landscape development
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border-l-4 border-orange-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <Shield className="w-6 h-6 text-orange-600 mr-3" />
                      Regulatory Functions
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
                        Enforcement of building bylaws and development regulations
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
                        Issue of No Objection Certificates (NOCs)
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
                        Monitoring and control of unauthorized constructions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Default home page content
    return (
      <div>
        {/* Hero Section with Slider */}
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl animate-fade-in">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-3xl mb-10 drop-shadow-lg opacity-95 font-light">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform">
                  Explore AHUDA Services
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-2xl hover:scale-105 transform">
                  View Master Plan
                </button>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Location & Overview Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Location & Development Overview</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 text-lg">Explore our development area and watch our progress</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Interactive Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
                  <h3 className="font-bold text-xl flex items-center">
                    <MapPin className="w-6 h-6 mr-3" />
                    Development Area Map
                  </h3>
                  <p className="text-green-100 mt-2">Interactive map of Ananthapuramu–Hindupur region</p>
                </div>
                <div className="h-96 relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.2273!3d14.6819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14bb47b1b5e4f%3A0x6b6b6b6b6b6b6b6b!2sAnantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1642678901234!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ananthapuramu Development Area"
                    className="group-hover:scale-105 transition-transform duration-500"
                  ></iframe>
                </div>
              </div>

              {/* YouTube Video */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <h3 className="font-bold text-xl flex items-center">
                    <Building className="w-6 h-6 mr-3" />
                    Development Overview
                  </h3>
                  <p className="text-blue-100 mt-2">Watch our urban development journey</p>
                </div>
                <div className="h-96 relative overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/y8eilIjJ9gI"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="AHUDA Development Overview"
                    className="group-hover:scale-105 transition-transform duration-500"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Essential Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 text-lg">Access important government portals and services</p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
              {/* Approved Layouts */}
              <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 min-w-[280px]">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Approved Layouts</h3>
                  <p className="text-green-100 text-sm text-center">View all approved layout plans and development schemes</p>
                </div>
              </button>
              
              {/* UCIMS */}
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 min-w-[280px]">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">UCIMS</h3>
                  <p className="text-blue-100 text-sm text-center">Urban Community Information Management System</p>
                </div>
              </button>
              
              {/* ULIMS */}
              <button className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-12 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 min-w-[280px]">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">ULIMS</h3>
                  <p className="text-purple-100 text-sm text-center">Urban Land Information Management System</p>
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
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

      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg border-b-4 border-gradient-to-r from-green-600 to-blue-600 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1 w-full justify-center">
              <button onClick={() => setCurrentPage('home')} className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-all duration-300 rounded-lg group ${currentPage === 'home' ? 'text-white bg-gradient-to-r from-green-600 to-green-700' : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700'}`}>
                <Home size={20} className="group-hover:scale-110 transition-transform" />
                <span>Home</span>
              </button>
              <button onClick={() => setCurrentPage('about')} className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-all duration-300 rounded-lg group ${currentPage === 'about' ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700' : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700'}`}>
                <Info size={20} className="group-hover:scale-110 transition-transform" />
                <span>About Us</span>
              </button>
              <a href="#" className="flex items-center space-x-2 px-6 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 font-semibold transition-all duration-300 rounded-lg group">
                <Settings size={20} className="group-hover:scale-110 transition-transform" />
                <span>Services</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-6 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-700 font-semibold transition-all duration-300 rounded-lg group">
                <Bell size={20} className="group-hover:scale-110 transition-transform" />
                <span>Notifications</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-6 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 font-semibold transition-all duration-300 rounded-lg group">
                <FileText size={20} className="group-hover:scale-110 transition-transform" />
                <span>Tenders</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-6 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-700 font-semibold transition-all duration-300 rounded-lg group">
                <Download size={20} className="group-hover:scale-110 transition-transform" />
                <span>Downloads</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-6 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700 font-semibold transition-all duration-300 rounded-lg group">
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600 p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t bg-white shadow-lg">
              <div className="flex flex-col space-y-2">
                <button onClick={() => {setCurrentPage('home'); setIsMenuOpen(false);}} className={`flex items-center space-x-3 px-4 py-3 font-medium rounded-lg transition-all ${currentPage === 'home' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}>
                  <Home size={20} />
                  <span>Home</span>
                </button>
                <button onClick={() => {setCurrentPage('about'); setIsMenuOpen(false);}} className={`flex items-center space-x-3 px-4 py-3 font-medium rounded-lg transition-all ${currentPage === 'about' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}>
                  <Info size={20} />
                  <span>About Us</span>
                </button>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-all">
                  <Settings size={20} />
                  <span>Services</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium rounded-lg transition-all">
                  <Bell size={20} />
                  <span>Notifications</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium rounded-lg transition-all">
                  <FileText size={20} />
                  <span>Tenders</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium rounded-lg transition-all">
                  <Download size={20} />
                  <span>Downloads</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 font-medium rounded-lg transition-all">
                  <Phone size={20} />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {renderPageContent()}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/image.png" 
            alt="AP State Emblem" 
            className="w-96 h-96 mx-auto mt-16 object-contain"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-xl mb-6 text-green-400">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  About AHUDA
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Our Services
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Current Tenders
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                  <span>AHUDA Office, Ananthapuramu<br />Andhra Pradesh - 515001</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-green-400" />
                  <span>1800-XXX-XXXX</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-orange-400" />
                  <span>info@ahuda.gov.in</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-6 text-orange-400">Office Hours</h3>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-orange-400" />
                  <span>Mon - Fri: 10:00 AM - 5:00 PM</span>
                </p>
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-orange-400" />
                  <span>Saturday: 10:00 AM - 2:00 PM</span>
                </p>
                <p className="text-sm text-gray-400 mt-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Closed on Sundays & Holidays
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6 text-purple-400">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Globe className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Phone className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Follow us for the latest updates on urban development projects and initiatives.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                © 2025 Ananthapuramu–Hindupur Urban Development Authority. All Rights Reserved.
              </p>
              <div className="flex items-center mt-4 md:mt-0 space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
