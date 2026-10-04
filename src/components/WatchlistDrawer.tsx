import React from 'react';
import { CurrencyCode, LotItem } from '../types/auction';
import { formatCurrency } from '../data/auctionData';

interface WatchlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  watchlist: string[];
  allLots: LotItem[];
  currency: CurrencyCode;
  onRemoveFromWatchlist: (lotId: string) => void;
  onSelectLot: (lot: LotItem) => void;
}

export const WatchlistDrawer: React.FC<WatchlistDrawerProps> = ({
  isOpen,
  onClose,
  watchlist,
  allLots,
  currency,
  onRemoveFromWatchlist,
  onSelectLot,
}) => {
  if (!isOpen) return null;

  const savedLots = allLots.filter((l) => watchlist.includes(l.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111125] border-l border-[#d4a574]/40 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="h-16 bg-[#0c0c1f] px-6 border-b border-[#28283d] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f2c08d] text-[20px]">bookmark</span>
              <span className="font-serif-luxury text-white text-base uppercase">
                SAVED CATALOGUE LOTS ({savedLots.length})
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-[#9c8e82] hover:text-white p-1 rounded transition-colors text-lg"
            >
              ✕
            </button>
          </div>

          {/* Body items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedLots.length === 0 ? (
              <div className="text-center py-16 text-[#9c8e82] space-y-2">
                <span className="material-symbols-outlined text-[32px] text-[#50453b]">bookmark_border</span>
                <p className="text-xs">No items currently bookmarked in your patron portfolio.</p>
              </div>
            ) : (
              savedLots.map((lot) => (
                <div
                  key={lot.id}
                  className="bg-[#1a1a2e] p-3.5 rounded border border-[#28283d] flex gap-3.5 hover:border-[#f2c08d]/50 transition-colors"
                >
                  <img
                    src={lot.primaryImage}
                    alt={lot.title}
                    className="w-20 h-20 rounded object-cover border border-[#28283d] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-label-caps text-[9px] text-[#ecbf84]">
                          LOT {lot.lotNumber} • {lot.saleroom}
                        </span>
                        <button
                          onClick={() => onRemoveFromWatchlist(lot.id)}
                          className="text-[#9c8e82] hover:text-[#ffb4ab] text-xs"
                          title="Remove bookmark"
                        >
                          ✕
                        </button>
                      </div>
                      <h4 className="font-serif-luxury text-sm text-white truncate pt-0.5">{lot.title}</h4>
                      <p className="text-[11px] text-[#9c8e82] truncate">{lot.artist}</p>
                    </div>

                    <div className="flex items-baseline justify-between pt-1">
                      <span className="font-serif-luxury text-sm text-[#f2c08d] font-bold tabular-numeric">
                        {formatCurrency(lot.currentBid, currency)}
                      </span>
                      <button
                        onClick={() => {
                          onSelectLot(lot);
                          onClose();
                        }}
                        className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-[10px] px-2.5 py-1 rounded font-bold"
                      >
                        BID NOW
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-[#0c0c1f] border-t border-[#28283d] text-xs text-[#9c8e82] flex items-center justify-between">
            <span>Watchlist active alerts enabled</span>
            <span className="text-[#ecbf84] font-label-caps text-[10px]">PADDLE #884 SYNCED</span>
          </div>
        </div>
      </div>
    </div>
  );
};
