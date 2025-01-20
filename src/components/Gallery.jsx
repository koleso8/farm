import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Container from './Container';

const Gallery = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="bg-[#e44241] py-10">
      <Container className={'justify-between flex-col gap-6 md:flex-row'}>
        <img
          src="g1.png"
          width={240}
          height={235}
          className="h-[235px] w-[240px]"
          alt="bb"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-anchor-placement="bottom-bottom"
        />
        <img
          src="g2.png"
          width={240}
          height={235}
          className="h-[235px] w-[240px]"
          alt="ac"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-anchor-placement="bottom-bottom"
        />
        <img
          src="g3.png"
          width={240}
          height={235}
          className="h-[235px] w-[240px]"
          alt="arg"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-anchor-placement="bottom-bottom"
        />
        <img
          src="g4.png"
          width={240}
          height={235}
          className="h-[235px] w-[240px]"
          alt="fgr"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-anchor-placement="bottom-bottom"
        />
      </Container>
    </section>
  );
};

export default Gallery;
