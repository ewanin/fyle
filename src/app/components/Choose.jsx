import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import target from '../../../public/images/target.svg';
import performance from '../../../public/images/performance.svg';
import security from '../../../public/images/security.svg';
import quality from '../../../public/images/quality.svg';
import Project from './Project';

const Choose = () => {
    return (
        <Wrapper>
            {/* Title and description */}
            <div>
                <div className='flex flex-col gap-10 text-center font-cormorant_sc uppercase'>
                    <div className='font-semibold text-pink lg:text-[25px] text-[20px]  leading-[130%]'>Why Choose Us</div>
                    <div className='font-bold text-blackish lg:text-[45px] sm:text-[40px] text-[35px] leading-[130%]'>Why We Are Best</div>
                </div>
                {/* Grid of reasons */}
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-4 lg:mt-16 sm:mt-10 mt-5'>
                    {/* Mapping through each reason */}
                    {[
                        { icon: target, title: 'Clarified Vision & Target', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.' },
                        { icon: performance, title: 'High Performance', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.' },
                        { icon: security, title: 'Maintain Security', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.' },
                        { icon: quality, title: 'Better Strategy & Quality', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.' }
                    ].map((reason, index) => (
                        <div key={index} className='text-blackish sm:py-8 py-3 w-fit flex flex-col sm:gap-4 gap-2'>
                            {/* Reason icon */}
                            <Image src={reason.icon} alt={reason.title} className='w-16 h-16' />
                            {/* Reason title */}
                            <div className='font-medium text-[20px] leading-[25px]'>{reason.title}</div>
                            {/* Reason description */}
                            <div className='leading-[28px] sm:mt-[15px] mt-[10px]'>{reason.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Project component */}
            <Project />
        </Wrapper>
    );
};

export default Choose;
