import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './components/Icon';
import { LoadingScreen } from './components/LoadingScreen';
import { WISLogo } from './components/WISLogo';

// Import Modular Views
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { AcademicsView } from './components/AcademicsView';
import { AdmissionsView } from './components/AdmissionsView';
import { GalleryView } from './components/GalleryView';
import { NewsEventsView } from './components/NewsEventsView';
import { ContactView } from './components/ContactView';

type TabId = 'home' | 'about' | 'academics' | 'admissions' | 'gallery' | 'news' | 'contact';

interface NavItem {
  id: TabId;
  label: string;
}

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState<number>(0);

  const notifications = [
    {
      badge: 'Admissions Open',
      text: 'Admissions are open for the 2026/2027 session! Screenings begin July 5th.',
      actionText: 'Apply Online',
      tab: 'admissions' as TabId,
    },
    {
      badge: 'Academic Pride',
      text: 'Our class achieved 100% outstanding distinction rate in recent Cambridge IGCSE & WAEC exams! 🎓',
      actionText: 'See Honors',
      tab: 'about' as TabId,
    },
    {
      badge: 'STEM Update',
      text: 'Our new state-of-the-art Robotics & Artificial Intelligence laboratory is now fully operational.',
      actionText: 'Learn More',
      tab: 'about' as TabId,
    },
    {
      badge: 'School Calendar',
      text: 'The interactive 2026/2027 Academic Session Calendar is now live on our Academics page.',
      actionText: 'View Dates',
      tab: 'academics' as TabId,
    },
  ];

  // Auto advance notification announcements every 6 seconds
  useEffect(() => {
    if (!showBanner) return;
    const interval = setInterval(() => {
      setCurrentNotificationIndex((prev) => (prev + 1) % notifications.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [showBanner, notifications.length]);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'news', label: 'News & Events' },
    { id: 'contact', label: 'Contact' },
  ];

  // Monitor vertical coordinates to style Navigation Bar dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Guarantee that navigating tabs resets viewport top coordinate instantly
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setMobileMenuOpen(false); // Clean up mobile drawer state
  }, [activeTab]);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-brand-secondary selection:text-white">
      {/* STICKY HEADER NAVIGATION BAR */}
      <header
        id="main-sticky-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100'
            : 'bg-white border-b border-slate-100/60'
        }`}
      >
        {showBanner && (
          <div className="bg-gradient-to-r from-brand-primary via-blue-900 to-brand-slate text-white py-2 px-4 sm:px-6 relative z-50 border-b border-white/5 shadow-sm overflow-hidden flex items-center justify-between gap-3">
            {/* Prev Button */}
            <button
              onClick={() => setCurrentNotificationIndex((prev) => (prev - 1 + notifications.length) % notifications.length)}
              className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition cursor-pointer shrink-0"
              aria-label="Previous Announcement"
            >
              <Icon name="ChevronLeft" size={14} />
            </button>

            {/* Sliding Content Container */}
            <div className="flex-1 relative h-10 sm:h-6 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNotificationIndex}
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -22, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center gap-x-2 text-center text-xs sm:text-sm font-semibold tracking-wide flex-wrap gap-y-1 content-center"
                >
                  <span className="inline-flex items-center justify-center px-2 py-0.5 bg-brand-secondary text-white text-[9px] font-extrabold rounded uppercase tracking-wider animate-pulse">
                    {notifications[currentNotificationIndex].badge}
                  </span>
                  <span className="text-slate-100 font-medium text-[11px] sm:text-xs">
                    {notifications[currentNotificationIndex].text}
                  </span>
                  <button
                    onClick={() => handleTabChange(notifications[currentNotificationIndex].tab)}
                    className="underline hover:text-brand-secondary font-bold text-xs ml-1.5 transition whitespace-nowrap"
                  >
                    {notifications[currentNotificationIndex].actionText}
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next and Close Buttons wrapper */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => setCurrentNotificationIndex((prev) => (prev + 1) % notifications.length)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition cursor-pointer"
                aria-label="Next Announcement"
              >
                <Icon name="ChevronRight" size={14} />
              </button>
              <div className="h-4 w-px bg-white/15 mx-1 hidden sm:block"></div>
              <button
                onClick={() => setShowBanner(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition cursor-pointer"
                aria-label="Dismiss Announcement"
              >
                <Icon name="X" size={14} />
              </button>
            </div>
          </div>
        )}
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between ${isScrolled ? 'py-3' : 'py-4'}`}>
          
          {/* Logo Frame */}
          <div 
            onClick={() => handleTabChange('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <WISLogo size={42} className="shrink-0 group-hover:scale-105 transition-transform duration-300" />
            <div>
              <span className="block font-display font-black text-lg text-brand-primary tracking-tight leading-none group-hover:text-brand-secondary transition">
                WELLS
              </span>
              <span className="block text-[9px] font-bold text-slate-400 tracking-widest uppercase leading-none mt-1">
                INTERNATIONAL SCHOOLS
              </span>
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`text-sm font-semibold tracking-wide transition-colors relative py-1.5 ${
                  activeTab === item.id
                    ? 'text-brand-secondary font-bold'
                    : 'text-slate-600 hover:text-brand-primary'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Call Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleTabChange('admissions')}
              className="px-5 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-bold tracking-wide uppercase rounded-xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
            >
              Apply Online Now
            </button>
          </div>

          {/* Mobile Hamburger menu command trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-brand-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* MOBILE SLIDE DRAWER COMPONENT */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg overflow-hidden"
            >
              <div className="px-6 py-6 space-y-3.5 flex flex-col">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`text-left py-2 px-3 rounded-lg text-sm font-semibold transition ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-brand-secondary font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleTabChange('admissions')}
                    className="w-full py-3 bg-brand-primary hover:bg-brand-secondary text-white text-xs font-bold tracking-widest uppercase rounded-xl shadow transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* RENDER ACTIVE MODULE ROUTE VIEW */}
      <main className={`flex-1 transition-all duration-300 ${showBanner ? 'mt-[124px]' : 'mt-[84px]'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28 }}
          >
            {activeTab === 'home' && <HomeView onNavigate={handleTabChange} />}
            {activeTab === 'about' && <AboutView />}
            {activeTab === 'academics' && <AcademicsView />}
            {activeTab === 'admissions' && <AdmissionsView />}
            {activeTab === 'gallery' && <GalleryView />}
            {activeTab === 'news' && <NewsEventsView />}
            {activeTab === 'contact' && <ContactView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER VIEW */}
      <footer id="scholastic-footer" className="bg-brand-slate text-slate-300 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
        {/* Background visual accents */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary opacity-5 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 space-y-12">
          {/* Main Footer columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Logo and brief descriptions */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleTabChange('home')}>
                <WISLogo size={38} className="shrink-0" />
                <div>
                  <span className="block font-display font-black text-base text-white tracking-tight leading-none">
                    WELLS
                  </span>
                  <span className="block text-[8px] font-semibold text-brand-secondary tracking-wider uppercase leading-none mt-1">
                    INTERNATIONAL SCHOOLS
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                Wells International Schools is a world-class technology-driven international school offering elite developmental frameworks starting from pre-nursery down to collegiate certifications.
              </p>
              
              {/* Media Handles */}
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white text-slate-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm" 
                  title="Follow Wells International on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-red-500 hover:to-purple-600 hover:text-white text-slate-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm" 
                  title="Explore Wells International on Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-slate-900 hover:text-white text-slate-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-transparent hover:border-cyan-400/30" 
                  title="Follow Wells International on TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.23-1.29 4.83 4.83 0 0 1-1.29-3.23h-3.1v14.41a3.1 3.1 0 0 1-3.1 3.1 3.1 3.1 0 0 1-3.1-3.1 3.1 3.1 0 0 1 3.1-3.1v-3.1a6.2 6.2 0 0 0-6.2 6.2 6.2 6.2 0 0 0 6.2 6.2 6.2 6.2 0 0 0 6.2-6.2V8.59a7.84 7.84 0 0 0 5.23 2h3.1V6.69z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 text-xs">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleTabChange(item.id)}
                      className="text-slate-400 hover:text-brand-secondary flex items-center gap-1.5 transition-colors"
                    >
                      <Icon name="ChevronRight" size={10} className="text-brand-secondary" />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Academic Stages columns */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
                Curriculum Stages
              </h4>
              <ul className="space-y-2.5 text-slate-400 text-xs">
                <li className="flex items-center gap-1.5 cursor-pointer hover:text-brand-secondary" onClick={() => handleTabChange('academics')}>
                  <Icon name="Check" size={10} className="text-brand-primary" />
                  Sensory Early Nursery (Ages 2-5)
                </li>
                <li className="flex items-center gap-1.5 cursor-pointer hover:text-brand-secondary" onClick={() => handleTabChange('academics')}>
                  <Icon name="Check" size={10} className="text-brand-primary" />
                  Inquiry-based Basic Primary (Ages 5-11)
                </li>
                <li className="flex items-center gap-1.5 cursor-pointer hover:text-brand-secondary" onClick={() => handleTabChange('academics')}>
                  <Icon name="Check" size={10} className="text-brand-primary" />
                  Secondary Cambridge Level (Ages 11-18)
                </li>
                <li className="flex items-center gap-1.5 cursor-pointer hover:text-brand-secondary" onClick={() => handleTabChange('academics')}>
                  <Icon name="Check" size={10} className="text-brand-primary" />
                  Advanced Algorithms & Bio-robotics
                </li>
              </ul>
            </div>

            {/* Direct Contact column */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider border-b border-white/10 pb-2">
                Admissions Secretariat
              </h4>
              <ul className="space-y-3 text-slate-400 text-xs">
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={14} className="text-brand-secondary shrink-0 mt-0.5" />
                  <span>12 Wells International Ave, Beachside Academy Sub-District, Niger Delta</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={14} className="text-brand-secondary shrink-0" />
                  <span>+234 (0) 803 988 7766</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} className="text-brand-secondary shrink-0" />
                  <span className="truncate">office@wellsintl.edu.ng</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Compass" size={14} className="text-brand-secondary shrink-0" />
                  <span className="font-mono">GPS: 4.77034, 7.92678</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Under lines dividers */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2026 Wells International Schools. All Rights Reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-secondary transition">Terms of Enrollment</a>
              <a href="#" className="hover:text-brand-secondary transition">Privacy Policy</a>
              <a href="#" className="hover:text-brand-secondary transition">Security Protocols</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP CHAT BUTTON */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-45"
      >
        <a
          href="https://wa.me/2348039887766"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/20"
        >
          <div className="relative">
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <Icon name="MessageCircle" size={20} className="text-white" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[9px] font-bold text-emerald-100 uppercase tracking-widest">Online Now</span>
            <span className="text-xs font-extrabold tracking-wide font-display mt-0.5">WhatsApp Admissions</span>
          </div>
        </a>
      </motion.div>
    </div>
  );
}
