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
    <>
      <div className="hidden md:block absolute w-16 left-0  animate-runtRUMP ">
        <img
          src="TrumpLeft.png"
          alt="trump"
          className="w-20 scale-[2] relative z-10"
        />
        <img
          src="FartLeft.png"
          className=" w-24 absolute top-5 -left-12 animate-leftAnimation"
          alt=""
        />
      </div>
      <div className="rotate-45 translate-y-96">
        <div className="hidden md:block absolute w-16 -top-6  animate-runtRUMP ">
          <img
            src="TrumpLeft.png"
            alt="trump"
            className="w-20 scale-[2] relative z-10"
          />
          <img
            src="FartLeft.png"
            className=" w-24 absolute top-5 -left-12 animate-leftAnimation"
            alt=""
          />
        </div>
      </div>
      <div className="rotate-[70deg] -translate-y-64">
        <div className="hidden md:block absolute w-16 -top-6  animate-runtRUMP ">
          <img
            src="TrumpLeft.png"
            alt="trump"
            className="w-20 scale-[2] relative z-10"
          />
          <img
            src="FartLeft.png"
            className=" w-24 absolute top-5 -left-12 animate-leftAnimation"
            alt=""
          />
        </div>
      </div>
      <div className="rotate-[-40deg] translate-x-60">
        <div className="hidden md:block absolute w-16 -top-6  animate-runtRUMP ">
          <img
            src="TrumpLeft.png"
            alt="trump"
            className="w-20 scale-[2] relative z-10"
          />
          <img
            src="FartLeft.png"
            className=" w-24 absolute top-5 -left-12 animate-leftAnimation"
            alt=""
          />
        </div>
      </div>
      <div className="-rotate-[60deg] scale-x-[-1] translate-y-96">
        <div className="hidden md:block absolute w-16 left-0   animate-runtRUMP ">
          <img
            src="TrumpLeft.png"
            alt="trump"
            className="w-20 scale-[2] relative z-10"
          />
          <img
            src="FartLeft.png"
            className=" w-24 absolute top-5 -left-12 animate-leftAnimation"
            alt=""
          />
        </div>
      </div>
      <div className="-rotate-45 scale-x-[-1] translate-x-96">
        <div className="hidden md:block absolute w-16    animate-runtRUMP ">
          <img
            src="TrumpLeft.png"
            alt="trump"
            className="w-20 scale-[2] relative z-10"
          />
          <img
            src="FartLeft.png"
            className=" w-24 absolute top-5 -left-12 animate-leftAnimation"
            alt=""
          />
        </div>
      </div>
      <Container className={'justify-center mb-9 md:mb-44'}>
        <div className="flex flex-col items-center  w-full relative">
          <img
            src="TrumpMain.png"
            alt="trumH"
            className="absolute w-[540px] -top-[286px] md:-top-[456px] z-10"
          />
          <img
            src="FartTrumpMainLeft.png"
            alt="FartTrumpMainLeft  "
            className="absolute md:-top-[300px] -top-52 -left-24 md:left-40 animate-leftAnimation"
          />
          <img
            src="FartTrumpMainRight.png"
            alt="FartTrumpMainRight  "
            className="absolute md:-top-[300px] -top-52 -right-24  md:right-40 animate-rightAnimation"
          />
          <div>
            <div
              className="font-bold flex justify-center items-center relative w-72 md:w-[500px] h-[111px] mb-1  text-white"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 className="title text-6xl  md:text-8xl absolute">FARTRUMP</h1>
              <h2 className="title text-6xl  md:text-8xl  absolute top-[28px] left-[8px]  md:top-[9px] md:left-[34px] opacity-50">
                FARTRUMP
              </h2>
              <h2 className="title text-6xl  md:text-8xl  absolute top-[30px] left-[10px] md:top-[11px] md:left-[36px] opacity-25">
                FARTRUMP
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

          <Navigation
            className={'md:ml-auto md:absolute md:right-0 bottom-0'}
          />
        </div>
      </Container>
    </>
  );
};

export default Hero;
