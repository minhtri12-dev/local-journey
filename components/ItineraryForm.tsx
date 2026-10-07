'use client'

import { useState, useRef, useEffect } from 'react'

const REGIONS = {
  "Miền Bắc": {
    en: "Northern Vietnam",
    itemsVi: [
      "Thành phố Hà Nội", "Tỉnh Tuyên Quang (Hà Giang)", "Tỉnh Lào Cai (Yên Bái)", "Tỉnh Thái Nguyên (Bắc Kạn)", 
      "Tỉnh Phú Thọ (Vĩnh Phúc, Hoà Bình)", "Tỉnh Bắc Ninh (Bắc Giang)", "Tỉnh Hưng Yên (Thái Bình)", 
      "Thành phố Hải Phòng (Hải Dương)", "Tỉnh Ninh Bình (Hà Nam, Nam Định)", "Tỉnh Lai Châu", 
      "Tỉnh Điện Biên", "Tỉnh Sơn La", "Tỉnh Lạng Sơn", "Tỉnh Quảng Ninh", "Tỉnh Cao Bằng"
    ],
    itemsEn: [
      "Hanoi City", "Tuyen Quang & Ha Giang Province", "Lao Cai & Yen Bai Province", "Thai Nguyen & Bac Kan Province", 
      "Phu Tho, Vinh Phuc & Hoa Binh Province", "Bac Ninh & Bac Giang Province", "Hung Yen & Thai Binh Province", 
      "Hai Phong City & Hai Duong", "Ninh Binh, Ha Nam & Nam Dinh Province", "Lai Chau Province", 
      "Dien Bien Province", "Son La Province", "Lang Son Province", "Quang Ninh Province", "Cao Bang Province"
    ]
  },
  "Miền Trung & Tây Nguyên": {
    en: "Central & Highlands",
    itemsVi: [
      "Thành phố Huế", "Thành phố Đà Nẵng (Quảng Nam)", "Tỉnh Thanh Hoá", "Tỉnh Nghệ An", "Tỉnh Hà Tĩnh", 
      "Tỉnh Quảng Trị (Quảng Bình)", "Tỉnh Quảng Ngãi (Kon Tum)", "Tỉnh Gia Lai (Bình Định)", 
      "Tỉnh Khánh Hoà (Ninh Thuận)", "Tỉnh Lâm Đồng (Đắk Nông, Bình Thuận)", "Tỉnh Đắk Lắk (Phú Yên)"
    ],
    itemsEn: [
      "Hue City", "Da Nang City & Quang Nam", "Thanh Hoa Province", "Nghe An Province", "Ha Tinh Province", 
      "Quang Tri & Quang Binh Province", "Quang Ngai & Kon Tum Province", "Gia Lai & Binh Dinh Province", 
      "Khanh Hoa & Ninh Thuan Province", "Lam Dong, Dak Nong & Binh Thuan Province", "Dak Lak & Phu Yen Province"
    ]
  },
  "Miền Nam": {
    en: "Southern Vietnam",
    itemsVi: [
      "Thành phố Hồ Chí Minh (BR-VT, Bình Dương)", "Thành phố Đồng Nai (Bình Phước)", "Tỉnh Tây Ninh (Long An)", 
      "Thành phố Cần Thơ (Sóc Trăng, Hậu Giang)", "Tỉnh Vĩnh Long (Bến Tre, Trà Vinh)", 
      "Tỉnh Đồng Tháp (Tiền Giang)", "Tỉnh Cà Mau (Bạc Liêu)", "Tỉnh An Giang (Kiên Giang)"
    ],
    itemsEn: [
      "Ho Chi Minh City", "Dong Nai & Binh Phuoc Province", "Tay Ninh & Long An Province", 
      "Can Tho City, Soc Trang & Hau Giang", "Vinh Long, Ben Tre & Tra Vinh Province", 
      "Dong Thap & Tien Giang Province", "Ca Mau & Bac Lieu Province", "An Giang & Kien Giang Province"
    ]
  }
}

const UI_TEXT = {
  vi: {
    step1: "01. Chọn vùng miền khám phá", step2: "02. Chọn tỉnh thành cụ thể", step3: "03. Thời gian chuyến đi", step4: "04. Phong cách & Ngân sách",
    search: "Tìm nhanh tỉnh thành...", empty: "Không tìm thấy tỉnh thành phù hợp.", submit: "Khám phá hành trình độc bản", loading: "Đang kiến tạo hành trình...",
    durations: ["1 ngày (Gọn nhẹ, chớp nhoáng)", "2 ngày 1 đêm (Cuối tuần thư giãn)", "3 ngày 2 đêm (Khám phá tiêu chuẩn)", "4 ngày 3 đêm (Trải nghiệm chuyên sâu)"],
    budgets: ["Tiết kiệm (Phượt bụi & Trải nghiệm)", "Thoải mái (Tiện nghi, tầm trung)", "Sang chảnh (Resort & 5 sao cao cấp)"]
  },
  en: {
    step1: "01. Select a Region", step2: "02. Choose a Destination", step3: "03. Trip Duration", step4: "04. Travel Style & Budget",
    search: "Search destinations...", empty: "No destinations found.", submit: "Craft My Bespoke Journey", loading: "Crafting your journey...",
    durations: ["1 Day (Quick escape)", "2 Days 1 Night (Weekend retreat)", "3 Days 2 Nights (Standard discovery)", "4 Days 3 Nights (Immersive experience)"],
    budgets: ["Budget (Backpacking & Authentic)", "Comfort (Mid-range convenience)", "Luxury (5-star & Premium Resorts)"]
  }
}

