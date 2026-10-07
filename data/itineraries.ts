export const ITINERARY_DATA: Record<string, any> = {
  // --- MIỀN BẮC (15 TỈNH THÀNH) ---
  "Thành phố Hà Nội": {
    overviewVi: "Hà Nội không vội được đâu. Cảm giác ngồi nhâm nhi ly nâu đá ven đường nhìn dòng người hối hả, hay hít hà mùi phở bò mậu dịch buổi sáng sớm chính là thứ gây nghiện.",
    overviewEn: "Hanoi cannot be rushed. Sitting on a tiny plastic stool sipping iced milk coffee while watching the bustling streets or inhaling the rich aroma of traditional beef pho at dawn is truly addictive.",
    insiderSecretsVi: { goldenSeason: "Tháng 9 - 11", cultureNotes: "Giao tiếp thanh lịch", mustTry: ["Phở bò", "Cà phê trứng"] },
    insiderSecretsEn: { goldenSeason: "September - November", cultureNotes: "Dress modestly", mustTry: ["Beef Pho", "Egg Coffee"] },
    daysVi: [
      { day: 1, title: "Phố cổ & Văn hóa Tràng An", activities: [{ time: "07:30 - 09:00", title: "Phở bò truyền thống", description: "Thưởng thức phở vỉa hè.", cost: "60.000 VNĐ", imageKeyword: "hanoi-pho" }, { time: "15:00 - 18:00", title: "Hoàng hôn Hồ Tây", description: "Đạp xe vòng quanh hồ.", cost: "Miễn phí", imageKeyword: "hanoi-ho-tay" }] },
      { day: 2, title: "Dấu ấn lịch sử nghìn năm", activities: [{ time: "08:00 - 11:30", title: "Hoàng Thành Thăng Long", description: "Khám phá di sản thế giới.", cost: "30.000 VNĐ", imageKeyword: "hoang-thanh" }] },
      { day: 3, title: "Làng nghề truyền thống", activities: [{ time: "08:30 - 15:00", title: "Làng gốm Bát Tràng", description: "Trải nghiệm vuốt nặn gốm.", cost: "300.000 VNĐ", imageKeyword: "bat-trang" }] },
      { day: 4, title: "Bình minh Thủ đô", activities: [{ time: "05:00 - 08:00", title: "Chợ hoa Quảng Bá", description: "Ngắm hoa rực rỡ lúc rạng sáng.", cost: "Miễn phí", imageKeyword: "quang-ba" }] }
    ],
    daysEn: [
      { day: 1, title: "Old Quarter & Culture", activities: [{ time: "07:30 - 09:00", title: "Traditional Beef Pho", description: "Enjoy iconic sidewalk pho.", cost: "60,000 VND", imageKeyword: "hanoi-pho" }, { time: "15:00 - 18:00", title: "West Lake Sunset", description: "Cycle around the lake.", cost: "Free", imageKeyword: "hanoi-ho-tay" }] },
      { day: 2, title: "Millennium Heritage", activities: [{ time: "08:00 - 11:30", title: "Imperial Citadel", description: "Explore world heritage site.", cost: "30,000 VND", imageKeyword: "hoang-thanh" }] },
      { day: 3, title: "Traditional Craft Village", activities: [{ time: "08:30 - 15:00", title: "Bat Trang Pottery", description: "Experience ceramic crafting.", cost: "300,000 VND", imageKeyword: "bat-trang" }] },
      { day: 4, title: "Capital Dawn", activities: [{ time: "05:00 - 08:00", title: "Quang Ba Flower Market", description: "Experience bustling flower trade.", cost: "Free", imageKeyword: "quang-ba" }] }
    ]
  },
  "Hanoi City": { aliasOf: "Thành phố Hà Nội" },

  "Tỉnh Tuyên Quang (Hà Giang)": {
    overviewVi: "Hành trình chinh phục cao nguyên đá vĩ đại và văn hóa vùng cao Tây Bắc.",
    overviewEn: "A majestic journey conquering rocky highlands and ethnic minority cultures.",
    insiderSecretsVi: { goldenSeason: "Tháng 10 - 11", cultureNotes: "Tôn trọng phong tục", mustTry: ["Thịt trâu gác bếp"] },
    insiderSecretsEn: { goldenSeason: "October - November", cultureNotes: "Respect local traditions", mustTry: ["Smoked buffalo meat"] },
    daysVi: [
      { day: 1, title: "Tân Trào lịch sử", activities: [{ time: "08:00 - 12:00", title: "Khu di tích Tân Trào", description: "Thăm cây đa lịch sử.", cost: "20.000 VNĐ", imageKeyword: "tuyen-quang" }] },
      { day: 2, title: "Cổng trời Quản Bạ", activities: [{ time: "09:00 - 12:00", title: "Núi Đôi Quản Bạ", description: "Ngắm toàn cảnh thung lũng.", cost: "Miễn phí", imageKeyword: "quan-ba" }] },
      { day: 3, title: "Sông Nho Quế & Mã Pì Lèng", activities: [{ time: "08:30 - 15:00", title: "Đèo Mã Pì Lèng", description: "Chèo thuyền hẻm Tu Sản.", cost: "150.000 VNĐ", imageKeyword: "ma-pi-leng" }] },
      { day: 4, title: "Cực Bắc Lũng Cú", activities: [{ time: "08:00 - 11:00", title: "Cột cờ Lũng Cú", description: "Chạm tay mốc thiêng liêng.", cost: "25.000 VNĐ", imageKeyword: "lung-cu" }] }
    ],
    daysEn: [
      { day: 1, title: "Historic Tan Trao", activities: [{ time: "08:00 - 12:00", title: "Tan Trao Relic", description: "Visit historic sites.", cost: "20,000 VND", imageKeyword: "tuyen-quang" }] },
      { day: 2, title: "Quan Ba Gateway", activities: [{ time: "09:00 - 12:00", title: "Twin Mountains", description: "Admire valley views.", cost: "Free", imageKeyword: "quan-ba" }] },
      { day: 3, title: "Nho Que River & Pass", activities: [{ time: "08:30 - 15:00", title: "Ma Pi Leng Pass", description: "Boat ride through canyon.", cost: "150,000 VND", imageKeyword: "ma-pi-leng" }] },
      { day: 4, title: "Northernmost Point", activities: [{ time: "08:00 - 11:00", title: "Lung Cu Flag Tower", description: "Stand at the country tip.", cost: "25,000 VND", imageKeyword: "lung-cu" }] }
    ]
  },
  "Tuyen Quang & Ha Giang Province": { aliasOf: "Tỉnh Tuyên Quang (Hà Giang)" },

  // --- MIỀN TRUNG & TÂY NGUYÊN ---
  "Thành phố Huế": {
    overviewVi: "Huế mang nét buồn vương giả, đền đài rêu phong và ẩm thực cung đình tinh tế.",
    overviewEn: "Hue carries a royal melancholy, mossy temples and exquisite imperial cuisine.",
    insiderSecretsVi: { goldenSeason: "Tháng 3 - 8", cultureNotes: "Nói chuyện nhẹ nhàng", mustTry: ["Bún bò Huế", "Cơm hến"] },
    insiderSecretsEn: { goldenSeason: "March - August", cultureNotes: "Speak softly", mustTry: ["Hue Beef Noodles", "Clam Rice"] },
    daysVi: [
      { day: 1, title: "Đại Nội Kinh Thành", activities: [{ time: "08:30 - 12:00", title: "Hoàng cung Huế", description: "Khám phá Tử Cấm Thành.", cost: "200.000 VNĐ", imageKeyword: "hue-citadel" }] },
      { day: 2, title: "Lăng tẩm vua chúa", activities: [{ time: "09:00 - 11:30", title: "Lăng Tự Đức", description: "Thơ mộng giữa đồi thông.", cost: "150.000 VNĐ", imageKeyword: "hue-tuduc" }] },
      { day: 3, title: "Sông Hương & Chùa Thiên Mụ", activities: [{ time: "15:00 - 18:00", title: "Chùa Thiên Mụ", description: "Ngắm hoàng hôn sông Hương.", cost: "Miễn phí", imageKeyword: "thien-mu" }] },
      { day: 4, title: "Phá Tam Giang", activities: [{ time: "14:00 - 18:30", title: "Đầm phá lớn nhất", description: "Thưởng thức hải sản đầm phá.", cost: "400.000 VNĐ", imageKeyword: "tam-giang" }] }
    ],
    daysEn: [
      { day: 1, title: "Imperial Citadel", activities: [{ time: "08:30 - 12:00", title: "Hue Imperial Palace", description: "Explore Forbidden City.", cost: "200,000 VND", imageKeyword: "hue-citadel" }] },
      { day: 2, title: "Royal Tombs", activities: [{ time: "09:00 - 11:30", title: "Tu Duc Tomb", description: "Poetic architecture in pine hills.", cost: "150,000 VND", imageKeyword: "hue-tuduc" }] },
      { day: 3, title: "Perfume River & Pagoda", activities: [{ time: "15:00 - 18:00", title: "Thien Mu Pagoda", description: "Sunset by the river.", cost: "Free", imageKeyword: "thien-mu" }] },
      { day: 4, title: "Tam Giang Lagoon", activities: [{ time: "14:00 - 18:30", title: "Lagoon Exploration", description: "Enjoy fresh seafood at sunset.", cost: "400,000 VND", imageKeyword: "tam-giang" }] }
    ]
  },
  "Hue City": { aliasOf: "Thành phố Huế" },

  // --- MIỀN NAM ---
  "Thành phố Hồ Chí Minh (BR-VT, Bình Dương)": {
    overviewVi: "Sự kết hợp hoàn hảo giữa nhịp sống đô thị sôi động và không gian biển đảo, miệt vườn.",
    overviewEn: "The perfect blend of bustling metropolitan lifestyle and coastal relaxation.",
    insiderSecretsVi: { goldenSeason: "Quanh năm", cultureNotes: "Thoải mái, cởi mở", mustTry: ["Cơm tấm", "Hải sản Vũng Tàu"] },
    insiderSecretsEn: { goldenSeason: "All year round", cultureNotes: "Open and friendly", mustTry: ["Broken rice", "Vung Tau seafood"] },
    daysVi: [
      { day: 1, title: "Sài Gòn phồn hoa", activities: [{ time: "08:00 - 11:30", title: "Bưu điện Trung tâm", description: "Kiến trúc Pháp cổ kính.", cost: "Miễn phí", imageKeyword: "saigon" }] },
      { day: 2, title: "Biển Vũng Tàu", activities: [{ time: "08:00 - 12:00", title: "Ngọn Hải Đăng", description: "Ngắm trọn thành phố biển.", cost: "Miễn phí", imageKeyword: "vung-tau" }] },
      { day: 3, title: "Hải sản Xóm Lưới", activities: [{ time: "10:00 - 14:00", title: "Chợ hải sản", description: "Thưởng thức hải sản tươi ngon.", cost: "300.000 VNĐ", imageKeyword: "seafood" }] },
      { day: 4, title: "Bình Dương mộc mạc", activities: [{ time: "09:00 - 13:00", title: "Làng gốm Lái Thiêu", description: "Thăm lò gốm truyền thống.", cost: "100.000 VNĐ", imageKeyword: "pottery" }] }
    ],
    daysEn: [
      { day: 1, title: "Vibrant Saigon", activities: [{ time: "08:00 - 11:30", title: "Central Post Office", description: "Admire classic French architecture.", cost: "Free", imageKeyword: "saigon" }] },
      { day: 2, title: "Vung Tau Seaside", activities: [{ time: "08:00 - 12:00", title: "Historic Lighthouse", description: "Panoramic view of coastal city.", cost: "Free", imageKeyword: "vung-tau" }] },
      { day: 3, title: "Local Seafood Feast", activities: [{ time: "10:00 - 14:00", title: "Seafood Market", description: "Enjoy fresh catch right on site.", cost: "300,000 VND", imageKeyword: "seafood" }] },
      { day: 4, title: "Binh Duong Craft", activities: [{ time: "09:00 - 13:00", title: "Lai Thieu Pottery Village", description: "Discover traditional pottery making.", cost: "100,000 VND", imageKeyword: "pottery" }] }
    ]
  },
  "Ho Chi Minh City": { aliasOf: "Thành phố Hồ Chí Minh (BR-VT, Bình Dương)" }
};

// Hàm hỗ trợ tự động tra cứu dữ liệu bao gồm cả dạng alias (tiếng Anh/Việt)
export function getItineraryData(destination: string) {
  let data = ITINERARY_DATA[destination];
  if (data && data.aliasOf) {
    data = ITINERARY_DATA[data.aliasOf];
  }
  // Fallback mặc định nếu không tìm thấy
  if (!data) {
    data = ITINERARY_DATA["Thành phố Hà Nội"];
  }
  return data;
}