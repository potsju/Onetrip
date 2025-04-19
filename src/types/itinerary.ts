export interface Activity {
  time: string;
  title: string;
  description: string;
  cost?: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: Activity[];
  accommodation?: string;
}

export interface CostEfficiency {
  valueForMoney: number;
  costVsSimilar: number;
  seasonalPricing: number;
  savingTips: string[];
  summary: string;
}

export interface Costs {
  accommodation: number;
  food: number;
  transportation: number;
  activities: number;
}

export interface Itinerary {
  id: string;
  title: string;
  destination: string;
  description: string;
  coverImage: string;
  days: ItineraryDay[];
  costs: Costs;
  travelStyle: string;
  valueRating: number;
  costEfficiency: CostEfficiency;
  highlights: string[];
  bestTimeToVisit: string;
  currency: string;
  language: string;
  visaRequirements: string;
  included: string[];
}