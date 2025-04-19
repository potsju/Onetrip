export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  image: string;
  rating: number;
  idealDuration: string;
  basePricePerDay: number;
  bestTimeToVisit?: string;
  highlights?: string[];
}