import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';
import { Concept } from '../../shared/components/concept-card/concept-card.component';

@Component({
  selector: 'app-concept-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './concept-detail.component.html',
  styleUrls: ['./concept-detail.component.scss']
})
export class ConceptDetailComponent implements OnInit {
  concept?: Concept;
  relatedConcepts: Concept[] = [];

  /** Consultation form model — matches homepage pattern */
  consultData = {
    name: '',
    phone: '',
    concept: '',
    idea: '',
    location: '',
    note: ''
  };
  consultSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    public data: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.concept = this.data.getConceptById(id);
      if (this.concept) {
        this.relatedConcepts = this.data.getRelatedConcepts(this.concept);
        /* Pre-select current concept in the consultation form */
        this.consultData.concept = this.concept.category;
      }
    });
  }

  /**
   * Returns the detailed description split into paragraphs.
   * Splits the raw long description by sentence boundaries
   * and groups into chunks of ~2 sentences per paragraph.
   */
  getLongDescription(): string[] {
    const raw = this.getRawLongDescription();
    const sentences = raw.split(/\.\s+/).filter(s => s.trim().length > 0);
    if (sentences.length <= 2) return [raw];

    const paragraphs: string[] = [];
    for (let i = 0; i < sentences.length; i += 2) {
      const chunk = sentences.slice(i, i + 2).join('. ') + '.';
      paragraphs.push(chunk);
    }
    return paragraphs;
  }

  submitConsultation(form: NgForm) {
    if (form.valid) {
      this.consultSubmitted = true;
      console.log('Consultation submitted:', this.consultData);
      setTimeout(() => {
        this.consultSubmitted = false;
        form.resetForm();
        if (this.concept) {
          this.consultData.concept = this.concept.category;
        }
      }, 3000);
    }
  }

  /* ================================================================
     Raw long descriptions — one per concept, split into paragraphs
     by getLongDescription() above
     ================================================================ */
  private getRawLongDescription(): string {
    const descriptions: Record<string, string> = {
      // Chân dung
      'cd-basic': 'CD Basic là concept tối giản nhất — áo cổ lọ đen bản thuần, tóc búi gọn hoặc thả lơi vài sợi rớt bên thái dương. Ảnh đen trắng chuyển sắc sâu, tương phản vừa đủ để gò má và đuôi mắt hiện lên rõ. Bố cục gồm một khuôn chính cận mặt kết hợp ba khung nhỏ đa góc. Phù hợp phụ nữ từ 22 đến 40, cần một bộ ảnh nền tảng cho profile LinkedIn, hồ sơ công việc.',
      'cd-do-ruc': 'Concept Đỏ Rực mang sắc đỏ đậm làm chủ đạo — màu của đam mê, của sự tự tin và quyền lực. Áo dài đỏ hoặc đầm đỏ phối cùng hậu cảnh tối giản, tạo nên sự tương phản mạnh mẽ. Ánh sáng Rembrandt tôn khối gương mặt, highlight mái tóc. Phù hợp với phụ nữ cá tính, yêu sự nổi bật và muốn một bộ ảnh đầy khí chất.',
      'bl-holy': 'BL Holy — đen trắng, sắc lạnh và đầy cảm xúc. Concept lấy cảm hứng từ phong cách high-fashion editorial, ánh sáng tương phản cao tạo chiều sâu cho từng đường nét. Trang phục mang hơi thở dark romantic, phối voan và ren tinh tế. Phù hợp cho ai muốn một bộ ảnh cá tính, khác biệt và đầy nghệ thuật.',
      'cd-nau': 'Concept Nâu — tông đất mộc mạc, gần gũi như hơi thở của thiên nhiên. Từ nâu đất, nâu gỗ đến nâu cafe, tất cả hòa quyện tạo nên một tổng thể ấm áp. Trang phục linen tự nhiên, phụ kiện đất nung và gỗ. Ánh sáng chiều vàng dịu bao phủ toàn bộ khung hình. Lý tưởng cho những ai yêu phong cách tối giản, earth-tone.',
      'bl-dau': 'BL Dâu — sắc hồng dâu ngọt ngào như một buổi sáng mùa hè. Concept lấy cảm hứng từ aesthetic Hàn Quốc với tông hồng pastel, phụ kiện trái dâu xinh xắn và background phòng ngủ vintage nhẹ nhàng. Makeup tone hồng tự nhiên, tóc tết thả nhẹ. Phù hợp nàng thơ 18-28 tuổi yêu sự ngọt ngào, trong trẻo.',
      'bl-trang': 'BL Trắng — tinh khôi và thuần khiết như trang giấy mới. Concept trắng chủ đạo với áo dài trắng hoặc váy trắng, phối cùng hoa baby hoặc hoa hồng trắng. Ánh sáng high-key tạo không gian sáng, sạch, bay bổng. Background tối giản để chủ thể là trung tâm. Phù hợp profile chuyên nghiệp hoặc ảnh kỷ niệm tuổi trẻ.',
      'hoa-dung': 'Hòa Dùng — áo dài hồng đào, dịu dàng và đầy nữ tính. Concept tôn vinh vẻ đẹp Việt qua tà áo dài cách tân với tông hồng đào chủ đạo. Hoa sen, hoa đào làm điểm nhấn, background gỗ hoặc gạch cổ tạo chiều sâu văn hóa. Phù hợp các bạn nữ yêu nét đẹp truyền thống pha chút hiện đại.',
      'nang-nhan': 'Nàng Nhan — phong cách nàng thơ trong truyện cổ tích giữa đời thực. Concept lấy cảm hứng từ những nàng công chúa với váy xòe nhẹ, tóc xoăn bồng bềnh và ánh sáng golden-hour dịu ngọt. Background vườn hoa hoặc phòng vintage pastel. Đây là concept dành cho những cô gái mơ mộng, yêu sự nhẹ nhàng và lãng mạn.',
      'suot': 'Sướt — concept áo dài sheer cách tân, gợi cảm và đầy táo bạo. Chất liệu xuyên thấu được xử lý tinh tế, kết hợp cùng nội y hoặc bodysuit đồng màu tạo hiệu ứng thẩm mỹ cao. Ánh sáng softbox tạo đường viền mềm mại. Concept dành cho ai muốn thể hiện sự tự tin và phóng khoáng của phụ nữ hiện đại.',
      'ao-dai-do': 'Áo Dài Đỏ — concept cách tân năng động, dành cho người trẻ yêu nét đẹp Việt nhưng muốn phá cách. Áo dài đỏ phom dáng hiện đại, phối quần culottes hoặc chân váy, giày sneaker trắng. Background đô thị, quán cafe vintage hoặc phố cổ. Sự kết hợp giữa truyền thống và đương đại một cách tự nhiên.',
      'cd-vai': 'CD Vai — concept tôn vinh bờ vai phụ nữ, điểm quyến rũ thường bị bỏ quên. Trang phục off-shoulder, ống kính tập trung vào đường cong cổ — vai — xương quai xanh. Ánh sáng cạnh tạo shadow tinh tế dọc xương đòn. Concept gợi cảm nhưng không phô trương, phù hợp phụ nữ từ 25 đến 40.',
      'slay-girl': 'Slay Girl — concept dành cho những cô gái tự tin, cá tính và không ngại thể hiện bản thân. Phong cách street-style pha high-fashion với outfit statement, makeup bold, phụ kiện statement. Background công nghiệp hoặc studio với ánh sáng màu. Mỗi khung hình là một tuyên ngôn cá nhân mạnh mẽ.',

      // Couple
      'couple-tone-han': 'Tone Hàn phong cách Hàn Quốc nhẹ nhàng, lãng mạn, và đầy sự ngọt ngào. Tông màu pastel dịu dàng — hồng phấn, xanh mint, tím lilac. Trang phục đơn giản nhưng đẹp, tóc tự nhiên, makeup nhẹ nhàng. Các pose tự nhiên như đang trò chuyện, đang cười, đang nhìn nhau đầy yêu thương. Phù hợp cặp đôi từ 20 đến 35.',
      'couple-retro': 'Couple Retro — Sài Gòn xưa trong từng khung hình. Concept đưa đôi bạn về thập niên 70-80 với áo bà ba, áo sơ mi linen, xe đạp cổ và góc phố rêu phong. Gam màu vintage sepia ấm áp, hạt film mịn như ảnh analog. Hoàn hảo cho cặp đôi yêu hoài niệm và muốn một bộ ảnh kể câu chuyện tình vượt thời gian.',
      'doi-ao-dai': 'Đôi Áo Dài — cả hai cùng khoác lên mình tà áo dài Việt, truyền thống và sang trọng. Concept tôn vinh tình yêu trong văn hóa Việt — nàng áo dài thướt tha, chàng áo dài nam lịch lãm. Background nhà cổ, sân đình hoặc phố cổ Hà Nội. Ánh sáng tự nhiên mềm mại tôn nét duyên dáng của cả hai.',
      'couple-den': 'Couple Đen — tông đen huyền bí, mạnh mẽ và đầy cá tính. Cả hai cùng diện outfit đen với phong cách riêng — nàng váy đen ôm, chàng suit đen lịch lãm. Background minimal với ánh sáng low-key tạo chiều sâu. Concept dành cho cặp đôi yêu phong cách edgy, muốn khác biệt với những bộ ảnh couple truyền thống.',
      'couple-trang': 'Couple Trắng — tông trắng tinh khôi như tình yêu thuần khiết. Cả hai cùng diện trang phục trắng trong không gian sáng, sạch, tối giản. Ánh sáng high-key tạo cảm giác bay bổng, lãng mạn. Concept lý tưởng cho ảnh pre-wedding hoặc kỷ niệm ngày yêu. Tình yêu trong sáng được ghi lại một cách chân thật và đẹp nhất.',
      'couple-nature': 'Couple Nature — yêu như hơi thở của đất trời. Concept đưa cặp đôi về với thiên nhiên — đồi cỏ, rừng thông, bãi biển hoặc cánh đồng hoa. Trang phục nhẹ nhàng, màu trung tính hòa cùng cảnh sắc. Ánh sáng golden-hour hoặc sáng sớm. Những khoảnh khắc tự nhiên nhất — nắm tay, tựa vai, chạy nhảy — được ghi lại một cách nghệ thuật.',

      // Gia đình
      'gdcc-tram-am': 'GDCC Trầm Ấm — tông nâu ấm, gần gũi, đoàn tụ và đầy yêu thương. Cả nhà cùng nhau trong khung hình ấm cúng, ánh sáng vàng dịu nhẹ như nắng cuối chiều. Trang phục đồng bộ với gam màu đất — beige, nâu, cream. Concept dành cho những gia đình yêu sự giản dị và chân thật.',
      'gdcc-tet': 'GDCC Tết — không khí Tết sum vầy trong từng khung hình. Cả nhà cùng mặc áo dài Tết, bên mâm ngũ quả, cành đào, cành mai. Background bếp lửa hồng, phòng khách có bàn thờ tổ tiên hoặc sân nhà đầy nắng xuân. Những khoảnh khắc gói bánh chưng, chúc Tết, lì xì được tái hiện chân thực và ấm áp.',
      'gdcc-han-quoc': 'GDCC Hàn Quốc — phong cách gia đình Hàn hiện đại, nhẹ nhàng và tươi mới. Trang phục casual đồng bộ tông pastel, background studio sáng hoặc công viên xanh. Pose tự nhiên — cả nhà cùng chơi đùa, chạy nhảy, ôm nhau cười. Concept phù hợp gia đình trẻ muốn một bộ ảnh trong trẻo và tràn đầy năng lượng.',
      'gdcc-ao-dai': 'GDCC Áo Dài — cả nhà cùng mặc áo dài, truyền thống và đầy tự hào. Ba thế hệ trong tà áo dài Việt — bà, mẹ, con gái mỗi người một vẻ đẹp. Background nhà cổ, sân đình, hoặc phố cổ. Concept tôn vinh giá trị gia đình Việt và nét đẹp vượt thời gian của áo dài dân tộc.',
      'gdcc-casual': 'GDCC Casual — phong cách đời thường, đơn giản và chân thật nhất. Không cầu kỳ về trang phục — áo thun, quần jeans, váy đơn giản. Background là chính ngôi nhà của gia đình hoặc công viên quen thuộc. Những khoảnh khắc tự nhiên — bố tung con lên cao, mẹ đọc sách cùng bé, cả nhà cùng làm vườn — được ghi lại một cách nghệ thuật mà không mất đi sự chân thật.',
      'gdcc-cao-cap': 'GDCC Cao Cấp — concept sang trọng và đẳng cấp dành cho gia đình yêu sự tinh tế. Trang phục thiết kế đồng bộ, makeup chuyên nghiệp cho từng thành viên. Background studio cao cấp hoặc biệt thự. Ánh sáng cinematic tạo ra những khung hình như tạp chí. Mỗi bức ảnh là một tác phẩm nghệ thuật gia đình.',

      // Mẹ và con
      'me-bau-diu-dang': 'Mẹ Bầu Dịu Dàng — tôn vinh vẻ đẹp của người phụ nữ trong giai đoạn thiêng liêng nhất. Tông pastel nhẹ nhàng, váy bầu ren hoặc voan mềm tôn lên bụng bầu xinh xắn. Ánh sáng window-light tự nhiên tạo đường viền mềm mại. Từng nét rạng rỡ, từng nụ cười hạnh phúc của mẹ được ghi lại như một bài thơ về tình mẫu tử.',
      'me-bau-hien-dai': 'Mẹ Bầu Hiện Đại — bà bầu vẫn luôn rạng rỡ và tự tin. Concept phá bỏ định kiến mẹ bầu phải "giấu bụng" — thay vào đó là sự kiêu hãnh khoe chiếc bụng tròn xinh. Trang phục bodycon, jumpsuit hoặc blazer phối crop-top. Background studio hiện đại hoặc đô thị. Mạnh mẽ, cá tính và đầy cảm hứng cho các bà mẹ Gen Z.',
      'me-va-con': 'Mẹ Và Con — những khoảnh khắc bên con yêu thương và ấm áp. Không cần tạo dáng cầu kỳ — chỉ là mẹ bế con, mẹ hôn con, mẹ đọc truyện cho con hay đơn giản là cùng nhau nằm trên thảm cỏ. Ánh sáng tự nhiên mềm mại, tông màu ấm áp. Mỗi khung hình là một kỷ niệm quý giá của tình mẫu tử thiêng liêng.',
      'me-con-ao-dai': 'Mẹ Con Áo Dài — di sản yêu thương qua tà áo dài Việt. Mẹ và con gái cùng mặc áo dài đồng điệu, truyền thống và đầy ý nghĩa. Background hoài niệm, gợi nhớ những giá trị gia đình Việt. Concept không chỉ là ảnh đẹp mà còn là món quà văn hóa mẹ trao cho con — để con lớn lên yêu và tự hào về nét đẹp dân tộc.',

      // Bạn bè · Sinh nhật
      'friends-concept': 'Friends Concept — cùng nhau tạo nên những kỷ niệm khó quên. Nhóm bạn thân, mỗi người một cá tính nhưng cùng chung một câu chuyện. Concept có thể là buổi tiệc sinh nhật, buổi dã ngoại, hay đơn giản là một buổi chiều cùng nhau ở quán cafe quen. Trang phục đồng bộ theo theme, tự nhiên và tràn đầy tiếng cười.',

      // Áo dài
      'ao-dai-tet': 'Áo Dài Tết — rực rỡ sắc xuân trong từng khung hình. Áo dài Tết với gam màu đỏ, vàng, hồng đào rực rỡ. Background mai vàng, đào hồng, câu đối đỏ. Không khí xuân được tái hiện trọn vẹn — từ nụ cười rạng rỡ đến những cánh hoa đào rơi. Bộ ảnh lưu giữ không chỉ vẻ đẹp của bạn mà còn là không khí Tết Việt đậm đà.',
      'ao-dai-co-truyen': 'Áo Dài Cổ Truyền — vẻ đẹp vượt thời gian của người phụ nữ Việt Nam. Concept tôn vinh áo dài truyền thống với phom dáng cổ điển, chất liệu lụa hoặc gấm cao cấp. Background mang đậm dấu ấn Việt — nhà cổ, đình làng, phố cổ. Ánh sáng tự nhiên dịu dàng tôn lên từng đường nét trên tà áo dài. Phù hợp cho ai yêu giá trị truyền thống.',
      'ao-dai-cach-tan': 'Áo Dài Cách Tân — làn gió mới cho tà áo dài Việt. Phom dáng hiện đại với điểm nhấn cách điệu — cổ thuyền, tay lỡ, họa tiết in kỹ thuật số. Phối cùng phụ kiện hiện đại như giày cao gót mũi nhọn, hoa tai statement. Background hiện đại hoặc studio tối giản. Dành cho phụ nữ trẻ yêu áo dài nhưng muốn sự mới mẻ và phá cách.',
      'ao-dai-den': 'Áo Dài Đen — huyền bí, sang trọng và đầy quyến rũ. Concept khai thác sự tương phản giữa tà áo dài đen tuyền với làn da, giữa nét truyền thống của áo dài và vẻ đẹp hiện đại của phụ nữ Việt. Background tối với ánh sáng spotlight tạo chiều sâu. Đơn giản nhưng đầy ấn tượng — phù hợp cho bộ ảnh nghệ thuật cá nhân.',
    };
    return descriptions[this.concept?.id || ''] || 'Mỗi concept tại Ký Ức Studio đều được thiết kế riêng biệt, kết hợp kỹ thuật ánh sáng điện ảnh hiện đại với các chất liệu văn hóa Việt được cách điệu tinh tế. Từ concept, trang phục, makeup đến hậu kỳ — tất cả được cá nhân hóa để kể câu chuyện riêng của bạn. Hãy liên hệ để được tư vấn chi tiết về concept này.';
  }
}
