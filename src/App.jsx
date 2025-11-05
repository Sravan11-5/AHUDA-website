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
  ChevronDown,
  Calendar,
  Award,
  Target,
  Zap,
  Globe,
  Heart,
  Upload,
  CheckCircle,
  XCircle,
  Eye,
  User,
  Plus,
  DollarSign,
  Camera,
  HelpCircle,
  Search
} from 'lucide-react';
import cmPhoto from "./assets/cm.png";
import ministerPhoto from "./assets/minister-sir.png";
import ahudaSlide1 from "./assets/Ahuda slide -1.jpg";
import ahudaSlide2 from "./assets/Ahuda slide-2.jpeg";
import ahudaSlide3 from "./assets/Ahuda slide -3.jpg";
import ahudaSlide4 from "./assets/Ahuda slide-4.jpeg";
import adminCredentials from "./admin-credentials.json";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [currentServicePage, setCurrentServicePage] = useState(null);
  const [currentAccountPage, setCurrentAccountPage] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [showApprovedLayoutsTable, setShowApprovedLayoutsTable] = useState(false);
  const [approvedLayoutsData, setApprovedLayoutsData] = useState([]);
  const [isAddingNewLayout, setIsAddingNewLayout] = useState(false);
  const [isEditingLayout, setIsEditingLayout] = useState(false);
  const [editingLayoutId, setEditingLayoutId] = useState(null);
  const [isEditingBuilding, setIsEditingBuilding] = useState(false);
  const [editingBuildingId, setEditingBuildingId] = useState(null);
  const [newLayoutData, setNewLayoutData] = useState({
    layoutDeveloper: '',
    extentLocation: '',
    flpProceedings: ''
  });
  const [showUnauthorizedPriorDocuments, setShowUnauthorizedPriorDocuments] = useState(false);
  const [showUnauthorizedAfterDocuments, setShowUnauthorizedAfterDocuments] = useState(false);
  const [showUnapprovedBuildingsDocuments, setShowUnapprovedBuildingsDocuments] = useState(false);
  const [showApprovedLayoutsPage, setShowApprovedLayoutsPage] = useState(false);
  const [showApprovedBuildingsPage, setShowApprovedBuildingsPage] = useState(false);
  const [approvedBuildingsData, setApprovedBuildingsData] = useState([]);
  const [isAddingNewBuilding, setIsAddingNewBuilding] = useState(false);
  const [newBuildingData, setNewBuildingData] = useState({
    developer: '',
    extentLocation: '',
    flpProceedings: ''
  });
  const [showEngineeringPage, setShowEngineeringPage] = useState(false);
  const [showCompletedWorksPage, setShowCompletedWorksPage] = useState(false);
  const [showWorksUnderProgressPage, setShowWorksUnderProgressPage] = useState(false);
  const [completedWorksData, setCompletedWorksData] = useState([]);
  const [worksUnderProgressData, setWorksUnderProgressData] = useState([]);
  const [isAddingNewCompletedWork, setIsAddingNewCompletedWork] = useState(false);
  const [isAddingNewProgressWork, setIsAddingNewProgressWork] = useState(false);
  const [newCompletedWorkData, setNewCompletedWorkData] = useState({
    nameOfWork: '',
    estCost: '',
    remarks: ''
  });
  const [newProgressWorkData, setNewProgressWorkData] = useState({
    nameOfWork: '',
    estCost: '',
    remarks: ''
  });
  const [showLandBankPage, setShowLandBankPage] = useState(false);
  const [landBankData, setLandBankData] = useState([
    // Anantapuramu Town
    {
      id: 1,
      sno: 1,
      surveyNo: 'TS No 2019-1',
      location: 'Anantapuramu Town',
      area: '0.60 acres',
      landType: 'MusafariBangalow',
      remarks: 'The District Collector, Ananthapuramu has issued Advance possession orders for construction of the AHUDA building vide Rc E3/23523/2018 dtd 17-11-2018 and the Tahsildar, Anantapuramu has handed over the possession of the land.'
    },
    // Gorantla Mandal, Palasamudram Village
    {
      id: 2,
      sno: 2,
      surveyNo: '129',
      location: 'Gorantla Mandal, Palasamudram Village',
      area: '8.00 acres',
      landType: 'Dandudigesthalamu (GP)',
      remarks: 'The District Collector, Anantapuramu has submitted alienation proposals to the CCLA, AP, Vijayawada vide ref No Rc NO E6/23853/2018 Dated 29-04-2019'
    },
    {
      id: 3,
      sno: 3,
      surveyNo: '130',
      location: 'Gorantla Mandal, Palasamudram Village',
      area: '15.00 acres',
      landType: 'Dandudigesthalamu (GP)',
      remarks: 'The District Collector, Anantapuramu has submitted alienation proposals to the CCLA, AP, Vijayawada vide ref No Rc NO E6/23853/2018 Dated 29-04-2019'
    },
    {
      id: 4,
      sno: 4,
      surveyNo: '131-1',
      location: 'Gorantla Mandal, Palasamudram Village',
      area: '6.77 acres',
      landType: 'Dandudigesthalamu (GP)',
      remarks: 'The District Collector, Anantapuramu has submitted alienation proposals to the CCLA, AP, Vijayawada vide ref No Rc NO E6/23853/2018 Dated 29-04-2019'
    },
    // Penukonda Mandal, Erramanchi Village
    {
      id: 5,
      sno: 5,
      surveyNo: '60',
      location: 'Penukonda Mandal, Erramanchi Village',
      area: '12.37 acres',
      landType: 'G.U.',
      remarks: 'The District Collector, Anantapuramu has submitted alienation proposals to CCLA, AP, Vijayawada. The CCLA,AP, Vijayawada vide coll\'sRc No E6/19606/2018 Dated 15.12.2018'
    },
    // Penukonda Mandal, Penukonda Village
    {
      id: 6,
      sno: 6,
      surveyNo: '228-2B',
      location: 'Penukonda Mandal, Penukonda Village',
      area: '4.46 acres',
      landType: 'AW',
      remarks: 'The District Collector, Anantapuramu has submitted alienation proposals to CCLA, AP, Vijayawada. The CCLA,AP, Vijayawada'
    },
    {
      id: 7,
      sno: 7,
      surveyNo: '262',
      location: 'Penukonda Mandal, Penukonda Village',
      area: '16.24 acres',
      landType: 'AW',
      remarks: 'The District Collector, Anantapuramu has submitted alienation proposals to CCLA, AP, Vijayawada. The CCLA,AP, Vijayawada'
    },
    {
      id: 8,
      sno: 8,
      surveyNo: '263-1',
      location: 'Penukonda Mandal, Penukonda Village',
      area: '3.04 acres',
      landType: 'AW',
      remarks: 'The District Collector, Anantapuramu has submitted alienation proposals to CCLA, AP, Vijayawada. The CCLA,AP, Vijayawada'
    },
    {
      id: 9,
      sno: 9,
      surveyNo: '263-2A',
      location: 'Penukonda Mandal, Penukonda Village',
      area: '3.41 acres',
      landType: 'AW',
      remarks: 'The District Collector, Anantapuramu has submitted alienation proposals to CCLA, AP, Vijayawada. The CCLA,AP, Vijayawada'
    },
    {
      id: 10,
      sno: 10,
      surveyNo: '263-2B',
      location: 'Penukonda Mandal, Penukonda Village',
      area: '1.99 acres',
      landType: 'AW',
      remarks: 'The District Collector, Anantapuramu has submitted alienation proposals to CCLA, AP, Vijayawada. The CCLA,AP, Vijayawada'
    },
    // Bukkaraya Samudram Village & Mandal
    {
      id: 11,
      sno: 11,
      surveyNo: '2-7A',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.63 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 12,
      sno: 12,
      surveyNo: '2-9A',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.48 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 13,
      sno: 13,
      surveyNo: '2-10A',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.49 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 14,
      sno: 14,
      surveyNo: '2-11',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.50 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 15,
      sno: 15,
      surveyNo: '2-12',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.50 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 16,
      sno: 16,
      surveyNo: '2-13',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.50 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 17,
      sno: 17,
      surveyNo: '2-14',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.40 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 18,
      sno: 18,
      surveyNo: '2-17',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.40 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 19,
      sno: 19,
      surveyNo: '2-18',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.40 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 20,
      sno: 20,
      surveyNo: '2-19',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.40 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 21,
      sno: 21,
      surveyNo: '2-20',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.40 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 22,
      sno: 22,
      surveyNo: '2-21',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.31 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 23,
      sno: 23,
      surveyNo: '2-22',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.31 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 24,
      sno: 24,
      surveyNo: '2-23',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.31 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 25,
      sno: 25,
      surveyNo: '2-24',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.31 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 26,
      sno: 26,
      surveyNo: '2-25',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.31 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 27,
      sno: 27,
      surveyNo: '2-26',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.31 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    },
    {
      id: 28,
      sno: 28,
      surveyNo: '2-27',
      location: 'Bukkaraya Samudram Village & Mandal',
      area: '0.31 acres',
      landType: 'Revenue Village',
      remarks: 'Bukkarayasamudram Revenue Village land parcel'
    }
  ]);
  const [isAddingNewLandBank, setIsAddingNewLandBank] = useState(false);
  const [newLandBankData, setNewLandBankData] = useState({
    surveyNo: '',
    location: '',
    area: '',
    landType: '',
    remarks: ''
  });

  // GO's related state variables
  const [currentGoPage, setCurrentGoPage] = useState(null); // 'gos' or 'memos'
  const [gosData, setGosData] = useState([]);
  const [memosData, setMemosData] = useState([]);
  const [isAddingNewGo, setIsAddingNewGo] = useState(false);
  const [isAddingNewMemo, setIsAddingNewMemo] = useState(false);
  const [newGoData, setNewGoData] = useState({
    title: '',
    goNumber: '',
    date: '',
    department: '',
    description: '',
    file: null,
    fileName: ''
  });
  const [newMemoData, setNewMemoData] = useState({
    title: '',
    memoNumber: '',
    date: '',
    department: '',
    description: '',
    file: null,
    fileName: ''
  });

  // Account Section related state variables
  const [budgetData, setBudgetData] = useState([]);
  const [auditData, setAuditData] = useState([]);
  const [isAddingNewBudget, setIsAddingNewBudget] = useState(false);
  const [isAddingNewAudit, setIsAddingNewAudit] = useState(false);
  const [newBudgetData, setNewBudgetData] = useState({
    financialYear: '',
    budgetType: '',
    description: '',
    file: null,
    fileName: ''
  });
  const [newAuditData, setNewAuditData] = useState({
    auditPeriod: '',
    reportType: '',
    description: '',
    file: null,
    fileName: ''
  });

  // Downloads Section related state variables
  const [showDownloadsPage, setShowDownloadsPage] = useState(false);
  const [uploadsData, setUploadsData] = useState([]);

  // Gallery Section related state variables
  const [showGalleryPage, setShowGalleryPage] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // FAQ Section related state variables
  const [showFaqPage, setShowFaqPage] = useState(false);
  
    // Office Staff Section related state variables
    const [showOfficeStaffPage, setShowOfficeStaffPage] = useState(false);
    const [officeStaffData, setOfficeStaffData] = useState([]);
    const [staffSearchQuery, setStaffSearchQuery] = useState('');
    const [newStaffData, setNewStaffData] = useState({
      name: '',
      designation: '',
      contactDetails: '',
      image: null,
      imageUrl: ''
    });  const [showMeetingsDropdown, setShowMeetingsDropdown] = useState(false);
  const [showAuthorityMeetingsPage, setShowAuthorityMeetingsPage] = useState(false);
  const [showExecutiveCommitteePage, setShowExecutiveCommitteePage] = useState(false);
  
  // Authority Meetings data and state
  const [authorityMeetingsData, setAuthorityMeetingsData] = useState([]);
  const [newAuthorityMeetingData, setNewAuthorityMeetingData] = useState({
    meetingNo: '',
    dateOfMeeting: '',
    resolutionFile: null,
    resolutionFileName: ''
  });
  
  // Executive Committee Meetings data and state
  const [executiveCommitteeMeetingsData, setExecutiveCommitteeMeetingsData] = useState([]);
  const [newExecutiveMeetingData, setNewExecutiveMeetingData] = useState({
    meetingNo: '',
    dateOfMeeting: '',
    resolutionFile: null,
    resolutionFileName: ''
  });
  
  // MIG Information data and state
  const [showMigInformationPage, setShowMigInformationPage] = useState(false);
  const [migInformationData, setMigInformationData] = useState([]);
  const [newMigData, setNewMigData] = useState({
    layoutName: '',
    ratePerSqYard: '',
    totalPlots: '',
    allottedPlotDetails: '',
    availablePlots: '',
    layoutCopy: ''
  });
  
  // Master Plans data and state
  const [showMasterPlansPage, setShowMasterPlansPage] = useState(false);
  const [draftMasterPlansData, setDraftMasterPlansData] = useState([]);
  const [approvedMasterPlansData, setApprovedMasterPlansData] = useState([]);
  const [newDraftPlanData, setNewDraftPlanData] = useState({
    nameOfULB: '',
    description: '',
    downloadOption: ''
  });
  const [newApprovedPlanData, setNewApprovedPlanData] = useState({
    nameOfULB: '',
    description: '',
    downloadOption: ''
  });
  const [showRtiPage, setShowRtiPage] = useState(false);
  const [appellateAuthorities, setAppellateAuthorities] = useState([]);
  const [faqData, setFaqData] = useState([
    {
      id: 1,
      question: "What are Unauthorised layouts and how can they be regularized?",
      answer: "Unauthorised layouts are developments that were constructed without proper approvals from AHUDA. To regularize them, property owners need to submit an application with required documents, pay applicable fees, and ensure compliance with current regulations.",
      category: "Related to Unauthorised layouts",
      addedDate: new Date().toLocaleDateString()
    },
    {
      id: 2,
      question: "What is the process for applying for MIG Layouts?",
      answer: "MIG (Middle Income Group) Layout applications require submission of site plans, NOCs from various departments, environmental clearances, and payment of prescribed fees. The application process typically takes 60-90 days for approval.",
      category: "Related to MIG Layouts", 
      addedDate: new Date().toLocaleDateString()
    },
    {
      id: 3,
      question: "How does the DPMS (Development Permission Management System) work?",
      answer: "DPMS is an online platform for managing development permissions. Citizens can apply online, track application status, make payments, and download approvals. It provides transparency and reduces processing time significantly.",
      category: "Related to DPMS",
      addedDate: new Date().toLocaleDateString()
    }
  ]);
  const [isAddingNewFaq, setIsAddingNewFaq] = useState(false);
  const [newFaqData, setNewFaqData] = useState({
    question: '',
    answer: '',
    category: ''
  });

  // Additional pages state variables
  const [showUcimsBeforePage, setShowUcimsBeforePage] = useState(false);
  const [showUcimsAfterPage, setShowUcimsAfterPage] = useState(false);
  const [showLtpPage, setShowLtpPage] = useState(false);
  const [showLrsObjectionsPage, setShowLrsObjectionsPage] = useState(false);
  const [showLrsRegularisedPage, setShowLrsRegularisedPage] = useState(false);

  // LTP and LRS file management state variables
  const [newAuthorityData, setNewAuthorityData] = useState({
    section: '',
    officerName: '',
    designation: '',
    contactDetails: ''
  });
  const [ltpFiles, setLtpFiles] = useState([]);
  const [lrsObjectionsFiles, setLrsObjectionsFiles] = useState([]);

  // Sample PDF documents for download (you can replace these with actual file URLs)
  const sampleDocuments = {
    unauthorizedPriorAhuda: [
      { name: 'Unauthorized_Layouts_Pre_AHUDA_2020.pdf', url: '#' },
      { name: 'Layout_Violations_Report_2019.pdf', url: '#' },
      { name: 'Survey_Report_Unauthorized_Developments.pdf', url: '#' }
    ],
    unauthorizedAfterAhuda: [
      { name: 'Unauthorized_Layouts_Post_AHUDA_2023.pdf', url: '#' },
      { name: 'Recent_Violations_Report_2024.pdf', url: '#' },
      { name: 'Action_Taken_Report_2024.pdf', url: '#' }
    ],
    unapprovedBuildings: [
      { name: 'Unapproved_Buildings_List_2024.pdf', url: '#' },
      { name: 'Building_Violations_Report.pdf', url: '#' },
      { name: 'Pending_Approvals_List.pdf', url: '#' }
    ]
  };

  // Function to handle PDF downloads
  const handleDownloadDocument = (documentName, documentUrl) => {
    // In a real application, this would download from an actual server
    if (documentUrl === '#') {
      alert(`Download would start for: ${documentName}\n\nNote: This is a demo. In production, this would download the actual PDF file.`);
    } else {
      window.open(documentUrl, '_blank');
    }
  };

  // Authentication functions
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    
    // Find user in admin credentials
    const user = adminCredentials.adminUsers.find(
      admin => admin.username === loginData.username && admin.password === loginData.password
    );
    
    if (user) {
      // Save credentials if "Remember Me" is checked
      if (rememberMe) {
        localStorage.setItem('ahuda_saved_credentials', JSON.stringify({
          loginData: loginData,
          rememberMe: true
        }));
      } else {
        localStorage.removeItem('ahuda_saved_credentials');
      }

      // Login successful
      setIsAuthenticated(true);
      setCurrentUser(user);
      setIsLoginModalOpen(false);
      
      // Only clear form data if "Remember Me" is not checked
      if (!rememberMe) {
        setLoginData({ username: '', password: '' });
        setRememberMe(false);
      }
      
      setShowWelcomePopup(true); // Show welcome popup
      
      // Store authentication in localStorage for persistence
      localStorage.setItem('ahuda_admin_auth', JSON.stringify({
        isAuthenticated: true,
        user: user
      }));

      // Auto-hide welcome popup after 3 seconds
      setTimeout(() => {
        setShowWelcomePopup(false);
      }, 3000);
    } else {
      // Login failed
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    
    // Load saved credentials after logout if they exist
    const savedCredentials = localStorage.getItem('ahuda_saved_credentials');
    if (savedCredentials) {
      try {
        const credData = JSON.parse(savedCredentials);
        setLoginData(credData.loginData);
        setRememberMe(credData.rememberMe);
      } catch (error) {
        console.error('Error parsing saved credentials:', error);
        setLoginData({ username: '', password: '' });
        setRememberMe(false);
      }
    } else {
      // No saved credentials, clear the form
      setLoginData({ username: '', password: '' });
      setRememberMe(false);
    }
    
    // Remove authentication but keep saved credentials
    localStorage.removeItem('ahuda_admin_auth');
    // Note: We preserve 'ahuda_saved_credentials' for "Remember Me" functionality
  };

  // Function to open login modal and load saved credentials
  const openLoginModal = () => {
    // Load saved credentials when opening the modal
    const savedCredentials = localStorage.getItem('ahuda_saved_credentials');
    if (savedCredentials) {
      try {
        const credData = JSON.parse(savedCredentials);
        setLoginData(credData.loginData);
        setRememberMe(credData.rememberMe);
      } catch (error) {
        console.error('Error parsing saved credentials:', error);
      }
    }
    setIsLoginModalOpen(true);
  };

  // Handle click outside for meetings dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.meetings-dropdown')) {
        setShowMeetingsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check for existing authentication on component mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('ahuda_admin_auth');
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        if (authData.isAuthenticated && authData.user) {
          setIsAuthenticated(true);
          setCurrentUser(authData.user);
        }
      } catch (error) {
        console.error('Error parsing saved authentication:', error);
        localStorage.removeItem('ahuda_admin_auth');
      }
    }

    // Load saved login credentials if "Remember Me" was checked
    const savedCredentials = localStorage.getItem('ahuda_saved_credentials');
    if (savedCredentials) {
      try {
        const credData = JSON.parse(savedCredentials);
        setLoginData(credData.loginData);
        setRememberMe(credData.rememberMe);
      } catch (error) {
        console.error('Error parsing saved credentials:', error);
        localStorage.removeItem('ahuda_saved_credentials');
      }
    }

    // Load approved layouts data from localStorage
    const savedLayouts = localStorage.getItem('ahuda_approved_layouts');
    if (savedLayouts) {
      try {
        setApprovedLayoutsData(JSON.parse(savedLayouts));
      } catch (error) {
        console.error('Error parsing saved layouts:', error);
      }
    }

    // Load approved buildings data from localStorage
    const savedBuildings = localStorage.getItem('ahuda_approved_buildings');
    if (savedBuildings) {
      try {
        setApprovedBuildingsData(JSON.parse(savedBuildings));
      } catch (error) {
        console.error('Error parsing saved buildings:', error);
      }
    }

    // Load land bank data from localStorage
    const savedLandBank = localStorage.getItem('ahuda_land_bank');
    if (savedLandBank) {
      try {
        setLandBankData(JSON.parse(savedLandBank));
      } catch (error) {
        console.error('Error parsing saved land bank:', error);
      }
    }

    // Load uploads data from localStorage
    const savedUploads = localStorage.getItem('uploadsData');
    if (savedUploads) {
      try {
        setUploadsData(JSON.parse(savedUploads));
      } catch (error) {
        console.error('Error parsing saved uploads:', error);
      }
    }

    // Load gallery data from localStorage
    const savedGallery = localStorage.getItem('galleryImages');
    if (savedGallery) {
      try {
        setGalleryImages(JSON.parse(savedGallery));
      } catch (error) {
        console.error('Error parsing saved gallery:', error);
      }
    }

    // Load FAQ data from localStorage
    const savedFaq = localStorage.getItem('faqData');
    if (savedFaq) {
      try {
        setFaqData(JSON.parse(savedFaq));
      } catch (error) {
        console.error('Error parsing saved FAQ:', error);
      }
    }

    // Load Office Staff data from localStorage
    const savedStaff = localStorage.getItem('officeStaffData');
    if (savedStaff) {
      try {
        setOfficeStaffData(JSON.parse(savedStaff));
      } catch (error) {
        console.error('Error parsing saved office staff:', error);
      }
    }

    // Load Authority Meetings data from localStorage
    const savedAuthorityMeetings = localStorage.getItem('authorityMeetingsData');
    if (savedAuthorityMeetings) {
      try {
        setAuthorityMeetingsData(JSON.parse(savedAuthorityMeetings));
      } catch (error) {
        console.error('Error parsing saved authority meetings:', error);
      }
    }

    // Load Executive Committee Meetings data from localStorage
    const savedExecutiveMeetings = localStorage.getItem('executiveCommitteeMeetingsData');
    if (savedExecutiveMeetings) {
      try {
        setExecutiveCommitteeMeetingsData(JSON.parse(savedExecutiveMeetings));
      } catch (error) {
        console.error('Error parsing saved executive meetings:', error);
      }
    }

    // Load MIG Information data from localStorage
    const savedMigInfo = localStorage.getItem('migInformationData');
    if (savedMigInfo) {
      try {
        setMigInformationData(JSON.parse(savedMigInfo));
      } catch (error) {
        console.error('Error parsing saved MIG information:', error);
      }
    }

    // Load Draft Master Plans data from localStorage
    const savedDraftPlans = localStorage.getItem('draftMasterPlansData');
    if (savedDraftPlans) {
      try {
        setDraftMasterPlansData(JSON.parse(savedDraftPlans));
      } catch (error) {
        console.error('Error parsing saved draft master plans:', error);
      }
    }

    // Load Approved Master Plans data from localStorage
    const savedApprovedPlans = localStorage.getItem('approvedMasterPlansData');
    if (savedApprovedPlans) {
      try {
        setApprovedMasterPlansData(JSON.parse(savedApprovedPlans));
      } catch (error) {
        console.error('Error parsing saved approved master plans:', error);
      }
    }

    // Load Appellate Authorities data from localStorage
    const savedAuthorities = localStorage.getItem('ahuda_appellate_authorities');
    if (savedAuthorities) {
      try {
        setAppellateAuthorities(JSON.parse(savedAuthorities));
      } catch (error) {
        console.error('Error parsing saved appellate authorities:', error);
      }
    }

    // Load LTP files from localStorage
    const savedLtpFiles = localStorage.getItem('ltpFiles');
    if (savedLtpFiles) {
      try {
        setLtpFiles(JSON.parse(savedLtpFiles));
      } catch (error) {
        console.error('Error parsing saved LTP files:', error);
      }
    }

    // Load LRS Objections files from localStorage
    const savedLrsObjectionsFiles = localStorage.getItem('lrsObjectionsFiles');
    if (savedLrsObjectionsFiles) {
      try {
        setLrsObjectionsFiles(JSON.parse(savedLrsObjectionsFiles));
      } catch (error) {
        console.error('Error parsing saved LRS Objections files:', error);
      }
    }
  }, []);

  // Functions for approved layouts management
  const handleAddNewLayout = () => {
    if (newLayoutData.layoutDeveloper && newLayoutData.extentLocation && newLayoutData.flpProceedings) {
      const newLayout = {
        id: Date.now(),
        sno: approvedLayoutsData.length + 1,
        ...newLayoutData,
        addedBy: currentUser?.name,
        addedDate: new Date().toLocaleDateString()
      };
      
      const updatedData = [...approvedLayoutsData, newLayout];
      setApprovedLayoutsData(updatedData);
      localStorage.setItem('ahuda_approved_layouts', JSON.stringify(updatedData));
      
      setNewLayoutData({ layoutDeveloper: '', extentLocation: '', flpProceedings: '' });
      setIsAddingNewLayout(false);
    }
  };

  const handleCancelAddLayout = () => {
    setNewLayoutData({ layoutDeveloper: '', extentLocation: '', flpProceedings: '' });
    setIsAddingNewLayout(false);
  };

  const handleEditLayout = (layout) => {
    setNewLayoutData({
      layoutDeveloper: layout.layoutDeveloper,
      extentLocation: layout.extentLocation,
      flpProceedings: layout.flpProceedings
    });
    setEditingLayoutId(layout.id);
    setIsEditingLayout(true);
    setIsAddingNewLayout(true); // Reuse the same form
  };

  const handleUpdateLayout = () => {
    if (newLayoutData.layoutDeveloper && newLayoutData.extentLocation && newLayoutData.flpProceedings) {
      const updatedData = approvedLayoutsData.map(layout => 
        layout.id === editingLayoutId 
          ? { ...layout, ...newLayoutData, modifiedBy: currentUser?.name, modifiedDate: new Date().toLocaleDateString() }
          : layout
      );
      
      setApprovedLayoutsData(updatedData);
      localStorage.setItem('ahuda_approved_layouts', JSON.stringify(updatedData));
      
      setNewLayoutData({ layoutDeveloper: '', extentLocation: '', flpProceedings: '' });
      setIsAddingNewLayout(false);
      setIsEditingLayout(false);
      setEditingLayoutId(null);
    }
  };

  const handleDeleteLayout = (layoutId) => {
    if (window.confirm('Are you sure you want to delete this approved layout? This action cannot be undone.')) {
      const updatedData = approvedLayoutsData.filter(layout => layout.id !== layoutId);
      // Re-number the remaining items
      const renumberedData = updatedData.map((layout, index) => ({
        ...layout,
        sno: index + 1
      }));
      
      setApprovedLayoutsData(renumberedData);
      localStorage.setItem('ahuda_approved_layouts', JSON.stringify(renumberedData));
    }
  };

  const handleCancelEditLayout = () => {
    setNewLayoutData({ layoutDeveloper: '', extentLocation: '', flpProceedings: '' });
    setIsAddingNewLayout(false);
    setIsEditingLayout(false);
    setEditingLayoutId(null);
  };

  // Approved Buildings Edit/Delete Handlers
  const handleEditBuilding = (building) => {
    setNewBuildingData({
      developer: building.developer,
      extentLocation: building.extentLocation,
      flpProceedings: building.flpProceedings
    });
    setEditingBuildingId(building.id);
    setIsEditingBuilding(true);
    setIsAddingNewBuilding(true); // Reuse the same form
  };

  const handleUpdateBuilding = () => {
    if (newBuildingData.developer && newBuildingData.extentLocation && newBuildingData.flpProceedings) {
      const updatedData = approvedBuildingsData.map(building => 
        building.id === editingBuildingId 
          ? { ...building, ...newBuildingData, modifiedBy: currentUser?.name, modifiedDate: new Date().toLocaleDateString() }
          : building
      );
      
      setApprovedBuildingsData(updatedData);
      localStorage.setItem('ahuda_approved_buildings', JSON.stringify(updatedData));
      
      setNewBuildingData({ developer: '', extentLocation: '', flpProceedings: '' });
      setIsAddingNewBuilding(false);
      setIsEditingBuilding(false);
      setEditingBuildingId(null);
    }
  };

  const handleDeleteBuilding = (buildingId) => {
    if (window.confirm('Are you sure you want to delete this approved building? This action cannot be undone.')) {
      const updatedData = approvedBuildingsData.filter(building => building.id !== buildingId);
      // Re-number the remaining items
      const renumberedData = updatedData.map((building, index) => ({
        ...building,
        sno: index + 1
      }));
      
      setApprovedBuildingsData(renumberedData);
      localStorage.setItem('ahuda_approved_buildings', JSON.stringify(renumberedData));
    }
  };

  const handleCancelEditBuilding = () => {
    setNewBuildingData({ developer: '', extentLocation: '', flpProceedings: '' });
    setIsAddingNewBuilding(false);
    setIsEditingBuilding(false);
    setEditingBuildingId(null);
  };

  // Functions for approved buildings management
  const handleAddNewBuilding = () => {
    if (newBuildingData.developer && newBuildingData.extentLocation && newBuildingData.flpProceedings) {
      const newBuilding = {
        id: Date.now(),
        sno: approvedBuildingsData.length + 1,
        ...newBuildingData,
        addedBy: currentUser?.name,
        addedDate: new Date().toLocaleDateString()
      };
      
      const updatedData = [...approvedBuildingsData, newBuilding];
      setApprovedBuildingsData(updatedData);
      localStorage.setItem('ahuda_approved_buildings', JSON.stringify(updatedData));
      
      setNewBuildingData({ developer: '', extentLocation: '', flpProceedings: '' });
      setIsAddingNewBuilding(false);
    }
  };

  const handleCancelAddBuilding = () => {
    setNewBuildingData({ developer: '', extentLocation: '', flpProceedings: '' });
    setIsAddingNewBuilding(false);
  };

  // Functions for completed works management
  const handleAddNewCompletedWork = () => {
    if (newCompletedWorkData.nameOfWork && newCompletedWorkData.estCost && newCompletedWorkData.remarks) {
      const newWork = {
        id: Date.now(),
        sno: completedWorksData.length + 1,
        ...newCompletedWorkData,
        addedBy: currentUser?.name,
        addedDate: new Date().toLocaleDateString()
      };
      
      const updatedWorks = [...completedWorksData, newWork];
      setCompletedWorksData(updatedWorks);
      localStorage.setItem('ahuda_completed_works', JSON.stringify(updatedWorks));
      setNewCompletedWorkData({ nameOfWork: '', estCost: '', remarks: '' });
      setIsAddingNewCompletedWork(false);
    }
  };

  const handleCancelAddCompletedWork = () => {
    setNewCompletedWorkData({ nameOfWork: '', estCost: '', remarks: '' });
    setIsAddingNewCompletedWork(false);
  };

  // Functions for works under progress management
  const handleAddNewProgressWork = () => {
    if (newProgressWorkData.nameOfWork && newProgressWorkData.estCost && newProgressWorkData.remarks) {
      const newWork = {
        id: Date.now(),
        sno: worksUnderProgressData.length + 1,
        ...newProgressWorkData,
        addedBy: currentUser?.name,
        addedDate: new Date().toLocaleDateString()
      };
      
      const updatedWorks = [...worksUnderProgressData, newWork];
      setWorksUnderProgressData(updatedWorks);
      localStorage.setItem('ahuda_works_under_progress', JSON.stringify(updatedWorks));
      setNewProgressWorkData({ nameOfWork: '', estCost: '', remarks: '' });
      setIsAddingNewProgressWork(false);
    }
  };

  const handleCancelAddProgressWork = () => {
    setNewProgressWorkData({ nameOfWork: '', estCost: '', remarks: '' });
    setIsAddingNewProgressWork(false);
  };

  // Functions for land bank management
  const handleAddNewLandBank = () => {
    if (newLandBankData.surveyNo && newLandBankData.location && newLandBankData.area && newLandBankData.landType && newLandBankData.remarks) {
      const newLandBank = {
        id: Date.now(),
        sno: landBankData.length + 1,
        ...newLandBankData,
        addedBy: currentUser?.name,
        addedDate: new Date().toLocaleDateString()
      };
      
      const updatedData = [...landBankData, newLandBank];
      setLandBankData(updatedData);
      localStorage.setItem('ahuda_land_bank', JSON.stringify(updatedData));
      setNewLandBankData({ surveyNo: '', location: '', area: '', landType: '', remarks: '' });
      setIsAddingNewLandBank(false);
    }
  };

  const handleCancelAddLandBank = () => {
    setNewLandBankData({ surveyNo: '', location: '', area: '', landType: '', remarks: '' });
    setIsAddingNewLandBank(false);
  };

  // Functions for GO's management
  const handleAddNewGo = () => {
    if (newGoData.title && newGoData.goNumber && newGoData.date && newGoData.department && newGoData.file) {
      const newGo = {
        id: Date.now(),
        sno: gosData.length + 1,
        ...newGoData,
        fileUrl: URL.createObjectURL(newGoData.file),
        addedBy: currentUser?.name,
        addedDate: new Date().toLocaleDateString()
      };
      
      const updatedData = [...gosData, newGo];
      setGosData(updatedData);
      localStorage.setItem('ahuda_gos', JSON.stringify(updatedData.map(go => ({...go, fileUrl: undefined}))));
      setNewGoData({ title: '', goNumber: '', date: '', department: '', description: '', file: null, fileName: '' });
      setIsAddingNewGo(false);
    }
  };

  const handleCancelAddGo = () => {
    setNewGoData({ title: '', goNumber: '', date: '', department: '', description: '', file: null, fileName: '' });
    setIsAddingNewGo(false);
  };

  const handleAddNewMemo = () => {
    if (newMemoData.title && newMemoData.memoNumber && newMemoData.date && newMemoData.department && newMemoData.file) {
      const newMemo = {
        id: Date.now(),
        sno: memosData.length + 1,
        ...newMemoData,
        fileUrl: URL.createObjectURL(newMemoData.file),
        addedBy: currentUser?.name,
        addedDate: new Date().toLocaleDateString()
      };
      
      const updatedData = [...memosData, newMemo];
      setMemosData(updatedData);
      localStorage.setItem('ahuda_memos', JSON.stringify(updatedData.map(memo => ({...memo, fileUrl: undefined}))));
      setNewMemoData({ title: '', memoNumber: '', date: '', department: '', description: '', file: null, fileName: '' });
      setIsAddingNewMemo(false);
    }
  };

  const handleCancelAddMemo = () => {
    setNewMemoData({ title: '', memoNumber: '', date: '', department: '', description: '', file: null, fileName: '' });
    setIsAddingNewMemo(false);
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'go') {
        setNewGoData({...newGoData, file: file, fileName: file.name});
      } else if (type === 'memo') {
        setNewMemoData({...newMemoData, file: file, fileName: file.name});
      }
    }
  };

  const handleDownloadFile = (item, type) => {
    if (item.fileUrl) {
      const link = document.createElement('a');
      link.href = item.fileUrl;
      link.download = item.fileName || `${type}_${item.goNumber || item.memoNumber}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(`File not available for ${type === 'go' ? 'G.O' : 'Memo'}: ${item.goNumber || item.memoNumber}`);
    }
  };

  // Functions for Account Section management
  const handleAddNewBudget = () => {
    if (newBudgetData.financialYear && newBudgetData.budgetType && newBudgetData.file) {
      const newBudget = {
        id: Date.now(),
        sno: budgetData.length + 1,
        ...newBudgetData,
        fileUrl: URL.createObjectURL(newBudgetData.file),
        addedBy: currentUser?.name,
        addedDate: new Date().toLocaleDateString()
      };
      
      const updatedData = [...budgetData, newBudget];
      setBudgetData(updatedData);
      localStorage.setItem('ahuda_budget', JSON.stringify(updatedData.map(budget => ({...budget, fileUrl: undefined}))));
      setNewBudgetData({ financialYear: '', budgetType: '', description: '', file: null, fileName: '' });
      setIsAddingNewBudget(false);
    }
  };

  const handleCancelAddBudget = () => {
    setNewBudgetData({ financialYear: '', budgetType: '', description: '', file: null, fileName: '' });
    setIsAddingNewBudget(false);
  };

  const handleAddNewAudit = () => {
    if (newAuditData.auditPeriod && newAuditData.reportType && newAuditData.file) {
      const newAudit = {
        id: Date.now(),
        sno: auditData.length + 1,
        ...newAuditData,
        fileUrl: URL.createObjectURL(newAuditData.file),
        addedBy: currentUser?.name,
        addedDate: new Date().toLocaleDateString()
      };
      
      const updatedData = [...auditData, newAudit];
      setAuditData(updatedData);
      localStorage.setItem('ahuda_audit', JSON.stringify(updatedData.map(audit => ({...audit, fileUrl: undefined}))));
      setNewAuditData({ auditPeriod: '', reportType: '', description: '', file: null, fileName: '' });
      setIsAddingNewAudit(false);
    }
  };

  const handleCancelAddAudit = () => {
    setNewAuditData({ auditPeriod: '', reportType: '', description: '', file: null, fileName: '' });
    setIsAddingNewAudit(false);
  };

  const handleAccountFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'budget') {
        setNewBudgetData({...newBudgetData, file: file, fileName: file.name});
      } else if (type === 'audit') {
        setNewAuditData({...newAuditData, file: file, fileName: file.name});
      }
    }
  };

  const handleAccountFileDownload = (item, type) => {
    if (item.fileUrl) {
      const link = document.createElement('a');
      link.href = item.fileUrl;
      link.download = item.fileName || `${type}_${item.financialYear || item.auditPeriod}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(`File not available for ${type === 'budget' ? 'Budget' : 'Audit Report'}: ${item.financialYear || item.auditPeriod}`);
    }
  };

  // Functions for RTI Appellate Authorities management
  const handleAddNewAuthority = () => {
    if (newAuthorityData.section && newAuthorityData.officerName && newAuthorityData.designation && newAuthorityData.contactDetails) {
      const newAuthority = {
        id: Date.now(),
        sno: appellateAuthorities.length + 1,
        ...newAuthorityData,
        addedBy: currentUser?.name,
        addedDate: new Date().toLocaleDateString()
      };
      
      const updatedData = [...appellateAuthorities, newAuthority];
      setAppellateAuthorities(updatedData);
      localStorage.setItem('ahuda_appellate_authorities', JSON.stringify(updatedData));
      setNewAuthorityData({ section: '', officerName: '', designation: '', contactDetails: '' });
    }
  };

  const handleDeleteAuthority = (id) => {
    if (window.confirm('Are you sure you want to delete this authority?')) {
      const updatedData = appellateAuthorities.filter(authority => authority.id !== id);
      setAppellateAuthorities(updatedData);
      localStorage.setItem('ahuda_appellate_authorities', JSON.stringify(updatedData));
    }
  };

  const heroSlides = [
    {
      image: ahudaSlide1,
      title: "AHUDA Development Projects",
      subtitle: "Transforming Ananthapuramu through modern infrastructure"
    },
    {
      image: ahudaSlide2,
      title: "Quality Urban Planning",
      subtitle: "Building sustainable communities for the future"
    },
    {
      image: ahudaSlide3,
      title: "Modern Building Projects",
      subtitle: "State-of-the-art construction and architectural excellence"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.services-dropdown')) {
        setIsServicesDropdownOpen(false);
      }
      if (!event.target.closest('.account-dropdown')) {
        setIsAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle escape key for image modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isImageModalOpen) {
        closeImageModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isImageModalOpen]);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsImageModalOpen(false);
  };

  const handleAddFaq = () => {
    if (newFaqData.question && newFaqData.answer && newFaqData.category) {
      const newFaq = {
        id: Date.now(),
        question: newFaqData.question,
        answer: newFaqData.answer,
        category: newFaqData.category,
        addedDate: new Date().toLocaleDateString(),
        addedBy: currentUser?.name
      };
      
      const updatedFaqs = [...faqData, newFaq];
      setFaqData(updatedFaqs);
      localStorage.setItem('faqData', JSON.stringify(updatedFaqs));
      
      setNewFaqData({ question: '', answer: '', category: '' });
      setIsAddingNewFaq(false);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleDeleteFaq = (faqId) => {
    if (window.confirm('Are you sure you want to delete this FAQ? This action cannot be undone.')) {
      const updatedFaqs = faqData.filter(faq => faq.id !== faqId);
      setFaqData(updatedFaqs);
      localStorage.setItem('faqData', JSON.stringify(updatedFaqs));
    }
  };

  // Office Staff Management Functions
  const handleStaffImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewStaffData({
          ...newStaffData,
          image: file,
          imageUrl: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddStaff = () => {
    if (newStaffData.name && newStaffData.designation && newStaffData.contactDetails) {
      const newStaff = {
        id: Date.now(),
        name: newStaffData.name,
        designation: newStaffData.designation,
        contactDetails: newStaffData.contactDetails,
        imageUrl: newStaffData.imageUrl,
        addedDate: new Date().toLocaleDateString(),
        addedBy: currentUser?.name
      };
      
      const updatedStaff = [...officeStaffData, newStaff];
      setOfficeStaffData(updatedStaff);
      localStorage.setItem('officeStaffData', JSON.stringify(updatedStaff));
      
      setNewStaffData({ name: '', designation: '', contactDetails: '', image: null, imageUrl: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleDeleteStaff = (staffId) => {
    if (window.confirm('Are you sure you want to delete this staff member? This action cannot be undone.')) {
      const updatedStaff = officeStaffData.filter(staff => staff.id !== staffId);
      setOfficeStaffData(updatedStaff);
      localStorage.setItem('officeStaffData', JSON.stringify(updatedStaff));
    }
  };

  // Authority Meetings Management Functions
  const handleAddAuthorityMeeting = () => {
    if (newAuthorityMeetingData.meetingNo && newAuthorityMeetingData.dateOfMeeting && newAuthorityMeetingData.resolutionFileName) {
      const newMeeting = {
        id: Date.now(),
        meetingNo: newAuthorityMeetingData.meetingNo,
        dateOfMeeting: newAuthorityMeetingData.dateOfMeeting,
        resolutionFileName: newAuthorityMeetingData.resolutionFileName,
        addedDate: new Date().toLocaleDateString(),
        addedBy: currentUser?.name
      };
      
      const updatedMeetings = [...authorityMeetingsData, newMeeting];
      setAuthorityMeetingsData(updatedMeetings);
      localStorage.setItem('authorityMeetingsData', JSON.stringify(updatedMeetings));
      
      setNewAuthorityMeetingData({ meetingNo: '', dateOfMeeting: '', resolutionFile: null, resolutionFileName: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleDeleteAuthorityMeeting = (meetingId) => {
    if (window.confirm('Are you sure you want to delete this meeting record? This action cannot be undone.')) {
      const updatedMeetings = authorityMeetingsData.filter(meeting => meeting.id !== meetingId);
      setAuthorityMeetingsData(updatedMeetings);
      localStorage.setItem('authorityMeetingsData', JSON.stringify(updatedMeetings));
    }
  };

  // Executive Committee Meetings Management Functions
  const handleAddExecutiveMeeting = () => {
    if (newExecutiveMeetingData.meetingNo && newExecutiveMeetingData.dateOfMeeting && newExecutiveMeetingData.resolutionFileName) {
      const newMeeting = {
        id: Date.now(),
        meetingNo: newExecutiveMeetingData.meetingNo,
        dateOfMeeting: newExecutiveMeetingData.dateOfMeeting,
        resolutionFileName: newExecutiveMeetingData.resolutionFileName,
        addedDate: new Date().toLocaleDateString(),
        addedBy: currentUser?.name
      };
      
      const updatedMeetings = [...executiveCommitteeMeetingsData, newMeeting];
      setExecutiveCommitteeMeetingsData(updatedMeetings);
      localStorage.setItem('executiveCommitteeMeetingsData', JSON.stringify(updatedMeetings));
      
      setNewExecutiveMeetingData({ meetingNo: '', dateOfMeeting: '', resolutionFile: null, resolutionFileName: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleDeleteExecutiveMeeting = (meetingId) => {
    if (window.confirm('Are you sure you want to delete this meeting record? This action cannot be undone.')) {
      const updatedMeetings = executiveCommitteeMeetingsData.filter(meeting => meeting.id !== meetingId);
      setExecutiveCommitteeMeetingsData(updatedMeetings);
      localStorage.setItem('executiveCommitteeMeetingsData', JSON.stringify(updatedMeetings));
    }
  };

  // MIG Information Management Functions
  const handleAddMigInfo = () => {
    if (newMigData.layoutName && newMigData.ratePerSqYard && newMigData.totalPlots && newMigData.allottedPlotDetails && newMigData.availablePlots && newMigData.layoutCopy) {
      const newMigInfo = {
        id: Date.now(),
        layoutName: newMigData.layoutName,
        ratePerSqYard: newMigData.ratePerSqYard,
        totalPlots: newMigData.totalPlots,
        allottedPlotDetails: newMigData.allottedPlotDetails,
        availablePlots: newMigData.availablePlots,
        layoutCopy: newMigData.layoutCopy,
        addedDate: new Date().toLocaleDateString(),
        addedBy: currentUser?.name
      };
      
      const updatedMigInfo = [...migInformationData, newMigInfo];
      setMigInformationData(updatedMigInfo);
      localStorage.setItem('migInformationData', JSON.stringify(updatedMigInfo));
      
      setNewMigData({ layoutName: '', ratePerSqYard: '', totalPlots: '', allottedPlotDetails: '', availablePlots: '', layoutCopy: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleDeleteMigInfo = (migId) => {
    if (window.confirm('Are you sure you want to delete this MIG information? This action cannot be undone.')) {
      const updatedMigInfo = migInformationData.filter(mig => mig.id !== migId);
      setMigInformationData(updatedMigInfo);
      localStorage.setItem('migInformationData', JSON.stringify(updatedMigInfo));
    }
  };

  // Master Plans Management Functions
  const handleAddDraftPlan = () => {
    if (newDraftPlanData.nameOfULB && newDraftPlanData.description && newDraftPlanData.downloadOption) {
      const newDraftPlan = {
        id: Date.now(),
        nameOfULB: newDraftPlanData.nameOfULB,
        description: newDraftPlanData.description,
        downloadOption: newDraftPlanData.downloadOption,
        addedDate: new Date().toLocaleDateString(),
        addedBy: currentUser?.name
      };
      
      const updatedDraftPlans = [...draftMasterPlansData, newDraftPlan];
      setDraftMasterPlansData(updatedDraftPlans);
      localStorage.setItem('draftMasterPlansData', JSON.stringify(updatedDraftPlans));
      
      setNewDraftPlanData({ nameOfULB: '', description: '', downloadOption: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleDeleteDraftPlan = (planId) => {
    if (window.confirm('Are you sure you want to delete this draft master plan? This action cannot be undone.')) {
      const updatedDraftPlans = draftMasterPlansData.filter(plan => plan.id !== planId);
      setDraftMasterPlansData(updatedDraftPlans);
      localStorage.setItem('draftMasterPlansData', JSON.stringify(updatedDraftPlans));
    }
  };

  const handleAddApprovedPlan = () => {
    if (newApprovedPlanData.nameOfULB && newApprovedPlanData.description && newApprovedPlanData.downloadOption) {
      const newApprovedPlan = {
        id: Date.now(),
        nameOfULB: newApprovedPlanData.nameOfULB,
        description: newApprovedPlanData.description,
        downloadOption: newApprovedPlanData.downloadOption,
        addedDate: new Date().toLocaleDateString(),
        addedBy: currentUser?.name
      };
      
      const updatedApprovedPlans = [...approvedMasterPlansData, newApprovedPlan];
      setApprovedMasterPlansData(updatedApprovedPlans);
      localStorage.setItem('approvedMasterPlansData', JSON.stringify(updatedApprovedPlans));
      
      setNewApprovedPlanData({ nameOfULB: '', description: '', downloadOption: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleDeleteApprovedPlan = (planId) => {
    if (window.confirm('Are you sure you want to delete this approved master plan? This action cannot be undone.')) {
      const updatedApprovedPlans = approvedMasterPlansData.filter(plan => plan.id !== planId);
      setApprovedMasterPlansData(updatedApprovedPlans);
      localStorage.setItem('approvedMasterPlansData', JSON.stringify(updatedApprovedPlans));
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderPageContent = () => {
    // UCIMS Before AHUDA Page
    if (showUcimsBeforePage) {
      return (
        <div>
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowUcimsBeforePage(false)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>
          
          <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">UCIMS Prior to AHUDA</h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Urban Community Information Management System - Before Authority Formation
                </p>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // UCIMS After AHUDA Page
    if (showUcimsAfterPage) {
      return (
        <div>
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowUcimsAfterPage(false)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>
          
          <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">UCIMS After AHUDA</h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Urban Community Information Management System - After Authority Formation
                </p>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // LTP Page
    if (showLtpPage) {
      return (
        <div>
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowLtpPage(false)}
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>
          
          <section className="relative py-20 bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">LTP's</h1>
                <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
                  Local Town Planning Documents
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">LTP Documents Repository</h2>
                  <p className="text-lg text-gray-600">
                    {isAuthenticated 
                      ? 'Upload and manage Local Town Planning documents.' 
                      : 'Download Local Town Planning documents and resources.'}
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <FileText className="w-6 h-6 mr-3" />
                      LTP Documents
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    <div className="text-center py-12">
                      <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-600 mb-2">No LTP Documents Available</h4>
                      <p className="text-gray-500">
                        {isAuthenticated 
                          ? 'Upload the first LTP document to get started.' 
                          : 'No LTP documents have been uploaded yet.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // LRS Objections Page
    if (showLrsObjectionsPage) {
      return (
        <div>
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowLrsObjectionsPage(false)}
              className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>
          
          <section className="relative py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">LRS 2020 Objections & Suggestions</h1>
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                  Land Revenue Survey 2020 - Objections and Suggestions Documents
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">LRS 2020 Documents Repository</h2>
                  <p className="text-lg text-gray-600">
                    {isAuthenticated 
                      ? 'Upload and manage LRS 2020 objections and suggestions documents.' 
                      : 'Download LRS 2020 objections and suggestions documents.'}
                  </p>
                </div>

                {/* Admin Upload Section */}
                {isAuthenticated && (
                  <div className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                      <div className="flex items-center mb-6">
                        <Shield className="w-6 h-6 mr-3 text-orange-600" />
                        <h3 className="text-xl font-semibold text-gray-800">Upload LRS 2020 Documents</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Document Title</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Enter document title"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Select LRS Document</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                            <p className="text-sm text-gray-500">PDF, DOC, DOCX files only</p>
                            <input
                              type="file"
                              className="hidden"
                              accept=".pdf,.doc,.docx"
                              id="lrs-file-input"
                              onChange={(e) => {
                                if (e.target.files[0]) {
                                  const file = e.target.files[0];
                                  const newFile = {
                                    id: Date.now(),
                                    title: file.name,
                                    fileName: file.name,
                                    fileSize: (file.size / 1024 / 1024).toFixed(2) + ' MB',
                                    uploadDate: new Date().toLocaleDateString(),
                                    file: URL.createObjectURL(file)
                                  };
                                  setLrsObjectionsFiles([...lrsObjectionsFiles, newFile]);
                                  localStorage.setItem('lrsObjectionsFiles', JSON.stringify([...lrsObjectionsFiles, newFile]));
                                }
                              }}
                            />
                            <button
                              onClick={() => document.getElementById('lrs-file-input').click()}
                              className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                            >
                              Choose File
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Documents List */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-6">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <FileText className="w-6 h-6 mr-3" />
                      LRS 2020 Objections & Suggestions
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    {lrsObjectionsFiles.length === 0 ? (
                      <div className="text-center py-12">
                        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-gray-600 mb-2">No LRS Documents Available</h4>
                        <p className="text-gray-500">
                          {isAuthenticated 
                            ? 'Upload the first LRS 2020 document to get started.' 
                            : 'No LRS 2020 documents have been uploaded yet.'}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {lrsObjectionsFiles.map((file) => (
                          <div key={file.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <FileText className="w-6 h-6 text-orange-600" />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{file.title}</h4>
                                <p className="text-sm text-gray-500">
                                  {file.fileSize} • Uploaded on {file.uploadDate}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <a
                                href={file.file}
                                download={file.fileName}
                                className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                              >
                                <Download size={16} />
                                <span>Download</span>
                              </a>
                              
                              {isAuthenticated && (
                                <button
                                  onClick={() => {
                                    const updatedFiles = lrsObjectionsFiles.filter(f => f.id !== file.id);
                                    setLrsObjectionsFiles(updatedFiles);
                                    localStorage.setItem('lrsObjectionsFiles', JSON.stringify(updatedFiles));
                                  }}
                                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                                >
                                  Delete
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // LRS Regularised Page
    if (showLrsRegularisedPage) {
      return (
        <div>
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowLrsRegularisedPage(false)}
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>
          
          <section className="relative py-20 bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">LRS 2020 Regularised Individual Plots</h1>
                <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
                  Land Revenue Survey 2020 - List of Regularised Individual Plots
                </p>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // FAQ Page
    if (showFaqPage) {
      return (
        <div>
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowFaqPage(false)}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* FAQ Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
                <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                  Find Answers to Common Questions About AHUDA Services
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                
                {/* Page Description */}
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Help Center</h2>
                  <p className="text-lg text-gray-600">
                    {isAuthenticated 
                      ? 'Manage frequently asked questions to help users.' 
                      : 'Browse through commonly asked questions and their answers.'}
                  </p>
                </div>

                {/* Admin Section */}
                {isAuthenticated && (
                  <div className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Shield className="w-6 h-6 mr-3 text-green-600" />
                          <h3 className="text-xl font-semibold text-gray-800">Manage FAQ's</h3>
                        </div>
                        <button
                          onClick={() => setIsAddingNewFaq(true)}
                          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                        >
                          <Plus size={18} />
                          <span>Add New FAQ</span>
                        </button>
                      </div>
                      
                      {/* Add FAQ Form */}
                      {isAddingNewFaq && (
                        <div className="border-t border-gray-200 pt-6">
                          <h4 className="text-lg font-medium text-gray-800 mb-4">Add New FAQ</h4>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                              <select
                                value={newFaqData.category}
                                onChange={(e) => setNewFaqData({...newFaqData, category: e.target.value})}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                              >
                                <option value="">Select Category</option>
                                <option value="Related to Unauthorised layouts">Related to Unauthorised layouts</option>
                                <option value="Related to MIG Layouts">Related to MIG Layouts</option>
                                <option value="Related to DPMS">Related to DPMS</option>
                                <option value="General">General</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                              <input
                                type="text"
                                value={newFaqData.question}
                                onChange={(e) => setNewFaqData({...newFaqData, question: e.target.value})}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter the question"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Answer</label>
                              <textarea
                                value={newFaqData.answer}
                                onChange={(e) => setNewFaqData({...newFaqData, answer: e.target.value})}
                                rows="4"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter the detailed answer"
                              />
                            </div>
                            
                            <div className="flex space-x-3">
                              <button
                                onClick={handleAddFaq}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                              >
                                Add FAQ
                              </button>
                              <button
                                onClick={() => {
                                  setIsAddingNewFaq(false);
                                  setNewFaqData({ question: '', answer: '', category: '' });
                                }}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* FAQ List */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <HelpCircle className="w-6 h-6 mr-3" />
                      Frequently Asked Questions
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    {faqData.length === 0 ? (
                      <div className="text-center py-12">
                        <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-gray-600 mb-2">No FAQ's Available</h4>
                        <p className="text-gray-500">
                          {isAuthenticated 
                            ? 'Add the first FAQ to get started.' 
                            : 'No questions have been added yet.'}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {faqData.map((faq) => (
                          <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                              <div className="flex items-center justify-between">
                                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                  {faq.category}
                                </span>
                                {isAuthenticated && (
                                  <button
                                    onClick={() => handleDeleteFaq(faq.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                                  >
                                    Delete
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="p-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                Q: {faq.question}
                              </h4>
                              <p className="text-gray-700 leading-relaxed mb-4">
                                A: {faq.answer}
                              </p>
                              <p className="text-sm text-gray-500">
                                Added on {faq.addedDate}
                                {faq.addedBy && ` by ${faq.addedBy}`}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Office Staff Page
    if (showOfficeStaffPage) {
      return (
        <div>
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowOfficeStaffPage(false)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Office Staff Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Office Staff</h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  AHUDA Office Staff Directory
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Office Staff Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Admin Upload Section */}
                {isAuthenticated && (
                  <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Upload className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Manage Office Staff</h3>
                          <p className="text-gray-600">Add, edit, or remove staff members</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter staff name"
                          value={newStaffData.name}
                          onChange={(e) => setNewStaffData({...newStaffData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter designation"
                          value={newStaffData.designation}
                          onChange={(e) => setNewStaffData({...newStaffData, designation: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Details</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter contact details"
                          value={newStaffData.contactDetails}
                          onChange={(e) => setNewStaffData({...newStaffData, contactDetails: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Staff Photo (Optional)</label>
                      <div className="flex items-start space-x-4">
                        <div className="flex-1">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleStaffImageUpload}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <p className="text-xs text-gray-500 mt-1">Recommended: Square image, max 5MB (JPG, PNG)</p>
                        </div>
                        {newStaffData.imageUrl && (
                          <div className="relative">
                            <img 
                              src={newStaffData.imageUrl} 
                              alt="Preview" 
                              className="w-24 h-24 object-cover rounded-lg border-2 border-blue-200"
                            />
                            <button
                              onClick={() => setNewStaffData({...newStaffData, image: null, imageUrl: ''})}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={handleAddStaff}
                      className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Upload size={18} />
                      <span>Add Staff Member</span>
                    </button>
                  </div>
                )}

                {/* Staff List Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="px-8 py-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Office Staff Directory</h3>
                          <p className="text-gray-600">Complete list of AHUDA office staff members</p>
                        </div>
                      </div>
                      
                      {/* Admin-only Search Bar */}
                      {isAuthenticated && (
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search staff by name, designation, or contact..."
                            value={staffSearchQuery}
                            onChange={(e) => setStaffSearchQuery(e.target.value)}
                            className="w-80 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                          {staffSearchQuery && (
                            <button
                              onClick={() => setStaffSearchQuery('')}
                              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                            >
                              <X size={18} />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {(() => {
                    const filteredStaff = officeStaffData.filter(staff => {
                      if (!isAuthenticated || !staffSearchQuery) return true;
                      const searchLower = staffSearchQuery.toLowerCase();
                      return (
                        staff.name.toLowerCase().includes(searchLower) ||
                        staff.designation.toLowerCase().includes(searchLower) ||
                        staff.contactDetails.toLowerCase().includes(searchLower)
                      );
                    });

                    if (officeStaffData.length === 0) {
                      return (
                        <div className="px-8 py-12 text-center">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users size={24} className="text-gray-400" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-600 mb-2">No Staff Members Available</h4>
                          <p className="text-gray-500 mb-6">
                            {isAuthenticated 
                              ? "Use the form above to add the first staff member." 
                              : "Staff information will be displayed here once added by the administrator."}
                          </p>
                        </div>
                      );
                    }

                    if (filteredStaff.length === 0 && staffSearchQuery) {
                      return (
                        <div className="px-8 py-12 text-center">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search size={24} className="text-orange-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-600 mb-2">No Results Found</h4>
                          <p className="text-gray-500 mb-4">
                            No staff members match your search: "<span className="font-semibold">{staffSearchQuery}</span>"
                          </p>
                          <button
                            onClick={() => setStaffSearchQuery('')}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Clear Search
                          </button>
                        </div>
                      );
                    }

                    return (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Details</th>
                              {isAuthenticated && (
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                              )}
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {filteredStaff.map((staff, index) => (
                              <tr key={staff.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {staff.imageUrl ? (
                                    <img 
                                      src={staff.imageUrl} 
                                      alt={staff.name} 
                                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                                    />
                                  ) : (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
                                      {staff.name.charAt(0).toUpperCase()}
                                    </div>
                                  )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                      <Users size={16} className="text-blue-600" />
                                    </div>
                                    <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.designation}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.contactDetails}</td>
                                {isAuthenticated && (
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                      onClick={() => handleDeleteStaff(staff.id)}
                                      className="text-red-600 hover:text-red-900 flex items-center space-x-1 transition-colors"
                                    >
                                      <XCircle size={16} />
                                      <span>Delete</span>
                                    </button>
                                  </td>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Authority Meetings Page
    if (showAuthorityMeetingsPage) {
      return (
        <div>
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowAuthorityMeetingsPage(false)}
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Authority Meetings Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Authority Meetings</h1>
                <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                  Meeting Records and Resolutions
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Authority Meetings Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Admin Upload Section */}
                {isAuthenticated && (
                  <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Upload className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Manage Authority Meetings</h3>
                          <p className="text-gray-600">Add, edit, or remove meeting records</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Authority Meeting No</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter meeting number"
                          value={newAuthorityMeetingData.meetingNo}
                          onChange={(e) => setNewAuthorityMeetingData({...newAuthorityMeetingData, meetingNo: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Meeting</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          value={newAuthorityMeetingData.dateOfMeeting}
                          onChange={(e) => setNewAuthorityMeetingData({...newAuthorityMeetingData, dateOfMeeting: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Resolution/Agenda File Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter file name for download"
                          value={newAuthorityMeetingData.resolutionFileName}
                          onChange={(e) => setNewAuthorityMeetingData({...newAuthorityMeetingData, resolutionFileName: e.target.value})}
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleAddAuthorityMeeting}
                      className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Upload size={18} />
                      <span>Add Meeting Record</span>
                    </button>
                  </div>
                )}

                {/* Meetings List Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="px-8 py-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Authority Meetings</h3>
                        <p className="text-gray-600">Complete list of authority meeting records</p>
                      </div>
                    </div>
                  </div>

                  {authorityMeetingsData.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Authority Meeting No</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Meetings</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Download Resolutions/Agenda</th>
                            {isAuthenticated && (
                              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {authorityMeetingsData.map((meeting, index) => (
                            <tr key={meeting.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{meeting.meetingNo}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{meeting.dateOfMeeting}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                                  <Download size={16} />
                                  <span>{meeting.resolutionFileName}</span>
                                </button>
                              </td>
                              {isAuthenticated && (
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <button
                                    onClick={() => handleDeleteAuthorityMeeting(meeting.id)}
                                    className="text-red-600 hover:text-red-900 flex items-center space-x-1 transition-colors"
                                  >
                                    <XCircle size={16} />
                                    <span>Delete</span>
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="px-8 py-12 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar size={24} className="text-gray-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-600 mb-2">No Meetings Available</h4>
                      <p className="text-gray-500 mb-6">
                        {isAuthenticated 
                          ? "Use the form above to add the first meeting record." 
                          : "Meeting records will be displayed here once added by the administrator."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Executive Committee Meeting Page
    if (showExecutiveCommitteePage) {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowExecutiveCommitteePage(false)}
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Executive Committee Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Executive Committee Meeting</h1>
                <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
                  Executive Committee Meeting Records and Resolutions
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-purple-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Executive Committee Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Admin Upload Section */}
                {isAuthenticated && (
                  <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Upload className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Manage Executive Committee Meetings</h3>
                          <p className="text-gray-600">Add, edit, or remove meeting records</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Executive Meeting No</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Enter meeting number"
                          value={newExecutiveMeetingData.meetingNo}
                          onChange={(e) => setNewExecutiveMeetingData({...newExecutiveMeetingData, meetingNo: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Meeting</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          value={newExecutiveMeetingData.dateOfMeeting}
                          onChange={(e) => setNewExecutiveMeetingData({...newExecutiveMeetingData, dateOfMeeting: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Resolution/Agenda File Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Enter file name for download"
                          value={newExecutiveMeetingData.resolutionFileName}
                          onChange={(e) => setNewExecutiveMeetingData({...newExecutiveMeetingData, resolutionFileName: e.target.value})}
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleAddExecutiveMeeting}
                      className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Upload size={18} />
                      <span>Add Meeting Record</span>
                    </button>
                  </div>
                )}

                {/* Meetings List Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="px-8 py-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Executive Committee Meeting</h3>
                        <p className="text-gray-600">Complete list of executive committee meeting records</p>
                      </div>
                    </div>
                  </div>

                  {executiveCommitteeMeetingsData.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Executive Meeting No</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Meeting</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Download Resolutions/Agenda</th>
                            {isAuthenticated && (
                              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {executiveCommitteeMeetingsData.map((meeting, index) => (
                            <tr key={meeting.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{meeting.meetingNo}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{meeting.dateOfMeeting}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                                  <Download size={16} />
                                  <span>{meeting.resolutionFileName}</span>
                                </button>
                              </td>
                              {isAuthenticated && (
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <button
                                    onClick={() => handleDeleteExecutiveMeeting(meeting.id)}
                                    className="text-red-600 hover:text-red-900 flex items-center space-x-1 transition-colors"
                                  >
                                    <XCircle size={16} />
                                    <span>Delete</span>
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="px-8 py-12 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users size={24} className="text-gray-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-600 mb-2">No Meetings Available</h4>
                      <p className="text-gray-500 mb-6">
                        {isAuthenticated 
                          ? "Use the form above to add the first meeting record." 
                          : "Meeting records will be displayed here once added by the administrator."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // MIG Information Page
    if (showMigInformationPage) {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowMigInformationPage(false)}
              className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* MIG Information Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">MIG Information</h1>
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                  Middle Income Group Layout Information and Details
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* MIG Information Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                {/* Admin Upload Section */}
                {isAuthenticated && (
                  <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Upload className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Manage MIG Information</h3>
                          <p className="text-gray-600">Add, edit, or remove MIG layout information</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Layout Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter layout name"
                          value={newMigData.layoutName}
                          onChange={(e) => setNewMigData({...newMigData, layoutName: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Rate Per Sq Yard</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter rate per sq yard"
                          value={newMigData.ratePerSqYard}
                          onChange={(e) => setNewMigData({...newMigData, ratePerSqYard: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Total Plots</label>
                        <input
                          type="number"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter total plots"
                          value={newMigData.totalPlots}
                          onChange={(e) => setNewMigData({...newMigData, totalPlots: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Allotted Plot Details</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter allotted plot details"
                          value={newMigData.allottedPlotDetails}
                          onChange={(e) => setNewMigData({...newMigData, allottedPlotDetails: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Available Plots</label>
                        <input
                          type="number"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter available plots"
                          value={newMigData.availablePlots}
                          onChange={(e) => setNewMigData({...newMigData, availablePlots: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Layout Copy</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter layout copy reference"
                          value={newMigData.layoutCopy}
                          onChange={(e) => setNewMigData({...newMigData, layoutCopy: e.target.value})}
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleAddMigInfo}
                      className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Upload size={18} />
                      <span>Add MIG Information</span>
                    </button>
                  </div>
                )}

                {/* MIG Information List Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="px-8 py-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Building className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">MIG Information</h3>
                        <p className="text-gray-600">Middle Income Group layout information and availability</p>
                      </div>
                    </div>
                  </div>

                  {migInformationData.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Layout Name</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate Per Sq Yard</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Plots</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allotted Plot Details</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available Plots</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Layout Copy</th>
                            {isAuthenticated && (
                              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {migInformationData.map((mig, index) => (
                            <tr key={mig.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                    <Building size={16} className="text-orange-600" />
                                  </div>
                                  <div className="text-sm font-medium text-gray-900">{mig.layoutName}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{mig.ratePerSqYard}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{mig.totalPlots}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{mig.allottedPlotDetails}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  {mig.availablePlots} Available
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                                  <FileText size={16} />
                                  <span>{mig.layoutCopy}</span>
                                </button>
                              </td>
                              {isAuthenticated && (
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <button
                                    onClick={() => handleDeleteMigInfo(mig.id)}
                                    className="text-red-600 hover:text-red-900 flex items-center space-x-1 transition-colors"
                                  >
                                    <XCircle size={16} />
                                    <span>Delete</span>
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="px-8 py-12 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building size={24} className="text-gray-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-600 mb-2">No MIG Information Available</h4>
                      <p className="text-gray-500 mb-6">
                        {isAuthenticated 
                          ? "Use the form above to add the first MIG layout information." 
                          : "MIG information will be displayed here once added by the administrator."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Master Plans Page
    if (showMasterPlansPage) {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowMasterPlansPage(false)}
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Master Plans Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Master Plans</h1>
                <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed">
                  Draft and Approved Master Plans for Urban Development
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Master Plans Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto space-y-12">
                
                {/* Draft Master Plans Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Draft Master Plans</h3>
                        <p className="text-gray-600">Draft master plans under review and development</p>
                      </div>
                    </div>
                  </div>

                  {/* Admin Upload Section for Draft Plans */}
                  {isAuthenticated && (
                    <div className="p-8 bg-blue-50 border-b border-gray-200">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Upload className="w-4 h-4 text-blue-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-800">Add Draft Master Plan</h4>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Name of ULB</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter ULB name"
                            value={newDraftPlanData.nameOfULB}
                            onChange={(e) => setNewDraftPlanData({...newDraftPlanData, nameOfULB: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter description"
                            value={newDraftPlanData.description}
                            onChange={(e) => setNewDraftPlanData({...newDraftPlanData, description: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Download Option</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter file name or link"
                            value={newDraftPlanData.downloadOption}
                            onChange={(e) => setNewDraftPlanData({...newDraftPlanData, downloadOption: e.target.value})}
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleAddDraftPlan}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center space-x-2"
                      >
                        <Upload size={18} />
                        <span>Add Draft Plan</span>
                      </button>
                    </div>
                  )}

                  {/* Draft Plans Table */}
                  {draftMasterPlansData.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name of ULB</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Download Option</th>
                            {isAuthenticated && (
                              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {draftMasterPlansData.map((plan, index) => (
                            <tr key={plan.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{plan.nameOfULB}</td>
                              <td className="px-6 py-4 text-sm text-gray-900">{plan.description}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                                  <Download size={16} />
                                  <span>{plan.downloadOption}</span>
                                </button>
                              </td>
                              {isAuthenticated && (
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <button
                                    onClick={() => handleDeleteDraftPlan(plan.id)}
                                    className="text-red-600 hover:text-red-900 flex items-center space-x-1 transition-colors"
                                  >
                                    <XCircle size={16} />
                                    <span>Delete</span>
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="px-8 py-12 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText size={24} className="text-gray-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-600 mb-2">No Draft Master Plans Available</h4>
                      <p className="text-gray-500">
                        {isAuthenticated 
                          ? "Use the form above to add the first draft master plan." 
                          : "Draft master plans will be displayed here once added by the administrator."}
                      </p>
                    </div>
                  )}
                </div>

                {/* Approved Master Plans Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Approved Master Plans</h3>
                        <p className="text-gray-600">Officially approved master plans for implementation</p>
                      </div>
                    </div>
                  </div>

                  {/* Admin Upload Section for Approved Plans */}
                  {isAuthenticated && (
                    <div className="p-8 bg-green-50 border-b border-gray-200">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <Upload className="w-4 h-4 text-green-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-800">Add Approved Master Plan</h4>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Name of ULB</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Enter ULB name"
                            value={newApprovedPlanData.nameOfULB}
                            onChange={(e) => setNewApprovedPlanData({...newApprovedPlanData, nameOfULB: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Enter description"
                            value={newApprovedPlanData.description}
                            onChange={(e) => setNewApprovedPlanData({...newApprovedPlanData, description: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Download Option</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Enter file name or link"
                            value={newApprovedPlanData.downloadOption}
                            onChange={(e) => setNewApprovedPlanData({...newApprovedPlanData, downloadOption: e.target.value})}
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleAddApprovedPlan}
                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center space-x-2"
                      >
                        <Upload size={18} />
                        <span>Add Approved Plan</span>
                      </button>
                    </div>
                  )}

                  {/* Approved Plans Table */}
                  {approvedMasterPlansData.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name of ULB</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Download Option</th>
                            {isAuthenticated && (
                              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {approvedMasterPlansData.map((plan, index) => (
                            <tr key={plan.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{plan.nameOfULB}</td>
                              <td className="px-6 py-4 text-sm text-gray-900">{plan.description}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <button className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors">
                                  <Download size={16} />
                                  <span>{plan.downloadOption}</span>
                                </button>
                              </td>
                              {isAuthenticated && (
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <button
                                    onClick={() => handleDeleteApprovedPlan(plan.id)}
                                    className="text-red-600 hover:text-red-900 flex items-center space-x-1 transition-colors"
                                  >
                                    <XCircle size={16} />
                                    <span>Delete</span>
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="px-8 py-12 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={24} className="text-gray-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-600 mb-2">No Approved Master Plans Available</h4>
                      <p className="text-gray-500">
                        {isAuthenticated 
                          ? "Use the form above to add the first approved master plan." 
                          : "Approved master plans will be displayed here once added by the administrator."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // RTI Page
    if (showRtiPage) {
      return (
        <div>
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowRtiPage(false)}
              className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>
          
          <section className="relative py-20 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">RTI - Right to Information</h1>
                <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
                  List of Appellate Authorities for RTI Applications
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-teal-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">List of Appellate Authorities</h2>
                  <p className="text-lg text-gray-600">
                    {isAuthenticated 
                      ? 'Manage appellate authorities information for RTI applications.' 
                      : 'Contact details of appellate authorities for RTI applications.'}
                  </p>
                </div>

                {/* Admin Add New Authority Section */}
                {isAuthenticated && (
                  <div className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                      <div className="flex items-center mb-6">
                        <Shield className="w-6 h-6 mr-3 text-teal-600" />
                        <h3 className="text-xl font-semibold text-gray-800">Add New Appellate Authority</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Section</label>
                          <input
                            type="text"
                            value={newAuthorityData.section}
                            onChange={(e) => setNewAuthorityData({...newAuthorityData, section: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            placeholder="e.g., Planning Section, Engineering Section"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Officer Name & Designation</label>
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={newAuthorityData.officerName}
                              onChange={(e) => setNewAuthorityData({...newAuthorityData, officerName: e.target.value})}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                              placeholder="Officer Name"
                            />
                            <input
                              type="text"
                              value={newAuthorityData.designation}
                              onChange={(e) => setNewAuthorityData({...newAuthorityData, designation: e.target.value})}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                              placeholder="Designation"
                            />
                          </div>
                        </div>
                        
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Details</label>
                          <input
                            type="text"
                            value={newAuthorityData.contactDetails}
                            onChange={(e) => setNewAuthorityData({...newAuthorityData, contactDetails: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            placeholder="Phone number, email address"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <button
                            onClick={handleAddNewAuthority}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                          >
                            <Plus size={20} />
                            <span>Add Authority</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Appellate Authorities Table */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-6">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <Users className="w-6 h-6 mr-3" />
                      Appellate Authorities List
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    {appellateAuthorities.length === 0 ? (
                      <div className="text-center py-12">
                        <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-gray-600 mb-2">No Appellate Authorities Available</h4>
                        <p className="text-gray-500">
                          {isAuthenticated 
                            ? 'Add the first appellate authority to get started.' 
                            : 'No appellate authorities have been added yet.'}
                        </p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-4 px-4 font-semibold text-gray-700">S.No</th>
                              <th className="text-left py-4 px-4 font-semibold text-gray-700">Section</th>
                              <th className="text-left py-4 px-4 font-semibold text-gray-700">Officer Name & Designation</th>
                              <th className="text-left py-4 px-4 font-semibold text-gray-700">Contact Details</th>
                              {isAuthenticated && (
                                <th className="text-left py-4 px-4 font-semibold text-gray-700">Actions</th>
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {appellateAuthorities.map((authority) => (
                              <tr key={authority.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-4 px-4 text-gray-900">{authority.sno}</td>
                                <td className="py-4 px-4 text-gray-900 font-medium">{authority.section}</td>
                                <td className="py-4 px-4">
                                  <div>
                                    <div className="font-medium text-gray-900">{authority.officerName}</div>
                                    <div className="text-sm text-gray-600">{authority.designation}</div>
                                  </div>
                                </td>
                                <td className="py-4 px-4 text-gray-900">{authority.contactDetails}</td>
                                {isAuthenticated && (
                                  <td className="py-4 px-4">
                                    <button
                                      onClick={() => handleDeleteAuthority(authority.id)}
                                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Gallery Page
    if (showGalleryPage) {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowGalleryPage(false)}
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Gallery Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
                <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
                  Explore Visual Stories of Development and Progress
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Gallery Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                {/* Page Description */}
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Image Gallery</h2>
                  <p className="text-lg text-gray-600">
                    {isAuthenticated 
                      ? 'Upload and manage photos to showcase development activities.' 
                      : 'Browse through our collection of development projects and activities.'}
                  </p>
                </div>

                {/* Admin Upload Section */}
                {isAuthenticated && (
                  <div className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                      <div className="flex items-center mb-6">
                        <Shield className="w-6 h-6 mr-3 text-purple-600" />
                        <h3 className="text-xl font-semibold text-gray-800">Upload Images</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Image Title</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter image title or description"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Select Images</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                            <p className="text-sm text-gray-500">JPG, PNG, GIF files only</p>
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              multiple
                              onChange={(e) => {
                                if (e.target.files) {
                                  Array.from(e.target.files).forEach(file => {
                                    const newImage = {
                                      id: Date.now() + Math.random(),
                                      title: file.name,
                                      fileName: file.name,
                                      fileSize: (file.size / 1024 / 1024).toFixed(2) + ' MB',
                                      uploadDate: new Date().toLocaleDateString(),
                                      image: URL.createObjectURL(file)
                                    };
                                    setGalleryImages([...galleryImages, newImage]);
                                    localStorage.setItem('galleryImages', JSON.stringify([...galleryImages, newImage]));
                                  });
                                }
                              }}
                            />
                            <button
                              onClick={() => document.querySelector('input[accept="image/*"]').click()}
                              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                            >
                              Choose Images
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Images Grid */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <Camera className="w-6 h-6 mr-3" />
                      Photo Gallery
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    {galleryImages.length === 0 ? (
                      <div className="text-center py-12">
                        <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-gray-600 mb-2">No Images Available</h4>
                        <p className="text-gray-500">
                          {isAuthenticated 
                            ? 'Upload the first image to get started.' 
                            : 'No images have been uploaded yet.'}
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image) => (
                          <div key={image.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                            <div className="aspect-video bg-gray-100 cursor-pointer" onClick={() => openImageModal(image)}>
                              <img
                                src={image.image}
                                alt={image.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="font-medium text-gray-900 mb-2">{image.title}</h4>
                              <p className="text-sm text-gray-500 mb-3">
                                {image.fileSize} • Uploaded on {image.uploadDate}
                              </p>
                              {isAuthenticated && (
                                <button
                                  onClick={() => {
                                    const updatedImages = galleryImages.filter(img => img.id !== image.id);
                                    setGalleryImages(updatedImages);
                                    localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
                                  }}
                                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                                >
                                  Delete
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Downloads Page
    if (showDownloadsPage) {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowDownloadsPage(false)}
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Downloads Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Download className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Downloads Center</h1>
                <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed">
                  Access Important Documents, Forms, and Resources
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Downloads Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                {/* Page Description */}
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Document Repository</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Download important documents, forms, reports, and resources. 
                    {isAuthenticated ? ' As an administrator, you can upload new documents for public access.' : ' Contact the administrator to request additional documents.'}
                  </p>
                </div>

                {/* Admin Upload Section */}
                {isAuthenticated && (
                  <div className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                      <div className="flex items-center mb-6">
                        <Shield className="w-6 h-6 mr-3 text-indigo-600" />
                        <h3 className="text-xl font-semibold text-gray-800">Upload Documents</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Document Title</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter document title"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Select File</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                            <p className="text-sm text-gray-500">PDF, DOC, DOCX files only</p>
                            <input
                              type="file"
                              className="hidden"
                              accept=".pdf,.doc,.docx"
                              onChange={(e) => {
                                if (e.target.files[0]) {
                                  const file = e.target.files[0];
                                  const newUpload = {
                                    id: Date.now(),
                                    title: file.name,
                                    fileName: file.name,
                                    fileSize: (file.size / 1024 / 1024).toFixed(2) + ' MB',
                                    uploadDate: new Date().toLocaleDateString(),
                                    file: URL.createObjectURL(file)
                                  };
                                  setUploadsData([...uploadsData, newUpload]);
                                  localStorage.setItem('uploadsData', JSON.stringify([...uploadsData, newUpload]));
                                }
                              }}
                            />
                            <button
                              onClick={() => document.querySelector('input[type="file"]').click()}
                              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                            >
                              Choose File
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Documents List */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <Download className="w-6 h-6 mr-3" />
                      Available Documents
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    {uploadsData.length === 0 ? (
                      <div className="text-center py-12">
                        <Download className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-gray-600 mb-2">No Documents Available</h4>
                        <p className="text-gray-500">
                          {isAuthenticated 
                            ? 'Upload the first document to get started.' 
                            : 'No documents have been uploaded yet.'}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {uploadsData.map((upload) => (
                          <div key={upload.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <Download className="w-6 h-6 text-indigo-600" />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{upload.title}</h4>
                                <p className="text-sm text-gray-500">
                                  {upload.fileSize} • Uploaded on {upload.uploadDate}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <a
                                href={upload.file}
                                download={upload.fileName}
                                className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                              >
                                <Download size={16} />
                                <span>Download</span>
                              </a>
                              
                              {isAuthenticated && (
                                <button
                                  onClick={() => {
                                    const updatedUploads = uploadsData.filter(u => u.id !== upload.id);
                                    setUploadsData(updatedUploads);
                                    localStorage.setItem('uploadsData', JSON.stringify(updatedUploads));
                                  }}
                                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                                >
                                  Delete
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    if (currentPage === 'services' && currentServicePage === 'town-planning' && showApprovedLayoutsPage) {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowApprovedLayoutsPage(false)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Town Planning</span>
            </button>
          </div>

          {/* Approved Layouts Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Approved Layouts</h1>
                <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                  Comprehensive Database of All Approved Layout Plans and Development Schemes
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Approved Layouts Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                {/* Page Description */}
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Official Approved Layouts Repository</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Access the complete database of approved layout plans, development schemes, and their corresponding 
                    FLP (Formation of Layout Permission) proceedings. All layouts listed here have received official 
                    approval from AHUDA and are authorized for development.
                  </p>
                </div>

                {/* Main Data Table Section */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">Approved Layouts Database</h3>
                          <p className="text-green-100">Complete list of approved layout plans and development schemes</p>
                        </div>
                      </div>
                      {/* Admin Add New Layout Button */}
                      {isAuthenticated && (
                        <button 
                          onClick={() => setIsAddingNewLayout(true)}
                          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2"
                        >
                          <Plus size={20} />
                          <span>Add New Layout</span>
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    {/* Table Controls */}
                    <div className="mb-6 flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">Layout Records</h4>
                        <p className="text-gray-600">Total Records: {approvedLayoutsData.length}</p>
                      </div>
                      {isAuthenticated && (
                        <div className="text-sm text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                          ✓ Admin Mode: You can add and manage records
                        </div>
                      )}
                    </div>
                    
                    {/* Data Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-gradient-to-r from-green-100 to-emerald-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">S.No</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Layout Developer</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Extent & Location</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Download FLP Proceedings</th>
                            {isAuthenticated && <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Actions</th>}
                          </tr>
                        </thead>
                        <tbody>
                          {/* Add New Layout Row (Admin Only) */}
                          {isAuthenticated && isAddingNewLayout && (
                            <tr className="bg-green-50 border-2 border-green-300">
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">
                                {approvedLayoutsData.length + 1}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="text"
                                  value={newLayoutData.layoutDeveloper}
                                  onChange={(e) => setNewLayoutData({...newLayoutData, layoutDeveloper: e.target.value})}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                  placeholder="Enter developer name"
                                />
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="text"
                                  value={newLayoutData.extentLocation}
                                  onChange={(e) => setNewLayoutData({...newLayoutData, extentLocation: e.target.value})}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                  placeholder="Enter extent & location"
                                />
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="text"
                                  value={newLayoutData.flpProceedings}
                                  onChange={(e) => setNewLayoutData({...newLayoutData, flpProceedings: e.target.value})}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                  placeholder="Enter proceedings link/file"
                                />
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <div className="flex space-x-2">
                                  <button
                                    onClick={isEditingLayout ? handleUpdateLayout : handleAddNewLayout}
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                                    title={isEditingLayout ? "Update Layout" : "Save Layout"}
                                  >
                                    {isEditingLayout ? "Update" : "Save"}
                                  </button>
                                  <button
                                    onClick={isEditingLayout ? handleCancelEditLayout : handleCancelAddLayout}
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                                    title="Cancel"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )}
                          
                          {/* Existing Data Rows */}
                          {approvedLayoutsData.length === 0 ? (
                            <tr>
                              <td colSpan={isAuthenticated ? "5" : "4"} className="border border-gray-300 px-4 py-12 text-center text-gray-500">
                                <div className="flex flex-col items-center">
                                  <CheckCircle className="w-16 h-16 text-gray-300 mb-4" />
                                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No Approved Layouts Available</h3>
                                  <p className="text-gray-500">
                                    {isAuthenticated 
                                      ? 'Click "Add New Layout" to add the first record to the database.' 
                                      : 'Contact the administrator to add approved layout records to the database.'
                                    }
                                  </p>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            approvedLayoutsData.map((layout, index) => (
                              <tr key={layout.id} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">{layout.sno}</td>
                                <td className="border border-gray-300 px-4 py-3 text-gray-700">{layout.layoutDeveloper}</td>
                                <td className="border border-gray-300 px-4 py-3 text-gray-700">{layout.extentLocation}</td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a 
                                    href={layout.flpProceedings} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg"
                                  >
                                    <Download size={16} />
                                    <span>Download FLP</span>
                                  </a>
                                </td>
                                {isAuthenticated && (
                                  <td className="border border-gray-300 px-4 py-3">
                                    <div className="flex space-x-2">
                                      <button
                                        onClick={() => handleEditLayout(layout)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                                        title="Edit Layout"
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={() => handleDeleteLayout(layout.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                                        title="Delete Layout"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </td>
                                )}
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Table Footer */}
                    {approvedLayoutsData.length > 0 && (
                      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex justify-between items-center text-sm">
                          <div className="text-gray-600">
                            <span className="font-medium">Database Status:</span> {approvedLayoutsData.length} approved layout(s) on record
                          </div>
                          <div className="text-green-600 font-medium">
                            ✓ All layouts are officially approved by AHUDA
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <FileText className="w-5 h-5 text-green-600 mr-2" />
                      About FLP Proceedings
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Formation of Layout Permission (FLP) proceedings contain detailed documentation of the 
                      approval process, including site surveys, compliance certificates, and official 
                      authorization documents for each approved layout.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-blue-600 mr-2" />
                      Verification Notice
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      All layouts listed in this database have been verified and approved by AHUDA. 
                      Before making any investment decisions, please verify the current status 
                      directly with AHUDA offices.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      );
    }

    if (currentPage === 'services' && currentServicePage === 'town-planning' && showApprovedBuildingsPage) {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowApprovedBuildingsPage(false)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Town Planning</span>
            </button>
          </div>

          {/* Approved Buildings Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Approved Buildings</h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Comprehensive Database of All Approved Building Permits and Constructions
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Approved Buildings Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                {/* Page Description */}
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Official Approved Buildings Repository</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Access the complete database of approved building permits, construction approvals, and their corresponding 
                    FLP (Formation of Layout Permission) proceedings. All buildings listed here have received official 
                    approval from AHUDA and are authorized for construction.
                  </p>
                </div>

                {/* Main Data Table Section */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <Building className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">Approved Buildings Database</h3>
                          <p className="text-blue-100">Complete list of approved building permits and constructions</p>
                        </div>
                      </div>
                      {/* Admin Add New Building Button */}
                      {isAuthenticated && (
                        <button 
                          onClick={() => setIsAddingNewBuilding(true)}
                          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2"
                        >
                          <Plus size={20} />
                          <span>Add New Building</span>
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    {/* Table Controls */}
                    <div className="mb-6 flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">Building Records</h4>
                        <p className="text-gray-600">Total Records: {approvedBuildingsData.length}</p>
                      </div>
                      {isAuthenticated && (
                        <div className="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                          ✓ Admin Mode: You can add and manage records
                        </div>
                      )}
                    </div>
                    
                    {/* Data Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-gradient-to-r from-blue-100 to-indigo-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">S.No</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Developer</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Extent & Location</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Download FLP Proceedings</th>
                            {isAuthenticated && <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Actions</th>}
                          </tr>
                        </thead>
                        <tbody>
                          {/* Add New Building Row (Admin Only) */}
                          {isAuthenticated && isAddingNewBuilding && (
                            <tr className="bg-blue-50 border-2 border-blue-300">
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">
                                {approvedBuildingsData.length + 1}
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="text"
                                  value={newBuildingData.developer}
                                  onChange={(e) => setNewBuildingData({...newBuildingData, developer: e.target.value})}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Enter developer name"
                                />
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="text"
                                  value={newBuildingData.extentLocation}
                                  onChange={(e) => setNewBuildingData({...newBuildingData, extentLocation: e.target.value})}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Enter extent & location"
                                />
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="text"
                                  value={newBuildingData.flpProceedings}
                                  onChange={(e) => setNewBuildingData({...newBuildingData, flpProceedings: e.target.value})}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Enter proceedings link/file"
                                />
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <div className="flex space-x-2">
                                  <button
                                    onClick={isEditingBuilding ? handleUpdateBuilding : handleAddNewBuilding}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                    title={isEditingBuilding ? "Update Building" : "Save Building"}
                                  >
                                    {isEditingBuilding ? "Update" : "Save"}
                                  </button>
                                  <button
                                    onClick={isEditingBuilding ? handleCancelEditBuilding : handleCancelAddBuilding}
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                    title="Cancel"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )}
                          
                          {/* Existing Data Rows */}
                          {approvedBuildingsData.length === 0 ? (
                            <tr>
                              <td colSpan={isAuthenticated ? "5" : "4"} className="border border-gray-300 px-4 py-12 text-center text-gray-500">
                                <div className="flex flex-col items-center">
                                  <Building className="w-16 h-16 text-gray-300 mb-4" />
                                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No Approved Buildings Available</h3>
                                  <p className="text-gray-500">
                                    {isAuthenticated 
                                      ? 'Click "Add New Building" to add the first record to the database.' 
                                      : 'Contact the administrator to add approved building records to the database.'
                                    }
                                  </p>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            approvedBuildingsData.map((building, index) => (
                              <tr key={building.id} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">{building.sno}</td>
                                <td className="border border-gray-300 px-4 py-3 text-gray-700">{building.developer}</td>
                                <td className="border border-gray-300 px-4 py-3 text-gray-700">{building.extentLocation}</td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a 
                                    href={building.flpProceedings} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg"
                                  >
                                    <Download size={16} />
                                    <span>Download FLP</span>
                                  </a>
                                </td>
                                {isAuthenticated && (
                                  <td className="border border-gray-300 px-4 py-3">
                                    <div className="flex space-x-2">
                                      <button
                                        onClick={() => handleEditBuilding(building)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                                        title="Edit Building"
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={() => handleDeleteBuilding(building.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                                        title="Delete Building"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </td>
                                )}
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Table Footer */}
                    {approvedBuildingsData.length > 0 && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex justify-between items-center text-sm">
                          <div className="text-gray-600">
                            <span className="font-medium">Database Status:</span> {approvedBuildingsData.length} approved building(s) on record
                          </div>
                          <div className="text-blue-600 font-medium">
                            ✓ All buildings are officially approved by AHUDA
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <FileText className="w-5 h-5 text-blue-600 mr-2" />
                      About Building Approvals
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Building approval proceedings contain comprehensive documentation including structural plans, 
                      safety compliance certificates, environmental clearances, and official authorization 
                      documents for each approved construction project.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-green-600 mr-2" />
                      Compliance Notice
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      All buildings listed in this database have met AHUDA's safety and regulatory standards. 
                      For the most current information regarding building status and permits, 
                      please contact AHUDA directly.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      );
    }

    if (currentPage === 'services' && currentServicePage === 'town-planning') {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setCurrentServicePage(null)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Services</span>
            </button>
          </div>

          {/* Town Planning Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Town Planning</h1>
                <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
                  Comprehensive Planning Documentation and Layout Management
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Town Planning Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                {/* List of Approved Layouts */}
                <div className="mb-16">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">List of Approved Layouts</h2>
                          <p className="text-green-100">View all approved layout plans and development schemes</p>
                        </div>
                      </div>
                    </div>
                    
                      <div className="p-8">
                        <button 
                          onClick={() => setShowApprovedLayoutsPage(true)}
                          className="w-full bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 p-8 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                        >
                          <div className="flex items-center justify-center mb-4">
                            <CheckCircle className="w-12 h-12 text-green-600 group-hover:text-green-700 mr-4" />
                            <div className="text-left">
                              <h3 className="text-xl font-bold text-gray-800 mb-2">View Approved Layouts</h3>
                              <p className="text-gray-600">Click to open the complete approved layouts database</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-green-600 group-hover:text-green-700 font-medium">
                            <Eye size={20} />
                            <span>Open Database</span>
                            <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
                          </div>
                        </button>
                      </div>
                  </div>
                </div>

                {/* List of Approved Buildings */}
                <div className="mb-16">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <Building className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">List of Approved Buildings</h2>
                          <p className="text-blue-100">Click to view all approved building permits and constructions</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <button 
                        onClick={() => setShowApprovedBuildingsPage(true)}
                        className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                      >
                        <div className="flex items-center justify-center mb-4">
                          <Building className="w-12 h-12 text-blue-600 group-hover:text-blue-700 mr-4" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">View Approved Buildings</h3>
                            <p className="text-gray-600">Click to open the complete approved buildings database</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-blue-600 group-hover:text-blue-700 font-medium">
                          <Eye size={20} />
                          <span>Open Database</span>
                          <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Unauthorized Layouts Prior to AHUDA Formation */}
                <div className="mb-16">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-600 to-red-700 p-8">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <XCircle className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">Unauthorized Layouts Prior to AHUDA Formation</h2>
                          <p className="text-orange-100">Click to view or upload PDF documents</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className={`grid gap-6 ${isAuthenticated ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                        {/* View Data Button */}
                        <button 
                          onClick={() => setShowUnauthorizedPriorDocuments(!showUnauthorizedPriorDocuments)}
                          className="bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 p-6 rounded-xl border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                        >
                          <div className="flex items-center justify-center mb-4">
                            <Eye className="w-10 h-10 text-orange-600 group-hover:text-orange-700 mr-3" />
                            <div className="text-left">
                              <h3 className="text-lg font-bold text-gray-800 mb-1">View Documents</h3>
                              <p className="text-gray-600 text-sm">Click to view available documents</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-orange-600 group-hover:text-orange-700 font-medium">
                            <span>{showUnauthorizedPriorDocuments ? 'Hide Documents' : 'Show Documents'}</span>
                            <ChevronRight className={`group-hover:translate-x-1 transition-transform duration-200 ${showUnauthorizedPriorDocuments ? 'rotate-90' : ''}`} size={16} />
                          </div>
                        </button>

                        {/* Upload Button - Only visible to authenticated admins */}
                        {isAuthenticated && (
                          <button 
                            onClick={() => {/* Add your upload logic here */}}
                            className="bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 p-6 rounded-xl border-2 border-dashed border-orange-300 hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                          >
                            <div className="flex items-center justify-center mb-4">
                              <Upload className="w-10 h-10 text-orange-600 group-hover:text-orange-700 mr-3" />
                              <div className="text-left">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">Upload PDF</h3>
                                <p className="text-gray-600 text-sm">Click to upload new documents</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-center space-x-2 text-orange-600 group-hover:text-orange-700 font-medium">
                              <span>Choose Files</span>
                              <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
                            </div>
                          </button>
                        )}
                      </div>

                      {/* Download Documents Section */}
                      {showUnauthorizedPriorDocuments && (
                        <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <Download className="w-5 h-5 text-orange-600 mr-2" />
                            Available Documents for Download
                          </h4>
                          <div className="grid gap-3">
                            {sampleDocuments.unauthorizedPriorAhuda.map((doc, index) => (
                              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-orange-200 hover:border-orange-300 transition-colors duration-200">
                                <div className="flex items-center">
                                  <FileText className="w-5 h-5 text-orange-600 mr-3" />
                                  <span className="font-medium text-gray-800">{doc.name}</span>
                                </div>
                                <button
                                  onClick={() => handleDownloadDocument(doc.name, doc.url)}
                                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                                >
                                  <Download size={16} />
                                  <span>Download</span>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Unauthorized Layouts After AHUDA Formation */}
                <div className="mb-16">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-red-600 to-pink-700 p-8">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <AlertTriangle className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">Unauthorized Layouts After AHUDA Formation</h2>
                          <p className="text-red-100">Click to view or upload PDF documents</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className={`grid gap-6 ${isAuthenticated ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                        {/* View Data Button */}
                        <button 
                          onClick={() => setShowUnauthorizedAfterDocuments(!showUnauthorizedAfterDocuments)}
                          className="bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 p-6 rounded-xl border-2 border-red-200 hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                        >
                          <div className="flex items-center justify-center mb-4">
                            <Eye className="w-10 h-10 text-red-600 group-hover:text-red-700 mr-3" />
                            <div className="text-left">
                              <h3 className="text-lg font-bold text-gray-800 mb-1">View Documents</h3>
                              <p className="text-gray-600 text-sm">Click to view available documents</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-red-600 group-hover:text-red-700 font-medium">
                            <span>{showUnauthorizedAfterDocuments ? 'Hide Documents' : 'Show Documents'}</span>
                            <ChevronRight className={`group-hover:translate-x-1 transition-transform duration-200 ${showUnauthorizedAfterDocuments ? 'rotate-90' : ''}`} size={16} />
                          </div>
                        </button>

                        {/* Upload Button - Only visible to authenticated admins */}
                        {isAuthenticated && (
                          <button 
                            onClick={() => {/* Add your upload logic here */}}
                            className="bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 p-6 rounded-xl border-2 border-dashed border-red-300 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                          >
                            <div className="flex items-center justify-center mb-4">
                              <Upload className="w-10 h-10 text-red-600 group-hover:text-red-700 mr-3" />
                              <div className="text-left">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">Upload PDF</h3>
                                <p className="text-gray-600 text-sm">Click to upload new documents</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-center space-x-2 text-red-600 group-hover:text-red-700 font-medium">
                              <span>Choose Files</span>
                              <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
                            </div>
                          </button>
                        )}
                      </div>

                      {/* Download Documents Section */}
                      {showUnauthorizedAfterDocuments && (
                        <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <Download className="w-5 h-5 text-red-600 mr-2" />
                            Available Documents for Download
                          </h4>
                          <div className="grid gap-3">
                            {sampleDocuments.unauthorizedAfterAhuda.map((doc, index) => (
                              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-200 hover:border-red-300 transition-colors duration-200">
                                <div className="flex items-center">
                                  <FileText className="w-5 h-5 text-red-600 mr-3" />
                                  <span className="font-medium text-gray-800">{doc.name}</span>
                                </div>
                                <button
                                  onClick={() => handleDownloadDocument(doc.name, doc.url)}
                                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                                >
                                  <Download size={16} />
                                  <span>Download</span>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* List of Unapproved Buildings */}
                <div className="mb-16">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-600 to-slate-700 p-8">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">List of Unapproved Buildings</h2>
                          <p className="text-gray-100">Click to view or upload PDF documents</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className={`grid gap-6 ${isAuthenticated ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                        {/* View Data Button */}
                        <button 
                          onClick={() => setShowUnapprovedBuildingsDocuments(!showUnapprovedBuildingsDocuments)}
                          className="bg-gradient-to-r from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 p-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                        >
                          <div className="flex items-center justify-center mb-4">
                            <Eye className="w-10 h-10 text-gray-600 group-hover:text-gray-700 mr-3" />
                            <div className="text-left">
                              <h3 className="text-lg font-bold text-gray-800 mb-1">View Documents</h3>
                              <p className="text-gray-600 text-sm">Click to view available documents</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-gray-600 group-hover:text-gray-700 font-medium">
                            <span>{showUnapprovedBuildingsDocuments ? 'Hide Documents' : 'Show Documents'}</span>
                            <ChevronRight className={`group-hover:translate-x-1 transition-transform duration-200 ${showUnapprovedBuildingsDocuments ? 'rotate-90' : ''}`} size={16} />
                          </div>
                        </button>

                        {/* Upload Button - Only visible to authenticated admins */}
                        {isAuthenticated && (
                          <button 
                            onClick={() => {/* Add your upload logic here */}}
                            className="bg-gradient-to-r from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                          >
                            <div className="flex items-center justify-center mb-4">
                              <Upload className="w-10 h-10 text-gray-600 group-hover:text-gray-700 mr-3" />
                              <div className="text-left">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">Upload PDF</h3>
                                <p className="text-gray-600 text-sm">Click to upload new documents</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-center space-x-2 text-gray-600 group-hover:text-gray-700 font-medium">
                              <span>Choose Files</span>
                              <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
                            </div>
                          </button>
                        )}
                      </div>

                      {/* Download Documents Section */}
                      {showUnapprovedBuildingsDocuments && (
                        <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-200">
                          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <Download className="w-5 h-5 text-gray-600 mr-2" />
                            Available Documents for Download
                          </h4>
                          <div className="grid gap-3">
                            {sampleDocuments.unapprovedBuildings.map((doc, index) => (
                              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                                <div className="flex items-center">
                                  <FileText className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-800">{doc.name}</span>
                                </div>
                                <button
                                  onClick={() => handleDownloadDocument(doc.name, doc.url)}
                                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                                >
                                  <Download size={16} />
                                  <span>Download</span>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      );
    }

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

    // Completed Works Dedicated Page
    if (showCompletedWorksPage) {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowCompletedWorksPage(false)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Engineering</span>
            </button>
          </div>

          {/* Completed Works Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Completed Works</h1>
                <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                  Browse all successfully completed engineering projects and infrastructure developments
                </p>
              </div>
            </div>
          </section>

          {/* Completed Works Table Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Works Database</h2>
                {isAuthenticated && (
                  <button
                    onClick={() => setIsAddingNewCompletedWork(true)}
                    className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                  >
                    <Plus size={20} />
                    <span>Add New Work</span>
                  </button>
                )}
              </div>

              {/* Add New Completed Work Form */}
              {isAddingNewCompletedWork && isAuthenticated && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Completed Work</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name of Work</label>
                      <input
                        type="text"
                        value={newCompletedWorkData.nameOfWork}
                        onChange={(e) => setNewCompletedWorkData({...newCompletedWorkData, nameOfWork: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter work name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Est Cost (₹)</label>
                      <input
                        type="text"
                        value={newCompletedWorkData.estCost}
                        onChange={(e) => setNewCompletedWorkData({...newCompletedWorkData, estCost: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter estimated cost"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Remarks</label>
                      <input
                        type="text"
                        value={newCompletedWorkData.remarks}
                        onChange={(e) => setNewCompletedWorkData({...newCompletedWorkData, remarks: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter remarks"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddNewCompletedWork}
                      className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      <CheckCircle size={18} />
                      <span>Add Work</span>
                    </button>
                    <button
                      onClick={handleCancelAddCompletedWork}
                      className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    >
                      <XCircle size={18} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Completed Works Table */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-green-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">S.No</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Name of Work</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Est Cost (₹)</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Remarks</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {completedWorksData.length > 0 ? (
                        completedWorksData.map((work, index) => (
                          <tr key={work.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 text-sm text-gray-900">{work.sno}</td>
                            <td className="px-6 py-4 text-sm text-gray-900 font-medium">{work.nameOfWork}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">₹{work.estCost}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{work.remarks}</td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <CheckCircle size={14} className="mr-1" />
                                Completed
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                            No completed works available. {isAuthenticated ? 'Add the first work using the button above.' : 'Please contact administrator to add works.'}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Works Under Progress Dedicated Page
    if (showWorksUnderProgressPage) {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowWorksUnderProgressPage(false)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Engineering</span>
            </button>
          </div>

          {/* Works Under Progress Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Works Under Progress</h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Monitor ongoing engineering projects and infrastructure developments
                </p>
              </div>
            </div>
          </section>

          {/* Works Under Progress Table Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Ongoing Projects Database</h2>
                {isAuthenticated && (
                  <button
                    onClick={() => setIsAddingNewProgressWork(true)}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    <Plus size={20} />
                    <span>Add New Work</span>
                  </button>
                )}
              </div>

              {/* Add New Progress Work Form */}
              {isAddingNewProgressWork && isAuthenticated && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Work Under Progress</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name of Work</label>
                      <input
                        type="text"
                        value={newProgressWorkData.nameOfWork}
                        onChange={(e) => setNewProgressWorkData({...newProgressWorkData, nameOfWork: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter work name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Est Cost (₹)</label>
                      <input
                        type="text"
                        value={newProgressWorkData.estCost}
                        onChange={(e) => setNewProgressWorkData({...newProgressWorkData, estCost: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter estimated cost"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Remarks</label>
                      <input
                        type="text"
                        value={newProgressWorkData.remarks}
                        onChange={(e) => setNewProgressWorkData({...newProgressWorkData, remarks: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter remarks"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddNewProgressWork}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <CheckCircle size={18} />
                      <span>Add Work</span>
                    </button>
                    <button
                      onClick={handleCancelAddProgressWork}
                      className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    >
                      <XCircle size={18} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Works Under Progress Table */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">S.No</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Name of Work</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Est Cost (₹)</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Remarks</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {worksUnderProgressData.length > 0 ? (
                        worksUnderProgressData.map((work, index) => (
                          <tr key={work.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 text-sm text-gray-900">{work.sno}</td>
                            <td className="px-6 py-4 text-sm text-gray-900 font-medium">{work.nameOfWork}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">₹{work.estCost}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{work.remarks}</td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                <Clock size={14} className="mr-1" />
                                In Progress
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                            No works under progress available. {isAuthenticated ? 'Add the first work using the button above.' : 'Please contact administrator to add works.'}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    if (currentPage === 'services' && currentServicePage === 'engineering') {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setCurrentServicePage(null)}
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Services</span>
            </button>
          </div>

          {/* Engineering Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Engineering</h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Infrastructure Development and Project Management for AHUDA
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Engineering Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                {/* List of Works Completed */}
                <div className="mb-16">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">List of Works Completed</h2>
                          <p className="text-green-100">View all completed engineering projects and infrastructure works</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200">
                        <div className="flex items-center justify-center mb-6">
                          <CheckCircle className="w-12 h-12 text-green-600 mr-4" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Completed Works Database</h3>
                            <p className="text-gray-600">Browse through all completed engineering projects with detailed information</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-center">
                          <button
                            onClick={() => setShowCompletedWorksPage(true)}
                            className="group flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>View Completed Works</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* List of Works Under Progress */}
                <div className="mb-16">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <Clock className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">List of Works Under Progress</h2>
                          <p className="text-blue-100">Monitor ongoing engineering projects and their progress status</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-200">
                        <div className="flex items-center justify-center mb-6">
                          <Clock className="w-12 h-12 text-blue-600 mr-4" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Ongoing Projects Database</h3>
                            <p className="text-gray-600">Track progress of current engineering projects and their completion status</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-center">
                          <button
                            onClick={() => setShowWorksUnderProgressPage(true)}
                            className="group flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>View Works Under Progress</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Land Bank Dedicated Page (Must be BEFORE estate service page)
    if (showLandBankPage) {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setShowLandBankPage(false)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Estate</span>
            </button>
          </div>

          {/* Land Bank Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Land Bank</h1>
                <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                  Comprehensive inventory of available land parcels and property database
                </p>
              </div>
            </div>
          </section>

          {/* Land Bank Table Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Land Inventory Database</h2>
                {isAuthenticated && (
                  <button
                    onClick={() => setIsAddingNewLandBank(true)}
                    className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                  >
                    <Plus size={20} />
                    <span>Add New Land</span>
                  </button>
                )}
              </div>

              {/* Add New Land Bank Form */}
              {isAddingNewLandBank && isAuthenticated && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Land Parcel</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Survey No.</label>
                      <input
                        type="text"
                        value={newLandBankData.surveyNo}
                        onChange={(e) => setNewLandBankData({...newLandBankData, surveyNo: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter survey number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        value={newLandBankData.location}
                        onChange={(e) => setNewLandBankData({...newLandBankData, location: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                      <input
                        type="text"
                        value={newLandBankData.area}
                        onChange={(e) => setNewLandBankData({...newLandBankData, area: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter area (e.g., 5 acres)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Land Type</label>
                      <select
                        value={newLandBankData.landType}
                        onChange={(e) => setNewLandBankData({...newLandBankData, landType: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select land type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Agricultural">Agricultural</option>
                        <option value="Institutional">Institutional</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Remarks</label>
                      <input
                        type="text"
                        value={newLandBankData.remarks}
                        onChange={(e) => setNewLandBankData({...newLandBankData, remarks: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter additional remarks"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddNewLandBank}
                      className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      <CheckCircle size={18} />
                      <span>Add Land</span>
                    </button>
                    <button
                      onClick={handleCancelAddLandBank}
                      className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    >
                      <XCircle size={18} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Land Bank List - Line by Line Display */}
              <div className="space-y-4">
                {landBankData.length > 0 ? (
                  landBankData.map((land, index) => (
                    <div key={land.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Serial Number */}
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-bold text-sm">{land.sno}</span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Serial No.</p>
                            <p className="text-sm font-medium text-gray-900">{land.sno}</p>
                          </div>
                        </div>

                        {/* Survey Number */}
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Survey No.</p>
                          <p className="text-sm font-bold text-green-700">{land.surveyNo}</p>
                        </div>

                        {/* Location */}
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Location</p>
                          <p className="text-sm font-medium text-gray-900">{land.location}</p>
                        </div>

                        {/* Area */}
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Area</p>
                          <p className="text-sm font-medium text-gray-900">{land.area}</p>
                        </div>

                        {/* Land Type */}
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Land Type</p>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            land.landType === 'Residential' ? 'bg-blue-100 text-blue-800' :
                            land.landType === 'Commercial' ? 'bg-purple-100 text-purple-800' :
                            land.landType === 'Industrial' ? 'bg-gray-100 text-gray-800' :
                            land.landType === 'Agricultural' ? 'bg-green-100 text-green-800' :
                            land.landType === 'MusafariBangalow' ? 'bg-orange-100 text-orange-800' :
                            land.landType === 'Dandudigesthalamu (GP)' ? 'bg-teal-100 text-teal-800' :
                            land.landType === 'G.U.' ? 'bg-indigo-100 text-indigo-800' :
                            land.landType === 'AW' ? 'bg-red-100 text-red-800' :
                            land.landType === 'Revenue Village' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {land.landType}
                          </span>
                        </div>

                        {/* Status */}
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Status</p>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle size={14} className="mr-1" />
                            Available
                          </span>
                        </div>
                      </div>

                      {/* Remarks - Full Width */}
                      {land.remarks && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Remarks</p>
                          <p className="text-sm text-gray-700 leading-relaxed">{land.remarks}</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No land parcels available.</p>
                    <p className="text-gray-400 text-sm mt-2">
                      {isAuthenticated ? 'Add the first land parcel using the button above.' : 'Please contact administrator to add land parcels.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      );
    }

    if (currentPage === 'services' && currentServicePage === 'estate') {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setCurrentServicePage(null)}
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Services</span>
            </button>
          </div>

          {/* Estate Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Estate</h1>
                <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                  Land Management and Property Administration for AHUDA
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-8 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Estate Content */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                {/* Land Bank */}
                <div className="mb-16">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">Land Bank</h2>
                          <p className="text-green-100">Comprehensive database of available land parcels and property inventory</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200">
                        <div className="flex items-center justify-center mb-6">
                          <MapPin className="w-12 h-12 text-green-600 mr-4" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Land Inventory Management</h3>
                            <p className="text-gray-600">Browse through available land parcels with detailed survey and location information</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-center">
                          <button
                            onClick={() => setShowLandBankPage(true)}
                            className="group flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>View Land Bank</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // G.O'S Dedicated Page (Must be BEFORE gos service page)
    if (currentPage === 'services' && currentServicePage === 'gos' && currentGoPage === 'gos') {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setCurrentGoPage(null)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to G.O's</span>
            </button>
          </div>

          {/* G.O'S Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-orange-900 via-red-800 to-orange-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">G.O'S</h1>
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                  Government Orders Database and Archive
                </p>
              </div>
            </div>
          </section>

          {/* G.O'S List Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Government Orders</h2>
                {isAuthenticated && (
                  <button
                    onClick={() => setIsAddingNewGo(true)}
                    className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium"
                  >
                    <Plus size={20} />
                    <span>Add New G.O</span>
                  </button>
                )}
              </div>

              {/* Add New G.O Form */}
              {isAddingNewGo && isAuthenticated && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Government Order</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">G.O Title</label>
                      <input
                        type="text"
                        value={newGoData.title}
                        onChange={(e) => setNewGoData({...newGoData, title: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter G.O title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">G.O Number</label>
                      <input
                        type="text"
                        value={newGoData.goNumber}
                        onChange={(e) => setNewGoData({...newGoData, goNumber: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter G.O number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        value={newGoData.date}
                        onChange={(e) => setNewGoData({...newGoData, date: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <input
                        type="text"
                        value={newGoData.department}
                        onChange={(e) => setNewGoData({...newGoData, department: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter department name"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={newGoData.description}
                        onChange={(e) => setNewGoData({...newGoData, description: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        rows="3"
                        placeholder="Enter description"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload File *</label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileUpload(e, 'go')}
                          className="hidden"
                          id="go-file-upload"
                        />
                        <label
                          htmlFor="go-file-upload"
                          className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200"
                        >
                          <Upload size={18} />
                          <span>Choose File</span>
                        </label>
                        {newGoData.fileName && (
                          <div className="flex items-center space-x-2 text-sm text-green-600">
                            <FileText size={16} />
                            <span>{newGoData.fileName}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, DOC, DOCX</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddNewGo}
                      disabled={!newGoData.title || !newGoData.goNumber || !newGoData.date || !newGoData.department || !newGoData.file}
                      className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      <CheckCircle size={18} />
                      <span>Add G.O</span>
                    </button>
                    <button
                      onClick={handleCancelAddGo}
                      className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    >
                      <XCircle size={18} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}

              {/* G.O'S Table */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-orange-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">S.No</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Subject</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">G.O No</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">Download</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {gosData.length > 0 ? (
                        gosData.map((go, index) => (
                          <tr key={go.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 text-sm text-gray-900 font-medium">{go.sno}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              <div>
                                <p className="font-semibold text-gray-900">{go.title}</p>
                                <p className="text-xs text-gray-500 mt-1">{go.department} • {go.date}</p>
                                {go.description && (
                                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">{go.description}</p>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-orange-700">{go.goNumber}</td>
                            <td className="px-6 py-4 text-center">
                              <button
                                onClick={() => handleDownloadFile(go, 'go')}
                                className="inline-flex items-center px-3 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 text-xs font-medium rounded-lg transition-colors duration-200"
                                title={`Download ${go.goNumber}`}
                              >
                                <Download size={14} className="mr-1" />
                                {go.fileName ? 'Download' : 'PDF'}
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-lg">No Government Orders available.</p>
                            <p className="text-sm mt-2">
                              {isAuthenticated ? 'Add the first G.O using the button above.' : 'Please contact administrator to add G.O\'s.'}
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Government Memos Dedicated Page (Must be BEFORE gos service page)
    if (currentPage === 'services' && currentServicePage === 'gos' && currentGoPage === 'memos') {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setCurrentGoPage(null)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to G.O's</span>
            </button>
          </div>

          {/* Government Memos Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-yellow-900 via-amber-800 to-yellow-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Government Memos</h1>
                <p className="text-xl md:text-2xl text-yellow-100 leading-relaxed">
                  Official Memorandums and Administrative Communications
                </p>
              </div>
            </div>
          </section>

          {/* Government Memos List Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Government Memos</h2>
                {isAuthenticated && (
                  <button
                    onClick={() => setIsAddingNewMemo(true)}
                    className="flex items-center space-x-2 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors duration-200 font-medium"
                  >
                    <Plus size={20} />
                    <span>Add New Memo</span>
                  </button>
                )}
              </div>

              {/* Add New Memo Form */}
              {isAddingNewMemo && isAuthenticated && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Government Memo</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Memo Title</label>
                      <input
                        type="text"
                        value={newMemoData.title}
                        onChange={(e) => setNewMemoData({...newMemoData, title: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter memo title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Memo Number</label>
                      <input
                        type="text"
                        value={newMemoData.memoNumber}
                        onChange={(e) => setNewMemoData({...newMemoData, memoNumber: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter memo number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        value={newMemoData.date}
                        onChange={(e) => setNewMemoData({...newMemoData, date: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <input
                        type="text"
                        value={newMemoData.department}
                        onChange={(e) => setNewMemoData({...newMemoData, department: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter department name"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={newMemoData.description}
                        onChange={(e) => setNewMemoData({...newMemoData, description: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        rows="3"
                        placeholder="Enter description"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload File *</label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileUpload(e, 'memo')}
                          className="hidden"
                          id="memo-file-upload"
                        />
                        <label
                          htmlFor="memo-file-upload"
                          className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200"
                        >
                          <Upload size={18} />
                          <span>Choose File</span>
                        </label>
                        {newMemoData.fileName && (
                          <div className="flex items-center space-x-2 text-sm text-green-600">
                            <FileText size={16} />
                            <span>{newMemoData.fileName}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, DOC, DOCX</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddNewMemo}
                      disabled={!newMemoData.title || !newMemoData.memoNumber || !newMemoData.date || !newMemoData.department || !newMemoData.file}
                      className="flex items-center space-x-2 bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      <CheckCircle size={18} />
                      <span>Add Memo</span>
                    </button>
                    <button
                      onClick={handleCancelAddMemo}
                      className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    >
                      <XCircle size={18} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Government Memos Table */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-yellow-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">S.No</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Subject</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Memo No</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">Download</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {memosData.length > 0 ? (
                        memosData.map((memo, index) => (
                          <tr key={memo.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 text-sm text-gray-900 font-medium">{memo.sno}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              <div>
                                <p className="font-semibold text-gray-900">{memo.title}</p>
                                <p className="text-xs text-gray-500 mt-1">{memo.department} • {memo.date}</p>
                                {memo.description && (
                                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">{memo.description}</p>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-yellow-700">{memo.memoNumber}</td>
                            <td className="px-6 py-4 text-center">
                              <button
                                onClick={() => handleDownloadFile(memo, 'memo')}
                                className="inline-flex items-center px-3 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 text-xs font-medium rounded-lg transition-colors duration-200"
                                title={`Download ${memo.memoNumber}`}
                              >
                                <Download size={14} className="mr-1" />
                                {memo.fileName ? 'Download' : 'PDF'}
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-lg">No Government Memos available.</p>
                            <p className="text-sm mt-2">
                              {isAuthenticated ? 'Add the first memo using the button above.' : 'Please contact administrator to add memos.'}
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // GO's Service Page
    if (currentPage === 'services' && currentServicePage === 'gos') {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setCurrentServicePage(null)}
              className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Services</span>
            </button>
          </div>

          {/* GO's Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Government Orders & Memos</h1>
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                  Official documents, circulars, and government communications
                </p>
              </div>
            </div>
          </section>

          {/* GO's Services Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                {/* G.O'S */}
                <div className="mb-16">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-orange-600 to-amber-700 p-8">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">G.O'S</h2>
                          <p className="text-orange-100">Government Orders issued by various departments</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl border-2 border-orange-200">
                        <div className="flex items-center justify-center mb-6">
                          <FileText className="w-12 h-12 text-orange-600 mr-4" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Government Orders Repository</h3>
                            <p className="text-gray-600">Access official government orders and departmental communications</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-center">
                          <button
                            onClick={() => setCurrentGoPage('gos')}
                            className="group flex items-center space-x-3 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>View G.O'S</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Government Memos */}
                <div className="mb-16">
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-amber-600 to-yellow-700 p-8">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-6">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">Government Memos</h2>
                          <p className="text-yellow-100">Official memorandums and administrative communications</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-xl border-2 border-yellow-200">
                        <div className="flex items-center justify-center mb-6">
                          <FileText className="w-12 h-12 text-yellow-600 mr-4" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Memorandums Archive</h3>
                            <p className="text-gray-600">Browse through official memos and administrative directives</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-center">
                          <button
                            onClick={() => setCurrentGoPage('memos')}
                            className="group flex items-center space-x-3 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>View Government Memos</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Annual Budget Page
    if (currentPage === 'account' && currentAccountPage === 'annual-budget') {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Annual Budget Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Annual Budget</h1>
                <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
                  Financial planning and budget allocation documents
                </p>
              </div>
            </div>
          </section>

          {/* Annual Budget Content */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Budget Documents</h2>
                {isAuthenticated && (
                  <button
                    onClick={() => setIsAddingNewBudget(true)}
                    className="flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
                  >
                    <Plus size={20} />
                    <span>Add New Budget</span>
                  </button>
                )}
              </div>

              {/* Add New Budget Form */}
              {isAddingNewBudget && isAuthenticated && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-emerald-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Budget Document</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Financial Year *</label>
                      <input
                        type="text"
                        value={newBudgetData.financialYear}
                        onChange={(e) => setNewBudgetData({...newBudgetData, financialYear: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="e.g., 2024-25"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget Type *</label>
                      <select
                        value={newBudgetData.budgetType}
                        onChange={(e) => setNewBudgetData({...newBudgetData, budgetType: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      >
                        <option value="">Select budget type</option>
                        <option value="Annual Budget">Annual Budget</option>
                        <option value="Revised Budget">Revised Budget</option>
                        <option value="Supplementary Budget">Supplementary Budget</option>
                        <option value="Capital Budget">Capital Budget</option>
                        <option value="Revenue Budget">Revenue Budget</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={newBudgetData.description}
                        onChange={(e) => setNewBudgetData({...newBudgetData, description: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        rows="3"
                        placeholder="Enter description"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload File *</label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.xls,.xlsx"
                          onChange={(e) => handleAccountFileUpload(e, 'budget')}
                          className="hidden"
                          id="budget-file-upload"
                        />
                        <label
                          htmlFor="budget-file-upload"
                          className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200"
                        >
                          <Upload size={18} />
                          <span>Choose File</span>
                        </label>
                        {newBudgetData.fileName && (
                          <div className="flex items-center space-x-2 text-sm text-green-600">
                            <FileText size={16} />
                            <span>{newBudgetData.fileName}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, DOC, DOCX, XLS, XLSX</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddNewBudget}
                      disabled={!newBudgetData.financialYear || !newBudgetData.budgetType || !newBudgetData.file}
                      className="flex items-center space-x-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      <CheckCircle size={18} />
                      <span>Add Budget</span>
                    </button>
                    <button
                      onClick={handleCancelAddBudget}
                      className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    >
                      <XCircle size={18} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}
                
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">S.No</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Financial Year</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Budget Type</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">Download</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {budgetData.length > 0 ? (
                        budgetData.map((budget, index) => (
                          <tr key={budget.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 text-sm text-gray-900 font-medium">{budget.sno}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              <div>
                                <p className="font-semibold text-gray-900">{budget.financialYear}</p>
                                {budget.description && (
                                  <p className="text-xs text-gray-600 mt-1">{budget.description}</p>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-emerald-700">{budget.budgetType}</td>
                            <td className="px-6 py-4 text-center">
                              <button
                                onClick={() => handleAccountFileDownload(budget, 'budget')}
                                className="inline-flex items-center px-3 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-xs font-medium rounded-lg transition-colors duration-200"
                                title={`Download ${budget.financialYear} Budget`}
                              >
                                <Download size={14} className="mr-1" />
                                {budget.fileName ? 'Download' : 'PDF'}
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                            <DollarSign className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-lg">No budget documents available.</p>
                            <p className="text-sm mt-2">
                              {isAuthenticated ? 'Add the first budget document using the button above.' : 'Please contact administrator for budget information.'}
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // Audit Reports Page
    if (currentPage === 'account' && currentAccountPage === 'audit-reports') {
      return (
        <div>
          {/* Back Button */}
          <div className="container mx-auto px-4 py-6">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronRight className="rotate-180" size={20} />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Audit Reports Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-teal-900 via-emerald-800 to-green-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Audit Reports</h1>
                <p className="text-xl md:text-2xl text-teal-100 leading-relaxed">
                  Financial audit reports and compliance documents
                </p>
              </div>
            </div>
          </section>

          {/* Audit Reports Content */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Audit Documentation</h2>
                {isAuthenticated && (
                  <button
                    onClick={() => setIsAddingNewAudit(true)}
                    className="flex items-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium"
                  >
                    <Plus size={20} />
                    <span>Add New Audit Report</span>
                  </button>
                )}
              </div>

              {/* Add New Audit Report Form */}
              {isAddingNewAudit && isAuthenticated && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-teal-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Audit Report</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Audit Period *</label>
                      <input
                        type="text"
                        value={newAuditData.auditPeriod}
                        onChange={(e) => setNewAuditData({...newAuditData, auditPeriod: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="e.g., 2023-24"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Report Type *</label>
                      <select
                        value={newAuditData.reportType}
                        onChange={(e) => setNewAuditData({...newAuditData, reportType: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Select report type</option>
                        <option value="Internal Audit">Internal Audit</option>
                        <option value="External Audit">External Audit</option>
                        <option value="Financial Audit">Financial Audit</option>
                        <option value="Performance Audit">Performance Audit</option>
                        <option value="Compliance Audit">Compliance Audit</option>
                        <option value="CAG Audit">CAG Audit</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={newAuditData.description}
                        onChange={(e) => setNewAuditData({...newAuditData, description: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        rows="3"
                        placeholder="Enter description"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload File *</label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.xls,.xlsx"
                          onChange={(e) => handleAccountFileUpload(e, 'audit')}
                          className="hidden"
                          id="audit-file-upload"
                        />
                        <label
                          htmlFor="audit-file-upload"
                          className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200"
                        >
                          <Upload size={18} />
                          <span>Choose File</span>
                        </label>
                        {newAuditData.fileName && (
                          <div className="flex items-center space-x-2 text-sm text-green-600">
                            <FileText size={16} />
                            <span>{newAuditData.fileName}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, DOC, DOCX, XLS, XLSX</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddNewAudit}
                      disabled={!newAuditData.auditPeriod || !newAuditData.reportType || !newAuditData.file}
                      className="flex items-center space-x-2 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      <CheckCircle size={18} />
                      <span>Add Audit Report</span>
                    </button>
                    <button
                      onClick={handleCancelAddAudit}
                      className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    >
                      <XCircle size={18} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}
                
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-teal-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">S.No</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Audit Period</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Report Type</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">Download</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {auditData.length > 0 ? (
                        auditData.map((audit, index) => (
                          <tr key={audit.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 text-sm text-gray-900 font-medium">{audit.sno}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              <div>
                                <p className="font-semibold text-gray-900">{audit.auditPeriod}</p>
                                {audit.description && (
                                  <p className="text-xs text-gray-600 mt-1">{audit.description}</p>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-teal-700">{audit.reportType}</td>
                            <td className="px-6 py-4 text-center">
                              <button
                                onClick={() => handleAccountFileDownload(audit, 'audit')}
                                className="inline-flex items-center px-3 py-2 bg-teal-100 hover:bg-teal-200 text-teal-700 text-xs font-medium rounded-lg transition-colors duration-200"
                                title={`Download ${audit.auditPeriod} Audit Report`}
                              >
                                <Download size={14} className="mr-1" />
                                {audit.fileName ? 'Download' : 'PDF'}
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                            <Shield className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-lg">No audit reports available.</p>
                            <p className="text-sm mt-2">
                              {isAuthenticated ? 'Add the first audit report using the button above.' : 'Please contact administrator for audit information.'}
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
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
        <section className="relative h-screen overflow-hidden w-full">
          <div className="absolute inset-0 w-full">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover bg-gray-900"
                  style={{ 
                    objectFit: 'cover', 
                    objectPosition: 'center center',
                    imageRendering: 'optimizeQuality',
                    transform: 'scale(0.85)',
                    width: '95%',
                    height: '95%',
                    left: '2.5%',
                    top: '2.5%',
                    position: 'absolute',
                    filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-end justify-center pb-20">
            <div className="text-center text-white px-8 py-6 max-w-4xl bg-black/50 backdrop-blur-sm rounded-2xl border border-white/20">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-2xl mb-2 drop-shadow-md opacity-95 font-light">
                {heroSlides[currentSlide].subtitle}
              </p>
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
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              {/* Enforcement Services Category */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Enforcement Services</h3>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setCurrentPage('services');
                      setCurrentServicePage('town-planning');
                      setShowApprovedLayoutsPage(true);
                    }}
                    className="w-full text-left p-3 bg-white rounded-lg border border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-green-700">Approved Layouts</p>
                        <p className="text-sm text-gray-600">View approved layout plans</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600" />
                    </div>
                  </button>
                  
                  <button
                    onClick={() => {
                      setCurrentPage('services');
                      setCurrentServicePage('town-planning');
                      setShowApprovedBuildingsPage(true);
                    }}
                    className="w-full text-left p-3 bg-white rounded-lg border border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-green-700">Approved Buildings</p>
                        <p className="text-sm text-gray-600">View approved building plans</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600" />
                    </div>
                  </button>
                </div>
              </div>

              {/* UCIMS Services Category */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">UCIMS Services</h3>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => setShowUcimsBeforePage(true)}
                    className="w-full text-left p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-blue-700">UCIMS Prior to AHUDA</p>
                        <p className="text-sm text-gray-600">Before authority formation</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setShowUcimsAfterPage(true)}
                    className="w-full text-left p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-blue-700">UCIMS After AHUDA</p>
                        <p className="text-sm text-gray-600">After authority formation</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Documents & Reports Category */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Documents & Reports</h3>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => setShowLtpPage(true)}
                    className="w-full text-left p-3 bg-white rounded-lg border border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-purple-700">LTP's</p>
                        <p className="text-sm text-gray-600">Local Town Planning documents</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setShowLrsObjectionsPage(true)}
                    className="w-full text-left p-3 bg-white rounded-lg border border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-purple-700">LRS 2020 Objections & Suggestions</p>
                        <p className="text-sm text-gray-600">Objections & suggestions</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setShowLrsRegularisedPage(true)}
                    className="w-full text-left p-3 bg-white rounded-lg border border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-purple-700">LRS 2020 Regularised</p>
                        <p className="text-sm text-gray-600">Individual plots list</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
                    </div>
                  </button>
                </div>
              </div>

              {/* MIG Information Category */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Housing Information</h3>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => setShowMigInformationPage(true)}
                    className="w-full text-left p-3 bg-white rounded-lg border border-orange-200 hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-orange-700">MIG Information</p>
                        <p className="text-sm text-gray-600">Middle Income Group layout details</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Master Plans Category */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Master Plans</h3>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => setShowMasterPlansPage(true)}
                    className="w-full text-left p-3 bg-white rounded-lg border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-indigo-700">Master Plans</p>
                        <p className="text-sm text-gray-600">Draft and approved master plans</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
                    </div>
                  </button>
                </div>
              </div>
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
          <div className="flex items-center justify-between h-20">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 flex-nowrap  w-full justify-center">
              <button onClick={() => {
                setCurrentPage('home');
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
              }} className={`flex items-center space-x-2 px-4 py-3 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap ${currentPage === 'home' ? 'text-white bg-gradient-to-r from-green-600 to-green-700' : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700'}`}>
                <Home size={18} className="group-hover:scale-110 transition-transform" />
                <span>Home</span>
              </button>
              <button onClick={() => {
                setCurrentPage('about');
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
              }} className={`flex items-center space-x-2 px-4 py-3 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap ${currentPage === 'about' ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700' : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700'}`}>
                <Info size={18} className="group-hover:scale-110 transition-transform" />
                <span>About Us</span>
              </button>
              
              {/* Services Dropdown */}
              <div className="relative services-dropdown">
                <button 
                  onClick={() => {
                    setIsServicesDropdownOpen(!isServicesDropdownOpen);
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
                  }}
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap"
                >
                  <Settings size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Services</span>
                  <ChevronRight size={14} className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-90' : ''}`} />
                </button>
                
                {/* Services Dropdown Menu */}
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
                
                {/* Account Section Dropdown Menu */}
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
                  setShowFaqPage(false);
                  setShowOfficeStaffPage(false);
                  setShowMigInformationPage(false);
                  setShowMasterPlansPage(false);
                  setShowGalleryPage(false);
                  setShowRtiPage(false);
                  setShowAuthorityMeetingsPage(false);
                  setShowExecutiveCommitteePage(false);
                  setShowLtpPage(false);
                  setShowLrsObjectionsPage(false);
                  setShowLrsRegularisedPage(false);
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
                  setShowFaqPage(false);
                  setShowOfficeStaffPage(false);
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
                
                {/* Mobile Services Section */}
                <div>
                  <button 
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      <Settings size={20} />
                      <span>Services</span>
                    </div>
                    <ChevronRight size={16} className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-90' : ''}`} />
                  </button>
                  
                  {/* Mobile Services Dropdown */}
                  {isServicesDropdownOpen && (
                    <div className="ml-6 mt-2 space-y-1">
                      <button 
                        onClick={() => {
                          setCurrentPage('services');
                          setCurrentServicePage('town-planning');
                          setIsServicesDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-all text-left"
                      >
                        <Building size={16} className="text-purple-500" />
                        <span>Town Planning</span>
                      </button>
                      <button 
                        onClick={() => {
                          setCurrentPage('services');
                          setCurrentServicePage('engineering');
                          setIsServicesDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-all text-left"
                      >
                        <Settings size={16} className="text-blue-500" />
                        <span>Engineering</span>
                      </button>
                      <button 
                        onClick={() => {
                          setCurrentPage('services');
                          setCurrentServicePage('estate');
                          setIsServicesDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-600 font-medium rounded-lg transition-all text-left"
                      >
                        <MapPin size={16} className="text-green-500" />
                        <span>Estate</span>
                      </button>
                      <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 font-medium rounded-lg transition-all">
                        <FileText size={16} className="text-orange-500" />
                        <span>G.O's</span>
                      </a>
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={() => {setShowGalleryPage(true); setIsMenuOpen(false);}}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-all"
                >
                  <Camera size={20} />
                  <span>Gallery</span>
                </button>
                <button 
                  onClick={() => {setShowOfficeStaffPage(true); setIsMenuOpen(false);}}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-all"
                >
                  <Users size={20} />
                  <span>Office staff</span>
                </button>
                <button 
                  onClick={() => {setShowFaqPage(true); setIsMenuOpen(false);}}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium rounded-lg transition-all"
                >
                  <HelpCircle size={20} />
                  <span>FAQ's</span>
                </button>
                <button 
                  onClick={() => {setShowDownloadsPage(true); setIsMenuOpen(false);}}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium rounded-lg transition-all"
                >
                  <Download size={20} />
                  <span>Downloads</span>
                </button>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 font-medium rounded-lg transition-all">
                  <Phone size={20} />
                  <span>Contact Us</span>
                </a>
                
                {/* Mobile Admin Login/Logout Button */}
                {isAuthenticated ? (
                  <div className="mt-4 border-t pt-4">
                    <div className="px-4 py-2 text-sm text-gray-600">
                      Welcome, {currentUser?.name}
                    </div>
                    <button 
                      onClick={() => {handleLogout(); setIsMenuOpen(false);}}
                      className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all w-full"
                    >
                      <X size={20} />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => {openLoginModal(); setIsMenuOpen(false);}}
                    className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all mt-4"
                  >
                    <User size={20} />
                    <span>Admin Login</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {renderPageContent()}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            
            {/* Contact Information */}
            <div>
              <h3 className="font-bold text-2xl mb-8 text-blue-300">Contact Information</h3>
              <div className="space-y-5 text-white">
                <a 
                  href="mailto:vcahuda@gmail.com"
                  className="flex items-center hover:text-blue-200 transition-colors group"
                >
                  <Mail className="w-5 h-5 mr-3 text-orange-300 group-hover:scale-110 transition-transform" />
                  <span>vcahuda@gmail.com</span>
                </a>
                <a 
                  href="http://www.ahuda.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-200 transition-colors group"
                >
                  <Globe className="w-5 h-5 mr-3 text-purple-300 group-hover:scale-110 transition-transform" />
                  <span>www.ahuda.in</span>
                </a>
              </div>
            </div>
            
            {/* Office Location */}
            <div>
              <h3 className="font-bold text-2xl mb-8 text-cyan-300">Office Location</h3>
              <div className="space-y-5 text-white">
                <a 
                  href="https://maps.app.goo.gl/aSrWoq2vbEYAstGG9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-cyan-200 transition-colors group"
                >
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-cyan-300 group-hover:scale-110 transition-transform" />
                  <span>
                    Collector's Bungalow Road,<br />
                    Andhra Pradesh 515001
                  </span>
                </a>
                <p className="text-sm text-gray-200 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Click to open in maps
                </p>
              </div>
            </div>
            
            {/* Government Portals */}
            <div>
              <h3 className="font-bold text-2xl mb-8 text-green-300">Government Portals</h3>
              <div className="grid grid-cols-1 gap-3 text-sm">
                <a href="#" className="text-white hover:text-green-200 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  BPS
                </a>
                <a href="#" className="text-white hover:text-green-200 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  DTCP
                </a>
                <a href="#" className="text-white hover:text-green-200 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  APDPMS
                </a>
                <a href="#" className="text-white hover:text-green-200 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  GOIR
                </a>
                <a href="#" className="text-white hover:text-green-200 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  AP State Portal
                </a>
                <a href="#" className="text-white hover:text-green-200 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Engineering
                </a>
              </div>
            </div>

            {/* Additional Links */}
            <div>
              <h3 className="font-bold text-2xl mb-8 text-orange-300">Additional Links</h3>
              <div className="grid grid-cols-1 gap-3 text-sm">
                <a href="#" className="text-white hover:text-orange-200 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Core Dashboard
                </a>
                <a href="#" className="text-white hover:text-orange-200 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  AP Industries
                </a>
                <a href="#" className="text-white hover:text-orange-200 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  AP RERA
                </a>
                <a href="#" className="text-white hover:text-orange-200 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  AP CRDA
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-200 text-center md:text-left text-lg">
                © 2025 Ananthapuramu–Hindupur Urban Development Authority. All Rights Reserved.
              </p>
              <div className="flex items-center mt-6 md:mt-0 space-x-8">
                <a href="#" className="text-gray-200 hover:text-white transition-colors text-base">Privacy Policy</a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors text-base">Terms of Service</a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors text-base">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-0 w-full max-w-lg mx-4 transform transition-all overflow-hidden">
            {/* Header Section with Government Branding */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-xl transform -translate-x-12 translate-y-12"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white border-opacity-30">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Admin Portal</h2>
                      <p className="text-blue-100 text-sm">AHUDA Management System</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setIsLoginModalOpen(false);
                      setLoginError('');
                      // Don't clear credentials if Remember Me is checked
                      if (!rememberMe) {
                        setLoginData({ username: '', password: '' });
                      }
                    }}
                    className="text-white hover:text-blue-200 transition-colors p-2 hover:bg-white hover:bg-opacity-10 rounded-xl"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="border-t border-white border-opacity-20 pt-4">
                  <p className="text-blue-100 text-sm">
                    <span className="font-semibold">Ananthapuramu–Hindupur Urban Development Authority</span>
                  </p>
                  <p className="text-blue-200 text-xs mt-1">Secure Administrative Access</p>
                </div>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="p-8">
              <form onSubmit={handleLogin}>
                {loginError && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs">!</span>
                      </div>
                      <p className="text-red-700 text-sm font-medium">{loginError}</p>
                    </div>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-3">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-indigo-600" />
                        Administrator Username
                      </span>
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={loginData.username}
                      onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                      className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-3 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-lg bg-gray-50 focus:bg-white"
                      placeholder="Enter administrator username"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-3">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                        Secure Password
                      </span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-3 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-lg bg-gray-50 focus:bg-white"
                      placeholder="Enter secure password"
                      required
                    />
                  </div>
                  
                  {/* Remember Me Checkbox */}
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`relative w-5 h-5 rounded border-2 transition-all duration-200 ${
                        rememberMe 
                          ? 'bg-indigo-600 border-indigo-600' 
                          : 'bg-white border-gray-400 hover:border-indigo-500'
                      }`}>
                        {rememberMe && (
                          <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="ml-3 text-gray-700 font-medium">Remember my login credentials</span>
                    </label>
                    <div className="flex-1"></div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl focus:ring-4 focus:ring-indigo-300"
                  >
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      Access Admin Portal
                    </span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoginModalOpen(false);
                      setLoginError('');
                      // Don't clear credentials if Remember Me is checked
                      if (!rememberMe) {
                        setLoginData({ username: '', password: '' });
                        setRememberMe(false);
                      }
                    }}
                    className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-gray-50"
                  >
                    Cancel Access
                  </button>
                </div>
                
                {/* Security Notice */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div>
                      <p className="text-blue-800 text-sm font-medium">Security Notice</p>
                      <p className="text-blue-700 text-xs mt-1">
                        This is a secure government portal. All access attempts are logged and monitored for security purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Popup */}
      {showWelcomePopup && currentUser && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-0 w-full max-w-md mx-4 transform transition-all scale-110 animate-pulse">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full blur-xl animate-ping"></div>
              </div>
              <div className="relative z-10">
                {/* Success Icon */}
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Welcome!</h2>
                <p className="text-green-100">Login Successful</p>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hello, {currentUser.name}</h3>
              <p className="text-gray-600 mb-4">You are now logged in as <span className="font-semibold text-indigo-600">{currentUser.role}</span></p>
              
              {/* Simple Info Card */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 mb-4">
                <p className="text-blue-800 font-medium">AHUDA Admin Portal</p>
                <p className="text-blue-600 text-sm">Access Granted</p>
              </div>

              {/* Continue Button */}
              <button
                onClick={() => setShowWelcomePopup(false)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Continue to Dashboard
              </button>

              {/* Auto-close notice */}
              <p className="text-gray-400 text-xs mt-3">Closes automatically in 3 seconds</p>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200 z-10"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
              <p className="text-sm opacity-90">
                {selectedImage.fileSize} • Uploaded on {selectedImage.uploadDate}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
