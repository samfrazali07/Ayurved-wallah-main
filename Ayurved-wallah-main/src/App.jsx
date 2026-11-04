import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickAccess from './components/QuickAccess';
import Courses from './components/Courses';
import StudentDashboard from './components/StudentDashboard';
import StudyMaterials from './components/StudyMaterials';
import ClassSchedule from './components/ClassSchedule';
import FeeStructure from './components/FeeStructure';
import WhyChooseUs from './components/WhyChooseUs';
import ResultsTestimonials from './components/ResultsTestimonials';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

// Modals
import SearchModal from './components/SearchModal';
import LoginModal from './components/LoginModal';
import CourseDetailModal from './components/CourseDetailModal';
import NotesPreviewModal from './components/NotesPreviewModal';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationInitialCourse, setConsultationInitialCourse] = useState(null);

  const [activeCourseDetail, setActiveCourseDetail] = useState(null);
  const [activeMaterialPreview, setActiveMaterialPreview] = useState(null);

  // Handlers
  const handleOpenConsultationWithCourse = (course) => {
    setConsultationInitialCourse(course);
    setConsultationOpen(true);
  };

  const handleJoinClass = (cls) => {
    // If live, prompt login modal to access classroom, or join
    setLoginOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#242B25] font-sans flex flex-col selection:bg-[#C49A45] selection:text-white">
      
      {/* Responsive Sticky Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
        onOpenConsultation={() => {
          setConsultationInitialCourse('General Admission Guidance');
          setConsultationOpen(true);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Split Layout Hero Section */}
        <Hero
          onExploreCourses={() => {
            const el = document.getElementById('courses');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenConsultation={() => setConsultationOpen(true)}
          onOpenLogin={() => setLoginOpen(true)}
        />

        {/* 6 Horizontally Aligned Quick Access Cards */}
        <QuickAccess
          onOpenConsultation={() => {
            setConsultationInitialCourse('Academic Doubt Support');
            setConsultationOpen(true);
          }}
        />

        {/* Courses Section with Filter Tabs */}
        <Courses
          onSelectCourse={(course) => setActiveCourseDetail(course)}
          onEnquireCourse={(course) => handleOpenConsultationWithCourse(course)}
        />

        {/* Student Dashboard Preview Section */}
        <StudentDashboard
          onOpenLogin={() => setLoginOpen(true)}
          onOpenSchedule={() => {
            const el = document.getElementById('schedule');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Study Materials & Search/Filter Section */}
        <StudyMaterials
          onPreviewMaterial={(material) => setActiveMaterialPreview(material)}
        />

        {/* Class Schedule Section */}
        <ClassSchedule
          onJoinClass={handleJoinClass}
        />

        {/* Fee Structure Section with Comparison Cards */}
        <FeeStructure
          onEnquireFee={(plan) => handleOpenConsultationWithCourse(plan)}
        />

        {/* Why Choose Ayurved Wallah (7 Pillars) */}
        <WhyChooseUs />

        {/* Results, Testimonials & Selections */}
        <ResultsTestimonials />

        {/* About Ayurved Wallah, Faculty & Contact */}
        <AboutContact
          onOpenConsultation={() => setConsultationOpen(true)}
        />

      </main>

      {/* Dark Forest Green Footer */}
      <Footer
        onOpenSearch={() => setSearchOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
        onOpenConsultation={() => {
          setConsultationInitialCourse('Helpline Academic Callback');
          setConsultationOpen(true);
        }}
      />

      {/* Interactive Global Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectCourse={(course) => setActiveCourseDetail(course)}
        onSelectMaterial={(material) => setActiveMaterialPreview(material)}
      />

      {/* Student & Faculty Login Modal */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={() => {
          const el = document.getElementById('dashboard-preview');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Course Detail & Syllabus Modal */}
      <CourseDetailModal
        course={activeCourseDetail}
        isOpen={Boolean(activeCourseDetail)}
        onClose={() => setActiveCourseDetail(null)}
        onEnquire={(course) => handleOpenConsultationWithCourse(course)}
      />

      {/* Note & Sample PDF Reader Modal */}
      <NotesPreviewModal
        material={activeMaterialPreview}
        isOpen={Boolean(activeMaterialPreview)}
        onClose={() => setActiveMaterialPreview(null)}
      />

      {/* Admission Enquiry & Doubt Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        initialCourse={consultationInitialCourse}
        onClose={() => setConsultationOpen(false)}
      />

    </div>
  );
}