export default function ItineraryForm({ onSubmit, loading, lang }: { onSubmit: any, loading: boolean, lang: 'vi' | 'en' }) {
  const [activeRegion, setActiveRegion] = useState<keyof typeof REGIONS>("Miền Bắc")
  const [searchQuery, setSearchQuery] = useState("")
  const [openDropdown, setOpenDropdown] = useState<'duration' | 'budget' | null>(null)
  
  const text = UI_TEXT[lang]

  const [formData, setFormData] = useState({
    destination: 'Thành phố Hà Nội',
    duration: text.durations[2], // Mặc định 3 ngày 2 đêm hoặc 4 ngày
    budget: text.budgets[1],
    vibe: 'Discovery'
  })

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      destination: lang === 'en' ? 'Hanoi City' : 'Thành phố Hà Nội',
      duration: text.durations[2],
      budget: text.budgets[1]
    }))
  }, [lang])

  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setOpenDropdown(null)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const currentItems = lang === 'vi' ? REGIONS[activeRegion].itemsVi : REGIONS[activeRegion].itemsEn
  const filteredProvinces = currentItems.filter(prov => prov.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ ...formData, lang })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12 bg-white p-8 sm:p-14 rounded-[2.5rem] border border-zinc-200/85 shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative z-10">
      
      <div className="space-y-6">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{text.step1}</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(Object.keys(REGIONS) as Array<keyof typeof REGIONS>).map((region) => (
            <button key={region} type="button" onClick={() => { setActiveRegion(region); setSearchQuery(""); }}
              className={`flex flex-col items-center justify-center py-4.5 rounded-2xl transition-all duration-300 border ${
                activeRegion === region ? 'bg-zinc-950 text-white border-zinc-950 shadow-md scale-[1.02]' : 'bg-[#FAF9F6] text-zinc-500 border-zinc-100 hover:border-zinc-300 hover:text-zinc-900'
              }`}
            >
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">{lang === 'vi' ? region : REGIONS[region].en}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6 bg-[#FAF9F6] p-6 sm:p-8 rounded-3xl border border-zinc-200/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{text.step2}</label>
          <input type="text" placeholder={text.search} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 bg-white border border-zinc-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-zinc-400 transition-colors shadow-2xs"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-64 overflow-y-auto custom-scrollbar pr-2">
          {filteredProvinces.length > 0 ? filteredProvinces.map((prov, index) => {
            const originalVi = REGIONS[activeRegion].itemsVi[lang === 'en' ? REGIONS[activeRegion].itemsEn.indexOf(prov) : index]

            return (
              <button key={prov} type="button" onClick={() => setFormData({ ...formData, destination: originalVi || prov })}
                className={`px-4 py-3.5 text-left rounded-xl text-xs sm:text-sm transition-all border ${
                  (formData.destination === originalVi || formData.destination === prov) ? 'bg-white text-zinc-950 border-zinc-950 font-bold shadow-sm' : 'bg-white/60 text-zinc-600 border-transparent hover:bg-white hover:border-zinc-200'
                }`}
              >{prov}</button>
            )
          }) : <div className="col-span-full text-center py-8 text-zinc-400 text-sm">{text.empty}</div>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" ref={dropdownRef}>
        <div className="space-y-4 relative">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{text.step3}</label>
          <div onClick={() => setOpenDropdown(openDropdown === 'duration' ? null : 'duration')} className="w-full bg-[#FAF9F6] border border-zinc-200 hover:border-zinc-400 rounded-2xl p-4 text-sm cursor-pointer flex justify-between items-center transition-colors">
            <span className="font-medium text-zinc-800">{formData.duration}</span>
          </div>
          {openDropdown === 'duration' && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-zinc-100 rounded-2xl shadow-xl z-50 overflow-hidden">
              {text.durations.map((opt) => (
                <div key={opt} onClick={() => { setFormData({...formData, duration: opt}); setOpenDropdown(null); }} className="px-5 py-3.5 text-sm cursor-pointer hover:bg-[#FAF9F6]">{opt}</div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4 relative">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{text.step4}</label>
          <div onClick={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')} className="w-full bg-[#FAF9F6] border border-zinc-200 hover:border-zinc-400 rounded-2xl p-4 text-sm cursor-pointer flex justify-between items-center transition-colors">
            <span className="font-medium text-zinc-800">{formData.budget}</span>
          </div>
          {openDropdown === 'budget' && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-zinc-100 rounded-2xl shadow-xl z-50 overflow-hidden">
              {text.budgets.map((opt) => (
                <div key={opt} onClick={() => { setFormData({...formData, budget: opt}); setOpenDropdown(null); }} className="px-5 py-3.5 text-sm cursor-pointer hover:bg-[#FAF9F6]">{opt}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button type="submit" disabled={loading} className="w-full mt-6 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm uppercase tracking-[0.2em] py-5 rounded-2xl transition-all duration-300 disabled:opacity-50 shadow-lg">
        {loading ? text.loading : text.submit}
      </button>

    </form>
  )
}