import { useState } from 'react';
import { CurrencyCode, LotItem, EditorialArticle } from './types/auction';
import {
  HERO_LOT,
  HIGHLIGHT_LOTS,
  DEPARTMENTS_DATA,
  EDITORIAL_ARTICLES,
  formatCurrency,
} from './data/auctionData';
import { Header } from './components/Header';
import { HeroLot } from './components/HeroLot';
import { TickerBar } from './components/TickerBar';
import { DepartmentsSection } from './components/DepartmentsSection';
import { SaleroomHighlights } from './components/SaleroomHighlights';
import { PrivateTreatySection } from './components/PrivateTreatySection';
import { EditorialDispatch } from './components/EditorialDispatch';
import { PatronTestimonials } from './components/PatronTestimonials';
import { Footer } from './components/Footer';

// Modals & Screen Views
import { LiveSaleroomModal } from './components/LiveSaleroomModal';
import { VirtualVaultModal } from './components/VirtualVaultModal';
import { ConditionReportModal } from './components/ConditionReportModal';
import { WatchlistDrawer } from './components/WatchlistDrawer';
import { RegisterBidModal } from './components/RegisterBidModal';
import { PrivateViewingModal } from './components/PrivateViewingModal';
import { SearchModal } from './components/SearchModal';
import { ArticleModal } from './components/ArticleModal';

import { AuctionsCatalogueView } from './components/AuctionsCatalogueView';
import { DepartmentsView } from './components/DepartmentsView';
import { ConsignmentView } from './components/ConsignmentView';

