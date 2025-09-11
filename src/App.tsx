import React, { useState, ReactNode } from 'react';
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

type Page = 'Home' | 'Analytics' | 'Reports' | 'Settings';

const pageIcons: { [key in Page]: React.ElementType } = {
  Home: HomeIcon,
  Analytics: AnalyticsIcon,
  Reports: ReportsIcon,
  Settings: SettingsIcon,
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState<Page>('Home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const renderContent = (): ReactNode => {
    switch (activePage) {
      case 'Home': return <HomePage />;
      case 'Analytics': return <AnalyticsPage />;
      case 'Reports': return <PlaceholderPage title="Reports" />;
      case 'Settings': return <SettingsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div 
      className={`dashboard-container ${isSidebarOpen ? '' : 'sidebar-closed'}`}
      data-theme={theme}
    >
      <aside className="sidebar">
        <div className="sidebar-header"><h2>Dashboard</h2></div>
        <nav className="sidebar-nav">
          <ul>
            {(Object.keys(pageIcons) as Page[]).map((page) => {
              const IconComponent = pageIcons[page];
              return (
                <li key={page} className={activePage === page ? 'active' : ''} onClick={() => setActivePage(page)}>
                  <a href="#">
                    <IconComponent className="nav-icon" />
                    <span className="nav-text">{page}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            &#9776;
          </button>
          <h1>{activePage}</h1>
          <div className="header-profile">
            <button className="theme-toggle-button" onClick={toggleTheme}>
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <span className="admin-name">Admin</span>
            <div className="avatar-menu">
                <button className="avatar-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                A
                </button>
                {isDropdownOpen && (
                <div className="dropdown-menu">
                    <a href="#">About</a>
                    <a href="#">Logout</a>
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