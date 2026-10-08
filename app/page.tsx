'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ItineraryForm from '../components/ItineraryForm'
import ItineraryResult from '../components/ItineraryResult'
import { generateItinerary } from './actions'

export default function Home() {
  const [view, setView] = useState<'home' | 'form' | 'collections' | 'destinations' | 'editorial'>('home')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [lang, setLang] = useState<'vi' | 'en'>('vi')
  const [lastForm, setLastForm] = useState<any>(null)

  const handleLanguageChange = async (newLang: 'vi' | 'en') => {
    setLang(newLang)
    if (result && lastForm) {
      setLoading(true)
      const data = await generateItinerary({ ...lastForm, lang: newLang })
      setResult(data)
      setLoading(false)
    }
  }

  const handleGenerate = async (formData: any) => {
    setLastForm(formData); setLoading(true); setResult(null); setView('form')
    const data = await generateItinerary(formData)
    setResult(data); setLoading(false)
  }

  const PlaceholderView = ({ title, desc }: { title: string, desc: string }) => (
    <div className="py-32 text-center">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">Coming Soon</span>
      <h2 className="text-4xl md:text-6xl font-serif-editorial text-zinc-950 mb-6">{title}</h2>
      <p className="text-zinc-600 max-w-2xl mx-auto">{desc}</p>
    </div>
  )

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between border-b border-zinc-200/60 mb-8">
        <button onClick={() => { setView('home'); setResult(null) }} className="text-2xl font-serif-editorial font-bold text-zinc-950">LocalJourney</button>
        <nav className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
          <button onClick={() => setView('collections')} className={`hover:text-zinc-950 transition-colors ${view === 'collections' ? 'text-zinc-900' : ''}`}>{lang === 'vi' ? 'Bộ sưu tập' : 'Collections'}</button>
          <button onClick={() => setView('destinations')} className={`hover:text-zinc-950 transition-colors ${view === 'destinations' ? 'text-zinc-900' : ''}`}>{lang === 'vi' ? 'Điểm đến' : 'Destinations'}</button>
          <button onClick={() => setView('editorial')} className={`hover:text-zinc-950 transition-colors ${view === 'editorial' ? 'text-zinc-900' : ''}`}>{lang === 'vi' ? 'Tạp chí' : 'Editorial'}</button>
        </nav>
        <div className="flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-full shadow-xs">
          <button onClick={() => handleLanguageChange('vi')} className={`text-xs font-bold tracking-widest transition-all ${lang === 'vi' ? 'text-zinc-950 underline underline-offset-4' : 'text-zinc-400 hover:text-zinc-700'}`}>VN</button><span className="text-zinc-300">|</span>
          <button onClick={() => handleLanguageChange('en')} className={`text-xs font-bold tracking-widest transition-all ${lang === 'en' ? 'text-zinc-950 underline underline-offset-4' : 'text-zinc-400 hover:text-zinc-700'}`}>EN</button>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto px-6 pb-32 pt-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {view === 'collections' && (
            <motion.div key="collections" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <PlaceholderView title={lang === 'vi' ? 'Bộ sưu tập' : 'Collections'} desc={lang === 'vi' ? 'Những chủ đề du lịch độc bản đang được biên soạn.' : 'Curated travel collections are being prepared.'} />
            </motion.div>
          )}
          
          {view === 'destinations' && (
            <motion.div key="destinations" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <PlaceholderView title={lang === 'vi' ? '34 Điểm đến' : '34 Destinations'} desc={lang === 'vi' ? 'Bản đồ khám phá 34 đơn vị hành chính tinh hoa.' : 'Explore the map of 34 premier administrative units.'} />
            </motion.div>
          )}
          
          {view === 'editorial' && (
            <motion.div key="editorial" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <PlaceholderView title={lang === 'vi' ? 'Tạp chí Du lịch' : 'Travel Editorial'} desc={lang === 'vi' ? 'Góc nhìn thổ địa và những câu chuyện chưa kể.' : 'Insider stories and untold local perspectives.'} />
            </motion.div>
          )}
          
          {view === 'home' && !result && !loading && (
            <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Hero lang={lang} onStart={() => setView('form')} />
            </motion.div>
          )}

          {view === 'form' && !result && !loading && (
            <motion.div key="form" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ItineraryForm onSubmit={handleGenerate} loading={loading} lang={lang} />
            </motion.div>
          )}

          {loading && (
            <motion.div key="loading" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-32 text-center">
              <div className="w-12 h-12 mx-auto mb-6 border-3 border-zinc-900 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-2xl font-serif-editorial italic">"Đang kiến tạo hệ sinh thái..."</p>
            </motion.div>
          )}

          {result && !loading && view === 'form' && (
            <motion.div key="result" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ItineraryResult data={result} onBack={() => { setResult(null); setView('form') }} lang={lang} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}