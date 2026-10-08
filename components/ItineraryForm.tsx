'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const REGIONS = {
  "Miền Bắc": {
    en: "Northern Vietnam",
    itemsVi: ["Thành phố Hà Nội", "Tỉnh Quảng Ninh", "Tỉnh Lào Cai (Sa Pa)", "Tỉnh Ninh Bình", "Tỉnh Hà Giang"],
    itemsEn: ["Hanoi City", "Quang Ninh Province", "Lao Cai (Sa Pa)", "Ninh Binh Province", "Ha Giang Province"]
  },
  "Miền Trung & Tây Nguyên": {
    en: "Central & Highlands",
    itemsVi: ["Thành phố Đà Nẵng", "Tỉnh Quảng Nam (Hội An)", "Thành phố Huế", "Tỉnh Khánh Hòa (Nha Trang)", "Tỉnh Lâm Đồng (Đà Lạt)", "Tỉnh Bình Định (Quy Nhơn)", "Tỉnh Phú Yên", "Tỉnh Ninh Thuận", "Tỉnh Quảng Bình"],
    itemsEn: ["Da Nang City", "Quang Nam (Hoi An)", "Hue City", "Khanh Hoa (Nha Trang)", "Lam Dong (Da Lat)", "Binh Dinh (Quy Nhon)", "Phu Yen Province", "Ninh Thuan Province", "Quang Binh Province"]
  },
  "Miền Nam": {
    en: "Southern Vietnam",
    itemsVi: ["TP. Hồ Chí Minh", "Tỉnh Kiên Giang (Phú Quốc)", "Tỉnh Bình Thuận (Mũi Né)", "Tỉnh Bà Rịa - Vũng Tàu", "Thành phố Cần Thơ", "Tỉnh An Giang", "Tỉnh Đồng Tháp", "Tỉnh Tây Ninh", "Tỉnh Bến Tre"],
    itemsEn: ["Ho Chi Minh City", "Kien Giang (Phu Quoc)", "Binh Thuan (Mui Ne)", "Ba Ria - Vung Tau", "Can Tho City", "An Giang Province", "Dong Thap Province", "Tay Ninh Province", "Ben Tre Province"]
  }
}

const UI_TEXT = {
  vi: { step1: "01. Chọn vùng miền", step2: "02. Chọn điểm đến", step3: "03. Thời gian", step4: "04. Ngân sách", step5: "05. Phong cách (Vibe)", search: "Tìm nhanh...", submit: "Khám phá hành trình độc bản", loading: "Đang kiến tạo...", durations: ["1 ngày", "2 ngày 1 đêm", "3 ngày 2 đêm", "4 ngày 3 đêm"], budgets: ["Tiết kiệm (Phượt bụi)", "Thoải mái (Tiện nghi)", "Sang chảnh (5 sao)"], vibes: ["Ẩm thực & Văn hóa", "Thiên nhiên hùng vĩ", "Nghỉ dưỡng & Chữa lành", "Phiêu lưu mạo hiểm"] },
  en: { step1: "01. Region", step2: "02. Destination", step3: "03. Duration", step4: "04. Budget", step5: "05. Travel Vibe", search: "Search...", submit: "Craft My Bespoke Journey", loading: "Crafting...", durations: ["1 Day", "2 Days 1 Night", "3 Days 2 Nights", "4 Days 3 Nights"], budgets: ["Budget (Backpacking)", "Comfort (Mid-range)", "Luxury (Premium)"], vibes: ["Culinary & Culture", "Majestic Nature", "Wellness & Retreat", "Adventure & Trekking"] }
}

