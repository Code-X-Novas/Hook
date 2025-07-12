import React, { useState } from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaLinkedin, FaBehanceSquare  } from "react-icons/fa";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        business: "",
        city: "",
        budget: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Send data to backend or use in any way
    };

    return (
        <div className="px-4 my-16 md:py-20 max-w-4xl mx-auto font-rfdewi">
            <h2 className="text-2xl md:text-[40px] mb-10 font-extrabold underline text-center">
                Contact Us Form
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 md:p-10 border-[2px] border-gray-300 shadow"
            >
                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-1">Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-[2px] border-gray-300 md:p-4 p-2"
                        type="text"
                        required
                    />
                </div>

                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-1">Email</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-[2px] border-gray-300 md:p-4 p-2"
                        type="email"
                        required
                    />
                </div>

                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-1">
                        Contact number
                    </label>
                    <div className="flex items-center gap-2">
                        <span className="text-xl">🇮🇳 +</span>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border-[2px] border-gray-300 md:p-4 p-2"
                            type="tel"
                            required
                        />
                    </div>
                </div>

                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-1">
                        Business name
                    </label>
                    <input
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full border-[2px] border-gray-300 md:p-4 p-2"
                        type="text"
                        required
                    />
                </div>

                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-1">
                        In Which City do you Live in?
                    </label>
                    <input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border-[2px] border-gray-300 md:p-4 p-2"
                        type="text"
                        required
                    />
                </div>

                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-2">
                        What’s your monthly marketing budget or planned?
                    </label>
                    <div className="space-y-2 font-bold">
                        {[
                            "less than INR 50000",
                            "INR 50000 to INR 1 Lac",
                            "INR 1 Lac to INR 3 Lac",
                            "INR 3 lac to INR 5 Lac",
                            "INR 5 Lac to INR 10 Lac",
                        ].map((option, i) => (
                            <label key={i} className="flex items-center md:text-lg text-sm gap-2">
                                <input
                                    type="radio"
                                    name="budget"
                                    value={option}
                                    className="md:scale-150"
                                    checked={formData.budget === option}
                                    onChange={handleChange}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                {/* button */}
                <button className="bg-[#FC8A10] sm:mt-10 mt-4 hover:bg-orange-500 md:text-2xl text-base text-white font-semibold sm:py-4 py-2 sm:px-6 px-4 mb-4">
                    Book Free Consultation Call
                </button>
            </form>

            {/* Footer */}
            <footer className="text-center mt-12">
                <div className="mt-10 text-sm text-gray-700">Stay in touch</div>
                <div className="flex justify-center gap-6 mt-4 text-xl">
                    <a href="#">
                        <ImFacebook2 />
                    </a>
                    <a href="#">
                        <FaInstagram />
                    </a>
                    <a href="#">
                        <FaBehanceSquare  />
                    </a>
                    <a href="#">
                        <FaLinkedin />
                    </a>
                </div>
                <p className="text-xs text-gray-600 mt-4">
                    Copyright 2025 - All right Reserved by Winz Infotech
                </p>
            </footer>
        </div>
    );
};

export default ContactForm;
