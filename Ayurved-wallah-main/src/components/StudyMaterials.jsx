import React, { useState } from 'react';
import { 
  FileText, BookOpen, Award, Video, Search, Filter, 
  Download, Eye, CheckCircle, Sparkles, ArrowRight 
} from 'lucide-react';
import { materialsData, materialSubjects, materialTypes } from '../data/materialsData';

export default function StudyMaterials({ onPreviewMaterial }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedType, setSelectedType] = useState('All Resource Types');

  // Filter logic
  const filteredMaterials = materialsData.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSubject = selectedSubject === 'All Subjects' || item.subject === selectedSubject;
    const matchesType = selectedType === 'All Resource Types' || item.type === selectedType;

    return matchesSearch && matchesSubject && matchesType;
  });

  // Top 4 Primary Resource Category Overview Cards
  const fourResourceCategories = [
    {
      id: "notes-cat",
      title: "Subject-wise Notes",
      desc: "Handwritten & structured PDF summaries of Dravyaguna, Rasa Shastra, Kayachikitsa & Samhitas.",
      icon: FileText,
      targetType: "Subject-wise Notes",
      stat: "64+ Guides Available"
    },
    {
      id: "pyq-cat",
      title: "Previous Year Question Papers",
      desc: "Last 10 years AIAPGET, NIA, BHU, Jamnagar & State PSC solved papers with Sanskrit commentary citations.",
      icon: Award,
      targetType: "Previous Year Question Papers",
      stat: "10+ Years Covered"
    },
    {
      id: "mcq-cat",
      title: "Practice Questions",
      desc: "25,000+ topic-wise MCQs, assertion-reasoning questions, and shloka identification drills.",
      icon: BookOpen,
      targetType: "Practice Questions",
      stat: "25,000+ MCQs"
    },
    {
      id: "video-cat",
      title: "Recorded Lectures",
      desc: "Full HD video lecture archive with searchable timestamps, bookmarking, and slide downloads.",
      icon: Video,
      targetType: "Recorded Lectures",
      stat: "1,200+ Video Hours"
    }
  ];

  return (
    <section id="study-materials" className="py-16 md:py-24 bg-white border-b border-[#78966B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7EE] border border-[#C49A45]/40 text-[#174C32] text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A45]" />
            <span>Digital Academic Repository</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#174C32] tracking-tight">
            Your Learning Resources
          </h2>
          <p className="text-base sm:text-lg text-[#58635B] font-medium">
            Access curated subject-wise notes, previous year question papers, and high-yield question banks designed specifically for Ayurveda entrance exams.
          </p>
        </div>

        {/* Four Primary Resource Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {fourResourceCategories.map((card) => {
            const Icon = card.icon;
            const isSelected = selectedType === card.targetType;
            return (
              <div
                key={card.id}
                onClick={() => setSelectedType(isSelected ? 'All Resource Types' : card.targetType)}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? 'bg-[#174C32] text-white border-[#C49A45] shadow-ayur-md -translate-y-1'
                    : 'bg-[#FAF7EE]/60 border-[#78966B]/25 hover:border-[#C49A45] hover:bg-white hover:shadow-ayur-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-xs ${
                      isSelected 
                        ? 'bg-[#C49A45] text-white' 
                        : 'bg-white text-[#174C32] group-hover:bg-[#174C32] group-hover:text-white border border-[#78966B]/30'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-[#FAF7EE]' : 'bg-[#EBF2E8] text-[#174C32]'
                    }`}>
                      {card.stat}
                    </span>
                  </div>

                  <h3 className={`text-base font-serif font-bold mb-2 ${
                    isSelected ? 'text-white' : 'text-[#174C32] group-hover:text-[#C49A45]'
                  }`}>
                    {card.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    isSelected ? 'text-[#FAF7EE]/80' : 'text-[#58635B]'
                  }`}>
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-current/10 flex items-center justify-between">
                  <span className="text-xs font-semibold">
                    {isSelected ? 'Active Filter' : 'Explore Resources'}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isSelected ? 'text-[#C49A45]' : 'text-[#78966B]'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Search & Filter Interface Section */}
        <div id="pyqs" className="bg-[#FAF7EE] rounded-3xl border border-[#78966B]/25 p-6 lg:p-8 shadow-sm">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#174C32]">
                Explore Materials & Solved PYQs
              </h3>
              <p className="text-xs text-[#58635B]">
                Filter by subject, course, or keyword to preview or download
              </p>
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#78966B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search notes, shlokas, papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#78966B]/30 rounded-xl text-xs sm:text-sm text-[#242B25] placeholder-[#7E8A81] focus:outline-none focus:border-[#C49A45] shadow-xs"
              />
            </div>
          </div>

          {/* Subject & Type Filter Selectors */}
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-[#78966B]/20 text-xs">
            <span className="text-[#58635B] font-bold flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#C49A45]" />
              Filter By:
            </span>

            {/* Resource Type Dropdown Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-1.5 bg-white border border-[#78966B]/30 rounded-lg text-xs text-[#174C32] font-semibold focus:outline-none focus:border-[#C49A45]"
            >
              {materialTypes.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            {/* Subject Dropdown Filter */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-3 py-1.5 bg-white border border-[#78966B]/30 rounded-lg text-xs text-[#174C32] font-semibold focus:outline-none focus:border-[#C49A45]"
            >
              {materialSubjects.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            {(searchQuery || selectedSubject !== 'All Subjects' || selectedType !== 'All Resource Types') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSubject('All Subjects');
                  setSelectedType('All Resource Types');
                }}
                className="text-xs text-[#C49A45] font-bold hover:underline ml-auto"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Results Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMaterials.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl border border-[#78966B]/20 hover:border-[#C49A45] p-5 shadow-xs hover:shadow-ayur-sm transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-2.5">
                    <span className="px-2 py-0.5 bg-[#EBF2E8] text-[#174C32] font-bold rounded-md">
                      {item.type}
                    </span>
                    <span className="text-[#C49A45] font-bold">
                      ★ {item.rating}
                    </span>
                  </div>

                  <h4 className="text-sm font-serif font-bold text-[#174C32] group-hover:text-[#C49A45] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#58635B] mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#FAF7EE] flex items-center justify-between">
                  <span className="text-[11px] text-[#78966B] font-medium">
                    {item.format} · {item.pages || item.size}
                  </span>

                  <button
                    onClick={() => onPreviewMaterial(item)}
                    className="px-3 py-1.5 bg-[#FAF7EE] hover:bg-[#174C32] text-[#174C32] hover:text-white rounded-lg text-xs font-semibold transition border border-[#78966B]/30 hover:border-[#174C32] flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview Sample</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredMaterials.length === 0 && (
            <div className="py-12 text-center text-[#58635B]">
              <p className="text-sm font-semibold">No learning resources matched your filter criteria.</p>
              <p className="text-xs text-[#7E8A81] mt-1">Try switching subjects or resetting search queries.</p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
