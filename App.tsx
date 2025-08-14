
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import { navItems } from './constants';
import type { NavItem } from './types';
import { ThemeProvider } from './contexts/ThemeContext';
import { SearchProvider } from './contexts/SearchContext';

const App: React.FC = () => {
  // Mặc định mở sidebar trên desktop, đóng trên mobile
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Kiểm tra screen size và set sidebar state phù hợp
  useEffect(() => {
    const checkScreenSize = () => {
      const isDesktop = window.innerWidth >= 768; // md breakpoint
      setSidebarOpen(isDesktop);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const findComponent = (path: string, items: NavItem[]): React.ComponentType | null => {
    for (const item of items) {
      if (item.href === path) {
        return item.component;
      }
      if (item.children) {
        const found = findComponent(path, item.children);
        if (found) return found;
      }
    }
    return null;
  };
  
  const initialComponent = findComponent('#/', navItems) || (() => <div>Welcome</div>);
  const [CurrentPageComponent, setCurrentPageComponent] = useState<React.ComponentType>(() => initialComponent);

  useEffect(() => {
    const path = location.pathname === '/' ? '#/' : `#${location.pathname}`;
    const component = findComponent(path, navItems);
    if (component) {
      setCurrentPageComponent(() => component);
    } else {
       setCurrentPageComponent(() => findComponent('#/', navItems));
    }
  }, [location]);

  // Get current section for bottom navigation
  const getCurrentSection = () => {
    const path = location.pathname === '/' ? '#/' : `#${location.pathname}`;
    if (path === '#/' || path === '#/welcome') return 'welcome';
    if (path.includes('tai-khoan') || path.includes('dang-nhap') || path.includes('dang-xuat')) return 'tai-khoan';
    if (path.includes('quan-ly-nhan-su')) return 'nhan-su';
    if (path.includes('quan-ly-cham-cong')) return 'cham-cong';
    if (path.includes('quan-ly-bang-luong')) return 'bang-luong';
    if (path.includes('quan-ly-nghi-phep')) return 'nghi-phep';
    return 'welcome';
  };

  const handleSectionChange = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      'welcome': '/',
      'tai-khoan': '/huong-dan/tai-khoan',
      'nhan-su': '/huong-dan/quan-ly-nhan-su',
      'cham-cong': '/huong-dan/quan-ly-cham-cong',
      'bang-luong': '/huong-dan/quan-ly-bang-luong',
      'nghi-phep': '/huong-dan/quan-ly-nghi-phep'
    };
    navigate(sectionMap[section] || '/');
  };

  return (
    <ThemeProvider>
      <SearchProvider>
        <div className="flex h-screen dark:bg-gray-900 bg-gray-50 dark:text-gray-200 text-gray-900 font-sans">
          <Sidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col md:ml-64 ml-0">
            <Header sidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main id="main-content" className="flex-1 overflow-y-auto p-4 md:p-8 pb-20 md:pb-8">
              <CurrentPageComponent />
            </main>
          </div>
          <BottomNavigation
            currentSection={getCurrentSection()}
            onSectionChange={handleSectionChange}
          />
        </div>
      </SearchProvider>
    </ThemeProvider>
  );
};

export default App;
