'use client'

interface HeroProps {
  lang: 'vi' | 'en'
  onStart: () => void
}

const CONTENT = {
  vi: {
    tag: "ĐẶC SẢN DU LỊCH ĐỘC BẢN",
    headline: "Khám phá Việt Nam theo một tầng sâu hoàn toàn khác.",
    description: "Local Journey không sinh ra để chạy theo những con số hay đám đông. Đây là không gian dành riêng cho những tâm hồn sành sỏi, khao khát chạm đến linh hồn của 34 vùng đất qua lăng kính Quiet Luxury: tối giản, tinh tế và thấm đẫm bản sắc bản địa.",
    features: [
      { title: "34 Vùng Đất Tinh Hoa", desc: "Hệ thống dữ liệu độc quyền bao phủ trọn vẹn 34 đơn vị hành chính, được tinh tuyển khắt khe theo lăng kính bản địa." },
      { title: "Trải Nghiệm Đúng Gu", desc: "Không rập khuôn đại trà. Tự do định hình chuyến đi theo phong cách: Ẩm thực, Thiên nhiên, Nghỉ dưỡng và Phiêu lưu." },
      { title: "Hoạch Định Rõ Ràng", desc: "Hệ thống tự động bóc tách chi tiết ngân sách (lưu trú, ăn uống, di chuyển) và co giãn linh hoạt từ 1-4 ngày." }
    ],
    button: "Bắt đầu hành trình độc bản",
    target: "Dành cho du khách toàn cầu & những người Việt Nam trân quý giá trị quê hương."
  },
  en: {
    tag: "CURATED TRAVEL EDITORIAL",
    headline: "Experience Vietnam through a deeper, soul-stirring lens.",
    description: "LocalJourney is not designed for mass tourism or fleeting trends. This is a sanctuary for discerning travelers who yearn to touch the very soul of 34 premier regions through the quiet luxury of minimalist design and authentic storytelling.",
    features: [
      { title: "34 Curated Regions", desc: "An exclusive database covering all 34 administrative units, strictly curated through an authentic local lens." },
      { title: "Vibe-Tailored Journeys", desc: "No generic templates. Freely shape your trip based on your personal vibe: Culinary, Nature, Retreat, or Adventure." },
      { title: "Transparent Planning", desc: "Automatically breaks down detailed budgets (accommodation, dining, transport) and scales dynamically from 1-4 days." }
    ],
    button: "Begin Your Bespoke Journey",
    target: "Crafted for global explorers and modern travelers seeking true depth."
  }
}

export default function Hero({ lang, onStart }: HeroProps) {
  const t = CONTENT[lang]

  return (
    <div className="min-h-[82vh] flex flex-col justify-center items-center text-center py-12">
      
      {/* Huy hiệu tạp chí */}
      <div className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-zinc-700 mb-10 shadow-sm animate-in slide-in-from-bottom-4 duration-700">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-ping"></span>
        {t.tag}
      </div>

      {/* Tiêu đề chính */}
      <h1 className="max-w-5xl text-5xl sm:text-7xl lg:text-8xl font-serif-editorial text-zinc-950 tracking-tight leading-[1.1] mb-8 animate-in slide-in-from-bottom-6 duration-1000">
        {t.headline}
      </h1>

      {/* Miêu tả */}
      <p className="max-w-3xl text-zinc-700 text-lg sm:text-xl font-light leading-relaxed mb-12 animate-in slide-in-from-bottom-8 duration-1000">
        {t.description}
      </p>

      {/* Nút bắt đầu */}
      <div className="mb-20 animate-in zoom-in-95 duration-1000 delay-200">
        <button 
          onClick={onStart}
          className="group relative inline-flex items-center gap-4 bg-zinc-950 hover:bg-zinc-900 text-white px-12 py-6 rounded-full font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
        >
          <span>{t.button}</span>
          <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-amber-400 font-bold text-base">→</span>
        </button>
        <p className="text-xs sm:text-sm text-zinc-500 mt-5 tracking-wide font-normal">
          {t.target}
        </p>
      </div>

      {/* 3 Trụ cột giá trị (Đã fix lỗi căn lề và nâng cấp giao diện Editorial) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full border-t border-zinc-200/90 pt-16 text-center">
        {t.features.map((feat, idx) => (
          <div 
            key={idx} 
            className="space-y-4 p-8 rounded-3xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-zinc-900/5 hover:-translate-y-2 border border-transparent hover:border-zinc-200/80 group cursor-default flex flex-col items-center"
          >
            {/* Đưa số thứ tự lên trên cùng, phóng to font serif */}
            <span className="text-amber-600 font-serif-editorial italic text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform block">
              0{idx + 1}.
            </span>
            
            {/* Đặt min-height để nếu tiêu đề rớt 2 dòng thì text bên dưới vẫn cân bằng */}
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-zinc-950 min-h-[2.5rem] flex items-center justify-center leading-relaxed">
              {feat.title}
            </h3>
            
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}