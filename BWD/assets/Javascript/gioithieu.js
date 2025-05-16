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
  face: ["./assets/imgbando/tuyenquang1.jpg"],
  images: ["./assets/imgbando/tuyenquang1.jpg",
            "./assets/imgbando/tuyenquang2.jpg",
            "./assets/imgbando/tuyenquang3.jpg",
            "./assets/imgbando/tuyenquang4.jpg",
            "./assets/imgbando/tuyenquang5.jpg",
            "./assets/imgbando/tuyenquang6.jpg"
  ],
  locations: ["Tuyên Quang là điểm đến lý tưởng cho du lịch xanh nhờ vào hệ sinh thái rừng núi đa dạng, sông suối trong lành và bản sắc văn hóa phong phú của các dân tộc thiểu số. Du khách có thể khám phá Hồ Na Hang – “Hạ Long giữa đại ngàn” – nơi có làn nước xanh thẳm, bao quanh bởi núi non hùng vĩ và các loài động vật hoang dã quý hiếm. Tại đây, bạn có thể trải nghiệm đi thuyền ngắm thác Khuổi Nhi, cắm trại ven hồ, chèo kayak, hoặc đi bộ xuyên rừng trong khu bảo tồn thiên nhiên. Bên cạnh đó, các bản làng của người Dao, Tày, H’mông là nơi tuyệt vời để du khách hòa mình vào đời sống thường nhật, thưởng thức ẩm thực dân tộc, học cách dệt thổ cẩm, nấu rượu men lá hay tham gia lễ hội truyền thống. Tuyên Quang đang hướng đến phát triển du lịch sinh thái kết hợp với giáo dục bảo tồn và nâng cao ý thức cộng đồng. Đây là điểm đến giúp du khách không chỉ thư giãn giữa thiên nhiên mà còn có cơ hội hiểu sâu hơn về giá trị của sự gắn kết giữa con người và môi trường."]
  },
langson: {
  name: ["Lạng Sơn"],
  face: ["./assets/imgbando/langson1.jpg"],
  images: ["./assets/imgbando/langson1.jpg",
            "./assets/imgbando/langson2.jpg",
            "./assets/imgbando/langson3.jpg",
            "./assets/imgbando/langson4.jpg",
            "./assets/imgbando/langson5.jpg",
            "./assets/imgbando/langson6.jpg"
  ],
  locations: ["Lạng Sơn – vùng đất biên viễn phía Bắc – là điểm đến hấp dẫn cho những ai yêu thích khám phá thiên nhiên nguyên sơ và văn hóa dân tộc đặc sắc. Với địa hình núi đá vôi xen lẫn thung lũng xanh mát, Lạng Sơn sở hữu nhiều thắng cảnh tự nhiên như động Tam Thanh, núi Tô Thị, thác Đăng Mò, hay khu du lịch sinh thái Mẫu Sơn với khí hậu mát lạnh quanh năm. Mẫu Sơn đặc biệt phù hợp cho du lịch nghỉ dưỡng, leo núi, săn mây và trải nghiệm văn hóa của các dân tộc Dao, Tày, Nùng. Các bản làng nơi đây vẫn còn giữ nét mộc mạc, với nhà sàn truyền thống, ẩm thực núi rừng và các lễ hội dân gian độc đáo. Lạng Sơn đang phát triển nhiều mô hình du lịch cộng đồng, du lịch nông nghiệp và trekking sinh thái, góp phần tạo ra nguồn thu nhập ổn định cho người dân bản địa mà vẫn giữ được môi trường tự nhiên. Hành trình đến Lạng Sơn là hành trình về với thiên nhiên nguyên bản và những nét đẹp văn hóa không bị mai một theo thời gian."]
  },
quangninh: {
  name: ["Quảng Ninh"],
  face: ["./assets/imgbando/quangninh1.jpg"],
  images: ["./assets/imgbando/quangninh1.jpg",
            "./assets/imgbando/quangninh2.webp",
            "./assets/imgbando/quangninh3.jpg",
            "./assets/imgbando/quangninh4.jpg",
            "./assets/imgbando/quangninh5.jpg",
            "./assets/imgbando/quangninh6.webp"
  ],
  locations: ["Quảng Ninh không chỉ nổi tiếng với vịnh Hạ Long – Di sản thiên nhiên thế giới, mà còn là địa phương tiên phong trong phát triển du lịch sinh thái, bền vững. Bên cạnh vẻ đẹp kỳ vĩ của những đảo đá vôi hàng triệu năm tuổi, Quảng Ninh còn sở hữu nhiều khu sinh thái đặc sắc như đảo Cô Tô, đảo Quan Lạn, bán đảo Vân Đồn và Vườn quốc gia Bái Tử Long – nơi có hệ sinh thái biển đảo phong phú, rừng ngập mặn và san hô quý hiếm. Du khách có thể trải nghiệm tour sinh thái bằng thuyền kayak, tắm biển hoang sơ, tham quan làng chài cổ, hoặc nghỉ dưỡng tại các homestay thân thiện với môi trường. Bên cạnh đó, vùng núi Yên Tử với rừng già và con đường hành hương thanh tịnh là lựa chọn lý tưởng cho những ai tìm kiếm sự tĩnh lặng trong tự nhiên. Quảng Ninh đang tích cực phát triển mô hình du lịch xanh gắn liền với giáo dục môi trường và văn hóa địa phương, nhằm bảo tồn vẻ đẹp thiên nhiên lâu dài và nâng cao chất lượng sống cộng đồng."]
  },
hoabinh: {
  name: ["Hòa Bình"],
  face: ["./assets/imgbando/hoabinh1.webp"],
  images: ["./assets/imgbando/hoabinh1.webp",
            "./assets/imgbando/hoabinh2.webp",
            "./assets/imgbando/hoabinh3.webp",
            "./assets/imgbando/hoabinh4.webp",
            "./assets/imgbando/hoabinh5.webp",
            "./assets/imgbando/hoabinh6.webp"
  ],
  locations: ["Hòa Bình là cửa ngõ của vùng Tây Bắc, nổi bật với vẻ đẹp hoang sơ của núi rừng, thung lũng xanh và bản làng dân tộc. Đây là nơi sinh sống của nhiều đồng bào như Mường, Thái, Dao, với những nét văn hóa đặc sắc, giàu truyền thống. Vườn quốc gia Cúc Phương và Khu bảo tồn thiên nhiên Ngọc Sơn – Ngổ Luông là những điểm đến tiêu biểu cho du lịch sinh thái, nơi du khách có thể trekking, khám phá hang động, tắm thác và tìm hiểu hệ sinh thái đa dạng. Ngoài ra, các bản du lịch cộng đồng như bản Lác, bản Pom Coọng (Mai Châu) cung cấp mô hình nghỉ dưỡng thân thiện với môi trường, giúp du khách trải nghiệm cuộc sống bản địa, thưởng thức cơm lam, rượu cần, múa xòe và các hoạt động truyền thống. Hòa Bình đang đẩy mạnh phát triển du lịch gắn với bảo tồn thiên nhiên, gìn giữ bản sắc văn hóa và tạo sinh kế xanh cho người dân. Đây chính là điểm đến lý tưởng cho hành trình khám phá và sống chậm giữa núi rừng yên bình."]
  },
hatay: {
  name: ["Hà Tây"],
  face: ["./assets/imgbando/hatay1.jpg"],
  images: [ "./assets/imgbando/hatay1.jpg",
            "./assets/imgbando/hatay2.jpg",
            "./assets/imgbando/hatay3.jpg",
            "./assets/imgbando/hatay4.jpg",
            "./assets/imgbando/hatay5.jpg",
            "./assets/imgbando/hatay6.jpg"
  ],
  locations: ["Hà Tây – nay là một phần của thủ đô Hà Nội – vẫn giữ được vẻ đẹp đặc trưng của vùng trung du Bắc Bộ với cảnh quan hữu tình, làng quê cổ kính và truyền thống văn hóa lâu đời. Những địa danh như Làng cổ Đường Lâm, Chùa Thầy, Chùa Trăm Gian, hay núi Ba Vì mang đến trải nghiệm vừa gần gũi vừa sâu lắng. Đặc biệt, khu du lịch sinh thái Ba Vì đang trở thành điểm đến yêu thích cho du khách yêu thiên nhiên: với rừng nguyên sinh, các loài thực vật quý, không khí trong lành cùng các hoạt động như leo núi, đạp xe rừng, tắm suối và cắm trại. Các làng nghề truyền thống như gốm sứ, lụa, kẹo lạc cũng góp phần vào bức tranh du lịch sinh thái, nơi du khách có thể hòa mình vào nhịp sống địa phương, học làm thủ công và thưởng thức ẩm thực vùng quê. Du lịch xanh tại Hà Tây cũ là sự giao thoa giữa thiên nhiên, văn hóa và lối sống bền vững – một điểm dừng chân tuyệt vời cho ai muốn tìm lại giá trị nguyên bản giữa cuộc sống hiện đại."]
  },
ninhbinh: {
  name: ["Ninh Bình"],
  face: ["./assets/imgbando/ninhbinh1.webp"],
  images: ["./assets/imgbando/ninhbinh1.webp",
            "./assets/imgbando/ninhbinh2.webp",
            "./assets/imgbando/ninhbinh3.webp",],
  locations: ["Ninh Bình được mệnh danh là 'vịnh Hạ Long trên cạn', nơi giao hòa tuyệt vời giữa núi non hùng vĩ và sông nước nên thơ. Với các điểm đến nổi bật như Tràng An, Tam Cốc – Bích Động, Vườn quốc gia Cúc Phương và khu bảo tồn đất ngập nước Vân Long, nơi đây không chỉ làm say lòng du khách mà còn là hình mẫu cho phát triển du lịch xanh bền vững. Tham quan Ninh Bình, du khách có thể đi thuyền xuyên qua các hang động đá vôi, khám phá hệ sinh thái rừng nguyên sinh, ngắm nhìn đàn voọc mông trắng quý hiếm và tận hưởng không khí trong lành, thanh tịnh. Ninh Bình còn gắn bó mật thiết với văn hóa và lịch sử Việt Nam, từ cố đô Hoa Lư đến các ngôi chùa cổ như Bái Đính. Đặc biệt, các homestay sinh thái tại Tràng An hay Gia Viễn không chỉ mang lại trải nghiệm gần gũi với thiên nhiên mà còn giúp người dân địa phương nâng cao sinh kế một cách bền vững. Du lịch xanh tại Ninh Bình là sự kết hợp hài hòa giữa bảo tồn, văn hóa và phát triển cộng đồng."]
  },
thaibinh: {
  name: ["Thái Bình"],
  face: ["./assets/imgbando/thaibinh1.jpg"],
  images: ["./assets/imgbando/thaibinh1.jpg",
            "./assets/imgbando/thaibinh2.jpg",
            "./assets/imgbando/thaibinh3.jpg",],
  locations: ["Thái Bình – vùng đất trù phú của đồng bằng châu thổ sông Hồng – mang vẻ đẹp mộc mạc, thanh bình và rất đỗi gần gũi. Không có núi cao hay thác nước hùng vĩ, Thái Bình lại thu hút du khách bởi những cánh đồng lúa bát ngát, hệ thống kênh rạch đan xen và không gian làng quê đậm chất Bắc Bộ. Nơi đây đang từng bước phát triển du lịch xanh với mô hình du lịch cộng đồng tại các làng nghề truyền thống như đúc đồng, dệt chiếu, làm bánh cáy; cùng với những tour trải nghiệm nông nghiệp sinh thái. Du khách có thể cùng người dân đi cấy lúa, thu hoạch rau sạch, chèo thuyền trên sông hoặc đạp xe qua những con đường làng thơ mộng. Ngoài ra, khu du lịch sinh thái Cồn Đen – nơi giao thoa giữa rừng ngập mặn và biển – là điểm nhấn tuyệt vời cho các hoạt động bảo vệ môi trường và trải nghiệm tự nhiên. Du lịch Thái Bình đang hướng đến sự bền vững, nơi du khách không chỉ khám phá mà còn góp phần gìn giữ cảnh quan và văn hóa vùng quê."]
  },
