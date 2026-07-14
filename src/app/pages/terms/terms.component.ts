import { Component } from '@angular/core';
import { PolicyLayoutComponent, PolicySection } from '../../shared/components/policy-layout/policy-layout.component';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [PolicyLayoutComponent],
  template: `
    <app-policy-layout
      eyebrow="Điều khoản"
      titleMain="Điều Kiện &"
      titleAccent="Điều Khoản"
      activeTab="terms"
      [sections]="sections"
    />
  `
})
export class TermsComponent {
  sections: PolicySection[] = [
    {
      icon: 'bi-check2-circle',
      title: 'Chấp Nhận Điều Khoản',
      paragraphs: [
        'Bằng việc sử dụng website và dịch vụ của Ký Ức Studio, bạn xác nhận đã đọc, hiểu và đồng ý với toàn bộ các điều khoản được nêu trong tài liệu này.',
        'Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng dịch vụ của chúng tôi.'
      ]
    },
    {
      icon: 'bi-camera',
      title: 'Mô Tả Dịch Vụ',
      paragraphs: [
        'Ký Ức Studio cung cấp dịch vụ chụp ảnh trọn gói bao gồm: tư vấn concept, makeup & hair, trang phục, chụp ảnh và chỉnh sửa hậu kỳ chuyên nghiệp.',
        'Chi tiết từng gói dịch vụ, số lượng ảnh và thời gian thực hiện được mô tả đầy đủ tại trang Bảng Giá. Chúng tôi có quyền điều chỉnh giá và gói dịch vụ với thông báo trước.'
      ]
    },
    {
      icon: 'bi-person',
      title: 'Tài Khoản Người Dùng',
      paragraphs: [
        'Để đặt lịch và theo dõi trạng thái booking, bạn cần tạo tài khoản với thông tin chính xác và cập nhật.',
        'Bạn chịu trách nhiệm bảo mật thông tin đăng nhập. Mọi hoạt động thực hiện dưới tài khoản của bạn đều được coi là do bạn thực hiện.'
      ]
    },
    {
      icon: 'bi-lightbulb',
      title: 'Quyền Sở Hữu Trí Tuệ',
      paragraphs: [
        'Toàn bộ ảnh chụp do Ký Ức Studio thực hiện thuộc bản quyền của studio. Khách hàng được cấp quyền sử dụng phi độc quyền cho mục đích cá nhân (SNS, in ấn cá nhân...).',
        'Mọi mục đích thương mại, truyền thông hoặc xuất bản cần có thỏa thuận bằng văn bản và có thể phát sinh phí bổ sung. Ký Ức Studio có thể sử dụng ảnh cho mục đích portfolio, website và marketing với sự đồng ý của khách hàng (có thể từ chối khi đặt lịch).'
      ]
    },
    {
      icon: 'bi-x-circle',
      title: 'Giới Hạn Trách Nhiệm',
      paragraphs: [
        'Ký Ức Studio không chịu trách nhiệm với các trường hợp bất khả kháng như thiên tai, hỏa hoạn, dịch bệnh hoặc các sự kiện ngoài tầm kiểm soát ảnh hưởng đến buổi chụp.',
        'Trong mọi trường hợp, trách nhiệm tối đa của chúng tôi không vượt quá giá trị gói dịch vụ mà khách hàng đã thanh toán.'
      ]
    },
    {
      icon: 'bi-arrow-repeat',
      title: 'Thay Đổi Điều Khoản',
      paragraphs: [
        'Chúng tôi có thể cập nhật các điều khoản này theo thời gian để phù hợp với dịch vụ thực tế. Mọi thay đổi sẽ được thông báo trên website với ngày có hiệu lực rõ ràng.',
        'Việc tiếp tục sử dụng dịch vụ sau khi thay đổi được coi là bạn đã chấp nhận điều khoản mới.'
      ]
    }
  ];
}
