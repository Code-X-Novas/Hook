function Testimonial() {
    const testimonials = new Array(6).fill({
        name: "Preetam Mehta",
        role: "Managing Director",
        company: "SRN Mehta School",
        image: "/testimonial-card-placeholder.jpg", // Replace with real image
    });

    const trustPoints = [
        {
            icon: "✅",
            title: "100% Ethical Approach",
            desc: "No fake urgency, no false promises",
        },
        {
            icon: "⚕️",
            title: "Built for Busy Doctors",
            desc: "No extra tech or staff needed",
        },
        {
            icon: "🏥",
            title: "Medical-Focused Creatives",
            desc: "Designed with compliance, care & empathy",
        },
        {
            icon: "🔒",
            title: "Privacy & Confidentiality",
            desc: "Respected Always",
        },
    ];

    return (
        <>
            <section className="px-4 py-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold underline mb-8">
                    What Clients say about Us
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white border-b-4 border-orange-500 shadow rounded overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-sm text-gray-600">
                                    {item.role} <br />
                                    {item.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-orange-500 text-white px-4 py-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold underline mb-8">
                    Why Doctor Trust Us ?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
                    {trustPoints.map((point, idx) => (
                        <div key={idx}>
                            <div className="text-4xl mb-2">{point.icon}</div>
                            <p className="font-semibold">{point.title}</p>
                            <p className="text-sm">{point.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Testimonial;