thanhhoa: {
  name: ["Thanh Hóa"],
  face: ["./assets/imgbando/thanhhoa1.jpg"],
  images: ["./assets/imgbando/thanhhoa1.jpg",
            "./assets/imgbando/thanhhoa2.jpg",
            "./assets/imgbando/thanhhoa3.jpg",
            "./assets/imgbando/thanhhoa4.jpg",
            "./assets/imgbando/thanhhoa5.jpg",
            "./assets/imgbando/thanhhoa6.jpg"
  ],
  locations: ["Thanh Hóa không chỉ nổi bật với những di tích lịch sử lâu đời như Thành nhà Hồ, mà còn là điểm đến hấp dẫn với cảnh quan thiên nhiên đa dạng và nhiều tiềm năng cho du lịch xanh. Biển Sầm Sơn, Hải Tiến, và đặc biệt là khu bảo tồn Pù Luông là những địa danh đang dần khẳng định tên tuổi trên bản đồ du lịch sinh thái Việt Nam. Pù Luông nổi bật với những thửa ruộng bậc thang uốn lượn, rừng rậm nguyên sinh và các bản làng của người Thái, Mường – nơi bạn có thể nghỉ dưỡng trong các homestay thân thiện với môi trường, trekking qua rừng già, tắm suối và thưởng thức ẩm thực truyền thống. Thanh Hóa cũng có nhiều chương trình du lịch cộng đồng, nơi du khách được sống như người địa phương, góp phần vào kinh tế xanh. Với hướng phát triển du lịch bền vững, tỉnh đang từng bước khai thác tiềm năng một cách hài hòa giữa bảo tồn thiên nhiên và nâng cao chất lượng sống của cư dân địa phương."]
  },
nghean: {
  name: ["Nghệ An"],
  face: ["./assets/imgbando/nghean1.jpg"],
  images: ["./assets/imgbando/nghean1.jpg",
            "./assets/imgbando/nghean2.jpg",
            "./assets/imgbando/nghean3.jpg",
            "./assets/imgbando/nghean4.jpg",
            "./assets/imgbando/nghean5.jpg",
            "./assets/imgbando/nghean6.jpg"
  ],
  locations: ["Là tỉnh có diện tích lớn nhất Việt Nam, Nghệ An sở hữu tài nguyên du lịch phong phú, lý tưởng để phát triển du lịch xanh. Vườn quốc gia Pù Mát là một điểm nhấn nổi bật với hệ động thực vật đa dạng, những cánh rừng nguyên sinh và dòng thác hùng vĩ như Khe Kèm. Biển Cửa Lò, đảo Hòn Ngư, và các bãi biển trải dài vẫn giữ được nét nguyên sơ, sạch sẽ, rất thích hợp cho nghỉ dưỡng sinh thái. Du khách có thể đến các bản làng người Thái, H'Mông ở vùng cao như Con Cuông, Tương Dương để trải nghiệm cuộc sống gần gũi với thiên nhiên, học cách làm thổ cẩm, thưởng thức các món ăn dân tộc và tham gia vào sinh hoạt văn hóa truyền thống. Nghệ An đang ngày càng chú trọng phát triển du lịch gắn liền với bảo tồn, đảm bảo rằng mỗi bước chân của du khách đều góp phần bảo vệ môi trường và phát triển cộng đồng địa phương."]
  },
hatinh: {
  name: ["Hà Tĩnh"],
  face: ["./assets/imgbando/hatinh1.jpg"],
  images: ["./assets/imgbando/hatinh1.jpg",
            "./assets/imgbando/hatinh2.jpg",
            "./assets/imgbando/hatinh3.jpg",
            "./assets/imgbando/hatinh4.jpg",
            "./assets/imgbando/hatinh5.jpg",
            "./assets/imgbando/hatinh6.jpg"
  ],
  locations: ["Hà Tĩnh không ồn ào, náo nhiệt nhưng lại chinh phục du khách bằng sự thanh bình, gần gũi và những nét đẹp thuần khiết của thiên nhiên và con người. Từ bãi biển Thiên Cầm thơ mộng, rừng phòng hộ ven biển Cẩm Xuyên đến Khu bảo tồn thiên nhiên Kẻ Gỗ – một kho tàng sinh học phong phú, nơi đây là điểm đến tuyệt vời cho du lịch sinh thái. Hà Tĩnh còn là nơi lưu giữ nhiều giá trị văn hóa truyền thống như các làng nghề, lễ hội dân gian và văn hóa ẩm thực đậm chất Bắc Trung Bộ. Du khách đến đây có thể hòa mình vào cuộc sống nông thôn, trải nghiệm làm vườn, hái chè, thăm các khu rừng tự nhiên và tìm hiểu những câu chuyện lịch sử gắn liền với các danh nhân văn hóa. Phát triển du lịch xanh, Hà Tĩnh đang hướng đến một mô hình bền vững, giúp bảo tồn môi trường tự nhiên đồng thời tạo sinh kế cho cộng đồng địa phương."]
  },
quangbinh: {
  name: ["Quảng Bình"],
  face: ["./assets/imgbando/quangbinh1.jpg"],
  images: ["./assets/imgbando/quangbinh1.jpg",
            "./assets/imgbando/quangbinh2.jpg",
            "./assets/imgbando/quangbinh3.webp",
            "./assets/imgbando/quangbinh4.webp",
            "./assets/imgbando/quangbinh5.webp",
            "./assets/imgbando/quangbinh6.webp"
  ],
  locations: ["Quảng Bình là điểm đến lý tưởng cho những ai đam mê khám phá thiên nhiên và yêu thích du lịch xanh. Với hệ thống hang động kỳ vĩ bậc nhất thế giới như Sơn Đoòng, Hang Én, Hang Tú Làn, nơi đây mang lại trải nghiệm khám phá độc đáo giữa rừng rậm nguyên sinh. Không chỉ có hệ sinh thái rừng – núi đa dạng trong Vườn quốc gia Phong Nha – Kẻ Bàng (Di sản Thiên nhiên Thế giới), Quảng Bình còn sở hữu những dòng suối trong lành, thác nước hùng vĩ và bãi biển hoang sơ như Nhật Lệ, Bảo Ninh. Du khách có thể tham gia các hoạt động như trekking, cắm trại sinh thái, chèo kayak, và tham quan làng nghề truyền thống, tìm hiểu văn hóa địa phương một cách bền vững. Với mục tiêu bảo tồn tài nguyên và phát triển du lịch gắn với môi trường, Quảng Bình đang từng bước trở thành biểu tượng của du lịch sinh thái tại miền Trung Việt Nam."]
  },
quangtri: {
  name: ["Quảng Trị"],
  face: ["./assets/imgbando/quangtri1.jpg"],
  images: ["./assets/imgbando/quangtri1.jpg",
            "./assets/imgbando/quangtri2.jpg",
            "./assets/imgbando/quangtri3.jpg",
            "./assets/imgbando/quangtri4.jpg",
            "./assets/imgbando/quangtri5.jpg",
            "./assets/imgbando/quangtri6.jpg"
  ],
  locations: ["Quảng Trị – mảnh đất mang đậm dấu ấn lịch sử – đang từng bước khai thác tiềm năng du lịch xanh thông qua hệ sinh thái tự nhiên phong phú và văn hóa đặc sắc. Với đường bờ biển dài và nguyên sơ, các bãi biển như Cửa Tùng, Cửa Việt đang được phát triển theo hướng sinh thái, hạn chế bê tông hóa, tăng cường không gian cây xanh. Vùng núi phía tây với các điểm như Khe Sanh, thác Tà Puồng, khu bảo tồn thiên nhiên Bắc Hướng Hóa là nơi lý tưởng cho các hoạt động khám phá rừng rậm, tắm suối, và tìm hiểu đời sống người Vân Kiều, Pa Cô. Các tour du lịch cộng đồng tại huyện Hướng Hóa đang thu hút khách nước ngoài với trải nghiệm trồng cây, hái cà phê và tham gia các nghi lễ dân tộc. Quảng Trị cũng nỗ lực bảo vệ hệ sinh thái ven biển bằng cách khuyến khích mô hình homestay xanh, sử dụng vật liệu thân thiện môi trường. Từ một vùng đất từng mang nhiều dấu tích chiến tranh, Quảng Trị đang chuyển mình trở thành điểm đến du lịch xanh đầy hứa hẹn ở miền Trung."]
  },
thuathienhue: {
  name: ["Thừa Thiên Huế"],
  face: ["./assets/imgbando/hue1.jpg"],
  images: ["./assets/imgbando/hue1.jpg",
            "./assets/imgbando/hue2.jpg",
            "./assets/imgbando/hue3.jpg",
            "./assets/imgbando/hue4.jpg",
            "./assets/imgbando/hue5.jpg",
            "./assets/imgbando/hue6.jpg"
  ],
  locations: ["Thừa Thiên Huế – vùng đất cố đô – đang vươn mình mạnh mẽ theo hướng phát triển du lịch bền vững và thân thiện với môi trường. Bên cạnh những di tích hoàng cung, lăng tẩm triều Nguyễn, Huế còn có rất nhiều điểm đến sinh thái hấp dẫn như đầm Lập An, vịnh Lăng Cô, phá Tam Giang, và rừng ngập mặn Rú Chá – nơi du khách có thể đạp xe, chèo SUP hoặc tham gia tour bảo tồn môi trường. Khu vực đồi núi phía tây như A Lưới cũng là điểm đến du lịch xanh nổi bật, nơi có khí hậu mát mẻ, thác nước tự nhiên và văn hóa truyền thống người Tà Ôi, Pa Cô được gìn giữ. Tỉnh cũng đang triển khai các mô hình du lịch cộng đồng, nghỉ dưỡng sinh thái và nông nghiệp hữu cơ tại vùng ven thành phố. Những hoạt động như thu gom rác, phân loại rác tại nguồn và khuyến khích sử dụng xe đạp, xe điện tại các điểm du lịch là minh chứng rõ ràng cho sự chuyển mình của Huế theo hướng du lịch xanh – du lịch của tương lai."]
  },
quangnam: {
  name: ["Quảng Nam"],
  face: ["./assets/imgbando/quangnam1.webp"],
  images: ["./assets/imgbando/quangnam1.webp",
            "./assets/imgbando/quangnam2.webp",
            "./assets/imgbando/quangnam3.webp",
            "./assets/imgbando/quangnam4.webp",
            "./assets/imgbando/quangnam5.webp",
            "./assets/imgbando/quangnam6.webp"
  ],
  locations: ["Quảng Nam không chỉ nổi tiếng với phố cổ Hội An di sản, mà còn là một điểm sáng trong phát triển du lịch xanh kết hợp bảo tồn di sản và sinh thái tự nhiên. Những làng quê yên bình như làng rau Trà Quế, làng gốm Thanh Hà, Cẩm Thanh với rừng dừa nước Bảy Mẫu đã và đang trở thành điểm đến xanh thân thiện với môi trường, nơi du khách có thể trải nghiệm trồng rau, chèo thuyền thúng, làm gốm và thưởng thức ẩm thực bản địa. Ở phía tây, Quảng Nam còn có các khu du lịch sinh thái như thác Grăng, suối nước nóng Tây Viên, và đặc biệt là khu bảo tồn thiên nhiên Sông Thanh, nơi du khách có thể trekking trong rừng nguyên sinh, khám phá hệ sinh thái đa dạng. Quảng Nam cũng đang triển khai mô hình du lịch cộng đồng gắn với người Cơ Tu và các chương trình giảm thiểu rác thải nhựa tại các điểm tham quan. Với sự kết hợp hài hòa giữa thiên nhiên, di sản và văn hóa bản địa, Quảng Nam xứng đáng là một điểm đến du lịch xanh hàng đầu miền Trung."]
  },
kontum: {
  name: ["Kon Tum"],
  face: ["./assets/imgbando/kontum1.jpg"],
  images: ["./assets/imgbando/kontum1.jpg",
            "./assets/imgbando/kontum2.jpg",
            "./assets/imgbando/kontum3.jpg",
            "./assets/imgbando/kontum4.jpg",
            "./assets/imgbando/kontum5.jpg",
            "./assets/imgbando/kontum6.jpg"
  ],
  locations: ["Nằm ở phía bắc Tây Nguyên, Kon Tum sở hữu vẻ đẹp nguyên sơ, yên bình với những cánh rừng bạt ngàn, sông suối trong lành và bản sắc văn hóa dân tộc đậm đà. Khu bảo tồn thiên nhiên Ngọc Linh, nơi có đỉnh núi cao nhất miền Trung, là địa điểm lý tưởng cho trekking và khám phá hệ động thực vật quý hiếm. Sông Đăk Bla uốn lượn qua trung tâm thành phố cũng là điểm nhấn xanh giữa lòng đô thị, nơi du khách có thể chèo thuyền kayak, ngắm hoàng hôn hay tham gia dọn rác sông trong các chương trình du lịch có trách nhiệm. Về văn hóa, Kon Tum nổi bật với nhà rông Kon Klor, các buôn làng Ba Na truyền thống, và các mô hình du lịch cộng đồng ở huyện Kon Plông – nơi phát triển nông nghiệp hữu cơ và dịch vụ lưu trú thân thiện với môi trường. Với khí hậu mát mẻ, tài nguyên sinh thái phong phú và cộng đồng dân cư thân thiện, Kon Tum đang là điểm đến tiêu biểu của du lịch xanh bền vững ở Tây Nguyên."]
  },
