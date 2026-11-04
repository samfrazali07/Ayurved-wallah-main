import React from 'react';
import { 
  Users, BookOpen, FileText, Award, FileCheck, 
  MessageCircleQuestion, BarChart3, Sparkles, CheckCircle2 
} from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      id: "fac",
      title: "Premier MD/MS Faculty",
      desc: "Learn directly from Gold Medalists & Scholars from AIIA New Delhi, NIA Jaipur, IMS-BHU, and IPGT&RA Jamnagar.",
      icon: Users,
      badge: "Top Mentors"
    },
    {
      id: "struct",
      title: "Structured Learning Programs",
      desc: "NCISM-aligned micro-schedules with chapter targets, daily homework, and planned Samhita revisions.",
      icon: BookOpen,
      badge: "Proven Methodology"
    },
    {
      id: "mats",
      title: "Comprehensive Study Materials",
      desc: "Authentic handwritten colored notes, shloka breakdown, anatomical 3D maps, and botanical charts delivered home.",
      icon: FileText,
      badge: "Physical & Digital"
    },
    {
      id: "pyqs",
      title: "10-Year Solved PYQ Practice",
      desc: "Exhaustive repository of AIAPGET, State PSC, and Central MO exams with verified classical Sanskrit citations.",
      icon: Award,
      badge: "Real Exam Drill"
    },
    {
      id: "mocks",
      title: "Regular All-India Mock Tests",
      desc: "Simulate the exact NTA computer-based exam experience with negative marking, time countdown, and national ranks.",
      icon: FileCheck,
      badge: "AIR Percentiles"
    },
    {
      id: "doubts",
      title: "24/7 Dedicated Doubt Support",
      desc: "Direct access to faculty mentors via Telegram & app chat with guaranteed resolution within 6 hours.",
      icon: MessageCircleQuestion,
      badge: "1-on-1 Mentorship"
    },
    {
      id: "tracking",
      title: "Personalized Performance Tracking",
      desc: "Granular subject diagnostics that pinpoint weak areas in Brihattrayi, Dravyaguna, or Modern Medical topics.",
      icon: BarChart3,
      badge: "AI Analytics"
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#FAF7EE] border-b border-[#78966B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C49A45]/40 text-[#174C32] text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A45]" />
            <span>The Ayurved Wallah Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#174C32] tracking-tight">
            Why Choose Ayurved Wallah?
          </h2>
          <p className="text-base sm:text-lg text-[#58635B] font-medium">
            Bridging authentic classical Ayurvedic manuscript wisdom with modern EdTech precision to guarantee your academic excellence.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 bg-white rounded-3xl border border-[#78966B]/25 hover:border-[#C49A45] shadow-ayur-sm hover:shadow-ayur-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] border border-[#78966B]/20 flex items-center justify-center text-[#174C32] group-hover:bg-[#174C32] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6 text-[#174C32] group-hover:text-[#C49A45] transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#EBF2E8] text-[#174C32] rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#174C32] group-hover:text-[#C49A45] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#58635B] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#FAF7EE] flex items-center gap-1.5 text-[11px] text-[#78966B] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#174C32]" />
                  <span>Standardized Quality Curriculum</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
