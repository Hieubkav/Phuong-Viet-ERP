
import React from 'react';
import { DocTitle, DocSection, DocParagraph, DocList } from '../components/DocLayout';
import ImagePlaceholder from '../components/ImagePlaceholder';

const DangNhap: React.FC = () => {
  return (
    <div>
      <DocTitle>1. Chức năng đăng nhập hệ thống</DocTitle>
      <DocSection title="1.1. Mục đích">
        <DocParagraph>
          Cho phép người dùng đăng nhập vào hệ thống để sử dụng phần mềm.
        </DocParagraph>
      </DocSection>
      <DocSection title="1.2. Đối tượng sử dụng">
        <DocParagraph>
          Tất cả người dùng có thể thao tác trên chức năng này.
        </DocParagraph>
      </DocSection>
      <DocSection title="1.3. Truy cập chức năng">
        <DocList items={[
          <>Hệ thống phần mềm tại địa chỉ: <a href="http://163.61.72.139/web/login" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">http://163.61.72.139/web/login</a></>,
          "Hệ thống hiển thị giao diện đăng nhập:"
        ]} />
        <ImagePlaceholder
          src="/pic/02_dang_nhap_MinhDuc.png"
          description="Giao diện đăng nhập hệ thống ERP."
          caption="Người dùng nhập Email và Mật khẩu để đăng nhập."
        />
        <DocParagraph>
          Giao diện sau khi đăng nhập hệ thống. Tùy theo vai trò người dùng mà hệ thống sẽ hiển thị các phân hệ theo đúng chức năng nhiệm vụ:
        </DocParagraph>
        <ImagePlaceholder
          src="/pic/03_trang_chu_erp.png"
          description="Giao diện chính sau khi đăng nhập, hiển thị các module của hệ thống."
          caption="Các module bao gồm Thảo luận, Lịch, Bảng lương, Chấm công, Nhân viên, Nghỉ phép..."
        />
      </DocSection>
    </div>
  );
};

export default DangNhap;
