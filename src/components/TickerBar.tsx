import React from 'react';

interface TickerBarProps {
  onSelectSale: (saleName: string) => void;
}

export const TickerBar: React.FC<TickerBarProps> = ({ onSelectSale }) => {
  return (
    <section className="w-full bg-[#28283d] py-3 overflow-x-auto shadow-inner border-b border-[#333348] scrollbar-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between min-w-[1020px] gap-6">
        {/* Title Tag */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="material-symbols-outlined text-[#ecbf84] text-[18px]">stream</span>
          <span className="font-label-caps text-xs text-[#f2c08d] tracking-widest uppercase">
            AUCTION ROSTRUM REALTIME
          </span>
        </div>

        {/* Ticker 1 */}
        <button
          onClick={() => onSelectSale('Geneva High Jewelry & Rare Gems')}
          className="flex items-center gap-2 shrink-0 bg-[#1a1a2e] hover:bg-[#1e1e32] px-4 py-2 rounded border border-[#333348] transition-colors text-left"
        >
          <span className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-pulse" />
          <span className="font-label-caps text-xs text-white uppercase">
            GENEVA: High Jewelry &amp; Rare Gems
          </span>
          <span className="text-[#9c8e82] text-xs">• Lot 48 of 120</span>
          <span className="font-label-caps text-xs text-[#ecbf84]">CURRENT CHF 1,850,000</span>
        </button>

        {/* Ticker 2 */}
        <button
          onClick={() => onSelectSale('London Post-War British Art')}
          className="flex items-center gap-2 shrink-0 bg-[#1a1a2e] hover:bg-[#1e1e32] px-4 py-2 rounded border border-[#333348] transition-colors text-left"
        >
          <span className="material-symbols-outlined text-[#f2c08d] text-[14px]">alarm</span>
          <span className="font-label-caps text-xs text-white uppercase">
            LONDON: Post-War British Art
          </span>
          <span className="text-[#9c8e82] text-xs">• Starts in 2h 45m</span>
          <span className="font-label-caps text-xs text-[#efbd8a]">94 LOTS</span>
        </button>

        {/* Ticker 3 */}
        <button
          onClick={() => onSelectSale('New York Historic Horology')}
          className="flex items-center gap-2 shrink-0 bg-[#1a1a2e] hover:bg-[#1e1e32] px-4 py-2 rounded border border-[#333348] transition-colors text-left"
        >
          <span className="material-symbols-outlined text-[#f2c08d] text-[14px]">schedule</span>
          <span className="font-label-caps text-xs text-white uppercase">
            NEW YORK: Historic Horology
          </span>
          <span className="text-[#9c8e82] text-xs">• Tomorrow 10:00 EST</span>
          <span className="font-label-caps text-xs text-[#ecbf84]">REGISTER OPEN</span>
        </button>
      </div>
    </section>
  );
};
