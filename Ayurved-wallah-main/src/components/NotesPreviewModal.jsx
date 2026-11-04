import React, { useState } from 'react';
import { X, Download, BookOpen, Check, Share2, ZoomIn, ZoomOut, Bookmark } from 'lucide-react';

export default function NotesPreviewModal({ material, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);

  if (!isOpen || !material) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-3xl bg-white border border-[#C49A45]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#174C32] px-6 py-4 text-white flex items-center justify-between border-b border-[#C49A45]/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg border border-[#C49A45]/30">
              <BookOpen className="w-5 h-5 text-[#C49A45]" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#FAF7EE]/70 font-semibold">
                {material.type} · {material.subject}
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-white line-clamp-1">
                {material.title}
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-6 py-2.5 bg-[#FAF7EE] border-b border-[#78966B]/20 flex flex-wrap items-center justify-between gap-3 text-xs text-[#58635B]">
          <div className="flex items-center gap-4">
            <span>Size: <strong className="text-[#174C32]">{material.size}</strong></span>
            <span>Pages: <strong className="text-[#174C32]">{material.pages}</strong></span>
            <span>Rating: <strong className="text-[#C49A45]">★ {material.rating}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setZoomLevel(prev => Math.max(80, prev - 10))}
              className="p-1 hover:bg-white rounded border border-transparent hover:border-[#78966B]/30"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4 text-[#174C32]" />
            </button>
            <span className="text-[11px] font-mono">{zoomLevel}%</span>
            <button 
              onClick={() => setZoomLevel(prev => Math.min(130, prev + 10))}
              className="p-1 hover:bg-white rounded border border-transparent hover:border-[#78966B]/30"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4 text-[#174C32]" />
            </button>
            <div className="h-4 w-px bg-[#78966B]/30 mx-1"></div>
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-1 rounded border ${isBookmarked ? 'bg-[#C49A45]/10 border-[#C49A45] text-[#C49A45]' : 'hover:bg-white text-[#174C32] border-transparent'}`}
              title="Bookmark Material"
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button 
              onClick={handleCopyLink}
              className="p-1 hover:bg-white rounded text-[#174C32] border border-transparent hover:border-[#78966B]/30"
              title="Share"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Note Reader Area (Parchment Styled) */}
        <div className="p-6 overflow-y-auto bg-[#FFFDF9] flex-1">
          <div 
            className="max-w-2xl mx-auto p-6 sm:p-8 bg-[#FAF7EE] border border-[#C49A45]/30 rounded-xl shadow-sm transition-all"
            style={{ fontSize: `${zoomLevel}%` }}
          >
            {/* Header Crest */}
            <div className="text-center pb-4 mb-6 border-b border-[#C49A45]/40">
              <div className="inline-block text-xs font-serif tracking-widest uppercase text-[#C49A45] font-bold">
                Ayurved Wallah Scholarly Series
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#174C32] mt-1">
                {material.samplePreview?.heading || material.title}
              </h2>
              <p className="text-xs text-[#78966B] mt-1">
                Official Syllabus Summary · Compiled by Dr. V. K. Shastri & Faculty Team
              </p>
            </div>

            {/* Note Content */}
            <div className="space-y-4 text-sm leading-relaxed text-[#242B25] font-sans">
              <div className="whitespace-pre-line bg-white/70 p-4 rounded-lg border border-[#78966B]/20">
                {material.samplePreview?.content}
              </div>

              {/* High Yield Mnemonic Box */}
              <div className="bg-[#EBF2E8] border-l-4 border-[#174C32] p-4 rounded-r-lg mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#174C32] flex items-center gap-1.5">
                  <span>💡</span> High-Yield AIAPGET Exam Mnemonic
                </h4>
                <p className="text-xs text-[#242B25] mt-1 italic">
                  "Remember: Haritaki Rasa exception is Lavana (Salt). If an exam question asks which rasa is absent in Haritaki, immediately eliminate choices having Lavana."
                </p>
              </div>

              {/* Watermark notice */}
              <div className="pt-6 border-t border-[#C49A45]/30 text-center text-xs text-[#58635B]">
                <p>This is a certified preview sample from the Ayurved Wallah Digital Library.</p>
                <p className="text-[11px] text-[#7E8A81] mt-0.5">Enrolled students receive the complete unabridged 64-page PDF with physical home delivery.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#FAF7EE] border-t border-[#C49A45]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#58635B]">
            <span>Downloads: <strong className="text-[#174C32]">{material.downloads}</strong></span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 border border-[#78966B]/40 text-[#174C32] rounded-xl text-xs font-semibold hover:bg-white transition"
            >
              Close Preview
            </button>
            <a
              href="/fee-structure"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2 bg-[#174C32] text-white rounded-xl text-xs font-semibold hover:bg-[#216343] transition flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full Notes Pack</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
