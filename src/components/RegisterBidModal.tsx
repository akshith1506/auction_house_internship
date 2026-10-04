import React, { useState } from 'react';
import { EMBLEM_LOGO_URL } from '../data/auctionData';

interface RegisterBidModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegistered: (paddle: string) => void;
}

export const RegisterBidModal: React.FC<RegisterBidModalProps> = ({
  isOpen,
  onClose,
  onRegistered,
}) => {
  const [formData, setFormData] = useState({
    name: 'Lady Vivienne Montgomery',
    email: 'akshithasandadi@gmail.com',
    institution: 'The Montgomery Family Heritage Trust',
    jurisdiction: 'Geneva / London',
    bidLimit: '15000000',
    escrowPreference: 'Swiss Bonded Freeport Vault',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onRegistered('PADDLE #884');
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#111125] border border-[#d4a574] rounded-lg w-full max-w-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="h-16 bg-[#0c0c1f] px-6 border-b border-[#28283d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={EMBLEM_LOGO_URL}
              alt="Aurelia Emblem"
              className="h-7 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-serif-luxury text-white text-base uppercase">
                SALEROOM PADDLE REGISTRATION
              </span>
              <span className="text-[10px] text-[#ecbf84] font-label-caps">
                AML COMPLIANCE • TIER 1 ESCROW PRE-CLEARANCE
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#9c8e82] hover:text-white p-1 rounded transition-colors text-lg"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <h3 className="font-serif-luxury text-2xl text-white">Paddle Allocation Confirmed</h3>
            <p className="text-xs text-[#d4c4b7] max-w-md mx-auto leading-relaxed">
              Your credentials and banking guarantees have been validated. You are assigned <strong className="text-[#f2c08d]">PADDLE #884</strong> for the Evening Sale across New York, Geneva, and London rostrum channels.
            </p>
            <div className="font-mono text-sm text-[#f2c08d] bg-[#1a1a2e] py-2 px-4 rounded border border-[#28283d] inline-block">
              ALLOCATED PADDLE: #884 • TIER 1 ACTIVE
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs text-[#d4c4b7]">
            <p className="text-xs text-[#9c8e82] leading-relaxed">
              Aurelia salerooms operate under strict international anti-money laundering regulations. Registration grants instant live rostrum, phone desk, and confidential commission bidding privileges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                  PATRON OR BENEFICIARY NAME
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-[#1a1a2e] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                  CORRESPONDENCE EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-[#1a1a2e] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                  INSTITUTION / FAMILY OFFICE (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full bg-[#1a1a2e] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                  DESIRED BIDDING CAPACITY (USD)
                </label>
                <select
                  value={formData.bidLimit}
                  onChange={(e) => setFormData({ ...formData, bidLimit: e.target.value })}
                  className="w-full bg-[#1a1a2e] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
                >
                  <option value="5000000">Up to $5,000,000 USD</option>
                  <option value="15000000">Up to $15,000,000 USD (Tier 1)</option>
                  <option value="50000000">Up to $50,000,000 USD (Sovereign)</option>
                  <option value="unlimited">Custom / Unlimited Escrow</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                BONDED VAULT &amp; ESCROW PROTOCOL
              </label>
              <input
                type="text"
                value={formData.escrowPreference}
                onChange={(e) => setFormData({ ...formData, escrowPreference: e.target.value })}
                className="w-full bg-[#1a1a2e] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
              />
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-[#28283d]">
              <span className="text-[11px] text-[#9c8e82]">
                Guaranteed encrypted transmission.
              </span>
              <button
                type="submit"
                className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs px-6 py-2.5 rounded font-bold shadow transition-colors active:scale-95 uppercase tracking-wider"
              >
                AUTHORIZE &amp; ISSUE PADDLE
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
