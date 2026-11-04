import React from 'react';
import Courses from '../components/Courses';

export default function CoursesPage({ onSelectCourse, onEnquireCourse }) {
  return (
    <Courses
      onSelectCourse={onSelectCourse}
      onEnquireCourse={onEnquireCourse}
    />
  );
}
