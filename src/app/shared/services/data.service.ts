import { Injectable } from '@angular/core';
import { Concept } from '../components/concept-card/concept-card.component';

export interface PricingTier {
  name: string;
  price: number;
  duration: string;
  concepts: string;
  makeup: string;
  outfits: string;
  photos: string;
  extras?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  tiers: PricingTier[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  service: string;
}

export interface SpecialCollection {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  gradient: string;
  icon: string;
  image: string;
}

export interface CollectionConcept {
  id: string;
  collectionId: string;
  name: string;
  categoryLabel: string;
  cardDescription: string;
  longDescription: string;
  price: string;
  priceNote: string;
  image: string;
}

export interface ServiceCard {
  id: number;
  name: string;
  tagline: string;
  description: string;
  queryCategory: string;
  conceptCount: string;
  price: string;
  gradient: string;
  icon: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  readonly phoneNumber = '0396 387 597';

  readonly filterCategories = [
    'Tất cả',
    'Chân dung',
    'Couple',
    'Gia đình',
    'Mẹ và con',
    'Bạn bè · Sinh nhật',
    'Áo dài',
  ];

  readonly concepts: Concept[] = [
    // Chân dung concepts
    { id: 'cd-basic', name: 'CD BASIC', category: 'Chân dung', description: 'Có những bộ ảnh không cần phụ kiện, chỉ cần một chiếc áo đen và ánh sáng đủ đúng. Ảnh đen trắng chuyển sắc sâu.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/cd1.jpg' },
    { id: 'cd-do-ruc', name: 'CD Đỏ rực', category: 'Chân dung', description: 'Áo dài đỏ đậm, tạo điểm nhấn mạnh mẽ. Concept dành cho những ai yêu sự nổi bật.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/cd2.jpg' },
    { id: 'bl-holy', name: 'BL HOLY', category: 'Chân dung', description: 'Đen trắng, sắc lạnh và cảm xúc. Phong cách nghệ thuật đầy cuốn hút.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/cd3.jpg' },
    { id: 'cd-nau', name: 'CD NÂU', category: 'Chân dung', description: 'Tông nâu đất, mộc mạc và gần gũi. Vẻ đẹp đơn giản nhưng đầy sức hút.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/cd4.jpg' },
    { id: 'bl-dau', name: 'BL DÂU', category: 'Chân dung', description: 'Sắc hồng dâu, ngọt ngào và nữ tính. Dành cho những ai yêu sự dịu dàng.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/cd5.jpg' },
    { id: 'bl-trang', name: 'BL TRẮNG', category: 'Chân dung', description: 'Áo dài trắng tinh khôi, thanh thoát. Vẻ đẹp trong trẻo và thuần khiết.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/cd6.jpg' },
    { id: 'hoa-dung', name: 'HÒA DÙNG', category: 'Chân dung', description: 'Áo dài hồng đào, dịu dàng và đầy nữ tính. Tôn lên nét đẹp Việt.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/cd7.jpg' },
    { id: 'nang-nhan', name: 'NÀNG NHAN', category: 'Chân dung', description: 'Phong cách công chúa, nhẹ nhàng và sang trọng. Nàng thơ trong truyền thuyết.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/cd8.jpg' },
    { id: 'suot', name: 'SƯỚT', category: 'Chân dung', description: 'Áo dài sheer, gợi cảm và hiện đại. Vẻ đẹp của sự tự tin và phóng khoáng.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/cd9.jpg' },
    { id: 'ao-dai-do', name: 'ÁO DÀI ĐỎ', category: 'Chân dung', description: 'Áo dài cách tân, năng động và trẻ trung. Phong cách hiện đại cho người trẻ.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/cd10.jpg' },
    { id: 'cd-vai', name: 'CD VAI', category: 'Chân dung', description: 'Khoe bờ vai, yêu kiều và tinh tế. Vẻ đẹp của sự tự tin khoe cá tính.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/cd11.jpg' },
    { id: 'slay-girl', name: 'Slay girl', category: 'Chân dung', description: 'Slay girl là vẻ đẹp cá nhân mạnh mẽ cá tính, hiện đại và đầy tự tin.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/chan-dung/ca-nhan-slay-girl-01.webp' },
    // Couple concepts
    { id: 'couple-tone-han', name: 'Couple tone Hàn', category: 'Couple', description: 'Phong cách Hàn Quốc, nhẹ nhàng và lãng mạn. Tông màu pastel dịu dàng.', price: '5.000.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/concepts/couple/cp1.jpg' },
    { id: 'couple-retro', name: 'Couple Retro', category: 'Couple', description: 'Phong cách retro Sài Gòn xưa, cổ điển và đầy cảm xúc. Tình yêu vượt thời gian.', price: '5.000.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/concepts/couple/cp2.jpg' },
    { id: 'doi-ao-dai', name: 'Đôi áo dài', category: 'Couple', description: 'Cả hai cùng mặc áo dài, truyền thống và sang trọng. Tình yêu trong nét Việt.', price: '5.000.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/concepts/couple/cp3.jpg' },
    { id: 'couple-den', name: 'Couple đen', category: 'Couple', description: 'Tông đen huyền bí, mạnh mẽ và cá tính. Phong cách dành cho cặp đôi cá tính.', price: '5.000.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/concepts/couple/cp4.jpg' },
    { id: 'couple-trang', name: 'Couple trắng', category: 'Couple', description: 'Tông trắng tinh khôi, thuần khiết và lãng mạn. Concept cho tình yêu trong sáng.', price: '5.000.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/concepts/couple/cp5.jpg' },
    { id: 'couple-nature', name: 'Couple Nature', category: 'Couple', description: 'Tông màu thiên nhiên, xanh mát và tươi mới. Yêu như hơi thở của đất trời.', price: '5.000.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/concepts/couple/cp6.jpg' },
    // Gia đình concepts
    { id: 'gdcc-tram-am', name: 'GDCC Trầm ấm', category: 'Gia đình', description: 'Tông nâu ấm, gần gũi và đoàn tụ. Cả nhà cùng nhau trong khung hình đầy yêu thương.', price: '3.500.000đ', priceNote: 'Theo gói Gia đình', image: 'images/concepts/gia-dinh/gd1.jpg' },
    { id: 'gdcc-tet', name: 'GDCC Tết', category: 'Gia đình', description: 'Concept Tết Nguyên Đán, áo dài và không khí sum vầy. Kỷ niệm đầu năm đầy ý nghĩa.', price: '3.500.000đ', priceNote: 'Theo gói Gia đình', image: 'images/concepts/gia-dinh/gd2.jpg' },
    { id: 'gdcc-han-quoc', name: 'GDCC Hàn Quốc', category: 'Gia đình', description: 'Phong cách Hàn Quốc hiện đại, nhẹ nhàng và tươi mới. Gia đình trẻ trung và năng động.', price: '3.500.000đ', priceNote: 'Theo gói Gia đình', image: 'images/concepts/gia-dinh/gd3.jpg' },
    { id: 'gdcc-ao-dai', name: 'GDCC Áo dài', category: 'Gia đình', description: 'Cả nhà cùng mặc áo dài, truyền thống và đầy tự hào. Vẻ đẹp Việt qua nhiều thế hệ.', price: '3.500.000đ', priceNote: 'Theo gói Gia đình', image: 'images/concepts/gia-dinh/gd4.jpg' },
    { id: 'gdcc-casual', name: 'GDCC Casual', category: 'Gia đình', description: 'Phong cách đời thường, đơn giản và chân thật. Những khoảnh khắc tự nhiên nhất.', price: '3.500.000đ', priceNote: 'Theo gói Gia đình', image: 'images/concepts/gia-dinh/gd5.jpg' },
    { id: 'gdcc-cao-cap', name: 'GDCC Cao cấp', category: 'Gia đình', description: 'Concept cao cấp, sang trọng và đẳng cấp. Dành cho gia đình yêu sự tinh tế.', price: '3.500.000đ', priceNote: 'Theo gói Gia đình', image: 'images/concepts/gia-dinh/gd6.jpg' },
    // Mẹ và con
    { id: 'me-bau-diu-dang', name: 'Mẹ bầu dịu dàng', category: 'Mẹ và con', description: 'Tông màu pastel, nhẹ nhàng và yêu thương. Ghi lại khoảnh khắc thiêng liêng của mẹ.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/me-va-con/mvc1.jpg' },
    { id: 'me-bau-hien-dai', name: 'Mẹ bầu hiện đại', category: 'Mẹ và con', description: 'Phong cách hiện đại, cá tính và tự tin. Mẹ bầu vẫn luôn rạng rỡ.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/me-va-con/mvc2.jpg' },
    { id: 'me-va-con', name: 'Mẹ và con', category: 'Mẹ và con', description: 'Những khoảnh khắc bên con, yêu thương và ấm áp. Tình mẫu tử trong từng khung hình.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/me-va-con/mvc3.jpg' },
    { id: 'me-con-ao-dai', name: 'Mẹ con áo dài', category: 'Mẹ và con', description: 'Mẹ và con cùng mặc áo dài, truyền thống và đầy ý nghĩa. Di sản yêu thương.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/me-va-con/mvc4.jpg' },
    // Bạn bè · Sinh nhật
    { id: 'friends-concept', name: 'Friends Concept', category: 'Bạn bè · Sinh nhật', description: 'Nhóm bạn thân, kỷ niệm khó quên. Mỗi người một câu chuyện, cùng nhau một kỷ niệm.', price: '5.000.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/concepts/ban-be/friends.jpg' },
    // Áo dài
    { id: 'ao-dai-tet', name: 'Áo dài Tết', category: 'Áo dài', description: 'Áo dài Tết Nguyên Đán, rực rỡ sắc xuân. Đón năm mới với vẻ đẹp truyền thống.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/ao-dai/aodai1.jpg' },
    { id: 'ao-dai-co-truyen', name: 'Áo dài cổ truyền', category: 'Áo dài', description: 'Áo dài truyền thống, cổ điển và thanh lịch. Vẻ đẹp vượt thời gian của người phụ nữ Việt.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/ao-dai/aodai2.jpg' },
    { id: 'ao-dai-cach-tan', name: 'Áo dài cách tân', category: 'Áo dài', description: 'Áo dài hiện đại, cách tân và năng động. Phong cách mới cho thế hệ trẻ.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/ao-dai/aodai3.jpg' },
    { id: 'ao-dai-den', name: 'Áo dài đen', category: 'Áo dài', description: 'Áo dài đen huyền bí, sang trọng và quyến rũ. Sự tương phản đầy nghệ thuật.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/concepts/ao-dai/aodai4.jpg' },
  ];

