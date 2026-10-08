export type Language = 'vi' | 'en'

// Các thẻ phân loại (Tags) cho Động cơ cá nhân hóa
export type VibeType = 'culture' | 'nature' | 'relax' | 'adventure' | 'food'
export type BudgetType = 'budget' | 'comfort' | 'luxury'

export interface Activity {
  time: string
  title: string
  description: string
  cost: string
  image: string
}

// Cấu trúc của một "Mảnh ghép nội dung"
export interface PoolActivity {
  id: string
  time: string
  titleVi: string
  titleEn: string
  descriptionVi: string
  descriptionEn: string
  cost: string
  image: string
  vibes: VibeType[]
  budgets: BudgetType[]
}

export interface DayItinerary {
  day: number
  title: string
  activities: Activity[]
}

export interface BudgetDetails {
  tier: string
  accommodation: string
  food: string
  transport: string
  misc: string
  total: string
}

export interface ItineraryResultData {
  destination: string
  overview: string
  insiderSecrets: { goldenSeason: string; cultureNotes: string; mustTry: string[] }
  budgetDetails: BudgetDetails
  days: DayItinerary[]
}

export interface ItineraryRequest {
  destinationVi: string
  destinationEn: string
  duration: string
  budget: string
  vibe: string
  lang: Language
}