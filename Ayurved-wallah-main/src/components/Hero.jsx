import React from 'react';
import { 
  ArrowRight, Download, BookOpen, Star, ShieldCheck, 
  Sparkles, CheckCircle, Smartphone, PlayCircle 
} from 'lucide-react';

export default function Hero({ onExploreCourses, onOpenConsultation, onOpenLogin }) {
  return (
    <section className="relative overflow-hidden bg-[#FAF7EE] py-12 md:py-20 lg:py-24 border-b border-[#78966B]/20">
      
      {/* Subtle botanical background elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#78966B]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#C49A45]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Educational Pitch & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2E8] border border-[#78966B]/30 text-[#174C32] text-xs font-semibold tracking-wide shadow-xs">
              <span className="text-[#C49A45] font-bold">🌿</span>
              <span>Your Complete Ayurveda Learning Platform</span>
            </div>

            {/* Main Heading & Subheading */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-[#174C32]">
                  Ayurved <span className="text-[#C49A45] font-normal">Wallah</span>
                </h1>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#242B25] tracking-tight">
                Learn Ayurveda. <span className="text-[#174C32] underline decoration-[#C49A45]/60 underline-offset-8">Crack Your Exams.</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#58635B] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Expert guidance for <strong className="text-[#174C32] font-semibold">BAMS</strong>, <strong className="text-[#174C32] font-semibold">AIAPGET</strong> and other Ayurveda competitive examinations with structured courses, notes, live mentorship, and national test series.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#courses"
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#174C32] text-white font-semibold text-sm rounded-xl hover:bg-[#216343] transition shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 text-[#C49A45] group-hover:translate-x-1 transition" />
              </a>

              <a
                href="#about-contact"
                className="w-full sm:w-auto px-7 py-3.5 bg-white border border-[#C49A45]/60 text-[#174C32] font-semibold text-sm rounded-xl hover:bg-[#FAF7EE] hover:border-[#174C32] transition shadow-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#C49A45]" />
                <span>Download App</span>
              </a>
            </div>

            {/* Trust Highlights & Accreditation Pills */}
            <div className="pt-6 border-t border-[#78966B]/20 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="bg-white/80 p-3 rounded-xl border border-[#78966B]/20">
                <div className="flex items-center gap-1 text-[#C49A45]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-sm text-[#174C32]">4.9 / 5</span>
                </div>
                <div className="text-[11px] text-[#58635B] mt-0.5">15,000+ Students</div>
              </div>

              <div className="bg-white/80 p-3 rounded-xl border border-[#78966B]/20">
                <div className="text-sm font-bold text-[#174C32]">850+</div>
                <div className="text-[11px] text-[#58635B] mt-0.5">AIAPGET & MO Rankers</div>
              </div>

              <div className="bg-white/80 p-3 rounded-xl border border-[#78966B]/20">
                <div className="text-sm font-bold text-[#174C32]">50,000+</div>
                <div className="text-[11px] text-[#58635B] mt-0.5">Samhita MCQs</div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Ayurveda Themed Visual Scene */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative manuscript frame */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#174C32] to-[#0f3422] p-2 shadow-2xl border-2 border-[#C49A45]/40 overflow-hidden">
                
                {/* Visual Scene Inner Container */}
                <div className="relative rounded-2xl bg-[#FAF7EE] p-6 sm:p-8 overflow-hidden min-h-[420px] flex flex-col justify-between">
                  
                  {/* Subtle Ayurvedic manuscript botanical watermark in background */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#174C32_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  {/* Top card banner */}
                  <div className="flex items-center justify-between border-b border-[#C49A45]/30 pb-3 z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#174C32] text-[#C49A45] flex items-center justify-center font-serif font-bold text-xs">
                        चरक
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#174C32]">Charaka Samhita & Sushruta</div>
                        <div className="text-[10px] text-[#78966B]">Classical Medical Sciences</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-[#EBF2E8] text-[#174C32] text-[10px] font-bold rounded-full">
                      Brihattrayi
                    </span>
                  </div>

                  {/* Center Illustration Composite: Scholar, Samhitas, Mortar-Pestle, Herbs */}
                  <div className="my-6 relative flex flex-col items-center justify-center z-10">
                    
                    {/* SVG Art representing Traditional Scholar, Samhitas & Medicinal Herbs */}
                    <div className="w-full max-w-xs relative py-4">
                      
                      {/* Aura circle */}
                      <div className="absolute inset-0 m-auto w-44 h-44 rounded-full bg-gradient-to-tr from-[#C49A45]/20 to-[#78966B]/20 blur-lg"></div>

                      {/* Main Illustrated Artwork */}
                      <div className="relative bg-white rounded-2xl p-5 border border-[#C49A45]/30 shadow-md">
                        
                        {/* Botanical & Herb Header Motif */}
                        <div className="flex justify-between items-center text-xs text-[#174C32] font-semibold mb-3">
                          <span className="flex items-center gap-1">
                            🌿 Tulsi · Ashwagandha · Brahmi
                          </span>
                          <span className="text-[#C49A45] font-serif">त्रिसूत्र आयुर्वेद</span>
                        </div>

                        {/* Traditional Books Stack Graphic */}
                        <div className="space-y-2 py-2">
                          <div className="bg-[#174C32] text-white p-2.5 rounded-lg flex items-center justify-between shadow-xs border-l-4 border-[#C49A45]">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-[#C49A45]" />
                              <span className="text-xs font-serif font-bold tracking-wide">चरक संहिता (Charaka Samhita)</span>
                            </div>
                            <span className="text-[10px] text-[#FAF7EE]/80">चक्रपाणि टीका</span>
                          </div>

                          <div className="bg-[#216343] text-white p-2.5 rounded-lg flex items-center justify-between shadow-xs border-l-4 border-[#C49A45]">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-[#C49A45]" />
                              <span className="text-xs font-serif font-bold tracking-wide">सुश्रुत संहिता (Sushruta Samhita)</span>
                            </div>
                            <span className="text-[10px] text-[#FAF7EE]/80">डल्हण टीका</span>
                          </div>

                          <div className="bg-[#78966B] text-white p-2.5 rounded-lg flex items-center justify-between shadow-xs border-l-4 border-[#C49A45]">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-[#C49A45]" />
                              <span className="text-xs font-serif font-bold tracking-wide">अष्टाङ्ग हृदय (Ashtanga Hridaya)</span>
                            </div>
                            <span className="text-[10px] text-[#FAF7EE]/80">अरुणदत्त टीका</span>
                          </div>
                        </div>

                        {/* Mortar & Pestle (Khalva Yantra) & Medicinal Herb Badges */}
                        <div className="mt-4 pt-3 border-t border-[#FAF7EE] flex items-center justify-between text-xs text-[#58635B]">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-[#FAF7EE] border border-[#C49A45]/40 flex items-center justify-center text-sm shadow-xs">
                              🥣
                            </div>
                            <div>
                              <div className="text-[11px] font-bold text-[#174C32]">खल्व यन्त्र (Mortar & Pestle)</div>
                              <div className="text-[10px] text-[#78966B]">Rasa Shastra Lab Prep</div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 bg-[#FAF7EE] rounded text-[11px] font-mono text-[#C49A45] font-bold border border-[#C49A45]/30">
                            NCISM Standard
                          </span>
                        </div>

                      </div>
                    </div>

                  </div>

                  {/* Floating Live Batch Pill */}
                  <div className="relative z-10 bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-[#174C32]/20 shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
                      </span>
                      <div>
                        <div className="text-xs font-bold text-[#174C32]">Today's Live Class: Charaka Chikitsa</div>
                        <div className="text-[10px] text-[#58635B]">With Dr. V. K. Shastri · 428 Doctors Attending</div>
                      </div>
                    </div>
                    <a
                      href="#schedule"
                      className="px-2.5 py-1 bg-[#174C32] text-white text-[11px] font-semibold rounded-lg hover:bg-[#216343] transition shrink-0"
                    >
                      Join
                    </a>
                  </div>

                </div>

              </div>

              {/* Floating Achievement Seal / Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3 rounded-2xl shadow-xl border border-[#C49A45]/40 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-[#C49A45]/20 flex items-center justify-center text-[#174C32]">
                  <Sparkles className="w-5 h-5 text-[#C49A45]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#174C32]">Top 10 AIAPGET Ranks</div>
                  <div className="text-[11px] text-[#78966B]">Authentic Samhita Strategy</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
