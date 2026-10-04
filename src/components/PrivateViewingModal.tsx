import React, { useState } from 'react';
import { EMBLEM_LOGO_URL } from '../data/auctionData';

interface PrivateViewingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivateViewingModal: React.FC<PrivateViewingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [saleroom, setSaleroom] = useState('Geneva Private Viewing Salon, Rue du Rhône');
  const [date, setDate] = useState('2025-11-15');
  const [interests, setInterests] = useState('Lot 14: Symphonie en Bleu, Off-Market Post-War masterworks');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      onClose();
    }, 2500);
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
                CONFIDENTIAL PRIVATE VIEWING
              </span>
              <span className="text-[10px] text-[#ecbf84] font-label-caps">
                INSTITUTIONAL ADVISORY &amp; OFF-MARKET CONSIGNMENTS
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

        {isBooked ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#f2c08d]/10 border border-[#f2c08d]/40 rounded-full flex items-center justify-center text-[#f2c08d] mx-auto">
              <span className="material-symbols-outlined text-[36px]">event_available</span>
            </div>
            <h3 className="font-serif-luxury text-2xl text-white">Private Viewing Scheduled</h3>
            <p className="text-xs text-[#d4c4b7] max-w-md mx-auto leading-relaxed">
              Your appointment at <strong>{saleroom}</strong> has been secured under full non-disclosure confidentiality. Our Chair of Private Sales will transmit the private security escort dossier to your verified correspondence channel.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs text-[#d4c4b7]">
            <div>
              <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                PREFERRED PRIVATE VIEWING SALEROOM
              </label>
              <select
                value={saleroom}
                onChange={(e) => setSaleroom(e.target.value)}
                className="w-full bg-[#1a1a2e] px-3.5 py-2.5 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
              >
                <option value="Geneva Private Viewing Salon, Rue du Rhône">
                  Geneva: Private Viewing Salon, Rue du Rhône (Switzerland)
                </option>
                <option value="London Mayfair Vault, Old Bond Street">
                  London: Mayfair Vault, Old Bond Street (United Kingdom)
                </option>
                <option value="New York Park Avenue Saleroom & Gallery">
                  New York: Park Avenue Saleroom &amp; Penthouse Gallery (USA)
                </option>
                <option value="Zurich Bonded Freeport Facility">
                  Zurich: Bonded Freeport Facility &amp; Safe Haven (Transit Vault)
                </option>
              </select>
            </div>

            <div>
              <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                PREFERRED DATE &amp; TIME
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-[#1a1a2e] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
              />
            </div>

            <div>
              <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                SPECIFIC MASTERPIECES / CATEGORIES OF INQUIRY
              </label>
              <textarea
                rows={3}
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="w-full bg-[#1a1a2e] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none resize-none leading-relaxed"
              />
            </div>

            <div className="bg-[#1a1a2e] p-3 rounded border border-[#28283d] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ecbf84] text-[18px]">verified_user</span>
              <span className="text-[11px] text-[#9c8e82]">
                Guaranteed mutual non-disclosure agreement (NDA) and secure private armored logistics available upon request.
              </span>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="text-[#9c8e82] hover:text-white font-label-caps text-xs"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs px-6 py-2.5 rounded font-bold shadow transition-colors active:scale-95"
              >
                REQUEST CONFIDENTIAL APPOINTMENT
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
