import { PoolActivity } from '../types'

const LOCAL_KNOWLEDGE = {
  // === MIỀN BẮC ===
  "Thành phố Hà Nội": { 
    food: "Phở bò Bát Đàn", foodDesc: "Xì xụp bát phở bò nước trong, thịt mềm ngọt lịm.", foodImg: "/img/hanoi-pho.jpg",
    culture: "Văn Miếu Quốc Tử Giám", cultureDesc: "Chiêm bái di tích trường đại học đầu tiên của Việt Nam.", cultureImg: "/img/hanoi-vanmieu.jpg",
    nature: "Hoàng hôn Hồ Tây", natureDesc: "Đạp xe quanh hồ và ngắm hoàng hôn rực rỡ buông xuống.", natureImg: "/img/hanoi-hotay.jpg"
  },
  "Tỉnh Quảng Ninh": { 
    food: "Chả mực Hạ Long", foodDesc: "Thưởng thức chả mực giã tay giòn sần sật nức tiếng.", foodImg: "/img/quangninh-chamuc.jpg",
    culture: "Di tích Yên Tử", cultureDesc: "Hành hương lên đỉnh thiêng Yên Tử, chạm vào cõi Phật.", cultureImg: "/img/quangninh-yentu.jpg",
    nature: "Vịnh Hạ Long", natureDesc: "Lên du thuyền ngắm hàng ngàn đảo đá vôi vươn lên.", natureImg: "/img/quangninh-vinhhalong.jpg"
  },
  "Tỉnh Lào Cai (Sa Pa)": { 
    food: "Lẩu cá hồi Sapa", foodDesc: "Quây quần bên nồi lẩu cá hồi bốc khói giữa tiết trời se lạnh.", foodImg: "/img/sapa-laucahoi.jpg",
    culture: "Bản Cát Cát", cultureDesc: "Khám phá nét đẹp văn hóa và thổ cẩm của người H'Mông.", cultureImg: "/img/sapa-catcat.jpg",
    nature: "Đỉnh Fansipan", natureDesc: "Ngồi cáp treo xuyên mây, chạm tay vào nóc nhà Đông Dương.", natureImg: "/img/sapa-fansipan.jpg"
  },
  "Tỉnh Ninh Bình": { 
    food: "Dê núi cháy tỏi", foodDesc: "Nhâm nhi đặc sản dê núi săn chắc cùng cơm cháy giòn rụm.", foodImg: "/img/ninhbinh-denui.jpg",
    culture: "Cố đô Hoa Lư", cultureDesc: "Lắng nghe lịch sử hào hùng tại đền vua Đinh - Lê.", cultureImg: "/img/ninhbinh-hoalu.jpg",
    nature: "Tuyệt tình cốc Tràng An", natureDesc: "Ngồi thuyền nan xuôi dòng nước trong vắt qua các hang.", natureImg: "/img/ninhbinh-trangan.jpg"
  },
  "Tỉnh Hà Giang": { 
    food: "Thắng cố Đồng Văn", foodDesc: "Thử thách vị giác với món thắng cố và rượu ngô nồng ấm.", foodImg: "/img/hagiang-thangco.jpg",
    culture: "Dinh Vua Mèo", cultureDesc: "Tìm hiểu kiến trúc độc đáo của dòng họ Vương.", cultureImg: "/img/hagiang-dinhvuameo.jpg",
    nature: "Đèo Mã Pí Lèng", natureDesc: "Phóng tầm mắt xuống dòng sông Nho Quế xanh ngắt.", natureImg: "/img/hagiang-mapileng.jpg"
  },

  // === MIỀN TRUNG ===
  "Thành phố Đà Nẵng": { 
    food: "Mì Quảng Ếch", foodDesc: "Thưởng thức mẹt mì quảng đậm đà hương vị miền Trung.", foodImg: "/img/danang-miquang.jpg",
    culture: "Bảo tàng Chăm", cultureDesc: "Chiêm ngưỡng những hiện vật điêu khắc vô giá.", cultureImg: "/img/danang-baotangcham.jpg",
    nature: "Biển Mỹ Khê", natureDesc: "Hòa mình vào làn nước trong xanh quyến rũ.", natureImg: "/img/danang-mykhe.jpg"
  },
  "Tỉnh Quảng Nam (Hội An)": { 
    food: "Cao lầu Hội An", foodDesc: "Bát cao lầu sợi vàng ươm cùng nước dùng bí truyền.", foodImg: "/img/hoian-caolau.jpg",
    culture: "Phố cổ & Lồng đèn", cultureDesc: "Đi bộ dưới những giàn hoa giấy và ánh đèn lồng.", cultureImg: "/img/hoian-phoco.jpg",
    nature: "Sông Thu Bồn", natureDesc: "Ngồi thuyền mộc thả hoa đăng lấp lánh trên dòng sông.", natureImg: "/img/hoian-thubon.jpg"
  },
  "Thành phố Huế": { 
    food: "Bún bò xứ Huế", foodDesc: "Thưởng thức tô bún bò cay nồng, thơm mùi ruốc.", foodImg: "/img/hue-bunbo.jpg",
    culture: "Kinh thành Huế", cultureDesc: "Dạo bước trong Đại Nội, nghe nhã nhạc cung đình.", cultureImg: "/img/hue-kinhthanh.jpg",
    nature: "Đồi Vọng Cảnh", natureDesc: "Ngắm trọn khúc quanh tuyệt đẹp của dòng sông Hương.", natureImg: "/img/hue-vongcanh.jpg"
  },
  "Tỉnh Khánh Hòa (Nha Trang)": { 
    food: "Hải sản & Nem nướng", foodDesc: "Cảm nhận vị tươi rói của hải sản biển và nem Ninh Hòa.", foodImg: "/img/nhatrang-nemnuong.jpg",
    culture: "Tháp Bà Ponagar", cultureDesc: "Chiêm ngưỡng quần thể kiến trúc tín ngưỡng kỳ vĩ.", cultureImg: "/img/nhatrang-thapba.jpg",
    nature: "Vịnh Nha Trang", natureDesc: "Hòa mình vào làn nước trong vắt, khám phá rạn san hô.", natureImg: "/img/nhatrang-vinh.jpg"
  },
  "Tỉnh Lâm Đồng (Đà Lạt)": { 
    food: "Bánh tráng nướng", foodDesc: "Nhâm nhi ly cà phê nóng bên chiếc bánh tráng giữa sương lạnh.", foodImg: "/img/dalat-banhtrang.jpg",
    culture: "Dinh Bảo Đại", cultureDesc: "Khám phá kiến trúc Pháp cổ và cuộc sống hoàng tộc.", cultureImg: "/img/dalat-dinhbaodai.jpg",
    nature: "Đồi chè Cầu Đất", natureDesc: "Đón bình minh rực rỡ trên những đồi chè xanh mướt.", natureImg: "/img/dalat-doiche.jpg"
  },
  "Tỉnh Bình Định (Quy Nhơn)": { 
    food: "Bánh xèo tôm nhảy", foodDesc: "Thưởng thức chiếc bánh xèo giòn rụm với tôm tươi rói.", foodImg: "/img/quynhon-banhxeo.jpg",
    culture: "Tháp Đôi", cultureDesc: "Khám phá nghệ thuật điêu khắc Chăm Pa giữa lòng thành phố.", cultureImg: "/img/quynhon-thapdoi.jpg",
    nature: "Kỳ Co - Eo Gió", natureDesc: "Ngỡ ngàng trước vẻ đẹp hoang sơ, hùng vĩ của eo biển.", natureImg: "/img/quynhon-kyco.jpg"
  },
  "Tỉnh Phú Yên": { 
    food: "Mắt cá ngừ đại dương", foodDesc: "Thử món ngon độc lạ, hầm thuốc bắc bồi bổ sức khỏe.", foodImg: "/img/phuyen-cangu.jpg",
    culture: "Tháp Nhạn", cultureDesc: "Ngọn tháp cổ kính sừng sững in bóng xuống dòng sông.", cultureImg: "/img/phuyen-thapnhan.jpg",
    nature: "Gành Đá Đĩa", natureDesc: "Check-in tại kỳ quan thiên nhiên độc nhất vô nhị.", natureImg: "/img/phuyen-ganhdadia.jpg"
  },
  "Tỉnh Ninh Thuận": { 
    food: "Thịt cừu nướng", foodDesc: "Nếm thử đặc sản cừu nướng trứ danh vùng đất nắng gió.", foodImg: "/img/ninhthuan-cuunuong.jpg",
    culture: "Tháp Po Klong Garai", cultureDesc: "Biểu tượng văn hóa tâm linh của đồng bào Chăm.", cultureImg: "/img/ninhthuan-thap.jpg",
    nature: "Vịnh Vĩnh Hy", natureDesc: "Đi tàu đáy kính ngắm san hô tại vịnh biển tuyệt đẹp.", natureImg: "/img/ninhthuan-vinhhy.jpg"
  },
  "Tỉnh Quảng Bình": { 
    food: "Cháo canh cá lóc", foodDesc: "Ấm bụng buổi sáng với tô cháo canh đậm đà.", foodImg: "/img/quangbinh-chaocanh.jpg",
    culture: "Tượng đài Mẹ Suốt", cultureDesc: "Lắng đọng trước di tích lịch sử bên dòng sông Nhật Lệ.", cultureImg: "/img/quangbinh-mesuot.jpg",
    nature: "Động Phong Nha", natureDesc: "Thám hiểm vương quốc hang động thạch nhũ tráng lệ.", natureImg: "/img/quangbinh-phongnha.jpg"
  },

  // === MIỀN NAM ===
  "Tỉnh Kiên Giang (Phú Quốc)": { 
    food: "Bún quậy Phú Quốc", foodDesc: "Tự tay pha nước chấm và thưởng thức tô bún hải sản.", foodImg: "/img/phuquoc-bunquay.jpg",
    culture: "Nhà tù Phú Quốc", cultureDesc: "Lắng nghe những trang sử bi hùng của dân tộc.", cultureImg: "/img/phuquoc-nhatu.jpg",
    nature: "Bãi Trường", natureDesc: "Tận hưởng khoảnh khắc hoàng hôn rực rỡ nhất Việt Nam.", natureImg: "/img/phuquoc-baitruong.jpg"
  },
  "Tỉnh Bình Thuận (Mũi Né)": { 
    food: "Lẩu thả Mũi Né", foodDesc: "Món lẩu hải sản độc đáo bài trí như một đóa hoa.", foodImg: "/img/muine-lautha.jpg",
    culture: "Làng chài Mũi Né", cultureDesc: "Hòa nhịp vào buổi sáng tấp nập của ngư dân.", cultureImg: "/img/muine-langchai.jpg",
    nature: "Đồi cát Bàu Trắng", natureDesc: "Trải nghiệm đi xe Jeep trên đồi cát mênh mông.", natureImg: "/img/muine-doicat.jpg"
  },
  "Tỉnh Bà Rịa - Vũng Tàu": { 
    food: "Bánh khọt & Hải sản", foodDesc: "Thưởng thức từng chiếc bánh khọt tôm giòn rụm.", foodImg: "/img/vungtau-banhkhot.jpg",
    culture: "Tượng Chúa dang tay", cultureDesc: "Chinh phục ngàn bậc thang để ngắm toàn cảnh thành phố.", cultureImg: "/img/vungtau-tuongchua.jpg",
    nature: "Đường ven biển", natureDesc: "Chạy xe dọc theo cung đường biển rì rào sóng vỗ.", natureImg: "/img/vungtau-duongbien.jpg"
  },
  "Thành phố Cần Thơ": { 
    food: "Hủ tiếu miệt vườn", foodDesc: "Thưởng thức tô hủ tiếu nóng hổi trên chiếc ghe tròng trành.", foodImg: "/img/cantho-hutieu.jpg",
    culture: "Chợ nổi Cái Răng", cultureDesc: "Trải nghiệm văn hóa mua bán tấp nập trên ghe xuồng.", cultureImg: "/img/cantho-chonoi.jpg",
    nature: "Cồn Sơn", natureDesc: "Tận hưởng không khí trong lành dưới tán cây ăn trái.", natureImg: "/img/cantho-conson.jpg"
  },
  "Tỉnh An Giang": { 
    food: "Bún cá Châu Đốc", foodDesc: "Thưởng thức tô bún cá vàng ươm, thơm lừng ngải bún.", foodImg: "/img/angiang-bunca.jpg",
    culture: "Miếu Bà Chúa Xứ", cultureDesc: "Hành hương đến chốn tâm linh linh thiêng bậc nhất.", cultureImg: "/img/angiang-mieuba.jpg",
    nature: "Rừng tràm Trà Sư", natureDesc: "Đi xuồng ba lá lướt trên mặt bèo xanh ngút ngàn.", natureImg: "/img/angiang-trasu.jpg"
  },
  "Tỉnh Đồng Tháp": { 
    food: "Hủ tiếu Sa Đéc", foodDesc: "Món hủ tiếu sợi dai mềm hòa quyện cùng nước dùng.", foodImg: "/img/dongthap-hutieu.jpg",
    culture: "Nhà cổ Huỳnh Thủy Lê", cultureDesc: "Nghe lại chuyện tình lãng mạn qua tác phẩm 'Người Tình'.", cultureImg: "/img/dongthap-nhaco.jpg",
    nature: "Làng hoa Sa Đéc", natureDesc: "Lạc bước giữa muôn vàn sắc hoa rực rỡ khoe sắc.", natureImg: "/img/dongthap-langhoa.jpg"
  },
  "Tỉnh Tây Ninh": { 
    food: "Bò tơ & Bánh canh", foodDesc: "Ăn đặc sản bò tơ mềm ngọt và bánh canh Trảng Bàng.", foodImg: "/img/tayninh-boto.jpg",
    culture: "Tòa Thánh Cao Đài", cultureDesc: "Khám phá kiến trúc tôn giáo độc đáo và đầy màu sắc.", cultureImg: "/img/tayninh-toathanh.jpg",
    nature: "Đỉnh Núi Bà Đen", natureDesc: "Ngồi cáp treo săn mây giữa trời xanh nóc nhà Nam Bộ.", natureImg: "/img/tayninh-baden.jpg"
  },
  "Tỉnh Bến Tre": { 
    food: "Đặc sản xứ dừa", foodDesc: "Thưởng thức các món ngon béo ngậy làm từ dừa sáp.", foodImg: "/img/bentre-dacsan.jpg",
    culture: "Lò gạch cũ", cultureDesc: "Ghé thăm những lò gạch ven sông nhuốm màu rêu phong.", cultureImg: "/img/bentre-logach.jpg",
    nature: "Chèo xuồng ba lá", natureDesc: "Len lỏi dưới những tán dừa nước rợp bóng mát rượi.", natureImg: "/img/bentre-xiong.jpg"
  }
}

