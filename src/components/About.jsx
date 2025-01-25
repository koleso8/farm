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
    <section>
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
            Play and earn through records of 20 30 40 and above.
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
          <div className="relative">
            <img
              src="mocup.png"
              alt="screenshot"
              className="w-[480px] md:h-[782px] pt-0 mb-6 md:mb-20 relative "
            />
            <video
              width="88%"
              height="100%"
              controls
              className="absolute top-[78px] left-[20px]   md:top-[90px]  md:left-[26px] rounded-b-[40px]"
              autoPlay
              loop
              muted
            >
              <source src="video1.MP4" type="video/mp4" />
            </video>
          </div>
          <div
            className=" mb-6 relative"
            data-aos="fade-up-left"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
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
          <div className="relative ">
            <img
              src="mocup.png"
              alt="screenshot"
              className="w-[480px]  md:h-[782px] pt-0 mb-6 md:mb-20 relative "
            />
            <video
              width="88%"
              height="100%"
              controls
              className="absolute  top-[78px] left-[20px]   md:top-[90px]  md:left-[26px] rounded-b-[40px]"
              autoPlay
              loop
              muted
            >
              <source src="video2.MP4" type="video/mp4" />
            </video>
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
