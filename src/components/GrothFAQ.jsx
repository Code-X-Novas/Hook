import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
    {
        question: "Will this work for my specific clinic or specialty?",
        answer: "Absolutely. We tailor our strategies to fit the unique needs of your clinic or specialty, ensuring maximum impact and ROI.",
    },
    {
        question: "I don’t want to run ‘salesy’ or unethical ads.",
        answer: "We focus on ethical marketing practices that build trust and long-term relationships with your patients, never resorting to pushy or misleading tactics.",
    },
    {
        question:
            "I’m already listed on Practo or JustDial – isn’t that enough?",
        answer: "While directories help, they don’t replace a comprehensive growth engine. Our solution captures and converts leads directly from multiple channels.",
    },
    {
        question: "How much time will this take from me?",
        answer: "We handle the heavy lifting. You’ll only need to allocate a brief onboarding session and periodic check-ins, nothing more.",
    },
    {
        question: "I have staff. Why do I need automation?",
        answer: "Automation complements your team by reducing manual follow-ups and minimizing missed opportunities, letting your staff focus on patient care.",
    },
];

const GrowthFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full font-sans px-4 py-8 md:py-12">
            <h2 className="text-2xl md:text-3xl font-bold underline text-center mb-6">
                Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow rounded overflow-hidden"
                    >
                        <button
                            className="w-full text-left px-5 py-4 flex items-center justify-between focus:outline-none"
                            onClick={() => toggleFAQ(idx)}
                        >
                            <span className="text-base md:text-lg font-medium">
                                {item.question}
                            </span>
                            <FiChevronDown
                                className={`transform transition-transform duration-300 ${
                                    openIndex === idx
                                        ? "rotate-180"
                                        : "rotate-0"
                                }`}
                                size={24}
                            />
                        </button>
                        {openIndex === idx && (
                            <div className="px-5 pb-4 text-gray-700">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrowthFAQ;
