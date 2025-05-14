document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;

  const slider = document.getElementById('slider');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const tooltip = document.getElementById("tooltip");

  // ======= Slide chuyển trang =======
  if (!nextBtn || !prevBtn) {
    console.error("Không tìm thấy nút điều hướng");
    return;
  }

  nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlide();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlide();
    }
  });

  function updateSlide() {
    const offset = currentSlide * -100;
    slider.style.transform = `translateX(${offset}vw)`;

    if (tooltip) tooltip.style.display = "none";

    const gioithieu = document.querySelector('.page1 .gioithieu');
    const muctieu = document.querySelector('.page1 .muctieu');
    const traidat = document.querySelector('.page1 .traidat');

    if (gioithieu) gioithieu.style.animation = "none";
    if (muctieu) muctieu.style.animation = "none";
    if (traidat) traidat.style.animation = "none";

    if (currentSlide === 1) {
      setTimeout(() => {
        if (gioithieu) gioithieu.style.animation = "slideInLeft 1.2s ease forwards";
        if (muctieu) muctieu.style.animation = "slideInRight 1.2s ease forwards";
        if (traidat) traidat.style.animation = "fadeIn 1.2s ease forwards, rotateEarth 25s linear infinite";
      }, 100);
    }
  }

  updateSlide(); // Run lúc đầu

  // ======= DỮ LIỆU DU LỊCH XANH =======
  const provinceData = {
laichau: {
  name: ["Lai Châu"],
  face: ["./assets/imgbando/laichauface.png"],
  images: ["./assets/imgbando/laichau2.png",
           "./assets/imgbando/laichau1.png",
           "./assets/imgbando/laichau3.png",
           "./assets/imgbando/laichau4.png",
           "./assets/imgbando/laichau5.png",
           "./assets/imgbando/laichau6.png"
    ],
  locations: ["Lai Châu, một tỉnh vùng cao Tây Bắc Việt Nam, nổi bật với vẻ đẹp hoang sơ và hùng vĩ của thiên nhiên, là điểm đến lý tưởng cho những ai yêu thích du lịch sinh thái và khám phá. Những khu du lịch tự nhiên ở đây mang đến trải nghiệm độc đáo với khung cảnh núi non trùng điệp, thác nước kỳ vĩ và không khí trong lành. Du khách có thể chinh phục đỉnh Pu Ta Leng – nóc nhà thứ hai của Đông Dương, ngắm biển mây bồng bềnh tại đèo Ô Quy Hồ, hay đắm mình trong vẻ thơ mộng của đồi chè Tân Uyên. Bên cạnh đó, cao nguyên Sìn Hồ và bản Sì Thâu Chải cũng là nơi lưu giữ bản sắc văn hóa các dân tộc thiểu số, mang đến hành trình hòa mình giữa thiên nhiên và con người. Lai Châu không chỉ là nơi thư giãn mà còn là miền đất khơi dậy đam mê chinh phục và trải nghiệm chân thực với thiên nhiên nguyên sơ."]
  },
laocai: {
  name: ["Lào Cai"],
  face: ["./assets/imgbando/laocai1.png"],
  images: ["./assets/imgbando/laocai1.png",
           "./assets/imgbando/laocai2.png",
           "./assets/imgbando/laocai3.png",
           "./assets/imgbando/laocai4.png",
           "./assets/imgbando/laocai5.png",
           "./assets/imgbando/laocai6.png"],
  locations: ["Lào Cai là vùng đất nổi tiếng với vẻ đẹp thiên nhiên hùng vĩ và nền văn hóa đặc sắc của các dân tộc miền núi phía Bắc. Nơi đây sở hữu nhiều khu du lịch tự nhiên kỳ thú như đỉnh Fansipan – nóc nhà Đông Dương, thung lũng Mường Hoa thơ mộng, và thác Bạc trắng xóa giữa núi rừng. Sapa – trái tim du lịch của Lào Cai, không chỉ hấp dẫn bởi cảnh sắc bốn mùa thay đổi mà còn bởi những bản làng như Cát Cát, Tả Van mang đậm bản sắc người H’mông, Dao. Bên cạnh đó, rừng nguyên sinh Hoàng Liên hay hang Tiên huyền bí cũng là điểm đến hấp dẫn cho những ai yêu khám phá. Lào Cai mang đến cho du khách hành trình hòa mình vào thiên nhiên hoang sơ, tận hưởng không khí trong lành và tìm về những giá trị văn hóa nguyên bản nơi vùng cao."]
  },
hagiang: {
  name: ["Hà Giang"],
  face: ["./assets/imgbando/hagiang1.png"],
  images: ["./assets/imgbando/hagiang1.png",
           "./assets/imgbando/hagiang2.png",
           "./assets/imgbando/hagiang3.png",
           "./assets/imgbando/hagiang4.png",
           "./assets/imgbando/hagiang5.png",
           "./assets/imgbando/hagiang6.png"],
  locations: ["Hà Giang, vùng đất địa đầu Tổ quốc, là nơi lưu giữ những giá trị nguyên sơ và hùng vĩ nhất của thiên nhiên miền núi phía Bắc Việt Nam. Với cao nguyên đá Đồng Văn được UNESCO công nhận là Công viên địa chất toàn cầu, Hà Giang nổi bật với những dãy núi đá tai mèo kỳ vĩ, những con đèo uốn lượn như Mã Pí Lèng – nơi được mệnh danh là “thiên hạ đệ nhất đèo”. Bên cạnh đó, những bản làng cổ kính như Lũng Cú, Sủng Là hay Đồng Văn mang đậm nét văn hóa của các dân tộc H'Mông, Lô Lô, Tày… làm say lòng du khách. Hà Giang cũng là nơi mà mùa hoa tam giác mạch phủ tím khắp núi đồi, tạo nên bức tranh thơ mộng giữa thiên nhiên hoang dại. Du lịch Hà Giang không chỉ là hành trình khám phá cảnh sắc tuyệt đẹp, mà còn là chuyến đi tìm về sự mộc mạc, chân thành và đậm đà bản sắc vùng cao."]
  },
caobang: {
  name: ["Cao Bằng"],
  face: ["./assets/imgbando/caobang1.png"],
  images: ["./assets/imgbando/caobang1.png",
           "./assets/imgbando/caobang2.png",
           "./assets/imgbando/caobang3.png",
           "./assets/imgbando/caobang4.png",
           "./assets/imgbando/caobang5.png",
           "./assets/imgbando/caobang6.png"],
  locations: ["Cao Bằng – mảnh đất địa đầu phía Đông Bắc Tổ quốc – là nơi hội tụ vẻ đẹp thiên nhiên hoang sơ, hùng vĩ cùng bề dày lịch sử cách mạng. Vùng đất này nổi bật với thác Bản Giốc – một trong những thác nước tự nhiên lớn và đẹp nhất Đông Nam Á, nơi dòng Quây Sơn chia đôi biên giới Việt – Trung đổ xuống giữa núi rừng xanh thẳm. Không chỉ có Bản Giốc, Cao Bằng còn sở hữu động Ngườm Ngao kỳ vĩ, hồ Thang Hen trong xanh, núi Mắt Thần độc đáo và Công viên địa chất Non Nước được UNESCO công nhận. Bên cạnh đó, nơi đây còn ghi dấu những địa danh lịch sử thiêng liêng như Pác Bó, suối Lê-nin, hang Cốc Bó – nơi Chủ tịch Hồ Chí Minh từng sống và làm việc trong những năm đầu về nước. Du lịch Cao Bằng là hành trình trở về với thiên nhiên nguyên sơ và nguồn cội lịch sử, để lắng nghe tiếng vọng của đất trời và hun đúc tình yêu quê hương, đất nước."]
  },
sonla: {
  name: ["Sơn La"],
  face: ["./assets/imgbando/sonla1.png"],
  images: ["./assets/imgbando/sonla1.png",
           "./assets/imgbando/sonla2.png",
           "./assets/imgbando/sonla3.png",
           "./assets/imgbando/sonla4.png",
           "./assets/imgbando/sonla5.png",
           "./assets/imgbando/sonla6.png"],
  locations: ["Sơn La – vùng đất miền núi Tây Bắc thơ mộng – là nơi hội tụ vẻ đẹp hùng vĩ của thiên nhiên và đậm đà bản sắc văn hóa dân tộc. Nơi đây nổi tiếng với cao nguyên Mộc Châu rộng lớn, được ví như “Đà Lạt thứ hai” với những đồi chè xanh mướt, thung lũng mận trắng mỗi độ xuân về và khí hậu trong lành quanh năm. Không chỉ có Mộc Châu, Sơn La còn hấp dẫn bởi những kỳ quan như hang Dơi, thác Dải Yếm, hay bản Áng thanh bình bên rừng thông vi vút. Du khách đến đây còn có cơ hội trải nghiệm đời sống văn hóa độc đáo của các dân tộc Thái, Mông, Dao, với những lễ hội rộn ràng và ẩm thực đậm đà. Với thiên nhiên trù phú và con người thân thiện, Sơn La là điểm đến lý tưởng cho những ai yêu thích du lịch sinh thái, nghỉ dưỡng và khám phá văn hóa vùng cao."]
  },
yenbai: {
  name: ["Yên Bái"],
  face: ["./assets/imgbando/yenbai1.png"],
  images: ["./assets/imgbando/yenbai1.png",
           "./assets/imgbando/yenbai2.png",
           "./assets/imgbando/yenbai3.png",
           "./assets/imgbando/yenbai4.png",
           "./assets/imgbando/yenbai5.png",
           "./assets/imgbando/yenbai6.png"],
  locations: ["Yên Bái, một tỉnh miền núi phía Tây Bắc Việt Nam, là điểm đến lý tưởng cho những ai yêu thích khám phá thiên nhiên hoang sơ và văn hóa đa dạng. Với địa hình được kiến tạo bởi ba dãy núi lớn: Hoàng Liên Sơn, núi Con Voi và núi Đá Vôi, Yên Bái sở hữu nhiều thắng cảnh nổi bật như ruộng bậc thang Mù Cang Chải – di tích quốc gia nổi tiếng với vẻ đẹp kỳ vĩ, đặc biệt vào mùa lúa chín từ tháng 9 đến tháng 10. Cánh đồng Mường Lò, lòng chảo lớn thứ hai Tây Bắc, là nơi sinh sống của nhiều dân tộc như Thái, Mông, Mường, tạo nên bức tranh văn hóa đa sắc màu. Đèo Khau Phạ, một trong Tứ Đại Đỉnh Đèo của Việt Nam, hấp dẫn du khách bởi những khúc cua ngoạn mục và cảnh sắc mây trời huyền ảo. Ngoài ra, hồ Thác Bà – hồ nhân tạo lớn nhất Việt Nam với hơn 1.300 đảo lớn nhỏ – là nơi lý tưởng cho các hoạt động du lịch sinh thái và nghỉ dưỡng. Yên Bái còn nổi tiếng với các lễ hội truyền thống như Lễ hội Mường Lò, Lễ hội đền Đông Cuông, góp phần bảo tồn và phát huy giá trị văn hóa địa phương. Với sự kết hợp hài hòa giữa thiên nhiên hùng vĩ và bản sắc văn hóa phong phú, Yên Bái hứa hẹn mang đến cho du khách những trải nghiệm khó quên."]
  },
tuyenquang: {
  name: ["Tuyên Quang"],
  face: [],
  images: [ ],
  locations: ["Tuyên Quang là điểm đến lý tưởng cho du lịch xanh nhờ vào hệ sinh thái rừng núi đa dạng, sông suối trong lành và bản sắc văn hóa phong phú của các dân tộc thiểu số. Du khách có thể khám phá Hồ Na Hang – “Hạ Long giữa đại ngàn” – nơi có làn nước xanh thẳm, bao quanh bởi núi non hùng vĩ và các loài động vật hoang dã quý hiếm. Tại đây, bạn có thể trải nghiệm đi thuyền ngắm thác Khuổi Nhi, cắm trại ven hồ, chèo kayak, hoặc đi bộ xuyên rừng trong khu bảo tồn thiên nhiên. Bên cạnh đó, các bản làng của người Dao, Tày, H’mông là nơi tuyệt vời để du khách hòa mình vào đời sống thường nhật, thưởng thức ẩm thực dân tộc, học cách dệt thổ cẩm, nấu rượu men lá hay tham gia lễ hội truyền thống. Tuyên Quang đang hướng đến phát triển du lịch sinh thái kết hợp với giáo dục bảo tồn và nâng cao ý thức cộng đồng. Đây là điểm đến giúp du khách không chỉ thư giãn giữa thiên nhiên mà còn có cơ hội hiểu sâu hơn về giá trị của sự gắn kết giữa con người và môi trường."]
  },
langson: {
  name: ["Lạng Sơn"],
  face: [],
  images: [ ],
  locations: ["Lạng Sơn – vùng đất biên viễn phía Bắc – là điểm đến hấp dẫn cho những ai yêu thích khám phá thiên nhiên nguyên sơ và văn hóa dân tộc đặc sắc. Với địa hình núi đá vôi xen lẫn thung lũng xanh mát, Lạng Sơn sở hữu nhiều thắng cảnh tự nhiên như động Tam Thanh, núi Tô Thị, thác Đăng Mò, hay khu du lịch sinh thái Mẫu Sơn với khí hậu mát lạnh quanh năm. Mẫu Sơn đặc biệt phù hợp cho du lịch nghỉ dưỡng, leo núi, săn mây và trải nghiệm văn hóa của các dân tộc Dao, Tày, Nùng. Các bản làng nơi đây vẫn còn giữ nét mộc mạc, với nhà sàn truyền thống, ẩm thực núi rừng và các lễ hội dân gian độc đáo. Lạng Sơn đang phát triển nhiều mô hình du lịch cộng đồng, du lịch nông nghiệp và trekking sinh thái, góp phần tạo ra nguồn thu nhập ổn định cho người dân bản địa mà vẫn giữ được môi trường tự nhiên. Hành trình đến Lạng Sơn là hành trình về với thiên nhiên nguyên bản và những nét đẹp văn hóa không bị mai một theo thời gian."]
  },
quangninh: {
  name: ["Quảng Ninh"],
  face: [],
  images: [ ],
  locations: ["Quảng Ninh không chỉ nổi tiếng với vịnh Hạ Long – Di sản thiên nhiên thế giới, mà còn là địa phương tiên phong trong phát triển du lịch sinh thái, bền vững. Bên cạnh vẻ đẹp kỳ vĩ của những đảo đá vôi hàng triệu năm tuổi, Quảng Ninh còn sở hữu nhiều khu sinh thái đặc sắc như đảo Cô Tô, đảo Quan Lạn, bán đảo Vân Đồn và Vườn quốc gia Bái Tử Long – nơi có hệ sinh thái biển đảo phong phú, rừng ngập mặn và san hô quý hiếm. Du khách có thể trải nghiệm tour sinh thái bằng thuyền kayak, tắm biển hoang sơ, tham quan làng chài cổ, hoặc nghỉ dưỡng tại các homestay thân thiện với môi trường. Bên cạnh đó, vùng núi Yên Tử với rừng già và con đường hành hương thanh tịnh là lựa chọn lý tưởng cho những ai tìm kiếm sự tĩnh lặng trong tự nhiên. Quảng Ninh đang tích cực phát triển mô hình du lịch xanh gắn liền với giáo dục môi trường và văn hóa địa phương, nhằm bảo tồn vẻ đẹp thiên nhiên lâu dài và nâng cao chất lượng sống cộng đồng."]
  },
hoabinh: {
  name: ["Hòa Bình"],
  face: [],
  images: [ ],
  locations: ["Hòa Bình là cửa ngõ của vùng Tây Bắc, nổi bật với vẻ đẹp hoang sơ của núi rừng, thung lũng xanh và bản làng dân tộc. Đây là nơi sinh sống của nhiều đồng bào như Mường, Thái, Dao, với những nét văn hóa đặc sắc, giàu truyền thống. Vườn quốc gia Cúc Phương và Khu bảo tồn thiên nhiên Ngọc Sơn – Ngổ Luông là những điểm đến tiêu biểu cho du lịch sinh thái, nơi du khách có thể trekking, khám phá hang động, tắm thác và tìm hiểu hệ sinh thái đa dạng. Ngoài ra, các bản du lịch cộng đồng như bản Lác, bản Pom Coọng (Mai Châu) cung cấp mô hình nghỉ dưỡng thân thiện với môi trường, giúp du khách trải nghiệm cuộc sống bản địa, thưởng thức cơm lam, rượu cần, múa xòe và các hoạt động truyền thống. Hòa Bình đang đẩy mạnh phát triển du lịch gắn với bảo tồn thiên nhiên, gìn giữ bản sắc văn hóa và tạo sinh kế xanh cho người dân. Đây chính là điểm đến lý tưởng cho hành trình khám phá và sống chậm giữa núi rừng yên bình."]
  },
hatay: {
  name: ["Hà Tây"],
  face: [],
  images: [ ],
  locations: ["Hà Tây – nay là một phần của thủ đô Hà Nội – vẫn giữ được vẻ đẹp đặc trưng của vùng trung du Bắc Bộ với cảnh quan hữu tình, làng quê cổ kính và truyền thống văn hóa lâu đời. Những địa danh như Làng cổ Đường Lâm, Chùa Thầy, Chùa Trăm Gian, hay núi Ba Vì mang đến trải nghiệm vừa gần gũi vừa sâu lắng. Đặc biệt, khu du lịch sinh thái Ba Vì đang trở thành điểm đến yêu thích cho du khách yêu thiên nhiên: với rừng nguyên sinh, các loài thực vật quý, không khí trong lành cùng các hoạt động như leo núi, đạp xe rừng, tắm suối và cắm trại. Các làng nghề truyền thống như gốm sứ, lụa, kẹo lạc cũng góp phần vào bức tranh du lịch sinh thái, nơi du khách có thể hòa mình vào nhịp sống địa phương, học làm thủ công và thưởng thức ẩm thực vùng quê. Du lịch xanh tại Hà Tây cũ là sự giao thoa giữa thiên nhiên, văn hóa và lối sống bền vững – một điểm dừng chân tuyệt vời cho ai muốn tìm lại giá trị nguyên bản giữa cuộc sống hiện đại."]
  },
ninhbinh: {
  name: ["Ninh Bình"],
  face: [],
  images: [ ],
  locations: ["Ninh Bình được mệnh danh là 'vịnh Hạ Long trên cạn', nơi giao hòa tuyệt vời giữa núi non hùng vĩ và sông nước nên thơ. Với các điểm đến nổi bật như Tràng An, Tam Cốc – Bích Động, Vườn quốc gia Cúc Phương và khu bảo tồn đất ngập nước Vân Long, nơi đây không chỉ làm say lòng du khách mà còn là hình mẫu cho phát triển du lịch xanh bền vững. Tham quan Ninh Bình, du khách có thể đi thuyền xuyên qua các hang động đá vôi, khám phá hệ sinh thái rừng nguyên sinh, ngắm nhìn đàn voọc mông trắng quý hiếm và tận hưởng không khí trong lành, thanh tịnh. Ninh Bình còn gắn bó mật thiết với văn hóa và lịch sử Việt Nam, từ cố đô Hoa Lư đến các ngôi chùa cổ như Bái Đính. Đặc biệt, các homestay sinh thái tại Tràng An hay Gia Viễn không chỉ mang lại trải nghiệm gần gũi với thiên nhiên mà còn giúp người dân địa phương nâng cao sinh kế một cách bền vững. Du lịch xanh tại Ninh Bình là sự kết hợp hài hòa giữa bảo tồn, văn hóa và phát triển cộng đồng."]
  },
thaibinh: {
  name: ["Thái Bình"],
  face: [],
  images: [ ],
  locations: ["Thái Bình – vùng đất trù phú của đồng bằng châu thổ sông Hồng – mang vẻ đẹp mộc mạc, thanh bình và rất đỗi gần gũi. Không có núi cao hay thác nước hùng vĩ, Thái Bình lại thu hút du khách bởi những cánh đồng lúa bát ngát, hệ thống kênh rạch đan xen và không gian làng quê đậm chất Bắc Bộ. Nơi đây đang từng bước phát triển du lịch xanh với mô hình du lịch cộng đồng tại các làng nghề truyền thống như đúc đồng, dệt chiếu, làm bánh cáy; cùng với những tour trải nghiệm nông nghiệp sinh thái. Du khách có thể cùng người dân đi cấy lúa, thu hoạch rau sạch, chèo thuyền trên sông hoặc đạp xe qua những con đường làng thơ mộng. Ngoài ra, khu du lịch sinh thái Cồn Đen – nơi giao thoa giữa rừng ngập mặn và biển – là điểm nhấn tuyệt vời cho các hoạt động bảo vệ môi trường và trải nghiệm tự nhiên. Du lịch Thái Bình đang hướng đến sự bền vững, nơi du khách không chỉ khám phá mà còn góp phần gìn giữ cảnh quan và văn hóa vùng quê."]
  },
thanhhoa: {
  name: ["Thanh Hóa"],
  face: [],
  images: [ ],
  locations: ["Thanh Hóa không chỉ nổi bật với những di tích lịch sử lâu đời như Thành nhà Hồ, mà còn là điểm đến hấp dẫn với cảnh quan thiên nhiên đa dạng và nhiều tiềm năng cho du lịch xanh. Biển Sầm Sơn, Hải Tiến, và đặc biệt là khu bảo tồn Pù Luông là những địa danh đang dần khẳng định tên tuổi trên bản đồ du lịch sinh thái Việt Nam. Pù Luông nổi bật với những thửa ruộng bậc thang uốn lượn, rừng rậm nguyên sinh và các bản làng của người Thái, Mường – nơi bạn có thể nghỉ dưỡng trong các homestay thân thiện với môi trường, trekking qua rừng già, tắm suối và thưởng thức ẩm thực truyền thống. Thanh Hóa cũng có nhiều chương trình du lịch cộng đồng, nơi du khách được sống như người địa phương, góp phần vào kinh tế xanh. Với hướng phát triển du lịch bền vững, tỉnh đang từng bước khai thác tiềm năng một cách hài hòa giữa bảo tồn thiên nhiên và nâng cao chất lượng sống của cư dân địa phương."]
  },
nghean: {
  name: ["Nghệ An"],
  face: [],
  images: [ ],
  locations: ["Là tỉnh có diện tích lớn nhất Việt Nam, Nghệ An sở hữu tài nguyên du lịch phong phú, lý tưởng để phát triển du lịch xanh. Vườn quốc gia Pù Mát là một điểm nhấn nổi bật với hệ động thực vật đa dạng, những cánh rừng nguyên sinh và dòng thác hùng vĩ như Khe Kèm. Biển Cửa Lò, đảo Hòn Ngư, và các bãi biển trải dài vẫn giữ được nét nguyên sơ, sạch sẽ, rất thích hợp cho nghỉ dưỡng sinh thái. Du khách có thể đến các bản làng người Thái, H'Mông ở vùng cao như Con Cuông, Tương Dương để trải nghiệm cuộc sống gần gũi với thiên nhiên, học cách làm thổ cẩm, thưởng thức các món ăn dân tộc và tham gia vào sinh hoạt văn hóa truyền thống. Nghệ An đang ngày càng chú trọng phát triển du lịch gắn liền với bảo tồn, đảm bảo rằng mỗi bước chân của du khách đều góp phần bảo vệ môi trường và phát triển cộng đồng địa phương."]
  },
hatinh: {
  name: ["Hà Tĩnh"],
  face: [],
  images: [ ],
  locations: ["Hà Tĩnh không ồn ào, náo nhiệt nhưng lại chinh phục du khách bằng sự thanh bình, gần gũi và những nét đẹp thuần khiết của thiên nhiên và con người. Từ bãi biển Thiên Cầm thơ mộng, rừng phòng hộ ven biển Cẩm Xuyên đến Khu bảo tồn thiên nhiên Kẻ Gỗ – một kho tàng sinh học phong phú, nơi đây là điểm đến tuyệt vời cho du lịch sinh thái. Hà Tĩnh còn là nơi lưu giữ nhiều giá trị văn hóa truyền thống như các làng nghề, lễ hội dân gian và văn hóa ẩm thực đậm chất Bắc Trung Bộ. Du khách đến đây có thể hòa mình vào cuộc sống nông thôn, trải nghiệm làm vườn, hái chè, thăm các khu rừng tự nhiên và tìm hiểu những câu chuyện lịch sử gắn liền với các danh nhân văn hóa. Phát triển du lịch xanh, Hà Tĩnh đang hướng đến một mô hình bền vững, giúp bảo tồn môi trường tự nhiên đồng thời tạo sinh kế cho cộng đồng địa phương."]
  },
quangbinh: {
  name: ["Quảng Bình"],
  face: [],
  images: [ ],
  locations: ["Quảng Bình là điểm đến lý tưởng cho những ai đam mê khám phá thiên nhiên và yêu thích du lịch xanh. Với hệ thống hang động kỳ vĩ bậc nhất thế giới như Sơn Đoòng, Hang Én, Hang Tú Làn, nơi đây mang lại trải nghiệm khám phá độc đáo giữa rừng rậm nguyên sinh. Không chỉ có hệ sinh thái rừng – núi đa dạng trong Vườn quốc gia Phong Nha – Kẻ Bàng (Di sản Thiên nhiên Thế giới), Quảng Bình còn sở hữu những dòng suối trong lành, thác nước hùng vĩ và bãi biển hoang sơ như Nhật Lệ, Bảo Ninh. Du khách có thể tham gia các hoạt động như trekking, cắm trại sinh thái, chèo kayak, và tham quan làng nghề truyền thống, tìm hiểu văn hóa địa phương một cách bền vững. Với mục tiêu bảo tồn tài nguyên và phát triển du lịch gắn với môi trường, Quảng Bình đang từng bước trở thành biểu tượng của du lịch sinh thái tại miền Trung Việt Nam."]
  },
quangtri: {
  name: ["Quảng Trị"],
  face: [],
  images: [ ],
  locations: ["Quảng Trị – mảnh đất mang đậm dấu ấn lịch sử – đang từng bước khai thác tiềm năng du lịch xanh thông qua hệ sinh thái tự nhiên phong phú và văn hóa đặc sắc. Với đường bờ biển dài và nguyên sơ, các bãi biển như Cửa Tùng, Cửa Việt đang được phát triển theo hướng sinh thái, hạn chế bê tông hóa, tăng cường không gian cây xanh. Vùng núi phía tây với các điểm như Khe Sanh, thác Tà Puồng, khu bảo tồn thiên nhiên Bắc Hướng Hóa là nơi lý tưởng cho các hoạt động khám phá rừng rậm, tắm suối, và tìm hiểu đời sống người Vân Kiều, Pa Cô. Các tour du lịch cộng đồng tại huyện Hướng Hóa đang thu hút khách nước ngoài với trải nghiệm trồng cây, hái cà phê và tham gia các nghi lễ dân tộc. Quảng Trị cũng nỗ lực bảo vệ hệ sinh thái ven biển bằng cách khuyến khích mô hình homestay xanh, sử dụng vật liệu thân thiện môi trường. Từ một vùng đất từng mang nhiều dấu tích chiến tranh, Quảng Trị đang chuyển mình trở thành điểm đến du lịch xanh đầy hứa hẹn ở miền Trung."]
  },
thuathienhue: {
  name: ["Thừa Thiên Huế"],
  face: [],
  images: [ ],
  locations: ["Thừa Thiên Huế – vùng đất cố đô – đang vươn mình mạnh mẽ theo hướng phát triển du lịch bền vững và thân thiện với môi trường. Bên cạnh những di tích hoàng cung, lăng tẩm triều Nguyễn, Huế còn có rất nhiều điểm đến sinh thái hấp dẫn như đầm Lập An, vịnh Lăng Cô, phá Tam Giang, và rừng ngập mặn Rú Chá – nơi du khách có thể đạp xe, chèo SUP hoặc tham gia tour bảo tồn môi trường. Khu vực đồi núi phía tây như A Lưới cũng là điểm đến du lịch xanh nổi bật, nơi có khí hậu mát mẻ, thác nước tự nhiên và văn hóa truyền thống người Tà Ôi, Pa Cô được gìn giữ. Tỉnh cũng đang triển khai các mô hình du lịch cộng đồng, nghỉ dưỡng sinh thái và nông nghiệp hữu cơ tại vùng ven thành phố. Những hoạt động như thu gom rác, phân loại rác tại nguồn và khuyến khích sử dụng xe đạp, xe điện tại các điểm du lịch là minh chứng rõ ràng cho sự chuyển mình của Huế theo hướng du lịch xanh – du lịch của tương lai."]
  },
quangnam: {
  name: ["Quảng Nam"],
  face: [],
  images: [ ],
  locations: ["Quảng Nam không chỉ nổi tiếng với phố cổ Hội An di sản, mà còn là một điểm sáng trong phát triển du lịch xanh kết hợp bảo tồn di sản và sinh thái tự nhiên. Những làng quê yên bình như làng rau Trà Quế, làng gốm Thanh Hà, Cẩm Thanh với rừng dừa nước Bảy Mẫu đã và đang trở thành điểm đến xanh thân thiện với môi trường, nơi du khách có thể trải nghiệm trồng rau, chèo thuyền thúng, làm gốm và thưởng thức ẩm thực bản địa. Ở phía tây, Quảng Nam còn có các khu du lịch sinh thái như thác Grăng, suối nước nóng Tây Viên, và đặc biệt là khu bảo tồn thiên nhiên Sông Thanh, nơi du khách có thể trekking trong rừng nguyên sinh, khám phá hệ sinh thái đa dạng. Quảng Nam cũng đang triển khai mô hình du lịch cộng đồng gắn với người Cơ Tu và các chương trình giảm thiểu rác thải nhựa tại các điểm tham quan. Với sự kết hợp hài hòa giữa thiên nhiên, di sản và văn hóa bản địa, Quảng Nam xứng đáng là một điểm đến du lịch xanh hàng đầu miền Trung."]
  },
kontum: {
  name: ["Kon Tum"],
  face: [],
  images: [ ],
  locations: ["Nằm ở phía bắc Tây Nguyên, Kon Tum sở hữu vẻ đẹp nguyên sơ, yên bình với những cánh rừng bạt ngàn, sông suối trong lành và bản sắc văn hóa dân tộc đậm đà. Khu bảo tồn thiên nhiên Ngọc Linh, nơi có đỉnh núi cao nhất miền Trung, là địa điểm lý tưởng cho trekking và khám phá hệ động thực vật quý hiếm. Sông Đăk Bla uốn lượn qua trung tâm thành phố cũng là điểm nhấn xanh giữa lòng đô thị, nơi du khách có thể chèo thuyền kayak, ngắm hoàng hôn hay tham gia dọn rác sông trong các chương trình du lịch có trách nhiệm. Về văn hóa, Kon Tum nổi bật với nhà rông Kon Klor, các buôn làng Ba Na truyền thống, và các mô hình du lịch cộng đồng ở huyện Kon Plông – nơi phát triển nông nghiệp hữu cơ và dịch vụ lưu trú thân thiện với môi trường. Với khí hậu mát mẻ, tài nguyên sinh thái phong phú và cộng đồng dân cư thân thiện, Kon Tum đang là điểm đến tiêu biểu của du lịch xanh bền vững ở Tây Nguyên."]
  },
gialai: {
  name: ["Gia Lai"],
  face: [],
  images: [ ],
  locations: ["Gia Lai – mảnh đất đại ngàn với khí hậu mát mẻ quanh năm – là một điểm đến lý tưởng cho du khách yêu thích du lịch xanh giữa núi rừng Tây Nguyên. Nổi bật nhất là Biển Hồ (hồ T’Nưng) – một hồ nước tự nhiên tuyệt đẹp nằm giữa cao nguyên Pleiku, mang vẻ đẹp thanh bình và không khí trong lành. Du khách có thể đi bộ dọc các con đường rợp bóng thông, hít thở không khí sạch và tham quan các vườn cà phê hữu cơ trải dài trên đồi. Thác Phú Cường, rừng thông Hà Tam, và núi lửa Chư Đăng Ya cũng là những điểm du lịch sinh thái được yêu thích. Ngoài ra, Gia Lai còn có nhiều buôn làng người Jrai và Bahnar, nơi du khách có thể tham gia trải nghiệm làm gốm, dệt thổ cẩm, và tìm hiểu tín ngưỡng nhà rông đặc trưng. Chính quyền địa phương đang khuyến khích phát triển mô hình du lịch cộng đồng và du lịch nông nghiệp hữu cơ, vừa tạo sinh kế cho người dân, vừa bảo vệ tài nguyên thiên nhiên. Gia Lai vì thế là lựa chọn tuyệt vời cho hành trình khám phá bền vững và gần gũi với tự nhiên."]
  },
binhdinh: {
  name: ["Bình Định"],
  face: [],
  images: [ ],
  locations: ["Bình Định – vùng đất võ và thi ca – đang ngày càng trở thành điểm đến hấp dẫn với định hướng phát triển du lịch xanh gắn với bảo tồn văn hóa và thiên nhiên. Với đường bờ biển dài cùng nhiều bãi biển nguyên sơ như Kỳ Co, Eo Gió, Hòn Khô, tỉnh đã triển khai nhiều hoạt động du lịch sinh thái biển như lặn ngắm san hô, tham quan đảo bằng thuyền gỗ truyền thống và tổ chức chương trình bảo vệ môi trường biển cho du khách. Không chỉ có biển, Bình Định còn nổi bật với khu sinh thái Trung Lương, rừng dừa Tam Quan, và hệ thống tháp Chăm cổ mang giá trị lịch sử gắn liền với thiên nhiên xung quanh. Các làng nghề như làm nón ngựa, rượu Bàu Đá, hay đan lát ở An Nhơn cũng đang phát triển mô hình du lịch cộng đồng, giúp khách tham quan có thể trải nghiệm đời sống bản địa. Việc bảo tồn các không gian xanh kết hợp khai thác du lịch một cách bền vững đang biến Bình Định thành điểm đến vừa thư giãn, vừa giàu giá trị sinh thái và văn hóa."]
  },
phuyen: {
  name: ["Phú Yên"],
  face: [],
  images: [ ],
  locations: ["Phú Yên – miền đất yên bình ven biển Nam Trung Bộ – là điểm đến đầy tiềm năng cho du lịch xanh nhờ vào thiên nhiên đa dạng và chưa bị khai thác quá mức. Với bờ biển dài, các bãi biển hoang sơ như Bãi Môn, Bãi Xép, Vịnh Xuân Đài hay Gành Đá Đĩa đều mang vẻ đẹp tự nhiên, ít chịu tác động của đô thị hóa. Du khách đến Phú Yên có thể lặn ngắm san hô, đi thuyền kayak, hay đơn giản là thư giãn bên những làng chài thanh bình. Ngoài ra, vùng núi phía tây tỉnh với hồ thủy điện Sông Hinh, suối nước nóng Phú Sen, và các cánh rừng nguyên sinh cũng là nơi phù hợp để phát triển du lịch sinh thái rừng – núi. Các mô hình du lịch cộng đồng kết hợp trải nghiệm nghề truyền thống, nông trại hữu cơ, và thưởng thức ẩm thực địa phương đang ngày càng phổ biến, mang đến góc nhìn mới về du lịch bền vững. Phú Yên không ồn ào, không xô bồ, mà nhẹ nhàng và xanh mát – là điểm dừng chân tuyệt vời cho những ai yêu thiên nhiên và tìm kiếm sự thư giãn thực sự."]
  },
daklak: {
  name: ["Đắk Lắk"],
  face: [],
  images: [ ],
  locations: ["Là trái tim của vùng Tây Nguyên, Đắk Lắk nổi bật với cảnh quan rừng núi hùng vĩ, thác nước hoang sơ và bản sắc văn hóa dân tộc đặc sắc, rất phù hợp để phát triển du lịch xanh. Điểm nhấn đặc biệt là vườn quốc gia Yok Đôn, nơi du khách có thể trải nghiệm tour “du lịch không cưỡi voi” – hình thức thân thiện với động vật, đi bộ cùng voi qua rừng khộp, tìm hiểu về hệ sinh thái và công tác bảo tồn. Các thác Dray Nur, Dray Sap, hay hồ Lắk cũng là những địa điểm thu hút khách thích khám phá thiên nhiên nguyên sơ, chèo thuyền, cắm trại và sống hòa mình giữa rừng núi. Ngoài ra, du lịch cộng đồng tại các buôn làng Ê Đê, M’nông mang đến trải nghiệm độc đáo về văn hóa bản địa gắn với lối sống gần gũi thiên nhiên. Đắk Lắk cũng đang thúc đẩy phát triển nông nghiệp sạch và mô hình du lịch nông trại như trồng cà phê hữu cơ, giúp du khách hiểu hơn về sản phẩm đặc trưng của vùng. Với sự kết hợp giữa thiên nhiên hùng vĩ và giá trị văn hóa bền vững, Đắk Lắk là lựa chọn lý tưởng cho hành trình du lịch xanh có chiều sâu."]
  },
khanhhoa: {
  name: ["Khánh Hòa"],
  face: [],
  images: [ ],
  locations: ["Khánh Hòa không chỉ nổi tiếng với vịnh biển Nha Trang xinh đẹp mà còn là điểm đến tiêu biểu cho du lịch xanh ven biển kết hợp sinh thái rừng – biển. Vịnh Nha Trang là một trong những vịnh đẹp nhất thế giới, với làn nước trong xanh, hệ sinh thái san hô phong phú và nhiều đảo hoang sơ như Hòn Mun, Hòn Tằm, Hòn Miễu... Đây là khu vực được quy hoạch làm khu bảo tồn biển đầu tiên của Việt Nam, phù hợp cho du khách yêu thích lặn biển, khám phá thiên nhiên dưới nước và tham gia các hoạt động bảo vệ sinh vật biển. Ngoài ra, Khánh Hòa còn có những điểm đến sinh thái khác như Suối Ba Hồ, rừng nguyên sinh Hòn Bà, hay vùng nông nghiệp hữu cơ Cam Lâm đang phát triển mô hình du lịch cộng đồng và giáo dục môi trường. Tỉnh cũng chú trọng triển khai các khu nghỉ dưỡng xanh, khuyến khích sử dụng năng lượng tái tạo và hạn chế nhựa dùng một lần. Với định hướng phát triển bền vững, Khánh Hòa không chỉ là nơi để nghỉ dưỡng mà còn là điểm đến trải nghiệm gắn liền với trách nhiệm môi trường."]
  },
lamdong: {
  name: ["Lâm Đồng"],
  face: [],
  images: [ ],
  locations: ["Lâm Đồng – thủ phủ của vùng cao nguyên Nam Tây Nguyên – từ lâu đã trở thành điểm đến lý tưởng cho du lịch xanh và nghỉ dưỡng sinh thái. Trung tâm của tỉnh là Đà Lạt, thành phố ngàn hoa với khí hậu ôn hòa, rừng thông xanh ngút ngàn và hồ nước trong vắt, rất phù hợp cho các hoạt động như đạp xe, đi bộ đường dài, cắm trại, chèo thuyền hay thiền định giữa thiên nhiên. Ngoài ra, các khu vực ngoại thành như Lạc Dương, Đơn Dương, Đạ Tẻh đang phát triển mạnh mô hình nông trại hữu cơ, farmstay, homestay cộng đồng, nơi du khách có thể tự tay trồng rau, thu hoạch cà phê, thưởng thức bữa ăn “từ nông trại đến bàn ăn”. Tỉnh cũng chú trọng phát triển năng lượng tái tạo, giảm sử dụng nhựa, và khuyến khích du khách tham gia các hoạt động giữ gìn thiên nhiên như trồng cây, làm vườn. Với lợi thế về thiên nhiên và cam kết phát triển bền vững, Lâm Đồng đang là trung tâm của du lịch xanh tại miền Trung – Tây Nguyên Việt Nam."]
  },
ninhthuan: {
  name: ["Ninh Thuận"],
  face: [],
  images: [ ],
  locations: ["Ninh Thuận là tỉnh ven biển Nam Trung Bộ, nổi tiếng với vẻ đẹp hoang sơ, khô cằn nhưng lại đầy sức sống – là nơi lý tưởng để phát triển du lịch xanh mang màu sắc đặc trưng. Với đường bờ biển dài và sạch, các bãi biển như Ninh Chữ, Vĩnh Hy, Bãi Hòi trở thành điểm đến thân thiện với môi trường, chưa bị khai thác quá mức. Đặc biệt, vườn quốc gia Núi Chúa, được UNESCO công nhận là Khu dự trữ sinh quyển thế giới, là nơi hội tụ cả rừng khô hạn, san hô biển, và hệ sinh thái rừng đặc biệt quý hiếm. Du khách đến đây có thể trekking, khám phá thiên nhiên, học hỏi về bảo tồn sinh học và trải nghiệm hoạt động sinh thái biển. Ngoài ra, các làng nghề truyền thống của người Chăm, trang trại nho, táo và mô hình nông nghiệp sạch cũng là điểm nhấn đặc sắc, gắn với văn hóa địa phương và du lịch cộng đồng. Với chiến lược phát triển du lịch gắn bảo tồn, Ninh Thuận là điểm đến hấp dẫn cho hành trình khám phá thiên nhiên nguyên sơ."]
  },
tayninh: {
  name: ["Tây Ninh"],
  face: [],
  images: [ ],
  locations: ["Tây Ninh là một trong những điểm đến nổi bật của du lịch xanh miền Đông Nam Bộ, kết hợp giữa cảnh quan thiên nhiên kỳ thú và bản sắc văn hóa đặc trưng. Tâm điểm của du lịch sinh thái tại đây là Núi Bà Đen, được mệnh danh là “nóc nhà Nam Bộ” với hệ thống cáp treo hiện đại nhưng vẫn giữ nguyên cảnh quan rừng núi xanh mát, phù hợp cho các hoạt động trekking, cắm trại và khám phá thiên nhiên. Ngoài ra, hồ Dầu Tiếng với diện tích mặt nước rộng lớn, trong lành cũng là nơi lý tưởng để chèo SUP, cắm trại ven hồ và trải nghiệm cuộc sống gần gũi với thiên nhiên. Tây Ninh còn nổi bật với các mô hình nông nghiệp công nghệ cao, du lịch cộng đồng tại các xã nông thôn, nơi du khách có thể tham gia thu hoạch rau củ, tìm hiểu quy trình trồng trọt sạch và thưởng thức các sản phẩm địa phương hữu cơ. Với định hướng phát triển du lịch không rác thải và thân thiện với môi trường, Tây Ninh đang trở thành điểm đến lý tưởng cho những ai yêu thích khám phá thiên nhiên một cách bền vững."]
  },
dongnai: {
  name: [],
  face: [],
  images: [ ],
  locations: ["Là tỉnh có diện tích rừng lớn và sở hữu hệ sinh thái đa dạng bậc nhất miền Nam, Đồng Nai là một trong những điểm sáng về phát triển du lịch sinh thái – du lịch xanh ở Việt Nam. Vườn quốc gia Cát Tiên, di sản thiên nhiên ASEAN, là điểm đến nổi bật với rừng già, suối đá, các tuyến trekking xuyên rừng và cơ hội chiêm ngưỡng động vật hoang dã như vượn, nai, chim quý hiếm. Nơi đây không chỉ là điểm đến du lịch mà còn là trung tâm nghiên cứu và giáo dục bảo tồn thiên nhiên. Ngoài ra, Đồng Nai còn có khu du lịch Bửu Long, hồ Trị An, thác Giang Điền, hay khu bảo tồn thiên nhiên Tà Lài – nơi du khách có thể trải nghiệm văn hóa của người Mạ, người Chơ-ro kết hợp nghỉ dưỡng sinh thái. Tỉnh đang phát triển mạnh các mô hình nông trại xanh, du lịch cộng đồng, homestay thân thiện môi trường, thúc đẩy du lịch không rác thải và khuyến khích người dân cùng tham gia bảo vệ rừng. Đồng Nai là lựa chọn lý tưởng cho du khách muốn hòa mình vào thiên nhiên và tìm kiếm một kỳ nghỉ trọn vẹn về cả thể chất lẫn tinh thần."]
  },
binhthuan: {
  name: ["Bình Thuận"],
  face: [],
  images: [ ],
  locations: ["Bình Thuận là tỉnh ven biển miền Trung Nam Bộ nổi bật với cảnh quan thiên nhiên hoang sơ, những bãi biển trải dài và đồi cát đặc trưng. Ngoài những điểm đến nổi tiếng như Mũi Né, Hòn Rơm, Bãi đá Cổ Thạch, Bình Thuận còn đang phát triển mạnh mẽ các mô hình du lịch xanh, nghỉ dưỡng thân thiện với môi trường. Một trong những điểm tiêu biểu là khu bảo tồn thiên nhiên Tà Cú, nơi có rừng nguyên sinh, hệ động thực vật phong phú và không khí mát mẻ quanh năm. Du khách có thể leo núi, khám phá hang động và thăm chùa Linh Sơn Trường Thọ nằm trên đỉnh. Ngoài ra, tỉnh còn có các trang trại nho, thanh long hữu cơ, kết hợp tham quan và trải nghiệm nông nghiệp xanh. Bình Thuận đang khuyến khích phát triển các khu nghỉ dưỡng sử dụng năng lượng mặt trời, xử lý nước thải và rác thải theo hướng sinh thái. Đây là một trong những địa phương đi đầu trong việc kết hợp bảo tồn thiên nhiên với phát triển du lịch, đem đến cho du khách những trải nghiệm an lành, gần gũi và bền vững."]
  },
longan: {
  name: ["Long An"],
  face: [],
  images: [ ],
  locations: ["Long An là tỉnh cửa ngõ kết nối miền Đông và miền Tây Nam Bộ, sở hữu hệ sinh thái đa dạng với kênh rạch, đồng ruộng và rừng ngập mặn. Nơi đây đang nổi lên như một điểm đến du lịch xanh hấp dẫn, đặc biệt với khu bảo tồn đất ngập nước Láng Sen – được mệnh danh là “Đồng Tháp Mười thu nhỏ”. Đây là nơi sinh sống của hàng trăm loài chim nước, động thực vật quý hiếm, rất thích hợp cho các hoạt động trải nghiệm thiên nhiên như quan sát chim, chụp ảnh cảnh quan, hay đi xuồng len lỏi giữa rừng tràm và sen. Long An còn có các làng nghề truyền thống như làng chiếu, làng trống Bình An, nơi du khách có thể trải nghiệm văn hóa địa phương một cách gần gũi. Các mô hình homestay sinh thái và nông trại hữu cơ cũng được chú trọng phát triển, góp phần mang đến trải nghiệm nghỉ dưỡng thân thiện với môi trường. Với định hướng du lịch không rác thải và bảo vệ nguồn nước, Long An đang trở thành điểm đến lý tưởng cho những ai yêu thích du lịch chậm, gắn kết với thiên nhiên và cộng đồng."]
  },
bariavungtau: {
  name: ["Bà Rịa – Vũng Tàu"],
  face: [],
  images: [ ],
  locations: ["Bà Rịa – Vũng Tàu không chỉ nổi tiếng với những bãi biển đẹp mà còn là điểm đến lý tưởng cho du lịch xanh nhờ vào sự kết hợp hài hòa giữa biển, rừng và núi. Bên cạnh các điểm nghỉ dưỡng quen thuộc như bãi Sau, bãi Trước, tỉnh còn sở hữu nhiều khu sinh thái xanh mát như rừng nguyên sinh Bình Châu – Phước Bửu, nơi du khách có thể cắm trại, đi bộ xuyên rừng hoặc thư giãn trong không gian thiên nhiên tĩnh lặng. Khu suối nước nóng Bình Châu cũng là điểm đến thư giãn thân thiện với môi trường, thu hút du khách yêu thích nghỉ dưỡng tự nhiên. Ngoài ra, Bà Rịa – Vũng Tàu còn có nhiều mô hình nông trại xanh, homestay ven biển, làng chài sinh thái nơi du khách có thể trải nghiệm cuộc sống người dân địa phương. Tỉnh đang nỗ lực phát triển hạ tầng du lịch bền vững, khuyến khích du lịch không rác thải, sử dụng năng lượng tái tạo và bảo vệ hệ sinh thái biển. Đây là lựa chọn tuyệt vời cho những ai muốn tìm kiếm kỳ nghỉ xanh và cân bằng."]
  },
angiang: {
  name: ["An Giang"],
  face: [],
  images: [ ],
  locations: ["An Giang nằm ở vùng biên giới Tây Nam, là nơi giao thoa giữa núi, đồng bằng và sông nước, rất giàu tiềm năng phát triển du lịch xanh. Một trong những biểu tượng du lịch sinh thái nổi bật của tỉnh là rừng tràm Trà Sư – khu rừng ngập nước nguyên sinh với hệ sinh thái đa dạng, là nơi trú ngụ của hàng trăm loài chim, cá và động thực vật quý hiếm. Đi xuồng máy xuyên qua rừng trong mùa nước nổi là trải nghiệm đặc biệt, giúp du khách cảm nhận trọn vẹn vẻ đẹp hoang sơ, thanh bình. Ngoài ra, núi Cấm, núi Sam, kênh Vĩnh Tế, hay các làng Chăm ven sông cũng là những điểm đến thú vị cho du khách yêu thiên nhiên và muốn khám phá văn hóa bản địa. An Giang còn phát triển nhiều mô hình du lịch cộng đồng, homestay sinh thái gắn với sản xuất nông nghiệp sạch. Với định hướng bền vững, tỉnh chú trọng giảm thiểu rác thải, bảo vệ tài nguyên nước và tạo sinh kế cho người dân. An Giang đang dần trở thành biểu tượng du lịch sinh thái kết hợp văn hóa độc đáo ở miền Tây Nam Bộ."]
  },
dongthap: {
  name: ["Đồng Tháp"],
  face: [],
  images: [ ],
  locations: ["Đồng Tháp là một trong những địa phương đi đầu trong phát triển du lịch xanh và bền vững tại đồng bằng sông Cửu Long. Tỉnh nổi tiếng với những cánh đồng sen bát ngát, đặc biệt là Khu du lịch Đồng sen Tháp Mười, nơi du khách có thể chèo xuồng ngắm sen, thưởng thức ẩm thực dân dã và tận hưởng hương thơm thanh khiết của loài hoa đặc trưng miền Tây. Vườn quốc gia Tràm Chim là một điểm đến nổi bật khác, được công nhận là khu Ramsar của thế giới, với hàng trăm loài chim nước quý hiếm, trong đó có sếu đầu đỏ. Du lịch sinh thái tại đây gắn liền với bảo tồn thiên nhiên, giáo dục môi trường và hoạt động cộng đồng. Ngoài ra, các khu du lịch miệt vườn, làng hoa Sa Đéc, làng nghề truyền thống… cũng mang đến nhiều trải nghiệm phong phú. Đồng Tháp đang hướng đến mô hình du lịch không rác thải, sử dụng năng lượng tái tạo và nâng cao ý thức du khách trong việc bảo vệ môi trường, xứng đáng là điểm đến lý tưởng cho hành trình khám phá du lịch xanh."]
  },
tiengiang: {
  name: [],
  face: [],
  images: [ ],
  locations: ["Tiền Giang nằm dọc theo sông Tiền, là cửa ngõ vào miền Tây sông nước, nơi hội tụ đầy đủ yếu tố để phát triển du lịch xanh kết hợp nghỉ dưỡng, khám phá và trải nghiệm văn hóa. Du khách đến Tiền Giang không thể bỏ qua cù lao Thới Sơn – điểm du lịch sinh thái nổi tiếng với những con rạch nhỏ, vườn trái cây xanh mát, đờn ca tài tử và trải nghiệm chèo xuồng ba lá. Ngoài ra, vườn quốc gia Tràm Chim Tân Phước là nơi tuyệt vời để quan sát chim di cư, khám phá hệ sinh thái rừng ngập nước và tận hưởng bầu không khí yên bình. Tiền Giang cũng phát triển các khu du lịch cộng đồng, nơi du khách được sống cùng người dân địa phương, học cách làm bánh truyền thống, chăm sóc cây trái và cảm nhận lối sống chan hòa với thiên nhiên. Với định hướng bảo tồn và phát huy thế mạnh nông nghiệp, sinh thái, Tiền Giang đang trở thành một trong những điểm đến tiêu biểu cho du lịch xanh, thân thiện và bền vững tại đồng bằng sông Cửu Long."]
  },
kiengiang: {
  name: [],
  face: [],
  images: [ ],
  locations: ["Kiên Giang là một trong những tỉnh có tiềm năng du lịch xanh lớn nhất tại miền Tây Nam Bộ, sở hữu cảnh quan đa dạng từ biển đảo, rừng nguyên sinh đến hệ sinh thái ngập mặn. Nơi đây nổi bật với quần đảo Nam Du, đảo Hải Tặc và đặc biệt là Phú Quốc – nơi có rừng quốc gia Phú Quốc với hệ động thực vật phong phú, được UNESCO công nhận là khu dự trữ sinh quyển thế giới. Du khách có thể trekking xuyên rừng, tắm suối, lặn biển ngắm san hô hoặc tham gia các hoạt động bảo tồn biển. Ngoài ra, vùng đất liền Kiên Giang cũng có những điểm du lịch sinh thái hấp dẫn như rừng tràm U Minh Thượng, hồ nước ngọt Hòn Đất, hay các làng nghề làm nước mắm truyền thống. Tỉnh đang chú trọng phát triển mô hình du lịch cộng đồng và sinh thái gắn với bảo vệ môi trường, khuyến khích sử dụng năng lượng tái tạo, vật liệu xanh và giảm thiểu rác thải nhựa. Kiên Giang không chỉ mang đến vẻ đẹp hoang sơ mà còn là hình mẫu trong phát triển du lịch bền vững tại Việt Nam."]
  },
vinhlong: {
  name: ["Vĩnh Long"],
  face: [],
  images: [ ],
  locations: ["Vĩnh Long nằm giữa sông Tiền và sông Hậu, là trái tim của vùng đồng bằng sông Cửu Long, nơi nổi bật với cảnh quan thiên nhiên hiền hòa, hệ thống kênh rạch chằng chịt và những miệt vườn trù phú. Đây là điểm đến lý tưởng cho những ai muốn trải nghiệm du lịch xanh và nghỉ dưỡng trong không gian sinh thái lành mạnh. Du khách đến Vĩnh Long có thể ghé thăm cù lao An Bình, một địa điểm nổi tiếng với các khu homestay ven sông, vườn cây ăn trái theo mùa và hoạt động đi xuồng xuyên kênh rạch. Ngoài ra, các làng nghề truyền thống như làm gốm, làm cốm hay chế biến trái cây sấy cũng thu hút du khách yêu thích trải nghiệm văn hóa bản địa. Vĩnh Long còn phát triển du lịch cộng đồng bền vững, khuyến khích người dân sử dụng vật liệu thân thiện môi trường và giữ gìn cảnh quan tự nhiên. Với sự yên bình, gần gũi và những trải nghiệm chân thật, Vĩnh Long đang dần trở thành một điểm đến hấp dẫn cho hành trình khám phá du lịch xanh ở miền Tây."]
  },
bentre: {
  name: ["Bến Tre"],
  face: [],
  images: [ ],
  locations: ["Bến Tre, được mệnh danh là “xứ Dừa”, là điểm đến hàng đầu cho du lịch xanh ở miền Tây Nam Bộ. Với hệ thống sông ngòi chằng chịt và hàng dừa xanh mát trải dài, Bến Tre mang lại cảm giác thư thái và gần gũi thiên nhiên cho du khách ngay từ khi đặt chân đến. Các tour du lịch sinh thái tại đây thường gắn với các trải nghiệm như đi thuyền dọc sông Hàm Luông, thăm các vườn trái cây trĩu quả, và nghỉ dưỡng tại các khu homestay thân thiện với môi trường. Một số địa điểm nổi bật như cồn Phụng, cồn Quy, hay Làng du lịch sinh thái Làng Bè là lựa chọn lý tưởng cho du khách muốn hoà mình vào cuộc sống sông nước và khám phá nghề làm kẹo dừa, đan lát thủ công. Ngoài ra, Bến Tre còn chú trọng phát triển du lịch cộng đồng, nơi người dân bản địa trực tiếp hướng dẫn và phục vụ, giúp tăng thu nhập và ý thức bảo vệ môi trường. Với sự kết hợp giữa thiên nhiên tươi đẹp và hoạt động du lịch có trách nhiệm, Bến Tre là điểm đến không thể bỏ qua cho hành trình du lịch xanh tại Việt Nam."]
  },
travinh: {
  name: ["Trà Vinh"],
  face: [],
  images: [ ],
  locations: ["Trà Vinh nổi bật với vẻ đẹp thanh bình của miền Tây Nam Bộ cùng với sự đậm đà bản sắc văn hóa Khmer. Đây là một trong những tỉnh phát triển mạnh mô hình du lịch sinh thái và du lịch cộng đồng gắn với bảo tồn thiên nhiên và di sản văn hóa. Các khu sinh thái như rừng ngập mặn Duyên Hải, ao Bà Om hay cù lao Tân Quy là những điểm đến hấp dẫn cho những ai yêu thiên nhiên, muốn trải nghiệm không gian xanh trong lành. Du khách có thể đạp xe xuyên rừng, chèo xuồng khám phá sông nước, hay nghỉ dưỡng tại các homestay sinh thái gần các làng nghề. Trà Vinh còn có hơn 140 ngôi chùa Khmer rải khắp tỉnh, mang đậm kiến trúc đặc sắc và tạo nên sự yên bình trong không gian xanh rợp bóng cây. Các lễ hội truyền thống như Ok Om Bok, Chôl Chnăm Thmây được tổ chức thường niên, góp phần thu hút khách du lịch. Trà Vinh chính là điểm đến lý tưởng cho những ai tìm kiếm sự thư giãn, kết hợp giữa trải nghiệm văn hóa và nghỉ dưỡng sinh thái bền vững."]
  },
soctrang: {
  name: ["Sóc Trăng"],
  face: [],
  images: [ ],
  locations: ["Sóc Trăng là một tỉnh ven biển thuộc đồng bằng sông Cửu Long, nơi hội tụ đa dạng văn hóa của các dân tộc Kinh, Khmer và Hoa, cùng với thiên nhiên phong phú và hệ sinh thái đặc trưng của vùng sông nước miền Tây. Tỉnh có nhiều điểm du lịch xanh tiêu biểu như rừng ngập mặn Mỹ Thanh, vườn cò Tân Long, và cồn Mỹ Phước – nơi du khách có thể trải nghiệm cuộc sống yên bình, thưởng thức trái cây miệt vườn và khám phá hệ động thực vật tự nhiên. Ngoài ra, Sóc Trăng còn nổi bật với nhiều ngôi chùa Khmer độc đáo giữa không gian xanh mát như chùa Dơi, nơi loài dơi quạ sinh sống trong rừng cây cổ thụ ngay trong khuôn viên chùa. Du lịch cộng đồng ở Sóc Trăng cũng phát triển mạnh, tạo điều kiện cho du khách được trải nghiệm nghề truyền thống, tham gia lễ hội dân gian và hiểu hơn về phong tục bản địa. Sự kết hợp giữa sinh thái và văn hóa bản địa giúp Sóc Trăng trở thành một điểm đến lý tưởng cho du lịch xanh và du lịch trải nghiệm."]
  },
backan: {
  name: ["Bắc Kạn"],
  face: [],
  images: [ ],
  locations: ["Bắc Kạn là một trong những tỉnh miền núi phía Bắc nổi tiếng với vẻ đẹp hoang sơ và hệ sinh thái phong phú, rất thích hợp để phát triển du lịch xanh. Nổi bật nhất là Vườn quốc gia Ba Bể – nơi có hồ nước ngọt tự nhiên lớn nhất Việt Nam, được bao quanh bởi rừng núi hùng vĩ và những hang động kỳ thú. Hồ Ba Bể không chỉ là một danh thắng quốc gia mà còn là một khu Ramsar – vùng đất ngập nước có tầm quan trọng quốc tế. Du khách đến đây có thể tham gia chèo thuyền kayak, ngắm cảnh, khám phá hang Puông, động Hua Mạ và tìm hiểu đời sống văn hóa của đồng bào dân tộc Tày, Nùng sinh sống quanh hồ. Ngoài ra, Bắc Kạn còn phát triển các tour du lịch cộng đồng tại các bản làng, giúp du khách trải nghiệm lối sống hòa hợp với thiên nhiên. Nhờ vào sự giữ gìn cảnh quan tự nhiên và bản sắc văn hóa, Bắc Kạn đang trở thành một điểm đến hấp dẫn cho những ai yêu thích hình thức du lịch bền vững và thân thiện với môi trường."]
  },
bacgiang: {
  name: ["Bắc Giang"],
  face: [],
  images: [ ],
  locations: ["Bắc Giang nằm ở vùng Đông Bắc Việt Nam, là một điểm sáng trong phát triển du lịch sinh thái và du lịch cộng đồng. Với địa hình đồi núi và rừng nguyên sinh rộng lớn, Bắc Giang sở hữu nhiều khu bảo tồn thiên nhiên quan trọng như Khu bảo tồn Khe Rỗ (huyện Sơn Động), nơi sinh sống của nhiều loài động thực vật quý hiếm. Du khách đến đây không chỉ được hòa mình vào không gian xanh mát mà còn có thể trekking qua các con đường mòn giữa rừng, khám phá thác nước, hang động và tham gia vào các hoạt động dã ngoại thú vị. Bên cạnh đó, Bắc Giang còn có các làng nghề truyền thống gắn liền với văn hóa bản địa như làng vải thiều Lục Ngạn, nơi du khách có thể tham quan và trải nghiệm thu hoạch nông sản theo mùa. Nhờ vào sự kết hợp giữa cảnh quan thiên nhiên tươi đẹp và văn hóa đặc sắc, Bắc Giang đang hướng tới mô hình du lịch xanh, thân thiện và bền vững, thu hút ngày càng nhiều du khách yêu thiên nhiên."]
  },
baclieu: {
  name: ["Bạc Liêu"],
  face: [],
  images: [ ],
  locations: ["Bạc Liêu là một trong những điểm đến nổi bật ở miền Tây Nam Bộ, không chỉ nổi tiếng với giai thoại về Công tử Bạc Liêu mà còn là vùng đất đầy tiềm năng phát triển du lịch xanh. Nơi đây sở hữu hệ sinh thái rừng ngập mặn ven biển phong phú, trong đó Khu bảo tồn thiên nhiên Vườn chim Bạc Liêu là một điểm nhấn đặc biệt. Du khách có thể ngắm hàng chục loài chim quý hiếm, tận hưởng không khí trong lành và tìm hiểu về đa dạng sinh học. Ngoài ra, cánh đồng điện gió Bạc Liêu với những tua-bin khổng lồ quay trong gió biển cũng là một biểu tượng của sự kết hợp giữa phát triển bền vững và bảo vệ môi trường. Bạc Liêu còn có các tour du lịch sinh thái cộng đồng tại các làng nghề truyền thống, nơi du khách được trải nghiệm đời sống người dân địa phương, tham gia các hoạt động sản xuất thân thiện với môi trường. Với những tiềm năng đó, Bạc Liêu đang trở thành một điểm đến lý tưởng cho những ai yêu thiên nhiên và mong muốn du lịch theo hướng bền vững."]
  },
bacninh: {
  name: ["Bắc Ninh"],
  face: [],
  images: [ ],
  locations: ["Bắc Ninh – vùng đất của dân ca Quan họ – là điểm đến xanh giàu bản sắc truyền thống. Những vùng quê ven sông Đuống, các làng nghề và đền chùa cổ kính như chùa Phật Tích, đền Đô, làng tranh Đông Hồ được bao quanh bởi cánh đồng, ao hồ và cây xanh, tạo nên không gian thanh bình, thích hợp cho du lịch trải nghiệm và giáo dục môi trường. Bắc Ninh đang phát triển các tuyến du lịch xanh kết hợp bảo tồn di sản văn hóa phi vật thể và thiên nhiên vùng châu thổ Bắc Bộ."]
  },
binhduong: {
  name: ["Bình Dương"],
  face: [],
  images: [ ],
  locations: ["Dù phát triển mạnh về công nghiệp, Bình Dương vẫn duy trì và mở rộng các không gian xanh để phục vụ nhu cầu du lịch sinh thái. Khu du lịch sinh thái Thủy Châu, Làng Tre Phú An và Công viên Thành phố Mới là những điểm đến nổi bật, nơi du khách có thể dạo bộ giữa thiên nhiên, tắm suối và tìm hiểu hệ sinh thái bản địa. Các tuyến du lịch đường sông Sài Gòn cũng đang được khai thác theo hướng thân thiện với môi trường. Bình Dương hướng tới xây dựng mô hình đô thị xanh – du lịch bền vững, hài hòa giữa phát triển và bảo tồn."]
  },
binhphuoc: {
  name: ["Bình Phước"],
  face: [],
  images: [ ],
  locations: ["Bình Phước nổi bật với hệ sinh thái rừng nhiệt đới và những khu bảo tồn thiên nhiên rộng lớn. Vườn quốc gia Bù Gia Mập là điểm đến tiêu biểu với thảm thực vật nguyên sinh, thác nước, suối đá và nhiều loài động vật quý hiếm. Đây là nơi lý tưởng cho hoạt động trekking, cắm trại và nghiên cứu thiên nhiên. Bên cạnh đó, những vườn điều, cao su trải dài khắp vùng đất đỏ bazan cùng với văn hóa dân tộc S’tiêng, M’nông mang đến cho Bình Phước bản sắc xanh độc đáo – vừa hoang sơ, vừa gần gũi với con người."]
  },
camau: {
  name: ["Cà Mau"],
  face: [],
  images: [ ],
  locations: ["Cà Mau – điểm cực Nam của Việt Nam – là vùng đất đặc trưng của du lịch sinh thái ngập mặn. Vườn quốc gia Mũi Cà Mau và vườn quốc gia U Minh Hạ là hai điểm đến quan trọng, nơi du khách có thể khám phá rừng tràm, đi thuyền xuyên rạch và quan sát động vật hoang dã như khỉ, cò, rùa nước ngọt. Các mô hình du lịch cộng đồng ở Đất Mũi gắn với văn hóa ngư dân, sinh hoạt ven biển và gìn giữ môi trường đã góp phần lan tỏa lối sống xanh tại khu vực này. Du lịch xanh ở Cà Mau là một hành trình độc đáo giữa thiên nhiên hoang sơ và văn hóa bản địa đặc sắc."]
  },
haiduong: {
  name: ["Hải Dương"],
  face: [],
  images: [ ],
  locations: ["Hải Dương sở hữu nhiều tiềm năng về du lịch xanh nhờ hệ thống đồi núi thấp, sông hồ và làng nghề truyền thống. Côn Sơn – Kiếp Bạc là khu di tích sinh thái – văn hóa nổi bật, nằm giữa rừng thông và núi non trùng điệp. Du khách cũng có thể ghé hồ Bạch Đằng, hồ Kẻ Sặt để tận hưởng không gian yên bình và trong lành. Với các làng nghề như gốm Chu Đậu, bánh đậu xanh, kết hợp mô hình du lịch trải nghiệm nông thôn, Hải Dương đang hướng tới xây dựng hệ sinh thái du lịch bền vững và hài hòa với tự nhiên."]
  },
hanam: {
  name: ["Hà Nam"],
  face: [],
  images: [ ],
  locations: ["Hà Nam là điểm đến lý tưởng cho những ai yêu thích du lịch xanh gần Hà Nội. Với hệ thống hang động tự nhiên kỳ vĩ tại khu du lịch Tam Chúc, kết hợp hồ nước, núi đá vôi và rừng cây, Hà Nam mang lại trải nghiệm thiên nhiên vừa thanh tịnh vừa hùng vĩ. Khu bảo tồn đất ngập nước Kim Bảng cũng là nơi có hệ sinh thái đặc trưng, thu hút chim di cư và động thực vật quý hiếm. Những làng quê xanh mát và cánh đồng lúa trải dài tạo nên không gian trong lành, thích hợp cho mô hình du lịch cộng đồng thân thiện với môi trường."]
  },
hungyen: {
  name: ["Hưng Yên"],
  face: [],
  images: [ ],
  locations: ["Hưng Yên, vùng đất nằm bên dòng sông Hồng, nổi bật với cảnh quan đồng quê trù phú và hệ thống vườn cây ăn trái xanh tốt. Làng Nhãn Lồng Hưng Yên là hình mẫu của mô hình du lịch nông nghiệp bền vững, nơi du khách được trải nghiệm hái nhãn, tham quan vườn và thưởng thức đặc sản tại chỗ. Các điểm như đền Phù Ủng, phố Hiến hay các làng nghề truyền thống kết hợp cảnh quan xanh mát đã tạo nên một không gian du lịch văn hóa – sinh thái đặc trưng, nhẹ nhàng và gần gũi."]
  },
namdinh: {
  name: ["Nam Định"],
  face: [],
  images: [ ],
  locations: ["Nam Định không chỉ nổi tiếng với truyền thống văn hóa lâu đời mà còn có nhiều điểm đến thiên nhiên yên bình. Khu du lịch sinh thái Giao Thủy, nơi có Vườn quốc gia Xuân Thủy, là vùng đất ngập mặn hiếm hoi còn giữ được tính nguyên sơ, được UNESCO công nhận là khu Ramsar đầu tiên của Việt Nam. Đây là nơi sinh sống của hàng trăm loài chim di trú, động thực vật quý hiếm. Ngoài ra, vùng quê yên ả với những làng nghề, đền chùa cổ kính tạo nên một không gian xanh đậm đà bản sắc đồng bằng Bắc Bộ."]
  },
phutho: {
  name: ["Phú Thọ"],
  face: [],
  images: [ ],
  locations: ["Phú Thọ không chỉ là vùng đất tổ của dân tộc Việt Nam mà còn sở hữu nhiều tiềm năng về du lịch xanh. Khu di tích Đền Hùng nằm giữa rừng cọ đồi chè xanh mướt, là nơi du khách vừa tìm hiểu lịch sử, vừa tận hưởng không khí thiên nhiên trong lành. Vườn quốc gia Xuân Sơn với hệ sinh thái rừng nguyên sinh, hang động và suối ngầm là điểm đến hấp dẫn cho du lịch sinh thái, trekking và khám phá. Du lịch xanh ở Phú Thọ là sự kết hợp giữa hành trình về nguồn và trải nghiệm thiên nhiên bền vững."]
  },
thainguyen: {
  name: ["Thái Nguyên"],
  face: [],
  images: [ ],
  locations: ["Thái Nguyên không chỉ là cái nôi của văn hóa trà Việt mà còn là điểm đến xanh hấp dẫn. Du khách có thể ghé thăm vùng chè Tân Cương, trải nghiệm hái chè, pha trà cùng người dân địa phương. Hồ Núi Cốc, với khung cảnh hữu tình, là trung tâm du lịch sinh thái lớn của tỉnh, kết hợp vui chơi giải trí và bảo tồn thiên nhiên. Ngoài ra, các bản làng người Dao, người Tày tại Định Hóa hay Võ Nhai là nơi lý tưởng để trải nghiệm cuộc sống gần gũi với rừng núi và văn hóa bản địa."]
  },
vinhphuc: {
  name: ["Vĩnh Phúc"],
  face: [],
  images: [ ],
  locations: ["Vĩnh Phúc nổi bật với nhiều khu nghỉ dưỡng xanh và cảnh quan thiên nhiên phong phú, đặc biệt là Tam Đảo – nơi được mệnh danh là “Đà Lạt của miền Bắc”. Với khí hậu mát mẻ quanh năm, rừng nguyên sinh và các tuyến trekking sinh thái, Tam Đảo là điểm lý tưởng cho du lịch bền vững. Ngoài ra, hồ Đại Lải với khu du lịch sinh thái hiện đại, kết hợp bảo tồn thiên nhiên và nghệ thuật đương đại, mang đến không gian nghỉ dưỡng hài hòa giữa thiên nhiên và con người."]
  },
dienbien: {
  name: ["Điện Biên"],
  face: [],
  images: [ ],
  locations: ["Điện Biên không chỉ nổi tiếng với chiến tích lịch sử mà còn gây ấn tượng bởi cảnh quan thiên nhiên hùng vĩ và bản sắc văn hóa độc đáo của 19 dân tộc anh em. 'Thung lũng Mường Thanh' - cánh đồng lúa lớn nhất Tây Bắc - vào mùa lúa chín trở thành tấm thảm vàng khổng lồ dưới chân những dãy núi trùng điệp. 'Khu bảo tồn thiên nhiên Mường Nhé' với hệ sinh thái rừng nguyên sinh và nhiều loài động thực vật quý hiếm là điểm đến lý tưởng cho du lịch sinh thái và nghiên cứu đa dạng sinh học. 'Hồ Pá Khoang' rộng hơn 600ha với mặt nước trong xanh in bóng núi rừng là nơi lý tưởng cho các hoạt động du thuyền, câu cá giải trí. Đặc biệt, 'rừng nguyên sinh Tà Sình' ở huyện Điện Biên Đông với những cây cổ thụ hàng trăm năm tuổi đang được phát triển thành điểm trekking hấp dẫn. Điện Biên còn phát triển mạnh mô hình du lịch cộng đồng tại các bản làng của người Thái, Mông như 'bản Him Lam', 'bản Ten', nơi du khách có thể trải nghiệm đời sống bản địa, thưởng thức ẩm thực địa phương và tham gia các hoạt động bảo tồn văn hóa truyền thống. Đến với Điện Biên, du khách không chỉ được đắm mình trong không gian xanh mà còn hiểu thêm về cuộc sống bền vững của đồng bào các dân tộc thiểu số."]
  },
daknong: {
  name: ["Đắk Nông"],
  face: [],
  images: [ ],
  locations: ["Đắk Nông, vùng đất của những thác nước hùng vĩ và hệ thống hang động núi lửa độc nhất vô nhị, đang trở thành điểm đến du lịch xanh nổi bật của Tây Nguyên. 'Công viên địa chất toàn cầu Đắk Nông' với hệ thống hang động núi lửa dài nhất Đông Nam Á là điểm nhấn đặc biệt, nơi du khách có thể khám phá những 'hang C7', 'hang C3' với cấu trúc đá bazan kỳ vĩ cùng hệ thống thực vật đặc hữu. Các thác nước như 'thác Đray Sáp' hùng vĩ, 'thác Gia Long' thơ mộng hay 'thác Liêng Nung' hoang sơ đều được bảo tồn nguyên vẹn trong những khu rừng già. 'Vườn quốc gia Tà Đùng' với 'hồ Tà Đùng' được mệnh danh là 'Vịnh Hạ Long của Tây Nguyên' là điểm đến lý tưởng cho các hoạt động chèo thuyền kayak, ngắm cảnh và nghiên cứu hệ sinh thái rừng. Đắk Nông còn gây ấn tượng với các mô hình du lịch cộng đồng của đồng bào M'nông, Êđê tại 'làng văn hóa N'Jriêng', nơi du khách có thể trải nghiệm văn hóa cồng chiêng và lối sống bền vững của người bản địa. Đến Đắk Nông là đến với hành trình khám phá thiên nhiên nguyên sơ và góp phần bảo tồn các giá trị địa chất - văn hóa độc đáo."]
  },
haugiang: {
  name: ["Hậu Giang"],
  face: [],
  images: [ ],
  locations: ["Hậu Giang là một điểm đến mới nổi về du lịch xanh tại miền Tây, với thiên nhiên trù phú và hệ sinh thái đa dạng. Khu bảo tồn thiên nhiên Lung Ngọc Hoàng là “lá phổi xanh” của khu vực, nơi du khách có thể đi thuyền giữa rừng tràm, quan sát chim hoang dã và tận hưởng không khí trong lành. Các điểm như khu du lịch sinh thái Tầm Vu hay vườn trái cây Vị Thanh mang đến cảm giác thư giãn nhẹ nhàng, kết nối với thiên nhiên và trải nghiệm đời sống nông nghiệp bền vững. Du lịch Hậu Giang là hành trình trở về với sự mộc mạc, yên bình và xanh mát."]
  },
cantho: {
  name: ["Cần Thơ"],
  face: [],
  images: [ ],
  locations: ["Cần Thơ, trái tim của vùng đồng bằng sông Cửu Long, mang đến trải nghiệm du lịch xanh đặc trưng với hệ thống sông nước, vườn cây trái sum suê và nền văn hóa sông nước độc đáo. 'Chợ nổi Cái Răng' - một trong những chợ nổi lớn nhất miền Tây - không chỉ là nơi buôn bán nhộn nhịp mà còn là di sản văn hóa phi vật thể, nơi du khách có thể trải nghiệm đời sống sông nước nguyên bản trên những chiếc xuồng ghe đầy màu sắc. Về phía huyện Phong Điền, 'khu sinh thái Mỹ Khánh' với những vườn trái cây nhiệt đới xanh mướt, những cây cầu khỉ duyên dáng và những ngôi nhà cổ Nam Bộ tạo nên không gian nghỉ dưỡng lý tưởng. Xa hơn về phía Cờ Đỏ, 'vườn sầu riêng Cờ Đỏ' rộng hàng chục hecta không chỉ cung cấp trái ngon mà còn là điểm đến giáo dục về nông nghiệp hữu cơ. Đặc biệt, 'rừng tràm Trà Sư' (An Giang) mở rộng sang địa phận Cần Thơ với hệ sinh thái ngập nước độc đáo, là nơi cư trú của hàng trăm loài chim nước và thủy sinh vật. Du lịch Cần Thơ ngày càng xanh hơn với các homestay sinh thái dọc sông Hậu, tour đạp xe khám phá làng nghề và các dự án bảo vệ môi trường sông nước."]
  },
danang: {
  name: ["Đà Nẵng"],
  face: ["./assets/imgbando/danang1.png"],
  images: ["./assets/imgbando/danang1.png",
           "./assets/imgbando/danang2.png",
           "./assets/imgbando/danang3.png",
           "./assets/imgbando/danang4.png",
           "./assets/imgbando/danang5.png",
           "./assets/imgbando/danang6.png"],
  locations: ["Đà Nẵng, thành phố biển năng động của miền Trung Việt Nam, không chỉ nổi tiếng bởi sự phát triển hiện đại mà còn bởi vẻ đẹp thiên nhiên nguyên sơ và cam kết mạnh mẽ với du lịch xanh. Từ những cánh rừng bạt ngàn của Bán đảo Sơn Trà – nơi bảo tồn loài voọc chà vá chân nâu quý hiếm – đến không gian yên bình tại Khu du lịch sinh thái Suối Hoa, Đà Nẵng mang đến trải nghiệm hòa mình vào thiên nhiên trong lành, tách biệt khỏi ồn ào phố thị. Những bãi biển trong xanh như Mỹ Khê, Non Nước được giữ gìn sạch đẹp, là điểm đến lý tưởng cho những ai yêu thích sự bền vững và bảo vệ môi trường. Đến với Đà Nẵng, du khách không chỉ được tận hưởng vẻ đẹp tự nhiên mà còn có cơ hội tham gia vào các hoạt động du lịch có trách nhiệm, góp phần gìn giữ màu xanh cho thế hệ mai sau."]
  },
hanoi: {
  name: ["Hà Nội"],
  face: [],
  images: [ ],
  locations: ["Hà Nội, trái tim của Việt Nam, không chỉ là thành phố nghìn năm văn hiến mà còn là điểm đến bền vững với những 'lá phổi xanh' giữa nhịp sống sôi động. Hồ Tây – mặt gương khổng lồ phản chiếu bầu trời – là nơi du khách có thể đạp xe dọc bờ hồ, thưởng thức không khí trong lành và ngắm hoàng hôn lãng mạn. Cách trung tâm không xa, Vườn quốc gia Ba Vì với rừng nguyên sinh, thác nước và đồi chè trải dài là điểm lý tưởng để trekking, tận hưởng tiếng chim hót và khí hậu mát mẻ. Những làng nghề sinh thái như làng rau Trạm Xá (huyện Phúc Thọ) hay làng cổ Đường Lâm mang đến trải nghiệm 'du lịch xanh' đậm chất văn hóa, nơi du khách có thể tham gia trồng rau hữu cơ hoặc tìm hiểu kiến trúc nhà cổ truyền thống. Hà Nội cũng tiên phong trong phát triển không gian công cộng thân thiện môi trường, như công viên Hòa Bình với hệ thống cây xanh phủ kín, hay tuyến phố đi bộ quanh hồ Gươm – nơi xe điện mặt đất thay thế phương tiện gây ô nhiễm. Đến với Hà Nội, bạn sẽ khám phá một hành trình bền vững, nơi thiên nhiên và lịch sử hòa quyện giữa nhịp đập hiện đại."]
  },
haiphong: {
  name: ["Hải Phòng"],
  face: [],
  images: [ ],
  locations: ["Hải Phòng, 'thành phố hoa phượng đỏ', nổi bật với những bãi biển hoang sơ và hệ sinh thái biển đảo độc đáo. Vườn quốc gia Cát Bà – khu dự trữ sinh quyển thế giới – là điểm nhấn du lịch xanh với rừng ngập mặn, hang động karst và loài voọc đầu trắng quý hiếm. Du khách có thể kayak qua làng chài Việt Hải, leo núi trên đảo Cát Bà, hoặc lặn ngắm san hô tại vịnh Lan Hạ – nơi được mệnh danh là 'Hạ Long thu nhỏ' với làn nước trong vắt. Gần đó, đảo Long Châu hoang sơ là điểm đến lý tưởng cho ai yêu thích trải nghiệm tách biệt, nơi sóng vỗ vào ghềnh đá và rừng nguyên sinh bao phủ. Trên đất liền, khu sinh thái Rừng Đước Hải Phòng (huyện Tiên Lãng) với hệ thống cầu gỗ xuyên rừng ngập mặn là nơi lý tưởng để tìm hiểu về hệ sinh thái ven biển. Hải Phòng cũng phát triển du lịch cộng đồng tại các làng chài như Cát Hải, nơi du khách có thể học cách đan lưới, câu mực cùng ngư dân. Đến với Hải Phòng, bạn sẽ được hòa mình vào thiên nhiên biển đảo nguyên sơ và góp phần bảo tồn di sản xanh qua những hoạt động du lịch có trách nhiệm."]
  },
hochiminh: {
  name: ["Hồ Chí Minh"],
  face: [],
  images: [ ],
  locations: ["Giữa nhịp sống hối hả, TP. Hồ Chí Minh vẫn giữ được những không gian xanh bền vững, kết nối con người với thiên nhiên. Khu sinh thái Làng Bè Cần Giờ – khu dự trữ sinh quyển thế giới – là điểm đến lý tưởng để khám phá rừng ngập mặn, chèo thuyền qua các con lạch và quan sát khỉ đuôi dài trong môi trường tự nhiên. Ngay trong lòng thành phố, Công viên Bách Thảo Sài Gòn với hơn 1.000 loài thực vật và khu đô thị sinh thái Phú Mỹ Hưng là những 'lá phổi' giúp giảm nhiệt đô thị. Về phía Tây, khu vườn trái cây Củ Chi (xã An Nhơn Tây) mang đến trải nghiệm 'du lịch xanh' độc đáo, nơi du khách có thể hái trái cây tại vườn, tham gia làm bánh tráng truyền thống và tìm hiểu về nông nghiệp hữu cơ. TP. Hồ Chí Minh cũng đi đầu trong xu hướng du lịch bền vững với các khách sạn 'zero-waste', hệ thống xe đạp công cộng và tour ẩm thực chống lãng phí thực phẩm. Đến đây, bạn sẽ bất ngờ bởi sự cân bằng giữa đô thị hiện đại và những giải pháp xanh sáng tạo, nơi mỗi hành trình đều có thể góp phần bảo vệ môi trường."]
  }
  };

  // ======= BẢN ĐỒ SVG - hover, tooltip, click =======
  let currentActivePath = null;
  const paths = document.querySelectorAll('.map-container svg path');

  paths.forEach(path => {
    const id = path.getAttribute('id');                         // dùng để tra cứu dữ liệu
    const name = path.getAttribute('name') || path.getAttribute('id') || "Không rõ"; // tên hiển thị (tiếng Việt)

    // Hover
    path.addEventListener("mouseenter", () => {
      if (currentActivePath && currentActivePath !== path) {
        currentActivePath.classList.remove("active");
      }
      path.classList.add("active");
      currentActivePath = path;

      if (tooltip) {
        tooltip.style.display = "block";
        tooltip.innerText = name;
      }
    });

    path.addEventListener("mousemove", (e) => {
      if (tooltip) {
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
      }
    });

    path.addEventListener("mouseleave", () => {
      if (tooltip) tooltip.style.display = "none";
    });

    // Click để hiển thị hình ảnh + danh sách
    path.addEventListener("click", () => {
      const info = provinceData[id];
      if (info) {
        // === Hiển thị hình ảnh ===
        const imageDiv = document.getElementById("infoImages");
        imageDiv.innerHTML = "<h3>Hình Ảnh</h3><div class='img-wrapper fade-in'></div>";
        const wrapper = imageDiv.querySelector('.img-wrapper');

        info.images.forEach(src => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = id;
          wrapper.appendChild(img);
        });

        // === Hiển thị địa điểm ===
        const listDiv = document.getElementById("infoList");
        listDiv.classList.remove("fade-in"); // reset nếu đã có
        void listDiv.offsetWidth; // trigger reflow
        listDiv.classList.add("fade-in");
        listDiv.innerHTML = "";
        info.locations.forEach(place => {
          const li = document.createElement("li");
          li.textContent = place;
          listDiv.appendChild(li);
        });

        // ======== Hiển thị ảnh đại diện (face) ========
        const daiDienDiv = document.getElementById("infoDaidien");
        if (daiDienDiv && info.face && info.face.length > 0) {
          daiDienDiv.innerHTML = `<img src="${info.face[0]}" alt="Ảnh đại diện">`;
        } else {
          daiDienDiv.innerHTML = ""; // Xóa nếu không có dữ liệu
        }

        // ======== Hiển thị tên thành phố (name) ========
        const tenDiv = document.getElementById("infoTen");
        if (tenDiv && info.name && info.name.length > 0) {
          tenDiv.innerText = info.name[0];
        } else {
          tenDiv.innerText = "";
        }
      }
    });
  });

  // Khi rời khỏi toàn bộ SVG
  const svg = document.querySelector('.map-container svg');
  if (svg) {
    svg.addEventListener("mouseleave", () => {
      if (currentActivePath) {
        currentActivePath.classList.remove("active");
        currentActivePath = null;
      }
      if (tooltip) tooltip.style.display = "none";
    });
  }

  // ======= TOGGLE HAMBURGER MENU =======
  const hamburger = document.getElementById("hamburger");
  const menuList = document.querySelector(".nav-container .list");

  if (hamburger && menuList) {
    hamburger.addEventListener("click", () => {
      menuList.classList.toggle("show");
    });
  }

    // ======== POPUP ẢNH ========
    let currentImageIndex = 0;
    let currentImageList = [];
  
    const viewer = document.getElementById("imageViewer");
    const viewerImage = document.getElementById("viewerImage");
    const closeBtn = document.getElementById("closeImage");
    const prevImageBtn = document.getElementById("prevImage");
    const nextImageBtn = document.getElementById("nextImage");
    const navButtons = document.querySelector(".nav-buttons"); // Nút điều hướng slide chính
  
    // Click ảnh nhỏ => mở popup
    document.addEventListener("click", function (e) {
      if (e.target.tagName === "IMG" && e.target.closest(".img-wrapper")) {
        const allImages = Array.from(document.querySelectorAll(".img-wrapper img"));
        currentImageList = allImages.map(img => img.src);
        currentImageIndex = allImages.indexOf(e.target);
  
        viewerImage.src = currentImageList[currentImageIndex];
        viewer.style.display = "flex";
  
        // Ẩn nav-buttons chính
        if (navButtons) navButtons.style.display = "none";
      }
    });
  
    // Đóng popup ảnh
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        viewer.style.display = "none";
  
        // Hiện lại nav-buttons chính
        if (navButtons) navButtons.style.display = "flex";
      });
    }
  
    // Ảnh trước
    if (prevImageBtn) {
      prevImageBtn.addEventListener("click", function () {
        if (!currentImageList.length) return;
        currentImageIndex = (currentImageIndex - 1 + currentImageList.length) % currentImageList.length;
        viewerImage.src = currentImageList[currentImageIndex];
      });
    }
  
    // Ảnh sau
    if (nextImageBtn) {
      nextImageBtn.addEventListener("click", function () {
        if (!currentImageList.length) return;
        currentImageIndex = (currentImageIndex + 1) % currentImageList.length;
        viewerImage.src = currentImageList[currentImageIndex];
      });
    } 
    
   // ======= XỬ LÝ TÍNH CARBON =======
   const button = document.querySelector(".btn-calculate");
   const vehicleInput = document.getElementById("vehicle");
   const distanceInput = document.getElementById("distance");
   const peopleInput = document.getElementById("people");
   const resultDiv = document.getElementById("carbonResult");
   const carbonValue = document.getElementById("carbonValue");
   const carbonImpact = document.getElementById("carbonImpact");
   const carbonSolution = document.getElementById("carbonSolution");
   const warningDiv = document.getElementById("carbonWarning");
   const closeWarning = document.getElementById("closeWarning");
   const closeResultBtn = document.getElementById("closeResult");
   const tinhCarbonDiv = document.querySelector(".tinhcarbon");
   const overlayDark = document.getElementById("overlayDark");
 
   const factors = {
     "máy bay": 0.25,
     "ô tô": 0.12,
     "xe máy": 0.09,
     "xe khách": 0.05,
     "xe buýt": 0.05,
     "tàu hỏa": 0.04,
     "xe đạp": 0,
     "đi bộ": 0,
   };

   function toggleOverlay() {
    const warningVisible = warningDiv.style.display !== "none";
    const resultVisible = resultDiv.style.display !== "none";
  
    if (warningVisible || resultVisible) {
      overlayDark.style.display = "block";
    } else {
      overlayDark.style.display = "none";
    }
  }
 
   if (button) {
     button.addEventListener("click", function (e) {
       e.preventDefault();
 
       const vehicleRaw = vehicleInput.value.trim().toLowerCase();
       const distance = parseFloat(distanceInput.value);
       const people = parseInt(peopleInput.value);
 
       if (!vehicleRaw || isNaN(distance) || isNaN(people)) {
         warningDiv.style.display = "block";
         resultDiv.style.display = "none";
         tinhCarbonDiv.classList.add("blur-background");
         return;
       }
 
       // Nếu nhập hợp lệ thì ẩn cảnh báo và tính kết quả
       warningDiv.style.display = "none";
       tinhCarbonDiv.classList.remove("blur-background");
 
       const vehicleList = vehicleRaw.split(/,| và | & |\/|;/).map(v => v.trim()).filter(Boolean);
       let totalCarbon = 0;
 
       vehicleList.forEach(vehicle => {
         const factor = factors[vehicle] ?? 0.1;
         totalCarbon += factor * distance * people;
       });
 
       const trashKg = (totalCarbon * 2).toFixed(1);
       const trees = Math.ceil(totalCarbon / 21);
 
       carbonValue.innerHTML = `
         👉 Tổng lượng khí thải CO₂: <strong>${totalCarbon.toFixed(2)} kg</strong><br>
         👉 Số phương tiện bạn đã dùng: <strong>${vehicleList.length}</strong>
       `;

      let level = "";
      if (totalCarbon < 100) {
        level = "🔵 Mức thấp – Bạn đang di chuyển khá thân thiện với môi trường đó !";
      } else if (totalCarbon < 500) {
        level = "🟠 Mức trung bình – Hãy cân nhắc các cách để giảm tác động nha !";
      } else {
        level = "🔴 Mức cao – Mức thải của bạn quá cao, hãy xem xét và khắc phục nhé !";
      }
 
       carbonImpact.innerHTML = `
        🛑 Phát thải ${totalCarbon.toFixed(2)} kg CO₂ góp phần vào ô nhiễm không khí, biến đổi khí hậu và hiệu ứng nhà kính.<br>
        <strong>${level}</strong>
        `;
 
       carbonSolution.innerHTML = `
         ✅ Để có thể khắc phục số carbon, bạn có thể:<br>
         - Thu gom khoảng <strong>${trashKg} kg</strong> rác<br>
         - Trồng ít nhất <strong>${trees} cây xanh</strong>
       `;
 
       resultDiv.style.display = "block";
       tinhCarbonDiv.classList.add("blur-background");
     });
   }
 
   // ===== Đóng cảnh báo =====
   if (closeWarning) {
     closeWarning.addEventListener("click", function () {
       warningDiv.style.display = "none";
       tinhCarbonDiv.classList.remove("blur-background");
     });
   }
 
   // ===== Đóng kết quả =====
   if (closeResultBtn) {
     closeResultBtn.addEventListener("click", function () {
       resultDiv.style.display = "none";
       tinhCarbonDiv.classList.remove("blur-background");
     });
   }

});
