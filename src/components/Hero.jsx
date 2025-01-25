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
      <div className="bg-bg-pattern brightness-[20%]  w-screen h-screen bg-no-repeat bg-cover absolute top-0"></div>
      <Container className={'justify-center mb-9 md:mb-44 '}>
        <div className="flex flex-col items-center  w-full relative ">
          <div>
            <div
              className="font-bold flex justify-center items-center relative w-72 md:w-[900px] h-[111px] mb-[276px] md:mb-[500px]  text-white"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 className="title text-6xl  md:text-8xl absolute tracking-[-15px] md:tracking-tight">
                F A R T R U M P
              </h1>
              <h2 className="title text-6xl  md:text-8xl  absolute top-[28px] left-[16px]  md:top-[9px] md:left-[84px] opacity-50 tracking-[-15px] md:tracking-tight">
                F A R T R U M P
              </h2>
              <h2 className="title text-6xl  md:text-8xl  absolute top-[30px] left-[18px] md:top-[11px] md:left-[86px] opacity-25 tracking-[-15px] md:tracking-tight">
                F A R T R U M P
              </h2>
              <h3 className="text-2xl  md:text-6xl text-red-600  absolute top-20 left-[80px] md:top-24 md:left-[300px]">
                earn game
              </h3>
            </div>
            <img
              src="TrumpMain.png"
              alt="trumH"
              className="absolute w-[540px] top-[120px] md:top-[108px] left-0 md:left-[246px] z-10 md:w-[600px]"
            />
            <img
              src="FartTrumpMainLeft.png"
              alt="FartTrumpMainLeft  "
              className="absolute md:top-[300px] top-52 -left-24 md:left-36 animate-leftAnimation"
            />
            <img
              src="FartTrumpMainRight.png"
              alt="FartTrumpMainRight  "
              className="absolute md:top-[300px] top-52 -right-[86px]  md:right-[130px] animate-rightAnimation"
            />
            <div className="relative z-50">
              <Link
                className="font-bold flex justify-center text-center items-center relative w-72 md:w-[500px] h-[111px] mb-1 md:mb-0 cursor-pointer md:m-auto "
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
          </div>
          <Navigation
            className={'md:ml-auto md:absolute md:left-0 bottom-40'}
          />
        </div>
      </Container>
    </>
  );
};

export default Hero;
