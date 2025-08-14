
import React from 'react';
import { DocTitle, DocSection, DocParagraph, DocList, DocNote } from '../components/DocLayout';
import ImagePlaceholder from '../components/ImagePlaceholder';

const QuanLyNghiPhep: React.FC = () => {
  return (
    <div>
      <DocTitle>4. Quản lý nghỉ phép</DocTitle>
      <DocSection title="4.1. Mục đích">
        <DocParagraph>
          Cho phép người dùng quản lý và cập nhật nghỉ phép cho nhân viên, từ việc tạo đơn, phê duyệt đến báo cáo.
        </DocParagraph>
      </DocSection>
      <DocSection title="4.2. Đối tượng sử dụng">
        <DocParagraph>
          Người dùng có vai trò "Cán bộ Quản trị" và nhân viên (tự xem/tạo đơn) có thể thao tác trên chức năng này.
        </DocParagraph>
      </DocSection>
      <DocSection title="4.3. Truy cập chức năng">
        <DocParagraph>
          Trên giao diện menu chính, chọn <strong>Menu &gt;&gt; Nghỉ phép</strong>.
        </DocParagraph>
        <ImagePlaceholder
          src="/pic/36_nghi_phep_trang_chu.png"
          description="Giao diện lịch nghỉ phép của toàn công ty."
          caption="Hiển thị các đơn nghỉ phép đã được duyệt, chờ duyệt hoặc bị từ chối."
        />
        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">4.3.1. Quản lý nghỉ phép</h3>
        <DocParagraph>Để cập nhật nghỉ phép cho nhân viên, vào <strong>Quản lý &gt;&gt; Nghỉ phép</strong>. Hệ thống hiển thị danh sách tất cả đơn nghỉ phép của công ty.</DocParagraph>
        <ImagePlaceholder
          src="/pic/38_don_nghi_phep_list.png"
          description="Danh sách tất cả các đơn nghỉ phép của nhân viên."
        />
        <DocParagraph>Người dùng có thể tạo mới một đơn nghỉ phép cho nhân viên.</DocParagraph>
        <ImagePlaceholder
          src="/pic/39_don_nghi_phep_phe_duyet.png"
          description="Form tạo mới đơn nghỉ phép."
        />
        <DocNote>
          <DocList items={[
            "Phương thức: Chọn nghỉ phép cho nhân viên, phòng ban, hoặc toàn công ty.",
            "Nhân viên: Chọn tên nhân viên cần nghỉ phép.",
            "Ngày: Ngày bắt đầu và kết thúc nghỉ.",
            "Tổng thời gian: Hệ thống tự động tính hoặc người dùng tự nhập số ngày nghỉ.",
          ]} />
        </DocNote>

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">4.3.2. Báo cáo nghỉ phép</h3>
        <DocParagraph>Hệ thống cung cấp chức năng báo cáo, phân tích tình hình nghỉ phép theo nhân viên hoặc phòng ban.</DocParagraph>
        <ImagePlaceholder
          src="/pic/40_phan_tich_nghi_phep.png"
          description="Giao diện phân tích/báo cáo nghỉ phép."
        />
      </DocSection>
    </div>
  );
};

export default QuanLyNghiPhep;
