# App.jsx Component Structure Guide

## Overview
The current App.jsx is 7824 lines and needs to be split into manageable components.

## ✅ Already Created Components:
1. **Header.jsx** - Top header with CM and Minister photos
2. **Navigation.jsx** - Main navigation bar with all menu items

## 📋 Recommended Component Structure:

### Core Layout Components
```
src/components/
├── Header.jsx ✅
├── Navigation.jsx ✅
├── Footer.jsx (lines 7500-7824)
└── MobileMenu.jsx (extracted from Navigation)
```

### Page Components
```
src/pages/
├── HomePage.jsx (lines 6556-6874 - Hero slider, services cards, map)
├── AboutPage.jsx (conditional render around line 1552)
├── ServicesPages/
│   ├── TownPlanningPage.jsx
│   ├── EngineeringPage.jsx
│   ├── EstatePage.jsx
│   └── GOsPage.jsx
├── AccountPages/
│   ├── AnnualBudgetPage.jsx
│   └── AuditReportsPage.jsx
├── DownloadsPage.jsx
├── GalleryPage.jsx
├── RTIPage.jsx
├── OfficeStaffPage.jsx
├── FAQPage.jsx
├── MeetingsPages/
│   ├── AuthorityMeetingsPage.jsx
│   └── ExecutiveCommitteePage.jsx
└── SpecialPages/
    ├── ApprovedLayoutsPage.jsx
    ├── ApprovedBuildingsPage.jsx
    ├── MIGInformationPage.jsx
    ├── MasterPlansPage.jsx
    ├── LTPPage.jsx
    ├── LRSObjectionsPage.jsx
    └── LRSRegularisedPage.jsx
```

### Modal/Popup Components
```
src/components/modals/
├── LoginModal.jsx
├── WelcomePopup.jsx
└── ImageModal.jsx
```

### Data/State Management
```
src/hooks/
├── useAuth.js (authentication logic)
├── useLocalStorage.js (localStorage operations)
└── usePageNavigation.js (page state management)

src/data/
├── initialData.js (all useState initial data)
├── estateLands.js (estate land data array)
└── heroSlides.js (slider images)
```

## 🔧 Step-by-Step Refactoring Process:

### Phase 1: Extract Static Data (RECOMMENDED START)
1. Move all large data arrays (lines 100-650) to separate files in `/src/data/`
2. Import them back into App.jsx
3. This alone will reduce App.jsx by ~500 lines

### Phase 2: Extract Modals
1. Create `LoginModal.jsx` with login form logic
2. Create `WelcomePopup.jsx` with welcome message
3. Create `ImageModal.jsx` for gallery image viewer

### Phase 3: Extract Pages
1. Start with simplest pages (FAQ, RTI, Downloads)
2. Pass required props (state, setState functions)
3. Move to complex pages (TownPlanning, Engineering)

### Phase 4: Extract Custom Hooks
1. Create `useAuth.js` for login/logout logic
2. Create `useLocalStorage.js` for data persistence
3. This will clean up useEffect logic in App.jsx

## 📦 Example Component Export Pattern:

### For Pages (HomePage example):
```jsx
// src/pages/HomePage.jsx
import React from 'react';
import { MapPin, Building, Shield, Globe, ChevronRight } from 'lucide-react';

const HomePage = ({ 
  heroSlides, 
  currentSlide, 
  setCurrentSlide,
  setCurrentPage,
  setCurrentServicePage,
  setShowApprovedLayoutsPage,
  setShowApprovedBuildingsPage,
  setShowUcimsBeforePage,
  setShowUcimsAfterPage,
  setShowLtpPage,
  setShowLrsObjectionsPage,
  setShowLrsRegularisedPage,
  setShowMigInformationPage,
  setShowMasterPlansPage
}) => {
  return (
    <div>
      {/* Hero Section */}
      {/* Services Cards */}
      {/* Map Section */}
      {/* Contact Section */}
    </div>
  );
};

export default HomePage;
```

### For Modals (LoginModal example):
```jsx
// src/components/modals/LoginModal.jsx
import React from 'react';
import { X, User, Lock } from 'lucide-react';

const LoginModal = ({ 
  isOpen, 
  onClose, 
  loginData, 
  setLoginData, 
  rememberMe, 
  setRememberMe, 
  handleLogin, 
  loginError 
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal content */}
    </div>
  );
};

export default LoginModal;
```

## 🎯 Quick Win Implementation:

### Minimal Refactor (Reduces to ~7000 lines)
```jsx
// src/App.jsx - Updated structure
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// ... all other imports

function App() {
  // All existing state declarations
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Navigation 
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        currentPage={currentPage}
        // ... pass all required props
      />
      
      {/* Existing page rendering logic */}
      {currentPage === 'home' && (
        // Existing home page JSX
      )}
      
      {currentPage === 'about' && (
        // Existing about page JSX
      )}
      
      {/* More conditional renders... */}
      
      <Footer />
      
      {/* Modals - can extract these next */}
      {isLoginModalOpen && (
        // Existing login modal JSX
      )}
    </div>
  );
}

export default App;
```

## ⚠️ Important Notes:

### Props Drilling Solution
- Currently requires passing many props down
- Consider using React Context API or state management library (Redux, Zustand)
- For now, props drilling is fine for quick refactor

### Testing After Each Component
1. Extract one component
2. Test full application
3. Commit changes
4. Move to next component

### State Management Considerations
- Keep complex state in App.jsx initially
- Only lift state to Context if prop drilling becomes unmaintainable
- Most state can stay local to App.jsx for now

## 🚀 Recommended Action Plan:

**Today** (Quick wins):
1. ✅ Header extracted
2. ✅ Navigation extracted
3. Create Footer component
4. Test that everything works

**Next Session**:
1. Extract LoginModal, WelcomePopup, ImageModal
2. Test authentication flow works
3. Commit

**Future Sessions**:
1. Extract HomePage (biggest visual impact)
2. Extract AboutPage
3. Extract other pages one by one
4. Create custom hooks for cleaner logic

---

**Current Status**: Header and Navigation components created. App.jsx can now import these to reduce size by ~400 lines. Need to update App.jsx imports and remove redundant code.
