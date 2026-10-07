export interface Activity {
  time: string
  title: string
  description: string
  cost: string
  imageKeyword: string
}

export interface DayItinerary {
  day: number
  title: string
  activities: Activity[]
}

export interface InsiderSecrets {
  goldenSeason: string
  cultureNotes: string
  mustTry: string[]
}

export interface Itinerary {
  destination: string
  overview: string
  insiderSecrets: InsiderSecrets
  budgetEstimate: string
  days: DayItinerary[]
}

export interface Province {
  name: string
  region: 'north' | 'central' | 'south'
}