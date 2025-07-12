function Include() {
    const items = [
        {
            title: "Lead Generation",
            image: "/lead-generation-placeholder.jpg",
            points: [
                "Hyper-targeted Facebook & Google ads to attract ideal patients",
                "Strategic landing pages designed to convert clicks into bookings",
            ],
        },
        {
            title: "Performance Marketing",
            image: "/performance-marketing-placeholder.jpg",
            points: [
                "Real-time campaign tracking, optimization, and ROI reporting",
                "Transparent ad budgets with results you can feel in your calendar",
            ],
        },
        {
            title: "Social Media Management",
            image: "/social-media-management-placeholder.jpg",
            points: [
                "Professional content that educates, builds trust, and attracts patients",
                "Done-for-you posting across Facebook & Instagram Platforms",
                "Reputation management: comments, reviews, and engagement handled",
            ],
        },
        {
            title: "Tech + Automation",
            image: "/automation-placeholder.jpg",
            points: [
                "A trust-building online presence that converts visitors to patients",
                "Mobile-optimized booking system with auto-reminders",
                "WhatsApp + Email follow-ups built to convert",
            ],
        },
    ];

    return (
        <section className="bg-white px-4 py-12 text-center font-sans">
            <h2 className="text-2xl sm:text-3xl font-bold underline mb-8">
                What's Included ?
            </h2>

            <div className="space-y-8 max-w-6xl mx-auto">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`border-t-4 border-orange-500 bg-gray-50 rounded-md overflow-hidden flex flex-col ${
                            idx % 2 === 1
                                ? "md:flex-row-reverse"
                                : "md:flex-row"
                        } items-center text-left p-4 gap-4`}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full md:w-1/2 object-cover rounded"
                        />
                        <div className="md:w-1/2">
                            <h3 className="font-bold text-lg sm:text-xl mb-2">
                                {item.title}
                            </h3>
                            <ul className="list-disc pl-5 text-sm sm:text-base space-y-2">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded">
                    Book Free Consultation Call
                </button>
            </div>
        </section>
    );
}

export default Include;
