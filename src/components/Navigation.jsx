import React from 'react';
import { 
  Home, 
  Info, 
  Settings, 
  FileText, 
  Download,
  Users,
  Building,
  Shield,
  ChevronRight,
  ChevronDown,
  DollarSign,
  Camera,
  HelpCircle,
  User,
  X,
  Menu,
  MapPin
} from 'lucide-react';

const Navigation = ({
  isMenuOpen,
  toggleMenu,
  currentPage,
  setCurrentPage,
  isServicesDropdownOpen,
  setIsServicesDropdownOpen,
  isAccountDropdownOpen,
  setIsAccountDropdownOpen,
  setCurrentServicePage,
  setCurrentAccountPage,
  showMeetingsDropdown,
  setShowMeetingsDropdown,
  setShowFaqPage,
  setShowOfficeStaffPage,
  setShowMigInformationPage,
  setShowMasterPlansPage,
  setShowGalleryPage,
  setShowDownloadsPage,
  setShowRtiPage,
  setShowAuthorityMeetingsPage,
  setShowExecutiveCommitteePage,
  setShowLtpPage,
  setShowLrsObjectionsPage,
  setShowLrsRegularisedPage,
  setShowApprovedLayoutsPage,
  setShowApprovedBuildingsPage,
  setShowUcimsBeforePage,
  setShowUcimsAfterPage,
  isAuthenticated,
  currentUser,
  handleLogout,
  openLoginModal
}) => {
  
  const resetAllPages = () => {
    setShowFaqPage(false);
    setShowOfficeStaffPage(false);
    setShowMigInformationPage(false);
    setShowMasterPlansPage(false);
    setShowGalleryPage(false);
    setShowDownloadsPage(false);
    setShowRtiPage(false);
    setShowAuthorityMeetingsPage(false);
    setShowExecutiveCommitteePage(false);
    setShowLtpPage(false);
    setShowLrsObjectionsPage(false);
    setShowLrsRegularisedPage(false);
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
    resetAllPages();
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    setCurrentPage('about');
    resetAllPages();
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg border-b-4 border-gradient-to-r from-green-600 to-blue-600 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-nowrap  w-full justify-center">
            <button onClick={handleHomeClick} className={`flex items-center space-x-2 px-4 py-3 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap ${currentPage === 'home' ? 'text-white bg-gradient-to-r from-green-600 to-green-700' : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700'}`}>
              <Home size={18} className="group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </button>
            
            <button onClick={handleAboutClick} className={`flex items-center space-x-2 px-4 py-3 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap ${currentPage === 'about' ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700' : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700'}`}>
              <Info size={18} className="group-hover:scale-110 transition-transform" />
              <span>About Us</span>
            </button>
            
            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button 
                onClick={() => {
                  setIsServicesDropdownOpen(!isServicesDropdownOpen);
                  resetAllPages();
                }}
                className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap"
              >
                <Settings size={18} className="group-hover:scale-110 transition-transform" />
                <span>Services</span>
                <ChevronRight size={14} className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-90' : ''}`} />
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  <button 
                    onClick={() => {
                      setCurrentPage('services');
                      setCurrentServicePage('town-planning');
                      setIsServicesDropdownOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-all duration-300 group text-left"
                  >
                    <Building size={18} className="text-purple-500" />
                    <span>Town Planning</span>
                  </button>
                  <button 
                    onClick={() => {
                      setCurrentPage('services');
                      setCurrentServicePage('engineering');
                      setIsServicesDropdownOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-300 group text-left"
                  >
                    <Settings size={18} className="text-blue-500" />
                    <span>Engineering</span>
                  </button>
                  <button 
                    onClick={() => {
                      setCurrentPage('services');
                      setCurrentServicePage('estate');
                      setIsServicesDropdownOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium transition-all duration-300 group text-left"
                  >
                    <MapPin size={18} className="text-green-500" />
                    <span>Estate</span>
                  </button>
                  <button 
                    onClick={() => {
                      setCurrentPage('services');
                      setCurrentServicePage('gos');
                      setIsServicesDropdownOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-all duration-300 group text-left"
                  >
                    <FileText size={18} className="text-orange-500" />
                    <span>G.O's</span>
                  </button>
                </div>
              )}
            </div>

            {/* Account Section Dropdown */}
            <div className="relative account-dropdown">
              <button 
                onClick={() => {
                  setIsAccountDropdownOpen(!isAccountDropdownOpen);
                  setShowFaqPage(false);
                  setShowGalleryPage(false);
                  setShowDownloadsPage(false);
                  setShowRtiPage(false);
                  setShowAuthorityMeetingsPage(false);
                  setShowExecutiveCommitteePage(false);
                  setShowLtpPage(false);
                  setShowLrsObjectionsPage(false);
                  setShowLrsRegularisedPage(false);
                }}
                className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-700 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap"
              >
                <DollarSign size={18} className="group-hover:scale-110 transition-transform" />
                <span>Account Section</span>
                <ChevronRight size={14} className={`transition-transform duration-300 ${isAccountDropdownOpen ? 'rotate-90' : ''}`} />
              </button>
              
              {isAccountDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  <button 
                    onClick={() => {
                      setCurrentPage('account');
                      setCurrentAccountPage('annual-budget');
                      setIsAccountDropdownOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 px-6 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 font-medium transition-all duration-300 group text-left"
                  >
                    <DollarSign size={18} className="text-emerald-500" />
                    <span>Annual Budget</span>
                  </button>
                  <button 
                    onClick={() => {
                      setCurrentPage('account');
                      setCurrentAccountPage('audit-reports');
                      setIsAccountDropdownOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 px-6 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 font-medium transition-all duration-300 group text-left"
                  >
                    <Shield size={18} className="text-emerald-500" />
                    <span>Audit Reports</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setShowDownloadsPage(true);
                setCurrentPage('');
                resetAllPages();
              }}
              className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-700 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap"
            >
              <Download size={18} className="group-hover:scale-110 transition-transform" />
              <span>Downloads</span>
            </button>
            
            <button 
              onClick={() => {
                setShowGalleryPage(true);
                setCurrentPage('');
                setShowFaqPage(false);
                setShowOfficeStaffPage(false);
                setShowMigInformationPage(false);
                setShowMasterPlansPage(false);
                setShowDownloadsPage(false);
                setShowRtiPage(false);
                setShowAuthorityMeetingsPage(false);
                setShowExecutiveCommitteePage(false);
                setShowLtpPage(false);
                setShowLrsObjectionsPage(false);
                setShowLrsRegularisedPage(false);
              }}
              className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap"
            >
              <Camera size={18} className="group-hover:scale-110 transition-transform" />
              <span>Gallery</span>
            </button>
            
            {/* Meetings Dropdown */}
            <div className="relative meetings-dropdown">
              <button 
                onClick={() => {
                  setShowMeetingsDropdown(!showMeetingsDropdown);
                  setShowFaqPage(false);
                  setShowOfficeStaffPage(false);
                  setShowMigInformationPage(false);
                  setShowMasterPlansPage(false);
                  setShowGalleryPage(false);
                  setShowDownloadsPage(false);
                  setShowRtiPage(false);
                  setShowLtpPage(false);
                  setShowLrsObjectionsPage(false);
                  setShowLrsRegularisedPage(false);
                }}
                className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap"
              >
                <Users size={18} className="group-hover:scale-110 transition-transform" />
                <span>Meetings</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${showMeetingsDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showMeetingsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <button
                    onClick={() => {
                      setShowAuthorityMeetingsPage(true);
                      setShowMeetingsDropdown(false);
                      setCurrentPage('');
                      setShowFaqPage(false);
                      setShowGalleryPage(false);
                      setShowDownloadsPage(false);
                      setShowRtiPage(false);
                      setShowExecutiveCommitteePage(false);
                      setShowLtpPage(false);
                      setShowLrsObjectionsPage(false);
                      setShowLrsRegularisedPage(false);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 flex items-center space-x-3"
                  >
                    <Users size={16} />
                    <span>Authority Meetings</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowExecutiveCommitteePage(true);
                      setShowMeetingsDropdown(false);
                      setCurrentPage('');
                      setShowFaqPage(false);
                      setShowGalleryPage(false);
                      setShowDownloadsPage(false);
                      setShowRtiPage(false);
                      setShowAuthorityMeetingsPage(false);
                      setShowLtpPage(false);
                      setShowLrsObjectionsPage(false);
                      setShowLrsRegularisedPage(false);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200 flex items-center space-x-3"
                  >
                    <Users size={16} />
                    <span>Executive Committee Meeting</span>
                  </button>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => {
                setShowRtiPage(true);
                setCurrentPage('');
                resetAllPages();
              }}
              className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap"
            >
              <FileText size={18} className="group-hover:scale-110 transition-transform" />
              <span>RTI</span>
            </button>
            
            <button 
              onClick={() => {
                setShowOfficeStaffPage(true);
                setCurrentPage('');
                setShowFaqPage(false);
                setShowRtiPage(false);
                setShowMigInformationPage(false);
                setShowMasterPlansPage(false);
                setShowGalleryPage(false);
                setShowDownloadsPage(false);
                setShowAuthorityMeetingsPage(false);
                setShowExecutiveCommitteePage(false);
                setShowLtpPage(false);
                setShowLrsObjectionsPage(false);
                setShowLrsRegularisedPage(false);
              }}
              className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap"
            >
              <Users size={18} className="group-hover:scale-110 transition-transform" />
              <span>Office staff</span>
            </button>
            
            <button 
              onClick={() => {
                setShowFaqPage(true);
                setCurrentPage('');
                setShowOfficeStaffPage(false);
                setShowMigInformationPage(false);
                setShowMasterPlansPage(false);
                setShowGalleryPage(false);
                setShowDownloadsPage(false);
                setShowRtiPage(false);
                setShowAuthorityMeetingsPage(false);
                setShowExecutiveCommitteePage(false);
                setShowLtpPage(false);
                setShowLrsObjectionsPage(false);
                setShowLrsRegularisedPage(false);
              }}
              className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap"
            >
              <HelpCircle size={18} className="group-hover:scale-110 transition-transform" />
              <span>FAQ's</span>
            </button>
            
            {/* Admin Login/Logout Button */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-2 ml-2">
                <span className="text-xs text-gray-600 whitespace-nowrap">Welcome, {currentUser?.name}</span>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-3 text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap"
                >
                  <X size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={openLoginModal}
                className="flex items-center space-x-2 px-4 py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-semibold transition-all duration-300 rounded-lg group ml-2 whitespace-nowrap"
              >
                <User size={18} className="group-hover:scale-110 transition-transform" />
                <span>Admin Login</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600 p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
