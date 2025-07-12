const Page = () => {
    return (
        <div>
            <section className="text-center px-4 sm:px-8 max-w-4xl mx-auto mb-12">
                <p className="text-lg font-semibold sm:text-lg mb-4">
                    You’ve spent years mastering medicine, diagnosis, and
                    care...
                    <br />
                    But your clinic still depends on referrals and random
                    walk-ins.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded mb-4">
                    Book Free Consultation Call
                </button>
                <p className="text-sm sm:text-base">
                    You heal people. Let us heal your appointment gaps with an
                    AI-powered growth system that runs 24x7.
                </p>
            </section>

            <hr className="border-t border-gray-300 mb-12" />

            <section className="text-center px-4 sm:px-8 max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold underline mb-4">
                    The Real Problem: It’s Not Just “Marketing”
                </h2>
                <p className="text-lg font-medium mb-8">You’re tired of:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="border-l-4 border-orange-500 bg-gray-50 p-4 text-left rounded">
                        <h3 className="font-bold mb-2">Waiting for patients</h3>
                        <p className="text-sm">
                            Instead of serving them, you're constantly worrying
                            about where the next patient will come from.
                        </p>
                    </div>

                    <div className="border-l-4 border-orange-500 bg-gray-50 p-4 text-left rounded">
                        <h3 className="font-bold mb-2">Staff struggles</h3>
                        <p className="text-sm">
                            Your team has difficulty explaining your services
                            and converting inquiries into appointments.
                        </p>
                    </div>

                    <div className="border-l-4 border-orange-500 bg-gray-50 p-4 text-left rounded">
                        <h3 className="font-bold mb-2">
                            Less experienced clinics winning
                        </h3>
                        <p className="text-sm">
                            They're getting more patients just because they're
                            more visible online.
                        </p>
                    </div>

                    <div className="border-l-4 border-orange-500 bg-gray-50 p-4 text-left rounded">
                        <h3 className="font-bold mb-2">Lost time and trust</h3>
                        <p className="text-sm">
                            Because no one followed up with potential patients
                            who showed interest.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
