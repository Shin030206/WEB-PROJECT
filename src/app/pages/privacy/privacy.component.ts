import { Component } from '@angular/core';
import { PolicyLayoutComponent, PolicySection } from '../../shared/components/policy-layout/policy-layout.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [PolicyLayoutComponent],
  template: `
    <app-policy-layout
      eyebrow="Bảo mật"
      titleMain="Chính Sách"
      titleAccent="Quyền Riêng Tư"
      activeTab="privacy"
      [sections]="sections"
    />
  `
})
export class PrivacyComponent {
  sections: PolicySection[] = [
    {
      icon: 'bi-database',
      title: 'Thông Tin Chúng Tôi Thu Thập',
      paragraphs: [
        'Khi bạn đăng ký tài khoản hoặc đặt lịch, chúng tôi thu thập họ tên, số điện thoại, email (nếu cung cấp).',
        'Khi bạn sử dụng website: địa chỉ IP, loại thiết bị, trình duyệt, trang đã xem (thông qua cookies ẩn danh).',
        'Thông tin liên lạc khi bạn nhắn tin qua form hỗ trợ, email hoặc điện thoại.'
      ]
    },
    {
      icon: 'bi-gear',
      title: 'Mục Đích Sử Dụng Thông Tin',
      paragraphs: [
        'Xác nhận lịch chụp và liên hệ tư vấn trước buổi shooting.',
        'Gửi ảnh thành phẩm, link Google Drive và thông báo đơn hàng.',
        'Gửi thông báo khuyến mãi, ưu đãi thành viên (chỉ khi bạn đồng ý). Cải thiện chất lượng dịch vụ và trải nghiệm website thông qua phân tích dữ liệu ẩn danh.'
      ]
    },
    {
      icon: 'bi-share',
      title: 'Chia Sẻ Thông Tin',
      paragraphs: [
        'Ký Ức Studio cam kết không bán, trao đổi hoặc chia sẻ thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào vì mục đích thương mại.',
        'Thông tin có thể được chia sẻ với đối tác kỹ thuật (lưu trữ đám mây, dịch vụ email) theo thỏa thuận bảo mật nghiêm ngặt.',
        'Chúng tôi có thể tiết lộ thông tin khi có yêu cầu hợp pháp từ cơ quan nhà nước có thẩm quyền.'
      ]
    },
    {
      icon: 'bi-shield-check',
      title: 'Bảo Mật Dữ Liệu',
      paragraphs: [
        'Dữ liệu được lưu trữ trên hệ thống mã hóa SSL/TLS với quyền truy cập hạn chế chỉ dành cho nhân viên có thẩm quyền.',
        'Mật khẩu được mã hóa một chiều (hash) và không thể đọc ngược lại bởi bất kỳ ai, kể cả nhân viên studio.'
      ]
    },
    {
      icon: 'bi-person-check',
      title: 'Quyền Của Bạn',
      paragraphs: [
        'Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa toàn bộ dữ liệu cá nhân bất kỳ lúc nào bằng cách liên hệ qua hotline hoặc email.',
        'Bạn có thể hủy nhận thông báo marketing bằng cách nhắn tin "Hủy" theo số hotline hoặc click vào link hủy đăng ký trong email.'
      ]
    },
    {
      icon: 'bi-cookie',
      title: 'Cookies',
      paragraphs: [
        'Website sử dụng cookies để cải thiện trải nghiệm duyệt web và phân tích lưu lượng truy cập.',
        'Bạn có thể tắt cookies trong cài đặt trình duyệt, tuy nhiên một số tính năng của website có thể không hoạt động đầy đủ.'
      ]
    }
  ];
}
