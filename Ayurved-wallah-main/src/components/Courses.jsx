import React, { useState } from 'react';
import { 
  BookOpen, Clock, Users, Star, ArrowRight, CheckCircle2, 
  Sparkles, Filter, ChevronRight 
} from 'lucide-react';
import { coursesData, courseCategories } from '../data/coursesData';

export default function Courses({ onSelectCourse, onEnquireCourse }) {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [showAll, setShowAll] = useState(false);

  const filteredCourses = selectedCategory === "All Courses"
    ? coursesData
    : coursesData.filter(c => c.category === selectedCategory);

  const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 4);

  return (
    <section id="courses" className="py-16 md:py-24 bg-[#FAF7EE] border-b border-[#78966B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C49A45]/40 text-[#174C32] text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A45]" />
            <span>Structured Academic Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#174C32] tracking-tight">
            Our Courses
          </h2>
          <p className="text-base sm:text-lg text-[#58635B] font-medium">
            Choose your path to success — tailored programs taught by premier national institute alumni
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {courseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#174C32] text-white shadow-md'
                    : 'bg-white text-[#58635B] border border-[#78966B]/20 hover:border-[#C49A45] hover:text-[#174C32]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {displayedCourses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-3xl border border-[#78966B]/25 hover:border-[#C49A45] shadow-ayur-sm hover:shadow-ayur-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header Illustration / Banner */}
              <div className="p-6 bg-gradient-to-r from-[#174C32] to-[#216343] text-white relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#C49A45]/20 rounded-full blur-xl pointer-events-none"></div>

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="px-2.5 py-1 bg-white/15 backdrop-blur-sm border border-white/20 text-[#FAF7EE] text-[11px] font-bold rounded-full uppercase tracking-wider">
                    {course.category}
                  </span>
                  <span className="px-2.5 py-1 bg-[#C49A45] text-white text-[11px] font-bold rounded-full shadow-xs">
                    {course.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white relative z-10 group-hover:text-[#FAF7EE] transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs text-[#FAF7EE]/80 mt-1 relative z-10 line-clamp-1">
                  {course.tagline}
                </p>

                <div className="flex items-center gap-4 mt-4 text-xs text-[#FAF7EE]/90 relative z-10 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C49A45]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C49A45]" />
                    <span>{course.enrolledCount}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#C49A45] fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>

              {/* Card Body & Highlights */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#78966B] mb-2.5">
                    Key Academic Features
                  </h4>
                  <ul className="space-y-2">
                    {course.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#242B25] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#174C32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Faculty & Fee info */}
                <div className="pt-4 border-t border-[#FAF7EE] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-[#78966B] uppercase font-bold tracking-wider block">
                      Lead Faculty
                    </span>
                    <span className="text-xs font-semibold text-[#174C32]">
                      {course.faculty}
                    </span>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-[10px] text-[#78966B] uppercase font-bold tracking-wider block">
                      Course Fee Placeholder
                    </span>
                    <span className="text-xs font-bold text-[#C49A45]">
                      {course.feePlaceholder}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="flex-1 py-2.5 px-4 bg-[#174C32] text-white rounded-xl text-xs font-semibold hover:bg-[#216343] transition shadow-xs flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>Explore Course & Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C49A45] group-hover/btn:translate-x-1 transition" />
                  </button>

                  <a
                    href="#fee-structure"
                    className="py-2.5 px-4 bg-[#FAF7EE] border border-[#78966B]/30 text-[#174C32] rounded-xl text-xs font-semibold hover:bg-white hover:border-[#C49A45] transition text-center shrink-0"
                  >
                    View Fee Structure
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Link */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#C49A45] text-[#174C32] rounded-xl text-xs sm:text-sm font-bold hover:bg-[#FAF7EE] transition shadow-xs"
          >
            <span>{showAll ? "Show Less Courses" : "View All Available Courses & Batches"}</span>
            <ChevronRight className={`w-4 h-4 text-[#C49A45] transition-transform ${showAll ? '-rotate-90' : 'rotate-90'}`} />
          </button>
        </div>

      </div>
    </section>
  );
}
