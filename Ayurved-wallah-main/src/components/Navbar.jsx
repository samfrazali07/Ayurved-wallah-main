import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Search, Menu, X, BookOpen, FileText, 
  Award, Phone, GraduationCap, Calendar, User, ExternalLink 
} from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenLogin, onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [materialsDropdown, setMaterialsDropdown] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FAF7EE]/95 backdrop-blur-md shadow-md border-b border-[#C49A45]/30' 
        : 'bg-[#FAF7EE] border-b border-[#78966B]/20'
    }`}>
      {/* Top micro announcement bar */}
      <div className="bg-[#174C32] text-[#FAF7EE] text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#C49A45] animate-pulse"></span>
        <span>Admissions Open: AIAPGET 2025–26 Achiever's Masterclass & BAMS Foundation Batches</span>
        <a 
          href="#fee-structure" 
          className="text-[#C49A45] font-bold hover:underline ml-2 hidden sm:inline-flex items-center gap-1"
        >
          View Fee Structure <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Tagline */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Ornate Botanical Leaf Crest */}
            <div className="relative w-11 h-11 rounded-xl bg-[#174C32] flex items-center justify-center text-white shadow-md border border-[#C49A45]/40 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6 text-[#C49A45]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#C49A45] rounded-full border-2 border-[#FAF7EE] flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-[#174C32] rounded-full"></span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-serif font-extrabold tracking-tight text-[#174C32]">
                  Ayurved
                </span>
                <span className="text-xl sm:text-2xl font-serif font-light text-[#C49A45]">
                  Wallah
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] tracking-widest uppercase font-semibold text-[#78966B]">
                Learn · Practice · Excel
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a 
              href="#" 
              className="px-3 py-2 text-xs xl:text-sm font-semibold text-[#174C32] hover:text-[#C49A45] transition rounded-lg hover:bg-white/60"
            >
              Home
            </a>

            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesDropdown(true)}
              onMouseLeave={() => setCoursesDropdown(false)}
            >
              <button 
                className="flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-semibold text-[#242B25] hover:text-[#174C32] transition rounded-lg hover:bg-white/60"
                onClick={() => setCoursesDropdown(!coursesDropdown)}
              >
                <span>Courses</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#78966B] transition-transform ${coursesDropdown ? 'rotate-180' : ''}`} />
              </button>

              {coursesDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white border border-[#C49A45]/30 rounded-2xl shadow-xl p-3 z-50 animate-fadeIn">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#78966B] px-3 py-1">
                    Specialized Coaching
                  </div>
                  <a 
                    href="#courses" 
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#FAF7EE] transition"
                    onClick={() => setCoursesDropdown(false)}
                  >
                    <div className="p-1.5 bg-[#EBF2E8] text-[#174C32] rounded-lg mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#174C32]">AIAPGET (PG) Batch</div>
                      <div className="text-[11px] text-[#58635B]">Brihattrayi & 12,000+ MCQs</div>
                    </div>
                  </a>
                  <a 
                    href="#courses" 
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#FAF7EE] transition"
                    onClick={() => setCoursesDropdown(false)}
                  >
                    <div className="p-1.5 bg-[#EBF2E8] text-[#174C32] rounded-lg mt-0.5">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#174C32]">BAMS Professional (UG)</div>
                      <div className="text-[11px] text-[#58635B]">1st to Final Prof NCISM Syllabus</div>
                    </div>
                  </a>
                  <a 
                    href="#courses" 
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#FAF7EE] transition"
                    onClick={() => setCoursesDropdown(false)}
                  >
                    <div className="p-1.5 bg-[#EBF2E8] text-[#174C32] rounded-lg mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#174C32]">Ayurveda Medical Officer (AMO)</div>
                      <div className="text-[11px] text-[#58635B]">State PSC, UPSC & CCRAS</div>
                    </div>
                  </a>
                  <div className="border-t border-[#FAF7EE] mt-1 pt-1">
                    <a 
                      href="#courses"
                      className="block text-center py-1.5 text-xs font-semibold text-[#C49A45] hover:underline"
                      onClick={() => setCoursesDropdown(false)}
                    >
                      View All 5+ Batches &rarr;
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Study Materials Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMaterialsDropdown(true)}
              onMouseLeave={() => setMaterialsDropdown(false)}
            >
              <button 
                className="flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-semibold text-[#242B25] hover:text-[#174C32] transition rounded-lg hover:bg-white/60"
                onClick={() => setMaterialsDropdown(!materialsDropdown)}
              >
                <span>Study Materials</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#78966B] transition-transform ${materialsDropdown ? 'rotate-180' : ''}`} />
              </button>

              {materialsDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white border border-[#C49A45]/30 rounded-2xl shadow-xl p-3 z-50 animate-fadeIn">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#78966B] px-3 py-1">
                    Academic Library
                  </div>
                  <a 
                    href="#study-materials" 
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EE] transition text-xs font-medium text-[#174C32]"
                    onClick={() => setMaterialsDropdown(false)}
                  >
                    <FileText className="w-4 h-4 text-[#C49A45]" />
                    <span>Subject-wise Handwritten Notes</span>
                  </a>
                  <a 
                    href="#study-materials" 
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EE] transition text-xs font-medium text-[#174C32]"
                    onClick={() => setMaterialsDropdown(false)}
                  >
                    <FileText className="w-4 h-4 text-[#C49A45]" />
                    <span>Charaka Samhita Shloka Compendium</span>
                  </a>
                  <a 
                    href="#study-materials" 
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EE] transition text-xs font-medium text-[#174C32]"
                    onClick={() => setMaterialsDropdown(false)}
                  >
                    <FileText className="w-4 h-4 text-[#C49A45]" />
                    <span>Dravyaguna Plant Mnemonics</span>
                  </a>
                  <a 
                    href="#study-materials" 
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#FAF7EE] transition text-xs font-medium text-[#174C32]"
                    onClick={() => setMaterialsDropdown(false)}
                  >
                    <FileText className="w-4 h-4 text-[#C49A45]" />
                    <span>25,000+ Topic-wise MCQ Bank</span>
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#pyqs" 
              className="px-3 py-2 text-xs xl:text-sm font-semibold text-[#242B25] hover:text-[#174C32] transition rounded-lg hover:bg-white/60"
            >
              PYQs
            </a>

            <a 
              href="#schedule" 
              className="px-3 py-2 text-xs xl:text-sm font-semibold text-[#242B25] hover:text-[#174C32] transition rounded-lg hover:bg-white/60 flex items-center gap-1.5"
            >
              <span>Class Schedule</span>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            </a>

            {/* More Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMoreDropdown(true)}
              onMouseLeave={() => setMoreDropdown(false)}
            >
              <button 
                className="flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-semibold text-[#242B25] hover:text-[#174C32] transition rounded-lg hover:bg-white/60"
                onClick={() => setMoreDropdown(!moreDropdown)}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#78966B] transition-transform ${moreDropdown ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdown && (
                <div className="absolute top-full right-0 w-48 bg-white border border-[#C49A45]/30 rounded-2xl shadow-xl p-2 z-50 animate-fadeIn">
                  <a 
                    href="#why-us" 
                    className="block px-3 py-2 rounded-xl text-xs font-medium text-[#242B25] hover:text-[#174C32] hover:bg-[#FAF7EE] transition"
                    onClick={() => setMoreDropdown(false)}
                  >
                    Why Ayurved Wallah?
                  </a>
                  <a 
                    href="#results" 
                    className="block px-3 py-2 rounded-xl text-xs font-medium text-[#242B25] hover:text-[#174C32] hover:bg-[#FAF7EE] transition"
                    onClick={() => setMoreDropdown(false)}
                  >
                    Results & Hall of Fame
                  </a>
                  <a 
                    href="#about-contact" 
                    className="block px-3 py-2 rounded-xl text-xs font-medium text-[#242B25] hover:text-[#174C32] hover:bg-[#FAF7EE] transition"
                    onClick={() => setMoreDropdown(false)}
                  >
                    About Us & Faculty
                  </a>
                  <a 
                    href="#about-contact" 
                    className="block px-3 py-2 rounded-xl text-xs font-medium text-[#242B25] hover:text-[#174C32] hover:bg-[#FAF7EE] transition"
                    onClick={() => setMoreDropdown(false)}
                  >
                    Contact & Helpdesk
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Bar Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-[#78966B]/30 rounded-xl text-xs text-[#58635B] hover:border-[#C49A45] hover:text-[#174C32] transition shadow-xs group"
              title="Search (Ctrl + K)"
            >
              <Search className="w-4 h-4 text-[#174C32] group-hover:scale-110 transition" />
              <span className="hidden md:inline">Search courses, notes...</span>
              <kbd className="hidden md:inline px-1.5 py-0.5 bg-[#FAF7EE] border border-[#78966B]/20 rounded text-[10px] font-mono text-[#78966B]">
                Ctrl K
              </kbd>
            </button>

            {/* Student Login Button */}
            <button
              onClick={onOpenLogin}
              className="px-4 py-2 bg-[#174C32] text-white rounded-xl text-xs font-semibold hover:bg-[#216343] transition shadow-sm hover:shadow flex items-center gap-1.5 group"
            >
              <User className="w-3.5 h-3.5 text-[#C49A45]" />
              <span>Student Login</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#174C32] hover:bg-white rounded-xl border border-transparent hover:border-[#78966B]/30 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#C49A45]/30 px-5 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="space-y-1">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#174C32] hover:bg-[#FAF7EE]"
            >
              Home
            </a>
            <a 
              href="#courses" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#242B25] hover:bg-[#FAF7EE]"
            >
              Courses (UG, PG, AMO)
            </a>
            <a 
              href="#dashboard-preview" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#242B25] hover:bg-[#FAF7EE]"
            >
              Student Dashboard Preview
            </a>
            <a 
              href="#study-materials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#242B25] hover:bg-[#FAF7EE]"
            >
              Study Materials & Notes
            </a>
            <a 
              href="#pyqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#242B25] hover:bg-[#FAF7EE]"
            >
              PYQs & Question Bank
            </a>
            <a 
              href="#schedule" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#242B25] hover:bg-[#FAF7EE]"
            >
              Class Schedule & Timetable
            </a>
            <a 
              href="#fee-structure" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#242B25] hover:bg-[#FAF7EE]"
            >
              Fee Structure & EMI
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#242B25] hover:bg-[#FAF7EE]"
            >
              Why Ayurved Wallah
            </a>
            <a 
              href="#results" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#242B25] hover:bg-[#FAF7EE]"
            >
              Results & Testimonials
            </a>
            <a 
              href="#about-contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#242B25] hover:bg-[#FAF7EE]"
            >
              About & Contact
            </a>
          </div>

          <div className="pt-3 border-t border-[#FAF7EE] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 bg-[#174C32] text-white font-semibold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-[#C49A45]" />
              <span>Student Login Portal</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 bg-[#FAF7EE] border border-[#C49A45] text-[#174C32] font-semibold text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C49A45]" />
              <span>Request Free Counselling Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
