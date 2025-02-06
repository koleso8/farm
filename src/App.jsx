import { useEffect } from 'react';
import { scrollToTop } from './helpers/scrollToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Contract from './components/Contract';
import Faqs from './components/Faqs';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
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

export default App;
