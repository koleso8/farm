import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from './Container';
import { CONTRACT } from '../constants';
import { FaCopy, FaRegCopy } from 'react-icons/fa';
import clsx from 'clsx';

const Contract = () => {
  const [copied, setCopied] = useState(false);
  const copyClipboard = text => {
    setCopied(true);
    return navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container className={'mb-10 md:mb-0'}>
      <div
        className="w-full md:mb-28 mb-16 text-center flex flex-col md:flex-row items-center justify-around"
        onClick={() => copyClipboard(CONTRACT)}
      >
        <h2
          className=" text-white text-center cursor-pointer tracking-wide md:text-3xl text-[12px] mb-2"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-anchor-placement="top-bottom"
        >
          CONTRACT: {CONTRACT}
        </h2>
        <button
          type="button"
          className="relative "
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-anchor-placement="top-bottom"
        >
          {copied ? <FaCopy size={30} /> : <FaRegCopy className="" size={30} />}
          <span
            className={clsx(
              ' -translate-x-14  bg-white rounded-2xl absolute  w-28 text-black text-lg py-2 transition-all duration-700 ',
              copied
                ? 'translate-y-[10px] md:translate-y-[-90px] opacity-1 '
                : 'translate-y-[0px] md:translate-y-[-60px] opacity-0 '
            )}
          >
            COPIED
          </span>
        </button>
      </div>
    </Container>
  );
};

export default Contract;
