import React, { useState } from 'react';
import { 
  Building2, Mail, Phone, MapPin, Send, CheckCircle, 
  MessageCircle, ExternalLink, Sparkles, BookOpen, HeartHandshake, Shield 
} from 'lucide-react';
import { facultyData } from '../data/facultyData';

export default function AboutContact({ onOpenConsultation }) {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormMsg('');
    }, 4000);
  };

  return (
    <section id="about-contact" className="py-16 md:py-24 bg-[#FAF7EE] border-b border-[#78966B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: About Ayurved Wallah, Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C49A45]/40 text-[#174C32] text-xs font-semibold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C49A45]" />
              <span>Ancient Vedic Roots · Modern Academic Pedagogy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#174C32] tracking-tight">
              About Ayurved Wallah
            </h2>

            <p className="text-base text-[#58635B] leading-relaxed">
              Ayurved Wallah was founded with a singular sacred mission: to demystify classical Ayurvedic sciences and empower BAMS students and doctors across India to ace competitive examinations with confidence, intellectual rigor, and cultural pride.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-[#78966B]/25 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#174C32] text-[#C49A45] flex items-center justify-center font-bold text-xs">
                  🎯
                </div>
                <h3 className="text-sm font-serif font-bold text-[#174C32]">Our Mission</h3>
                <p className="text-xs text-[#58635B] leading-relaxed">
                  To provide accessible, high-yield, authentic Samhita-based education with modern mnemonic charts and exam analytics to every corner of India.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#78966B]/25 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#C49A45] text-white flex items-center justify-center font-bold text-xs">
                  👁️
                </div>
                <h3 className="text-sm font-serif font-bold text-[#174C32]">Our Vision</h3>
                <p className="text-xs text-[#58635B] leading-relaxed">
                  To establish India's most credible, student-centric medical coaching ecosystem for postgraduate Ayurveda admissions and public health careers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Card with Faculty Heritage */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C49A45]/30 shadow-ayur-md space-y-6">
              <h3 className="text-lg font-serif font-bold text-[#174C32] border-b border-[#FAF7EE] pb-3 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#C49A45]" />
                Institutional Commitment
              </h3>

              <div className="space-y-3 text-xs text-[#242B25] leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#174C32] shrink-0 mt-0.5" />
                  <span><strong>Zero Commercial Shortcuts:</strong> Classical Sanskrit root shlokas are recited and cross-referenced with Chakrapani, Dalhana, and Hemadri commentaries.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#174C32] shrink-0 mt-0.5" />
                  <span><strong>Medical Science Bridge:</strong> Modern anatomy, pathology, radiology, and pharmacology are integrated without diluting core Ayurvedic philosophy.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#174C32] shrink-0 mt-0.5" />
                  <span><strong>Affordable Excellence:</strong> Quality digital coaching made accessible to every aspiring Vaidya irrespective of geographical location.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7EE] border border-[#78966B]/20 text-center">
                <span className="text-[11px] uppercase tracking-wider text-[#78966B] font-bold block">
                  Academic Accreditation
                </span>
                <span className="text-xs font-serif font-bold text-[#174C32]">
                  Aligned strictly with NCISM & NTA Examination Patterns
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Faculty Panel Introduction */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#174C32]">
              Meet Your Academic Mentors
            </h3>
            <p className="text-xs sm:text-sm text-[#58635B]">
              Scholars, clinicians, and researchers dedicated to your success in competitive exams
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyData.map((fac) => (
              <div 
                key={fac.id}
                className="bg-white rounded-3xl p-6 border border-[#78966B]/20 hover:border-[#C49A45] shadow-xs hover:shadow-ayur-sm transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#174C32] text-[#C49A45] flex items-center justify-center font-serif font-bold text-xl mb-4 shadow-sm border border-[#C49A45]/30">
                    {fac.name.split(' ')[1] ? fac.name.split(' ')[1][0] : 'V'}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#EBF2E8] text-[#174C32] rounded-md">
                    {fac.badge}
                  </span>
                  <h4 className="text-base font-serif font-bold text-[#174C32] mt-2">
                    {fac.name}
                  </h4>
                  <div className="text-xs font-semibold text-[#C49A45] mt-0.5">
                    {fac.role}
                  </div>
                  <div className="text-[11px] text-[#78966B] font-medium mt-1">
                    {fac.degrees}
                  </div>
                  <p className="text-xs text-[#58635B] mt-3 leading-relaxed">
                    {fac.bio}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#FAF7EE] text-[11px] text-[#174C32] font-semibold">
                  Specialty: {fac.specialization}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Contact & Helpdesk Grid */}
        <div className="bg-white rounded-3xl border border-[#78966B]/30 shadow-ayur-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Contact Details Left Col */}
            <div className="lg:col-span-5 bg-[#174C32] p-8 sm:p-10 text-white flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C49A45]">
                    Reach Out To Us
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    Get in Touch with Our Academic Team
                  </h3>
                  <p className="text-xs text-[#FAF7EE]/80 mt-2 leading-relaxed">
                    Have questions about syllabus coverage, batch enrollment, fee installments, or study kit delivery? We are here to assist you.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#C49A45] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Student Academic Helpline</div>
                      <div className="text-[#FAF7EE]/80">+91 800-AYUR-WAL (Placeholder)</div>
                      <div className="text-[#FAF7EE]/60 text-[10px]">Mon – Sat: 9:00 AM – 8:00 PM IST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#C49A45] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Official Admissions Email</div>
                      <div className="text-[#FAF7EE]/80">admissions@ayurvedwallah.edu</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C49A45] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Academic Center & Headquarters</div>
                      <div className="text-[#FAF7EE]/80">
                        Ayurved Wallah Learning Center, Institutional Area, New Delhi, India 110001
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct Action Button */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat Directly on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="text-[11px] text-[#FAF7EE]/70 font-mono">
                    📍 Campus & Hybrid Classroom Hub: Delhi-NCR
                  </div>
                  <div className="text-[10px] text-[#C49A45] mt-0.5">
                    Digital learning hub operational nationwide across all 28 states & UTs
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form Right Col */}
            <div className="lg:col-span-7 p-8 sm:p-10 bg-white">
              <h3 className="text-xl font-serif font-bold text-[#174C32] mb-1">
                Send an Academic Query
              </h3>
              <p className="text-xs text-[#58635B] mb-6">
                Fill out the quick form below and an academic counselor will connect with you within 2 business hours.
              </p>

              {sentSuccess ? (
                <div className="p-8 bg-[#FAF7EE] rounded-2xl border border-[#78966B]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#EBF2E8] text-[#174C32] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-[#174C32]">Message Dispatched!</h4>
                  <p className="text-xs text-[#58635B]">
                    Thank you. We have received your query and sent an instant confirmation email and WhatsApp alert.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#174C32] uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. / Vaidya..."
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#FAF7EE]/50 border border-[#78966B]/30 rounded-xl text-xs sm:text-sm text-[#242B25] focus:outline-none focus:border-[#C49A45] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#174C32] uppercase tracking-wider mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91..."
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#FAF7EE]/50 border border-[#78966B]/30 rounded-xl text-xs sm:text-sm text-[#242B25] focus:outline-none focus:border-[#C49A45] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#174C32] uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7EE]/50 border border-[#78966B]/30 rounded-xl text-xs sm:text-sm text-[#242B25] focus:outline-none focus:border-[#C49A45] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#174C32] uppercase tracking-wider mb-1">
                      Message / Question
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Write your questions about batches, study materials, or competitive strategy..."
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7EE]/50 border border-[#78966B]/30 rounded-xl text-xs sm:text-sm text-[#242B25] focus:outline-none focus:border-[#C49A45] focus:bg-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#174C32] hover:bg-[#216343] text-white rounded-xl font-semibold text-xs sm:text-sm transition shadow-sm flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition" />
                    <span>Send Message to Academic Desk</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
