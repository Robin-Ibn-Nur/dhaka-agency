export interface ServiceItem {
  id: string;
  reelNumber: string;
  categoryBengali: string;
  categoryEnglish: string;
  title: string;
  subtitleBengali: string;
  description: string;
  deliverables: string[];
  icon: string;
  badge: {
    bengali: string;
    english: string;
  };
  actQuote: string;
}

export interface PortfolioMetric {
  label: string;
  value: string;
}

export interface PortfolioItem {
  id: string;
  reelNumber: string;
  title: string;
  bengaliTitle: string;
  client: string;
  spec: string;
  period: string;
  category: string;
  summary: string;
  detailedCase: {
    challenge: string;
    craftsmanship: string;
    outcome: string;
  };
  metrics: PortfolioMetric[];
  stampLabel: string;
  badgeBengali: string;
  accentQuote: string;
}

export interface TelegramFormData {
  senderName: string;
  email: string;
  craft: string;
  budget: string;
  message: string;
}

export interface BookingSlot {
  date: string;
  time: string;
  available: boolean;
}