quangngai: {
  name: ["Quảng Ngãi"],
  face: ["./assets/imgbando/quangngai1.jpg"],
  images: ["./assets/imgbando/quangngai1.jpg",
            "./assets/imgbando/quangngai2.jpg",
            "./assets/imgbando/quangngai3.jpg",
            "./assets/imgbando/quangngai4.jpg",
            "./assets/imgbando/quangngai5.jpg",
            "./assets/imgbando/quangngai6.jpg"
  ],
  locations: ["Quảng Ngãi – vùng đất có bề dày lịch sử và văn hóa – đang chuyển mình mạnh mẽ theo hướng phát triển du lịch xanh. Với bờ biển dài và nhiều bãi biển đẹp như Sa Huỳnh, Mỹ Khê, Lý Sơn, tỉnh đã chú trọng bảo tồn cảnh quan thiên nhiên và phát triển các hoạt động du lịch sinh thái biển. Các tour lặn ngắm san hô, tham quan đảo bằng thuyền gỗ truyền thống và các hoạt động bảo vệ môi trường biển đang ngày càng phổ biến. Không chỉ có biển, Quảng Ngãi còn nổi bật với các khu sinh thái như rừng tràm Trà Câu, suối Đá Bàn, và các di tích văn hóa Chăm cổ như tháp Mỹ Sơn. Các làng nghề truyền thống như làm gốm, dệt thổ cẩm cũng đang phát triển mô hình du lịch cộng đồng, giúp khách tham quan có thể trải nghiệm đời sống bản địa. Với sự kết hợp giữa bảo tồn thiên nhiên và phát triển cộng đồng, Quảng Ngãi đang trở thành điểm đến hấp dẫn cho du lịch xanh tại miền Trung."]
},
gialai: {
  name: ["Gia Lai"],
  face: ["./assets/imgbando/gialai1.jpg"],
  images: ['./assets/imgbando/gialai1.jpg',
            "./assets/imgbando/gialai2.jpg",
            "./assets/imgbando/gialai3.jpg",
            "./assets/imgbando/gialai4.jpg",
            "./assets/imgbando/gialai5.jpg",
            "./assets/imgbando/gialai6.jpg"
  ],
  locations: ["Gia Lai – mảnh đất đại ngàn với khí hậu mát mẻ quanh năm – là một điểm đến lý tưởng cho du khách yêu thích du lịch xanh giữa núi rừng Tây Nguyên. Nổi bật nhất là Biển Hồ (hồ T’Nưng) – một hồ nước tự nhiên tuyệt đẹp nằm giữa cao nguyên Pleiku, mang vẻ đẹp thanh bình và không khí trong lành. Du khách có thể đi bộ dọc các con đường rợp bóng thông, hít thở không khí sạch và tham quan các vườn cà phê hữu cơ trải dài trên đồi. Thác Phú Cường, rừng thông Hà Tam, và núi lửa Chư Đăng Ya cũng là những điểm du lịch sinh thái được yêu thích. Ngoài ra, Gia Lai còn có nhiều buôn làng người Jrai và Bahnar, nơi du khách có thể tham gia trải nghiệm làm gốm, dệt thổ cẩm, và tìm hiểu tín ngưỡng nhà rông đặc trưng. Chính quyền địa phương đang khuyến khích phát triển mô hình du lịch cộng đồng và du lịch nông nghiệp hữu cơ, vừa tạo sinh kế cho người dân, vừa bảo vệ tài nguyên thiên nhiên. Gia Lai vì thế là lựa chọn tuyệt vời cho hành trình khám phá bền vững và gần gũi với tự nhiên."]
  },
binhdinh: {
  name: ["Bình Định"],
  face: ["./assets/imgbando/binhdinh1.jpg"],
  images: [ "./assets/imgbando/binhdinh1.jpg",
            "./assets/imgbando/binhdinh2.jpg",
            "./assets/imgbando/binhdinh3.jpg",
            "./assets/imgbando/binhdinh4.jpg",
            "./assets/imgbando/binhdinh5.jpg",
            "./assets/imgbando/binhdinh6.jpg" ],
  locations: ["Bình Định – vùng đất võ và thi ca – đang ngày càng trở thành điểm đến hấp dẫn với định hướng phát triển du lịch xanh gắn với bảo tồn văn hóa và thiên nhiên. Với đường bờ biển dài cùng nhiều bãi biển nguyên sơ như Kỳ Co, Eo Gió, Hòn Khô, tỉnh đã triển khai nhiều hoạt động du lịch sinh thái biển như lặn ngắm san hô, tham quan đảo bằng thuyền gỗ truyền thống và tổ chức chương trình bảo vệ môi trường biển cho du khách. Không chỉ có biển, Bình Định còn nổi bật với khu sinh thái Trung Lương, rừng dừa Tam Quan, và hệ thống tháp Chăm cổ mang giá trị lịch sử gắn liền với thiên nhiên xung quanh. Các làng nghề như làm nón ngựa, rượu Bàu Đá, hay đan lát ở An Nhơn cũng đang phát triển mô hình du lịch cộng đồng, giúp khách tham quan có thể trải nghiệm đời sống bản địa. Việc bảo tồn các không gian xanh kết hợp khai thác du lịch một cách bền vững đang biến Bình Định thành điểm đến vừa thư giãn, vừa giàu giá trị sinh thái và văn hóa."]
  },
phuyen: {
  name: ["Phú Yên"],
  face: ["./assets/imgbando/phuyen1.jpeg"],
  images: ["./assets/imgbando/phuyen1.jpeg",
            "./assets/imgbando/phuyen2.jpg",
            "./assets/imgbando/phuyen3.jpg",
            "./assets/imgbando/phuyen4.jpg",
            "./assets/imgbando/phuyen5.jpg",
            "./assets/imgbando/phuyen6.jpg"
  ],
  locations: ["Phú Yên – miền đất yên bình ven biển Nam Trung Bộ – là điểm đến đầy tiềm năng cho du lịch xanh nhờ vào thiên nhiên đa dạng và chưa bị khai thác quá mức. Với bờ biển dài, các bãi biển hoang sơ như Bãi Môn, Bãi Xép, Vịnh Xuân Đài hay Gành Đá Đĩa đều mang vẻ đẹp tự nhiên, ít chịu tác động của đô thị hóa. Du khách đến Phú Yên có thể lặn ngắm san hô, đi thuyền kayak, hay đơn giản là thư giãn bên những làng chài thanh bình. Ngoài ra, vùng núi phía tây tỉnh với hồ thủy điện Sông Hinh, suối nước nóng Phú Sen, và các cánh rừng nguyên sinh cũng là nơi phù hợp để phát triển du lịch sinh thái rừng – núi. Các mô hình du lịch cộng đồng kết hợp trải nghiệm nghề truyền thống, nông trại hữu cơ, và thưởng thức ẩm thực địa phương đang ngày càng phổ biến, mang đến góc nhìn mới về du lịch bền vững. Phú Yên không ồn ào, không xô bồ, mà nhẹ nhàng và xanh mát – là điểm dừng chân tuyệt vời cho những ai yêu thiên nhiên và tìm kiếm sự thư giãn thực sự."]
  },
daklak: {
  name: ["Đắk Lắk"],
  face: ["./assets/imgbando/daklak1.webp"],
  images: ["./assets/imgbando/daklak1.webp",
            "./assets/imgbando/daklak2.jpg",
            "./assets/imgbando/daklak3.jpg",
            "./assets/imgbando/daklak4.jpg",
            "./assets/imgbando/daklak5.webp",
            "./assets/imgbando/daklak6.jpg"
  ],
  locations: ["Là trái tim của vùng Tây Nguyên, Đắk Lắk nổi bật với cảnh quan rừng núi hùng vĩ, thác nước hoang sơ và bản sắc văn hóa dân tộc đặc sắc, rất phù hợp để phát triển du lịch xanh. Điểm nhấn đặc biệt là vườn quốc gia Yok Đôn, nơi du khách có thể trải nghiệm tour “du lịch không cưỡi voi” – hình thức thân thiện với động vật, đi bộ cùng voi qua rừng khộp, tìm hiểu về hệ sinh thái và công tác bảo tồn. Các thác Dray Nur, Dray Sap, hay hồ Lắk cũng là những địa điểm thu hút khách thích khám phá thiên nhiên nguyên sơ, chèo thuyền, cắm trại và sống hòa mình giữa rừng núi. Ngoài ra, du lịch cộng đồng tại các buôn làng Ê Đê, M’nông mang đến trải nghiệm độc đáo về văn hóa bản địa gắn với lối sống gần gũi thiên nhiên. Đắk Lắk cũng đang thúc đẩy phát triển nông nghiệp sạch và mô hình du lịch nông trại như trồng cà phê hữu cơ, giúp du khách hiểu hơn về sản phẩm đặc trưng của vùng. Với sự kết hợp giữa thiên nhiên hùng vĩ và giá trị văn hóa bền vững, Đắk Lắk là lựa chọn lý tưởng cho hành trình du lịch xanh có chiều sâu."]
  },
khanhhoa: {
  name: ["Khánh Hòa"],
  face: ["./assets/imgbando/khanhhoa1.jpg"],
  images: ["./assets/imgbando/khanhhoa1.jpg",
            "./assets/imgbando/khanhhoa2.jpg",
            "./assets/imgbando/khanhhoa3.jpg",
            "./assets/imgbando/khanhhoa4.jpg",
            "./assets/imgbando/khanhhoa5.jpg",
            "./assets/imgbando/khanhhoa6.jpg"
  ],
  locations: ["Khánh Hòa không chỉ nổi tiếng với vịnh biển Nha Trang xinh đẹp mà còn là điểm đến tiêu biểu cho du lịch xanh ven biển kết hợp sinh thái rừng – biển. Vịnh Nha Trang là một trong những vịnh đẹp nhất thế giới, với làn nước trong xanh, hệ sinh thái san hô phong phú và nhiều đảo hoang sơ như Hòn Mun, Hòn Tằm, Hòn Miễu... Đây là khu vực được quy hoạch làm khu bảo tồn biển đầu tiên của Việt Nam, phù hợp cho du khách yêu thích lặn biển, khám phá thiên nhiên dưới nước và tham gia các hoạt động bảo vệ sinh vật biển. Ngoài ra, Khánh Hòa còn có những điểm đến sinh thái khác như Suối Ba Hồ, rừng nguyên sinh Hòn Bà, hay vùng nông nghiệp hữu cơ Cam Lâm đang phát triển mô hình du lịch cộng đồng và giáo dục môi trường. Tỉnh cũng chú trọng triển khai các khu nghỉ dưỡng xanh, khuyến khích sử dụng năng lượng tái tạo và hạn chế nhựa dùng một lần. Với định hướng phát triển bền vững, Khánh Hòa không chỉ là nơi để nghỉ dưỡng mà còn là điểm đến trải nghiệm gắn liền với trách nhiệm môi trường."]
  },
lamdong: {
  name: ["Lâm Đồng"],
  face: ["./assets/imgbando/lamdong1.jpg"],
  images: ["./assets/imgbando/lamdong1.jpg",
            "./assets/imgbando/lamdong2.jpg",
            "./assets/imgbando/lamdong3.jpg",
            "./assets/imgbando/lamdong4.jpg",
            "./assets/imgbando/lamdong5.jpg",
            "./assets/imgbando/lamdong6.jpg"
  ],
  locations: ["Lâm Đồng – thủ phủ của vùng cao nguyên Nam Tây Nguyên – từ lâu đã trở thành điểm đến lý tưởng cho du lịch xanh và nghỉ dưỡng sinh thái. Trung tâm của tỉnh là Đà Lạt, thành phố ngàn hoa với khí hậu ôn hòa, rừng thông xanh ngút ngàn và hồ nước trong vắt, rất phù hợp cho các hoạt động như đạp xe, đi bộ đường dài, cắm trại, chèo thuyền hay thiền định giữa thiên nhiên. Ngoài ra, các khu vực ngoại thành như Lạc Dương, Đơn Dương, Đạ Tẻh đang phát triển mạnh mô hình nông trại hữu cơ, farmstay, homestay cộng đồng, nơi du khách có thể tự tay trồng rau, thu hoạch cà phê, thưởng thức bữa ăn “từ nông trại đến bàn ăn”. Tỉnh cũng chú trọng phát triển năng lượng tái tạo, giảm sử dụng nhựa, và khuyến khích du khách tham gia các hoạt động giữ gìn thiên nhiên như trồng cây, làm vườn. Với lợi thế về thiên nhiên và cam kết phát triển bền vững, Lâm Đồng đang là trung tâm của du lịch xanh tại miền Trung – Tây Nguyên Việt Nam."]
  },
