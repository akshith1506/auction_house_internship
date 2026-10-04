import React from 'react';
import { LotItem } from '../types/auction';
import { EMBLEM_LOGO_URL } from '../data/auctionData';

interface ConditionReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lot: LotItem;
}

export const ConditionReportModal: React.FC<ConditionReportModalProps> = ({
  isOpen,
  onClose,
  lot,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#111125] border border-[#d4a574] rounded-lg w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Dossier Header */}
        <div className="h-16 bg-[#0c0c1f] px-6 border-b border-[#28283d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={EMBLEM_LOGO_URL}
              alt="Aurelia Emblem"
              className="h-7 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-serif-luxury text-white text-sm sm:text-base tracking-wide uppercase">
                AURELIA FORENSIC &amp; CURATORIAL CONDITION DOSSIER
              </span>
              <span className="text-[10px] text-[#ecbf84] font-label-caps">
                REPORT REF: CR-{lot.lotNumber}-8492 • ARCHIVAL SEALED
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-[#28283d] hover:bg-[#333348] text-[#f2c08d] font-label-caps text-xs px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">print</span>
              <span>PRINT DOSSIER</span>
            </button>
            <button
              onClick={onClose}
              className="text-[#9c8e82] hover:text-white p-1 rounded transition-colors text-lg"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-[#d4c4b7] text-xs">
          {/* Work Summary Block */}
          <div className="bg-[#1a1a2e] p-5 rounded border border-[#28283d] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-label-caps text-[10px] text-[#ecbf84] block">CATALOGUED LOT {lot.lotNumber}</span>
              <h3 className="font-serif-luxury text-2xl text-white font-semibold">{lot.title} ({lot.year})</h3>
              <p className="text-xs text-[#d4c4b7] pt-1">
                {lot.artist} ({lot.artistDates}). {lot.medium}. {lot.dimensions}.
              </p>
            </div>
            <div className="bg-[#28283d] px-4 py-3 rounded border border-[#f2c08d]/30 text-right sm:shrink-0">
              <span className="font-label-caps text-[10px] text-[#9c8e82] block">CERTIFIED GRADE</span>
              <span className="font-serif-luxury text-base text-[#f2c08d] font-bold">
                {lot.conditionReport.overallGrade}
              </span>
            </div>
          </div>

          {/* Forensic Examination Criteria */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-base text-white border-b border-[#28283d] pb-2">
              Physical &amp; Chemical Assessment
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1a1a2e] p-4 rounded border border-[#28283d]">
                <span className="font-label-caps text-[10px] text-[#f2c08d] block mb-1">
                  1. STRUCTURAL INTEGRITY
                </span>
                <p className="leading-relaxed">{lot.conditionReport.structuralIntegrity}</p>
              </div>

              <div className="bg-[#1a1a2e] p-4 rounded border border-[#28283d]">
                <span className="font-label-caps text-[10px] text-[#f2c08d] block mb-1">
                  2. SURFACE &amp; VARNISH MATRIX
                </span>
                <p className="leading-relaxed">{lot.conditionReport.varnishSurface}</p>
              </div>

              <div className="bg-[#1a1a2e] p-4 rounded border border-[#28283d]">
                <span className="font-label-caps text-[10px] text-[#f2c08d] block mb-1">
                  3. CONSERVATION &amp; RESTORATION HISTORY
                </span>
                <p className="leading-relaxed">{lot.conditionReport.conservationHistory}</p>
              </div>

              <div className="bg-[#1a1a2e] p-4 rounded border border-[#28283d]">
                <span className="font-label-caps text-[10px] text-[#f2c08d] block mb-1">
                  4. ULTRA-VIOLET WOOD’S LAMP (365nm)
                </span>
                <p className="leading-relaxed">{lot.conditionReport.uvFluorescenceNotes}</p>
              </div>
            </div>
          </div>

          {/* Chronological Provenance Trail */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-base text-white border-b border-[#28283d] pb-2">
              Chain of Custody &amp; Verified Provenance
            </h4>
            <div className="bg-[#1a1a2e] rounded border border-[#28283d] overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0c0c1f] text-[#9c8e82] font-label-caps text-[10px]">
                  <tr>
                    <th className="py-2.5 px-4">Period</th>
                    <th className="py-2.5 px-4">Owner / Collection</th>
                    <th className="py-2.5 px-4">Location</th>
                    <th className="py-2.5 px-4">Historical Documentation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#28283d]">
                  {lot.provenanceHistory.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#28283d]/40 transition-colors">
                      <td className="py-2.5 px-4 font-mono text-[#f2c08d]">{item.year}</td>
                      <td className="py-2.5 px-4 text-white font-medium">{item.owner}</td>
                      <td className="py-2.5 px-4 text-[#d4c4b7]">{item.location}</td>
                      <td className="py-2.5 px-4 text-[#9c8e82] italic">{item.notes || 'Documented in estate ledger.'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Institutional Sign-off Block */}
          <div className="p-4 rounded bg-[#0c0c1f] border border-[#28283d] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-white font-semibold block">{lot.conditionReport.examiner}</span>
              <span className="text-[#9c8e82] text-[11px] block">{lot.conditionReport.institution}</span>
              <span className="text-[#ecbf84] text-[10px] font-mono">Date of Examination: {lot.conditionReport.examDate}</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 font-label-caps text-xs">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>FORENSIC IMMUTABILITY AUDIT VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
