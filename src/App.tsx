import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ContactSection } from './components/contact/ContactSection';
import { ContactModal } from './components/contact/ContactModal';
import { Toast } from './components/ui/Toast';

export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type?: 'success' | 'info' | 'error' }>({
    show: false,
    message: '',
    type: 'success',
  });

  const handleDownloadCV = () => {
    // Clean CV download handler - opens contact modal or triggers resume link
    setToast({
      show: true,
      message: 'Resume download requested. You can also get in touch directly via the contact form!',
      type: 'info',
    });
  };

  const handleShowToast = (message: string) => {
    setToast({
      show: true,
      message,
      type: 'success',
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-[#080c16] light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300 relative selection:bg-indigo-500 selection:text-white">
      {/* Background Dot Matrix Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 dark:opacity-30 light:opacity-40 pointer-events-none -z-10" />

      {/* Top Navigation Bar */}
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Main Sections */}
      <main className="space-y-4">
        <HeroSection onDownloadCV={handleDownloadCV} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection onSuccessToast={handleShowToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Contact Modal Dialog */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSuccessToast={handleShowToast}
      />

      {/* Floating Toast Notification */}
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
}

export default App;
