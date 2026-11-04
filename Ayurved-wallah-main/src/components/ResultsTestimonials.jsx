import React, { useState } from 'react';
import { 
  Award, Star, Quote, GraduationCap, Building2, 
  Sparkles, ChevronLeft, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { testimonialsData, platformStats } from '../data/testimonialsData';

export default function ResultsTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const premierInstitutes = [
    { name: "AIIA New Delhi", role: "All India Institute of Ayurveda", count: "48+ Selections" },
    { name: "NIA Jaipur", role: "National Institute of Ayurveda", count: "62+ Selections" },
    { name: "ITRA Jamnagar", role: "Institute of Teaching & Research in Ayurveda", count: "39+ Selections" },
    { name: "IMS-BHU Varanasi", role: "Faculty of Ayurveda, BHU", count: "31+ Selections" }
  ];

  return (
    <section id="results" className="py-16 md:py-24 bg-white border-b border-[#78966B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7EE] border border-[#C49A45]/40 text-[#174C32] text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#C49A45]" />
            <span>Hall of Fame & Academic Accolades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#174C32] tracking-tight">
            Results & Student Testimonials
          </h2>
          <p className="text-base sm:text-lg text-[#58635B] font-medium">
            Hear from our scholars who turned their aspirations into top All-India ranks and prestigious postgraduate admissions.
          </p>
          <div className="text-[11px] text-[#7E8A81] italic">
            *All ranks, statistics, and student testimonials shown are representative placeholders for platform illustration.
          </div>
        </div>

        {/* Platform Achievement Numbers Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {platformStats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 bg-[#FAF7EE] rounded-2xl border border-[#78966B]/20 text-center"
            >
              <div className="text-xl sm:text-2xl font-serif font-black text-[#174C32]">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[#58635B] mt-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] text-[#7E8A81] mt-1">
                {stat.placeholderNote}
              </div>
            </div>
          ))}
        </div>

        {/* Premier Institute Selections Grid */}
        <div className="mb-16">
          <h3 className="text-center text-xs font-bold uppercase tracking-wider text-[#78966B] mb-6">
            Aspirants Selected In Premier National AYUSH Institutes (Placeholders)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {premierInstitutes.map((inst, idx) => (
              <div 
                key={idx}
                className="p-4 bg-white rounded-2xl border border-[#78966B]/25 flex items-center gap-3.5 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#174C32] text-[#C49A45] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#174C32]">{inst.name}</h4>
                  <p className="text-[11px] text-[#58635B] line-clamp-1">{inst.role}</p>
                  <span className="text-[10px] text-[#C49A45] font-bold">{inst.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-6 bg-[#FAF7EE]/60 rounded-3xl border border-[#78966B]/25 hover:border-[#C49A45] shadow-xs hover:shadow-ayur-sm transition flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 bg-[#C49A45] text-white text-[11px] font-bold rounded-full shadow-xs">
                    {t.rank}
                  </span>
                  <div className="flex text-[#C49A45]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-[#78966B]/30 absolute -top-2 -left-2" />
                  <p className="text-xs text-[#242B25] leading-relaxed relative z-10 italic pl-3">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              {/* Scholar Info */}
              <div className="pt-4 border-t border-[#78966B]/20">
                <h4 className="text-sm font-serif font-bold text-[#174C32]">
                  {t.name}
                </h4>
                <div className="text-xs font-semibold text-[#C49A45] mt-0.5">
                  {t.specialty}
                </div>
                <div className="text-[11px] text-[#58635B] mt-0.5 line-clamp-1">
                  {t.allocatedInstitute}
                </div>
                <div className="text-[10px] text-[#78966B] mt-1 font-medium">
                  {t.batch}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
