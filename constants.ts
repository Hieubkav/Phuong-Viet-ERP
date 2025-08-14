
import type { NavItem } from './types';
import Welcome from './content/Welcome';
import TaiKhoan from './content/TaiKhoan';
import DangNhap from './content/DangNhap';
import DangXuat from './content/DangXuat';
import QuanLyNhanSu from './content/QuanLyNhanSu';
import QuanLyNghiPhep from './content/QuanLyNghiPhep';
import QuanLyChamCong from './content/QuanLyChamCong';
import QuanLyBangLuong from './content/QuanLyBangLuong';


export const navItems: NavItem[] = [
  { label: 'Giới thiệu', href: '#/', component: Welcome },
  { label: 'Phần I: Hướng dẫn sử dụng', href: '#/huong-dan', component: Welcome,
    children: [
      { label: 'Quản lý tài khoản', href: '#/huong-dan/tai-khoan', component: TaiKhoan },
      { label: '1. Đăng nhập hệ thống', href: '#/huong-dan/dang-nhap', component: DangNhap },
      { label: '2. Đăng xuất hệ thống', href: '#/huong-dan/dang-xuat', component: DangXuat },
      { label: '3. Quản lý nhân sự', href: '#/huong-dan/quan-ly-nhan-su', component: QuanLyNhanSu },
      { label: '4. Quản lý nghỉ phép', href: '#/huong-dan/quan-ly-nghi-phep', component: QuanLyNghiPhep },
      { label: '5. Quản lý chấm công', href: '#/huong-dan/quan-ly-cham-cong', component: QuanLyChamCong },
      { label: '6. Quản lý bảng lương', href: '#/huong-dan/quan-ly-bang-luong', component: QuanLyBangLuong },
    ]
  }
];
