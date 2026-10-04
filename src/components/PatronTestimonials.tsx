import React from 'react';

export const PatronTestimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#111125] py-14 sm:py-20 border-b border-[#28283d]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center max-w-xl mx-auto pb-10">
          <span className="font-label-caps text-xs text-[#ecbf84] tracking-[0.25em] uppercase">
            PATRON TESTIMONIALS
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white pt-1">
            Recognized by the World's Foremost Curators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-[#1e1e32] p-6 rounded flex flex-col justify-between shadow-lg border border-[#28283d]">
            <p className="text-sm text-[#d4c4b7] italic leading-relaxed">
              “Aurelia handles cataloguing with an intellectual rigor that matches our museum’s own acquisition committee. The provenance trail on Lot 14 is without reproach.”
            </p>
            <div className="pt-6 mt-4 border-t border-[#28283d]/70">
              <span className="font-serif-luxury text-lg text-white font-semibold block">
                Dr. Alistair Vance
              </span>
              <span className="text-xs text-[#9c8e82]">
                Senior Trustee, The European Foundation for Modern Heritage
              </span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#1e1e32] p-6 rounded flex flex-col justify-between shadow-lg border border-[#28283d]">
            <p className="text-sm text-[#d4c4b7] italic leading-relaxed">
              “In four decades of private collection acquisitions, I have rarely encountered such immaculate condition reports. Their escrow and physical delivery protocols are benchmark grade.”
            </p>
            <div className="pt-6 mt-4 border-t border-[#28283d]/70">
              <span className="font-serif-luxury text-lg text-white font-semibold block">
                Baroness Hélène de Croy
              </span>
              <span className="text-xs text-[#9c8e82]">
                Private Collector &amp; Patron of the Arts, Geneva
              </span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#1e1e32] p-6 rounded flex flex-col justify-between shadow-lg border border-[#28283d]">
            <p className="text-sm text-[#d4c4b7] italic leading-relaxed">
              “Their horological department’s forensic verification discovered original factory paperwork thought lost for half a century. A magnificent saleroom execution.”
            </p>
            <div className="pt-6 mt-4 border-t border-[#28283d]/70">
              <span className="font-serif-luxury text-lg text-white font-semibold block">
                Marcus Chen, Esq.
              </span>
              <span className="text-xs text-[#9c8e82]">
                Chairman, The Singapore Horological Society
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
