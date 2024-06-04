'use client'
import React, { useState } from 'react';
import Form from './Form';

// HeroButton component to handle form display
const HeroButton = () => {
    // State to manage form visibility
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            {/* Button to toggle form visibility */}
            <button
                className='font-semibold text-[14px] tracking-wider text-whitish bg-pink w-fit px-7 py-4 rounded-sm'
                onClick={() => setShowForm(true)}
            >
                Contact Us
            </button>

            {/* Render form if showForm state is true */}
            {showForm && (
                <Form setShowForm={setShowForm} />
            )}
        </div>
    );
};

export default HeroButton;
