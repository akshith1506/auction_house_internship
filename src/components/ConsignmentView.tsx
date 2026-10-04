import React, { useState } from 'react';
import { EMBLEM_LOGO_URL } from '../data/auctionData';

interface ConsignmentViewProps {
  onBackToSaleroom: () => void;
}

export const ConsignmentView: React.FC<ConsignmentViewProps> = ({ onBackToSaleroom }) => {
  const [formData, setFormData] = useState({
    department: 'Fine Art & Sculptures',
    artist: 'Émile Henri Bernard',
    title: 'Study for Symphonie en Bleu',
    medium: 'Oil on canvas',
    dimensions: '65 × 81 cm',
    provenance: 'Acquired in Paris ca. 1960, private family inheritance',
    ownerName: 'Lady Vivienne Montgomery',
    email: 'akshithasandadi@gmail.com',
    location: 'Geneva, Switzerland',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#111125] min-h-screen py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Back Link */}
        <div className="pb-8 border-b border-[#28283d] flex items-center justify-between">
          <button
            onClick={onBackToSaleroom}
            className="text-[#d4c4b7] hover:text-[#f2c08d] text-xs font-label-caps flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>RETURN TO LIVE SALEROOM</span>
          </button>
          <span className="font-label-caps text-xs text-[#ecbf84]">CERTIFIED APPRAISAL DESK</span>
        </div>

        {/* Header */}
        <div className="py-8">
          <span className="font-label-caps text-xs text-[#ecbf84] tracking-widest uppercase block mb-1">
            ESTATE PLANNING, INSTITUTIONAL ADVISORY &amp; VALUATION
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl text-white">
            Sell &amp; Consign Masterpieces
          </h1>
          <p className="text-sm text-[#d4c4b7] max-w-2xl pt-2 leading-relaxed">
            Submit singular artworks, heirloom collections, or rare horological complications for confidential curatorial appraisal by our specialist department heads.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16">
          {/* Form Side (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1a1a2e] p-6 sm:p-10 rounded border border-[#28283d] shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#f2c08d]/10 border border-[#f2c08d]/40 rounded-full flex items-center justify-center text-[#f2c08d] mx-auto">
                  <span className="material-symbols-outlined text-[36px]">mark_email_read</span>
                </div>
                <h3 className="font-serif-luxury text-2xl text-white">Valuation Request Received</h3>
                <p className="text-xs text-[#d4c4b7] max-w-md mx-auto leading-relaxed">
                  Your dossier for <strong className="text-white">"{formData.title}"</strong> has been routed to the Senior Curatorial Specialist in Geneva. A preliminary auction valuation estimate and consignment proposal will be delivered within 48 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#28283d] hover:bg-[#333348] text-white font-label-caps text-xs px-5 py-2.5 rounded transition-colors"
                  >
                    SUBMIT ANOTHER MASTERPIECE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs text-[#d4c4b7]">
                <h3 className="font-serif-luxury text-xl text-white pb-2 border-b border-[#28283d]">
                  Preliminary Artwork Specification
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                      CURATORIAL DEPARTMENT
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full bg-[#111125] px-3.5 py-2.5 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
                    >
                      <option value="Fine Art & Sculptures">Fine Art &amp; Sculptures</option>
                      <option value="Antiquities & Rarities">Antiquities &amp; Rarities</option>
                      <option value="Haute Horlogerie & Jewels">Haute Horlogerie &amp; Jewels</option>
                      <option value="Coachbuilt Automobilia">Coachbuilt Automobilia</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                      ARTIST / MAKER / WORKSHOP
                    </label>
                    <input
                      type="text"
                      value={formData.artist}
                      onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                      required
                      className="w-full bg-[#111125] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                      TITLE OR OBJECT DESCRIPTION
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                      className="w-full bg-[#111125] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                      MEDIUM &amp; TECHNIQUE
                    </label>
                    <input
                      type="text"
                      value={formData.medium}
                      onChange={(e) => setFormData({ ...formData, medium: e.target.value })}
                      required
                      className="w-full bg-[#111125] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                    DIMENSIONS &amp; PHYSICAL MEASUREMENTS
                  </label>
                  <input
                    type="text"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    required
                    className="w-full bg-[#111125] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                    PROVENANCE, HISTORY &amp; PREVIOUS EXHIBITIONS
                  </label>
                  <textarea
                    rows={3}
                    value={formData.provenance}
                    onChange={(e) => setFormData({ ...formData, provenance: e.target.value })}
                    className="w-full bg-[#111125] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <span className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                    DOCUMENTATION &amp; IMAGES (SIMULATED UPLOAD)
                  </span>
                  <div className="border border-dashed border-[#28283d] hover:border-[#f2c08d] p-4 rounded text-center cursor-pointer transition-colors bg-[#111125]/50">
                    <span className="material-symbols-outlined text-[24px] text-[#ecbf84] block">cloud_upload</span>
                    <span className="text-xs text-white">Click or drag high-resolution rect/verso photos</span>
                    <span className="text-[10px] text-[#9c8e82] block mt-0.5">JPEG, TIFF, RAW, PDF (up to 50MB)</span>
                  </div>
                </div>

                <h3 className="font-serif-luxury text-xl text-white pt-4 pb-2 border-b border-[#28283d]">
                  Consignor Correspondence Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                      FULL NAME / LEGAL REPRESENTATIVE
                    </label>
                    <input
                      type="text"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      required
                      className="w-full bg-[#111125] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] text-[#ecbf84] block mb-1">
                      DIRECT EMAIL
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-[#111125] px-3.5 py-2 rounded text-white border border-[#28283d] focus:border-[#f2c08d] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[11px] text-[#9c8e82]">
                    100% confidential and non-binding.
                  </span>
                  <button
                    type="submit"
                    className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs px-6 py-3 rounded font-bold shadow transition-colors active:scale-95"
                  >
                    SUBMIT FOR CURATORIAL APPRAISAL
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Information & Trust (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1a1a2e] p-6 rounded border border-[#28283d]">
              <div className="flex items-center gap-2 text-[#ecbf84] font-label-caps text-xs pb-3 border-b border-[#28283d]">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span>THE AURELIA CONSIGNMENT ADVANTAGE</span>
              </div>
              <div className="space-y-4 pt-4 text-xs text-[#d4c4b7]">
                <div>
                  <h4 className="font-serif-luxury text-sm text-white font-semibold">
                    Global Saleroom Distribution
                  </h4>
                  <p className="pt-0.5 text-[#9c8e82]">
                    Simultaneous rostrum marketing across Geneva, London, New York, and Hong Kong private client networks.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif-luxury text-sm text-white font-semibold">
                    Institutional Scientific Rigor
                  </h4>
                  <p className="pt-0.5 text-[#9c8e82]">
                    Complimentary full stereomicroscopy, Wood's lamp ultraviolet analysis, and provenance research by museum conservators.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif-luxury text-sm text-white font-semibold">
                    Bespoke Financial Terms
                  </h4>
                  <p className="pt-0.5 text-[#9c8e82]">
                    Favorable commission tiers, guaranteed auction advance loans, and pre-agreed reserve price protection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0c0c1f] p-6 rounded border border-[#28283d] flex items-center gap-4">
              <img
                src={EMBLEM_LOGO_URL}
                alt="Aurelia Emblem"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-serif-luxury text-white text-sm font-semibold block">
                  Aurelia Valuation Guarantee
                </span>
                <span className="text-xs text-[#9c8e82]">
                  Certified compliant with the Royal Institution of Chartered Surveyors (RICS) and Swiss Antique Dealers Association.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
