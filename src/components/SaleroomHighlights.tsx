import React, { useState } from 'react';
import { CurrencyCode, LotItem } from '../types/auction';
import { formatCurrency, CURRENCY_RATES } from '../data/auctionData';
import { saleroomAudio } from '../utils/audio';

interface SaleroomHighlightsProps {
  lots: LotItem[];
  currency: CurrencyCode;
  watchlist: string[];
  onToggleWatchlist: (lotId: string) => void;
  onPlaceBid: (lot: LotItem, amount: number) => void;
  onViewCondition: (lot: LotItem) => void;
}

export const SaleroomHighlights: React.FC<SaleroomHighlightsProps> = ({
  lots,
  currency,
  watchlist,
  onToggleWatchlist,
  onPlaceBid,
  onViewCondition,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Max-Bid & Currency Calculator state
  const [calculatorInput, setCalculatorInput] = useState<string>('8000000');
  const [calcResult, setCalcResult] = useState<{
    hammerUSD: number;
    premiumUSD: number;
    escrowInsuranceUSD: number;
    totalUSD: number;
  } | null>(null);

  const categories = [
    { id: 'all', label: 'ALL CATEGORIES' },
    { id: 'paintings', label: 'PAINTINGS' },
    { id: 'timepieces', label: 'TIMEPIECES' },
    { id: 'jewelry', label: 'JEWELRY' },
    { id: 'sculpture', label: 'SCULPTURE' },
  ];

  const filteredLots =
    selectedCategory === 'all'
      ? lots
      : lots.filter((item) => item.category === selectedCategory);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const hammer = parseFloat(calculatorInput);
    if (!isNaN(hammer) && hammer > 0) {
      const premium = hammer * 0.12; // 12% Buyer's Premium
      const escrowInsurance = hammer * 0.005; // 0.5% Custody Transit Insurance
      setCalcResult({
        hammerUSD: hammer,
        premiumUSD: premium,
        escrowInsuranceUSD: escrowInsurance,
        totalUSD: hammer + premium + escrowInsurance,
      });
    }
  };

  const handleLotBid = (lot: LotItem) => {
    saleroomAudio.playBidChime();
    const increment = 100000;
    onPlaceBid(lot, lot.currentBid + increment);
  };

  return (
    <section className="w-full bg-[#1a1a2e] py-14 sm:py-20 border-b border-[#28283d]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header & Filter Pills */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-10 gap-4">
          <div>
            <span className="font-label-caps text-xs text-[#ecbf84] tracking-widest uppercase block mb-1">
              SELECT LIVE LOTS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white">
              Saleroom Highlights
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#1e1e32] p-1 rounded border border-[#28283d]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded font-label-caps text-xs transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#f2c08d] text-[#472a03] font-bold shadow'
                    : 'text-[#d4c4b7] hover:text-white hover:bg-[#28283d]'
                }`}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLots.map((lot) => {
            const isBookmarked = watchlist.includes(lot.id);
            return (
              <div
                key={lot.id}
                className="bg-[#1e1e32] rounded overflow-hidden flex flex-col justify-between shadow-xl border border-[#28283d] group hover:border-[#f2c08d]/50 transition-all duration-300"
              >
                {/* Image Frame */}
                <div className="relative w-full aspect-[4/3] bg-[#28283d] overflow-hidden">
                  <img
                    src={lot.primaryImage}
                    alt={lot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e32] via-transparent to-transparent opacity-60" />

                  {/* Lot tag */}
                  <div className="absolute top-3 left-3 bg-[#0c0c1f]/85 backdrop-blur px-2.5 py-1 rounded border border-[#28283d]">
                    <span className="font-label-caps text-xs text-[#ecbf84]">
                      LOT {lot.lotNumber} • {lot.saleroom}
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => onToggleWatchlist(lot.id)}
                    aria-label="Add to Watchlist"
                    className={`absolute top-3 right-3 w-8 h-8 rounded backdrop-blur flex items-center justify-center transition-colors border ${
                      isBookmarked
                        ? 'bg-[#d4a574] text-[#111125] border-[#d4a574]'
                        : 'bg-[#0c0c1f]/85 text-[#d4c4b7] hover:text-[#f2c08d] border-[#28283d]'
                    }`}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {isBookmarked ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>

                  {/* Closing countdown / live status */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0c0c1f]/90 font-label-caps text-xs text-white border border-[#28283d]">
                    {lot.status === 'live' ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab] animate-pulse" />
                        <span className="text-[#f2c08d]">LIVE BIDDING NOW</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[14px] text-[#ecbf84]">schedule</span>
                        <span>{lot.closingIn}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-5">
                  <div>
                    <span className="font-label-caps text-[10px] text-[#9c8e82] block mb-1">
                      {lot.subtitle.toUpperCase()}
                    </span>
                    <h3 className="font-serif-luxury text-xl text-white font-semibold line-clamp-2">
                      {lot.title}
                    </h3>
                    <p className="text-xs text-[#d4c4b7] pt-1.5 line-clamp-2 leading-relaxed">
                      {lot.medium}. {lot.provenance}
                    </p>
                  </div>

                  {/* Valuation & Current Bid Box */}
                  <div className="bg-[#1a1a2e] p-3.5 rounded border border-[#28283d]">
                    <div className="flex justify-between items-baseline pb-1">
                      <span className="font-label-caps text-[10px] text-[#9c8e82]">ESTIMATE</span>
                      <span className="text-xs text-[#d4c4b7] font-mono">
                        {formatCurrency(lot.estimateLow, currency)} – {formatCurrency(lot.estimateHigh, currency)}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline pt-1">
                      <span className="font-label-caps text-xs text-[#f2c08d] font-semibold">
                        CURRENT BID
                      </span>
                      <span className="font-serif-luxury text-2xl text-[#f2c08d] tabular-numeric">
                        {formatCurrency(lot.currentBid, currency)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-[#9c8e82] font-label-caps pt-2 border-t border-[#28283d] mt-2">
                      <span>{lot.bidsCount} BIDS RECEIVED</span>
                      <span className="text-[#ecbf84]">
                        NEXT INCREMENT: {formatCurrency(100000, currency)}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleLotBid(lot)}
                      className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs py-2.5 rounded text-center transition-colors font-bold active:scale-95 shadow"
                      type="button"
                    >
                      PLACE BID
                    </button>
                    <button
                      onClick={() => onViewCondition(lot)}
                      className="bg-[#28283d] hover:bg-[#333348] text-white font-label-caps text-xs py-2.5 rounded text-center transition-colors border border-[#333348] active:scale-95"
                      type="button"
                    >
                      VIEW CONDITION
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Confidential Max-Bid & Currency Converter Tool */}
        <div className="mt-12 p-6 rounded bg-[#1e1e32] border border-[#28283d] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded bg-[#f2c08d]/10 border border-[#f2c08d]/20 flex items-center justify-center text-[#f2c08d] shrink-0">
              <span className="material-symbols-outlined text-[24px]">calculate</span>
            </span>
            <div>
              <span className="font-serif-luxury text-lg text-white block">
                Confidential Max-Bid &amp; Currency Converter
              </span>
              <span className="text-xs text-[#d4c4b7]">
                Calculate 12% buyer’s premium, escrow handling, and customs duty structuring across global currencies before submitting rostrum offers.
              </span>
            </div>
          </div>

          <form onSubmit={handleCalculate} className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto">
            <div className="relative flex-1 md:w-60">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9c8e82] text-xs font-mono">
                {CURRENCY_RATES[currency].symbol}
              </span>
              <input
                type="number"
                value={calculatorInput}
                onChange={(e) => setCalculatorInput(e.target.value)}
                placeholder="Enter bid amount (USD)..."
                className="w-full bg-[#1a1a2e] pl-8 pr-4 py-2.5 rounded text-white text-sm border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#ecbf84] text-[#452b00] hover:bg-[#efbd8a] font-label-caps text-xs px-5 py-2.5 rounded transition-colors uppercase tracking-wider font-bold shadow active:scale-95 whitespace-nowrap"
            >
              CALCULATE TOTAL
            </button>
          </form>
        </div>

        {/* Calculation Result breakdown */}
        {calcResult && (
          <div className="mt-3 p-4 bg-[#28283d] rounded border border-[#f2c08d]/40 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#d4c4b7]">
              <div>
                <span className="text-[#9c8e82] block">Hammer Base:</span>
                <span className="text-white font-mono">{formatCurrency(calcResult.hammerUSD, currency)}</span>
              </div>
              <div>
                <span className="text-[#9c8e82] block">12% Buyer's Premium:</span>
                <span className="text-[#ecbf84] font-mono">+{formatCurrency(calcResult.premiumUSD, currency)}</span>
              </div>
              <div>
                <span className="text-[#9c8e82] block">Custodial Insurance (0.5%):</span>
                <span className="text-[#d4c4b7] font-mono">+{formatCurrency(calcResult.escrowInsuranceUSD, currency)}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-[#333348] pt-2 md:pt-0 md:pl-6">
              <div>
                <span className="font-label-caps text-[10px] text-[#ecbf84] block">ESTIMATED TOTAL OUTLAY</span>
                <span className="font-serif-luxury text-2xl text-[#f2c08d] tabular-numeric font-bold">
                  {formatCurrency(calcResult.totalUSD, currency)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
