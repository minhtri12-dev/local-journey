// Bộ sưu tập ảnh Unsplash chuẩn xác, không bị đổi ngẫu nhiên
const IMAGES = {
  hanoi: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800&auto=format&fit=crop",
  hcm: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crop",
  hue: "https://images.unsplash.com/photo-1590212008775-802521eef00c?q=80&w=800&auto=format&fit=crop",
  danang: "https://images.unsplash.com/photo-1559508551-44bff1de756b?q=80&w=800&auto=format&fit=crop",
  nature: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
  food: "https://images.unsplash.com/photo-1626082895617-2c63df9f9fb7?q=80&w=800&auto=format&fit=crop",
  culture: "https://images.unsplash.com/photo-1540306130452-9bc505f1595f?q=80&w=800&auto=format&fit=crop"
};

// Hàm sinh dữ liệu 4 ngày tự động cho các tỉnh chưa cấu hình tay (Đảm bảo không bao giờ lỗi)
function generateFallback(nameVi: string, nameEn: string) {
  return {
    overviewVi: `${nameVi} mang một vẻ đẹp nguyên sơ, đậm đà bản sắc địa phương. Một hành trình đưa bạn thoát khỏi những xô bồ thường nhật để chạm vào nhịp sống chân thật nhất của vùng đất này.`,
    overviewEn: `${nameEn} offers pristine beauty and deep local heritage. A journey that takes you away from the daily hustle to touch the most authentic rhythm of this land.`,
    insiderSecretsVi: { goldenSeason: "Tháng 8 - Tháng 11 (Tiết trời đẹp nhất)", cultureNotes: "Luôn thân thiện và tôn trọng không gian văn hóa bản địa.", mustTry: ["Đặc sản chợ phiên", "Món ngon đường phố", "Cà phê địa phương"] },
    insiderSecretsEn: { goldenSeason: "August - November (Best weather)", cultureNotes: "Always be friendly and respect the local cultural space.", mustTry: ["Local market specialties", "Street food", "Local coffee"] },
    daysVi: [
      { day: 1, title: "Chạm ngõ & Cảm nhận", activities: [{ time: "08:00 - 11:30", title: "Khám phá trung tâm", description: "Làm quen với nhịp sống và thưởng thức bữa sáng bản địa.", cost: "100.000 VNĐ", image: IMAGES.culture }, { time: "14:00 - 17:30", title: "Điểm đến biểu tượng", description: "Check-in những góc mang đậm tính lịch sử của tỉnh.", cost: "Miễn phí", image: IMAGES.nature }] },
      { day: 2, title: "Linh hồn của vùng đất", activities: [{ time: "07:30 - 13:00", title: "Hòa mình vào thiên nhiên", description: "Hành trình xa trung tâm để tìm về cảnh quan nguyên sơ.", cost: "250.000 VNĐ", image: IMAGES.nature }, { time: "16:00 - 19:00", title: "Ẩm thực hoàng hôn", description: "Thưởng thức bữa tối đặc sản đậm đà.", cost: "300.000 VNĐ", image: IMAGES.food }] },
      { day: 3, title: "Dấu ấn thổ địa", activities: [{ time: "09:00 - 12:00", title: "Làng nghề truyền thống", description: "Trực tiếp xem người dân địa phương chế tác sản phẩm.", cost: "150.000 VNĐ", image: IMAGES.culture }, { time: "15:00 - 18:00", title: "Trải nghiệm tự do", description: "Thong dong quán xá hoặc cà phê chiều.", cost: "100.000 VNĐ", image: IMAGES.hanoi }] },
      { day: 4, title: "Lời chào tạm biệt", activities: [{ time: "06:00 - 09:30", title: "Chợ sớm tinh mơ", description: "Mua sắm đặc sản và tận hưởng bình minh.", cost: "Tùy tâm", image: IMAGES.food }] }
    ],
    daysEn: [
      { day: 1, title: "Arrival & Impressions", activities: [{ time: "08:00 - 11:30", title: "City Heart", description: "Get acquainted with the rhythm and enjoy local breakfast.", cost: "100,000 VND", image: IMAGES.culture }, { time: "14:00 - 17:30", title: "Iconic Landmarks", description: "Visit the province's historical corners.", cost: "Free", image: IMAGES.nature }] },
      { day: 2, title: "Soul of the Land", activities: [{ time: "07:30 - 13:00", title: "Nature Immersion", description: "Journey outside the center to untouched landscapes.", cost: "250,000 VND", image: IMAGES.nature }, { time: "16:00 - 19:00", title: "Sunset Cuisine", description: "Savor a rich dinner of regional specialties.", cost: "300,000 VND", image: IMAGES.food }] },
      { day: 3, title: "Local Footprints", activities: [{ time: "09:00 - 12:00", title: "Traditional Craft Village", description: "Watch locals craft their heritage products.", cost: "150,000 VND", image: IMAGES.culture }, { time: "15:00 - 18:00", title: "Free Exploration", description: "Leisurely walk or afternoon coffee.", cost: "100,000 VND", image: IMAGES.hanoi }] },
      { day: 4, title: "Farewell Morning", activities: [{ time: "06:00 - 09:30", title: "Early Market", description: "Shop for souvenirs and catch the sunrise.", cost: "Flexible", image: IMAGES.food }] }
    ]
  };
}

