'use server'
import { getItineraryData } from '../data/itineraries'

export async function generateItinerary(formData: { destination: string; duration: string; budget: string; vibe: string; lang?: 'vi' | 'en' }) {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const lang = formData.lang || 'vi'
  const rawData = getItineraryData(formData.destination)

  const parsedDays = parseInt(formData.duration.match(/\d+/)?.[0] || '4')
  const actualDays = Math.min(parsedDays, rawData.daysVi.length)
  
  const selectedDays = lang === 'en' 
    ? rawData.daysEn.slice(0, actualDays) 
    : rawData.daysVi.slice(0, actualDays)

  const overviewText = lang === 'en' ? rawData.overviewEn : rawData.overviewVi
  const secrets = lang === 'en' ? rawData.insiderSecretsEn : rawData.insiderSecretsVi

  let budgetMultiplier = 1
  let styleText = lang === 'en' ? "relaxed and comfortable" : "thư giãn"
  
  if (formData.budget.includes('Tiết kiệm') || formData.budget.includes('Budget')) { 
    budgetMultiplier = 0.6
    styleText = lang === 'en' ? "backpacking and authentic local lifestyle" : "bụi bặm, len lỏi vào từng ngóc ngách đời sống"
  } else if (formData.budget.includes('Sang chảnh') || formData.budget.includes('Luxury')) { 
    budgetMultiplier = 3.5
    styleText = lang === 'en' ? "luxury resort and premium experiences" : "nghỉ dưỡng cao cấp, tận hưởng dịch vụ tinh hoa nhất"
  }

  const basePerDay = 850000 
  const totalCost = basePerDay * actualDays * budgetMultiplier
  const formattedCost = new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'vi-VN', { style: 'currency', currency: lang === 'en' ? 'USD' : 'VND' }).format(lang === 'en' ? totalCost / 25000 : totalCost)

  return {
    destination: formData.destination,
    overview: `${overviewText} ${lang === 'en' ? `This ${actualDays}-day itinerary is custom-tailored for your${styleText} style.` : `Lịch trình ${actualDays} ngày này được tinh chỉnh riêng cho bạn theo phong cách ${styleText}.`}`,
    insiderSecrets: secrets,
    budgetEstimate: lang === 'en' ? `Comfort - Approx. ${formattedCost} / person` : `Thoải mái - Khoảng ${formattedCost} / người`,
    days: selectedDays
  }
}