// Giữ nguyên Sài Gòn vì ông đã có đủ ảnh thực tế
const HCM_POOL: PoolActivity[] = [
  { id: 'hcm_1', titleVi: 'Dấu ấn Viễn Đông', titleEn: 'Far East Heritage', descriptionVi: 'Chạm tay vào di sản kiến trúc Pháp tại Bưu điện Trung tâm.', descriptionEn: 'Touch French heritage at the Central Post Office.', time: '08:30 - 10:00', cost: 'Miễn phí', image: '/img/buudien.png', vibes: ['culture', 'relax'], budgets: ['budget', 'comfort', 'luxury'] },
  { id: 'hcm_2', titleVi: 'Góc ẩn náu giữa không trung', titleEn: 'Mid-air Hideout', descriptionVi: 'Thưởng thức ly bạc xỉu tại chung cư cũ, ngắm dòng xe cộ.', descriptionEn: 'Enjoy coffee at an old apartment.', time: '10:30 - 12:00', cost: '60.000 VNĐ', image: '/img/cf.png', vibes: ['culture', 'relax', 'food'], budgets: ['budget', 'comfort'] },
  { id: 'hcm_3', titleVi: 'Chạm vào thời gian', titleEn: 'Touch of Time', descriptionVi: 'Tự tay chuốt đồ gốm thô mộc tại làng gốm Lái Thiêu.', descriptionEn: 'Craft rustic pottery at Lai Thieu.', time: '14:00 - 17:00', cost: '150.000 VNĐ', image: '/img/langgom.png', vibes: ['culture', 'adventure'], budgets: ['budget', 'comfort'] },
  { id: 'hcm_4', titleVi: 'Vị nguyên bản của biển', titleEn: 'Original Sea Flavor', descriptionVi: 'Lạc lối trong thiên đường hải sản Xóm Lưới tươi rói.', descriptionEn: 'Get lost in Xom Luoi fresh seafood.', time: '11:00 - 13:00', cost: '300.000 VNĐ', image: '/img/choxomluoi.png', vibes: ['food', 'culture'], budgets: ['budget', 'comfort'] },
  { id: 'hcm_5', titleVi: 'Đài quan sát đại dương', titleEn: 'Ocean Observatory', descriptionVi: 'Đứng trên đỉnh ngọn hải đăng Vũng Tàu ngắm biển.', descriptionEn: 'Stand atop Vung Tau lighthouse.', time: '16:00 - 18:00', cost: 'Miễn phí', image: '/img/haidang.png', vibes: ['nature', 'relax', 'adventure'], budgets: ['budget', 'comfort', 'luxury'] },
  { id: 'hcm_6', titleVi: 'Đêm nhiệt đới bất tận', titleEn: 'Endless Tropical Night', descriptionVi: 'Hòa mình vào cuồng nộ của phố Bùi Viện.', descriptionEn: 'Immerse in the frenzy of Bui Vien.', time: '20:00 - 23:00', cost: '250.000 VNĐ', image: '/img/buivien.png', vibes: ['adventure', 'food'], budgets: ['budget', 'comfort'] }
]