  readonly pricingCategories: ServiceCategory[] = [
    {
      id: 'chan-dung',
      name: 'Chân Dung',
      description: 'Dành cho cá nhân muốn lưu giữ thanh xuân, xây dựng bộ ảnh profile cá nhân hóa. Mỗi khách hàng được tư vấn concept và góc máy riêng.',
      tiers: [
        { name: 'Tiêu Chuẩn', price: 1500000, duration: '60 phút', concepts: '1 concept', makeup: 'Trang điểm cơ bản', outfits: '01 bộ trang phục có sẵn', photos: '15 ảnh đã chỉnh sửa' },
        { name: 'Nâng Cao', price: 2500000, duration: '90 phút', concepts: '2 concept', makeup: 'Trang điểm chuyên nghiệp theo concept', outfits: '02 bộ trang phục (bao gồm Việt phục cách tân)', photos: '25 ảnh chỉnh sửa + 05 ảnh chỉnh sâu' },
        { name: 'Cao Cấp', price: 3800000, duration: '120 phút', concepts: '3 concept tự chọn', makeup: 'Trang điểm và làm tóc chuyên sâu', outfits: 'Tối đa 03 bộ trang phục', photos: '40 ảnh chỉnh sửa + 10 ảnh chỉnh sâu + 01 ảnh in khổ lớn 30x40cm', extras: 'Storyboard cá nhân hóa cùng đội ngũ tư vấn' },
      ]
    },
    {
      id: 'gia-dinh',
      name: 'Gia Đình',
      description: 'Dành cho gia đình hiện đại từ 3-6 thành viên. Không gian chụp tinh tế, gần gũi, phá vỡ định kiến ảnh gia đình truyền thống cứng nhắc.',
      tiers: [
        { name: 'Tiêu Chuẩn', price: 3000000, duration: '90 phút', concepts: '1 concept (tối đa 4 người)', makeup: 'Hỗ trợ trang phục đồng bộ', outfits: 'Trang phục đồng bộ có sẵn', photos: '25 ảnh đã chỉnh sửa' },
        { name: 'Nâng Cao', price: 4500000, duration: '120 phút', concepts: '2 concept (tối đa 5 người)', makeup: 'Hỗ trợ trang phục đồng bộ theo concept', outfits: 'Trang phục đồng bộ (bao gồm Việt phục cách tân)', photos: '40 ảnh chỉnh sửa + 10 ảnh chỉnh sâu' },
        { name: 'Cao Cấp', price: 6800000, duration: '150 phút', concepts: '3 concept tự chọn (tối đa 6 người)', makeup: 'Trang điểm cơ bản cho các thành viên', outfits: 'Trang phục đồng bộ không giới hạn concept', photos: '60 ảnh chỉnh sửa + 15 ảnh chỉnh sâu + 01 album gia đình 20x25cm, 25 trang', extras: 'Storyboard riêng theo câu chuyện của gia đình' },
      ]
    },
    {
      id: 'cap-doi',
      name: 'Cặp Đôi',
      description: 'Dành cho các cặp đôi yêu nhau hoặc đôi bạn thân. Mỗi cặp được xây dựng câu chuyện hình ảnh riêng, phù hợp ảnh hẹn hò lẫn pre-wedding.',
      tiers: [
        { name: 'Tiêu Chuẩn', price: 2200000, duration: '90 phút', concepts: '1 concept', makeup: 'Trang điểm cơ bản cho cả hai', outfits: '01 bộ trang phục đôi có sẵn', photos: '20 ảnh đã chỉnh sửa' },
        { name: 'Nâng Cao', price: 3500000, duration: '120 phút', concepts: '2 concept', makeup: 'Trang điểm chuyên nghiệp theo concept', outfits: '02 bộ trang phục đôi (bao gồm Việt phục cách tân)', photos: '35 ảnh chỉnh sửa + 08 ảnh chỉnh sâu' },
        { name: 'Cao Cấp', price: 5200000, duration: '150 phút', concepts: '3 concept tự chọn', makeup: 'Trang điểm và làm tóc chuyên sâu cho cả hai', outfits: 'Tối đa 03 bộ trang phục đôi', photos: '50 ảnh chỉnh sửa + 15 ảnh chỉnh sâu + 01 album mini 15x20cm, 20 trang', extras: 'Storyboard câu chuyện tình yêu cùng đội ngũ tư vấn' },
      ]
    }
  ];

