import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeSeo from './components/HomeSeo';
import TrustBar from './components/TrustBar';
import SocialProof from './components/SocialProof';
import FloatButtons from './components/FloatButtons';
import WhyChooseUs from './components/WhyChooseUs';
import LocalSEO from './components/LocalSEO';
import { pageLoaders } from './pageLoaders';

const Contact = lazy(() => import('./components/Contact'));

const lazyPages = Object.fromEntries(
  Object.entries(pageLoaders).map(([name, load]) => [name, lazy(load)]),
);

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

function App({ router: Router = BrowserRouter, routerProps, pages = lazyPages } = {}) {
  return (
    <Router {...routerProps}>
      <ScrollToTop />
      <div className="font-outfit text-slate-900 bg-slate-50 antialiased selection:bg-brand-primary selection:text-white overflow-x-hidden flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<RouteElement><PageWrapper><pages.About /></PageWrapper></RouteElement>} />
            <Route path="/services" element={<RouteElement><PageWrapper><pages.Services /></PageWrapper></RouteElement>} />
            <Route path="/gallery" element={<RouteElement><PageWrapper><pages.Gallery /></PageWrapper></RouteElement>} />
            <Route path="/blog" element={<RouteElement><PageWrapper><pages.Blog /></PageWrapper></RouteElement>} />
            <Route path="/company-profile" element={<RouteElement><pages.CompanyProfile /></RouteElement>} />
            <Route path="/led-van-advertising" element={<RouteElement><pages.LedVanAdvertising /></RouteElement>} />
            <Route path="/lookwalker" element={<Navigate to="/lookwalker-advertising" replace />} />
            <Route path="/lookwalker-advertising" element={<RouteElement><pages.Lookwalker /></RouteElement>} />
            <Route path="/led-wall" element={<Navigate to="/led-wall-rental" replace />} />
            <Route path="/led-wall-rental" element={<RouteElement><pages.LedWall /></RouteElement>} />
            <Route path="/whatsapp-bulk-messaging" element={<RouteElement><pages.WhatsAppBulk /></RouteElement>} />
            <Route path="/vehicle-branding" element={<RouteElement><pages.VehicleBranding /></RouteElement>} />
            <Route path="/locations" element={<RouteElement><PageWrapper><pages.Locations /></PageWrapper></RouteElement>} />
            <Route path="/locations/thrissur" element={<RouteElement><PageWrapper><pages.ThrissurLocation /></PageWrapper></RouteElement>} />
            <Route path="/locations/kochi" element={<RouteElement><PageWrapper><pages.KochiLocation /></PageWrapper></RouteElement>} />
            <Route path="/locations/kozhikode" element={<RouteElement><PageWrapper><pages.KozhikodeLocation /></PageWrapper></RouteElement>} />
            <Route path="/locations/trivandrum" element={<RouteElement><PageWrapper><pages.TrivandrumLocation /></PageWrapper></RouteElement>} />
            <Route path="/locations/malappuram" element={<RouteElement><PageWrapper><pages.MalappuramLocation /></PageWrapper></RouteElement>} />
            <Route path="/locations/kannur" element={<RouteElement><PageWrapper><pages.KannurLocation /></PageWrapper></RouteElement>} />
            <Route path="/locations/palakkad" element={<RouteElement><PageWrapper><pages.PalakkadLocation /></PageWrapper></RouteElement>} />
            <Route path="/locations/kottayam" element={<RouteElement><PageWrapper><pages.KottayamLocation /></PageWrapper></RouteElement>} />
            <Route path="*" element={<RouteElement><PageWrapper><pages.NotFound /></PageWrapper></RouteElement>} />
          </Routes>
        </main>

        <DeferredSection height="min-h-[760px]">
          <Suspense fallback={<LoadingBlock height="min-h-[760px]" />}>
            <Contact />
          </Suspense>
        </DeferredSection>
        <Suspense fallback={<LoadingBlock height="min-h-[280px]" />}>
          <pages.Footer />
        </Suspense>
        <FloatButtons />
      </div>
    </Router>
  );
}

export default App;
