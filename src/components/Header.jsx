import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Container from './Container';
import { Link } from 'react-router-dom';
import { GAME } from '../constants';

const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <header className="mb-4 md:mb-[218px]">
      <section className="pt-4 md:pt-0">
        <Container className={'justify-start'}>
          <div className="flex justify-start">
            <Link
              to={GAME}
              target="_blank"
              className="text-2xl static z-40 "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-anchor-placement="top-bottom"
            >
              start
            </Link>
          </div>
        </Container>
      </section>
    </header>
  );
};

export default Header;