  readonly addonServices = [
    { name: 'Thuê thêm trang phục Việt phục cách tân', price: 150000, unit: '/ bộ / buổi', desc: 'Trang phục thiết kế riêng, kết hợp họa tiết truyền thống với form dáng hiện đại' },
    { name: 'Trang điểm và làm tóc chuyên sâu', price: 300000, unit: '/ người', desc: 'Nâng cấp phần trang điểm theo concept đặc biệt' },
    { name: 'Thuê bối cảnh studio theo giờ', price: 400000, unit: '/ giờ', desc: 'Dành cho đơn vị sản xuất hình ảnh hoặc khách có ê-kíp riêng' },
    { name: 'Album photobook cao cấp', price: 450000, unit: '/ cuốn', desc: 'In chất lượng cao trên giấy mỹ thuật, bìa da hoặc bìa vải tùy chọn' },
    { name: 'Khung ảnh gỗ nghệ thuật', price: 200000, unit: '/ khung', desc: 'Khung ảnh thủ công, nhiều kích thước, trưng bày hoặc quà tặng' },
  ];

  readonly galleryCategories = [
    'Tất cả', 'Chân dung', 'Couple', 'Gia đình', 'Mẹ và con', 'Bạn bè · Sinh nhật', 'Áo dài'
  ];

