import React, { useState, useEffect } from 'react';
import { CurrencyCode } from '../types/auction';
import { EMBLEM_LOGO_URL, PATRON_AVATAR_URL } from '../data/auctionData';

interface HeaderProps {
  currentCurrency: CurrencyCode;
  onSelectCurrency: (c: CurrencyCode) => void;
  activeNavTab: string;
  onSelectNavTab: (tab: string) => void;
  onOpenLiveSaleroom: () => void;
  onOpenWatchlist: () => void;
  onOpenSearch: () => void;
  onOpenRegister: () => void;
  watchlistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentCurrency,
  onSelectCurrency,
  activeNavTab,
  onSelectNavTab,
  onOpenLiveSaleroom,
  onOpenWatchlist,
  onOpenSearch,
  onOpenRegister,
  watchlistCount,
}) => {
  // Live global clocks
  const [timeState, setTimeState] = useState({
    london: '14:32',
    geneva: '15:32',
    newyork: '09:32',
    hongkong: '22:32',
  });
  const [showPatronPopover, setShowPatronPopover] = useState(false);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const formatCity = (timeZone: string) => {
        try {
          return new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone,
            hour12: false,
          }).format(now);
        } catch {
          return '12:00';
        }
      };

      setTimeState({
        london: formatCity('Europe/London'),
        geneva: formatCity('Europe/Zurich'),
        newyork: formatCity('America/New_York'),
        hongkong: formatCity('Asia/Hong_Kong'),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0c1f]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.35)] border-b border-[#28283d]">
      <div className="h-28 flex flex-col justify-between">
        {/* Top Utility Ribbon */}
        <div className="h-8 bg-[#0c0c1f] flex items-center justify-between px-4 sm:px-8 lg:px-16 border-b border-[#1e1e32] text-xs">
          {/* Live Saleroom Indicator & Global Clocks */}
          <div className="flex items-center gap-4 overflow-x-auto py-1 scrollbar-none">
            <button
              onClick={onOpenLiveSaleroom}
              className="flex items-center gap-1.5 text-[#d4c4b7] hover:text-[#f2c08d] font-label-caps transition-colors shrink-0"
              title="Click to enter live bidding floor"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab] animate-pulse"></span>
              <span>LIVE SALEROOM</span>
            </button>
            <span className="text-[#50453b] hidden sm:inline">•</span>
            <div className="hidden sm:flex items-center gap-3 text-[#d4c4b7] font-label-caps tracking-widest text-[10px]">
              <span>LONDON {timeState.london}</span>
              <span className="text-[#50453b]">•</span>
              <span>GENEVA {timeState.geneva}</span>
              <span className="text-[#50453b]">•</span>
              <span>NEW YORK {timeState.newyork}</span>
              <span className="text-[#50453b]">•</span>
              <span>HONG KONG {timeState.hongkong}</span>
            </div>
          </div>

          {/* Currency Switcher & VIP Patron Status */}
          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-[#9c8e82] font-label-caps hidden md:inline">CURRENCY</span>
              <div className="flex items-center gap-1 bg-[#1a1a2e] px-1.5 py-0.5 rounded border border-[#28283d]">
                {(['INR', 'USD', 'GBP', 'EUR', 'CHF'] as CurrencyCode[]).map((cur, idx, arr) => (
                  <React.Fragment key={cur}>
                    <button
                      onClick={() => onSelectCurrency(cur)}
                      className={`font-label-caps text-[10px] transition-colors px-1 py-0.5 rounded ${
                        currentCurrency === cur
                          ? 'text-[#f2c08d] font-bold bg-[#28283d]'
                          : 'text-[#d4c4b7] hover:text-white'
                      }`}
                      type="button"
                    >
                      {cur}
                    </button>
                    {idx < arr.length - 1 && <span className="text-[#50453b] font-label-caps text-[10px]">|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* VIP Patron badge with clickable dossier dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowPatronPopover(!showPatronPopover)}
                className="flex items-center gap-1.5 text-[#ecbf84] hover:text-[#ffddb4] transition-colors focus:outline-none"
                type="button"
              >
                <span className="material-symbols-outlined text-[14px]">verified</span>
                <span className="font-label-caps tracking-widest text-[10px] hidden sm:inline">
                  VIP CONNOISSEUR PATRON
                </span>
              </button>

              {showPatronPopover && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-[#1a1a2e] border border-[#d4a574] p-4 rounded shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 text-left">
                  <div className="flex items-center justify-between pb-2 border-b border-[#28283d]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ecbf84] text-[18px]">verified_user</span>
                      <span className="font-label-caps text-[#ecbf84] text-xs">CERTIFIED TIER 1 PATRON</span>
                    </div>
                    <button
                      onClick={() => setShowPatronPopover(false)}
                      className="text-[#9c8e82] hover:text-white text-xs"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="py-2.5 space-y-1.5 text-xs text-[#d4c4b7]">
                    <div className="flex justify-between">
                      <span className="text-[#9c8e82]">Paddle Number:</span>
                      <span className="text-white font-mono font-semibold">PADDLE #884</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9c8e82]">Pre-Approved Line:</span>
                      <span className="text-[#f2c08d] font-semibold">$25,000,000 USD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9c8e82]">Escrow Custody:</span>
                      <span className="text-[#ecbf84]">Swiss Bonded Vault Pre-Cleared</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9c8e82]">Private Liaison:</span>
                      <span className="text-white">Lord Nicholas Abercorn</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowPatronPopover(false);
                      onOpenLiveSaleroom();
                    }}
                    className="w-full mt-2 bg-[#d4a574] hover:bg-[#ecbf84] text-[#111125] font-label-caps text-[10px] py-2 rounded tracking-widest text-center transition-colors font-semibold"
                  >
                    ENTER LIVE ROSTRUM FLOOR
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className="h-20 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between gap-4">
          {/* Logo Lockup */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onSelectNavTab('saleroom')}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <img
                src={EMBLEM_LOGO_URL}
                alt="Aurelia Emblem"
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-serif-luxury text-xl tracking-tight text-white uppercase group-hover:text-[#f2c08d] transition-colors">
                  AURELIA
                </span>
                <span className="font-label-caps text-[9px] text-[#ecbf84] tracking-[0.22em] uppercase">
                  GENÈVE • LONDON • NEW YORK
                </span>
              </div>
            </button>

            {/* Nav links */}
            <nav className="hidden xl:flex items-center gap-6 ml-4">
              {[
                { id: 'saleroom', label: 'Live Saleroom' },
                { id: 'auctions-catalogues', label: 'Auctions & Catalogues' },
                { id: 'private-sales', label: 'Private Sales' },
                { id: 'departments', label: 'Departments' },
                { id: 'sell-consign', label: 'Sell / Consign' },
                { id: 'valuation', label: 'Valuation' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectNavTab(item.id)}
                  className={`font-label-caps text-xs py-1 transition-colors relative ${
                    activeNavTab === item.id
                      ? 'text-[#f2c08d] border-b-2 border-[#f2c08d]'
                      : 'text-[#d4c4b7] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              onClick={onOpenSearch}
              aria-label="Search Catalogues"
              className="w-9 h-9 flex items-center justify-center rounded text-[#d4c4b7] hover:text-[#f2c08d] hover:bg-[#1a1a2e] transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>

            {/* Watchlist */}
            <button
              onClick={onOpenWatchlist}
              aria-label="Watchlist"
              className="relative w-9 h-9 flex items-center justify-center rounded text-[#d4c4b7] hover:text-[#f2c08d] hover:bg-[#1a1a2e] transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">bookmark</span>
              {watchlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#d4a574] text-[#111125] font-label-caps text-[9px] flex items-center justify-center font-bold">
                  {watchlistCount}
                </span>
              )}
            </button>

            {/* Register to Bid button */}
            <button
              onClick={onOpenRegister}
              className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-[11px] px-4 py-2.5 rounded tracking-widest transition-all duration-300 font-semibold shadow-md active:scale-95"
              type="button"
            >
              REGISTER TO BID
            </button>

            {/* Profile Avatar */}
            <div
              onClick={() => setShowPatronPopover(!showPatronPopover)}
              className="cursor-pointer flex items-center gap-1 pl-1"
              title="Patron Profile & Credentials"
            >
              <div className="relative">
                <img
                  src={PATRON_AVATAR_URL}
                  alt="Patron Profile"
                  className="w-8 h-8 rounded-full object-cover border border-[#d4a574]"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#f2c08d] border-2 border-[#111125]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
