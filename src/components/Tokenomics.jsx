import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from './Container';

const Tokenomics = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className=" md:mb-[86px] mb-6 relative">
      <div
        className="hidden md:block absolute w-72 -top-[70px] left-44 "
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <img
          src="TrumpLeft.webp"
          alt="trump"
          className="w-80 scale-[2] relative z-10"
        />
        <img
          src="FartLeft.webp"
          className="absolute top-24 -left-[90px] animate-leftAnimation"
          alt=""
        />
      </div>
      <div
        className="hidden md:block absolute w-72 -top-[80px] right-36 "
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <img
          src="TrumpRight.webp"
          alt="trump"
          className="w-80 scale-[2] relative z-10"
        />
        <img
          src="FartRight.webp"
          className="absolute top-24 -right-[90px] animate-rightAnimation"
          alt=""
        />
      </div>
      <Container className={'justify-center items-center flex-col  '}>
        <div
          className="relative w-full md:w-96 h-24 mb-6 md:mb-32 mx-auto"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <h2 className="subTitleToken  text-center text-6xl md:text-[68px] absolute w-full">
            TOKENOMICS
          </h2>
          <h2 className="titleToken text-center text-6xl md:text-[68px] text-black absolute w-full">
            TOKENOMICS
          </h2>
        </div>
        <ul className="flex flex-col flex-wrap w-full md:max-h-[250px] text-center gap-7 items-center justify-stretch text-3xl md:text-[40px]">
          <li
            className="bg-[#e44241] rounded-md px-3 py-8 w-full md:w-[490px]"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-anchor-placement="bottom-bottom"
          >
            SYPPLY 1,000,000,000
          </li>
          <li
            className="bg-[#e44241] rounded-md px-3 py-8 w-full md:w-[490px]"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-anchor-placement="bottom-bottom"
          >
            SQL BLOCKCHAING{' '}
          </li>
          <li
            className="bg-[#e44241] rounded-md px-3 py-8 w-full md:w-[490px]"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-anchor-placement="bottom-bottom"
          >
            TICKER: $FARTRUMP
          </li>
          <li
            className="bg-[#e44241] rounded-md px-3 py-8 w-full md:w-[490px]"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-anchor-placement="bottom-bottom"
          >
            LP TOKENS BURNED
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Tokenomics;