export default function ItineraryForm({ onSubmit, loading, lang }: { onSubmit: any, loading: boolean, lang: 'vi' | 'en' }) {
  const [activeRegion, setActiveRegion] = useState<keyof typeof REGIONS>("Miền Nam") // Mặc định để Miền Nam cho dễ test SG
  const [searchQuery, setSearchQuery] = useState("")
  const [openDropdown, setOpenDropdown] = useState<'duration' | 'budget' | 'vibe' | null>(null)
  
  const text = UI_TEXT[lang]

  const [formData, setFormData] = useState({
    destinationVi: 'TP. Hồ Chí Minh', destinationEn: 'Ho Chi Minh City',
    duration: text.durations[2], budget: text.budgets[1], vibe: text.vibes[0]
  })

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      duration: text.durations[UI_TEXT[lang === 'vi' ? 'en' : 'vi'].durations.indexOf(prev.duration)] || text.durations[2],
      budget: text.budgets[UI_TEXT[lang === 'vi' ? 'en' : 'vi'].budgets.indexOf(prev.budget)] || text.budgets[1],
      vibe: text.vibes[UI_TEXT[lang === 'vi' ? 'en' : 'vi'].vibes.indexOf(prev.vibe)] || text.vibes[0]
    }))
  }, [lang])

  const currentItems = lang === 'vi' ? REGIONS[activeRegion].itemsVi : REGIONS[activeRegion].itemsEn
  const filteredProvinces = currentItems.filter(prov => prov.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ destinationVi: formData.destinationVi, destinationEn: formData.destinationEn, duration: formData.duration, budget: formData.budget, vibe: formData.vibe, lang })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 bg-white p-8 sm:p-14 rounded-[2.5rem] border border-zinc-200/85 shadow-sm relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{text.step1}</label>
          <div className="flex flex-col gap-3">
            {(Object.keys(REGIONS) as Array<keyof typeof REGIONS>).map((region) => (
              <button key={region} type="button" onClick={() => { setActiveRegion(region); setSearchQuery(""); }}
                className={`py-3.5 rounded-2xl transition-all text-xs font-bold uppercase tracking-wider ${activeRegion === region ? 'bg-zinc-950 text-white' : 'bg-[#FAF9F6] text-zinc-500 hover:bg-zinc-100'}`}>
                {lang === 'vi' ? region : REGIONS[region].en}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center"><label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{text.step2}</label></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {filteredProvinces.map((prov, index) => {
              const vi = REGIONS[activeRegion].itemsVi[lang === 'en' ? REGIONS[activeRegion].itemsEn.indexOf(prov) : index]
              const en = REGIONS[activeRegion].itemsEn[lang === 'en' ? REGIONS[activeRegion].itemsEn.indexOf(prov) : index]
              return (
                <button key={prov} type="button" onClick={() => setFormData({ ...formData, destinationVi: vi, destinationEn: en })}
                  className={`px-4 py-3 text-left rounded-xl text-xs transition-all border ${formData.destinationVi === vi ? 'bg-zinc-950 text-white font-bold' : 'bg-[#FAF9F6] text-zinc-600 hover:bg-zinc-100'}`}>
                  {prov}
                </button>
              )
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-100">
        {[
          { key: 'duration', label: text.step3, options: text.durations, val: formData.duration },
          { key: 'budget', label: text.step4, options: text.budgets, val: formData.budget },
          { key: 'vibe', label: text.step5, options: text.vibes, val: formData.vibe }
        ].map((col) => (
          <div key={col.key} className="space-y-3 relative">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{col.label}</label>
            <div onClick={() => setOpenDropdown(openDropdown === col.key ? null : col.key as any)} className="bg-[#FAF9F6] border border-zinc-200 rounded-2xl p-4 text-sm font-medium text-zinc-800 cursor-pointer">
              {col.val}
            </div>
            {openDropdown === col.key && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white border border-zinc-100 rounded-2xl shadow-xl z-50 overflow-hidden">
                {col.options.map((opt) => (
                  <div key={opt} onClick={() => { setFormData({...formData, [col.key]: opt}); setOpenDropdown(null); }} className="px-5 py-3 text-sm cursor-pointer hover:bg-zinc-50">{opt}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit" disabled={loading} 
        className="w-full mt-8 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-[0.2em] py-5 rounded-2xl shadow-lg disabled:opacity-50 transition-shadow hover:shadow-2xl"
      >
        {loading ? text.loading : text.submit}
      </motion.button>
    </form>
  )
}