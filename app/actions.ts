'use server'
import { getItineraryData } from '../data/itineraries'
import { ItineraryRequest, ItineraryResultData, VibeType, BudgetType, PoolActivity } from '../types'

export async function generateItinerary(formData: ItineraryRequest): Promise<ItineraryResultData> {
  await new Promise((resolve) => setTimeout(resolve, 800))
  const lang = formData.lang || 'vi'
  const rawData = getItineraryData(formData.destinationVi)

  const vibeMap: Record<string, VibeType[]> = {
    "Ẩm thực & Văn hóa": ['culture', 'food'], "Culinary & Culture": ['culture', 'food'],
    "Thiên nhiên hùng vĩ": ['nature'], "Majestic Nature": ['nature'],
    "Nghỉ dưỡng & Chữa lành": ['relax'], "Wellness & Retreat": ['relax'],
    "Phiêu lưu mạo hiểm": ['adventure'], "Adventure & Trekking": ['adventure']
  }
  const budgetMap: Record<string, BudgetType[]> = {
    "Tiết kiệm (Phượt bụi)": ['budget'], "Budget (Backpacking)": ['budget'],
    "Thoải mái (Tiện nghi)": ['budget', 'comfort'], "Comfort (Mid-range)": ['budget', 'comfort'],
    "Sang chảnh (5 sao)": ['comfort', 'luxury'], "Luxury (Premium)": ['comfort', 'luxury']
  }

  const requestedVibes = vibeMap[formData.vibe] || ['culture']
  const requestedBudgets = budgetMap[formData.budget] || ['comfort']

  const pool: PoolActivity[] = rawData.activityPool || []
  
  // Tính toán số lượng hoạt động cần thiết (2 hoạt động / 1 ngày)
  const parsedDays = parseInt(formData.duration.match(/\d+/)?.[0] || '4')
  const actualDays = Math.min(parsedDays, 4)
  const requiredSlots = actualDays * 2

  // THUẬT TOÁN CHỐNG TRÙNG LẶP:
  // B1: Tìm các hoạt động khớp cả Gu và Túi tiền
  let selectedActs = pool.filter(act => 
    act.vibes.some(v => requestedVibes.includes(v)) && 
    act.budgets.some(b => requestedBudgets.includes(b))
  )

  // B2: Nếu thiếu, nhặt thêm các hoạt động khớp Túi tiền (không quan tâm Gu)
  if (selectedActs.length < requiredSlots) {
    const budgetMatches = pool.filter(act => 
      !selectedActs.includes(act) && 
      act.budgets.some(b => requestedBudgets.includes(b))
    )
    selectedActs = [...selectedActs, ...budgetMatches]
  }

  // B3: Nếu vẫn thiếu, vét nốt kho (miễn là chưa bị trùng)
  if (selectedActs.length < requiredSlots) {
    const remaining = pool.filter(act => !selectedActs.includes(act))
    selectedActs = [...selectedActs, ...remaining]
  }

  // B4: Cắt lấy đúng số lượng cần thiết và xáo trộn ngẫu nhiên
  const finalSelection = selectedActs.slice(0, requiredSlots).sort(() => 0.5 - Math.random())

  // Ráp hoạt động vào Ngày
  const days = []
  let actIndex = 0
  for (let i = 1; i <= actualDays; i++) {
    const dailyActs = []
    for (let j = 0; j < 2; j++) {
      if (actIndex < finalSelection.length) {
        const act = finalSelection[actIndex]
        dailyActs.push({
          time: act.time,
          title: lang === 'en' ? act.titleEn : act.titleVi,
          description: lang === 'en' ? act.descriptionEn : act.descriptionVi,
          cost: act.cost,
          image: act.image
        })
        actIndex++
      }
    }
    
    // Sort giờ Sáng -> Chiều
    dailyActs.sort((a, b) => a.time.localeCompare(b.time))

    days.push({
      day: i,
      title: lang === 'vi' ? `Hành trình Ngày ${i}` : `Journey Day ${i}`,
      activities: dailyActs
    })
  }

  let accMulti = 1, foodMulti = 1, transMulti = 1
  if (requestedBudgets.includes('budget')) { accMulti = 0.4; foodMulti = 0.6; transMulti = 0.5 }
  else if (requestedBudgets.includes('luxury')) { accMulti = 3.5; foodMulti = 2.5; transMulti = 2.0 }

  const breakdown = { accommodation: 500000 * actualDays * accMulti, food: 400000 * actualDays * foodMulti, transport: 250000 * actualDays * transMulti, misc: 150000 * actualDays }
  const totalCost = breakdown.accommodation + breakdown.food + breakdown.transport + breakdown.misc
  const fmt = (val: number) => new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'vi-VN', { style: 'currency', currency: lang === 'en' ? 'USD' : 'VND', maximumFractionDigits: 0 }).format(lang === 'en' ? val / 25000 : val)

  const vibeText = lang === 'vi' 
    ? `Hành trình ${actualDays} ngày này được tinh chỉnh riêng cho gu "${formData.vibe}".`
    : `This ${actualDays}-day itinerary is tailored for your "${formData.vibe}" vibe.`

  return {
    destination: lang === 'en' ? formData.destinationEn : formData.destinationVi,
    overview: `${lang === 'en' ? rawData.overviewEn : rawData.overviewVi} ${vibeText}`,
    insiderSecrets: lang === 'en' ? rawData.insiderSecretsEn : rawData.insiderSecretsVi,
    budgetDetails: { tier: formData.budget.split(' ')[0], accommodation: fmt(breakdown.accommodation), food: fmt(breakdown.food), transport: fmt(breakdown.transport), misc: fmt(breakdown.misc), total: `${fmt(totalCost * 0.9)} - ${fmt(totalCost * 1.15)}` },
    days
  }
}