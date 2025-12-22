import { useState } from 'react';
import { Toaster } from 'sonner';
import Scene3D from '@/components/portfolio/Scene3D';
import SectionPanel from '@/components/portfolio/SectionPanel';

type SectionType = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionType | null>(null);

  const handleSectionSelect = (section: SectionType) => {
    setActiveSection(section);
  };

  const handleClosePanel = () => {
    setActiveSection(null);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* 3D Scene */}
      <Scene3D 
        onSectionSelect={handleSectionSelect} 
        activeSection={activeSection} 
      />
      
      {/* Section Panel Overlay */}
      <SectionPanel 
        activeSection={activeSection} 
        onClose={handleClosePanel} 
      />
      
      {/* Toast notifications */}
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
};

export default Index;
