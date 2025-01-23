import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from './Container';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="">
      <Container>
        <div className="flex flex-col flex-wrap gap-x-3  items-center md:max-h-[1965px] mb-6 md:mb-44 ">
          <p
            className=" md:text-[64px] text-8xl text-center md:text-start text-black md:mb-10 mb-7 secondTitle "
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-anchor-placement="bottom-bottom"
          >
            $TGAME
          </p>
          <p
            className="text-[32px] font-bold text-center md:text-start text-[#e44241] mb-11"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            PLAY AND EARN SOL FOF EVERY GAME
          </p>
          <p
            className="text-[32px] text-center w-72 md:w-[434px] leading-[30px] mb-16"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            TRY TO MAKE YOUR RECORD AS BIG AS POSSIBLE TO GET A LOT OF SOL.
          </p>
          <div
            className=" mb-6 relative"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            <img
              src="TrumpLeft.png"
              alt="trump"
              className="w-80 scale-[1.8] relative z-10"
            />
            <img
              src="FartLeft.png"
              className="absolute top-24 -left-[90px] animate-leftAnimation"
              alt=""
            />
          </div>
          <h3
            className="impTitle text-[64px]  text-[#E44241] tracking-tight leading-[50px] text-center "
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            BEAT THE RECORD
          </h3>
          <h2
            className="secondTitle text-[80px] text-black"
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            NOW
          </h2>
          <div>
            <img src="mocup.png" alt="screenshot" className="w-[480px] mb-6" />
          </div>
          <div
            className=" mb-6 relative"
            data-aos="fade-up-left"
            data-aos-duration="2000"
            data-aos-anchor-placement="bottom-bottom"
          >
            <img
              src="TrumpRight.png"
              alt="trump"
              className="w-80 scale-[1.8] relative z-10"
            />
            <img
              src="FartRight.png"
              className="absolute top-24 -right-[80px] animate-rightAnimation"
              alt=""
            />
          </div>
          <div>
            <img
              src="mocup.png"
              alt="screenshot"
              className="w-[480px] pt-0 mb-6 md:mb-20"
            />
          </div>
          <p
            className="w-72 md:w-[388px] text-center text-4xl"
            data-aos="zoom-out"
            data-aos-duration="2000"
            data-aos-anchor-placement="bottom-bottom"
          >
            PARTICIPATE IN DAILY CHALLENGES WITH OTHER PLAYERS AND{' '}
            <span className="text-[#E44241] ">GET ADDITIONAL PRIZES.</span>
          </p>
          <img
            src="GIF3.png"
            alt="trump"
            className="w-80 "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-anchor-placement="bottom-bottom"
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