ninhthuan: {
  name: ["Ninh Thuận"],
  face: ["./assets/imgbando/ninhthuan1.jpg"],
  images: ["./assets/imgbando/ninhthuan1.jpg",
            "./assets/imgbando/ninhthuan2.jpg",
            "./assets/imgbando/ninhthuan3.jpg",
            "./assets/imgbando/ninhthuan4.gif",
            "./assets/imgbando/ninhthuan5.jpg",
            "./assets/imgbando/ninhthuan6.jpg"],
  locations: ["Ninh Thuận là tỉnh ven biển Nam Trung Bộ, nổi tiếng với vẻ đẹp hoang sơ, khô cằn nhưng lại đầy sức sống – là nơi lý tưởng để phát triển du lịch xanh mang màu sắc đặc trưng. Với đường bờ biển dài và sạch, các bãi biển như Ninh Chữ, Vĩnh Hy, Bãi Hòi trở thành điểm đến thân thiện với môi trường, chưa bị khai thác quá mức. Đặc biệt, vườn quốc gia Núi Chúa, được UNESCO công nhận là Khu dự trữ sinh quyển thế giới, là nơi hội tụ cả rừng khô hạn, san hô biển, và hệ sinh thái rừng đặc biệt quý hiếm. Du khách đến đây có thể trekking, khám phá thiên nhiên, học hỏi về bảo tồn sinh học và trải nghiệm hoạt động sinh thái biển. Ngoài ra, các làng nghề truyền thống của người Chăm, trang trại nho, táo và mô hình nông nghiệp sạch cũng là điểm nhấn đặc sắc, gắn với văn hóa địa phương và du lịch cộng đồng. Với chiến lược phát triển du lịch gắn bảo tồn, Ninh Thuận là điểm đến hấp dẫn cho hành trình khám phá thiên nhiên nguyên sơ."]
  },
tayninh: {
  name: ["Tây Ninh"],
  face: ["./assets/imgbando/tayninh1.jpg"],
  images: ["./assets/imgbando/tayninh1.jpg",
            "./assets/imgbando/tayninh2.jpg",
            "./assets/imgbando/tayninh3.jpg",
            "./assets/imgbando/tayninh4.jpg",
            "./assets/imgbando/tayninh5.jpg",
            "./assets/imgbando/tayninh6.jpg"],
  locations: ["Tây Ninh là một trong những điểm đến nổi bật của du lịch xanh miền Đông Nam Bộ, kết hợp giữa cảnh quan thiên nhiên kỳ thú và bản sắc văn hóa đặc trưng. Tâm điểm của du lịch sinh thái tại đây là Núi Bà Đen, được mệnh danh là “nóc nhà Nam Bộ” với hệ thống cáp treo hiện đại nhưng vẫn giữ nguyên cảnh quan rừng núi xanh mát, phù hợp cho các hoạt động trekking, cắm trại và khám phá thiên nhiên. Ngoài ra, hồ Dầu Tiếng với diện tích mặt nước rộng lớn, trong lành cũng là nơi lý tưởng để chèo SUP, cắm trại ven hồ và trải nghiệm cuộc sống gần gũi với thiên nhiên. Tây Ninh còn nổi bật với các mô hình nông nghiệp công nghệ cao, du lịch cộng đồng tại các xã nông thôn, nơi du khách có thể tham gia thu hoạch rau củ, tìm hiểu quy trình trồng trọt sạch và thưởng thức các sản phẩm địa phương hữu cơ. Với định hướng phát triển du lịch không rác thải và thân thiện với môi trường, Tây Ninh đang trở thành điểm đến lý tưởng cho những ai yêu thích khám phá thiên nhiên một cách bền vững."]
  },
dongnai: {
  name: ["Đồng Nai"],
  face: ["./assets/imgbando/dongnai1.webp"],
  images: ["./assets/imgbando/dongnai1.webp",
            "./assets/imgbando/dongnai2.webp",
            "./assets/imgbando/dongnai3.jpeg",
            "./assets/imgbando/dongnai4.webp",
            "./assets/imgbando/dongnai5.webp",
            "./assets/imgbando/dongnai6.webp"],
  locations: ["Là tỉnh có diện tích rừng lớn và sở hữu hệ sinh thái đa dạng bậc nhất miền Nam, Đồng Nai là một trong những điểm sáng về phát triển du lịch sinh thái – du lịch xanh ở Việt Nam. Vườn quốc gia Cát Tiên, di sản thiên nhiên ASEAN, là điểm đến nổi bật với rừng già, suối đá, các tuyến trekking xuyên rừng và cơ hội chiêm ngưỡng động vật hoang dã như vượn, nai, chim quý hiếm. Nơi đây không chỉ là điểm đến du lịch mà còn là trung tâm nghiên cứu và giáo dục bảo tồn thiên nhiên. Ngoài ra, Đồng Nai còn có khu du lịch Bửu Long, hồ Trị An, thác Giang Điền, hay khu bảo tồn thiên nhiên Tà Lài – nơi du khách có thể trải nghiệm văn hóa của người Mạ, người Chơ-ro kết hợp nghỉ dưỡng sinh thái. Tỉnh đang phát triển mạnh các mô hình nông trại xanh, du lịch cộng đồng, homestay thân thiện môi trường, thúc đẩy du lịch không rác thải và khuyến khích người dân cùng tham gia bảo vệ rừng. Đồng Nai là lựa chọn lý tưởng cho du khách muốn hòa mình vào thiên nhiên và tìm kiếm một kỳ nghỉ trọn vẹn về cả thể chất lẫn tinh thần."]
  },
binhthuan: {
  name: ["Bình Thuận"],
  face: ["./assets/imgbando/binhthuan1.jpg"],
  images: ["./assets/imgbando/binhthuan1.jpg",
            "./assets/imgbando/binhthuan2.jpg",
            "./assets/imgbando/binhthuan3.jpg",
            "./assets/imgbando/binhthuan4.jpg",
            "./assets/imgbando/binhthuan5.jpg",
            "./assets/imgbando/binhthuan6.jpg"],
  locations: ["Bình Thuận là tỉnh ven biển miền Trung Nam Bộ nổi bật với cảnh quan thiên nhiên hoang sơ, những bãi biển trải dài và đồi cát đặc trưng. Ngoài những điểm đến nổi tiếng như Mũi Né, Hòn Rơm, Bãi đá Cổ Thạch, Bình Thuận còn đang phát triển mạnh mẽ các mô hình du lịch xanh, nghỉ dưỡng thân thiện với môi trường. Một trong những điểm tiêu biểu là khu bảo tồn thiên nhiên Tà Cú, nơi có rừng nguyên sinh, hệ động thực vật phong phú và không khí mát mẻ quanh năm. Du khách có thể leo núi, khám phá hang động và thăm chùa Linh Sơn Trường Thọ nằm trên đỉnh. Ngoài ra, tỉnh còn có các trang trại nho, thanh long hữu cơ, kết hợp tham quan và trải nghiệm nông nghiệp xanh. Bình Thuận đang khuyến khích phát triển các khu nghỉ dưỡng sử dụng năng lượng mặt trời, xử lý nước thải và rác thải theo hướng sinh thái. Đây là một trong những địa phương đi đầu trong việc kết hợp bảo tồn thiên nhiên với phát triển du lịch, đem đến cho du khách những trải nghiệm an lành, gần gũi và bền vững."]
  },
longan: {
  name: ["Long An"],
  face: ["./assets/imgbando/longan1.jpg"],
  images: ["./assets/imgbando/longan1.jpg",
            "./assets/imgbando/longan2.jpg",
            "./assets/imgbando/longan3.jpg",
            "./assets/imgbando/longan4.jpg",
            "./assets/imgbando/longan5.jpg",
            "./assets/imgbando/longan6.jpg"],
  locations: ["Long An là tỉnh cửa ngõ kết nối miền Đông và miền Tây Nam Bộ, sở hữu hệ sinh thái đa dạng với kênh rạch, đồng ruộng và rừng ngập mặn. Nơi đây đang nổi lên như một điểm đến du lịch xanh hấp dẫn, đặc biệt với khu bảo tồn đất ngập nước Láng Sen – được mệnh danh là “Đồng Tháp Mười thu nhỏ”. Đây là nơi sinh sống của hàng trăm loài chim nước, động thực vật quý hiếm, rất thích hợp cho các hoạt động trải nghiệm thiên nhiên như quan sát chim, chụp ảnh cảnh quan, hay đi xuồng len lỏi giữa rừng tràm và sen. Long An còn có các làng nghề truyền thống như làng chiếu, làng trống Bình An, nơi du khách có thể trải nghiệm văn hóa địa phương một cách gần gũi. Các mô hình homestay sinh thái và nông trại hữu cơ cũng được chú trọng phát triển, góp phần mang đến trải nghiệm nghỉ dưỡng thân thiện với môi trường. Với định hướng du lịch không rác thải và bảo vệ nguồn nước, Long An đang trở thành điểm đến lý tưởng cho những ai yêu thích du lịch chậm, gắn kết với thiên nhiên và cộng đồng."]
  },
bariavungtau: {
  name: ["Bà Rịa – Vũng Tàu"],
  face: ["./assets/imgbando/vungtau1.jpg"],
  images: ["./assets/imgbando/vungtau1.jpg",
            "./assets/imgbando/vungtau2.jpg",
            "./assets/imgbando/vungtau3.jpg",
            "./assets/imgbando/vungtau4.jpg",
            "./assets/imgbando/vungtau5.jpg",
            "./assets/imgbando/vungtau6.webp"],
  locations: ["Bà Rịa – Vũng Tàu không chỉ nổi tiếng với những bãi biển đẹp mà còn là điểm đến lý tưởng cho du lịch xanh nhờ vào sự kết hợp hài hòa giữa biển, rừng và núi. Bên cạnh các điểm nghỉ dưỡng quen thuộc như bãi Sau, bãi Trước, tỉnh còn sở hữu nhiều khu sinh thái xanh mát như rừng nguyên sinh Bình Châu – Phước Bửu, nơi du khách có thể cắm trại, đi bộ xuyên rừng hoặc thư giãn trong không gian thiên nhiên tĩnh lặng. Khu suối nước nóng Bình Châu cũng là điểm đến thư giãn thân thiện với môi trường, thu hút du khách yêu thích nghỉ dưỡng tự nhiên. Ngoài ra, Bà Rịa – Vũng Tàu còn có nhiều mô hình nông trại xanh, homestay ven biển, làng chài sinh thái nơi du khách có thể trải nghiệm cuộc sống người dân địa phương. Tỉnh đang nỗ lực phát triển hạ tầng du lịch bền vững, khuyến khích du lịch không rác thải, sử dụng năng lượng tái tạo và bảo vệ hệ sinh thái biển. Đây là lựa chọn tuyệt vời cho những ai muốn tìm kiếm kỳ nghỉ xanh và cân bằng."]
  },
angiang: {
  name: ["An Giang"],
  face: ["./assets/imgbando/angiang1.webp"],
  images: [ "./assets/imgbando/angiang1.webp",
            "./assets/imgbando/angiang2.webp",
            "./assets/imgbando/angiang3.webp",
            "./assets/imgbando/angiang4.webp",
            "./assets/imgbando/angiang5.webp",
            "./assets/imgbando/angiang6.webp"],
  locations: ["An Giang nằm ở vùng biên giới Tây Nam, là nơi giao thoa giữa núi, đồng bằng và sông nước, rất giàu tiềm năng phát triển du lịch xanh. Một trong những biểu tượng du lịch sinh thái nổi bật của tỉnh là rừng tràm Trà Sư – khu rừng ngập nước nguyên sinh với hệ sinh thái đa dạng, là nơi trú ngụ của hàng trăm loài chim, cá và động thực vật quý hiếm. Đi xuồng máy xuyên qua rừng trong mùa nước nổi là trải nghiệm đặc biệt, giúp du khách cảm nhận trọn vẹn vẻ đẹp hoang sơ, thanh bình. Ngoài ra, núi Cấm, núi Sam, kênh Vĩnh Tế, hay các làng Chăm ven sông cũng là những điểm đến thú vị cho du khách yêu thiên nhiên và muốn khám phá văn hóa bản địa. An Giang còn phát triển nhiều mô hình du lịch cộng đồng, homestay sinh thái gắn với sản xuất nông nghiệp sạch. Với định hướng bền vững, tỉnh chú trọng giảm thiểu rác thải, bảo vệ tài nguyên nước và tạo sinh kế cho người dân. An Giang đang dần trở thành biểu tượng du lịch sinh thái kết hợp văn hóa độc đáo ở miền Tây Nam Bộ."]
  },
