import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import hero from '../../../public/images/hero.png';
import HeroButton from './HeroButton';

const HeroBanner = () => {
    return (
        <Wrapper>
            {/* Hero banner content */}
            <div className='flex justify-between items-center xl:gap-16 gap-10'>
                {/* Text content */}
                <div className='flex flex-col xl:gap-10 lg:gap-5 gap-2'>
                    {/* Title */}
                    <div className="font-cormorant_sc font-semibold text-pink xl:text-[30px] lg:text-[25px] text-[20px] leading-[130%] uppercase">Award Winning</div>
                    <div className="font-cormorant_sc font-bold text-blackish xl:text-[55px] lg:text-[45px] sm:text-[40px] text-[35px] leading-[130%] uppercase">Digital Marketing Agency</div>
                    {/* Description */}
                    <div className=" text-blackish leading-[175%]">
                        Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum
                    </div>
                    {/* Hero button */}
                    <HeroButton />
                </div>
                {/* Image */}
                <Image src={hero} alt='Hero Image' priority={true} className='md:block hidden xl:w-[487px] sm:w-[50%] w-full  xl:h-[737px] h-full' />
            </div>
        </Wrapper>
    );
};

export default HeroBanner;