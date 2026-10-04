import React, { useState, useEffect, useRef } from 'react';
import { CurrencyCode, LotItem, BidEntry } from '../types/auction';
import { formatCurrency, INITIAL_BIDS_STREAM } from '../data/auctionData';
import { saleroomAudio } from '../utils/audio';

interface LiveSaleroomModalProps {
  isOpen: boolean;
  onClose: () => void;
  lot: LotItem;
  currency: CurrencyCode;
  onPlaceBid: (amount: number) => void;
}

export const LiveSaleroomModal: React.FC<LiveSaleroomModalProps> = ({
  isOpen,
  onClose,
  lot,
  currency,
  onPlaceBid,
}) => {
  const [bids, setBids] = useState<BidEntry[]>(INITIAL_BIDS_STREAM);
  const [auctioneerMessage, setAuctioneerMessage] = useState<string>(
    '“Standing at $5,200,000 with the gentleman on the telephone in Geneva. Looking for $5,400,000 in the room or online...”'
  );
  const [gavelFired, setGavelFired] = useState(false);
  const [customBidAmount, setCustomBidAmount] = useState<string>('');
  const bidsEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll bids
  useEffect(() => {
    bidsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [bids]);

  if (!isOpen) return null;

  const handleBidIncrement = (incrementUSD: number) => {
    saleroomAudio.playBidChime();
    const newAmount = lot.currentBid + incrementUSD;
    const newBid: BidEntry = {
      id: `bid-${Date.now()}`,
      lotId: lot.id,
      amount: newAmount,
      bidderType: 'Online',
      location: 'VIP Connoisseur Terminal',
      paddleNumber: 'PADDLE #884 (YOU)',
      timestamp: 'Just now',
      isYou: true,
    };

    setBids((prev) => [newBid, ...prev]);
    onPlaceBid(newAmount);
    setAuctioneerMessage(
      `“Bid accepted at ${formatCurrency(newAmount, 'USD')} from Paddle #884 online! Do I hear another advance?”`
    );
  };

  const handleStrikeGavel = () => {
    saleroomAudio.playGavel();
    setGavelFired(true);
    setTimeout(() => setGavelFired(false), 600);
    setAuctioneerMessage(
      `“Fair warning! At ${formatCurrency(lot.currentBid, 'USD')}... Going once, going twice...”`
    );
  };

  const handleCustomBid = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(customBidAmount);
    if (!isNaN(val) && val > lot.currentBid) {
      saleroomAudio.playBidChime();
      const newBid: BidEntry = {
        id: `bid-${Date.now()}`,
        lotId: lot.id,
        amount: val,
        bidderType: 'Online',
        location: 'VIP Terminal',
        paddleNumber: 'PADDLE #884 (YOU)',
        timestamp: 'Just now',
        isYou: true,
      };
      setBids((prev) => [newBid, ...prev]);
      onPlaceBid(val);
      setCustomBidAmount('');
      setAuctioneerMessage(`“New leading offer of ${formatCurrency(val, 'USD')} with our online VIP patron!”`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#111125] border border-[#d4a574] rounded-lg w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="h-14 bg-[#0c0c1f] px-6 border-b border-[#28283d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab] animate-ping" />
            <span className="font-serif-luxury text-white text-base tracking-wide uppercase">
              AURELIA LIVE ROSTRUM • SALEROOM 01 (NEW YORK &amp; GLOBAL DESKS)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-[#1a1a2e] px-3 py-1 rounded border border-[#28283d] text-xs font-mono text-[#f2c08d]">
              <span>YOUR PADDLE:</span>
              <span className="font-bold">#884</span>
            </div>
            <button
              onClick={onClose}
              className="text-[#9c8e82] hover:text-white p-1 rounded transition-colors text-lg"
              title="Leave Saleroom"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Saleroom Body Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Left Column: Rostrum Stage & Video Simulation (7 Cols) */}
          <div className="lg:col-span-7 p-6 bg-[#0c0c1f] flex flex-col justify-between overflow-y-auto border-b lg:border-b-0 lg:border-r border-[#28283d]">
            {/* Live Camera View of Artwork & Auctioneer */}
            <div className="relative aspect-[16/10] bg-[#1a1a2e] rounded overflow-hidden border border-[#28283d] group">
              <img
                src={lot.primaryImage}
                alt={lot.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />

              {/* Live stream badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs font-label-caps text-[#ffb4ab]">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>HD BROADCAST • 1080P 60FPS</span>
              </div>

              {/* Audio visualizer bar */}
              <div className="absolute top-3 right-3 flex items-end gap-1 bg-black/70 px-2.5 py-1.5 rounded">
                <span className="w-1 h-3 bg-[#f2c08d] animate-pulse" />
                <span className="w-1 h-4 bg-[#f2c08d] animate-pulse delay-75" />
                <span className="w-1 h-2 bg-[#f2c08d] animate-pulse delay-150" />
                <span className="w-1 h-3.5 bg-[#f2c08d] animate-pulse" />
                <span className="text-[10px] text-[#d4c4b7] font-mono ml-1">AUDIO FEED LIVE</span>
              </div>

              {/* Auctioneer Speech Bubble */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#111125]/95 backdrop-blur-md p-3.5 rounded border border-[#d4a574]/60 shadow-lg">
                <div className="flex items-center justify-between pb-1">
                  <span className="font-label-caps text-[10px] text-[#ecbf84] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">record_voice_over</span>
                    AUCTIONEER ROSTRUM AUDIO DISPATCH
                  </span>
                  <button
                    onClick={handleStrikeGavel}
                    className={`font-label-caps text-[10px] px-2 py-0.5 rounded transition-all flex items-center gap-1 ${
                      gavelFired ? 'bg-[#ffb4ab] text-[#690005]' : 'bg-[#28283d] text-[#f2c08d] hover:bg-[#333348]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[13px]">gavel</span>
                    <span>{gavelFired ? 'GAVEL STRUCK!' : 'SOUND GAVEL'}</span>
                  </button>
                </div>
                <p className="font-serif-luxury text-sm text-white italic">{auctioneerMessage}</p>
              </div>
            </div>

            {/* Lot Summary Strip */}
            <div className="mt-4 p-4 rounded bg-[#1a1a2e] border border-[#28283d] flex items-center justify-between">
              <div>
                <span className="font-label-caps text-[10px] text-[#ecbf84]">
                  LOT {lot.lotNumber} • {lot.artist.toUpperCase()}
                </span>
                <h4 className="font-serif-luxury text-base text-white">{lot.title} ({lot.year})</h4>
              </div>
              <div className="text-right">
                <span className="font-label-caps text-[10px] text-[#9c8e82] block">ESTIMATE</span>
                <span className="text-xs text-[#d4c4b7] font-mono">
                  {formatCurrency(lot.estimateLow, currency)} – {formatCurrency(lot.estimateHigh, currency)}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Real-time Bids Ledger & Interactive Paddling (5 Cols) */}
          <div className="lg:col-span-5 p-6 bg-[#111125] flex flex-col justify-between overflow-y-auto">
            {/* Top: Current Bid Gauge */}
            <div className="bg-[#1e1e32] p-4 rounded border border-[#28283d] mb-4">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-xs text-[#f2c08d]">ACTIVE HIGH BID</span>
                <span className="font-label-caps text-[10px] text-[#ecbf84] bg-[#28283d] px-2 py-0.5 rounded">
                  RESERVE SURPASSED
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="font-serif-luxury text-3xl sm:text-4xl text-[#f2c08d] tabular-numeric font-bold">
                  {formatCurrency(lot.currentBid, currency)}
                </span>
                <span className="text-xs text-[#9c8e82] font-mono">
                  USD: ${lot.currentBid.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Middle: Live Bid Stream Ledger */}
            <div className="flex-1 flex flex-col min-h-[220px] max-h-[300px] bg-[#1a1a2e] rounded border border-[#28283d] p-3 mb-4 overflow-hidden">
              <span className="font-label-caps text-[10px] text-[#9c8e82] pb-2 border-b border-[#28283d] block">
                ROSTRUM TRANSACTION STREAM (CHRONOLOGICAL)
              </span>
              <div className="flex-1 overflow-y-auto space-y-2 pt-2 pr-1">
                {bids.map((b) => (
                  <div
                    key={b.id}
                    className={`p-2.5 rounded text-xs flex items-center justify-between border ${
                      b.isYou
                        ? 'bg-[#d4a574]/20 border-[#f2c08d] text-white'
                        : 'bg-[#111125] border-[#28283d] text-[#d4c4b7]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`font-semibold font-mono ${
                            b.isYou ? 'text-[#f2c08d]' : 'text-white'
                          }`}
                        >
                          {b.paddleNumber}
                        </span>
                        <span className="text-[10px] text-[#9c8e82]">({b.bidderType} • {b.location})</span>
                      </div>
                      <span className="text-[10px] text-[#9c8e82] block">{b.timestamp}</span>
                    </div>

                    <span className="font-serif-luxury text-base text-[#f2c08d] font-bold tabular-numeric">
                      {formatCurrency(b.amount, currency)}
                    </span>
                  </div>
                ))}
                <div ref={bidsEndRef} />
              </div>
            </div>

            {/* Bottom: Fast Paddling Controls */}
            <div className="space-y-3">
              <span className="font-label-caps text-[10px] text-[#ecbf84] block">
                DIRECT BIDDING WITH PADDLE #884
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleBidIncrement(200000)}
                  className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs py-3 px-3 rounded tracking-wider transition-colors font-bold shadow active:scale-95 text-center"
                >
                  BID +$200K ({formatCurrency(lot.currentBid + 200000, currency)})
                </button>
                <button
                  onClick={() => handleBidIncrement(500000)}
                  className="bg-[#28283d] hover:bg-[#333348] text-white font-label-caps text-xs py-3 px-3 rounded tracking-wider transition-colors font-bold border border-[#333348] active:scale-95 text-center"
                >
                  BID +$500K ({formatCurrency(lot.currentBid + 500000, currency)})
                </button>
              </div>

              {/* Custom Bid Input */}
              <form onSubmit={handleCustomBid} className="flex gap-2">
                <input
                  type="number"
                  value={customBidAmount}
                  onChange={(e) => setCustomBidAmount(e.target.value)}
                  placeholder={`Custom bid > $${lot.currentBid.toLocaleString()}`}
                  className="bg-[#1a1a2e] px-3 py-2 rounded text-white text-xs border border-[#28283d] focus:border-[#f2c08d] focus:outline-none flex-1 font-mono"
                />
                <button
                  type="submit"
                  className="bg-[#ecbf84] hover:bg-[#efbd8a] text-[#452b00] font-label-caps text-xs px-4 py-2 rounded uppercase tracking-wider font-bold transition-colors"
                >
                  OFFER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
