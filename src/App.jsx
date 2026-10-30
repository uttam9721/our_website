import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import NpmSpotlight from './components/NpmSpotlight';
import Metrics from './components/Metrics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setCommandPaletteOpen(true);
    window.addEventListener('open-command-palette', handleOpen);
    return () => window.removeEventListener('open-command-palette', handleOpen);
  }, []);

  return (
    <div className="bg-[#060913] text-slate-200 min-h-screen selection:bg-sky-500/30 selection:text-white">
      {/* Global Notification Toaster with Dark Aesthetic */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0c1220',
            color: '#f1f5f9',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
            fontSize: '13px',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          },
          duration: 3000,
        }}
      />

      {/* Keyboard-Accessible Command Palette */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
      />

      {/* Main App Layout */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <main>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <NpmSpotlight />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
