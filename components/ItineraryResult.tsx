'use client'

import { Itinerary } from '../types'

interface ItineraryResultProps {
  data: Itinerary
  onBack: () => void
  lang: 'vi' | 'en'
}

const UI_TEXT = {
  vi: {
    back: "Quay lại lựa chọn",
    overview: "Curated Itinerary Collection",
    golden: "Mùa Vàng Khám Phá",
    culture: "Văn Hóa & Lưu Ý",
    mustTry: "Đặc Sản Phải Thử",
    budgetTitle: "Dự toán ngân sách tối ưu",
    selectedExp: "Selected Experience",
    outroMsg: "Cẩm nang của bạn đã sẵn sàng. Chúc bạn một chuyến đi đầy cảm hứng.",
    saveBtn: "Lưu cẩm nang này",
    newBtn: "Khám phá điểm đến khác",
    newsTitle: "Nhận cẩm nang độc quyền",
    newsDesc: "Khám phá những vùng đất ẩn giấu và ưu đãi lưu trú mỗi tháng.",
    newsPlaceholder: "Email của bạn...",
    subscribe: "Đăng ký",
    footer: "© 2026 Local Journey. Dành cho những tâm hồn đam mê xê dịch."
  },
  en: {
    back: "Back to Selection",
    overview: "Curated Itinerary Collection",
    golden: "Best Time to Visit",
    culture: "Culture & Etiquette",
    mustTry: "Must Try Flavors",
    budgetTitle: "Optimized Budget Estimate",
    selectedExp: "Selected Experience",
    outroMsg: "Your guide is ready. Wishing you an inspiring adventure.",
    saveBtn: "Save This Itinerary",
    newBtn: "Explore Another Destination",
    newsTitle: "Exclusive Insights",
    newsDesc: "Discover hidden gems and stay offers delivered monthly.",
    newsPlaceholder: "Your email address...",
    subscribe: "Subscribe",
    footer: "© 2026 LocalJourney. Crafted for modern travelers."
  }
}

export default function ItineraryResult({ data, onBack, lang }: ItineraryResultProps) {
  const t = UI_TEXT[lang]

  // Lệnh tự động kích hoạt tính năng in/lưu PDF của trình duyệt
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="space-y-12">
      
      {/* NÚT QUAY LẠI */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-950 transition-colors text-xs font-bold uppercase tracking-[0.15em] mb-4 print:hidden"
      >
        <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
        {t.back}
      </button>

      {/* KHỐI 1: TỔNG QUAN & BÍ KÍP THỔ ĐỊA */}
      <div className="bg-white border border-zinc-200 rounded-[2rem] p-8 sm:p-14 shadow-sm relative space-y-10">
        <div className="max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-3">
            {t.overview}
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif-editorial font-normal text-zinc-950 mb-6 tracking-tight">
            {data.destination}
          </h2>
          <p className="text-zinc-600 text-base font-light leading-relaxed">
            {data.overview}
          </p>
        </div>

        {data.insiderSecrets && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-zinc-100">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 block mb-3">{t.golden}</span>
              <p className="text-sm font-semibold text-zinc-900 leading-snug">{data.insiderSecrets.goldenSeason}</p>
            </div>
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-zinc-100">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 block mb-3">{t.culture}</span>
              <p className="text-sm font-semibold text-zinc-900 leading-snug">{data.insiderSecrets.cultureNotes}</p>
            </div>
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-zinc-100">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 block mb-3">{t.mustTry}</span>
              <div className="flex flex-col gap-2">
                {data.insiderSecrets.mustTry?.map((item, idx) => (
                  <div key={idx} className="bg-white border border-zinc-200 px-4 py-2.5 rounded-xl text-xs text-zinc-800 font-medium shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {data.budgetEstimate && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-zinc-950 text-white px-8 py-5 rounded-2xl gap-4 print:border print:border-black print:text-black">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-400 print:text-black">{t.budgetTitle}</span>
            <span className="text-sm font-bold tracking-wide text-amber-300 print:text-black">{data.budgetEstimate}</span>
          </div>
        )}
      </div>

      {/* KHỐI 2: LỊCH TRÌNH CHI TIẾT TỪNG NGÀY */}
      <div className="space-y-16 pt-8">
        {data.days.map((dayItem) => (
          <div key={dayItem.day} className="space-y-8 print:break-inside-avoid">
            
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-zinc-950 text-white flex items-center justify-center font-serif-editorial italic text-2xl shadow-md print:bg-white print:text-black print:border print:border-black">
                0{dayItem.day}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-zinc-950">
                  {lang === 'vi' ? 'Ngày' : 'Day'} {dayItem.day}: {dayItem.title}
                </h3>
                <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] mt-1.5 font-semibold">{t.selectedExp}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dayItem.activities.map((act, index) => {
                const imageUrl = `https://loremflickr.com/800/600/${encodeURIComponent(act.imageKeyword || data.destination + ' aesthetic')}?lock=${dayItem.day * 10 + index}`

                return (
                  <div 
                    key={index}
                    className="group bg-white border border-zinc-200 rounded-[1.5rem] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-300 flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden bg-zinc-100">
                      <img 
                        src={imageUrl} 
                        alt={act.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-zinc-950 font-bold text-[10px] tracking-widest px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1.5">
                        ⏰ {act.time}
                      </div>
                      {act.cost && (
                        <div className="absolute bottom-4 right-4 bg-zinc-950/90 backdrop-blur-md text-white font-medium text-[11px] px-3 py-1.5 rounded-xl flex items-center gap-1.5 print:bg-white print:text-black print:border print:border-black">
                          💰 {act.cost}
                        </div>
                      )}
                    </div>

                    <div className="p-7">
                      <h4 className="font-serif-editorial font-bold text-zinc-950 text-xl mb-3 leading-tight">
                        {act.title}
                      </h4>
                      <p className="text-zinc-600 text-sm font-light leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        ))}
      </div>

      {/* KHỐI 3: OUTRO KẾT THÚC & LƯU LẠI */}
      <div className="pt-20 pb-10 space-y-16 border-t border-zinc-200 mt-16 print:hidden">
        
        {/* Lời chúc & Nút lưu PDF */}
        <div className="bg-zinc-950 rounded-[2rem] p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          
          <h3 className="text-2xl sm:text-4xl font-serif-editorial text-white mb-10 leading-relaxed">
            "{t.outroMsg}"
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button 
              onClick={handlePrint}
              className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-200 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.15em] transition-colors"
            >
              {t.saveBtn}
            </button>
            <button 
              onClick={onBack}
              className="w-full sm:w-auto bg-transparent border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.15em] transition-colors"
            >
              {t.newBtn}
            </button>
          </div>
        </div>

        {/* Khối Newsletter & Chữ ký */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-zinc-900">{t.newsTitle}</h4>
            <p className="text-sm text-zinc-500">{t.newsDesc}</p>
            <div className="flex items-center gap-2 mt-2">
              <input 
                type="email" 
                placeholder={t.newsPlaceholder} 
                className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-zinc-900"
              />
              <button className="bg-zinc-950 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                {t.subscribe}
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Curator</p>
              <div className="text-3xl font-serif italic text-zinc-800 opacity-80">
                LocalJourney Editor
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-zinc-200">
          <p className="text-xs text-zinc-400 font-light tracking-wide">{t.footer}</p>
        </div>

      </div>
    </div>
  )
}