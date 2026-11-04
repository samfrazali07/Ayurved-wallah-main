import React from 'react';
import { X, CheckCircle, Clock, Video, Award, Star, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';

export default function CourseDetailModal({ course, isOpen, onClose, onEnquire }) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-3xl bg-white border border-[#C49A45]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Course Header */}
        <div className="bg-[#174C32] p-6 text-white relative">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <span className="inline-block px-2.5 py-0.5 bg-[#C49A45] text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
                {course.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                {course.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF7EE]/90">
                {course.tagline}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-white/10 text-xs text-[#FAF7EE]/80">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C49A45]" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Video className="w-4 h-4 text-[#C49A45]" />
              <span>{course.mode}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#C49A45] fill-current" />
              <span>{course.rating} / 5.0 Rating</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Highlights */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#174C32] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C49A45]" />
              Course Key Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#242B25] p-2 bg-[#FAF7EE] rounded-lg border border-[#78966B]/20">
                  <CheckCircle className="w-4 h-4 text-[#174C32] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus Curriculum */}
          {course.syllabusOverview && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#174C32] mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C49A45]" />
                Curriculum & Syllabus Breakdown
              </h3>
              <div className="space-y-2">
                {course.syllabusOverview.map((item, idx) => (
                  <div key={idx} className="p-3 bg-white border border-[#78966B]/25 rounded-xl text-xs text-[#242B25] flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#174C32] text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Faculty Card */}
          <div className="p-4 bg-[#FAF7EE] rounded-xl border border-[#C49A45]/30 flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#78966B]">Lead Academic Mentor</span>
              <h4 className="text-sm font-serif font-bold text-[#174C32]">{course.faculty}</h4>
              <p className="text-xs text-[#58635B] mt-0.5">Premier National Institute Alumnus</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-[#174C32]">{course.enrolledCount}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer / Enrollment CTA */}
        <div className="p-4 sm:p-6 bg-[#FAF7EE] border-t border-[#C49A45]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] text-[#58635B] uppercase tracking-wider block font-medium">Batch Fee Structure</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-bold font-serif text-[#174C32]">{course.feePlaceholder}</span>
              <span className="text-[11px] text-[#78966B] font-medium">{course.emiAvailable}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 border border-[#78966B]/30 text-[#174C32] rounded-xl text-xs font-semibold hover:bg-white transition"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onClose();
                if (onEnquire) onEnquire(course);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#174C32] text-white rounded-xl text-xs font-semibold hover:bg-[#216343] transition shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Enquire & Reserve Seat</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
