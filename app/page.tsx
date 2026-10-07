'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ItineraryForm from '../components/ItineraryForm'
import ItineraryResult from '../components/ItineraryResult'
import { Itinerary } from '../types'
import { generateItinerary } from './actions'

const LOADING_QUOTES = {
  vi: [
    "Đang tìm kiếm hương vị ẩm thực truyền thống...",
    "Đang lắng nghe nhịp thở văn hóa bản địa...",
    "Đang tổng hợp cẩm nang thổ địa độc bản...",
    "Đang kiến tạo bản hòa ca thiên nhiên..."
  ],
  en: [
    "Discovering traditional culinary flavors...",
    "Listening to the heartbeat of local culture...",
    "Curating your bespoke local guide...",
    "Harmonizing nature and lifestyle..."
  ]
}

export default function Home() {
  const [step, setStep] = useState<'hero' | 'form'>('hero')
  const [loading, setLoading] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [result, setResult] = useState<Itinerary | null>(null)
  const [lang, setLang] = useState<'vi' | 'en'>('vi')
  const [lastFormData, setLastFormData] = useState<any>(null)

  // Tự động dịch/cập nhật lại kết quả ngay lập tức khi người dùng bấm đổi ngôn ngữ trên Navbar
  const handleLanguageChange = async (newLang: 'vi' | 'en') => {
    setLang(newLang)
    if (result && lastFormData) {
      setLoading(true)
      try {
        const data = await generateItinerary({ ...lastFormData, lang: newLang })
        setResult(data)
      } finally {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    let interval: any
    if (loading) {
      interval = setInterval(() => {
        setQuoteIndex((prev) => (prev + 1) % LOADING_QUOTES[lang].length)
      }, 2500)
    }
    return () => clearInterval(interval)
  }, [loading, lang])

  const handleGenerate = async (formData: any) => {
    setLastFormData(formData)
    setLoading(true)
    setResult(null)
    try {
      const data = await generateItinerary({ ...formData, lang })
      setResult(data)
    } catch (error) {
      alert(lang === 'vi' ? 'Đã xảy ra lỗi khi tạo lịch trình. Vui lòng thử lại!' : 'An error occurred. Please try again!')
    } finally {
      setLoading(false)
    }
  }

  const handleBackToForm = () => {
    setResult(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHero = () => {
    setStep('hero')
    setResult(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-zinc-900 selection:bg-zinc-900 selection:text-white relative overflow-x-hidden">
      
      {/* Navbar với bộ chuyển ngữ đồng bộ */}
      <Navbar lang={lang} setLang={handleLanguageChange} onHome={handleBackToHero} />
      
      <main className="max-w-5xl mx-auto px-6 pb-32 pt-6">
        
        {step === 'hero' && !result && !loading && (
          <div className="animate-in fade-in zoom-in-95 duration-700 ease-out">
            <Hero lang={lang} onStart={() => setStep('form')} />
          </div>
        )}

        {step === 'form' && !result && !loading && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 space-y-8">
            <button 
              onClick={handleBackToHero}
              className="group inline-flex items-center gap-2.5 text-zinc-600 hover:text-zinc-950 transition-colors text-xs sm:text-sm font-bold uppercase tracking-[0.2em] pt-2"
            >
              <span className="transform group-hover:-translate-x-1.5 transition-transform">←</span>
              {lang === 'vi' ? 'Quay lại trang chủ' : 'Back to Home'}
            </button>
            <ItineraryForm onSubmit={handleGenerate} loading={loading} lang={lang} />
          </div>
        )}

        {loading && (
          <div className="mt-32 max-w-3xl mx-auto bg-white border border-zinc-200/90 rounded-[2.5rem] p-16 text-center shadow-xl animate-pulse">
            <div className="w-12 h-12 mx-auto mb-6 border-3 border-zinc-900 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-zinc-400 mb-4">
              {lang === 'vi' ? 'Đang phân tích & kiến tạo cẩm nang' : 'Curating your bespoke experience'}
            </p>
            <p className="text-2xl sm:text-3xl font-serif-editorial italic text-zinc-900 transition-all duration-500">
              "{LOADING_QUOTES[lang][quoteIndex]}"
            </p>
          </div>
        )}

        {result && !loading && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pt-4">
            <ItineraryResult data={result} onBack={handleBackToForm} lang={lang} />
          </div>
        )}

      </main>
    </div>
  )
}