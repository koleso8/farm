import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from './Container';

const Faqs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="mb-5 md:mb-24 relative">
      <Container className={'flex-col'}>
        <div
          className="relative w-full md:w-96 h-24 mb-6 md:mb-20 mx-auto  "
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h2 className="subTitleToken  text-center text-6xl md:text-[68px] absolute w-full">
            FAQS
          </h2>
          <h2 className="titleToken text-center text-6xl md:text-[68px] text-black absolute w-full">
            FAQS
          </h2>
        </div>
        <img
          src="GIF4.png"
          alt="trmp"
          className="hidden w-[460px] md:block absolute top-8 right-[20%]"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="bottom-bottom"
        />
        <ul className="faqList flex flex-col md:flex-wrap  md:max-h-[1100px] gap-10 md:gap-x-0 md:mb-12 text-center relative">
          <img
            src="cloud-left.png"
            alt="cloud-left"
            className="hidden md:block absolute w-72 -top-52 -left-[12vw] animate-rightAnimation "
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-anchor-placement="bottom-bottom"
          />
          <img
            src="cloud-left.png"
            alt="cloud-left"
            className="hidden md:block absolute w-72 -bottom-60  -left-[12vw] animate-rightAnimation  "
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-anchor-placement="bottom-bottom"
          />
          <img
            src="cloud-right.png"
            alt="cloud-right"
            className="hidden md:block absolute w-72 top-0 -right-[12vw] animate-leftAnimation "
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-anchor-placement="bottom-bottom"
          />
          <img
            src="cloud-right.png"
            alt="cloud-right"
            data-aos="fade-right"
            data-aos-duration="3000"
            className="hidden md:block absolute w-72 -bottom-72 -right-[12vw] animate-leftAnimation"
          />
          <li className="md:w-[550px] static z-20">
            <h3
              className="faqTitle"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              WHAT IS META FART?
            </h3>
            <p
              className="faqSub"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              META FART IS A UNIQUE CRYPTO PROJECT COMBINING ENTERTAINMENT,
              GAMING, AND EARNING OPPORTUNITIES. IT`S DESIGNED FOR FUN AND
              FINANCIAL GROWTH THROUGH INNOVATIVE GAMEPLAY.
            </p>
          </li>
          <li className="md:mt-12 md:w-[600px] md:ml-5 static z-20">
            <h3
              className="faqTitle"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              HOW DO I EARN REWARDS?
            </h3>
            <p
              className="faqSub"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              BY PLAYING FARTRUMP, COMPLETING CHALLENGES, AND ACHIEVING
              MILESTONES, YOU CAN EARN TOKENS DIRECTLY WITHIN THE GAME.
            </p>
          </li>
          <li className="md:w-[512px] md:mt-4 static z-20">
            <h3
              className="faqTitle"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              IS META FART SAFE?{' '}
            </h3>
            <p
              className="faqSub"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              YES! META FART IS BUILT ON A SECURE BLOCKCHAIN NETWORK TO ENSURE
              TRANSPARENCY AND SAFETY FOR ALL USERS.
            </p>
          </li>
          <li className="md:mt-56 md:w-[460px] static z-20">
            <h3
              className="faqTitle"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              WHAT IS FARTRUMP?
            </h3>
            <p
              className="faqSub"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              FARTRUMP IS OUR FLAGSHIP GAME WHERE PLAYERS ENGAGE IN COMEDIC
              ADVENTURES WHILE EARNING REWARDS IN CRYPTOCURRENCY.
            </p>
          </li>
          <li className=" md:w-[460px]  md:mt-4 static z-20">
            <h3
              className="faqTitle"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              HOW CAN I START?
            </h3>
            <p
              className="faqSub"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              ALL YOU HAVE TO DO IS FOLLOW THE LINK TO THE TELEGRAM BOT AND
              LAUNCH THE GAME AND BEGIN YOUR JOURNEY TO LAUGHTER AND EARNINGS!
            </p>
          </li>
        </ul>
        <div className=" md:w-[700px] mt-8  flex flex-col text-center justify-center items-center">
          <h3
            className="faqTitle  md:w-[680px] "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-bottom"
          >
            WHAT MAKES META FART UNIQUE?
          </h3>
          <p
            className="faqSub  md:w-[600px] "
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-bottom"
          >
            IT`S THE PERFECT BLEND OF HUMOR, GAMING, AND BLOCKCHAIN TECHNOLOGY,
            OFFERING A ONE-OF-A-KIND EXPERIENCE THAT`S BOTH FUN AND REWARDING.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Faqs;
