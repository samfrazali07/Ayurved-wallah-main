import React, { useState } from 'react';
import { 
  Heart, Send, Mail, Phone, MapPin, ExternalLink, 
  CheckCircle, ShieldCheck, ArrowRight 
} from 'lucide-react';

export default function Footer({ onOpenSearch, onOpenLogin, onOpenConsultation }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 3500);
  };

  return (
    <footer className="bg-[#174C32] text-white pt-16 pb-8 border-t-4 border-[#C49A45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Shloka Digest Strip */}
        <div className="bg-[#0e3120] rounded-3xl p-6 sm:p-8 border border-[#C49A45]/30 mb-14 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C49A45]">
              Weekly Ayurveda Shloka & MCQ Digest
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Subscribe to Weekly Samhita Mnemonics
            </h3>
            <p className="text-xs text-[#FAF7EE]/70 max-w-md">
              Receive 10 high-yield AIAPGET questions, Sanskrit shloka audio, and examination notifications every Saturday morning.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="px-5 py-3 bg-[#174C32] border border-[#C49A45] rounded-xl text-xs text-[#FAF7EE] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C49A45]" />
                <span>Subscription confirmed! Check your inbox for this week's digest.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full sm:w-72 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#C49A45]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#C49A45] hover:bg-[#d4a84e] text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0e3120] border border-[#C49A45]/40 flex items-center justify-center text-white shadow-xs">
                <svg className="w-5 h-5 text-[#C49A45]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-serif font-black tracking-tight text-white">Ayurved </span>
                <span className="text-xl font-serif font-light text-[#C49A45]">Wallah</span>
                <p className="text-[10px] tracking-widest uppercase font-semibold text-[#78966B]">
                  Learn · Practice · Excel
                </p>
              </div>
            </div>

            <p className="text-xs text-[#FAF7EE]/70 leading-relaxed max-w-sm">
              India's premier Ayurveda coaching and learning management platform. We deliver authentic, structured, and result-oriented academic mentorship for BAMS, AIAPGET, and state PSC medical officer examinations.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {/* Social icons */}
              {[
                { name: 'YouTube', href: 'https://youtube.com', icon: '▶' },
                { name: 'Telegram', href: 'https://t.me', icon: '✈' },
                { name: 'Instagram', href: 'https://instagram.com', icon: '📸' },
                { name: 'WhatsApp', href: 'https://wa.me', icon: '💬' },
                { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.name}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#C49A45] text-white flex items-center justify-center text-xs font-bold transition shadow-xs"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#C49A45]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7EE]/80">
              <li><a href="#" className="hover:text-[#C49A45] transition">Home</a></li>
              <li><a href="#dashboard-preview" className="hover:text-[#C49A45] transition">Student Dashboard</a></li>
              <li><a href="#schedule" className="hover:text-[#C49A45] transition">Class Schedule</a></li>
              <li><a href="#fee-structure" className="hover:text-[#C49A45] transition">Fee Structure & EMI</a></li>
              <li><a href="#why-us" className="hover:text-[#C49A45] transition">Why Ayurved Wallah</a></li>
              <li><a href="#results" className="hover:text-[#C49A45] transition">Results & Hall of Fame</a></li>
            </ul>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#C49A45]">
              Courses & Batches
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7EE]/80">
              <li><a href="#courses" className="hover:text-[#C49A45] transition">AIAPGET (PG) Achiever's Batch</a></li>
              <li><a href="#courses" className="hover:text-[#C49A45] transition">BAMS Professional (1st to 4th Year)</a></li>
              <li><a href="#courses" className="hover:text-[#C49A45] transition">Ayurveda Medical Officer (AMO / PSC)</a></li>
              <li><a href="#courses" className="hover:text-[#C49A45] transition">Samhita Parayana Special Batch</a></li>
              <li><a href="#courses" className="hover:text-[#C49A45] transition">All-India NTA CBT Mock Test Series</a></li>
              <li><a href="#courses" className="hover:text-[#C49A45] transition">NEET & Pre-BAMS Foundation</a></li>
            </ul>
          </div>

          {/* Col 4: Resources & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#C49A45]">
              Academic Desk
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7EE]/80">
              <li><a href="#study-materials" className="hover:text-[#C49A45] transition">Subject-wise Notes</a></li>
              <li><a href="#pyqs" className="hover:text-[#C49A45] transition">Previous Year Solved Papers</a></li>
              <li><a href="#study-materials" className="hover:text-[#C49A45] transition">MCQ Question Bank</a></li>
              <li><a href="#study-materials" className="hover:text-[#C49A45] transition">Recorded Video Archive</a></li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-[#C49A45] transition text-left">
                  Request Counselling Call
                </button>
              </li>
              <li>
                <button onClick={onOpenLogin} className="hover:text-[#C49A45] transition text-left font-bold text-[#C49A45]">
                  Student Login Portal
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7EE]/60">
          <div>
            &copy; {new Date().getFullYear()} Ayurved Wallah. All rights reserved. Built with precision for Ayurveda scholars.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about-contact" className="hover:text-white transition">Privacy Policy</a>
            <a href="#about-contact" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#about-contact" className="hover:text-white transition">Honor Code</a>
            <a href="#about-contact" className="hover:text-white transition">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