  readonly testimonials: Testimonial[] = [
    { name: 'Minh Anh', text: 'Lần đầu chụp ảnh chuyên nghiệp mà mình thấy thoải mái vô cùng. Ekip tư vấn concept rất hợp gu, make-up nhẹ nhàng tự nhiên. Mình cực kỳ ưng bộ ảnh!', rating: 5, service: 'Chân dung' },
    { name: 'Phương Thảo', text: 'Mình đặt gói Cặp Đôi cho kỷ niệm 2 năm yêu. Anh photographer hướng dẫn tạo dáng siêu dễ thương, tụi mình cười cả buổi. Ảnh ra đẹp hơn mong đợi!', rating: 5, service: 'Cặp đôi' },
    { name: 'Chị Hương', text: 'Cả nhà 3 thế hệ cùng chụp, từ bà 70 tuổi đến bé 2 tuổi. Các bạn rất kiên nhẫn với em bé, chụp được những khoảnh khắc tự nhiên nhất của gia đình mình.', rating: 5, service: 'Gia đình' },
    { name: 'Khánh Linh', text: 'Mình chụp concept Áo dài sen ở studio. Không gian đẹp xuất sắc, concept rất nghệ thuật. Bộ ảnh làm profile cực chất lượng, ai cũng khen.', rating: 5, service: 'Áo dài' },
  ];

  readonly specialCollections: SpecialCollection[] = [
    {
      id: 'em-va-nang',
      name: 'Em Và Nắng',
      subtitle: 'Ảnh chân dung đơn',
      description: 'Vẻ đẹp trong ngần của những năm tháng thanh xuân. Mỗi người con gái là một bài thơ đẹp nhất của thời gian.',
      category: 'Chân dung',
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(92,61,46,0.85) 100%), linear-gradient(135deg, #E8C98B, #C9A87C)',
      icon: '☀',
      image: 'images/gallery/chan-dung-01.jpg'
    },
    {
      id: 'ky-uc-doi-ta',
      name: 'Ký Ức Đôi Ta',
      subtitle: 'Ảnh cặp đôi & cưới',
      description: 'Tình yêu qua thước phim bình dị. Không cần bối cảnh cầu kỳ, chỉ cần một ánh mắt ấm áp hay cái nắm tay siết chặt.',
      category: 'Couple',
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(62,39,35,0.85) 100%), linear-gradient(135deg, #C49B8C, #8B6A5E)',
      icon: '♡',
      image: 'images/gallery/couple-01.jpg'
    },
    {
      id: 'nha-la-noi-de-ve',
      name: 'Nhà Là Nơi Để Về',
      subtitle: 'Ảnh gia đình',
      description: 'Gói ghém bình yên vào miền ký ức. Gia đình là bến đỗ ấm áp nhất sau những giông bão ngoài kia.',
      category: 'Gia đình',
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(92,61,46,0.85) 100%), linear-gradient(135deg, #B8977A, #7B5B3F)',
      icon: '⌂',
      image: 'images/gallery/gia-dinh-01.jpg'
    },
    {
      id: 'chung-ta-cua-sau-nay',
      name: 'Chúng Ta Của Sau Này',
      subtitle: 'Ảnh nhóm bạn & kỷ yếu',
      description: 'Lưu giữ tiếng cười của những năm tháng có nhau. Dẫu mai này mỗi người một phương, những bức ảnh này sẽ mãi là ký ức rực rỡ nhất.',
      category: 'Bạn bè · Sinh nhật',
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(62,39,35,0.85) 100%), linear-gradient(135deg, #A68B70, #5C3D2E)',
      icon: '❋',
      image: 'images/gallery/ban-be-01.jpg'
    },
    {
      id: 'tim-lai-dau-xua',
      name: 'Tìm Lại Dấu Xưa',
      subtitle: 'Ảnh áo dài & cổ phục',
      description: 'Hoài niệm nét duyên giữa dòng chảy thời gian. Tìm về vạt áo dài thướt tha bên những mái rêu nhuốm màu thời gian.',
      category: 'Áo dài',
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(62,39,35,0.85) 100%), linear-gradient(135deg, #9B7354, #3E2723)',
      icon: '✦',
      image: 'images/gallery/ao-dai-01.jpg'
    }
  ];

