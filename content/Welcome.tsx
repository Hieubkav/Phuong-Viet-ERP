
import React from 'react';
import { DocTitle, DocSection, DocParagraph } from '../components/DocLayout';
import ImagePlaceholder from '../components/ImagePlaceholder';

const Welcome: React.FC = () => {
  return (
    <div>
      <DocTitle>Tài liệu Hướng dẫn Sử dụng Hệ thống ERP</DocTitle>
      <DocSection title="Giới thiệu">
        <DocParagraph>
          Chào mừng bạn đến với tài liệu hướng dẫn sử dụng Hệ thống Quản trị Tổng thể Doanh nghiệp (ERP) của Công ty TNHH Công nghệ Thông tin và Môi trường Phương Việt.
        </DocParagraph>
        <DocParagraph>
          Tài liệu này cung cấp hướng dẫn chi tiết về các chức năng và cách vận hành hệ thống, giúp người dùng khai thác tối đa hiệu quả của phần mềm trong công tác quản lý tại Công ty TNHH Chế biến Nông sản Minh Đức.
        </DocParagraph>
        <ImagePlaceholder
          src="/pic/01_logo_PV.png"
          description="Logo Công ty TNHH Công nghệ Thông tin và Môi trường Phương Việt"
          caption="Phiên bản 1.0 - 01/08/2025"
        />
      </DocSection>
    </div>
  );
};

export default Welcome;
