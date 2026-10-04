import React from 'react';
import { EditorialArticle } from '../types/auction';

interface ArticleModalProps {
  article: EditorialArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#111125] border border-[#d4a574] rounded-lg w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="h-14 bg-[#0c0c1f] px-6 border-b border-[#28283d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-label-caps text-xs text-[#ecbf84] uppercase">
              THE CONNOISSEUR'S DISPATCH • {article.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#9c8e82] hover:text-white p-1 rounded transition-colors text-lg"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6">
          <div className="relative aspect-[16/9] w-full rounded overflow-hidden border border-[#28283d]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111125] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-mono text-xs text-[#9c8e82]">{article.date} • {article.readTime}</span>
              <h1 className="font-serif-luxury text-2xl sm:text-3xl text-white font-semibold pt-1">
                {article.title}
              </h1>
            </div>
          </div>

          {/* Author Block & Key Stats */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded bg-[#1a1a2e] border border-[#28283d]">
            <div>
              <span className="font-serif-luxury text-sm text-white font-semibold block">
                {article.author}
              </span>
              <span className="text-xs text-[#9c8e82]">{article.authorRole}</span>
            </div>

            {article.keyStats && (
              <div className="flex items-center gap-4 text-xs border-t sm:border-t-0 sm:border-l border-[#28283d] pt-2 sm:pt-0 sm:pl-4">
                {article.keyStats.map((st, i) => (
                  <div key={i}>
                    <span className="text-[10px] text-[#9c8e82] block">{st.label}:</span>
                    <span className="text-[#f2c08d] font-mono font-semibold">{st.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Prose Content */}
          <div className="space-y-4 text-sm text-[#d4c4b7] leading-relaxed max-w-prose mx-auto">
            {article.content.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'text-base text-white first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-2.5 first-letter:text-[#f2c08d]'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* Footnote citations */}
          <div className="pt-6 border-t border-[#28283d] text-xs text-[#9c8e82]">
            <p>
              Published by the Aurelia Valuation &amp; Curatorial Research Board. All market indices are derived from verified rostrum hammer results across Geneva, London, New York, and Hong Kong salerooms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
