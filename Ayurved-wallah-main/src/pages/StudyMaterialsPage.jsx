import React from 'react';
import StudyMaterials from '../components/StudyMaterials';

export default function StudyMaterialsPage({ onPreviewMaterial, initialType }) {
  return (
    <StudyMaterials
      onPreviewMaterial={onPreviewMaterial}
      initialType={initialType}
    />
  );
}
