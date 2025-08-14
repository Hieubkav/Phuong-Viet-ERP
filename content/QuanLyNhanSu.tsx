
import React from 'react';
import { DocTitle, DocSection, DocParagraph, DocList, DocNote } from '../components/DocLayout';
import ImagePlaceholder from '../components/ImagePlaceholder';

const QuanLyNhanSu: React.FC = () => {
  return (
    <div>
      <DocTitle>3. Quản lý nhân sự</DocTitle>
      <DocSection title="3.1. Mục đích">
        <DocParagraph>
          Cho phép người dùng quản lý thông tin nhân sự của công ty một cách tập trung và hiệu quả.
        </DocParagraph>
      </DocSection>
      <DocSection title="3.2. Đối tượng sử dụng">
        <DocParagraph>
          Người dùng có vai trò "Cán bộ Quản trị" có thể thao tác trên chức năng này.
        </DocParagraph>
      </DocSection>
      <DocSection title="3.3. Truy cập chức năng">
        <DocParagraph>
          Trên giao diện menu chính, chọn <strong>Menu &gt;&gt; Nhân viên</strong>. Hệ thống sẽ hiển thị phân hệ Nhân viên.
        </DocParagraph>
        <ImagePlaceholder
          src="/pic/06_nhan_vien_kanban.png"
          description="Giao diện quản lý nhân viên ở dạng Kanban View."
          caption="Mỗi thẻ đại diện cho một nhân viên."
        />
        <DocParagraph>
          Giao diện cũng có thể hiển thị ở dạng danh sách (List View).
        </DocParagraph>
        <ImagePlaceholder
          src="/pic/09_nhan_vien_list.png"
          description="Giao diện quản lý nhân viên ở dạng List View."
          caption="Hiển thị thông tin nhân viên theo từng hàng."
        />
        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">3.3.1. Quản lý nhân viên</h3>
        <DocParagraph>Thêm mới, sửa và xóa thông tin nhân viên.</DocParagraph>
        <ImagePlaceholder
            src="/pic/10_nhan_vien_chi_tiet_form.png"
            description="Form chi tiết thông tin một nhân viên."
        />
        <DocNote>
          <DocList items={[
              "Mã nhân viên: Mã số định danh của nhân viên.",
              "ID người dùng thiết bị máy chấm công: Đặt giống mã nhân viên để lấy dữ liệu từ máy chấm công.",
          ]} />
        </DocNote>

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">3.3.2. Quản lý hợp đồng</h3>
        <DocParagraph>Thực hiện quản lý hợp đồng lao động cho từng nhân sự.</DocParagraph>
        <ImagePlaceholder
            src="/pic/14_hop_dong_list.png"
            description="Giao diện quản lý hợp đồng lao động."
        />
        <DocNote>
            <DocList items={[
                "Thời gian làm việc: Chọn lịch làm việc cho từng nhân viên.",
                "Tiền công/tiền lương: Nhập lương cơ bản để tính lương tháng.",
                "Lương đóng BHXH: Nhập lương để tính tỷ lệ đóng BHXH.",
            ]} />
        </DocNote>

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">3.3.3. Quản lý phòng ban</h3>
        <DocParagraph>Quản lý cơ cấu tổ chức, phòng ban trong công ty.</DocParagraph>
        <ImagePlaceholder
            src="/pic/17_phong_ban_kanban.png"
            description="Giao diện quản lý phòng ban."
        />

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">3.3.4. Quản lý tạm ứng</h3>
        <DocParagraph>Quản lý các khoản tạm ứng lương hàng tháng của nhân viên.</DocParagraph>
        <ImagePlaceholder
            src="/pic/20_dot_ung_luong_list.png"
            description="Giao diện quản lý yêu cầu tạm ứng."
        />
        <DocParagraph>Người dùng có thể xuất file Excel danh sách nhân sự đã tạm ứng tiền.</DocParagraph>
        <ImagePlaceholder
            src="/pic/24_danh_sach_ung_luong_excel.png"
            description="File Excel danh sách ứng lương."
            caption="Bao gồm các cột STT, Mã NV, Họ & Tên, Phòng ban, Số tiền,..."
        />

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">3.3.5. Cấu hình phân hệ nhân sự</h3>
        <DocParagraph>Cho phép cấu hình các danh mục liên quan đến nhân sự như lý do nghỉ việc, vị trí công việc, loại việc làm, và lịch làm việc.</DocParagraph>
        <ImagePlaceholder
            src="/pic/25_li_do_nghi_viec_list.png"
            description="Các menu cấu hình trong phân hệ nhân sự."
        />

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">3.3.6 & 3.3.7. Import/Export dữ liệu</h3>
        <DocParagraph>Hệ thống hỗ trợ nhập (import) và xuất (export) dữ liệu nhân viên hàng loạt qua file Excel, giúp tiết kiệm thời gian và công sức.</DocParagraph>
        <ImagePlaceholder
            src="/pic/13_import_nhan_vien_modal.png"
            description="Giao diện Import nhân viên từ file Excel."
        />
         <ImagePlaceholder
            src="/pic/35_nhan_vien_xuat_du_lieu_modal.png"
            description="Giao diện Export dữ liệu nhân viên ra file Excel."
        />
      </DocSection>
    </div>
  );
};

export default QuanLyNhanSu;
