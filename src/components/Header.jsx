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
  return <header className="mb-[0px] md:mb-[0px]"></header>;
};

export default Header;
