
import React from 'react';
import { DocTitle, DocSection, DocParagraph, DocList, DocNote } from '../components/DocLayout';
import ImagePlaceholder from '../components/ImagePlaceholder';

const QuanLyBangLuong: React.FC = () => {
  return (
    <div>
      <DocTitle>6. Quản lý bảng lương</DocTitle>
      <DocSection title="6.1. Mục đích">
        <DocParagraph>
          Cho phép người dùng quản lý toàn bộ quy trình tính lương cho nhân sự, từ việc tạo phiếu lương, quản lý các khoản thu nhập, khấu trừ, phụ cấp, đến việc xuất các báo cáo lương.
        </DocParagraph>
      </DocSection>
      <DocSection title="6.2. Đối tượng sử dụng">
        <DocParagraph>
          Người dùng có vai trò "Cán bộ Quản trị" và "Kế toán" có thể thao tác trên chức năng này.
        </DocParagraph>
      </DocSection>
      <DocSection title="6.3. Truy cập chức năng">
        <DocParagraph>
          Trên giao diện menu chính, chọn <strong>Menu &gt;&gt; Bảng lương</strong>.
        </DocParagraph>
        
        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">6.3.1. Phiếu lương nhân viên</h3>
        <DocParagraph>Quản lý và tạo mới phiếu lương (payslip) cho từng nhân viên trong một kỳ lương cụ thể.</DocParagraph>
        <ImagePlaceholder
          src="/pic/59_phieu_luong_nhan_vien_list.png"
          description="Giao diện danh sách phiếu lương nhân viên."
        />
        <DocNote>
          <DocList items={[
              "Người lao động: Chọn nhân viên cần lập phiếu lương.",
              "Chu kỳ: Chọn thời gian tính lương (ví dụ: 01/07/2025 đến 31/07/2025).",
              "Các dữ liệu về ngày làm việc, tăng ca, đi trễ/về sớm được hệ thống tự động lấy từ các phân hệ khác (Chấm công, Nghỉ phép).",
          ]} />
        </DocNote>

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">6.3.2. Quản lý bảng lương/kỳ lương</h3>
        <DocParagraph>Tạo và quản lý các kỳ lương theo tháng. Mỗi kỳ lương sẽ chứa phiếu lương của tất cả nhân viên trong tháng đó.</DocParagraph>
        <ImagePlaceholder
          src="/pic/62_ky_luong_list.png"
          description="Giao diện quản lý các kỳ lương (tháng lương)."
        />

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">6.3.4. Quản lý phụ cấp lương</h3>
        <DocParagraph>Quản lý các loại phụ cấp (thâm niên, chuyên cần, trách nhiệm, độc hại,...) và áp dụng cho từng nhân viên.</DocParagraph>
        <ImagePlaceholder
            src="/pic/65_phieu_luong_action_menu.png"
            description="Giao diện quản lý các khoản phụ cấp đã được gán cho nhân viên."
        />

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">6.3.5. Quản lý đóng góp từ lương</h3>
        <DocParagraph>Quản lý các khoản đóng góp bắt buộc như BHXH, BHYT, BHTN, phí công đoàn.</DocParagraph>
        <ImagePlaceholder
            src="/pic/66_phieu_luong_hanh_dong_menu.png"
            description="Giao diện quản lý các loại đóng góp."
        />

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">6.3.6. Báo cáo lương</h3>
        <DocParagraph>Hệ thống cho phép xuất các báo cáo quan trọng phục vụ cho việc trả lương và đối soát.</DocParagraph>
        <DocList items={[
            "Báo cáo chuyển lương ngân hàng: Xuất file Excel theo định dạng của từng ngân hàng để thực hiện chuyển khoản lương hàng loạt.",
            "Báo cáo tổng hợp tiền lương: Cung cấp bảng lương chi tiết hoặc tổng hợp cho toàn công ty."
        ]} />
        <ImagePlaceholder
            src="/pic/69_phieu_luong_export_modal.png"
            description="File Excel báo cáo chuyển lương ngân hàng Sacombank."
        />
        <ImagePlaceholder
            src="/pic/68_phieu_luong_export_menu.png"
            description="File Excel bảng tổng hợp tiền lương chi tiết của công ty."
        />

        <h3 className="text-xl font-semibold dark:text-white text-gray-900 mt-6 mb-4">6.3.7. Cấu hình phân hệ bảng lương</h3>
        <DocParagraph>Cho phép định nghĩa cấu trúc lương và các quy tắc tính lương để tự động hóa quy trình. Cấu trúc lương bao gồm các quy tắc như Lương cơ bản, các loại phụ cấp, các khoản giảm trừ,...</DocParagraph>
        <ImagePlaceholder
            src="/pic/67_phieu_luong_in_menu.png"
            description="Giao diện cấu hình một Cấu trúc lương với các quy tắc lương."
        />

      </DocSection>
    </div>
  );
};

export default QuanLyBangLuong;
