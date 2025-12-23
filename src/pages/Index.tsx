import { useState } from 'react';
import { Toaster } from 'sonner';
import GameMenu from '@/components/portfolio/GameMenu';
import SectionPanel from '@/components/portfolio/SectionPanel';

type SectionType = 'about' | 'skills' | 'experience' | 'projects' | 'contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionType | null>(null);

  const handleSectionSelect = (section: SectionType) => {
    setActiveSection(section);
  };

  const handleClosePanel = () => {
    setActiveSection(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Game Menu */}
      <GameMenu 
        onSelect={handleSectionSelect} 
        activeSection={activeSection} 
      />
      
      {/* Section Panel Overlay */}
      <SectionPanel 
        activeSection={activeSection} 
        onClose={handleClosePanel} 
      />
      
      {/* Toast notifications */}
      <Toaster 
        position="bottom-right" 
        theme="dark"
        toastOptions={{
          style: {
            background: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--foreground))',
          },
        }}
      />
    </div>
  );
};

export default Index;