  readonly collectionConcepts: CollectionConcept[] = [
    // Em Và Nắng — Chân dung
    { id: 'cd-nang', collectionId: 'em-va-nang', name: 'CD Nắng', categoryLabel: 'Chân dung', cardDescription: 'Nắng hoàng hôn nhuộm vàng kẽ tóc, váy trắng nhẹ nhàng. Khoảnh khắc thanh xuân trong ngần dưới ánh chiều tà.', longDescription: 'Nắng hoàng hôn nhuộm vàng kẽ tóc, váy trắng nhẹ nhàng bay trong gió chiều. Đôi mắt em khép hờ, tay vươn ra như muốn níu giữ những tia nắng cuối ngày. Không cần tạo dáng cầu kỳ, chỉ đơn giản là em đứng đó, thanh xuân tự khắc kể câu chuyện của mình. Một bộ ảnh để mười năm sau nhìn lại, em vẫn còn nhớ mình đã từng rực rỡ dưới nắng đến thế nào.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/gallery/cd-nang.jpg' },
    { id: 'cd-ben-cua', collectionId: 'em-va-nang', name: 'CD Bên Cửa', categoryLabel: 'Chân dung', cardDescription: 'Ánh sáng dịu nhẹ bên bậu cửa sổ mờ sương, áo len rộng mộc mạc. Góc bình yên sâu lắng giữa không gian quen thuộc.', longDescription: 'Ánh sáng dịu nhẹ bên bậu cửa sổ mờ sương, chiếc áo len rộng mộc mạc ôm lấy thân hình nhỏ bé. Em ngồi đó, mắt nhìn xa xăm, đôi tay vân vê vạt áo – một góc bình yên sâu lắng giữa không gian quen thuộc. Không ồn ào, không phô trương, chỉ là em đang sống chậm lại giữa những ngày bận rộn.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/gallery/cd-ben-cua.jpg' },
    { id: 'cd-retro', collectionId: 'em-va-nang', name: 'CD Retro', categoryLabel: 'Chân dung', cardDescription: 'Tone màu phim ấm áp, trang phục cổ điển những năm 90s. Chân dung hoài cổ mang đậm màu sắc điện ảnh tháng năm.', longDescription: 'Tone màu phim ấm áp, trang phục cổ điển những năm 90s, mái tóc buông xoăn nhẹ như thước phim điện ảnh xưa. Em đứng đó, mắt nhìn vào ống kính, môi khẽ mỉm cười – một nụ cười hoài niệm. Chân dung này không nói về hiện tại, nó kể về một thời đã qua, nhưng đã sống rất trọn vẹn.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/gallery/cd-retro.jpg' },
    { id: 'cd-pho-dem', collectionId: 'em-va-nang', name: 'CD Phố Đêm', categoryLabel: 'Chân dung', cardDescription: 'Ánh đèn neon đường phố lung linh, bóng người một mình lướt qua. Nốt trầm suy tư giữa lòng thành phố lúc lên đèn.', longDescription: 'Ánh đèn neon đường phố lung linh, bóng người một mình lướt qua những con hẻm nhỏ. Em đi giữa lòng thành phố lúc lên đèn, đôi mắt ẩn chứa những suy tư không tên. Bộ ảnh này dành cho những cô gái yêu nỗi cô đơn, trân trọng những khoảnh khắc chỉ có mình và phố thị.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/gallery/cd-pho-dem.jpg' },

    // Ký Ức Đôi Ta — Couple
    { id: 'cp-hoang-hon', collectionId: 'ky-uc-doi-ta', name: 'CP Hoàng Hôn', categoryLabel: 'Couple', cardDescription: 'Chạy trốn khỏi phố thị, nắm tay nhau trên đồi cỏ lau ngập nắng vàng. Thước phim tình yêu tự do, lãng mạn và phóng khoáng.', longDescription: 'Chạy trốn khỏi phố thị ồn ã, nắm tay nhau trên đồi cỏ lau ngập nắng vàng. Anh và cô cùng chạy, cùng cười, tóc bay trong gió, hoàng hôn trải dài sau lưng. Bộ ảnh này dành cho những cặp đôi yêu tự do, yêu những chân trời mới và muốn ghi lại khoảnh khắc họ cùng nhau khám phá thế giới.', price: '4.800.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/gallery/cp-hoang-hon.jpg' },
    { id: 'cp-phim-cu', collectionId: 'ky-uc-doi-ta', name: 'CP Phim Cũ', categoryLabel: 'Couple', cardDescription: 'Tone màu ảnh phim HongKong cổ điển, trang phục retro dạo bước qua hiên nhà cũ. Những cái ôm bình dị mang màu sắc hoài niệm.', longDescription: 'Tone màu ảnh phim HongKong cổ điển, trang phục retro dạo bước qua hiên nhà cũ. Những cái ôm từ sau lưng, những ánh mắt nhìn nhau không lời, tất cả đều mang màu sắc hoài niệm của một thời đã xa. Bộ ảnh dành cho những cặp đôi yêu nét đẹp xưa cũ, trân trọng những điều giản dị và bền vững.', price: '4.800.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/gallery/cp-phim-cu.jpg' },
    { id: 'wd-phong-su', collectionId: 'ky-uc-doi-ta', name: 'WD Phóng Sự', categoryLabel: 'Couple/Wedding', cardDescription: 'Không tạo dáng cứng nhắc, bắt trọn nụ cười rạng rỡ và những giọt nước mắt hạnh phúc. Cuốn phim ngày cưới chân thực, tự nhiên nhất.', longDescription: 'Không tạo dáng cứng nhắc, không khung cảnh dàn dựng, chỉ là những nụ cười rạng rỡ, những giọt nước mắt hạnh phúc trong ngày trọng đại. Mỗi khoảnh khắc đều chân thực và tự nhiên, như chính tình yêu của hai bạn đã luôn là như vậy. Một bộ ảnh cưới để ba mươi năm sau nhìn lại, vẫn thấy đúng hai con người đó, đúng ngày hạnh phúc nhất đời.', price: '5.800.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/gallery/wd-phong-su.jpg' },
    { id: 'cp-con-mua', collectionId: 'ky-uc-doi-ta', name: 'CP Cơn Mưa', categoryLabel: 'Couple', cardDescription: 'Che chung chiếc ô dưới cơn mưa bất chợt của thành phố, ánh mắt chạm nhau. Khoảnh khắc ngọt ngào, lãng mạn như một bộ phim điện ảnh.', longDescription: 'Che chung chiếc ô dưới cơn mưa bất chợt của thành phố, ánh mắt chạm nhau, một nụ cười giữa trời mưa – khoảnh khắc đó đẹp như một bộ phim điện ảnh. Bộ ảnh dành cho những cặp đôi không sợ những điều không như ý, vì biết rằng bên nhau thì cơn mưa cũng thành hoa.', price: '4.800.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/gallery/cp-con-mua.jpg' },

    // Nhà Là Nơi Để Về — Gia đình
    { id: 'gd-sum-vay', collectionId: 'nha-la-noi-de-ve', name: 'GD Sum Vầy', categoryLabel: 'Gia đình', cardDescription: 'Cả nhà cùng ngồi gói bánh, ăn bữa cơm ấm cúng hoặc trò chuyện bên phòng khách ngập nắng. Khung hình lưu giữ hơi ấm tình thân trọn vẹn.', longDescription: 'Bữa cơm ấm cúng, tiếng cười rộn rã nơi phòng khách ngập nắng – nơi tình yêu thương được vun đắp qua từng bữa cơm gia đình. Bộ ảnh không cần trang trí, chỉ cần mọi người ngồi lại với nhau, cùng cười, cùng nói, cùng nhìn nhau bằng đôi mắt yêu thương. Gia đình là vậy đó, bình dị nhưng thiêng liêng.', price: '5.800.000đ', priceNote: 'Theo gói Gia đình', image: 'images/gallery/gd-sum-vay.jpg' },
    { id: 'gd-ngay-xua', collectionId: 'nha-la-noi-de-ve', name: 'GD Ngày Xưa', categoryLabel: 'Gia đình', cardDescription: 'Cả nhà mặc áo dài truyền thống, ghi lại nét trang nghiêm mà hoài cổ trong nếp nhà xưa.', longDescription: 'Cả nhà mặc áo dài truyền thống, ghi lại nét trang nghiêm mà hoài cổ trong nếp nhà xưa. Những tà áo dài thướt tha, những vòng tay ôm nhau trước khung cửa gỗ mộc mạc – tất cả đều nói về nguồn cội, về những giá trị gia đình vẹn nguyên qua thời gian.', price: '5.800.000đ', priceNote: 'Theo gói Gia đình', image: 'images/gallery/gd-ngay-xua.jpg' },
    { id: 'gd-tho-au', collectionId: 'nha-la-noi-de-ve', name: 'GD Thơ Ấu', categoryLabel: 'Gia đình', cardDescription: 'Bố mẹ cùng con trẻ dạo chơi trên đồng cỏ, bắt trọn khoảnh khắc lớn khôn tự nhiên của bé.', longDescription: 'Bố mẹ cùng con trẻ dạo chơi trên đồng cỏ xanh, bắt trọn những khoảnh khắc lớn khôn tự nhiên của bé. Những bước chân chập chững, những nụ cười hồn nhiên, những cái ôm từ ba mẹ – tất cả được gói ghém trong một bộ ảnh mà sau này khi con lớn, sẽ thấy mình đã được yêu thương trọn vẹn như thế nào.', price: '4.800.000đ', priceNote: 'Theo gói Gia đình', image: 'images/gallery/gd-tho-au.jpg' },
    { id: 'gd-ba-the-he', collectionId: 'nha-la-noi-de-ve', name: 'GD Ba Thế Hệ', categoryLabel: 'Gia đình', cardDescription: 'Khung hình đầy đủ từ ông bà, cha mẹ đến con cháu với những cái ôm đầy gắn kết.', longDescription: 'Khung hình đầy đủ từ ông bà, cha mẹ đến con cháu với những cái ôm đầy gắn kết. Nếp nhăn trên gương mặt ông bà, ánh mắt trìu mến của cha mẹ, và nụ cười trong veo của con trẻ – tất cả tạo thành một bức tranh gia đình hoàn chỉnh, nơi tình yêu được truyền từ đời này sang đời khác.', price: '6.800.000đ', priceNote: 'Theo gói Gia đình', image: 'images/gallery/gd-ba-the-he.jpg' },

    // Chúng Ta Của Sau Này — Nhóm bạn
    { id: 'nb-thanh-xuan', collectionId: 'chung-ta-cua-sau-nay', name: 'NB Thanh Xuân', categoryLabel: 'Nhóm bạn', cardDescription: 'Những nụ cười vô tư dưới bóng râm sân trường, lưu giữ vẹn nguyên tình bạn năm tháng ấy.', longDescription: 'Những nụ cười vô tư dưới bóng râm sân trường, những cái khoác vai thân thiết, những ánh mắt nhìn về cùng một hướng – tất cả đều ghi lại vẹn nguyên tình bạn của những năm tháng ấy. Thanh xuân không có bạn thì chỉ là một mùa hè tẻ nhạt.', price: '4.800.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/gallery/nb-thanh-xuan.jpg' },
    { id: 'nb-lang-du', collectionId: 'chung-ta-cua-sau-nay', name: 'NB Lãng Du', categoryLabel: 'Nhóm bạn', cardDescription: 'Cùng nhóm bạn thân đi trốn phố thị, đón gió trên chiếc xe hoài cổ dọc những cung đường.', longDescription: 'Cùng nhóm bạn thân đi trốn phố thị, đón gió trên chiếc xe hoài cổ dọc những cung đường xa. Những tiếng cười vang vọng giữa trời, những bàn tay vẫy lên không trung – đó là tuổi trẻ, là khi ta còn có thể cùng nhau làm mọi điều điên rồ mà chẳng cần lý do.', price: '5.800.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/gallery/nb-lang-du.jpg' },
    { id: 'nb-nien-thieu', collectionId: 'chung-ta-cua-sau-nay', name: 'NB Niên Thiếu', categoryLabel: 'Nhóm bạn', cardDescription: 'Tone màu ảnh phim HongKong, cả nhóm cùng ngồi hóng mát bên quán nước hay con hẻm nhỏ.', longDescription: 'Tone màu ảnh phim HongKong, cả nhóm cùng ngồi hóng mát bên quán nước cóc hay con hẻm nhỏ rêu phong. Những câu chuyện rôm rả, những cái nhìn nhau hiểu ý, tất cả đều là những mảnh ghép của tuổi trẻ đẹp nhất. Bộ ảnh để mỗi lần buồn lại mở ra, thấy mình còn có những người bạn như thế.', price: '4.800.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/gallery/nb-nien-thieu.jpg' },
    { id: 'nb-tri-ky', collectionId: 'chung-ta-cua-sau-nay', name: 'NB Tri Kỷ', categoryLabel: 'Nhóm bạn', cardDescription: 'Khung hình cận cảnh ấm áp của những người bạn thân thiết, không ồn ào nhưng đầy gắn kết.', longDescription: 'Khung hình cận cảnh ấm áp của những người bạn thân thiết – không ồn ào, không rộn ràng, nhưng đầy gắn kết. Chỉ cần những cái ôm siết chặt, những ánh mắt hiểu nhau không cần lời, bộ ảnh này kể về tình bạn đã trải qua bao mùa, bao biến cố và vẫn còn đó, bền chặt.', price: '4.800.000đ', priceNote: 'Theo gói Cặp đôi', image: 'images/gallery/nb-tri-ky.jpg' },

    // Tìm Lại Dấu Xưa — Áo dài
    { id: 'dx-hon-viet', collectionId: 'tim-lai-dau-xua', name: 'DX Hồn Việt', categoryLabel: 'Áo dài', cardDescription: 'Tà áo dài thướt tha bên mái rêu phong dinh thự cổ, nét duyên dáng vượt thời gian.', longDescription: 'Tà áo dài thướt tha bên mái rêu phong dinh thự cổ, nét duyên dáng vượt thời gian. Người con gái bước nhẹ qua những hàng cột xưa, tay nâng nhẹ vạt áo, mắt nhìn xa xăm – một bức tranh Việt Nam giữa lòng thời gian. Bộ ảnh dành cho những ai muốn tìm về cội nguồn, tìm về nét đẹp truyền thống của dân tộc.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/gallery/dx-hon-viet.jpg' },
    { id: 'dx-co-phuc', collectionId: 'tim-lai-dau-xua', name: 'DX Cổ Phục', categoryLabel: 'Áo dài', cardDescription: 'Kiêu sa trong phục trang Nhật Bình, Áo Tấc, sống lại những thước phim lịch sử đầy tự hào.', longDescription: 'Kiêu sa trong phục trang Nhật Bình, Áo Tấc, sống lại những thước phim lịch sử đầy tự hào. Những đường nét tinh xảo của cổ phục Việt, những bước đi uyển chuyển, nụ cười đài các – bộ ảnh này đưa bạn trở về thời vàng son của lịch sử, nơi nét đẹp văn hóa được gìn giữ qua từng đường kim mũi chỉ.', price: '4.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/gallery/dx-co-phuc.jpg' },
    { id: 'dx-sai-thanh', collectionId: 'tim-lai-dau-xua', name: 'DX Sài Thành', categoryLabel: 'Áo dài', cardDescription: 'Kính râm, tóc uốn và váy chấm bi phong cách những năm 70s dạo bước ngắm phố thị lên đèn.', longDescription: 'Kính râm gọng đen, tóc uốn bồng bềnh và váy chấm bi phong cách những năm 70s, dạo bước ngắm phố thị lên đèn. Bộ ảnh đưa bạn về Sài Gòn xưa, nơi nhịp sống vội vã nhưng vẫn còn chút hoài niệm đọng lại trên từng bước chân. Dành cho những ai yêu phong cách hoài cổ và chất điện ảnh trong từng khung hình.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/gallery/dx-sai-thanh.jpg' },
    { id: 'dx-cho-xua', collectionId: 'tim-lai-dau-xua', name: 'DX Chợ Xưa', categoryLabel: 'Áo dài', cardDescription: 'Mộc mạc với chiếc áo bà ba và nón lá, lưu giữ nét bình dị giữa nhịp sống vội vã.', longDescription: 'Mộc mạc với chiếc áo bà ba và nón lá, lưu giữ nét bình dị giữa nhịp sống vội vã. Hình ảnh người con gái Việt Nam bên những gánh hàng, những con phố chợ xưa – tất cả đều là ký ức về một thời đã xa mà vẫn còn đọng lại trong mỗi trái tim. Bộ ảnh dành cho những ai yêu vẻ đẹp bình dị và mộc mạc.', price: '3.800.000đ', priceNote: 'Theo gói Chân dung', image: 'images/gallery/dx-cho-xua.jpg' },
  ];

