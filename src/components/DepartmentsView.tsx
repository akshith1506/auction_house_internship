import React from 'react';
import { DepartmentInfo } from '../types/auction';

interface DepartmentsViewProps {
  departments: DepartmentInfo[];
  onSelectDepartment: (deptId: string) => void;
  onBackToSaleroom: () => void;
  onRequestValuation: () => void;
}

export const DepartmentsView: React.FC<DepartmentsViewProps> = ({
  departments,
  onBackToSaleroom,
  onRequestValuation,
}) => {
  return (
    <div className="w-full bg-[#111125] min-h-screen py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Navigation back */}
        <div className="flex items-center justify-between pb-8 border-b border-[#28283d]">
          <button
            onClick={onBackToSaleroom}
            className="text-[#d4c4b7] hover:text-[#f2c08d] text-xs font-label-caps flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>RETURN TO LIVE SALEROOM</span>
          </button>

          <button
            onClick={onRequestValuation}
            className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs px-4 py-2 rounded font-bold shadow"
          >
            CONSIGN WITH A SPECIALIST
          </button>
        </div>

        {/* Header */}
        <div className="py-8">
          <span className="font-label-caps text-xs text-[#ecbf84] tracking-widest uppercase block mb-1">
            CURATORIAL EXCELLENCE &amp; SPECIALIST DISSEMINATION
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl text-white">
            Curatorial Departments
          </h1>
          <p className="text-sm text-[#d4c4b7] max-w-2xl pt-2 leading-relaxed">
            Four disciplined practices led by internationally distinguished scholars, certified forensic conservators, and institutional museum advisors.
          </p>
        </div>

        {/* Detailed Department Panels */}
        <div className="space-y-12 pb-16">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-[#1a1a2e] rounded border border-[#28283d] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl"
            >
              {/* Image side (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[320px]">
                <img
                  src={dept.coverImage}
                  alt={dept.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#1a1a2e]/40 to-[#1a1a2e]" />
                <div className="absolute top-4 left-4 bg-[#0c0c1f]/85 px-3 py-1 rounded border border-[#28283d] font-label-caps text-xs text-[#ecbf84]">
                  {dept.deptNumber} • {dept.lotsCount} ACTIVE LOTS
                </div>
              </div>

              {/* Text side (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between gap-6">
                <div>
                  <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white">
                    {dept.name}
                  </h2>
                  <p className="text-sm text-[#d4c4b7] pt-2 leading-relaxed">
                    {dept.description}
                  </p>

                  {/* Specialist Director & Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#28283d] mt-6">
                    <div>
                      <span className="font-label-caps text-[10px] text-[#9c8e82] block">
                        DEPARTMENT DIRECTOR
                      </span>
                      <span className="font-serif-luxury text-base text-white font-semibold">
                        {dept.director}
                      </span>
                      <span className="text-xs text-[#d4c4b7] block">{dept.directorTitle}</span>
                    </div>

                    <div>
                      <span className="font-label-caps text-[10px] text-[#9c8e82] block">
                        BENCHMARK RECORD REALIZED
                      </span>
                      <span className="font-serif-luxury text-base text-[#f2c08d] font-semibold">
                        {dept.recordSale.price}
                      </span>
                      <span className="text-xs text-[#d4c4b7] block italic">
                        {dept.recordSale.lot} ({dept.recordSale.year})
                      </span>
                    </div>
                  </div>

                  {/* Specialist Focus Areas */}
                  <div className="pt-4">
                    <span className="font-label-caps text-[10px] text-[#ecbf84] block mb-2">
                      CURATORIAL SCOPE &amp; EXPERTISE:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {dept.specialistFocus.map((f, i) => (
                        <span
                          key={i}
                          className="bg-[#28283d] text-xs text-[#d4c4b7] px-3 py-1 rounded border border-[#333348]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#28283d]">
                  <button
                    onClick={onRequestValuation}
                    className="bg-[#f2c08d] hover:bg-[#d4a574] text-[#472a03] font-label-caps text-xs px-5 py-2.5 rounded font-bold shadow transition-colors"
                  >
                    REQUEST CONFIDENTIAL VALUATION
                  </button>
                  <button
                    onClick={onBackToSaleroom}
                    className="text-[#d4c4b7] hover:text-[#f2c08d] font-label-caps text-xs flex items-center gap-1"
                  >
                    <span>BROWSE LOTS</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
