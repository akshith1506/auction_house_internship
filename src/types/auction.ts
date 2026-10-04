export type CurrencyCode = 'INR' | 'USD' | 'GBP' | 'EUR' | 'CHF' | 'HKD';

export interface CurrencyRate {
  code: CurrencyCode;
  symbol: string;
  rate: number; // relative to USD (USD = 1.0)
}

export interface LotItem {
  id: string;
  lotNumber: number;
  saleroom: string;
  category: 'paintings' | 'timepieces' | 'jewelry' | 'sculpture' | 'automobilia' | 'antiquities';
  department: string;
  title: string;
  subtitle: string;
  artist: string;
  artistDates: string;
  year: string;
  medium: string;
  dimensions: string;
  signatureInfo: string;
  provenance: string;
  estimateLow: number; // in USD
  estimateHigh: number; // in USD
  currentBid: number; // in USD
  openingBid: number; // in USD
  bidsCount: number;
  status: 'live' | 'closing_soon' | 'upcoming' | 'passed' | 'sold';
  closingIn?: string;
  primaryImage: string;
  additionalImages?: {
    label: string;
    url: string;
    description: string;
  }[];
  conditionReport: {
    overallGrade: string;
    structuralIntegrity: string;
    varnishSurface: string;
    conservationHistory: string;
    uvFluorescenceNotes: string;
    examiner: string;
    examDate: string;
    institution: string;
  };
  provenanceHistory: {
    year: string;
    owner: string;
    location: string;
    notes?: string;
  }[];
  exhibitions: string[];
  literature: string[];
}

export interface BidEntry {
  id: string;
  lotId: string;
  amount: number;
  bidderType: 'Floor' | 'Phone' | 'Online' | 'Commission';
  location: string;
  paddleNumber: string;
  timestamp: string;
  isYou?: boolean;
}

export interface EditorialArticle {
  id: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  summary: string;
  content: string[];
  image: string;
  author: string;
  authorRole: string;
  keyStats?: { label: string; value: string }[];
}

export interface DepartmentInfo {
  id: string;
  deptNumber: string;
  name: string;
  description: string;
  lotsCount: number;
  coverImage: string;
  director: string;
  directorTitle: string;
  specialistFocus: string[];
  recordSale: {
    lot: string;
    price: string;
    year: string;
  };
}
