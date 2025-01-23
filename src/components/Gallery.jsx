import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Container from './Container';

const Gallery = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="bg-[#e44241] py-10">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={1200}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img src="g1.png" width={240} height={235} alt="bb" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="g2.png" width={240} height={235} alt="as" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="g3.png" width={240} height={235} alt="ds" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="g4.png" width={240} height={235} alt="asd" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="1.png" width={240} height={235} alt="aaews" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="2.png" width={240} height={235} alt="ds" />
        </SwiperSlide>
      </Swiper>
      <div className=" flex gap-20 pl-[0] "></div>
    </section>
  );
};

export default Gallery;
