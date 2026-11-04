import React from 'react';
import { 
  CreditCard, CheckCircle2, ShieldCheck, Sparkles, 
  ArrowRight, HelpCircle, AlertCircle 
} from 'lucide-react';
import { feesData } from '../data/feesData';

export default function FeeStructure({ onEnquireFee }) {
  return (
    <section id="fee-structure" className="py-16 md:py-24 bg-white border-b border-[#78966B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7EE] border border-[#C49A45]/40 text-[#174C32] text-xs font-semibold uppercase tracking-wider shadow-xs">
            <CreditCard className="w-3.5 h-3.5 text-[#C49A45]" />
            <span>Transparent Investment in Your Medical Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#174C32] tracking-tight">
            Fee Structure & Enrollment
          </h2>
          <p className="text-base sm:text-lg text-[#58635B] font-medium">
            Affordable, transparent fee plans with flexible EMI choices for every aspiring Ayurveda scholar.
          </p>

          {/* Transparent Notice regarding placeholders */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF7EE] border border-amber-300 rounded-xl text-xs text-amber-900 mt-2">
            <AlertCircle className="w-4 h-4 text-[#C49A45] shrink-0" />
            <span>
              <strong>Note for Applicants:</strong> Official 2025–26 session fees are displayed with editable placeholders. Click "Enquire Now" for current fee brochures and merit scholarship concessions.
            </span>
          </div>
        </div>

        {/* Pricing Cards Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feesData.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-[#174C32] text-white border-2 border-[#C49A45] shadow-xl md:-translate-y-2'
                  : 'bg-[#FAF7EE]/50 border border-[#78966B]/30 hover:border-[#C49A45] text-[#242B25] hover:bg-white hover:shadow-ayur-sm'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#C49A45] text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                  ★ Most Enrolled Batch
                </div>
              )}

              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${
                    plan.popular ? 'text-[#FAF7EE]/70' : 'text-[#78966B]'
                  }`}>
                    {plan.category}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    plan.popular ? 'bg-white/20 text-[#FAF7EE]' : 'bg-[#EBF2E8] text-[#174C32]'
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                {/* Plan Name */}
                <h3 className={`text-lg font-serif font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-[#174C32]'
                }`}>
                  {plan.name}
                </h3>

                {/* Duration */}
                <p className={`text-xs mb-5 ${
                  plan.popular ? 'text-[#FAF7EE]/80' : 'text-[#58635B]'
                }`}>
                  Duration: <strong>{plan.duration}</strong>
                </p>

                {/* Fee Display (Placeholder) */}
                <div className="py-4 border-y border-current/15 mb-6">
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-75">
                    Course Fee (Placeholder)
                  </div>
                  <div className={`text-2xl sm:text-3xl font-serif font-black tracking-tight my-1 ${
                    plan.popular ? 'text-[#FAF7EE]' : 'text-[#174C32]'
                  }`}>
                    {plan.feePlaceholder}
                  </div>
                  <div className={`text-[11px] font-medium ${
                    plan.popular ? 'text-[#FAF7EE]/80' : 'text-[#78966B]'
                  }`}>
                    {plan.installmentInfo}
                  </div>
                </div>

                {/* Included Resources Checklist */}
                <div className="space-y-3 mb-6">
                  <div className={`text-[11px] uppercase font-bold tracking-wider ${
                    plan.popular ? 'text-[#C49A45]' : 'text-[#174C32]'
                  }`}>
                    What is Included:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.resourcesIncluded.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          plan.popular ? 'text-[#C49A45]' : 'text-[#174C32]'
                        }`} />
                        <span className={plan.popular ? 'text-[#FAF7EE]/90' : 'text-[#242B25]'}>
                          {res}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-current/10">
                <button
                  onClick={() => onEnquireFee(plan)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs group ${
                    plan.popular
                      ? 'bg-[#C49A45] hover:bg-[#d4a84e] text-white shadow-md'
                      : 'bg-[#174C32] hover:bg-[#216343] text-white'
                  }`}
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </button>
                <div className="text-center mt-2">
                  <span className={`text-[10px] ${
                    plan.popular ? 'text-[#FAF7EE]/60' : 'text-[#7E8A81]'
                  }`}>
                    Instant scholarship guidance via WhatsApp
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Security & Financial Help Assurance */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF7EE] border border-[#78966B]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#58635B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#78966B]/30 flex items-center justify-center text-[#174C32] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#C49A45]" />
            </div>
            <div>
              <strong className="text-[#174C32] block">Merit Scholarship & Financial Assistance Available</strong>
              <span>Students from economically challenged backgrounds or university gold medalists can apply for up to 40% fee concessions.</span>
            </div>
          </div>
          <button
            onClick={() => onEnquireFee({ name: 'Scholarship Concession Enquiry' })}
            className="px-4 py-2 bg-white border border-[#C49A45] text-[#174C32] rounded-xl font-bold hover:bg-[#174C32] hover:text-white transition shrink-0"
          >
            Apply for Scholarship
          </button>
        </div>

      </div>
    </section>
  );
}