const generateLocalPool = (prov: string): PoolActivity[] => {
  const local = LOCAL_KNOWLEDGE[prov as keyof typeof LOCAL_KNOWLEDGE] || LOCAL_KNOWLEDGE["Thành phố Hà Nội"]
  return [
    { id: `${prov}_1`, titleVi: local.food, titleEn: 'Local Specialty', descriptionVi: local.foodDesc, descriptionEn: 'Taste the authentic local dish.', time: '11:30 - 13:00', cost: '80.000 VNĐ', image: local.foodImg, vibes: ['food', 'culture'], budgets: ['budget', 'comfort'] },
    { id: `${prov}_2`, titleVi: local.culture, titleEn: 'Heritage Mark', descriptionVi: local.cultureDesc, descriptionEn: 'Immerse in local heritage.', time: '09:00 - 11:00', cost: '50.000 VNĐ', image: local.cultureImg, vibes: ['culture'], budgets: ['budget', 'comfort', 'luxury'] },
    { id: `${prov}_3`, titleVi: local.nature, titleEn: 'Breathtaking Nature', descriptionVi: local.natureDesc, descriptionEn: 'Explore natural landscapes.', time: '15:00 - 17:30', cost: '150.000 VNĐ', image: local.natureImg, vibes: ['nature', 'adventure'], budgets: ['budget', 'comfort', 'luxury'] },
    { id: `${prov}_4`, titleVi: 'Tinh hoa ẩm thực tối', titleEn: 'Evening Feast', descriptionVi: 'Thưởng thức bữa tối sang trọng với nguyên liệu bản địa.', descriptionEn: 'Enjoy a luxurious dinner.', time: '19:00 - 21:00', cost: '1.200.000 VNĐ', image: `/img/${prov}-toilangman.jpg`, vibes: ['food', 'relax'], budgets: ['luxury'] },
    { id: `${prov}_5`, titleVi: 'Nhịp sống chợ đêm', titleEn: 'Night Market', descriptionVi: 'Dạo chơi khu chợ đêm sầm uất, hòa vào nhịp sống địa phương.', descriptionEn: 'Stroll through the night market.', time: '20:00 - 22:00', cost: '100.000 VNĐ', image: `/img/${prov}-chodem.jpg`, vibes: ['food', 'adventure'], budgets: ['budget', 'comfort'] },
    { id: `${prov}_6`, titleVi: 'Thư giãn tuyệt đối', titleEn: 'Ultimate Relaxation', descriptionVi: 'Thả mình vào không gian tĩnh lặng ngắm nhìn thiên nhiên bao la.', descriptionEn: 'Relax in a quiet space.', time: '14:00 - 16:00', cost: '800.000 VNĐ', image: `/img/${prov}-spa.jpg`, vibes: ['relax'], budgets: ['comfort', 'luxury'] },
    { id: `${prov}_7`, titleVi: 'Chút bình yên buổi sớm', titleEn: 'Peaceful Morning', descriptionVi: 'Thưởng thức ly cà phê, ngắm nhịp sống bắt đầu.', descriptionEn: 'Enjoy morning coffee.', time: '07:30 - 08:30', cost: '40.000 VNĐ', image: `/img/${prov}-sang.jpg`, vibes: ['culture', 'relax'], budgets: ['budget', 'comfort'] },
    { id: `${prov}_8`, titleVi: 'Dấu ấn thời gian', titleEn: 'Time Marks', descriptionVi: 'Ghé thăm những góc phố lưu giữ ký ức vùng đất.', descriptionEn: 'Visit ancient streets.', time: '10:00 - 11:30', cost: '40.000 VNĐ', image: local.cultureImg, vibes: ['culture', 'adventure'], budgets: ['budget', 'comfort', 'luxury'] }
  ]
}

