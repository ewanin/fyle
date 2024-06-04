import React, { useState } from 'react';
import Image from 'next/image';
import close from '../../../public/images/close.svg';

const Form = ({ setShowForm }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        termsAccepted: false
    });

    const [isFocused, setIsFocused] = useState({
        firstName: false,
        lastName: false,
        email: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, termsAccepted: e.target.checked });
    };

    const handleClose = () => {
        setShowForm(false);
    };

    const handleFocus = (fieldName) => {
        setIsFocused({ ...isFocused, [fieldName]: true });
    };

    const handleBlur = (fieldName) => {
        setIsFocused({ ...isFocused, [fieldName]: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare the form data to be submitted
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('firstName', formData.firstName);
        formDataToSubmit.append('lastName', formData.lastName);
        formDataToSubmit.append('email', formData.email);
        formDataToSubmit.append('termsAccepted', formData.termsAccepted);

        try {
            // Send a POST request to the endpoint
            const response = await fetch('https://getform.io/f/nbvvxleb', {
                method: 'POST',
                body: formDataToSubmit
            });

            if (response.ok) {
                // If the response is successful, hide the form
                setShowForm(false);
            } else {
                // Handle error response
                console.error('Failed to submit form:', response.statusText);
            }
        } catch (error) {
            // Handle network error
            console.error('Failed to submit form:', error);
        }
    };

    return (
        <div className="bg-blackish fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-whitish sm:w-[450px] w-[90vw] p-6 rounded-lg relative">
                <h2 className="text-lg font-semibold mb-4">Talk to us</h2>
                <button onClick={handleClose} className="absolute top-0 right-0 m-2">
                    <Image src={close} alt='Close Button' className='w-10' />
                </button>
                <form onSubmit={handleSubmit}>
                    {/* Email input */}
                    <label className={(isFocused.email || formData.email.length > 0) ? 'visible ml-2 text-grayDark font-medium' : 'invisible'}>Work email*</label>
                    <input
                        type="email"
                        name="email"
                        placeholder={(isFocused.email || formData.email.length > 0) ? '' : 'Work email*'}
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        required
                        className="block w-full border-b border-grayDark mb-2 px-2 focus:outline-none text-blackish font-medium"
                    />
                    {/* First name and last name inputs */}
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                        <div>
                            <label className={(isFocused.firstName || formData.firstName.length > 0) ? 'visible ml-2 text-grayDark font-medium' : 'invisible'}>First name*</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder={(isFocused.firstName || formData.firstName.length > 0) ? '' : 'First name*'}
                                value={formData.firstName}
                                onChange={handleChange}
                                onFocus={() => handleFocus('firstName')}
                                onBlur={() => handleBlur('firstName')}
                                required
                                className="block w-full border-b border-grayDark px-2 focus:outline-none text-blackish font-medium"
                            />
                        </div>
                        <div>
                            <label className={(isFocused.lastName || formData.lastName.length > 0) ? 'visible ml-2 text-grayDark font-medium' : 'invisible'}>Last name*</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder={(isFocused.lastName || formData.lastName.length > 0) ? '' : 'Last name*'}
                                value={formData.lastName}
                                onChange={handleChange}
                                onFocus={() => handleFocus('lastName')}
                                onBlur={() => handleBlur('lastName')}
                                required
                                className="block w-full border-b border-grayDark px-2 focus:outline-none text-blackish font-medium"
                            />
                        </div>
                    </div>
                    {/* Checkbox for terms acceptance */}
                    <div className="mt-4 flex gap-4">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleCheckboxChange}
                            required
                            className="w-7 h-7"
                        />
                        <label htmlFor="termsAccepted" className="text-sm text-grayDark font-medium">I agree to Fyle's terms and conditions, and provided consent to send me communication.</label>
                    </div>
                    {/* Submit button */}
                    <button
                        type="submit"
                        className="bg-pink text-white px-7 py-4 rounded-sm font-semibold mt-4 w-full"
                    >
                        Contact Us
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
