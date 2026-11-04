import React from 'react';
import StudyMaterials from '../components/StudyMaterials';

export default function StudyMaterialsPage({ onPreviewMaterial, initialType }) {
  return (
    <div className="pt-8">
      <StudyMaterials
        onPreviewMaterial={onPreviewMaterial}
        initialType={initialType}
      />
    </div>
  );
}
