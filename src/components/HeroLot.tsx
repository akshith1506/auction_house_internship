import React, { useState, useEffect } from 'react';
import { CurrencyCode, LotItem } from '../types/auction';
import { formatCurrency } from '../data/auctionData';
import { saleroomAudio } from '../utils/audio';

interface HeroLotProps {
  lot: LotItem;
  currency: CurrencyCode;
  onPlaceBid: (amount: number) => void;
  onEnterSaleroom: () => void;
  onOpenVirtualVault: () => void;
  onOpenConditionReport: () => void;
  onOrderCatalogue: () => void;
}

export const HeroLot: React.FC<HeroLotProps> = ({
  lot,
  currency,
  onPlaceBid,
  onEnterSaleroom,
  onOpenVirtualVault,
  onOpenConditionReport,
  onOrderCatalogue,
}) => {
  // Countdown timer state
  const [secondsRemaining, setSecondsRemaining] = useState(4 * 3600 + 18 * 60 + 32);

  // Selected image index (0 = main hero, 1..3 = additional details)
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Bid animation flash
  const [bidFlashed, setBidFlashed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  const currentDisplayImage =
    activeImageIdx === 0
      ? lot.primaryImage
      : lot.additionalImages?.[activeImageIdx - 1]?.url || lot.primaryImage;

  const currentImageLabel =
    activeImageIdx === 0
      ? 'Primary Exhibition Front'
      : lot.additionalImages?.[activeImageIdx - 1]?.label || 'Inspection Detail';

  const nextBidIncrement = 200000;
  const nextBidAmount = lot.currentBid + nextBidIncrement;

  const handleQuickBid = () => {
    saleroomAudio.playBidChime();
    setBidFlashed(true);
    setTimeout(() => setBidFlashed(false), 500);
    onPlaceBid(nextBidAmount);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0c0c1f] border-b border-[#28283d]">
      {/* Spotlight subtle illumination radial background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_70%_35%,_rgba(242,192,141,0.12)_0%,_transparent_65%)]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-12 relative z-10">
        {/* Breadcrumb / Session Overline */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#28283d] text-[#f2c08d] font-label-caps text-[10px]">
              <span className="w-2 h-2 rounded-full bg-[#f2c08d] animate-ping" />
              LIVE SESSION COMMENCED
            </span>
            <span className="text-[#50453b] font-label-caps">•</span>
            <span className="font-label-caps text-[10px] text-[#d4c4b7]">{lot.saleroom}</span>
            <span className="text-[#50453b] font-label-caps">•</span>
            <span className="font-label-caps text-[10px] text-[#ecbf84]">CATALOGUE N° 8492</span>
          </div>

          {/* Realtime Bidding Clock */}
          <div className="flex items-center gap-2.5 bg-[#1a1a2e] px-4 py-2 rounded border border-[#28283d] shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-[#f2c08d]">schedule</span>
            <span className="font-label-caps text-[10px] text-[#9c8e82]">HAMMER IN:</span>
            <div className="flex items-baseline gap-1 font-serif-luxury text-lg text-[#f2c08d] tracking-wider tabular-numeric">
              <span>{String(hours).padStart(2, '0')}</span>
              <span className="text-xs text-[#9c8e82] font-sans">h</span> :
              <span>{String(minutes).padStart(2, '0')}</span>
              <span className="text-xs text-[#9c8e82] font-sans">m</span> :
              <span>{String(seconds).padStart(2, '0')}</span>
              <span className="text-xs text-[#9c8e82] font-sans">s</span>
            </div>
          </div>
        </div>

        {/* Main Asymmetric Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Presentation / Hero Artwork Display (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col relative group">
            <div className="relative w-full aspect-[4/3] rounded overflow-hidden bg-[#28283d] shadow-2xl border border-[#28283d]">
              <img
                src={currentDisplayImage}
                alt={lot.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1f] via-transparent to-transparent opacity-80" />

              {/* Floating Provenance Tag */}
              <div className="absolute bottom-4 left-4 bg-[#0c0c1f]/90 backdrop-blur-md px-4 py-3 rounded max-w-md border border-[#28283d]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-label-caps text-[10px] text-[#ecbf84] block">PROVENANCE CONFIRMED</span>
                  <span className="text-[10px] text-[#9c8e82] font-mono">{currentImageLabel}</span>
                </div>
                <p className="text-xs text-[#e2e0fc] truncate">{lot.provenance}</p>
              </div>

              {/* 3D Viewing Trigger */}
              <button
                onClick={onOpenVirtualVault}
                className="absolute top-4 right-4 bg-[#0c0c1f]/90 backdrop-blur-md hover:bg-[#1e1e32] text-white hover:text-[#f2c08d] font-label-caps text-[10px] px-3.5 py-2 rounded flex items-center gap-2 transition-all border border-[#28283d] active:scale-95"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px] text-[#ecbf84]">view_in_ar</span>
                <span>3D VIRTUAL VAULT</span>
              </button>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 gap-2 pt-3">
              {/* Thumbnail 0: Main Front */}
              <button
                onClick={() => setActiveImageIdx(0)}
                className={`h-16 rounded overflow-hidden bg-[#28283d] relative cursor-pointer border transition-all text-left ${
                  activeImageIdx === 0
                    ? 'opacity-100 border-[#f2c08d] ring-1 ring-[#f2c08d]'
                    : 'opacity-60 hover:opacity-100 border-[#28283d]'
                }`}
                title="Primary Artwork Front"
              >
                <img
                  src={lot.primaryImage}
                  alt="Full canvas"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>

              {/* Thumbnail 1: Impasto */}
              <button
                onClick={() => setActiveImageIdx(1)}
                className={`h-16 rounded overflow-hidden bg-[#28283d] relative cursor-pointer border transition-all text-left ${
                  activeImageIdx === 1
                    ? 'opacity-100 border-[#f2c08d] ring-1 ring-[#f2c08d]'
                    : 'opacity-60 hover:opacity-100 border-[#28283d]'
                }`}
                title="Cobalt Impasto Detail"
              >
                <img
                  src={lot.additionalImages?.[0]?.url}
                  alt="Cobalt impasto macro"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>

              {/* Thumbnail 2: Stretcher seals */}
              <button
                onClick={() => setActiveImageIdx(2)}
                className={`h-16 rounded overflow-hidden bg-[#28283d] relative cursor-pointer border transition-all text-left ${
                  activeImageIdx === 2
                    ? 'opacity-100 border-[#f2c08d] ring-1 ring-[#f2c08d]'
                    : 'opacity-60 hover:opacity-100 border-[#28283d]'
                }`}
                title="Stretcher Verso & Wax Seals"
              >
                <img
                  src={lot.additionalImages?.[1]?.url}
                  alt="Stretcher frame seals"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>

              {/* Thumbnail 3: Spec sheets / Inspector */}
              <button
                onClick={onOpenConditionReport}
                className="h-16 rounded overflow-hidden bg-[#1e1e32] hover:bg-[#28283d] relative cursor-pointer border border-[#28283d] transition-all flex flex-col items-center justify-center text-[#d4c4b7] hover:text-[#f2c08d] p-1 text-center"
                title="View All 18 Forensic Inspection Sheets"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-label-caps text-[9px] uppercase tracking-wider">+18 SPEC SHEETS</span>
              </button>
            </div>
          </div>

          {/* Bidding Console & Catalogue Data (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col bg-[#1a1a2e] p-6 sm:p-8 rounded border border-[#28283d] shadow-xl relative">
            <div className="flex items-center justify-between pb-2">
              <span className="font-label-caps text-[11px] text-[#ecbf84] tracking-widest uppercase">
                LOT {lot.lotNumber} • MAJOR WORK
              </span>
              <div className="flex items-center gap-1 text-[#d4c4b7] text-xs">
                <span className="material-symbols-outlined text-[16px] text-[#ecbf84]">verified</span>
                <span>Guaranteed Authenticity</span>
              </div>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-4xl text-white tracking-tight pt-1">
              {lot.title}
            </h1>
            <p className="text-sm text-[#d4c4b7] pt-1.5 pb-6 leading-relaxed">
              {lot.artist} ({lot.artistDates}). {lot.signatureInfo}. {lot.medium}, {lot.dimensions}.
            </p>

            {/* Price & Valuations Panel */}
            <div className="bg-[#1e1e32] p-5 rounded border border-[#28283d] flex flex-col gap-3 mb-6">
              <div className="flex items-baseline justify-between">
                <span className="font-label-caps text-[10px] text-[#9c8e82]">ESTIMATE</span>
                <span className="text-base text-[#e2e0fc] tracking-wider font-mono">
                  {formatCurrency(lot.estimateLow, currency)} – {formatCurrency(lot.estimateHigh, currency)}
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <span className="font-label-caps text-[11px] text-[#f2c08d] block font-semibold">
                    CURRENT LIVE BID
                  </span>
                  <span className="text-xs text-[#9c8e82]">{lot.bidsCount} floor & phone bids placed</span>
                </div>
                <span
                  className={`font-serif-luxury text-3xl sm:text-4xl text-[#f2c08d] tracking-tight tabular-numeric transition-all duration-300 ${
                    bidFlashed ? 'scale-110 text-white font-bold' : ''
                  }`}
                >
                  {formatCurrency(lot.currentBid, currency)}
                </span>
              </div>

              {/* Mini Sparkline for Bid Momentum */}
              <div className="pt-2">
                <div className="flex justify-between font-label-caps text-[10px] text-[#9c8e82] pb-1">
                  <span>OPENING {formatCurrency(lot.openingBid, currency)}</span>
                  <span className="text-[#ecbf84] font-semibold">RESERVE MET</span>
                </div>
                <svg
                  className="w-full h-8 text-[#f2c08d]"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 300 40"
                >
                  <path
                    d="M0,35 L40,32 L80,28 L120,24 L160,25 L200,18 L240,12 L280,8 L300,5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <circle cx="300" cy="5" r="4" fill="currentColor" className="animate-ping" />
                  <circle cx="300" cy="5" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleQuickBid}
                  className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs py-3.5 px-4 rounded tracking-widest text-center transition-all shadow-md flex items-center justify-center gap-2 font-bold active:scale-95"
                  type="button"
                >
                  <span className="w-2 h-2 rounded-full bg-[#472a03] animate-pulse" />
                  <span>BID {formatCurrency(nextBidAmount, currency)}</span>
                </button>

                <button
                  onClick={onEnterSaleroom}
                  className="bg-[#28283d] hover:bg-[#333348] text-white font-label-caps text-xs py-3.5 px-4 rounded tracking-widest text-center transition-colors flex items-center justify-center gap-2 border border-[#333348] active:scale-95"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#ecbf84]">gavel</span>
                  <span>ENTER SALEROOM</span>
                </button>
              </div>

              <div className="flex items-center justify-between gap-2 pt-2">
                <button
                  onClick={onOrderCatalogue}
                  className="text-[#d4c4b7] hover:text-[#f2c08d] font-label-caps text-[10px] flex items-center gap-1.5 transition-colors py-1"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">menu_book</span>
                  <span>ORDER BOUND CATALOGUE</span>
                </button>

                <button
                  onClick={onOpenConditionReport}
                  className="text-[#d4c4b7] hover:text-[#f2c08d] font-label-caps text-[10px] flex items-center gap-1.5 transition-colors py-1"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>CONDITION DOSSIER (PDF)</span>
                </button>
              </div>
            </div>

            {/* Trust Badging */}
            <div className="pt-3 mt-4 bg-[#0c0c1f]/60 p-3 rounded border border-[#28283d] flex items-center justify-between">
              <span className="text-xs text-[#9c8e82] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#ecbf84]">verified_user</span>
                Pre-cleared with Aurelia Escrow
              </span>
              <span className="font-label-caps text-[10px] text-[#d4c4b7] uppercase tracking-wider">
                Premium: 12%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
