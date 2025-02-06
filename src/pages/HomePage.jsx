import { lazy, Suspense, useEffect } from 'react';
import { scrollToTop } from '../helpers/scrollToTop';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tokenomics from '../components/Tokenomics';
import Contract from '../components/Contract';
import Faqs from '../components/Faqs';
import Gallery from '../components/Gallery';

const HomePage = () => {
  useEffect(() => scrollToTop());
  const About = lazy(() => import('../components/About'));

  return (
    <div className="lg:pt-[40px] ">
      <Header />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Tokenomics />
      <Contract />
      <Faqs />
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomePage;
