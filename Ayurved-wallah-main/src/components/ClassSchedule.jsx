import React, { useState } from 'react';
import { 
  Calendar, Clock, Video, User, CheckCircle2, 
  ExternalLink, Sparkles, Filter, ChevronRight 
} from 'lucide-react';
import { scheduleData, scheduleBatches } from '../data/scheduleData';

export default function ClassSchedule({ onJoinClass }) {
  const [selectedBatch, setSelectedBatch] = useState("All Batches");
  const [selectedDay, setSelectedDay] = useState("All");

  const filteredClasses = scheduleData.filter((cls) => {
    const matchesBatch = selectedBatch === "All Batches" || cls.batch === selectedBatch;
    const matchesDay = selectedDay === "All" || cls.day === selectedDay;
    return matchesBatch && matchesDay;
  });

  return (
    <section id="schedule" className="py-16 md:py-24 bg-[#FAF7EE] border-b border-[#78966B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C49A45]/40 text-[#174C32] text-xs font-semibold uppercase tracking-wider shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-[#C49A45]" />
              <span>Live Timetable & Clinical Lectures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#174C32] tracking-tight">
              Class Schedule
            </h2>
            <p className="text-sm sm:text-base text-[#58635B]">
              Track your upcoming live interactive batches, doubt sessions, and Samhita recitations.
            </p>
          </div>

          {/* Day / Filter controls */}
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Today', 'Tomorrow'].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                  selectedDay === day
                    ? 'bg-[#174C32] text-white shadow-xs'
                    : 'bg-white text-[#58635B] border border-[#78966B]/30 hover:border-[#C49A45]'
                }`}
              >
                {day === 'All' ? 'Full Week' : day}
              </button>
            ))}
          </div>
        </div>

        {/* Batch Filter Bar */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#58635B] font-bold">Select Batch:</span>
          {scheduleBatches.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBatch(b)}
              className={`px-3 py-1 rounded-lg transition ${
                selectedBatch === b
                  ? 'bg-[#C49A45] text-white font-bold'
                  : 'bg-white text-[#174C32] border border-[#78966B]/20 hover:bg-[#FAF7EE]'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Desktop Table View (Hidden on mobile) */}
        <div className="hidden lg:block bg-white rounded-3xl border border-[#78966B]/25 shadow-ayur-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#174C32] text-white text-xs font-serif uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Status & Time</th>
                <th className="py-4 px-6 font-bold">Subject & Topic</th>
                <th className="py-4 px-6 font-bold">Course / Batch</th>
                <th className="py-4 px-6 font-bold">Faculty Member</th>
                <th className="py-4 px-6 text-right font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FAF7EE] text-sm">
              {filteredClasses.map((cls) => (
                <tr key={cls.id} className="hover:bg-[#FAF7EE]/60 transition">
                  {/* Status & Time */}
                  <td className="py-4 px-6 align-top">
                    <div className="space-y-1">
                      {cls.statusType === 'live' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-700 text-[11px] font-bold border border-red-200 animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-red-600"></span>
                          Live Now
                        </span>
                      )}
                      {cls.statusType === 'upcoming' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-800 text-[11px] font-bold border border-amber-200">
                          <Clock className="w-3 h-3" />
                          {cls.status}
                        </span>
                      )}
                      {cls.statusType === 'scheduled' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EBF2E8] text-[#174C32] text-[11px] font-bold">
                          {cls.day}
                        </span>
                      )}
                      <div className="text-xs font-bold text-[#174C32] mt-1">{cls.time}</div>
                      <div className="text-[11px] text-[#78966B]">{cls.date}</div>
                    </div>
                  </td>

                  {/* Subject & Topic */}
                  <td className="py-4 px-6 align-top max-w-sm">
                    <h4 className="font-serif font-bold text-sm text-[#174C32] leading-snug">
                      {cls.subject}
                    </h4>
                    <p className="text-xs text-[#58635B] mt-1 leading-relaxed">
                      {cls.topicHighlights}
                    </p>
                  </td>

                  {/* Course / Batch */}
                  <td className="py-4 px-6 align-top">
                    <span className="inline-block px-2.5 py-1 bg-[#FAF7EE] border border-[#78966B]/20 text-[#174C32] rounded-lg text-xs font-semibold">
                      {cls.batch}
                    </span>
                  </td>

                  {/* Faculty */}
                  <td className="py-4 px-6 align-top">
                    <div className="font-semibold text-xs text-[#242B25]">{cls.faculty}</div>
                    <div className="text-[11px] text-[#78966B]">{cls.qualification}</div>
                  </td>

                  {/* Action */}
                  <td className="py-4 px-6 align-top text-right">
                    <button
                      onClick={() => onJoinClass(cls)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition shadow-xs inline-flex items-center gap-1.5 ${
                        cls.statusType === 'live'
                          ? 'bg-[#174C32] hover:bg-[#216343] text-white shadow-md'
                          : 'bg-[#FAF7EE] hover:bg-[#174C32] hover:text-white text-[#174C32] border border-[#78966B]/30'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>{cls.statusType === 'live' ? 'Join Class' : 'Set Reminder'}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Card View (Hidden on desktop) */}
        <div className="lg:hidden space-y-4">
          {filteredClasses.map((cls) => (
            <div 
              key={cls.id}
              className="p-5 bg-white rounded-2xl border border-[#78966B]/25 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  cls.statusType === 'live'
                    ? 'bg-red-100 text-red-700 animate-pulse'
                    : cls.statusType === 'upcoming'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-[#EBF2E8] text-[#174C32]'
                }`}>
                  {cls.status}
                </span>
                <span className="text-xs font-bold text-[#174C32]">
                  {cls.time}
                </span>
              </div>

              <div>
                <h4 className="font-serif font-bold text-sm text-[#174C32]">
                  {cls.subject}
                </h4>
                <p className="text-xs text-[#58635B] mt-1">
                  {cls.topicHighlights}
                </p>
              </div>

              <div className="pt-2 border-t border-[#FAF7EE] flex items-center justify-between text-xs text-[#58635B]">
                <div>
                  <span className="font-semibold text-[#174C32]">{cls.faculty}</span>
                  <span className="block text-[10px] text-[#78966B]">{cls.batch}</span>
                </div>
                <button
                  onClick={() => onJoinClass(cls)}
                  className="px-4 py-2 bg-[#174C32] text-white rounded-xl text-xs font-bold hover:bg-[#216343] transition flex items-center gap-1.5 shadow-xs"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>{cls.statusType === 'live' ? 'Join Class' : 'Reminder'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full Schedule Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#58635B] mb-2">
            All live classes include instant automated cloud recording access within 2 hours of session completion.
          </p>
          <a
            href="#dashboard-preview"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C49A45] hover:underline"
          >
            <span>View Full Monthly Academic Calendar in Student Portal</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
