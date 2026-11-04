import React from 'react';
import ClassSchedule from '../components/ClassSchedule';

export default function ClassSchedulePage({ onJoinClass }) {
  return (
    <div className="pt-8">
      <ClassSchedule onJoinClass={onJoinClass} />
    </div>
  );
}
