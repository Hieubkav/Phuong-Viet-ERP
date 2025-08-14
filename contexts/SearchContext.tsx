import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { navItems } from '../constants';
import type { NavItem } from '../types';

export interface SearchResult {
  title: string;
  content: string;
  href: string;
  section?: string;
}

interface SearchContextType {
  searchQuery: string;
  searchResults: SearchResult[];
  isSearchOpen: boolean;
  setSearchQuery: (query: string) => void;
  setIsSearchOpen: (isOpen: boolean) => void;
  performSearch: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

// Dữ liệu tìm kiếm - mapping nội dung của từng trang
const searchableContent: SearchResult[] = [
  {
    title: "Tài liệu Hướng dẫn Sử dụng Hệ thống ERP",
    content: "Chào mừng bạn đến với tài liệu hướng dẫn sử dụng Hệ thống Quản trị Tổng thể Doanh nghiệp ERP Công ty TNHH Công nghệ Thông tin và Môi trường Phương Việt",
    href: "/",
    section: "Giới thiệu"
  },
  {
    title: "Chức năng đăng nhập hệ thống",
    content: "Cho phép người dùng đăng nhập vào hệ thống để sử dụng phần mềm. Giao diện đăng nhập email mật khẩu",
    href: "/dang-nhap",
    section: "Đăng nhập"
  },
  {
    title: "Chức năng đăng xuất hệ thống",
    content: "Cho phép người dùng đăng xuất ra khỏi hệ thống khi không sử dụng để đảm bảo an toàn thông tin. Menu người dùng đăng xuất",
    href: "/dang-xuat",
    section: "Đăng xuất"
  },
  {
    title: "Quản lý nhân sự",
    content: "Quản lý thông tin nhân sự công ty tập trung hiệu quả. Nhân viên kanban list view form chi tiết hợp đồng phòng ban tạm ứng import export",
    href: "/quan-ly-nhan-su",
    section: "Nhân sự"
  },
  {
    title: "Quản lý nghỉ phép",
    content: "Quản lý cập nhật nghỉ phép nhân viên tạo đơn phê duyệt báo cáo. Lịch nghỉ phép đơn nghỉ phép phân tích báo cáo",
    href: "/quan-ly-nghi-phep",
    section: "Nghỉ phép"
  },
  {
    title: "Quản lý chấm công",
    content: "Quản lý thông tin chấm công nhân viên dữ liệu máy chấm công xem chi tiết báo cáo. Chấm công tự động lịch trình báo cáo excel",
    href: "/quan-ly-cham-cong",
    section: "Chấm công"
  },
  {
    title: "Quản lý bảng lương",
    content: "Quản lý toàn bộ quy trình tính lương nhân sự phiếu lương khoản thu nhập khấu trừ phụ cấp báo cáo lương. Kỳ lương đóng góp cấu hình cấu trúc",
    href: "/quan-ly-bang-luong",
    section: "Bảng lương"
  }
];

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const results = searchableContent.filter(item =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.content.toLowerCase().includes(lowercaseQuery) ||
      item.section?.toLowerCase().includes(lowercaseQuery)
    );

    setSearchResults(results);
  }, []);

  return (
    <SearchContext.Provider value={{
      searchQuery,
      searchResults,
      isSearchOpen,
      setSearchQuery,
      setIsSearchOpen,
      performSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};
