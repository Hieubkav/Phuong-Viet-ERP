
import React from 'react';
import { MenuIcon } from './icons/Icons';
import GlobalSearch from './GlobalSearch';
import ThemeToggle from './ThemeToggle';
import logoUrl from '../pic/01_logo_PV.png';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-30 dark:bg-gray-900/75 bg-white/90 backdrop-blur-lg border-b dark:border-gray-700 border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-md dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 dark:hover:bg-gray-700 hover:bg-gray-100 mr-3"
          >
            <MenuIcon />
          </button>

          <div className="flex items-center">
             <img
               src={logoUrl}
               alt="Phương Việt Logo"
               className="w-7 h-7 object-contain"
             />
             <h1 className="text-lg md:text-xl font-semibold ml-2 dark:text-white text-gray-900">Phương Việt ERP</h1>
          </div>
        </div>

        {/* Right side - Search and Theme Toggle */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <div className="hidden sm:block">
            <GlobalSearch />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
