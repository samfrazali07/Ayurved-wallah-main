import React from 'react';
import { Calendar, BookOpen, FileText, Award, CreditCard, MessageCircleQuestion, ArrowUpRight } from 'lucide-react';

export default function QuickAccess({ onOpenConsultation }) {
  const quickItems = [
    {
      id: "schedule",
      title: "Class Schedule",
      desc: "View your live timetable",
      icon: Calendar,
      href: "#schedule",
      badge: "Live Daily"
    },
    {
      id: "courses",
      title: "Courses",
      desc: "Explore UG, PG & MO batches",
      icon: BookOpen,
      href: "#courses",
      badge: "5+ Programs"
    },
    {
      id: "notes",
      title: "Notes",
      desc: "Download study material",
      icon: FileText,
      href: "#study-materials",
      badge: "Samhita Guides"
    },
    {
      id: "pyqs",
      title: "PYQs",
      desc: "Previous Year Papers",
      icon: Award,
      href: "#pyqs",
      badge: "Solved 10 Yrs"
    },
    {
      id: "fees",
      title: "Fee Structure",
      desc: "Explore course fees & EMI",
      icon: CreditCard,
      href: "#fee-structure",
      badge: "Transparent"
    },
    {
      id: "doubts",
      title: "Doubt Support",
      desc: "Ask academic questions",
      icon: MessageCircleQuestion,
      onClick: onOpenConsultation,
      badge: "24/7 Mentor"
    }
  ];

  return (
    <section className="bg-white py-8 border-b border-[#78966B]/20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Layout: 2-col on small mobile, 3-col on tablet, 6 horizontally aligned on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {quickItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="h-full p-4 rounded-2xl bg-[#FAF7EE]/60 border border-[#78966B]/25 hover:border-[#C49A45] hover:bg-[#FAF7EE] hover:shadow-ayur-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
                {/* Top micro badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#78966B]/30 flex items-center justify-center text-[#174C32] group-hover:bg-[#174C32] group-hover:text-white group-hover:border-[#174C32] transition-colors duration-300 shadow-xs">
                    <Icon className="w-5 h-5 text-[#174C32] group-hover:text-[#C49A45] transition-colors" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#78966B] group-hover:text-[#174C32] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold font-serif text-[#174C32] group-hover:text-[#C49A45] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#58635B] mt-1 leading-snug line-clamp-1">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#78966B]/15 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#78966B] uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>
              </div>
            );

            if (item.onClick) {
              return (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className="text-left w-full focus:outline-none"
                >
                  {content}
                </button>
              );
            }

            return (
              <a key={item.id} href={item.href} className="block text-left">
                {content}
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
