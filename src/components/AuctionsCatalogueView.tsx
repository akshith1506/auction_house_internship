import React, { useState } from 'react';
import { CurrencyCode, LotItem } from '../types/auction';
import { formatCurrency } from '../data/auctionData';

interface AuctionsCatalogueViewProps {
  lots: LotItem[];
  currency: CurrencyCode;
  onSelectLot: (lot: LotItem) => void;
  onEnterSaleroom: () => void;
  onBackToSaleroom: () => void;
}

export const AuctionsCatalogueView: React.FC<AuctionsCatalogueViewProps> = ({
  lots,
  currency,
  onSelectLot,
  onEnterSaleroom,
  onBackToSaleroom,
}) => {
  const [filterState, setFilterState] = useState<'all' | 'live' | 'upcoming' | 'past'>('all');

  const auctionSales = [
    {
      id: 'sale-01',
      title: 'The Evening Sale: Masterpieces of Modern & Post-Impressionist Art',
      saleroom: 'NEW YORK • SALEROOM 01',
      date: 'Live Now · Session Commenced',
      catalogueNo: 'N° 8492',
      status: 'live',
      lotsCount: 42,
      coverLot: lots[0],
      totalEstimate: '$85,000,000 – $110,000,000',
    },
    {
      id: 'sale-02',
      title: 'High Haute Joaillerie & Exceptional Golconda Diamonds',
      saleroom: 'GENEVA • SALEROOM 03',
      date: 'Tonight 19:30 CET',
      catalogueNo: 'N° 8493',
      status: 'upcoming',
      lotsCount: 68,
      coverLot: lots[1],
      totalEstimate: '$45,000,000 – $60,000,000',
    },
    {
      id: 'sale-03',
      title: 'Post-War British Modernism & Spatial Sculptures',
      saleroom: 'LONDON • NEW BOND STREET',
      date: 'Tomorrow 14:00 GMT',
      catalogueNo: 'N° 8494',
      status: 'upcoming',
      lotsCount: 94,
      coverLot: lots[3] || lots[2],
      totalEstimate: '$28,000,000 – $36,000,000',
    },
    {
      id: 'sale-04',
      title: 'Historic Horology: Grand Complications & Prototype Chronographs',
      saleroom: 'NEW YORK • FIFTH AVENUE',
      date: '12 November 2025',
      catalogueNo: 'N° 8495',
      status: 'upcoming',
      lotsCount: 112,
      coverLot: lots[2],
      totalEstimate: '$32,000,000 – $44,000,000',
    },
  ];

  return (
    <div className="w-full bg-[#111125] min-h-screen py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Breadcrumb & Return */}
        <div className="flex items-center justify-between pb-8 border-b border-[#28283d]">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSaleroom}
              className="text-[#d4c4b7] hover:text-[#f2c08d] text-xs font-label-caps flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>RETURN TO LIVE SALEROOM</span>
            </button>
            <span className="text-[#50453b]">•</span>
            <span className="font-label-caps text-xs text-[#ecbf84]">GLOBAL SALEROOM CALENDAR</span>
          </div>

          <button
            onClick={onEnterSaleroom}
            className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs px-4 py-2 rounded font-bold shadow flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-pulse" />
            <span>ENTER ACTIVE ROSTRUM</span>
          </button>
        </div>

        {/* Header */}
        <div className="py-8">
          <span className="font-label-caps text-xs text-[#ecbf84] tracking-widest uppercase block mb-1">
            SALEROOM ARCHIVE &amp; FORTHCOMING CALENDAR
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl text-white">
            Auctions &amp; Bound Catalogues
          </h1>
          <p className="text-sm text-[#d4c4b7] max-w-2xl pt-2 leading-relaxed">
            Examine current marquee evening sessions, forthcoming specialist salerooms, and archival records with certified hammer realization figures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 pb-8">
          {[
            { id: 'all', label: 'ALL AUCTIONS' },
            { id: 'live', label: 'LIVE SESSIONS' },
            { id: 'upcoming', label: 'FORTHCOMING 2025/2026' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterState(tab.id as typeof filterState)}
              className={`font-label-caps text-xs px-4 py-2 rounded transition-colors ${
                filterState === tab.id
                  ? 'bg-[#f2c08d] text-[#472a03] font-bold'
                  : 'bg-[#1e1e32] text-[#d4c4b7] hover:text-white border border-[#28283d]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Auction Sales Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
          {auctionSales.map((sale) => (
            <div
              key={sale.id}
              className="bg-[#1a1a2e] rounded border border-[#28283d] overflow-hidden flex flex-col justify-between group shadow-xl hover:border-[#f2c08d]/50 transition-all"
            >
              <div className="relative aspect-[16/9] bg-[#28283d] overflow-hidden">
                <img
                  src={sale.coverLot?.primaryImage}
                  alt={sale.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 bg-[#0c0c1f]/85 backdrop-blur px-2.5 py-1 rounded border border-[#28283d] font-label-caps text-[10px] text-[#ecbf84]">
                  {sale.saleroom}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs text-white font-mono bg-[#0c0c1f]/80 px-2 py-1 rounded">
                    {sale.lotsCount} LOTS • {sale.catalogueNo}
                  </span>
                  {sale.status === 'live' && (
                    <span className="font-label-caps text-[10px] text-[#f2c08d] bg-[#28283d]/90 px-2.5 py-1 rounded flex items-center gap-1.5 border border-[#f2c08d]/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab] animate-pulse" />
                      LIVE BIDDING IN PROGRESS
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <span className="text-xs text-[#ecbf84] font-mono block mb-1">{sale.date}</span>
                  <h3 className="font-serif-luxury text-2xl text-white font-semibold group-hover:text-[#f2c08d] transition-colors">
                    {sale.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-[#9c8e82] pt-3 border-t border-[#28283d] mt-3">
                    <span>Aggregate Pre-Sale Estimate:</span>
                    <span className="text-[#d4c4b7] font-mono">{sale.totalEstimate}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => onSelectLot(sale.coverLot)}
                    className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs py-2.5 rounded font-bold shadow text-center transition-colors"
                  >
                    EXPLORE CATALOGUE
                  </button>
                  <button
                    onClick={onEnterSaleroom}
                    className="bg-[#28283d] hover:bg-[#333348] text-white font-label-caps text-xs py-2.5 rounded font-semibold border border-[#333348] text-center transition-colors"
                  >
                    REGISTER TO BID
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
