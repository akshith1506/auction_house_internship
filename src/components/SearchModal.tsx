import React, { useState } from 'react';
import { CurrencyCode, LotItem } from '../types/auction';
import { formatCurrency } from '../data/auctionData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lots: LotItem[];
  currency: CurrencyCode;
  onSelectLot: (lot: LotItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  lots,
  currency,
  onSelectLot,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = lots.filter(
    (l) =>
      l.title.toLowerCase().includes(query.toLowerCase()) ||
      l.artist.toLowerCase().includes(query.toLowerCase()) ||
      l.department.toLowerCase().includes(query.toLowerCase()) ||
      l.saleroom.toLowerCase().includes(query.toLowerCase()) ||
      String(l.lotNumber).includes(query)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#111125] border border-[#d4a574] rounded-lg w-full max-w-2xl shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 bg-[#0c0c1f] border-b border-[#28283d] flex items-center gap-3">
          <span className="material-symbols-outlined text-[#f2c08d] text-[24px]">search</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by artist, masterpiece title, lot number, department..."
            autoFocus
            className="w-full bg-transparent text-white placeholder:text-[#9c8e82] text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-[#9c8e82] hover:text-white p-1 rounded text-lg"
          >
            ✕
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-[#9c8e82] text-xs">
              No matching lots or curatorial records found for "{query}".
            </div>
          ) : (
            filtered.map((lot) => (
              <div
                key={lot.id}
                onClick={() => {
                  onSelectLot(lot);
                  onClose();
                }}
                className="bg-[#1a1a2e] hover:bg-[#1e1e32] p-3 rounded border border-[#28283d] hover:border-[#f2c08d]/50 transition-colors flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={lot.primaryImage}
                    alt={lot.title}
                    className="w-14 h-14 rounded object-cover border border-[#28283d]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="font-label-caps text-[9px] text-[#ecbf84] block">
                      LOT {lot.lotNumber} • {lot.saleroom}
                    </span>
                    <h4 className="font-serif-luxury text-sm text-white font-medium">{lot.title}</h4>
                    <p className="text-xs text-[#9c8e82]">{lot.artist} ({lot.year})</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-label-caps text-[9px] text-[#9c8e82] block">ESTIMATE</span>
                  <span className="text-xs text-[#f2c08d] font-mono font-semibold">
                    {formatCurrency(lot.currentBid, currency)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
