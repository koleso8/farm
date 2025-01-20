import { useEffect } from 'react';
import { scrollToTop } from '../helpers/scrollToTop';
import Hero from '../components/Hero';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tokenomics from '../components/Tokenomics';
import Contract from '../components/Contract';
import Faqs from '../components/FAQS';
import Gallery from '../components/Gallery';

const HomePage = () => {
  useEffect(() => scrollToTop());

  return (
    <div className="lg:pt-[40px] ">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Contract />
      <Faqs />
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomePage;
