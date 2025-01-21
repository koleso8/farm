import Container from './Container';
import Navigation from './Navigation';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { GAME } from '../constants';

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container className={'justify-center mb-9 md:mb-44'}>
      <div className="flex flex-col items-center  w-full relative">
        <img
          src="GIF5.png"
          alt="trumH"
          className="absolute w-[540px] -top-72 md:-top-[420px]"
        />
        <div>
          <div
            className="font-bold flex justify-center items-center relative w-72 md:w-[500px] h-[111px] mb-1"
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h2 className="subTitle text-6xl  md:text-8xl absolute">
              FARTRUMP{' '}
            </h2>
            <h1 className="title text-6xl  md:text-8xl text-black absolute">
              FARTRUMP
            </h1>
          </div>
          <div
            className="font-bold flex justify-center items-center relative w-72 md:w-[500px] h-[111px] mb-2"
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h2 className="subTitle  text-5xl  md:text-8xl absolute">
              EARN GAME{' '}
            </h2>
            <h2 className="title  text-5xl  md:text-8xl text-black absolute">
              EARN GAME
            </h2>
          </div>
          <Link
            className="font-bold flex justify-center text-center items-center relative w-72 md:w-[500px] h-[111px] mb-10 md:mb-0"
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-anchor-placement="bottom-bottom"
            to={GAME}
            target="_blank"
          >
            <p className="subTitle2 text-5xl  md:text-[64px] text-black absolute">
              press start
            </p>
            <p className="title2 text-5xl md:text-[64px] text-black absolute">
              press start
            </p>
          </Link>
        </div>

        <Navigation className={'md:ml-auto md:absolute md:right-0 bottom-0'} />
      </div>
    </Container>
  );
};

export default Hero;
