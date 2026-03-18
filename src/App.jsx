import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeSeo from './components/HomeSeo';
import TrustBar from './components/TrustBar';
import SocialProof from './components/SocialProof';
import FloatButtons from './components/FloatButtons';
import WhyChooseUs from './components/WhyChooseUs';
import LocalSEO from './components/LocalSEO';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Gallery = lazy(() => import('./components/Gallery'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const LedVanAdvertising = lazy(() => import('./components/LedVanAdvertising'));
const Locations = lazy(() => import('./components/Locations'));
const ThrissurLocation = lazy(() => import('./components/ThrissurLocation'));
const KochiLocation = lazy(() => import('./components/KochiLocation'));
const KozhikodeLocation = lazy(() => import('./components/KozhikodeLocation'));
const TrivandrumLocation = lazy(() => import('./components/TrivandrumLocation'));
const NotFound = lazy(() => import('./components/NotFound'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LoadingBlock = ({ height = 'min-h-[160px]' }) => (
  <div className={`${height} w-full animate-pulse bg-slate-50`} aria-hidden="true" />
);

const DeferredSection = ({ children, height }) => {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || shouldRender) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px 0px' }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={containerRef}>
      {shouldRender ? children : <LoadingBlock height={height} />}
    </div>
  );
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

const RouteElement = ({ children, height = 'min-h-[70vh]' }) => (
  <Suspense fallback={<LoadingBlock height={height} />}>
    {children}
  </Suspense>
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
            <Route path="/about" element={<RouteElement><PageWrapper><About /></PageWrapper></RouteElement>} />
            <Route path="/services" element={<RouteElement><PageWrapper><Services /></PageWrapper></RouteElement>} />
            <Route path="/gallery" element={<RouteElement><PageWrapper><Gallery /></PageWrapper></RouteElement>} />
            <Route path="/blog" element={<RouteElement><PageWrapper><Blog /></PageWrapper></RouteElement>} />
            <Route path="/led-van-advertising" element={<RouteElement><LedVanAdvertising /></RouteElement>} />
            <Route path="/locations" element={<RouteElement><PageWrapper><Locations /></PageWrapper></RouteElement>} />
            <Route path="/locations/thrissur" element={<RouteElement><PageWrapper><ThrissurLocation /></PageWrapper></RouteElement>} />
            <Route path="/locations/kochi" element={<RouteElement><PageWrapper><KochiLocation /></PageWrapper></RouteElement>} />
            <Route path="/locations/kozhikode" element={<RouteElement><PageWrapper><KozhikodeLocation /></PageWrapper></RouteElement>} />
            <Route path="/locations/trivandrum" element={<RouteElement><PageWrapper><TrivandrumLocation /></PageWrapper></RouteElement>} />
            <Route path="*" element={<RouteElement><PageWrapper><NotFound /></PageWrapper></RouteElement>} />
          </Routes>
        </main>

        <DeferredSection height="min-h-[760px]">
          <Suspense fallback={<LoadingBlock height="min-h-[760px]" />}>
            <Contact />
          </Suspense>
        </DeferredSection>
        <DeferredSection height="min-h-[280px]">
          <Suspense fallback={<LoadingBlock height="min-h-[280px]" />}>
            <Footer />
          </Suspense>
        </DeferredSection>
        <FloatButtons />
      </div>
    </BrowserRouter>
  );
}

export default App;
