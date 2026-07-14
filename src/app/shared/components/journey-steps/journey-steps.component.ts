import { Component } from '@angular/core';

interface JourneyStep {
  number: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-journey-steps',
  standalone: true,
  templateUrl: './journey-steps.component.html',
  styleUrls: ['./journey-steps.component.scss']
})
export class JourneyStepsComponent {
  journeySteps: JourneyStep[] = [
    {
      number: '01',
      title: 'Kể Cho Chúng Tôi Nghe',
      desc: 'Bạn muốn ghi lại khoảnh khắc nào? Bạn hay gia đình? Nhân dịp gì? Càng nhiều chi tiết, ekip càng hiểu câu chuyện bạn muốn kể.'
    },
    {
      number: '02',
      title: 'Chọn Cơ Sở Gần Bạn',
      desc: 'Hai studio tại Hà Nội và TP Hồ Chí Minh. Ekip sẽ xếp lịch ở cơ sở thuận tiện nhất với bạn.'
    },
    {
      number: '03',
      title: 'Nhận Tư Vấn Cá Nhân',
      desc: 'Một cuộc điện thoại ngắn (8-15 phút) — ekip lắng nghe và đề xuất concept phù hợp nhất. Không bán hàng, không áp lực.'
    },
    {
      number: '04',
      title: 'Chốt Lịch Và Yên Tâm',
      desc: 'Đặt cọc 30% để giữ lịch. Phần còn lại thanh toán sau buổi chụp. Mọi việc chuẩn bị, Ký Ức Studio lo — bạn chỉ cần đến và tận hưởng.'
    }
  ];
}
