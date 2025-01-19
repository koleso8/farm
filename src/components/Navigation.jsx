import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navigation = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <nav
      className="flex gap-2"
      data-aos="zoom-in"
      data-aos-duration="4000"
      data-aos-anchor-placement="top-bottom"
    >
      <a
        href="https://x.com/agntacademy"
        target="_blank"
        className="flex w-12 h-12 border-2 rounded-full items-center justify-center hover:scale-105 transition-all hover:border-[#6ebefb]"
      >
        <FaXTwitter color="#fff" size={30} />
      </a>
      <a
        href="https://t.me/agntacademy"
        target="_blank"
        className="flex w-12 h-12 border-2 rounded-full pr-1 items-center justify-center hover:scale-105 transition-all hover:border-[#6ebefb]"
      >
        <FaTelegramPlane color="#fff" size={30} />
      </a>
      <a
        href="https://raydium.io/swap/?inputMint=sol&outputMint=AcaDeMYwmB6VvZZK7BrYnQawMknnHKbvihPXKoYPgmaf"
        target="_blank"
        className="flex w-12 h-12 border-2 rounded-full items-center justify-center hover:scale-105 transition-all hover:border-[#6ebefb]"
      >
        <img src="/raydium.png" width={25}></img>
      </a>
      <a
        href="https://dexscreener.com/solana/AcaDeMYwmB6VvZZK7BrYnQawMknnHKbvihPXKoYPgmaf"
        target="_blank"
        className="flex w-12 h-12 border-2 rounded-full items-center justify-center hover:scale-105 transition-all hover:border-[#6ebefb]"
      >
        <img
          src="/dexscreener.png"
          width={60}
          style={{ maxWidth: '130%' }}
        ></img>
      </a>
      <a
        href="https://t.me/AgntAcademyBot"
        target="_blank"
        className="flex w-12 h-12 border-2 rounded-full items-center justify-center hover:scale-105 transition-all hover:border-[#6ebefb]"
      >
        <img src="/study.png" width={60}></img>
      </a>
    </nav>
  );
};

export default Navigation;
