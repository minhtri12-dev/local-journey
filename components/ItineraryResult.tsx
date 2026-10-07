'use client'
import { useState } from 'react'

export default function ItineraryResult({ data, onBack, lang }: { data: any, onBack: () => void, lang: 'vi' | 'en' }) {
  const [subscribed, setSubscribed] = useState(false)
  const t = {
    vi: { overview: "Cẩm nang Thổ địa", budget: "Dự toán ngân sách", save: "Lưu PDF / In Cẩm Nang", new: "Khởi tạo hành trình mới", acc: "Lưu trú", food: "Ăn uống", trans: "Di chuyển", misc: "Tham quan/Phát sinh", total: "Tổng dự kiến", newsTitle: "Nhận cẩm nang", newsDesc: "Khám phá vùng đất mới mỗi tháng.", subBtn: "Đăng ký" },
    en: { overview: "Curated Guide", budget: "Estimated Budget Breakdown", save: "Save PDF / Print Guide", new: "Create New Journey", acc: "Accommodation", food: "Dining", trans: "Transport", misc: "Activities/Misc", total: "Total Range", newsTitle: "Newsletter", newsDesc: "Discover hidden gems monthly.", subBtn: "Subscribe" }
  }[lang]

  return (
    <div className="space-y-12">
      <button onClick={onBack} className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-950 text-xs font-bold uppercase tracking-[0.15em] mb-4 print:hidden">← {lang === 'vi' ? 'Quay lại' : 'Back'}</button>

      {/* Khối 1: Tổng quan & Ngân sách chi tiết */}
      <div className="bg-white border border-zinc-200 rounded-[2rem] p-8 sm:p-14 shadow-sm relative space-y-10">
        <div className="max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-3">{t.overview}</span>
          <h2 className="text-4xl sm:text-6xl font-serif-editorial text-zinc-950 mb-6 tracking-tight">{data.destination}</h2>
          <p className="text-zinc-600 text-base leading-relaxed">{data.overview}</p>
        </div>

        {/* Bảng tính chi phí bóc tách */}
        {data.budgetDetails && (
          <div className="bg-[#FAF9F6] border border-zinc-100 rounded-2xl p-6 md:p-8 print:border-black print:bg-white">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-900 mb-6">{t.budget} ({data.budgetDetails.tier})</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm text-zinc-600">
              <div><span className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">{t.acc}</span><span className="font-semibold text-zinc-800">{data.budgetDetails.accommodation}</span></div>
              <div><span className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">{t.food}</span><span className="font-semibold text-zinc-800">{data.budgetDetails.food}</span></div>
              <div><span className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">{t.trans}</span><span className="font-semibold text-zinc-800">{data.budgetDetails.transport}</span></div>
              <div><span className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">{t.misc}</span><span className="font-semibold text-zinc-800">{data.budgetDetails.misc}</span></div>
            </div>
            <div className="border-t border-zinc-200 pt-4 flex justify-between items-center font-bold">
              <span className="text-xs uppercase tracking-widest text-zinc-900">{t.total}</span>
              <span className="text-lg text-amber-600">{data.budgetDetails.total}</span>
            </div>
          </div>
        )}
      </div>

      {/* Khối 2: Lịch trình cố định ảnh */}
      <div className="space-y-16 pt-8">
        {data.days.map((dayItem: any) => (
          <div key={dayItem.day} className="space-y-8 print:break-inside-avoid">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-zinc-950 text-white flex items-center justify-center font-serif-editorial text-2xl print:bg-white print:text-black print:border">0{dayItem.day}</div>
              <h3 className="text-2xl font-serif-editorial text-zinc-950">{lang === 'vi' ? 'Ngày' : 'Day'} {dayItem.day}: {dayItem.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dayItem.activities.map((act: any, index: number) => (
                <div key={index} className="bg-white border border-zinc-200 rounded-[1.5rem] overflow-hidden flex flex-col print:border-black print:shadow-none">
                  <div className="relative h-56 bg-zinc-100">
                    <img src={act.image} alt={act.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-white/95 text-zinc-950 font-bold text-[10px] px-3 py-1.5 rounded-xl">⏰ {act.time}</div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h4 className="font-serif-editorial font-bold text-xl">{act.title}</h4>
                    <p className="text-zinc-600 text-sm">{act.description}</p>
                    <div className="inline-block bg-zinc-100 text-zinc-600 text-[10px] font-bold px-3 py-1 rounded-lg">💰 {act.cost}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Khối 3: Outro & Nút In (Sống động hơn) */}
      <div className="pt-20 pb-10 space-y-16 border-t border-zinc-200 mt-16 print:hidden">
        <div className="bg-zinc-950 rounded-[2rem] p-10 sm:p-14 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button onClick={() => window.print()} className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.15em]">{t.save}</button>
            <button onClick={onBack} className="w-full sm:w-auto bg-transparent border border-zinc-700 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.15em]">{t.new}</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-zinc-900">{t.newsTitle}</h4>
            <p className="text-sm text-zinc-500">{t.newsDesc}</p>
            {!subscribed ? (
              <div className="flex items-center gap-2 mt-2">
                <input type="email" placeholder="Email..." className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-sm outline-none" />
                <button onClick={() => setSubscribed(true)} className="bg-zinc-950 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase hover:bg-zinc-800">{t.subBtn}</button>
              </div>
            ) : (
              <div className="bg-green-50 text-green-700 border border-green-200 px-4 py-3 rounded-lg text-sm font-medium">
                {lang === 'vi' ? '✓ Đăng ký thành công! Hãy kiểm tra hộp thư.' : '✓ Subscribed successfully! Check your inbox.'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}