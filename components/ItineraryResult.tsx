'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ItineraryResultData } from '../types'

const ImageWithFallback = ({ src, alt }: { src: string, alt: string }) => {
  const [error, setError] = useState(false)
  
  if (error || !src) {
    return (
      <div className="w-full h-48 bg-[#F4F4F5] flex flex-col items-center justify-center rounded-t-2xl border-b border-zinc-200">
        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest px-6 text-center leading-relaxed">
          Dành chỗ cho<br/>{alt}
        </span>
      </div>
    )
  }
  
  return <img src={src} alt={alt} onError={() => setError(true)} className="w-full h-48 object-cover rounded-t-2xl" />
}

export default function ItineraryResult({ data, onBack, lang }: { data: ItineraryResultData, onBack: () => void, lang: 'vi'|'en' }) {
  if (!data) return null

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <button onClick={onBack} className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-900 transition-colors">
        ← {lang === 'vi' ? 'Làm lại' : 'Start Over'}
      </button>

      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-serif-editorial text-zinc-950 tracking-tight">{data.destination}</h1>
        <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl">{data.overview}</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 mb-6">
          {lang === 'vi' ? `Dự toán ngân sách (${data.budgetDetails.tier})` : `Budget Estimate (${data.budgetDetails.tier})`}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div><p className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Lưu trú</p><p className="font-bold">{data.budgetDetails.accommodation}</p></div>
          <div><p className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Ăn uống</p><p className="font-bold">{data.budgetDetails.food}</p></div>
          <div><p className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Di chuyển</p><p className="font-bold">{data.budgetDetails.transport}</p></div>
          <div><p className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Phát sinh</p><p className="font-bold">{data.budgetDetails.misc}</p></div>
        </div>
        <div className="pt-6 border-t border-zinc-100 flex justify-between items-center">
          <span className="text-sm font-bold uppercase tracking-wider text-zinc-900">Tổng dự kiến</span>
          <span className="text-xl font-bold text-amber-600">{data.budgetDetails.total}</span>
        </div>
      </div>

      <div className="space-y-12">
        {data.days.map((day) => (
          <div key={day.day} className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 bg-zinc-950 text-white rounded-full font-serif-editorial text-lg">{day.day.toString().padStart(2, '0')}</span>
              <h3 className="text-xl font-serif-editorial text-zinc-900">{day.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-14">
              {day.activities.map((act, idx) => (
                <motion.div whileHover={{ y: -4 }} key={idx} className="bg-white rounded-2xl border border-zinc-200 shadow-sm flex flex-col">
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold text-zinc-900 z-10 flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>{act.time}
                    </div>
                    <ImageWithFallback src={act.image} alt={act.title} />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-base font-bold text-zinc-900 mb-2">{act.title}</h4>
                    <p className="text-sm text-zinc-500 mb-4 flex-1">{act.description}</p>
                    <div className="flex items-center text-xs font-bold text-amber-600">
                      <span>💰 {act.cost}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}