  readonly serviceCards: ServiceCard[] = [
    {
      id: 1,
      name: 'Chân dung',
      tagline: 'Một mình giữa khung hình',
      description: 'Khoảnh khắc của riêng bạn trước khi có bạn đời, trước khi thành mẹ — mỗi cột mốc bạn muốn ghi lại cho chính mình.',
      queryCategory: 'Chân dung',
      conceptCount: '69',
      price: '3.800.000đ',
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(62,39,35,0.85) 100%), linear-gradient(135deg, #C9A87C, #9B7354)',
      icon: '✦',
      image: 'images/concepts/chan-dung/chandung.jpg'
    },
    {
      id: 2,
      name: 'Couple',
      tagline: 'Hai người · một câu chuyện',
      description: 'Cho đôi đang yêu, đôi sắp cưới, đôi đã cùng nhau qua bao mùa. Bộ ảnh chung giữ lại một chương yêu thương đẹp nhất.',
      queryCategory: 'Couple',
      conceptCount: '13',
      price: '5.000.000đ',
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(62,39,35,0.85) 100%), linear-gradient(135deg, #B8977A, #7B5B3F)',
      icon: '❋',
      image: 'images/concepts/homepage/ttcouple.jpg'
    },
    {
      id: 3,
      name: 'Gia đình',
      tagline: 'Hạt nhân đến 3 thế hệ',
      description: 'Bé lớn nhanh lắm. Bà mỗi ngày một khác. Hôm nay là lúc lưu lại câu chuyện của cả nhà — trước khi thời gian cuốn đi.',
      queryCategory: 'Gia đình',
      conceptCount: '18',
      price: '3.500.000đ',
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(62,39,35,0.85) 100%), linear-gradient(135deg, #A68B70, #5C3D2E)',
      icon: '♡',
      image: 'images/concepts/homepage/giadingtrangchu.jpg'
    },
    {
      id: 4,
      name: 'Mẹ và con',
      tagline: 'Khoảnh khắc thiêng liêng nhất',
      description: 'Từ những ngày mang bầu đến lúc bé lớn dần — mỗi ánh nhìn, mỗi cái ôm đều đáng được giữ lại mãi mãi.',
      queryCategory: 'Mẹ và con',
      conceptCount: '13',
      price: '3.800.000đ',
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(62,39,35,0.85) 100%), linear-gradient(135deg, #E8C98B, #C9A87C)',
      icon: '♡',
      image: 'images/concepts/homepage/ttmevacon.jpg'
    },
    {
      id: 5,
      name: 'Bạn bè · Sinh nhật',
      tagline: 'Cột mốc đáng để ghi nhớ',
      description: 'Sinh nhật chẵn. Họp lớp. Tri kỷ 10 năm gặp lại — những khoảnh khắc đáng được lưu giữ cùng người bạn yêu quý.',
      queryCategory: 'Bạn bè · Sinh nhật',
      conceptCount: '1',
      price: '5.000.000đ',
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(62,39,35,0.85) 100%), linear-gradient(135deg, #A68B70, #5C3D2E)',
      icon: '❋',
      image: 'images/concepts/homepage/ttbanbe.jpg'
    },
    {
      id: 6,
      name: 'Áo dài',
      tagline: 'Áo dài Việt · cổ điển và hiện đại',
      description: 'Tà áo dài Việt tôn lên nét duyên của người phụ nữ Việt qua từng dáng vẻ, từ truyền thống đến cách tân.',
      queryCategory: 'Áo dài',
      conceptCount: '15',
      price: '3.800.000đ',
      gradient: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(62,39,35,0.85) 100%), linear-gradient(135deg, #9B7354, #3E2723)',
      icon: '✦',
      image: 'images/concepts/homepage/ttaodai.jpg'
    }
  ];

  readonly stats = [
    { value: '129+', label: 'Concept đa dạng' },
    { value: '3,500+', label: 'Buổi chụp đã thực hiện' },
    { value: '98%', label: 'Khách hàng hài lòng' },
    { value: '2', label: 'Cơ sở Hà Nội & Sài Gòn' },
  ];

  getConceptsByCategory(category: string): Concept[] {
    if (category === 'Tất cả') return this.concepts;
    return this.concepts.filter(c => c.category === category);
  }

  getConceptById(id: string): Concept | undefined {
    return this.concepts.find(c => c.id === id);
  }

  getRelatedConcepts(concept: Concept, limit = 4): Concept[] {
    return this.concepts
      .filter(c => c.category === concept.category && c.id !== concept.id)
      .slice(0, limit);
  }

  getCollectionConceptsByCollection(collectionId: string): CollectionConcept[] {
    return this.collectionConcepts.filter(c => c.collectionId === collectionId);
  }

  getCollectionConceptById(collectionId: string, conceptId: string): CollectionConcept | undefined {
    return this.collectionConcepts.find(c => c.collectionId === collectionId && c.id === conceptId);
  }
}
