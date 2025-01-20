import Container from './Container';
import Navigation from './Navigation';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <footer className="w-full relative z-10 pt-12 ">
      <Container className={'flex-col'}>
        <h3
          className="text-4xl mb-10 relative"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img
            src="cloud-left.png"
            alt="cloud-left"
            className="absolute w-10 top-4 -right-9 rotate-45"
          />
          <img
            src="cloud-right.png"
            alt="cloud-right"
            className="absolute w-10 top-5 -left-8 -rotate-45"
          />
          FART WITH US
        </h3>
        <Navigation
          className={'flex-wrap md:max-h-[120px] gap-6 md:gap-x-12'}
          footer={true}
        />
        <p
          className="py-16 text-center text-sm md:text-2xl tracking-wider"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
        >
          © 2025 $FARTRAMP. ALL RIGHTS RESERVED.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
