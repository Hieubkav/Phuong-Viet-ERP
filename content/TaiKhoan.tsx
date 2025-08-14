import React from 'react';
import { Link } from 'react-router-dom';
import { DocTitle, DocParagraph } from '../components/DocLayout';

const TaiKhoan: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <DocTitle>Quản lý Tài khoản</DocTitle>
      
      <DocParagraph>
        Hướng dẫn quản lý tài khoản trong hệ thống Phuong Viet ERP, bao gồm đăng nhập và đăng xuất an toàn.
      </DocParagraph>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {/* Đăng nhập */}
        <Link 
          to="/huong-dan/dang-nhap"
          className="block p-6 rounded-lg border dark:border-gray-700 border-gray-200 dark:bg-gray-800 bg-white hover:shadow-lg transition-all duration-200 dark:hover:bg-gray-750 hover:bg-gray-50"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg dark:bg-green-900/30 bg-green-100 flex items-center justify-center mr-4">
              <svg className="w-6 h-6 dark:text-green-400 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-gray-900">1. Đăng nhập hệ thống</h3>
          </div>
          <p className="dark:text-gray-300 text-gray-600 mb-4">
            Hướng dẫn chi tiết cách đăng nhập vào hệ thống ERP với tài khoản được cấp.
          </p>
          <div className="flex items-center dark:text-blue-400 text-blue-600 font-medium">
            Xem hướng dẫn
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        {/* Đăng xuất */}
        <Link 
          to="/huong-dan/dang-xuat"
          className="block p-6 rounded-lg border dark:border-gray-700 border-gray-200 dark:bg-gray-800 bg-white hover:shadow-lg transition-all duration-200 dark:hover:bg-gray-750 hover:bg-gray-50"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg dark:bg-red-900/30 bg-red-100 flex items-center justify-center mr-4">
              <svg className="w-6 h-6 dark:text-red-400 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-gray-900">2. Đăng xuất hệ thống</h3>
          </div>
          <p className="dark:text-gray-300 text-gray-600 mb-4">
            Hướng dẫn đăng xuất an toàn khỏi hệ thống để bảo mật thông tin.
          </p>
          <div className="flex items-center dark:text-blue-400 text-blue-600 font-medium">
            Xem hướng dẫn
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Lưu ý bảo mật */}
      <div className="mt-8 p-6 rounded-lg dark:bg-yellow-900/20 bg-yellow-50 border dark:border-yellow-500/30 border-yellow-200">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 dark:text-yellow-400 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div className="ml-3">
            <h4 className="text-lg font-semibold dark:text-yellow-200 text-yellow-800 mb-2">Lưu ý bảo mật</h4>
            <ul className="dark:text-yellow-300 text-yellow-700 space-y-1">
              <li>• Không chia sẻ thông tin đăng nhập với người khác</li>
              <li>• Luôn đăng xuất khi sử dụng máy tính chung</li>
              <li>• Thay đổi mật khẩu định kỳ để đảm bảo an toàn</li>
              <li>• Liên hệ IT nếu phát hiện bất thường trong tài khoản</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaiKhoan;
