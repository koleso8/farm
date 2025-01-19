import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Container from './Container';

const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <header className=" ">
      <section className="pt-4 md:pt-0">
        <Container></Container>
      </section>
    </header>
  );
};

export default Header;
