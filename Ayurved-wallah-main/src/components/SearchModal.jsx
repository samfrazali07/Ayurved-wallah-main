import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, FileText, Calendar, User, ArrowRight } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { materialsData } from '../data/materialsData';
import { scheduleData } from '../data/scheduleData';
import { facultyData } from '../data/facultyData';

export default function SearchModal({ isOpen, onClose, onSelectCourse, onSelectMaterial }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(false); // toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredCourses = q
    ? coursesData.filter(c => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.highlights.some(h => h.toLowerCase().includes(q)))
    : coursesData.slice(0, 3);

  const filteredMaterials = q
    ? materialsData.filter(m => m.title.toLowerCase().includes(q) || m.subject.toLowerCase().includes(q) || m.type.toLowerCase().includes(q))
    : materialsData.slice(0, 3);

  const filteredFaculty = q
    ? facultyData.filter(f => f.name.toLowerCase().includes(q) || f.specialization.toLowerCase().includes(q))
    : [];

  const filteredSchedule = q
    ? scheduleData.filter(s => s.subject.toLowerCase().includes(q) || s.batch.toLowerCase().includes(q) || s.faculty.toLowerCase().includes(q))
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#FAF7EE] border border-[#C49A45]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 bg-white border-b border-[#FAF7EE] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#174C32]" />
          <input
            type="text"
            placeholder="Search courses, notes, shlokas, faculty, schedules..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-base sm:text-lg text-[#242B25] placeholder-[#7E8A81] focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-[#58635B] hover:text-[#174C32] hover:bg-[#FAF7EE] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="p-4 overflow-y-auto space-y-6">
          {/* Quick tags */}
          {!query && (
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[#58635B] font-medium">Popular searches:</span>
              {['Charaka Samhita', 'Dravyaguna Notes', 'AIAPGET 2025', 'Rasa Shastra', 'Live Timetable'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-2.5 py-1 bg-white border border-[#78966B]/30 text-[#174C32] rounded-full hover:border-[#C49A45] hover:bg-[#FAF7EE] transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Courses Section */}
          {filteredCourses.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#174C32] mb-2">
                <BookOpen className="w-3.5 h-3.5 text-[#C49A45]" />
                Courses ({filteredCourses.length})
              </div>
              <div className="space-y-2">
                {filteredCourses.map(course => (
                  <div
                    key={course.id}
                    onClick={() => {
                      onClose();
                      if (onSelectCourse) onSelectCourse(course);
                    }}
                    className="p-3 bg-white rounded-xl border border-transparent hover:border-[#C49A45]/40 hover:shadow-sm cursor-pointer transition flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#174C32] group-hover:text-[#C49A45] transition">
                        {course.title}
                      </h4>
                      <p className="text-xs text-[#58635B] mt-0.5">{course.category} · {course.duration}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#78966B] group-hover:translate-x-1 group-hover:text-[#174C32] transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Study Materials Section */}
          {filteredMaterials.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#174C32] mb-2">
                <FileText className="w-3.5 h-3.5 text-[#C49A45]" />
                Study Materials & Notes ({filteredMaterials.length})
              </div>
              <div className="space-y-2">
                {filteredMaterials.map(mat => (
                  <div
                    key={mat.id}
                    onClick={() => {
                      onClose();
                      if (onSelectMaterial) onSelectMaterial(mat);
                    }}
                    className="p-3 bg-white rounded-xl border border-transparent hover:border-[#C49A45]/40 hover:shadow-sm cursor-pointer transition flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#174C32] group-hover:text-[#C49A45] transition">
                        {mat.title}
                      </h4>
                      <p className="text-xs text-[#58635B] mt-0.5">{mat.type} · {mat.subject} ({mat.format})</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#78966B] group-hover:translate-x-1 group-hover:text-[#174C32] transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Faculty Results */}
          {filteredFaculty.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#174C32] mb-2">
                <User className="w-3.5 h-3.5 text-[#C49A45]" />
                Faculty Members ({filteredFaculty.length})
              </div>
              <div className="space-y-2">
                {filteredFaculty.map(fac => (
                  <div
                    key={fac.id}
                    className="p-3 bg-white rounded-xl border border-[#FAF7EE] flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#174C32]">{fac.name}</h4>
                      <p className="text-xs text-[#58635B]">{fac.role} · {fac.specialization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Schedule Results */}
          {filteredSchedule.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#174C32] mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#C49A45]" />
                Scheduled Live Classes ({filteredSchedule.length})
              </div>
              <div className="space-y-2">
                {filteredSchedule.map(sch => (
                  <div
                    key={sch.id}
                    className="p-3 bg-white rounded-xl border border-[#FAF7EE] flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#174C32]">{sch.subject}</h4>
                      <p className="text-xs text-[#58635B]">{sch.time} · {sch.faculty}</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-[#FAF7EE] text-[#174C32] rounded font-medium">
                      {sch.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {q && filteredCourses.length === 0 && filteredMaterials.length === 0 && filteredFaculty.length === 0 && filteredSchedule.length === 0 && (
            <div className="text-center py-8 text-[#58635B]">
              <p className="text-sm">No results found for "{query}".</p>
              <p className="text-xs mt-1 text-[#7E8A81]">Try searching for "AIAPGET", "Dravyaguna", "Notes", or "Schedule".</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#FAF7EE] border-t border-[#78966B]/20 text-xs text-[#58635B] flex justify-between items-center">
          <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-[#C49A45]/30 rounded text-[11px] font-mono text-[#174C32]">ESC</kbd> to exit</span>
          <span className="text-[#174C32] font-medium">Ayurved Wallah Knowledge Hub</span>
        </div>
      </div>
    </div>
  );
}
