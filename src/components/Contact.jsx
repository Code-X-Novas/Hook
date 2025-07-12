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
        <div className="px-4 py-12 max-w-3xl mx-auto font-sans">
            <h2 className="text-2xl md:text-3xl font-bold underline text-center mb-8">
                Contact Us Form
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 md:p-10 border rounded shadow"
            >
                <div className="mb-4">
                    <label className="block font-semibold mb-1">Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border px-4 py-2"
                        type="text"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1">Email</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border px-4 py-2"
                        type="email"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1">
                        Contact number
                    </label>
                    <div className="flex items-center gap-2">
                        <span className="text-xl">🇮🇳 +</span>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border px-4 py-2"
                            type="tel"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1">
                        Business name
                    </label>
                    <input
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full border px-4 py-2"
                        type="text"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1">
                        In Which City do you Live in?
                    </label>
                    <input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border px-4 py-2"
                        type="text"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block font-semibold mb-2">
                        What’s your monthly marketing budget or planned?
                    </label>
                    <div className="space-y-2">
                        {[
                            "less than INR 50000",
                            "INR 50000 to INR 1 Lac",
                            "INR 1 Lac to INR 3 Lac",
                            "INR 3 lac to INR 5 Lac",
                            "INR 5 Lac to INR 10 Lac",
                        ].map((option, i) => (
                            <label key={i} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="budget"
                                    value={option}
                                    checked={formData.budget === option}
                                    onChange={handleChange}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition duration-300"
                >
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
