import React from 'react';
import Image from 'next/image';
import arrow from '../../../public/images/arrow.svg';

const ServiceButton = () => {
    return (
        // Anchor tag for external link
        <a href="https://fylehq.com" target="_blank" rel="noopener noreferrer" aria-label="Read more about Fyle">
            {/* Button with flex layout */}
            <button className='flex items-center gap-4 bg-whitish w-fit px-7 py-4 rounded-sm font-semibold text-[14px] tracking-wider uppercase mx-auto'>
                {/* Text */}
                <div className='text-pink'>Know More</div>
                {/* Arrow icon */}
                <Image src={arrow} alt='Arrow' />
            </button>
        </a>
    );
};

export default ServiceButton;