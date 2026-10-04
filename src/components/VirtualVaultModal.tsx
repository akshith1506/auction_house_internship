import React, { useState } from 'react';
import { LotItem } from '../types/auction';

interface VirtualVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  lot: LotItem;
}

export const VirtualVaultModal: React.FC<VirtualVaultModalProps> = ({
  isOpen,
  onClose,
  lot,
}) => {
  const [viewMode, setViewMode] = useState<'standard' | 'uv' | 'raking' | 'verso'>('standard');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in">
      <div className="bg-[#111125] border border-[#d4a574] rounded-lg w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="h-14 bg-[#0c0c1f] px-6 border-b border-[#28283d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ecbf84] text-[20px]">view_in_ar</span>
            <span className="font-serif-luxury text-white text-base tracking-wide uppercase">
              3D VIRTUAL VAULT &amp; FORENSIC INSPECTION SUITE
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#9c8e82] hover:text-white p-1 rounded transition-colors text-lg"
          >
            ✕
          </button>
        </div>

        {/* Inspection Controls Strip */}
        <div className="bg-[#1a1a2e] px-6 py-2.5 border-b border-[#28283d] flex flex-wrap items-center justify-between gap-4">
          {/* Mode Selector */}
          <div className="flex items-center gap-1.5 bg-[#0c0c1f] p-1 rounded border border-[#28283d]">
            {[
              { id: 'standard', label: 'GALLERY SPOTLIGHT', icon: 'wb_incandescent' },
              { id: 'uv', label: 'UV WOOD’S LAMP (365nm)', icon: 'wb_iridescent' },
              { id: 'raking', label: 'RAKING LIGHT (IMPASTO)', icon: 'flare' },
              { id: 'verso', label: 'STRETCHER VERSO & SEALS', icon: 'layers' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setViewMode(m.id as typeof viewMode);
                  setZoomLevel(1);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-label-caps text-[10px] transition-colors ${
                  viewMode === m.id
                    ? 'bg-[#f2c08d] text-[#472a03] font-bold shadow'
                    : 'text-[#d4c4b7] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">{m.icon}</span>
                <span>{m.label}</span>
              </button>
            ))}
          </div>

          {/* Zoom Stepper */}
          <div className="flex items-center gap-2 text-xs text-[#d4c4b7]">
            <span className="text-[#9c8e82] font-label-caps">LOUPE:</span>
            <button
              onClick={() => setZoomLevel((z) => Math.max(1, z - 0.25))}
              className="w-7 h-7 bg-[#28283d] hover:bg-[#333348] rounded text-white flex items-center justify-center font-bold"
            >
              –
            </button>
            <span className="font-mono w-10 text-center">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
              className="w-7 h-7 bg-[#28283d] hover:bg-[#333348] rounded text-white flex items-center justify-center font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Main Canvas Viewport */}
        <div className="flex-1 bg-[#0c0c1f] relative overflow-hidden flex items-center justify-center p-6 select-none">
          {/* Active Image Render with Filters based on View Mode */}
          <div
            className="relative max-h-[60vh] max-w-full transition-all duration-500 ease-out rounded shadow-2xl overflow-hidden"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {viewMode === 'standard' && (
              <img
                src={lot.primaryImage}
                alt={lot.title}
                className="max-h-[55vh] w-auto object-contain rounded"
                referrerPolicy="no-referrer"
              />
            )}

            {viewMode === 'uv' && (
              <div className="relative">
                <img
                  src={lot.additionalImages?.[0]?.url || lot.primaryImage}
                  alt="UV Inspection"
                  className="max-h-[55vh] w-auto object-contain rounded filter hue-rotate-180 brightness-75 contrast-150 saturate-200"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-purple-950/90 text-purple-200 border border-purple-400/50 px-3 py-1.5 rounded text-xs font-mono">
                  ● UV FLUORESCENCE ACTIVE: Zero varnish disturbance in central field
                </div>
              </div>
            )}

            {viewMode === 'raking' && (
              <div className="relative">
                <img
                  src={lot.additionalImages?.[0]?.url || lot.primaryImage}
                  alt="Raking light impasto"
                  className="max-h-[55vh] w-auto object-contain rounded filter contrast-175 brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-amber-950/90 text-amber-200 border border-amber-400/50 px-3 py-1.5 rounded text-xs font-mono">
                  ● 45° RAKING LIGHT: Deep cobalt impasto ridges &amp; authentic micro-craquelure
                </div>
              </div>
            )}

            {viewMode === 'verso' && (
              <div className="relative">
                <img
                  src={lot.additionalImages?.[1]?.url || lot.primaryImage}
                  alt="Verso frame inspection"
                  className="max-h-[55vh] w-auto object-contain rounded"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#111125]/90 text-[#ecbf84] border border-[#d4a574] px-3 py-1.5 rounded text-xs font-mono">
                  ● VERSO STRETCHER: Red armorial wax seals of Baron von Waldberg (1928)
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Technical Dossier Strip */}
        <div className="bg-[#1a1a2e] px-6 py-4 border-t border-[#28283d] grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-[#9c8e82] block font-label-caps text-[9px]">PIGMENT COMPOSITION:</span>
            <span className="text-white font-mono">French Ultramarine &amp; Cobalt</span>
          </div>
          <div>
            <span className="text-[#9c8e82] block font-label-caps text-[9px]">SUBSTRATE WEAVE:</span>
            <span className="text-white font-mono">Unlined Belgian Pure Flax Linen</span>
          </div>
          <div>
            <span className="text-[#9c8e82] block font-label-caps text-[9px]">VARNISH INTEGRITY:</span>
            <span className="text-[#ecbf84] font-mono">Natural 1954 Dammar Glaze</span>
          </div>
          <div>
            <span className="text-[#9c8e82] block font-label-caps text-[9px]">AUTHENTICITY:</span>
            <span className="text-emerald-400 font-mono">100% Guaranteed Archival</span>
          </div>
        </div>
      </div>
    </div>
  );
};
