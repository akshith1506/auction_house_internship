import React from 'react';

interface PrivateTreatySectionProps {
  onBookPrivateViewing: () => void;
  onMeetChair: () => void;
}

export const PrivateTreatySection: React.FC<PrivateTreatySectionProps> = ({
  onBookPrivateViewing,
  onMeetChair,
}) => {
  return (
    <section className="w-full bg-[#111125] py-14 sm:py-20 relative overflow-hidden border-b border-[#28283d]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="bg-[#0c0c1f] rounded overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl border border-[#28283d]">
          {/* Imagery Column */}
          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChi60VzqGPAJKML0MMJqaVsSIke6wCeqdItxIRtfzghhpYp3XrmNm50cTpnJ90j19e19tqEGHa4wqV01ZQri3Qa1xzG705m0iK72qjXN9nn8D3qg_LwxJBhOZ88gywUtB9hr0jccPKhLN4uHxqGsMcZo90BFLiSZKPvem59DPKl5ddfMviZlU5gmyUhUFCe4Nzj06Qkv_dlcj8-k0CIZtkLXsrAdWwip7lkH-_W0x1PFclCXl5aZ3ilQ"
              alt="Private viewing room"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0c0c1f]/40 to-[#0c0c1f]" />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-center gap-5">
            <div className="flex items-center gap-2 text-[#ecbf84] font-label-caps text-xs">
              <span className="material-symbols-outlined text-[16px]">lock</span>
              <span className="tracking-widest uppercase">DISCREET OFF-MARKET TRANSACTIONS</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white">
              Private Treaty Sales &amp; Institutional Advisory
            </h2>

            <p className="text-sm text-[#d4c4b7] leading-relaxed">
              For collectors requiring complete anonymity or bespoke non-public consignments. Aurelia’s Private Treaty division facilitates acquisitions outside of the public auction cycle with absolute discretion, direct institutional loans, and single-owner collection placement.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#1a1a2e] p-3.5 rounded border border-[#28283d]">
                <span className="font-serif-luxury text-2xl text-[#f2c08d] block font-bold">
                  $1.2B+
                </span>
                <span className="text-xs text-[#9c8e82]">Private Volume (2024)</span>
              </div>

              <div className="bg-[#1a1a2e] p-3.5 rounded border border-[#28283d]">
                <span className="font-serif-luxury text-2xl text-[#f2c08d] block font-bold">
                  140+
                </span>
                <span className="text-xs text-[#9c8e82]">Museum Accessions</span>
              </div>

              <div className="bg-[#1a1a2e] p-3.5 rounded border border-[#28283d]">
                <span className="font-serif-luxury text-2xl text-[#f2c08d] block font-bold">
                  100%
                </span>
                <span className="text-xs text-[#9c8e82]">Strict AML Discretion</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onBookPrivateViewing}
                className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs px-6 py-3.5 rounded tracking-widest transition-colors font-bold shadow active:scale-95"
                type="button"
              >
                BOOK PRIVATE VIEWING
              </button>

              <button
                onClick={onMeetChair}
                className="bg-[#28283d] hover:bg-[#333348] text-white font-label-caps text-xs px-6 py-3.5 rounded tracking-widest transition-colors border border-[#333348] active:scale-95"
                type="button"
              >
                MEET CHAIR OF PRIVATE SALES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