dongthap: {
  name: ["Đồng Tháp"],
  face: ["./assets/imgbando/dongthap1.jpg"],
  images: ["./assets/imgbando/dongthap1.jpg",
            "./assets/imgbando/dongthap2.jpg",
            "./assets/imgbando/dongthap3.jpg",        
            "./assets/imgbando/dongthap4.jpg",
            "./assets/imgbando/dongthap5.jpg",
            "./assets/imgbando/dongthap6.jpg"
  ],
  locations: ["Đồng Tháp là một trong những địa phương đi đầu trong phát triển du lịch xanh và bền vững tại đồng bằng sông Cửu Long. Tỉnh nổi tiếng với những cánh đồng sen bát ngát, đặc biệt là Khu du lịch Đồng sen Tháp Mười, nơi du khách có thể chèo xuồng ngắm sen, thưởng thức ẩm thực dân dã và tận hưởng hương thơm thanh khiết của loài hoa đặc trưng miền Tây. Vườn quốc gia Tràm Chim là một điểm đến nổi bật khác, được công nhận là khu Ramsar của thế giới, với hàng trăm loài chim nước quý hiếm, trong đó có sếu đầu đỏ. Du lịch sinh thái tại đây gắn liền với bảo tồn thiên nhiên, giáo dục môi trường và hoạt động cộng đồng. Ngoài ra, các khu du lịch miệt vườn, làng hoa Sa Đéc, làng nghề truyền thống… cũng mang đến nhiều trải nghiệm phong phú. Đồng Tháp đang hướng đến mô hình du lịch không rác thải, sử dụng năng lượng tái tạo và nâng cao ý thức du khách trong việc bảo vệ môi trường, xứng đáng là điểm đến lý tưởng cho hành trình khám phá du lịch xanh."]
  },
tiengiang: {
  name: ["Tiền Giang"],
  face: ["./assets/imgbando/tienggiang1.jpg"],
  images: ["./assets/imgbando/tienggiang1.jpg",
            "./assets/imgbando/tienggiang2.jpg",
            "./assets/imgbando/tienggiang3.jpg",
            "./assets/imgbando/tienggiang4.jpg",
            "./assets/imgbando/tienggiang5.jpg",
            "./assets/imgbando/tienggiang6.jpg"],
  locations: ["Tiền Giang nằm dọc theo sông Tiền, là cửa ngõ vào miền Tây sông nước, nơi hội tụ đầy đủ yếu tố để phát triển du lịch xanh kết hợp nghỉ dưỡng, khám phá và trải nghiệm văn hóa. Du khách đến Tiền Giang không thể bỏ qua cù lao Thới Sơn – điểm du lịch sinh thái nổi tiếng với những con rạch nhỏ, vườn trái cây xanh mát, đờn ca tài tử và trải nghiệm chèo xuồng ba lá. Ngoài ra, vườn quốc gia Tràm Chim Tân Phước là nơi tuyệt vời để quan sát chim di cư, khám phá hệ sinh thái rừng ngập nước và tận hưởng bầu không khí yên bình. Tiền Giang cũng phát triển các khu du lịch cộng đồng, nơi du khách được sống cùng người dân địa phương, học cách làm bánh truyền thống, chăm sóc cây trái và cảm nhận lối sống chan hòa với thiên nhiên. Với định hướng bảo tồn và phát huy thế mạnh nông nghiệp, sinh thái, Tiền Giang đang trở thành một trong những điểm đến tiêu biểu cho du lịch xanh, thân thiện và bền vững tại đồng bằng sông Cửu Long."]
  },
kiengiang: {
  name: ["Kiên Giang"],
  face: ["./assets/imgbando/kiengiang1.jpg"],
  images: ["./assets/imgbando/kiengiang1.jpg",
            "./assets/imgbando/kiengiang2.jpg",
            "./assets/imgbando/kiengiang3.jpg",
            "./assets/imgbando/kiengiang4.jpg",
            "./assets/imgbando/kiengiang5.jpg",
            "./assets/imgbando/kiengiang6.jpg"],
  locations: ["Kiên Giang là một trong những tỉnh có tiềm năng du lịch xanh lớn nhất tại miền Tây Nam Bộ, sở hữu cảnh quan đa dạng từ biển đảo, rừng nguyên sinh đến hệ sinh thái ngập mặn. Nơi đây nổi bật với quần đảo Nam Du, đảo Hải Tặc và đặc biệt là Phú Quốc – nơi có rừng quốc gia Phú Quốc với hệ động thực vật phong phú, được UNESCO công nhận là khu dự trữ sinh quyển thế giới. Du khách có thể trekking xuyên rừng, tắm suối, lặn biển ngắm san hô hoặc tham gia các hoạt động bảo tồn biển. Ngoài ra, vùng đất liền Kiên Giang cũng có những điểm du lịch sinh thái hấp dẫn như rừng tràm U Minh Thượng, hồ nước ngọt Hòn Đất, hay các làng nghề làm nước mắm truyền thống. Tỉnh đang chú trọng phát triển mô hình du lịch cộng đồng và sinh thái gắn với bảo vệ môi trường, khuyến khích sử dụng năng lượng tái tạo, vật liệu xanh và giảm thiểu rác thải nhựa. Kiên Giang không chỉ mang đến vẻ đẹp hoang sơ mà còn là hình mẫu trong phát triển du lịch bền vững tại Việt Nam."]
  },
vinhlong: {
  name: ["Vĩnh Long"],
  face: ["./assets/imgbando/vinhlong1.webp"],
  images: ["./assets/imgbando/vinhlong1.webp",
            "./assets/imgbando/vinhlong2.webp",
            "./assets/imgbando/vinhlong3.webp",
            "./assets/imgbando/vinhlong4.webp",
            "./assets/imgbando/vinhlong5.webp",
            "./assets/imgbando/vinhlong6.webp"],
  locations: ["Vĩnh Long nằm giữa sông Tiền và sông Hậu, là trái tim của vùng đồng bằng sông Cửu Long, nơi nổi bật với cảnh quan thiên nhiên hiền hòa, hệ thống kênh rạch chằng chịt và những miệt vườn trù phú. Đây là điểm đến lý tưởng cho những ai muốn trải nghiệm du lịch xanh và nghỉ dưỡng trong không gian sinh thái lành mạnh. Du khách đến Vĩnh Long có thể ghé thăm cù lao An Bình, một địa điểm nổi tiếng với các khu homestay ven sông, vườn cây ăn trái theo mùa và hoạt động đi xuồng xuyên kênh rạch. Ngoài ra, các làng nghề truyền thống như làm gốm, làm cốm hay chế biến trái cây sấy cũng thu hút du khách yêu thích trải nghiệm văn hóa bản địa. Vĩnh Long còn phát triển du lịch cộng đồng bền vững, khuyến khích người dân sử dụng vật liệu thân thiện môi trường và giữ gìn cảnh quan tự nhiên. Với sự yên bình, gần gũi và những trải nghiệm chân thật, Vĩnh Long đang dần trở thành một điểm đến hấp dẫn cho hành trình khám phá du lịch xanh ở miền Tây."]
  },
bentre: {
  name: ["Bến Tre"],
  face: ["./assets/imgbando/bentre1.jpg"],
  images: ["./assets/imgbando/bentre1.jpg",
            "./assets/imgbando/bentre2.jpg",
            "./assets/imgbando/bentre3.jpg",
            "./assets/imgbando/bentre4.jpg",
            "./assets/imgbando/bentre5.jpg",
            "./assets/imgbando/bentre6.jpg"],
  locations: ["Bến Tre, được mệnh danh là “xứ Dừa”, là điểm đến hàng đầu cho du lịch xanh ở miền Tây Nam Bộ. Với hệ thống sông ngòi chằng chịt và hàng dừa xanh mát trải dài, Bến Tre mang lại cảm giác thư thái và gần gũi thiên nhiên cho du khách ngay từ khi đặt chân đến. Các tour du lịch sinh thái tại đây thường gắn với các trải nghiệm như đi thuyền dọc sông Hàm Luông, thăm các vườn trái cây trĩu quả, và nghỉ dưỡng tại các khu homestay thân thiện với môi trường. Một số địa điểm nổi bật như cồn Phụng, cồn Quy, hay Làng du lịch sinh thái Làng Bè là lựa chọn lý tưởng cho du khách muốn hoà mình vào cuộc sống sông nước và khám phá nghề làm kẹo dừa, đan lát thủ công. Ngoài ra, Bến Tre còn chú trọng phát triển du lịch cộng đồng, nơi người dân bản địa trực tiếp hướng dẫn và phục vụ, giúp tăng thu nhập và ý thức bảo vệ môi trường. Với sự kết hợp giữa thiên nhiên tươi đẹp và hoạt động du lịch có trách nhiệm, Bến Tre là điểm đến không thể bỏ qua cho hành trình du lịch xanh tại Việt Nam."]
  },
travinh: {
  name: ["Trà Vinh"],
  face: ["./assets/imgbando/travinh1.jpg"],
  images: ["./assets/imgbando/travinh1.jpg",
            "./assets/imgbando/travinh2.jpg",
            "./assets/imgbando/travinh3.jpg"],
  locations: ["Trà Vinh nổi bật với vẻ đẹp thanh bình của miền Tây Nam Bộ cùng với sự đậm đà bản sắc văn hóa Khmer. Đây là một trong những tỉnh phát triển mạnh mô hình du lịch sinh thái và du lịch cộng đồng gắn với bảo tồn thiên nhiên và di sản văn hóa. Các khu sinh thái như rừng ngập mặn Duyên Hải, ao Bà Om hay cù lao Tân Quy là những điểm đến hấp dẫn cho những ai yêu thiên nhiên, muốn trải nghiệm không gian xanh trong lành. Du khách có thể đạp xe xuyên rừng, chèo xuồng khám phá sông nước, hay nghỉ dưỡng tại các homestay sinh thái gần các làng nghề. Trà Vinh còn có hơn 140 ngôi chùa Khmer rải khắp tỉnh, mang đậm kiến trúc đặc sắc và tạo nên sự yên bình trong không gian xanh rợp bóng cây. Các lễ hội truyền thống như Ok Om Bok, Chôl Chnăm Thmây được tổ chức thường niên, góp phần thu hút khách du lịch. Trà Vinh chính là điểm đến lý tưởng cho những ai tìm kiếm sự thư giãn, kết hợp giữa trải nghiệm văn hóa và nghỉ dưỡng sinh thái bền vững."]
  },
soctrang: {
  name: ["Sóc Trăng"],
  face: ["./assets/imgbando/soctrang1.webp"],
  images: ["./assets/imgbando/soctrang1.webp",
            "./assets/imgbando/soctrang2.webp",
            "./assets/imgbando/soctrang3.webp",
            "./assets/imgbando/soctrang4.webp",
            "./assets/imgbando/soctrang5.webp",
            "./assets/imgbando/soctrang6.webp",
  ],
  locations: ["Sóc Trăng là một tỉnh ven biển thuộc đồng bằng sông Cửu Long, nơi hội tụ đa dạng văn hóa của các dân tộc Kinh, Khmer và Hoa, cùng với thiên nhiên phong phú và hệ sinh thái đặc trưng của vùng sông nước miền Tây. Tỉnh có nhiều điểm du lịch xanh tiêu biểu như rừng ngập mặn Mỹ Thanh, vườn cò Tân Long, và cồn Mỹ Phước – nơi du khách có thể trải nghiệm cuộc sống yên bình, thưởng thức trái cây miệt vườn và khám phá hệ động thực vật tự nhiên. Ngoài ra, Sóc Trăng còn nổi bật với nhiều ngôi chùa Khmer độc đáo giữa không gian xanh mát như chùa Dơi, nơi loài dơi quạ sinh sống trong rừng cây cổ thụ ngay trong khuôn viên chùa. Du lịch cộng đồng ở Sóc Trăng cũng phát triển mạnh, tạo điều kiện cho du khách được trải nghiệm nghề truyền thống, tham gia lễ hội dân gian và hiểu hơn về phong tục bản địa. Sự kết hợp giữa sinh thái và văn hóa bản địa giúp Sóc Trăng trở thành một điểm đến lý tưởng cho du lịch xanh và du lịch trải nghiệm."]
  },
backan: {
  name: ["Bắc Kạn"],
  face: ["./assets/imgbando/backan1.jpg"],
  images: ["./assets/imgbando/backan1.jpg",
            "./assets/imgbando/backan2.jpg",
            "./assets/imgbando/backan3.jpg",],
  locations: ["Bắc Kạn là một trong những tỉnh miền núi phía Bắc nổi tiếng với vẻ đẹp hoang sơ và hệ sinh thái phong phú, rất thích hợp để phát triển du lịch xanh. Nổi bật nhất là Vườn quốc gia Ba Bể – nơi có hồ nước ngọt tự nhiên lớn nhất Việt Nam, được bao quanh bởi rừng núi hùng vĩ và những hang động kỳ thú. Hồ Ba Bể không chỉ là một danh thắng quốc gia mà còn là một khu Ramsar – vùng đất ngập nước có tầm quan trọng quốc tế. Du khách đến đây có thể tham gia chèo thuyền kayak, ngắm cảnh, khám phá hang Puông, động Hua Mạ và tìm hiểu đời sống văn hóa của đồng bào dân tộc Tày, Nùng sinh sống quanh hồ. Ngoài ra, Bắc Kạn còn phát triển các tour du lịch cộng đồng tại các bản làng, giúp du khách trải nghiệm lối sống hòa hợp với thiên nhiên. Nhờ vào sự giữ gìn cảnh quan tự nhiên và bản sắc văn hóa, Bắc Kạn đang trở thành một điểm đến hấp dẫn cho những ai yêu thích hình thức du lịch bền vững và thân thiện với môi trường."]
  },
