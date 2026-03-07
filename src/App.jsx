import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatButtons from './components/FloatButtons';

function App() {
  return (
    <div className="font-outfit text-slate-900 bg-slate-50 antialiased selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <SocialProof />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <FloatButtons />
    </div>
  );
}

export default App;
