
import React from 'react';
import { DocTitle, DocSection, DocParagraph, DocList, DocNote } from '../components/DocLayout';
import ImagePlaceholder from '../components/ImagePlaceholder';

const QuanLyChamCong: React.FC = () => {
  return (
    <div>
      <DocTitle>5. Quản lý chấm công</DocTitle>
      <DocSection title="5.1. Mục đích">
        <DocParagraph>
          Cho phép quản lý thông tin chấm công của nhân viên, bao gồm dữ liệu từ máy chấm công, xem chi tiết, và xử lý các báo cáo liên quan.
        </DocParagraph>
      </DocSection>
      <DocSection title="5.2. Đối tượng sử dụng">
        <DocParagraph>
          Người dùng có vai trò "Cán bộ Quản trị" có thể thao tác trên chức năng này.
        </DocParagraph>
      </DocSection>
      <DocSection title="5.3. Truy cập chức năng">
        <DocParagraph>
          Trên giao diện menu chính, chọn <strong>Menu &gt;&gt; Chấm công</strong>.
        </DocParagraph>
        <ImagePlaceholder
          src="/pic/41_cham_cong_list.png"
          description="Giao diện tổng quan chấm công."
          caption="Hiển thị danh sách nhân viên cùng giờ làm việc, đi trễ, về sớm, làm thêm."
        />
        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">5.3.1. Xem chấm công chi tiết của nhân sự</h3>
        <DocParagraph>Chọn một nhân viên để xem chi tiết lịch sử chấm công của họ theo ngày.</DocParagraph>
        <ImagePlaceholder
          src="/pic/44_cham_cong_nhan_vien_list.png"
          description="Lịch sử chấm công chi tiết của một nhân viên."
        />
        <ImagePlaceholder
          src="/pic/45_cham_cong_chi_tiet.png"
          description="Form chi tiết một bản ghi chấm công trong ngày."
        />
        <DocNote>
          <DocList items={[
            "Đăng nhập: Thời gian chấm công vào.",
            "Đăng xuất: Thời gian chấm công ra.",
            "Xả ca: Dùng để xác định nhân viên không có tăng ca vào ngày hôm đó, mặc dù phòng ban có lịch tăng ca.",
            "Chi tiết đi trễ/Về sớm: So sánh thời gian chấm công với quy định.",
            "Chi tiết tăng ca: Hiển thị thời gian làm thêm.",
          ]} />
        </DocNote>

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">5.3.2. Chấm công tự động</h3>
        <DocParagraph>Chức năng này cho phép thiết lập lịch trình chấm công tự động cho nhân viên, giúp hệ thống tự động điền giờ vào/ra khi nhân viên quên chấm công.</DocParagraph>
        <ImagePlaceholder
          src="/pic/46_tao_lich_trinh_cham_cong_modal.png"
          description="Giao diện tạo lịch trình chấm công tự động."
        />

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">5.3.3. Báo cáo chấm công</h3>
        <DocParagraph>Hệ thống cho phép xuất nhiều loại báo cáo chấm công khác nhau.</DocParagraph>
        <DocList items={[
          "Xuất Excel báo cáo chấm công: Báo cáo chi tiết hoặc tổng hợp.",
          "Báo cáo chấm công hàng tháng: Báo cáo dạng lịch, có màu sắc để phân biệt trạng thái.",
          "Kiểm tra đi trễ/về sớm (Late/Early Tracking).",
        ]} />
        <ImagePlaceholder
            src="/pic/49_bao_cao_cham_cong_modal.png"
            description="Form tùy chọn xuất báo cáo chấm công hàng tháng."
        />
        <ImagePlaceholder
            src="/pic/50_bao_cao_cham_cong_huong_dan.png"
            description="Bảng chấm công giờ xuất ra file Excel."
        />
      </DocSection>
    </div>
  );
};

export default QuanLyChamCong;
