import React from 'react';
import { DepartmentInfo } from '../types/auction';

interface DepartmentsSectionProps {
  departments: DepartmentInfo[];
  onSelectDepartment: (deptId: string) => void;
}

export const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({
  departments,
  onSelectDepartment,
}) => {
  const getIcon = (deptNumber: string) => {
    switch (deptNumber) {
      case 'DEP. 01':
        return 'palette';
      case 'DEP. 02':
        return 'temple_hindu';
      case 'DEP. 03':
        return 'watch';
      case 'DEP. 04':
        return 'directions_car';
      default:
        return 'palette';
    }
  };

  return (
    <section className="w-full bg-[#111125] py-14 sm:py-20 border-b border-[#28283d]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 gap-4">
          <div>
            <span className="font-label-caps text-xs text-[#ecbf84] tracking-[0.2em] block mb-1">
              CURATED SECTORS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white">
              Curatorial Departments
            </h2>
          </div>
          <p className="text-sm text-[#d4c4b7] max-w-md leading-relaxed">
            Strict accession guidelines, verified chain-of-custody, and rigorous historical documentation across four specialist departments.
          </p>
        </div>

        {/* Bento Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              onClick={() => onSelectDepartment(dept.id)}
              className="group relative bg-[#1e1e32] rounded overflow-hidden flex flex-col justify-between p-5 h-[420px] transition-all duration-300 hover:-translate-y-1.5 border border-[#28283d] hover:border-[#f2c08d] cursor-pointer shadow-xl"
            >
              {/* Background Art Image with Gradient Scrim */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={dept.coverImage}
                  alt={dept.name}
                  className="w-full h-full object-cover opacity-35 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e32] via-[#1e1e32]/75 to-transparent" />
              </div>

              {/* Top metadata */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-label-caps text-xs text-[#ecbf84] bg-[#0c0c1f]/85 px-2.5 py-1 rounded border border-[#28283d]">
                  {dept.deptNumber}
                </span>
                <span className="material-symbols-outlined text-[#d4c4b7] group-hover:text-[#f2c08d] transition-colors text-[22px]">
                  {getIcon(dept.deptNumber)}
                </span>
              </div>

              {/* Bottom text */}
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="font-serif-luxury text-2xl text-white group-hover:text-[#f2c08d] transition-colors">
                  {dept.name}
                </h3>
                <p className="text-xs text-[#d4c4b7] line-clamp-2 leading-relaxed">
                  {dept.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#28283d]/60 mt-1">
                  <span className="font-label-caps text-xs text-[#f2c08d] font-semibold">
                    {dept.lotsCount} LOTS CATALOGUED
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-[#f2c08d] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
