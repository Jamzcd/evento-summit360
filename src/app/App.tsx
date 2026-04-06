import '../styles/summit.css';
import { AuroraCanvas } from './components/AuroraCanvas';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PainSection } from './components/PainSection';
import { Speakers } from './components/Speakers';
import { Schedule } from './components/Schedule';
import { Tickets } from './components/Tickets';
import { Location } from './components/Location';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#020818', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-title)' }}>
      {/* Fixed aurora background */}
      <AuroraCanvas />

      {/* Fixed background gradient base */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(180deg, #020818 0%, #0a1a4a 50%, #020818 100%)',
          zIndex: -1,
        }}
      />

      {/* Navigation */}
      <Nav />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />

        <div className="divider-gold" />
        <About />

        <div className="divider-gold" />
        <PainSection />

        <div className="divider-gold" />
        <Speakers />

        <div className="divider-gold" />

        <div
          style={{
            background:
              'linear-gradient(180deg, rgba(2,8,24,0) 0%, rgba(5,15,50,0.4) 50%, rgba(2,8,24,0) 100%)',
          }}
        >
          <Schedule />
        </div>

        <div className="divider-gold" />
        <Tickets />

        <div className="divider-gold" />
        <Location />

        <div className="divider-gold" />
        <CTAFinal />
      </main>

      <Footer />
    </div>
  );
}