bacgiang: {
  name: ["Bắc Giang"],
  face: ["./assets/imgbando/bacgiang1.jpg"],
  images: ["./assets/imgbando/bacgiang1.jpg",
            "./assets/imgbando/bacgiang2.jpg",
            "./assets/imgbando/bacgiang3.jpg",
            "./assets/imgbando/bacgiang4.jpg",
            "./assets/imgbando/bacgiang5.jpg",
            "./assets/imgbando/bacgiang6.jpg"],    
  locations: ["Bắc Giang nằm ở vùng Đông Bắc Việt Nam, là một điểm sáng trong phát triển du lịch sinh thái và du lịch cộng đồng. Với địa hình đồi núi và rừng nguyên sinh rộng lớn, Bắc Giang sở hữu nhiều khu bảo tồn thiên nhiên quan trọng như Khu bảo tồn Khe Rỗ (huyện Sơn Động), nơi sinh sống của nhiều loài động thực vật quý hiếm. Du khách đến đây không chỉ được hòa mình vào không gian xanh mát mà còn có thể trekking qua các con đường mòn giữa rừng, khám phá thác nước, hang động và tham gia vào các hoạt động dã ngoại thú vị. Bên cạnh đó, Bắc Giang còn có các làng nghề truyền thống gắn liền với văn hóa bản địa như làng vải thiều Lục Ngạn, nơi du khách có thể tham quan và trải nghiệm thu hoạch nông sản theo mùa. Nhờ vào sự kết hợp giữa cảnh quan thiên nhiên tươi đẹp và văn hóa đặc sắc, Bắc Giang đang hướng tới mô hình du lịch xanh, thân thiện và bền vững, thu hút ngày càng nhiều du khách yêu thiên nhiên."]
  },
baclieu: {
  name: ["Bạc Liêu"],
  face: ["./assets/imgbando/baclieu1.jpg"],
  images: ["./assets/imgbando/baclieu1.jpg",
            "./assets/imgbando/baclieu2.jpg",
            "./assets/imgbando/baclieu3.jpg",],
  locations: ["Bạc Liêu là một trong những điểm đến nổi bật ở miền Tây Nam Bộ, không chỉ nổi tiếng với giai thoại về Công tử Bạc Liêu mà còn là vùng đất đầy tiềm năng phát triển du lịch xanh. Nơi đây sở hữu hệ sinh thái rừng ngập mặn ven biển phong phú, trong đó Khu bảo tồn thiên nhiên Vườn chim Bạc Liêu là một điểm nhấn đặc biệt. Du khách có thể ngắm hàng chục loài chim quý hiếm, tận hưởng không khí trong lành và tìm hiểu về đa dạng sinh học. Ngoài ra, cánh đồng điện gió Bạc Liêu với những tua-bin khổng lồ quay trong gió biển cũng là một biểu tượng của sự kết hợp giữa phát triển bền vững và bảo vệ môi trường. Bạc Liêu còn có các tour du lịch sinh thái cộng đồng tại các làng nghề truyền thống, nơi du khách được trải nghiệm đời sống người dân địa phương, tham gia các hoạt động sản xuất thân thiện với môi trường. Với những tiềm năng đó, Bạc Liêu đang trở thành một điểm đến lý tưởng cho những ai yêu thiên nhiên và mong muốn du lịch theo hướng bền vững."]
  },
bacninh: {
  name: ["Bắc Ninh"],
  face: ["./assets/imgbando/bacninh1.png"],
  images: ["./assets/imgbando/bacninh1.png",
    "./assets/imgbando/bacninh2.png",
    "./assets/imgbando/bacninh3.jpg",],
  locations: ["Bắc Ninh – vùng đất Kinh Bắc ngàn năm văn hiến – không chỉ nổi tiếng với dân ca Quan họ mà còn là điểm đến hấp dẫn cho những ai yêu thích du lịch xanh và trải nghiệm sinh thái. Với lợi thế nằm gần thủ đô, Bắc Ninh phát triển nhiều mô hình du lịch kết hợp giữa thiên nhiên, nông nghiệp và làng nghề truyền thống. Những khu sinh thái xanh mát như trang trại nông nghiệp hữu cơ, khu nghỉ dưỡng giữa cánh đồng, hay các điểm du lịch làng quê giúp du khách hòa mình vào không gian trong lành, yên bình và đậm đà bản sắc văn hóa. Các làng nghề như Đông Hồ, Phù Lãng, Viêm Xá không chỉ bảo tồn tinh hoa truyền thống mà còn trở thành điểm đến giáo dục và trải nghiệm sáng tạo cho du khách. Bắc Ninh đang dần trở thành một trong những địa phương tiên phong trong việc phát triển du lịch bền vững, nơi con người và thiên nhiên hòa quyện, mang lại giá trị sâu sắc cho những hành trình khám phá xanh."]
  },
binhduong: {
  name: ["Bình Dương"],
  face: ["./assets/imgbando/binhduong1.webp"],
  images: ["./assets/imgbando/binhduong1.webp",
    "./assets/imgbando/binhduong2.webp",
    "./assets/imgbando/binhduong3.webp",
    "./assets/imgbando/binhduong4.webp",
    "./assets/imgbando/binhduong5.webp",
    "./assets/imgbando/binhduong6.webp"
  ],
  locations: ["Bình Dương – vùng đất năng động nằm sát TP.Hồ Chí Minh – không chỉ được biết đến là trung tâm công nghiệp phát triển bậc nhất cả nước mà còn đang từng bước khẳng định vị thế của mình trong lĩnh vực du lịch xanh, thân thiện với môi trường. Trong nhịp sống hiện đại, du lịch xanh tại Bình Dương mang đến một không gian nghỉ dưỡng thanh bình, nơi con người có thể thư giãn, tái tạo năng lượng giữa thiên nhiên trong lành. Một số điểm đến nổi bật có thể kể đến như Khu du lịch sinh thái Thủy Châu với rừng cây, suối nước mát và không gian picnic lý tưởng; Làng tre Phú An – khu bảo tồn tre lớn nhất Đông Nam Á, là nơi du khách vừa có thể tìm hiểu về sinh thái, vừa thưởng thức khung cảnh làng quê thanh tịnh. Ngoài ra, Khu du lịch Đại Nam, với diện tích rộng lớn, kết hợp hài hòa giữa cảnh quan nhân tạo và thiên nhiên, cũng là điểm đến hấp dẫn không thể bỏ qua. Du lịch xanh ở Bình Dương đang ngày càng phát triển theo hướng bền vững, kết hợp giữa bảo tồn thiên nhiên, văn hóa địa phương và các hoạt động nghỉ dưỡng, học tập, trải nghiệm. Đây là lựa chọn lý tưởng cho du khách muốn tạm rời xa đô thị náo nhiệt để tìm về không gian trong lành, hòa mình vào thiên nhiên và văn hóa bản địa."]
  },
binhphuoc: {
  name: ["Bình Phước"],
  face: ["./assets/imgbando/binhphuoc1.jpg"],
  images: ["./assets/imgbando/binhphuoc1.jpg",
    "./assets/imgbando/binhphuoc2.jpg",
    "./assets/imgbando/binhphuoc3.jpg",
    "./assets/imgbando/binhphuoc4.jpg",
    "./assets/imgbando/binhphuoc5.jpg",
    "./assets/imgbando/binhphuoc6.jpg"
  ],
  locations: ["Bình Phước – mảnh đất nằm ở cửa ngõ Tây Nguyên – không chỉ nổi tiếng với những cánh rừng cao su bạt ngàn và vườn điều trĩu quả, mà còn là điểm đến lý tưởng cho những ai yêu thích du lịch xanh, gần gũi thiên nhiên. Với hệ sinh thái đa dạng, Bình Phước sở hữu nhiều địa điểm sinh thái hấp dẫn như Vườn quốc gia Bù Gia Mập – 'lá phổi xanh' của Đông Nam Bộ, nơi lưu giữ nhiều loài động thực vật quý hiếm và cảnh quan rừng nguyên sinh hùng vĩ. Ngoài ra, khu du lịch sinh thái Sóc Xiêm, thác Đứng, thác Đắk Mai hay hồ Suối Giai cũng là những điểm đến hoang sơ, trong lành, mang đậm bản sắc núi rừng. Du lịch xanh ở Bình Phước không chỉ dừng lại ở việc chiêm ngưỡng vẻ đẹp tự nhiên, mà còn là cơ hội để du khách tìm hiểu đời sống văn hóa của các dân tộc thiểu số như S’tiêng, M’nông, Khmer… thông qua các hoạt động trải nghiệm thực tế như đan lát, dệt thổ cẩm, lễ hội cồng chiêng, hay thưởng thức ẩm thực bản địa. Đây là xu hướng du lịch bền vững, góp phần gìn giữ môi trường sinh thái, đồng thời tạo sinh kế cho cộng đồng địa phương. Bình Phước – nơi thiên nhiên và con người hòa quyện, hứa hẹn là điểm đến xanh – sạch – đầy sức sống cho hành trình khám phá của bạn."]
  },
camau: {
  name: ["Cà Mau"],
  face: ["./assets/imgbando/camau1.jpg"],
  images: ["./assets/imgbando/camau1.jpg",
            "./assets/imgbando/camau2.jpg",
            "./assets/imgbando/camau3.jpg",
            "./assets/imgbando/camau4.jpg",
            "./assets/imgbando/camau5.jpg",
            "./assets/imgbando/camau6.webp"],
  locations: ["Cà Mau, mảnh đất tận cùng phía Nam Tổ quốc, không chỉ nổi tiếng với vị trí địa lý đặc biệt mà còn là điểm đến lý tưởng cho những ai yêu thích du lịch xanh và trải nghiệm thiên nhiên hoang sơ. Với hệ sinh thái đa dạng, Cà Mau sở hữu nhiều khu rừng ngập mặn, rừng tràm và hệ thống sông ngòi chằng chịt, tạo nên cảnh quan độc đáo và hấp dẫn.Một trong những điểm đến nổi bật là Vườn quốc gia Mũi Cà Mau, nơi được UNESCO công nhận là Khu dự trữ sinh quyển thế giới, với hệ sinh thái rừng ngập mặn phong phú và đa dạng sinh học. Du khách có thể tham gia các tour xuyên rừng, khám phá bãi bồi, ngắm bình minh và hoàng hôn tại điểm cực Nam của đất nước .Bên cạnh đó, Vườn quốc gia U Minh Hạ cũng là điểm đến hấp dẫn với rừng tràm nguyên sinh, nơi sinh sống của nhiều loài động vật quý hiếm. Du khách có thể trải nghiệm chèo xuồng, câu cá và thưởng thức mật ong rừng nguyên chất .Ngoài ra, Khu du lịch sinh thái Cà Mau Eco tại ấp Vồ Dơi, xã Trần Hợi, huyện Trần Văn Thời, mang đến cho du khách những trải nghiệm độc đáo như chèo xuồng ba lá, tát mương bắt cá, thưởng thức ẩm thực dân dã và cắm trại giữa thiên nhiên .Cà Mau còn phát triển mạnh mẽ mô hình du lịch sinh thái cộng đồng, nơi du khách có thể tham gia vào các hoạt động thường nhật của người dân địa phương như bắt ba khía, mò sò, giăng lưới bắt cá và tìm hiểu về văn hóa bản địa .Với những tiềm năng sẵn có, Cà Mau đang từng bước phát triển du lịch xanh và bền vững, góp phần bảo vệ môi trường và nâng cao đời sống cộng đồng địa phương. Đây chắc chắn là điểm đến không thể bỏ qua cho những ai muốn khám phá vẻ đẹp nguyên sơ và trải nghiệm cuộc sống gắn bó với thiên nhiên."]
  },
haiduong: {
  name: ["Hải Dương"],
  face: ["./assets/imgbando/haiduong1.jpg"],
  images: ["./assets/imgbando/haiduong1.jpg",
            "./assets/imgbando/haiduong2.jpg",
            "./assets/imgbando/haiduong3.jpg",],
  locations: ["Hải Dương sở hữu nhiều tiềm năng về du lịch xanh nhờ hệ thống đồi núi thấp, sông hồ và làng nghề truyền thống. Côn Sơn – Kiếp Bạc là khu di tích sinh thái – văn hóa nổi bật, nằm giữa rừng thông và núi non trùng điệp. Du khách cũng có thể ghé hồ Bạch Đằng, hồ Kẻ Sặt để tận hưởng không gian yên bình và trong lành. Với các làng nghề như gốm Chu Đậu, bánh đậu xanh, kết hợp mô hình du lịch trải nghiệm nông thôn, Hải Dương đang hướng tới xây dựng hệ sinh thái du lịch bền vững và hài hòa với tự nhiên."]
  },
