

import React, { useState } from 'react';

const Booking = () => {
    // Define state variables for form input fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here
        // For example, send the form data to your server
        console.log('Form submitted:', { name, email, phone, message });
    };

    return (
        <div className="container mt-12 mb-12 mx-auto p-6">
            <h1 className="text-[#FE3E01] lg:mt-6 mt-4 lg:mb-7 mb-4 text-center text-3xl lg:text-5xl font-poppins font-semibold">Book an Event</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Full Name"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-semibold">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Your Phone Number"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        placeholder="Type your message here..."
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#FE3E01] text-white text-xl font-semibold rounded-lg hover:bg-[#FF5C33] focus:outline-none focus:ring focus:ring-[#FE3E01]"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Booking;
