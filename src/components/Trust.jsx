import React, { useState, useEffect } from "react";

const testimonials = [
    {
        text: "Every ad agency I worked with before just gave me followers. These guys gave me bookings.",
        name: "Dr. Nisha Verma",
        title: "IVF Consultant – Delhi NCR",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        text: "They understood me as a doctor, not just a business. My calendar is full and my stress is gone.",
        name: "Dr. Ravi",
        title: "Ortho Surgeon – Vadodara",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
        text: "Now patients find me on Google even before their family doctor refers them.",
        name: "Dr. Sneha Shah",
        title: "General Physician – Ahmedabad",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
];

const Trust = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-gray-100 py-12 px-4">
            <h2 className="text-2xl md:text-3xl font-bold underline text-center mb-8">
                PROOFS & TRUST
            </h2>
            <div className="max-w-6xl mx-auto overflow-hidden relative">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className="min-w-full px-4 flex-shrink-0 flex justify-center"
                        >
                            <div className="bg-white shadow-md w-full max-w-md text-center p-6 rounded">
                                <p className="text-orange-600 text-3xl leading-none mb-4">
                                    “
                                </p>
                                <p className="text-gray-800 text-lg mb-6">
                                    {item.text}
                                </p>
                                <div className="flex items-center justify-center gap-4 border-t pt-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <p className="font-semibold text-sm">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trust;
