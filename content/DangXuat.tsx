
import React from 'react';
import { DocTitle, DocSection, DocParagraph, DocList } from '../components/DocLayout';
import ImagePlaceholder from '../components/ImagePlaceholder';

const DangXuat: React.FC = () => {
  return (
    <div>
      <DocTitle>2. Chức năng đăng xuất hệ thống</DocTitle>
      <DocSection title="2.1. Mục đích">
        <DocParagraph>
          Cho phép người dùng đăng xuất ra khỏi hệ thống khi không sử dụng để đảm bảo an toàn thông tin.
        </DocParagraph>
      </DocSection>
      <DocSection title="2.2. Đối tượng sử dụng">
        <DocParagraph>
          Tất cả người dùng có thể thao tác trên chức năng này.
        </DocParagraph>
      </DocSection>
      <DocSection title="2.3. Truy cập chức năng">
        <DocList items={[
          "Tại giao diện bất kỳ, người dùng click vào tên/avatar ở góc trên bên phải màn hình.",
          "Chọn 'Đăng xuất' từ menu thả xuống để thoát khỏi hệ thống."
        ]} />
        <ImagePlaceholder
          src="/pic/04_menu_tai_khoan_dropdown.png"
          description="Menu người dùng với tùy chọn Đăng xuất."
          caption="Ngoài ra còn có các tùy chọn: Thông tin của tôi, Hỗ trợ,..."
        />
         <DocParagraph>
          Người dùng cũng có thể cập nhật thông tin cá nhân như tên, mật khẩu, và thiết lập xác thực hai yếu tố (2FA) trong mục "Thông tin của tôi".
        </DocParagraph>
        <ImagePlaceholder
          src="/pic/05_bao_mat_tai_khoan.png"
          description="Giao diện cập nhật thông tin cá nhân và bảo mật."
          caption="Các tab bao gồm Tùy chỉnh cá nhân và Bảo mật tài khoản."
        />
      </DocSection>
    </div>
  );
};

export default DangXuat;
