import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import quote from '../../../public/images/quote.svg';

const Feedback = () => {
  return (
    <Wrapper>
      {/* Title and description */}
      <div className='flex flex-col lg:gap-10 gap-5 text-center font-cormorant_sc uppercase'>
        <div className='font-semibold text-pink lg:text-[25px] text-[20px] leading-[130%]'>client's feedback</div>
        <div className='font-bold text-blackish lg:text-[45px] sm:text-[40px] text-[35px] leading-[130%]'>people say's about us !</div>
      </div>
      {/* Feedback content */}
      <div className='lg:mt-20 sm:mt-10 mt-5 lg:w-[830px] sm:w-[80vw] w-[90vw] mx-auto relative text-center'>
        {/* Quote icon */}
        <Image src={quote} alt='Quote' className='absolute -top-4 sm:-left-4 left-0 z-0' />
        {/* Feedback text */}
        <div className='text-[20px] leading-[25px] text-blackish z-10 relative'>
          Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
        </div>
        {/* Author details */}
        <div className='sm:flex text-[20px] leading-[25px] uppercase mt-6 justify-center'>
          <div className='font-bold text-pink'>JANNAT TUMPA</div>
          <div className="font-light text-grayDark">- COO, AMERIMAR ENTERPRISES, INC.</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Feedback;
