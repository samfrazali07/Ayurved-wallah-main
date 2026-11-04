import React from 'react';
import ClassSchedule from '../components/ClassSchedule';

export default function ClassSchedulePage({ onJoinClass }) {
  return <ClassSchedule onJoinClass={onJoinClass} />;
}
