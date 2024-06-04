import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import heart from '../../../public/images/heart.svg';
import clock from '../../../public/images/clock.svg';
import tick from '../../../public/images/tick.svg';
import award from '../../../public/images/award.svg';

const Growth = () => {
    return (
        <div className="bg-grayish">
            <Wrapper>
                {/* Title and description */}
                <div className='flex flex-col sm:gap-10 gap-5 text-center font-cormorant_sc  uppercase'>
                    <div className='font-semibold text-pink lg:text-[25px] text-[20px]  leading-[130%]'>Experts growth</div>
                    <div className='font-bold text-blackish lg:text-[45px] sm:text-[40px] text-[35px] leading-[130%]'>Our Company Growth</div>
                </div>
                {/* Grid of growth metrics */}
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 justify-between lg:mt-16 sm:mt-10 mt-5'>
                    {/* Mapping through each growth metric */}
                    {[
                        { icon: heart, value: '199 +', label: 'Staticfied Customers' },
                        { icon: clock, value: '1591 +', label: 'Days Of Operation' },
                        { icon: tick, value: '283 +', label: 'Complete Project' },
                        { icon: award, value: '75 +', label: 'Win Awards' }
                    ].map((metric, index) => (
                        <div key={index} className='bg-whitish font-light text-blackish w-full text-center py-8 flex flex-col items-center gap-3 hover:shadow-xl cursor-pointer'>
                            {/* Metric icon */}
                            <Image src={metric.icon} alt={metric.label} className='w-10 h-9' />
                            {/* Metric value */}
                            <div className='xl:text-[55px] lg:text-[45px] sm:text-[40px] text-[35px] leading-[130%] uppercase'>{metric.value}</div>
                            {/* Metric label */}
                            <div className='text-[20px] leading-[25px]'>{metric.label}</div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default Growth;