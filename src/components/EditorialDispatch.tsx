import React from 'react';
import { EditorialArticle } from '../types/auction';

interface EditorialDispatchProps {
  articles: EditorialArticle[];
  onOpenArticle: (article: EditorialArticle) => void;
  onViewAllArchives: () => void;
}

export const EditorialDispatch: React.FC<EditorialDispatchProps> = ({
  articles,
  onOpenArticle,
  onViewAllArchives,
}) => {
  return (
    <section className="w-full bg-[#1a1a2e] py-14 sm:py-20 border-b border-[#28283d]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 gap-4">
          <div>
            <span className="font-label-caps text-xs text-[#ecbf84] tracking-widest uppercase block mb-1">
              CURATORIAL ESSAYS &amp; VALUATION INDICES
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white">
              The Connoisseur's Dispatch
            </h2>
          </div>

          <button
            onClick={onViewAllArchives}
            className="font-label-caps text-xs text-[#f2c08d] hover:text-[#efbd8a] transition-colors flex items-center gap-1.5 self-start md:self-end"
          >
            VIEW ALL EDITORIAL ARCHIVES
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="flex flex-col bg-[#1e1e32] rounded overflow-hidden group border border-[#28283d] hover:border-[#f2c08d]/50 transition-all duration-300 cursor-pointer shadow-lg"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#28283d]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#0c0c1f]/85 backdrop-blur px-2.5 py-1 rounded font-label-caps text-[10px] text-[#ecbf84] border border-[#28283d]">
                  {article.category} • {article.readTime}
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <span className="text-xs text-[#9c8e82] block font-mono">{article.date}</span>
                  <h3 className="font-serif-luxury text-lg text-white group-hover:text-[#f2c08d] transition-colors pt-1 font-semibold leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#d4c4b7] pt-2 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#28283d] flex items-center justify-between">
                  <span className="font-label-caps text-xs text-[#f2c08d] flex items-center gap-1">
                    READ REPORT <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </span>
                  <span className="text-[10px] text-[#9c8e82]">{article.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
