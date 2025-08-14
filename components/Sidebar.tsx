
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../constants';
import type { NavItem } from '../types';
import { ChevronRightIcon } from './icons/Icons';

interface SidebarProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const SidebarNavItem: React.FC<{ item: NavItem; level: number }> = ({ item, level }) => {
  const location = useLocation();
  const initialOpenState = location.pathname.startsWith(item.href.substring(1));
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const hasChildren = item.children && item.children.length > 0;
  const currentPath = location.pathname === '/' ? '#/' : `#${location.pathname}`;
  const isActive = hasChildren ? currentPath.startsWith(item.href) : currentPath === item.href;

  const handleToggle = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  const linkClass = `flex items-center justify-between w-full px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
    isActive
      ? 'dark:bg-gray-700 bg-blue-100 dark:text-white text-blue-900'
      : 'dark:text-gray-400 text-gray-600 dark:hover:bg-gray-800 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900'
  }`;

  return (
    <li style={{ paddingLeft: `${level * 1}rem` }}>
      <div className="flex items-center">
        {hasChildren && (
          <button onClick={handleToggle} className="mr-2 p-1 rounded-md dark:hover:bg-gray-700 hover:bg-gray-200">
            <ChevronRightIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </button>
        )}
        <Link to={item.href.substring(1)} className={linkClass} style={{ flex: 1, marginLeft: hasChildren ? '0' : '2.25rem' }}>
          {item.label}
        </Link>
      </div>
      {hasChildren && isOpen && (
        <ul className="mt-1 space-y-1">
          {item.children?.map((child) => (
            <SidebarNavItem key={child.href} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen dark:bg-gray-900 bg-white border-r dark:border-gray-700 border-gray-200 transform transition-transform duration-300 ease-in-out hidden md:block md:translate-x-0`}
    >
      <div className="flex items-center justify-center h-16 border-b dark:border-gray-700 border-gray-200">
        <h2 className="text-2xl font-bold dark:text-white text-gray-900">Tài liệu</h2>
      </div>
      <nav className="py-4 px-2 overflow-y-auto h-[calc(100vh-4rem)]">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <SidebarNavItem key={item.href} item={item} level={0} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
