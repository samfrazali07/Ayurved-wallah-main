import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Phone, MessageSquare, GraduationCap, ShieldCheck } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, initialCourse }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialCourse) {
      setSelectedCourse(typeof initialCourse === 'string' ? initialCourse : initialCourse.title || '');
    }
  }, [initialCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-white border border-[#C49A45]/40 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#174C32] p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C49A45] mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Admission & Doubt Support</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-white">
            Connect with an Ayurveda Faculty Mentor
          </h3>
          <p className="text-xs text-[#FAF7EE]/80 mt-1">
            Get personalized batch counselling, official fee brochures & free sample study materials.
          </p>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="inline-flex p-3 bg-[#EBF2E8] text-[#174C32] rounded-full">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#174C32]">Enquiry Received!</h4>
              <p className="text-xs text-[#58635B] max-w-xs mx-auto">
                Thank you, Dr. {name || 'Aspirant'}. Our senior academic mentor will contact you within 2 business hours via call/WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#174C32] uppercase tracking-wider mb-1">
                  Full Name & Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Aryan Sharma / Vaidya Sneha"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7EE]/50 border border-[#78966B]/30 rounded-xl text-sm focus:outline-none focus:border-[#C49A45] focus:bg-white transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#174C32] uppercase tracking-wider mb-1">
                    WhatsApp Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7EE]/50 border border-[#78966B]/30 rounded-xl text-sm focus:outline-none focus:border-[#C49A45] focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#174C32] uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="doctor@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7EE]/50 border border-[#78966B]/30 rounded-xl text-sm focus:outline-none focus:border-[#C49A45] focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#174C32] uppercase tracking-wider mb-1">
                  Target Course / Exam
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7EE]/50 border border-[#78966B]/30 rounded-xl text-sm focus:outline-none focus:border-[#C49A45] focus:bg-white transition text-[#242B25]"
                >
                  <option value="">Select your preparation focus</option>
                  <option value="AIAPGET PG Achievers Batch 2025–26">AIAPGET (PG) Achiever's Masterclass 2025–26</option>
                  <option value="BAMS Professional Foundation">BAMS Professional Foundation (1st to 4th Year)</option>
                  <option value="Ayurveda Medical Officer Target">Ayurveda Medical Officer (AMO / PSC / UPSC)</option>
                  <option value="Samhita Parayana Special">Samhita Parayana & Shloka Decoding Special Batch</option>
                  <option value="All-India Test Series">All-India NTA Pattern Mock Test Series 2025</option>
                  <option value="Doubt & General Guidance">General Academic Guidance / Syllabus Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#174C32] uppercase tracking-wider mb-1">
                  Your Query or Question (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Ask about fee concession, batch schedule, notes delivery, or academic strategy..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7EE]/50 border border-[#78966B]/30 rounded-xl text-sm focus:outline-none focus:border-[#C49A45] focus:bg-white transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#174C32] text-white rounded-xl font-semibold text-sm hover:bg-[#216343] transition shadow-md flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition" />
                <span>Submit Academic Enquiry</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#58635B] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#174C32]" />
                <span>Zero Spam Guarantee · Your details are confidential with our academic team</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
