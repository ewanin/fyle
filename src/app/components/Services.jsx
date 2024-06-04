import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import service1 from '../../../public/images/service1.png';
import service2 from '../../../public/images/service2.png';
import service3 from '../../../public/images/service3.png';
import html from '../../../public/images/html.svg';
import ServiceButton from './ServiceButton';

const Services = () => {
    // Service data containing image sources and descriptions
    const servicesData = [
        { image: service1, description: "Morbi sed lacus nibh finibus fougiat et fermentum nibh, Pellentesque" },
        { image: service2, description: "Morbi sed lacus nibh finibus fougiat et fermentum nibh, Pellentesque" },
        { image: service3, description: "Morbi sed lacus nibh finibus fougiat et fermentum nibh, Pellentesque" }
    ];

    return (
        <div className='bg-grayish'>
            <Wrapper>
                {/* Title and description */}
                <div>
                    <div className='font-cormorant_sc font-semibold text-pink lg:text-[25px] text-[20px]  leading-[130%] uppercase'>What We Do</div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 lg:mt-10 mt-6 items-center">
                        <div className='font-cormorant_sc font-bold text-blackish lg:text-[45px] sm:text-[40px] text-[35px] leading-[130%] uppercase'>Services provided for you</div>
                        <div className="text-blackish leading-[175%]">
                            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum
                        </div>
                    </div>
                </div>
                {/* Service cards */}
                <div className='flex lg:flex-row flex-col justify-between gap-7 mt-14'>
                    {/* Mapping through services data */}
                    {servicesData.map((service, index) => (
                        <div key={index} className="w-full h-full relative">
                            <Image src={service.image} alt='Services' className='w-full h-full' />
                            {/* Service overlay */}
                            <div className='opacity-0 hover:opacity-100 transition-all duration-300 bg-pink text-whitish w-full h-full absolute top-0 left-0 text-center flex flex-col gap-10 justify-center'>
                                <Image src={html} alt='HTML' className='mx-auto' />
                                <div className='font-cormorant_sc font-medium text-whitish text-[24px] leading-[26px] uppercase'>Web Development</div>
                                <div className='text-whitish leading-[175%]'>{service.description}</div>
                                <ServiceButton />
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default Services;
