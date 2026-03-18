import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatButtons from './components/FloatButtons';
import WhyChooseUs from './components/WhyChooseUs';
import LocalSEO from './components/LocalSEO';
import LedVanAdvertising from './components/LedVanAdvertising';
import HomeSeo from './components/HomeSeo';
import NotFound from './components/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <>
    <HomeSeo />
    <Hero />
    <TrustBar />
    <WhyChooseUs />
    <SocialProof />
    <LocalSEO />
  </>
);

const PageWrapper = ({ children }) => (
  <div className="pt-28 pb-16 min-h-[70vh]">
    {children}
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-outfit text-slate-900 bg-slate-50 antialiased selection:bg-brand-primary selection:text-white overflow-x-hidden flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/led-van-advertising" element={<LedVanAdvertising />} />
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </main>

        <Contact />
        <Footer />
        <FloatButtons />
      </div>
    </BrowserRouter>
  );
}

export default App;
