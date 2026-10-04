import React, { useState } from 'react';
import { EMBLEM_LOGO_URL } from '../data/auctionData';

interface FooterProps {
  onSelectNavTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectNavTab }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-[#0c0c1f] text-[#d4c4b7] border-t border-[#28283d]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#1e1e32]">
          {/* Brand & Newsletter Column (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4 pr-0 lg:pr-8">
            <div className="flex items-center gap-3">
              <img
                src={EMBLEM_LOGO_URL}
                alt="Aurelia Emblem"
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif-luxury text-lg tracking-tight text-white uppercase">
                AURELIA MAISON D'ENCHÈRES
              </span>
            </div>

            <p className="text-xs text-[#d4c4b7] max-w-md leading-relaxed">
              Founded in 1782. Premier international saleroom managing singular masterpieces, historic archives, museum-grade antiquities, and bespoke collection acquisitions for distinguished institutions and patrons worldwide.
            </p>

            <div className="flex flex-col gap-1.5 pt-2">
              <span className="font-label-caps text-xs text-[#ecbf84] uppercase">
                Private Preview Dispatch
              </span>
              {subscribed ? (
                <div className="p-2.5 rounded bg-[#1e1e32] border border-[#f2c08d] text-xs text-[#f2c08d] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Subscription confirmed. Curatorial dispatches will be delivered to your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1.5">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your correspondence email..."
                    required
                    className="bg-[#1a1a2e] px-4 py-2 rounded text-white text-xs placeholder:text-[#9c8e82] focus:border-[#f2c08d] focus:outline-none flex-1 border border-[#28283d]"
                  />
                  <button
                    type="submit"
                    className="bg-[#ecbf84] hover:bg-[#efbd8a] text-[#452b00] font-label-caps text-xs px-4 py-2 rounded uppercase tracking-wider transition-colors font-bold shrink-0 shadow"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Curatorial Departments */}
          <div className="flex flex-col gap-3">
            <span className="font-label-caps text-xs text-[#f2c08d] tracking-widest uppercase font-semibold">
              Curatorial Departments
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#d4c4b7]">
              <li>
                <button
                  onClick={() => onSelectNavTab('departments')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  Old Masters &amp; 19th Century Art
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNavTab('departments')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  Post-War &amp; Contemporary
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNavTab('departments')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  High Haute Joaillerie
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNavTab('departments')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  Horology &amp; Historic Timepieces
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNavTab('departments')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  Classical Antiquities &amp; Statuary
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNavTab('departments')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  Coachbuilt Classic Motorcars
                </button>
              </li>
            </ul>
          </div>

          {/* Client Saleroom */}
          <div className="flex flex-col gap-3">
            <span className="font-label-caps text-xs text-[#f2c08d] tracking-widest uppercase font-semibold">
              Client Saleroom
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#d4c4b7]">
              <li>
                <button
                  onClick={() => onSelectNavTab('auctions-catalogues')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  Global Auction Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNavTab('private-sales')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  Private Viewing Appointments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNavTab('sell-consign')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  Consignment &amp; Advisory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNavTab('private-sales')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  Museum &amp; Corporate Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNavTab('valuation')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  Taxation &amp; Heritage Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNavTab('valuation')}
                  className="hover:text-[#f2c08d] transition-colors text-left"
                >
                  Condition Report Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Institution & Trust */}
          <div className="flex flex-col gap-3">
            <span className="font-label-caps text-xs text-[#f2c08d] tracking-widest uppercase font-semibold">
              Institution &amp; Trust
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#d4c4b7]">
              <li>
                <span className="hover:text-[#f2c08d] cursor-pointer transition-colors">
                  Press Room &amp; Media Inquiries
                </span>
              </li>
              <li>
                <span className="hover:text-[#f2c08d] cursor-pointer transition-colors">
                  Curatorial Provenance Board
                </span>
              </li>
              <li>
                <span className="hover:text-[#f2c08d] cursor-pointer transition-colors">
                  International Offices (Geneva, NY, London)
                </span>
              </li>
              <li>
                <span className="hover:text-[#f2c08d] cursor-pointer transition-colors">
                  Financial Integrity &amp; AML Protocols
                </span>
              </li>
              <li>
                <span className="hover:text-[#f2c08d] cursor-pointer transition-colors">
                  Saleroom Regulations 2026
                </span>
              </li>
              <li>
                <span className="hover:text-[#f2c08d] cursor-pointer transition-colors">
                  Privacy Policy &amp; Terms
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditation and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <div className="flex flex-wrap items-center gap-6 text-[#9c8e82] font-label-caps text-[10px] tracking-widest">
            <span className="flex items-center gap-1.5 text-[#d4c4b7]">
              <span className="material-symbols-outlined text-[14px] text-[#ecbf84]">shield</span>
              FEDERATION OF FINE ART AUCTIONEERS
            </span>
            <span className="flex items-center gap-1.5 text-[#d4c4b7]">
              <span className="material-symbols-outlined text-[14px] text-[#ecbf84]">lock</span>
              TIER-1 ESCROW CUSTODIAL PROTOCOL
            </span>
            <span className="flex items-center gap-1.5 text-[#d4c4b7]">
              <span className="material-symbols-outlined text-[14px] text-[#ecbf84]">workspace_premium</span>
              GUARANTEED PROVENANCE CERTIFICATION
            </span>
          </div>

          <p className="text-xs text-[#9c8e82]">
            © 1782–2025 Aurelia Auctioneers Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
