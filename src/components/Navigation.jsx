import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import clsx from 'clsx';
import { DEXSCREENER, RAYDIUM, TG, TWITTER } from '../constants';

const Navigation = ({ className, footer = false }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <nav className={clsx(className, 'flex flex-col  gap-2 tracking-widest')}>
      <a
        href={TWITTER}
        target="_blank"
        className={clsx(
          footer ? 'h-12' : 'h-10',
          'bg-black flex w-64  border-[5px] items-center justify-center hover:scale-105 transition-all hover:border-[#e44241] hover:text-[#e44241] '
        )}
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
      >
        TWITTER
      </a>
      <a
        href={RAYDIUM}
        target="_blank"
        className={clsx(
          footer ? 'h-12' : 'h-10',
          'bg-black flex w-64  border-[5px] items-center justify-center hover:scale-105 transition-all hover:border-[#e44241] hover:text-[#e44241] '
        )}
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-bottom"
      >
        RAYDIUM
      </a>
      <a
        href={TG}
        target="_blank"
        className={clsx(
          footer ? 'h-12' : 'h-10',
          'bg-black flex w-64  border-[5px] items-center justify-center hover:scale-105 transition-all hover:border-[#e44241] hover:text-[#e44241] '
        )}
        data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-bottom"
      >
        TELEGRAM
      </a>
      <a
        href={DEXSCREENER}
        target="_blank"
        className={clsx(
          footer ? 'h-12' : 'h-10',
          'bg-black flex w-64  border-[5px] items-center justify-center hover:scale-105 transition-all hover:border-[#e44241] hover:text-[#e44241] '
        )}
        data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-bottom"
      >
        DEXSCREENER
      </a>
    </nav>
  );
};

export default Navigation;
