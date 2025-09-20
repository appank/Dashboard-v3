import React, { useState, ReactNode, useEffect } from 'react';
import './App.css';
import {
  HomeIcon,
  AnalyticsIcon,
  ReportsIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon
} from './components/AnimatedIcons';

// Page Components
import HomePage from './pages/HomePage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import PlaceholderPage from './pages/PlaceholderPage';
import LoginPage from './pages/LoginPage';
import MobileDrawer from './components/MobileDrawer';

type Page = 'Home' | 'Analytics' | 'Reports' | 'Settings';

const pageIcons: { [key in Page]: React.ElementType } = {
  Home: HomeIcon,
  Analytics: AnalyticsIcon,
  Reports: ReportsIcon,
  Settings: SettingsIcon,
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState<Page>('Home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Auto close mobile menu on desktop
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleMenuClick = (page: Page) => {
    setActivePage(page);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const renderSidebarContent = () => (
    <>
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <div className="sidebar-nav">
        <ul>
          {(Object.keys(pageIcons) as Page[]).map((page) => {
            const Icon = pageIcons[page];
            return (
              <li 
                key={page} 
                className={activePage === page ? 'active' : ''}
                onClick={() => handleMenuClick(page)}
              >
                <a>
                  <div className="nav-icon">
                    <Icon />
                  </div>
                  <span className="nav-text">{page}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );

  const renderContent = (): ReactNode => {
    switch (activePage) {
      case 'Home': return <HomePage />;
      case 'Analytics': return <AnalyticsPage />;
      case 'Reports': return <PlaceholderPage title="Reports" />;
      case 'Settings': return <SettingsPage />;
      default: return <HomePage />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage handleLogin={handleLogin} />;
  }

  return (
    <div
      className={`dashboard-container ${!isSidebarOpen && !isMobile ? 'sidebar-closed' : ''} ${isMobile ? 'mobile-view' : ''}`}
      data-theme={theme}
    >
      {/* Sidebar - Use MobileDrawer for mobile, regular nav for desktop */}
      {isMobile ? (
        <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {renderSidebarContent()}
        </MobileDrawer>
      ) : (
        <nav className={`sidebar ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
          {renderSidebarContent()}
        </nav>
      )}

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <button 
            className={`sidebar-toggle ${isMobile ? 'mobile-menu-toggle' : ''}`} 
            onClick={toggleSidebar}
          >
            {isMobile ? '☰' : (isSidebarOpen ? '◀' : '▶')}
          </button>
          <h1>{activePage}</h1>
          <div className="header-profile">
            <button className="theme-toggle-button" onClick={toggleTheme}>
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <span className="admin-name">Admin</span>
            <div className="avatar-menu">
              <button
                className="avatar-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                A
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#profile">Profile</a>
                  <a href="#logout" onClick={() => setIsLoggedIn(false)}>Logout</a>
                </div>
              )}
            </div>
          </div>
        </header>
        <div className="page-content">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;