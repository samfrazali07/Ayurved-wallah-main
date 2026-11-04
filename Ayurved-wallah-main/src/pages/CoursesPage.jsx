import React from 'react';
import Courses from '../components/Courses';

export default function CoursesPage({ onSelectCourse, onEnquireCourse }) {
  return (
    <div className="pt-8">
      <Courses
        onSelectCourse={onSelectCourse}
        onEnquireCourse={onEnquireCourse}
      />
    </div>
  );
}
