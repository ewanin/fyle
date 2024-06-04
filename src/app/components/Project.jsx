'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import project1 from '../../../public/images/project1.png';
import project2 from '../../../public/images/project2.jpg';
import project3 from '../../../public/images/project3.jpg';

const Project = () => {
    // State to track current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Data for projects
    const projects = [
        { image: project1, title: 'Genderless Kei – Japan’s Hot', description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of' },
        { image: project2, title: 'Better Strategy & Quality', description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of' },
        { image: project3, title: 'Kei Genderless – Japan’s Quality', description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of' }
    ];

    // Function to handle automatic slide change
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % projects.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSlide, projects.length]);

    return (
        <div className='xl:mt-[100px] sm:mt-[75px] mt-[50px]'>
            {/* Title and description */}
            <div className='flex flex-col gap-10 text-center font-cormorant_sc uppercase'>
                <div className='font-semibold text-pink lg:text-[25px] text-[20px] leading-[130%]'>Our project</div>
                <div className='font-bold text-blackish lg:text-[45px] sm:text-[40px] text-[35px] leading-[130%]'>Why We Are Best</div>
            </div>
            {/* Project carousel */}
            <div className='flex lg:flex-row flex-col justify-between gap-7 mt-16'>
                {/* Image display */}
                <div className=' lg:w-[80%] w-[100%] lg:h-auto h-[250px]'>
                    <Image src={projects[currentSlide].image} alt='Project' className='bg-cover' />
                </div>
                {/* Project details */}
                <div className='text-blackish w-fit h-full flex flex-col'>
                    {/* Map through projects */}
                    {projects.map((project, index) => (
                        <div key={index} className={`p-6 ${index === currentSlide ? 'bg-pink text-whitish' : 'bg-gray'}`}>
                            {/* Project title */}
                            <div className='font-medium text-[20px] leading-[25px]'>{project.title}</div>
                            {/* Project description */}
                            <div className='leading-[28px] mt-[15px]'>{project.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