hanam: {
  name: ["Hà Nam"],
  face: ["./assets/imgbando/hanam1.jpg"],
  images: ["./assets/imgbando/hanam1.jpg",
            "./assets/imgbando/hanam2.jpg",
            "./assets/imgbando/hanam3.jpg",],
  locations: ["Hà Nam – vùng đất địa linh nhân kiệt nằm ở cửa ngõ phía Nam thủ đô – đang ngày càng thu hút du khách nhờ những tiềm năng lớn về du lịch xanh và sinh thái. Với hệ thống núi đá vôi, hồ nước tự nhiên và các thung lũng xanh mát, Hà Nam mang đến cho du khách những trải nghiệm gần gũi với thiên nhiên. Nổi bật nhất là khu du lịch sinh thái Tam Chúc – quần thể chùa lớn nhất thế giới – nơi núi non, mặt hồ và kiến trúc linh thiêng hòa quyện tạo nên khung cảnh ngoạn mục và thanh tịnh. Ngoài ra, các điểm đến như hồ Ba Hang, rừng Kim Bảng hay suối Kênh Gà cũng là lựa chọn hấp dẫn cho những ai yêu thích không gian yên bình và khám phá sinh thái. Hà Nam còn gìn giữ nhiều làng nghề truyền thống như làng trống Đọi Tam, làng Vũ Đại, góp phần tạo nên nét đẹp văn hóa dân gian trong hành trình trải nghiệm xanh. Sự kết hợp hài hòa giữa thiên nhiên, văn hóa và đời sống cộng đồng đang giúp Hà Nam trở thành điểm đến lý tưởng cho xu hướng du lịch xanh bền vững."]
  },
hungyen: {
  name: ["Hưng Yên"],
  face: ["./assets/imgbando/hungyen1.jpg"],
  images: ["./assets/imgbando/hungyen1.jpg",
            "./assets/imgbando/hungyen2.jpg",
            "./assets/imgbando/hungyen3.jpg",],
  locations: ["Hưng Yên – vùng đất giàu truyền thống văn hóa và lịch sử – đang ngày càng thu hút du khách nhờ sự phát triển mạnh mẽ của du lịch xanh và sinh thái. Với vị trí thuận lợi gần Hà Nội, Hưng Yên sở hữu nhiều điểm đến hấp dẫn, kết hợp hài hòa giữa thiên nhiên tươi đẹp và không gian nghỉ dưỡng hiện đại. Tiêu biểu là khu đô thị sinh thái Ecopark tại huyện Văn Giang, nơi nổi bật với hệ thống cây xanh, hồ nước và kiến trúc thân thiện môi trường, tạo nên môi trường sống trong lành và tiện nghi. Bên cạnh đó, làng du lịch sinh thái Sen Hồ ở thị xã Mỹ Hào mang đến trải nghiệm gần gũi với thiên nhiên, với không gian rộng rãi, ẩm thực đồng quê và các hoạt động giải trí dân dã. Hưng Yên còn nổi tiếng với các làng nghề truyền thống như làng hương Cao Thôn, làng nón Phú Vân, làng gốm Chu Đậu, nơi du khách có thể tìm hiểu quy trình sản xuất và trải nghiệm văn hóa địa phương. Với sự kết hợp giữa cảnh quan thiên nhiên, di sản văn hóa và các mô hình du lịch bền vững, Hưng Yên đang trở thành điểm đến lý tưởng cho những ai yêu thích du lịch xanh và khám phá văn hóa vùng đồng bằng Bắc Bộ."]
  },
namdinh: {
  name: ["Nam Định"],
  face: ["./assets/imgbando/namdinh1.jpg"],
  images: ["./assets/imgbando/namdinh1.jpg",
            "./assets/imgbando/namdinh2.jpg",
            "./assets/imgbando/namdinh3.jpg",],
  locations: ["Nam Định – vùng đất giàu truyền thống văn hóa và lịch sử – đang ngày càng thu hút du khách bằng những trải nghiệm du lịch xanh độc đáo, kết hợp giữa thiên nhiên hoang sơ và đời sống cộng đồng. Một trong những điểm đến nổi bật là Khu du lịch sinh thái Núi Ngăm tại huyện Vụ Bản, cách trung tâm thành phố Nam Định khoảng 10 km. Nơi đây sở hữu cảnh quan hữu tình với núi non, sông Sắt uốn lượn và những vườn hoa rực rỡ, tạo nên không gian thư giãn lý tưởng cho du khách muốn hòa mình vào thiên nhiên.Không xa Núi Ngăm là quần thể di tích Phủ Dầy, nơi thờ Thánh Mẫu Liễu Hạnh – một trong Tứ bất tử của tín ngưỡng dân gian Việt Nam. Du khách có thể kết hợp tham quan, tìm hiểu văn hóa tâm linh và thưởng thức các lễ hội truyền thống đặc sắc. Đối với những ai yêu thích khám phá hệ sinh thái rừng ngập mặn, Vườn quốc gia Xuân Thủy là điểm đến không thể bỏ qua. Nơi đây là khu Ramsar đầu tiên của Việt Nam, nổi tiếng với đa dạng sinh học và là nơi cư trú của nhiều loài chim quý hiếm.Ngoài ra, du khách có thể ghé thăm Bảo tàng Đồng Quê để tìm hiểu về đời sống nông thôn Bắc Bộ, hay tham gia các tour trải nghiệm tại làng rối nước Nam Chấn, làng kèn đồng Phạm Pháo, và cánh đồng muối Bạch Long, nơi lưu giữ những nét văn hóa truyền thống đặc sắc.Với sự kết hợp hài hòa giữa thiên nhiên, văn hóa và cộng đồng, du lịch xanh tại Nam Định đang phát triển theo hướng bền vững, mang đến cho du khách những trải nghiệm sâu sắc và ý nghĩa."]
  },
phutho: {
  name: ["Phú Thọ"],
  face: ["./assets/imgbando/phutho1.jpg"],
  images: ["./assets/imgbando/phutho1.jpg",
    "./assets/imgbando/phutho2.jpg",
    "./assets/imgbando/phutho3.jpg",
    "./assets/imgbando/phutho4.jpg",
    "./assets/imgbando/phutho5.jpg",
    "./assets/imgbando/phutho6.jpg"],
  locations: ["Phú Thọ – vùng đất cội nguồn của dân tộc Việt Nam – không chỉ nổi tiếng với di sản văn hóa Đền Hùng mà còn là điểm đến lý tưởng cho những ai yêu thích du lịch xanh, gần gũi với thiên nhiên và văn hóa bản địa. Với địa hình đa dạng, từ núi rừng, đồi chè đến suối khoáng và rừng nguyên sinh, Phú Thọ mang đến cho du khách những trải nghiệm sinh thái phong phú và độc đáo.Một trong những điểm đến nổi bật là Vườn quốc gia Xuân Sơn, nằm ở huyện Tân Sơn, cách thành phố Việt Trì khoảng 65 km. Với diện tích hơn 15.000 ha, nơi đây sở hữu hệ sinh thái rừng nguyên sinh đa dạng, hệ thống hang động kỳ vĩ và các dòng suối mát lành. Du khách có thể tham gia các hoạt động như trekking, khám phá hang động, tắm suối và trải nghiệm văn hóa của các dân tộc Dao, Mường thông qua các dịch vụ homestay tại bản Dù, bản Lạng, bản Cỏi.Suối khoáng nóng Thanh Thủy là điểm đến lý tưởng cho những ai muốn thư giãn và chăm sóc sức khỏe. Nằm dọc theo sông Đà, suối khoáng này chứa chất radon quý hiếm, có nhiệt độ dao động từ 37°C đến 54°C, rất tốt cho sức khỏe. Khu vực này còn phát triển các khu nghỉ dưỡng cao cấp như Lynn Times Thanh Thủy, mang đến trải nghiệm tắm khoáng onsen chuẩn Nhật Bản. Đầm Ao Châu, nằm tại huyện Hạ Hòa, được ví như 'Hạ Long trên cạn' với hơn 100 hòn đảo lớn nhỏ, mặt nước trong xanh và hệ sinh thái phong phú. Du khách có thể tham gia các hoạt động như đi thuyền, câu cá và thưởng thức ẩm thực địa phương. Đồi chè Long Cốc ở huyện Tân Sơn là điểm đến không thể bỏ qua cho những ai yêu thích thiên nhiên và nhiếp ảnh. Với những đồi chè xanh mướt, tròn trịa trải dài bất tận, nơi đây là địa điểm lý tưởng để săn mây vào sáng sớm và trải nghiệm hái chè cùng người dân địa phương. Ngoài ra, Phú Thọ còn phát triển các mô hình du lịch cộng đồng và nông nghiệp như làng sinh thái Ngọc Đồng, nơi du khách có thể trải nghiệm cuộc sống nông thôn, tham gia các hoạt động nông nghiệp và tìm hiểu văn hóa địa phương."]
  },
thainguyen: {
  name: ["Thái Nguyên"],
  face: ["./assets/imgbando/thainguyen1.jpg"],
  images: ["./assets/imgbando/thainguyen1.jpg",
    "./assets/imgbando/thainguyen2.jpg",
    "./assets/imgbando/thainguyen3.jpg",],
  locations: ["Thái Nguyên – vùng đất trung du miền núi phía Bắc, không chỉ được biết đến là cái nôi của nền văn hóa trà Việt mà còn là điểm đến hấp dẫn trong hành trình du lịch xanh, gần gũi với thiên nhiên. Với địa hình đa dạng, cảnh sắc hài hòa giữa núi rừng, sông suối và đồi chè xanh mướt, Thái Nguyên mang đến cho du khách những trải nghiệm yên bình, trong lành. Các điểm đến nổi bật như Hồ Núi Cốc – “vịnh Hạ Long trên cạn” của vùng trung du, không chỉ có vẻ đẹp thơ mộng mà còn là nơi phát triển các loại hình du lịch sinh thái, nghỉ dưỡng và vui chơi giải trí; hay các đồi chè Tân Cương xanh mướt trải dài, nơi du khách có thể trải nghiệm hái chè, thưởng trà và tìm hiểu văn hóa trà đặc sắc. Ngoài ra, rừng quốc gia Tam Đảo phần thuộc Thái Nguyên, suối Mỏ Gà, khu bảo tồn thiên nhiên Thần Sa cũng là những điểm đến lý tưởng cho người yêu thích khám phá sinh thái và thiên nhiên hoang sơ. Du lịch xanh Thái Nguyên đang phát triển theo hướng bền vững, kết hợp hài hòa giữa bảo vệ môi trường, bảo tồn giá trị bản địa và phát triển cộng đồng, hứa hẹn là lựa chọn lý tưởng cho du khách muốn tìm về với thiên nhiên và văn hóa vùng cao."]
  },
vinhphuc: {
  name: ["Vĩnh Phúc"],
  face: ["./assets/imgbando/vinhphuc1.jpg"],
  images: ["./assets/imgbando/vinhphuc1.jpg",
    "./assets/imgbando/vinhphuc2.jpg",
    "./assets/imgbando/vinhphuc3.jpg",
    "./assets/imgbando/vinhphuc4.jpg",
    "./assets/imgbando/vinhphuc5.jpg",
    "./assets/imgbando/vinhphuc6.jpg"],
  locations: ["Vĩnh Phúc nổi bật với nhiều khu nghỉ dưỡng xanh và cảnh quan thiên nhiên phong phú, đặc biệt là Tam Đảo – nơi được mệnh danh là “Đà Lạt của miền Bắc”. Với khí hậu mát mẻ quanh năm, rừng nguyên sinh và các tuyến trekking sinh thái, Tam Đảo là điểm lý tưởng cho du lịch bền vững. Ngoài ra, hồ Đại Lải với khu du lịch sinh thái hiện đại, kết hợp bảo tồn thiên nhiên và nghệ thuật đương đại, mang đến không gian nghỉ dưỡng hài hòa giữa thiên nhiên và con người."]
  },
