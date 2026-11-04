import React, { useState } from 'react';
import { 
  User, PlayCircle, BookOpen, FileCheck, BarChart3, 
  GraduationCap, Calendar, Clock, ArrowRight, ShieldCheck, 
  Sparkles, Award, CheckCircle2, ChevronRight 
} from 'lucide-react';

export default function StudentDashboard({ onOpenLogin, onOpenSchedule }) {
  const [activeTab, setActiveTab] = useState('live');

  return (
    <section id="dashboard-preview" className="py-16 md:py-24 bg-[#FAF7EE] border-b border-[#78966B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Prominent Dark Green Container */}
        <div className="bg-[#174C32] rounded-3xl border-2 border-[#C49A45]/40 shadow-2xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          
          {/* Subtle gold ornamental glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#C49A45]/15 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#78966B]/15 blur-3xl pointer-events-none"></div>

          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C49A45]/40 text-[#FAF7EE] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C49A45]" />
                <span>Student Learning Management System (LMS)</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
                Student Dashboard
              </h2>
              <p className="text-sm sm:text-base text-[#FAF7EE]/80 max-w-xl">
                Continue your learning journey — access your enrolled batches, live stream lectures, daily practice papers and performance reports in one centralized portal.
              </p>
            </div>

            {/* Quick Action CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={onOpenLogin}
                className="px-6 py-3.5 bg-[#C49A45] hover:bg-[#d4a84e] text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2 group"
              >
                <User className="w-4 h-4" />
                <span>Student Login Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>

          {/* Interactive LMS Dashboard Simulator Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            
            {/* Left Nav / Tabs */}
            <div className="lg:col-span-4 space-y-2">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C49A45] flex items-center justify-center text-white font-serif font-bold text-sm">
                    DA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Dr. Ananya Sharma</span>
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    </div>
                    <div className="text-[11px] text-[#FAF7EE]/70">
                      Roll: AW-2025-0842 · AIAPGET Batch
                    </div>
                  </div>
                </div>
              </div>

              {[
                { id: 'live', label: 'Live Classes', icon: PlayCircle, badge: 'Live Today' },
                { id: 'materials', label: 'Study Materials', icon: BookOpen, badge: '64 PDFs' },
                { id: 'tests', label: 'Mock Tests', icon: FileCheck, badge: 'NTA CBT' },
                { id: 'performance', label: 'Performance Report', icon: BarChart3, badge: 'AIR 14' },
                { id: 'my-courses', label: 'My Courses', icon: GraduationCap, badge: '2 Active' }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full p-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? 'bg-white text-[#174C32] shadow-md font-bold'
                        : 'bg-white/5 hover:bg-white/10 text-[#FAF7EE]/90 border border-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#174C32]' : 'text-[#C49A45]'}`} />
                      <span>{tab.label}</span>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      isActive ? 'bg-[#EBF2E8] text-[#174C32]' : 'bg-white/10 text-white/80'
                    }`}>
                      {tab.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Interactive Dashboard Viewport */}
            <div className="lg:col-span-8 bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-6 backdrop-blur-md min-h-[340px] flex flex-col justify-between">
              
              {/* Tab 1: Live Classes */}
              {activeTab === 'live' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#C49A45] flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      Today's Live Class Schedule
                    </h3>
                    <span className="text-xs text-[#FAF7EE]/70 font-mono">Tuesday · Nov 03</span>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl border border-white/10 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2 py-0.5 bg-red-500/80 text-white text-[10px] font-bold rounded-full animate-pulse flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        LIVE NOW
                      </span>
                      <span className="text-xs text-[#FAF7EE]/80">07:30 PM – 09:30 PM</span>
                    </div>
                    <div>
                      <h4 className="text-base font-serif font-bold text-white">
                        Charaka Chikitsa Sthana: Gulma & Jvara Chikitsa In-Depth
                      </h4>
                      <p className="text-xs text-[#FAF7EE]/80 mt-1">
                        Faculty: Dr. V. K. Shastri (MD Kayachikitsa) · Chakrapani Tika Notes included
                      </p>
                    </div>
                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={onOpenLogin}
                        className="px-4 py-2 bg-[#C49A45] text-white font-bold text-xs rounded-lg hover:bg-[#d4a84e] transition flex items-center gap-1.5"
                      >
                        <PlayCircle className="w-3.5 h-3.5" />
                        <span>Join Live Classroom (428 Present)</span>
                      </button>
                      <button 
                        onClick={onOpenSchedule}
                        className="px-3 py-2 bg-white/10 text-white text-xs rounded-lg hover:bg-white/20 transition"
                      >
                        View Full Timetable
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-[#FAF7EE]/60 uppercase font-semibold block">Next Upcoming Session</span>
                      <span className="font-semibold text-white">Dravyaguna: Rasa Panchaka & 50 Plants (10:00 PM)</span>
                    </div>
                    <span className="text-[11px] text-[#C49A45]">In 32 mins</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Study Materials */}
              {activeTab === 'materials' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#C49A45] flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Downloaded Notes & Digital Handouts
                    </h3>
                    <span className="text-xs text-[#FAF7EE]/70">64 Notes Available</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                      <div className="text-[10px] text-[#C49A45] font-semibold uppercase">PDF Notes</div>
                      <div className="text-xs font-bold text-white mt-1">Dravyaguna 50 Plants Compendium</div>
                      <div className="text-[11px] text-[#FAF7EE]/70 mt-1">Updated 2 days ago · 64 Pages</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                      <div className="text-[10px] text-[#C49A45] font-semibold uppercase">Samhita Shlokas</div>
                      <div className="text-xs font-bold text-white mt-1">Charaka Sutrasthana Chatuska Wise</div>
                      <div className="text-[11px] text-[#FAF7EE]/70 mt-1">Includes Audio Recitations</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                      <div className="text-[10px] text-[#C49A45] font-semibold uppercase">Surgical Diagrams</div>
                      <div className="text-xs font-bold text-white mt-1">Sushruta 107 Marma Sharir 3D Maps</div>
                      <div className="text-[11px] text-[#FAF7EE]/70 mt-1">High-Res Color Plates</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                      <div className="text-[10px] text-[#C49A45] font-semibold uppercase">Solved Papers</div>
                      <div className="text-xs font-bold text-white mt-1">AIAPGET 2024 Solved with Tika</div>
                      <div className="text-[11px] text-[#FAF7EE]/70 mt-1">Verified Answer Key</div>
                    </div>
                  </div>

                  <div className="pt-2 text-right">
                    <a href="#study-materials" className="text-xs text-[#C49A45] hover:underline font-bold inline-flex items-center gap-1">
                      Access All Digital Learning Resources &rarr;
                    </a>
                  </div>
                </div>
              )}

              {/* Tab 3: Mock Tests */}
              {activeTab === 'tests' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#C49A45] flex items-center gap-2">
                      <FileCheck className="w-4 h-4" />
                      All-India NTA Pattern Mock Tests
                    </h3>
                    <span className="text-xs text-[#FAF7EE]/70">Score: 382 / 480</span>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">AIAPGET Grand National Mock #14</span>
                      <span className="text-[#C49A45] font-bold">AIR 14 / 8,420</span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-[#C49A45] h-2.5 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#FAF7EE]/80 pt-1">
                      <span>Percentile: 98.6%</span>
                      <span>Accuracy: 89.2%</span>
                      <span>Negative Marks: -8</span>
                    </div>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-white">Next Scheduled Test: Dravyaguna Subject Grand</span>
                      <span className="text-[11px] text-[#FAF7EE]/70 block">Sunday, 10:00 AM – 12:00 PM (120 Questions)</span>
                    </div>
                    <button 
                      onClick={onOpenLogin}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold"
                    >
                      Syllabus
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 4: Performance Report */}
              {activeTab === 'performance' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#C49A45] flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Personalized Subject Diagnostics
                    </h3>
                    <span className="text-xs text-[#FAF7EE]/70">Weekly Progress</span>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { subject: 'Charaka Samhita', score: 94, status: 'Strong Mastery' },
                      { subject: 'Dravyaguna Vijnana', score: 88, status: 'Good Retention' },
                      { subject: 'Sushruta & Shalya', score: 82, status: 'Needs Revision on Marmas' },
                      { subject: 'Modern Medicine & Research', score: 76, status: 'Practice MCQs' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/10 p-2.5 rounded-xl border border-white/5">
                        <div className="flex justify-between text-xs text-white mb-1">
                          <span className="font-semibold">{item.subject}</span>
                          <span className="text-[#C49A45] font-bold">{item.score}% ({item.status})</span>
                        </div>
                        <div className="w-full bg-black/20 rounded-full h-1.5">
                          <div 
                            className="bg-gradient-to-r from-[#78966B] to-[#C49A45] h-1.5 rounded-full" 
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 5: My Courses */}
              {activeTab === 'my-courses' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#C49A45] flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      Enrolled Academic Programs
                    </h3>
                    <span className="text-xs text-[#FAF7EE]/70">2 Active Batches</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 bg-white/10 rounded-xl border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">AIAPGET Achiever's Masterclass 2025–26</div>
                        <div className="text-[11px] text-[#FAF7EE]/70">Validity: July 2026 · 142/250 Hours Watched</div>
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-green-500/20 text-green-300 rounded font-semibold border border-green-500/30">
                        Active
                      </span>
                    </div>

                    <div className="p-3 bg-white/10 rounded-xl border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Samhita Parayana & Shloka Decoding Special</div>
                        <div className="text-[11px] text-[#FAF7EE]/70">Weekend Batch · 80% Complete</div>
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-green-500/20 text-green-300 rounded font-semibold border border-green-500/30">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom login nudge */}
              <div className="pt-4 mt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAF7EE]/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C49A45]" />
                  <span>Existing enrolled student? Log in to launch full web app.</span>
                </div>
                <button
                  onClick={onOpenLogin}
                  className="text-[#C49A45] hover:text-white font-bold underline transition"
                >
                  Enter Portal Credentials &rarr;
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
