import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface BottomNavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentSection, onSectionChange }) => {
  const { theme } = useTheme();
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMoreMenu(false);
      }
    };

    if (showMoreMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMoreMenu]);

  // 4 tabs chính + 1 tab "Thêm"
  const mainNavItems = [
    {
      id: 'welcome',
      label: 'Trang chủ',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'nhan-su',
      label: 'Nhân sự',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'cham-cong',
      label: 'Chấm công',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'bang-luong',
      label: 'Bảng lương',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  // Items trong menu "Thêm"
  const moreItems = [
    {
      id: 'tai-khoan',
      label: 'Tài khoản',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'nghi-phep',
      label: 'Nghỉ phép',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const isMoreActive = ['tai-khoan', 'nghi-phep'].includes(currentSection);

  return (
    <div
      ref={menuRef}
      className={`
        fixed bottom-0 left-0 right-0 z-50
        ${theme === 'dark'
          ? 'bg-gray-900/95 border-gray-700'
          : 'bg-white/95 border-gray-200'
        }
        border-t backdrop-blur-md
        md:hidden
      `}>
      {/* Dropdown menu */}
      {showMoreMenu && (
        <div className={`
          absolute bottom-full left-0 right-0 mb-1 mx-4
          ${theme === 'dark'
            ? 'bg-gray-800 border-gray-600'
            : 'bg-white border-gray-200'
          }
          border rounded-lg shadow-lg backdrop-blur-md
        `}>
          {moreItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setShowMoreMenu(false);
                }}
                className={`
                  flex items-center w-full px-4 py-3 text-left
                  transition-all duration-200
                  ${isActive
                    ? theme === 'dark'
                      ? 'text-blue-400 bg-blue-900/30'
                      : 'text-blue-600 bg-blue-50'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }
                  first:rounded-t-lg last:rounded-b-lg
                `}
              >
                <div className="mr-3">
                  {item.icon}
                </div>
                <span className="font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main navigation */}
      <div className="flex justify-around items-center py-2 px-2">
        {/* Main tabs */}
        {mainNavItems.map((item) => {
          const isActive = currentSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`
                flex flex-col items-center justify-center px-2 py-2 rounded-lg
                transition-all duration-200 min-w-0 flex-1
                ${isActive
                  ? theme === 'dark'
                    ? 'text-blue-400 bg-blue-900/30'
                    : 'text-blue-600 bg-blue-50'
                  : theme === 'dark'
                    ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }
              `}
            >
              <div className="mb-1">
                {item.icon}
              </div>
              <span className="text-xs font-medium truncate text-center">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* More button */}
        <button
          onClick={() => setShowMoreMenu(!showMoreMenu)}
          className={`
            flex flex-col items-center justify-center px-2 py-2 rounded-lg
            transition-all duration-200 min-w-0 flex-1
            ${isMoreActive || showMoreMenu
              ? theme === 'dark'
                ? 'text-blue-400 bg-blue-900/30'
                : 'text-blue-600 bg-blue-50'
              : theme === 'dark'
                ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }
          `}
        >
          <div className="mb-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </div>
          <span className="text-xs font-medium truncate text-center">
            Thêm
          </span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
