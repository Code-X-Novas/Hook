const Results = () => {
    return (
        <div className="w-full font-sans">
            {/* Results Section */}
            <div className="bg-orange-500 text-white py-10 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center underline mb-8">
                    🚀 Proven Results That Drive Growth
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
                    <div>
                        <p className="text-3xl font-bold">83%</p>
                        <p className="mt-2 text-sm">
                            Increase in booked consultations within 90 days
                        </p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">2X</p>
                        <p className="mt-2 text-sm">
                            More patient inquiries via Google & WhatsApp
                        </p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">70%</p>
                        <p className="mt-2 text-sm">
                            Recovery of “lost” leads using AI follow-up scripts
                        </p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">40+</p>
                        <p className="mt-2 text-sm">
                            New 5-star Google reviews in just 2 months
                        </p>
                    </div>
                </div>
            </div>

            {/* Consultation Section */}
            <div className="bg-gray-50 py-12 px-4">
                <div className="max-w-3xl mx-auto text-center border border-gray-300 p-8 rounded-md shadow-md">
                    <h2 className="text-2xl md:text-3xl font-bold underline mb-4">
                        🎯 Claim Your FREE 1-on-1 Growth Consultation
                    </h2>
                    <p className="mb-6 text-gray-700">
                        We’ll analyze your current system, pinpoint where you’re
                        losing patients, and provide a fast-action growth
                        strategy.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition duration-300">
                        Book Free Consultation Call
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Results;