export const ITINERARY_DATA: Record<string, any> = {
  "TP. Hồ Chí Minh": { 
    overviewVi: "Hành trình khám phá sự sầm uất của Sài Gòn, vẻ mộc mạc Bình Dương và biển Vũng Tàu.", 
    overviewEn: "Discover Saigon's life, Binh Duong pottery, and Vung Tau ocean.", 
    insiderSecretsVi: { goldenSeason: "Quanh năm", cultureNotes: "Phóng khoáng.", mustTry: ["Cơm tấm", "Hải sản"] }, 
    insiderSecretsEn: { goldenSeason: "All year round", cultureNotes: "Liberal.", mustTry: ["Broken rice", "Seafood"] }, 
    activityPool: HCM_POOL 
  }
}

Object.keys(LOCAL_KNOWLEDGE).forEach(prov => {
  const local = LOCAL_KNOWLEDGE[prov as keyof typeof LOCAL_KNOWLEDGE]
  ITINERARY_DATA[prov] = {
    overviewVi: `Hành trình khám phá ${prov} đưa bạn chạm vào những nét đẹp nguyên bản nhất: từ món ${local.food} nức tiếng đến vẻ hùng vĩ của ${local.nature}.`,
    overviewEn: `Discover ${prov} with its original beauty: from the famous ${local.food} to the stunning ${local.nature}.`,
    insiderSecretsVi: { goldenSeason: "Theo mùa bản địa", cultureNotes: "Tôn trọng văn hóa bản địa.", mustTry: [local.food, "Đặc sản địa phương"] },
    insiderSecretsEn: { goldenSeason: "Local seasons", cultureNotes: "Respect local culture.", mustTry: [local.food, "Local specialties"] },
    activityPool: generateLocalPool(prov)
  }
})

export function getItineraryData(destinationVi: string) {
  return ITINERARY_DATA[destinationVi] || ITINERARY_DATA["TP. Hồ Chí Minh"]
}