export const ITINERARY_DATA: Record<string, any> = {
  // Dữ liệu làm kỹ tay cho Hà Nội (Đã xóa lỗi Tràng An)
  "Thành phố Hà Nội": {
    overviewVi: "Hà Nội không vội được đâu. Cảm giác ngồi nhâm nhi ly nâu đá ven đường nhìn dòng người hối hả, hay hít hà mùi phở bò mậu dịch buổi sáng sớm chính là thứ gây nghiện.",
    overviewEn: "Hanoi cannot be rushed. Sitting on a tiny plastic stool sipping iced milk coffee while watching the bustling streets is truly addictive.",
    insiderSecretsVi: { goldenSeason: "Tháng 9 - 11", cultureNotes: "Giao tiếp thanh lịch, ăn mặc kín đáo khi vào đền chùa.", mustTry: ["Phở bò Khôi", "Cà phê trứng", "Chả cá Lăng"] },
    insiderSecretsEn: { goldenSeason: "September - November", cultureNotes: "Dress modestly when visiting temples.", mustTry: ["Khoi Beef Pho", "Egg Coffee", "La Vong Grilled Fish"] },
    daysVi: [
      { day: 1, title: "Vị Thủ Đô & Dấu ấn thời gian", activities: [{ time: "07:30 - 09:00", title: "Phở bò truyền thống", description: "Thưởng thức phở vỉa hè đúng điệu.", cost: "60.000 VNĐ", image: IMAGES.food }, { time: "15:00 - 18:00", title: "Hoàng hôn Hồ Tây", description: "Đạp xe vòng quanh hồ, đón gió chiều.", cost: "Miễn phí", image: IMAGES.hanoi }] },
      { day: 2, title: "Dấu ấn lịch sử nghìn năm", activities: [{ time: "08:00 - 11:30", title: "Hoàng Thành Thăng Long", description: "Khám phá di sản thế giới.", cost: "30.000 VNĐ", image: IMAGES.culture }, { time: "19:00 - 21:00", title: "Phố cổ về đêm", description: "Uống bia hơi Tạ Hiện.", cost: "150.000 VNĐ", image: IMAGES.hanoi }] },
      { day: 3, title: "Nghệ thuật & Tinh hoa", activities: [{ time: "08:30 - 12:00", title: "Bảo tàng Mỹ thuật", description: "Chiêm ngưỡng tranh sơn mài.", cost: "40.000 VNĐ", image: IMAGES.culture }, { time: "15:00 - 18:00", title: "Nhà hát Lớn", description: "Check-in và cà phê ban công.", cost: "100.000 VNĐ", image: IMAGES.hanoi }] },
      { day: 4, title: "Bình minh Thủ đô", activities: [{ time: "05:00 - 08:00", title: "Chợ hoa Quảng Bá", description: "Ngắm hoa rực rỡ lúc rạng sáng.", cost: "Miễn phí", image: IMAGES.nature }] }
    ],
    daysEn: [
      { day: 1, title: "Capital Flavors & Time", activities: [{ time: "07:30 - 09:00", title: "Traditional Beef Pho", description: "Enjoy iconic sidewalk pho.", cost: "60,000 VND", image: IMAGES.food }, { time: "15:00 - 18:00", title: "West Lake Sunset", description: "Cycle around the lake.", cost: "Free", image: IMAGES.hanoi }] },
      { day: 2, title: "Millennium Heritage", activities: [{ time: "08:00 - 11:30", title: "Imperial Citadel", description: "Explore world heritage site.", cost: "30,000 VND", image: IMAGES.culture }, { time: "19:00 - 21:00", title: "Old Quarter Night", description: "Drink local draft beer at Ta Hien.", cost: "150,000 VND", image: IMAGES.hanoi }] },
      { day: 3, title: "Art & Essence", activities: [{ time: "08:30 - 12:00", title: "Fine Arts Museum", description: "Appreciate lacquer paintings.", cost: "40,000 VND", image: IMAGES.culture }, { time: "15:00 - 18:00", title: "Opera House", description: "Balcony coffee view.", cost: "100,000 VND", image: IMAGES.hanoi }] },
      { day: 4, title: "Capital Dawn", activities: [{ time: "05:00 - 08:00", title: "Quang Ba Flower Market", description: "Experience bustling flower trade.", cost: "Free", image: IMAGES.nature }] }
    ]
  },
  "Hanoi City": { aliasOf: "Thành phố Hà Nội" }
};

// Hàm truy xuất dữ liệu cực kỳ an toàn
export function getItineraryData(destinationVi: string, destinationEn: string) {
  let data = ITINERARY_DATA[destinationVi] || ITINERARY_DATA[destinationEn];
  if (data && data.aliasOf) data = ITINERARY_DATA[data.aliasOf];
  if (!data) return generateFallback(destinationVi, destinationEn);
  return data;
}