dienbien: {
  name: ["Điện Biên"],
  face: ["./assets/imgbando/dienbien1.jpg"],
  images: ["./assets/imgbando/dienbien1.jpg",
    "./assets/imgbando/dienbien2.jpg",
    "./assets/imgbando/dienbien3.jpg",
    "./assets/imgbando/dienbien4.jpg",
    "./assets/imgbando/dienbien5.jpg",
    "./assets/imgbando/dienbien6.jpg"
  ],
  locations: ["Điện Biên không chỉ nổi tiếng với chiến tích lịch sử mà còn gây ấn tượng bởi cảnh quan thiên nhiên hùng vĩ và bản sắc văn hóa độc đáo của 19 dân tộc anh em. 'Thung lũng Mường Thanh' - cánh đồng lúa lớn nhất Tây Bắc - vào mùa lúa chín trở thành tấm thảm vàng khổng lồ dưới chân những dãy núi trùng điệp. 'Khu bảo tồn thiên nhiên Mường Nhé' với hệ sinh thái rừng nguyên sinh và nhiều loài động thực vật quý hiếm là điểm đến lý tưởng cho du lịch sinh thái và nghiên cứu đa dạng sinh học. 'Hồ Pá Khoang' rộng hơn 600ha với mặt nước trong xanh in bóng núi rừng là nơi lý tưởng cho các hoạt động du thuyền, câu cá giải trí. Đặc biệt, 'rừng nguyên sinh Tà Sình' ở huyện Điện Biên Đông với những cây cổ thụ hàng trăm năm tuổi đang được phát triển thành điểm trekking hấp dẫn. Điện Biên còn phát triển mạnh mô hình du lịch cộng đồng tại các bản làng của người Thái, Mông như 'bản Him Lam', 'bản Ten', nơi du khách có thể trải nghiệm đời sống bản địa, thưởng thức ẩm thực địa phương và tham gia các hoạt động bảo tồn văn hóa truyền thống. Đến với Điện Biên, du khách không chỉ được đắm mình trong không gian xanh mà còn hiểu thêm về cuộc sống bền vững của đồng bào các dân tộc thiểu số."]
  },
daknong: {
  name: ["Đắk Nông"],
  face: ["./assets/imgbando/daknong1.jpg"],
  images: ["./assets/imgbando/daknong1.jpg",
    "./assets/imgbando/daknong2.jpg",
    "./assets/imgbando/daknong3.jpg",
    "./assets/imgbando/daknong4.jpg",
    "./assets/imgbando/daknong5.jpg",
    "./assets/imgbando/daknong6.png",
  ],
  locations: ["Đắk Nông, vùng đất của những thác nước hùng vĩ và hệ thống hang động núi lửa độc nhất vô nhị, đang trở thành điểm đến du lịch xanh nổi bật của Tây Nguyên. 'Công viên địa chất toàn cầu Đắk Nông' với hệ thống hang động núi lửa dài nhất Đông Nam Á là điểm nhấn đặc biệt, nơi du khách có thể khám phá những 'hang C7', 'hang C3' với cấu trúc đá bazan kỳ vĩ cùng hệ thống thực vật đặc hữu. Các thác nước như 'thác Đray Sáp' hùng vĩ, 'thác Gia Long' thơ mộng hay 'thác Liêng Nung' hoang sơ đều được bảo tồn nguyên vẹn trong những khu rừng già. 'Vườn quốc gia Tà Đùng' với 'hồ Tà Đùng' được mệnh danh là 'Vịnh Hạ Long của Tây Nguyên' là điểm đến lý tưởng cho các hoạt động chèo thuyền kayak, ngắm cảnh và nghiên cứu hệ sinh thái rừng. Đắk Nông còn gây ấn tượng với các mô hình du lịch cộng đồng của đồng bào M'nông, Êđê tại 'làng văn hóa N'Jriêng', nơi du khách có thể trải nghiệm văn hóa cồng chiêng và lối sống bền vững của người bản địa. Đến Đắk Nông là đến với hành trình khám phá thiên nhiên nguyên sơ và góp phần bảo tồn các giá trị địa chất - văn hóa độc đáo."]
  },
haugiang: {
  name: ["Hậu Giang"],
  face: ["./assets/imgbando/haugiang1.jpg"],
  images: ["./assets/imgbando/haugiang1.jpg",
            "./assets/imgbando/haugiang2.jpg",
            "./assets/imgbando/haugiang3.jpg",],
  locations: ["Hậu Giang là một điểm đến mới nổi về du lịch xanh tại miền Tây, với thiên nhiên trù phú và hệ sinh thái đa dạng. Khu bảo tồn thiên nhiên Lung Ngọc Hoàng là “lá phổi xanh” của khu vực, nơi du khách có thể đi thuyền giữa rừng tràm, quan sát chim hoang dã và tận hưởng không khí trong lành. Các điểm như khu du lịch sinh thái Tầm Vu hay vườn trái cây Vị Thanh mang đến cảm giác thư giãn nhẹ nhàng, kết nối với thiên nhiên và trải nghiệm đời sống nông nghiệp bền vững. Du lịch Hậu Giang là hành trình trở về với sự mộc mạc, yên bình và xanh mát."]
  },
cantho: {
  name: ["Cần Thơ"],
  face: ["./assets/imgbando/cantho1.png"],
  images: ["./assets/imgbando/cantho1.png",
            "./assets/imgbando/cantho2.png",
            "./assets/imgbando/cantho3.png",
  ],
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
  face: ["./assets/imgbando/hanoi1.jpg"],
  images: ["./assets/imgbando/hanoi1.jpg",
           "./assets/imgbando/hanoi2.jpg",
           "./assets/imgbando/hanoi3.jpg",
           "./assets/imgbando/hanoi4.png",
           "./assets/imgbando/hanoi5.jpg",
           "./assets/imgbando/hanoi6.jpg",],
  locations: ["Hà Nội, trái tim của Việt Nam, không chỉ là thành phố nghìn năm văn hiến mà còn là điểm đến bền vững với những 'lá phổi xanh' giữa nhịp sống sôi động. Hồ Tây – mặt gương khổng lồ phản chiếu bầu trời – là nơi du khách có thể đạp xe dọc bờ hồ, thưởng thức không khí trong lành và ngắm hoàng hôn lãng mạn. Cách trung tâm không xa, Vườn quốc gia Ba Vì với rừng nguyên sinh, thác nước và đồi chè trải dài là điểm lý tưởng để trekking, tận hưởng tiếng chim hót và khí hậu mát mẻ. Những làng nghề sinh thái như làng rau Trạm Xá (huyện Phúc Thọ) hay làng cổ Đường Lâm mang đến trải nghiệm 'du lịch xanh' đậm chất văn hóa, nơi du khách có thể tham gia trồng rau hữu cơ hoặc tìm hiểu kiến trúc nhà cổ truyền thống. Hà Nội cũng tiên phong trong phát triển không gian công cộng thân thiện môi trường, như công viên Hòa Bình với hệ thống cây xanh phủ kín, hay tuyến phố đi bộ quanh hồ Gươm – nơi xe điện mặt đất thay thế phương tiện gây ô nhiễm. Đến với Hà Nội, bạn sẽ khám phá một hành trình bền vững, nơi thiên nhiên và lịch sử hòa quyện giữa nhịp đập hiện đại."]
  },
haiphong: {
  name: ["Hải Phòng"],
  face: ["./assets/imgbando/haiphong1.jpg"],
  images: ["./assets/imgbando/haiphong1.jpg",
            "./assets/imgbando/haiphong2.jpg",
            "./assets/imgbando/haiphong3.jpg",
            "./assets/imgbando/haiphong4.jpg",
            "./assets/imgbando/haiphong5.jpg",
            "./assets/imgbando/haiphong6.jpg",
  ],
  locations: ["Hải Phòng, 'thành phố hoa phượng đỏ', nổi bật với những bãi biển hoang sơ và hệ sinh thái biển đảo độc đáo. Vườn quốc gia Cát Bà – khu dự trữ sinh quyển thế giới – là điểm nhấn du lịch xanh với rừng ngập mặn, hang động karst và loài voọc đầu trắng quý hiếm. Du khách có thể kayak qua làng chài Việt Hải, leo núi trên đảo Cát Bà, hoặc lặn ngắm san hô tại vịnh Lan Hạ – nơi được mệnh danh là 'Hạ Long thu nhỏ' với làn nước trong vắt. Gần đó, đảo Long Châu hoang sơ là điểm đến lý tưởng cho ai yêu thích trải nghiệm tách biệt, nơi sóng vỗ vào ghềnh đá và rừng nguyên sinh bao phủ. Trên đất liền, khu sinh thái Rừng Đước Hải Phòng (huyện Tiên Lãng) với hệ thống cầu gỗ xuyên rừng ngập mặn là nơi lý tưởng để tìm hiểu về hệ sinh thái ven biển. Hải Phòng cũng phát triển du lịch cộng đồng tại các làng chài như Cát Hải, nơi du khách có thể học cách đan lưới, câu mực cùng ngư dân. Đến với Hải Phòng, bạn sẽ được hòa mình vào thiên nhiên biển đảo nguyên sơ và góp phần bảo tồn di sản xanh qua những hoạt động du lịch có trách nhiệm."]
  },
hochiminh: {
  name: ["Hồ Chí Minh"],
  face: ["./assets/imgbando/hochiminh1.jpeg"],
  images: ["./assets/imgbando/hochiminh1.jpeg",
           "./assets/imgbando/hochiminh2.jpg",
           "./assets/imgbando/hochiminh3.jpg",],
  locations: ["Giữa nhịp sống hối hả, TP. Hồ Chí Minh vẫn giữ được những không gian xanh bền vững, kết nối con người với thiên nhiên. Khu sinh thái Làng Bè Cần Giờ – khu dự trữ sinh quyển thế giới – là điểm đến lý tưởng để khám phá rừng ngập mặn, chèo thuyền qua các con lạch và quan sát khỉ đuôi dài trong môi trường tự nhiên. Ngay trong lòng thành phố, Công viên Bách Thảo Sài Gòn với hơn 1.000 loài thực vật và khu đô thị sinh thái Phú Mỹ Hưng là những 'lá phổi' giúp giảm nhiệt đô thị. Về phía Tây, khu vườn trái cây Củ Chi (xã An Nhơn Tây) mang đến trải nghiệm 'du lịch xanh' độc đáo, nơi du khách có thể hái trái cây tại vườn, tham gia làm bánh tráng truyền thống và tìm hiểu về nông nghiệp hữu cơ. TP. Hồ Chí Minh cũng đi đầu trong xu hướng du lịch bền vững với các khách sạn 'zero-waste', hệ thống xe đạp công cộng và tour ẩm thực chống lãng phí thực phẩm. Đến đây, bạn sẽ bất ngờ bởi sự cân bằng giữa đô thị hiện đại và những giải pháp xanh sáng tạo, nơi mỗi hành trình đều có thể góp phần bảo vệ môi trường."]
  },
hoangsa: {
  name: ["QĐ Hoàng Sa"],
  face: ["./assets/imgbando/hoangsa1.jpg"],
  images: ["./assets/imgbando/hoangsa1.jpg",
           "./assets/imgbando/hoangsa2.jpg",
           "./assets/imgbando/hoangsa3.jpg",],   
  locations: ["Quần đảo Hoàng Sa, một phần không thể tách rời của Việt Nam, nổi bật với hệ sinh thái biển đa dạng và cảnh quan thiên nhiên hoang sơ. Với những bãi cát trắng mịn, nước biển trong xanh và rạn san hô phong phú, Hoàng Sa là điểm đến lý tưởng cho những ai yêu thích khám phá đại dương. Các hoạt động như lặn biển ngắm san hô, câu cá và khám phá các đảo nhỏ như Đảo Hoàng Sa, Đảo An Bang hay Đảo Tri Tôn mang đến trải nghiệm gần gũi với thiên nhiên. Hệ sinh thái biển tại đây không chỉ là nguồn tài nguyên quý giá mà còn là nơi cư trú của nhiều loài động thực vật quý hiếm. Du lịch Hoàng Sa không chỉ giúp bảo tồn vẻ đẹp tự nhiên mà còn góp phần nâng cao nhận thức về bảo vệ môi trường biển và phát triển bền vững."]
},
truongsa: {
  name: ["QĐ Trường Sa"],
  face: ["./assets/imgbando/truongsa1.jpg"],
  images: ["./assets/imgbando/truongsa1.jpg",
           "./assets/imgbando/truongsa2.webp",
           "./assets/imgbando/truongsa3.jpg",],   
  locations: ["Quần đảo Hoàng Sa, một phần không thể tách rời của Việt Nam, nổi bật với hệ sinh thái biển đa dạng và cảnh quan thiên nhiên hoang sơ. Với những bãi cát trắng mịn, nước biển trong xanh và rạn san hô phong phú, Hoàng Sa là điểm đến lý tưởng cho những ai yêu thích khám phá đại dương. Các hoạt động như lặn biển ngắm san hô, câu cá và khám phá các đảo nhỏ như Đảo Hoàng Sa, Đảo An Bang hay Đảo Tri Tôn mang đến trải nghiệm gần gũi với thiên nhiên. Hệ sinh thái biển tại đây không chỉ là nguồn tài nguyên quý giá mà còn là nơi cư trú của nhiều loài động thực vật quý hiếm. Du lịch Hoàng Sa không chỉ giúp bảo tồn vẻ đẹp tự nhiên mà còn góp phần nâng cao nhận thức về bảo vệ môi trường biển và phát triển bền vững."]
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
