import Button from './Button';
import Container from './Container';
import Logo from './Logo';
import Navigation from './Navigation';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container>
      <div className="flex flex-col items-center gap-4 relative">
        <Logo />
        <div className=" md:hidden ">
          <Navigation />
        </div>
        <h1
          className="font-bold text-4xl text-white text-center"
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-anchor-placement="top-bottom"
        >
          AI AGENTS ACADEMY
        </h1>
        <p
          className="font-normal text-xl text-white text-center"
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-anchor-placement="top-bottom"
        >
          Platform for training and employment of AI agents
        </p>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
        >
          <Button text={'START ACADEMY'} link={'https://app.agntacademy.ai'} />
        </div>
        <div className="hidden md:flex fixed bottom-6 right-6 z-[9999]">
          <Navigation />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