export default function App() {
  // Navigation & View State
  const [activeNavTab, setActiveNavTab] = useState<string>('saleroom');

  // Currency State (default to INR)
  const [currency, setCurrency] = useState<CurrencyCode>('INR');

  // Active Lots State
  const [heroLotState, setHeroLotState] = useState<LotItem>(HERO_LOT);
  const [highlightLotsState, setHighlightLotsState] = useState<LotItem[]>(HIGHLIGHT_LOTS);

  // Watchlist (starts with 4 saved lots as in design)
  const [watchlist, setWatchlist] = useState<string[]>([
    'lot-14',
    'lot-22',
    'lot-38',
    'lot-61',
  ]);

  // Modals State
  const [isLiveSaleroomOpen, setIsLiveSaleroomOpen] = useState(false);
  const [isVirtualVaultOpen, setIsVirtualVaultOpen] = useState(false);
  const [isConditionReportOpen, setIsConditionReportOpen] = useState(false);
  const [inspectedLot, setInspectedLot] = useState<LotItem>(HERO_LOT);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isPrivateViewingOpen, setIsPrivateViewingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<EditorialArticle | null>(null);

  // Notification Toast for quick interactions
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  // Bid placement on Hero lot
  const handleHeroBid = (amount: number) => {
    setHeroLotState((prev) => ({
      ...prev,
      currentBid: amount,
      bidsCount: prev.bidsCount + 1,
    }));
    showToast(
      `Offer of ${formatCurrency(amount, currency)} recorded on Lot 14 via Paddle #884!`
    );
  };

  // Bid placement on Highlights
  const handleHighlightBid = (lot: LotItem, amount: number) => {
    setHighlightLotsState((prev) =>
      prev.map((item) =>
        item.id === lot.id
          ? { ...item, currentBid: amount, bidsCount: item.bidsCount + 1 }
          : item
      )
    );
    showToast(
      `Bid of ${formatCurrency(amount, currency)} placed on Lot ${lot.lotNumber} (${lot.title})!`
    );
  };

  // Toggle Watchlist
  const handleToggleWatchlist = (lotId: string) => {
    if (watchlist.includes(lotId)) {
      setWatchlist((prev) => prev.filter((id) => id !== lotId));
      showToast('Removed from your saved patron portfolio.');
    } else {
      setWatchlist((prev) => [...prev, lotId]);
      showToast('Added to your VIP saved watchlist with live alerts.');
    }
  };

  // Open Condition Dossier for specific lot
  const handleOpenCondition = (lot: LotItem) => {
    setInspectedLot(lot);
    setIsConditionReportOpen(true);
  };

  // Order Bound Catalogue
  const handleOrderCatalogue = () => {
    showToast(
      'Bound Exhibition Hardcover Catalogue dispatched to your registered Geneva/London correspondence address.'
    );
  };

  // All lots combined for search & watchlist
  const allLots = [heroLotState, ...highlightLotsState];

  return (
    <div className="min-h-screen bg-[#111125] text-[#e2e0fc] font-sans selection:bg-[#d4a574] selection:text-[#5b3a13]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1a1a2e] border border-[#f2c08d] text-white p-4 rounded shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 max-w-md">
          <span className="material-symbols-outlined text-[#f2c08d] text-[20px]">
            verified
          </span>
          <p className="text-xs font-mono">{toastMessage}</p>
          <button
            onClick={() => setToastMessage(null)}
            className="text-[#9c8e82] hover:text-white text-xs pl-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Persistent Navigation Header */}
      <Header
        currentCurrency={currency}
        onSelectCurrency={setCurrency}
        activeNavTab={activeNavTab}
        onSelectNavTab={setActiveNavTab}
        onOpenLiveSaleroom={() => setIsLiveSaleroomOpen(true)}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        watchlistCount={watchlist.length}
      />

      {/* Main Content Area - Switches based on activeNavTab */}
      <main className="w-full pt-28 bg-[#111125] min-h-screen">
        {activeNavTab === 'saleroom' && (
          <div className="flex flex-col w-full">
            {/* 1. HERO SECTION: THE EVENING SALE */}
            <HeroLot
              lot={heroLotState}
              currency={currency}
              onPlaceBid={handleHeroBid}
              onEnterSaleroom={() => setIsLiveSaleroomOpen(true)}
              onOpenVirtualVault={() => setIsVirtualVaultOpen(true)}
              onOpenConditionReport={() => handleOpenCondition(heroLotState)}
              onOrderCatalogue={handleOrderCatalogue}
            />

            {/* 2. LIVE & IMMINENT AUCTION TICKER */}
            <TickerBar
              onSelectSale={(saleName) => {
                showToast(`Opening auction roster for ${saleName}`);
                setActiveNavTab('auctions-catalogues');
              }}
            />

            {/* 3. CURATORIAL DEPARTMENTS GRID */}
            <DepartmentsSection
              departments={DEPARTMENTS_DATA}
              onSelectDepartment={(_deptId) => {
                setActiveNavTab('departments');
              }}
            />

            {/* 4. HIGHLIGHTED LIVE LOTS SHOWCASE & CONVERTER */}
            <SaleroomHighlights
              lots={highlightLotsState}
              currency={currency}
              watchlist={watchlist}
              onToggleWatchlist={handleToggleWatchlist}
              onPlaceBid={(lot, amt) => handleHighlightBid(lot, amt)}
              onViewCondition={handleOpenCondition}
            />

            {/* 5. PRIVATE TREATY SALES & INSTITUTIONAL ADVISORY */}
            <PrivateTreatySection
              onBookPrivateViewing={() => setIsPrivateViewingOpen(true)}
              onMeetChair={() => setIsPrivateViewingOpen(true)}
            />

            {/* 6. MARKET INSIGHTS & EDITORIAL DISPATCHES */}
            <EditorialDispatch
              articles={EDITORIAL_ARTICLES}
              onOpenArticle={(art) => setSelectedArticle(art)}
              onViewAllArchives={() => {
                showToast('Displaying full Curatorial Archives & Legal Dossiers');
              }}
            />

            {/* 7. PATRON TESTIMONIALS & INSTITUTIONAL TRUST */}
            <PatronTestimonials />
          </div>
        )}

        {activeNavTab === 'auctions-catalogues' && (
          <AuctionsCatalogueView
            lots={allLots}
            currency={currency}
            onSelectLot={(lot) => {
              setInspectedLot(lot);
              handleOpenCondition(lot);
            }}
            onEnterSaleroom={() => setIsLiveSaleroomOpen(true)}
            onBackToSaleroom={() => setActiveNavTab('saleroom')}
          />
        )}

        {activeNavTab === 'private-sales' && (
          <div className="w-full">
            <PrivateTreatySection
              onBookPrivateViewing={() => setIsPrivateViewingOpen(true)}
              onMeetChair={() => setIsPrivateViewingOpen(true)}
            />
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
              <div className="flex items-center justify-between pb-6 border-b border-[#28283d]">
                <button
                  onClick={() => setActiveNavTab('saleroom')}
                  className="text-[#d4c4b7] hover:text-[#f2c08d] text-xs font-label-caps flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  <span>RETURN TO LIVE SALEROOM</span>
                </button>
                <span className="font-label-caps text-xs text-[#ecbf84]">
                  OFF-MARKET DISCRETION ASSURED
                </span>
              </div>
              <div className="py-8">
                <span className="font-label-caps text-xs text-[#ecbf84] block mb-1">
                  DISCREET PLACEMENTS
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white">
                  Current Off-Market Private Inquiries
                </h2>
                <p className="text-sm text-[#d4c4b7] max-w-2xl pt-2 leading-relaxed">
                  The following single-owner consignments are available exclusively via private treaty bilateral contract. Institutional escrows, freeport inspections, and museum loan reservations available upon non-disclosure clearance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
                <div className="bg-[#1a1a2e] p-6 rounded border border-[#28283d] flex flex-col justify-between">
                  <div>
                    <span className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                      POST-WAR MASTERPIECE • PRIVATE TREATY
                    </span>
                    <h3 className="font-serif-luxury text-xl text-white font-semibold">
                      Mark Rothko, 'Untitled (Ochre, Crimson on Deep Plum)', 1958
                    </h3>
                    <p className="text-xs text-[#d4c4b7] pt-2 leading-relaxed">
                      Oil on canvas, 175 × 142 cm. Documented in David Anfam catalogue raisonné no. 614. Held in private family vault since 1974.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#28283d] mt-6 flex items-center justify-between">
                    <div>
                      <span className="font-label-caps text-[10px] text-[#9c8e82] block">PRICE ON APPLICATION</span>
                      <span className="text-xs text-[#f2c08d] font-mono">Inquire with Private Sales Chair</span>
                    </div>
                    <button
                      onClick={() => setIsPrivateViewingOpen(true)}
                      className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs px-4 py-2 rounded font-bold"
                    >
                      REQUEST DOSSIER
                    </button>
                  </div>
                </div>

                <div className="bg-[#1a1a2e] p-6 rounded border border-[#28283d] flex flex-col justify-between">
                  <div>
                    <span className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                      DYNASTIC JEWELRY • PRIVATE TREATY
                    </span>
                    <h3 className="font-serif-luxury text-xl text-white font-semibold">
                      The Empress Eugénie Natural Pearl &amp; Diamond Tiara
                    </h3>
                    <p className="text-xs text-[#d4c4b7] pt-2 leading-relaxed">
                      Executed by Alexandre-Gabriel Lemonnier, Paris 1853. Featuring 212 natural oriental saltwater pearls and 1,998 old-mine cut diamonds.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#28283d] mt-6 flex items-center justify-between">
                    <div>
                      <span className="font-label-caps text-[10px] text-[#9c8e82] block">SOVEREIGN ACQUISITION</span>
                      <span className="text-xs text-[#f2c08d] font-mono">Museum &amp; Heritage Tier</span>
                    </div>
                    <button
                      onClick={() => setIsPrivateViewingOpen(true)}
                      className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs px-4 py-2 rounded font-bold"
                    >
                      REQUEST DOSSIER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeNavTab === 'departments' && (
          <DepartmentsView
            departments={DEPARTMENTS_DATA}
            onSelectDepartment={(_deptId) => {
              setActiveNavTab('saleroom');
            }}
            onBackToSaleroom={() => setActiveNavTab('saleroom')}
            onRequestValuation={() => setActiveNavTab('sell-consign')}
          />
        )}

        {(activeNavTab === 'sell-consign' || activeNavTab === 'valuation') && (
          <ConsignmentView onBackToSaleroom={() => setActiveNavTab('saleroom')} />
        )}
      </main>

      {/* Global Luxury Footer */}
      <Footer onSelectNavTab={setActiveNavTab} />

      {/* MODALS */}
      {/* 1. Live Rostrum Saleroom Simulator */}
      <LiveSaleroomModal
        isOpen={isLiveSaleroomOpen}
        onClose={() => setIsLiveSaleroomOpen(false)}
        lot={heroLotState}
        currency={currency}
        onPlaceBid={handleHeroBid}
      />

      {/* 2. 3D Virtual Vault & Forensic Inspection */}
      <VirtualVaultModal
        isOpen={isVirtualVaultOpen}
        onClose={() => setIsVirtualVaultOpen(false)}
        lot={heroLotState}
      />

      {/* 3. Forensic Condition Report Dossier */}
      <ConditionReportModal
        isOpen={isConditionReportOpen}
        onClose={() => setIsConditionReportOpen(false)}
        lot={inspectedLot}
      />

      {/* 4. Watchlist Slide-out Drawer */}
      <WatchlistDrawer
        isOpen={isWatchlistOpen}
        onClose={() => setIsWatchlistOpen(false)}
        watchlist={watchlist}
        allLots={allLots}
        currency={currency}
        onRemoveFromWatchlist={handleToggleWatchlist}
        onSelectLot={(lot) => {
          if (lot.id === 'lot-14') {
            setIsLiveSaleroomOpen(true);
          } else {
            handleOpenCondition(lot);
          }
        }}
      />

      {/* 5. Register to Bid / Paddle Allocation */}
      <RegisterBidModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegistered={(paddle) => {
          showToast(`Welcome! Credentials approved. Your live paddle is ${paddle}.`);
        }}
      />

      {/* 6. Confidential Private Viewing Scheduler */}
      <PrivateViewingModal
        isOpen={isPrivateViewingOpen}
        onClose={() => setIsPrivateViewingOpen(false)}
      />

      {/* 7. Search Catalogue Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        lots={allLots}
        currency={currency}
        onSelectLot={(lot) => {
          if (lot.id === 'lot-14') {
            setActiveNavTab('saleroom');
            setIsLiveSaleroomOpen(true);
          } else {
            handleOpenCondition(lot);
          }
        }}
      />

      {/* 8. Editorial Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
