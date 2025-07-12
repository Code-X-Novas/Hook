function Groth() {
    return (
        <section className="bg-white px-4 py-12 text-center font-rfdewi">
            
            <p className="text-[15px] sm:text-xl md:text-3xl max-w-[940px] mx-auto mb-8 font-bold">
                You didn't become a doctor to chase leads. But in today's world
                if you're not visible online, you don't exist.
            </p>

            {/* horizontal line */}
            <div className="w-full relative md:my-12 my-8">
                <img src="/line.png" alt="" />
            </div>

            {/* whole text */}
            <div className="border-[2px] md:p-5 md:space-x-4 border-gray-400 overflow-hidden max-w-[1200px] mx-auto flex flex-col md:flex-row text-left">
                {/* orange left wala */}
                <div className="bg-[url(/Rectangle-147.png)] md:bg-contain bg-no-repeat text-white md:px-5 md:pt-6  p-4 md:w-[25%] flex md:justify-start justify-center">
                    <div>
                        <p className="font-semibold text-lg md:text-2xl">The Solution:</p>
                        <h3 className="text-2xl md:text-4xl font-bold mt-2">
                            The Patient <br /> Growth <br /> Engine
                        </h3>
                    </div>
                </div>

                {/* right part */}
                <div className="md:w-[75%] md:p-0 p-4">
                    <h3 className="text-base sm:text-2xl lg:text-4xl md:leading-9 font-bold mb-4">
                        Designed for Doctors Who Want Peace of Mind and a Full
                        Calendar
                    </h3>
                    <p className="text-[13px] sm:text-lg lg:text-xl md:font-semibold md:leading-6 mb-2">
                        We're not just a marketing agency. We're your Growth
                        Partner building a plug-and-play system that attracts,
                        nurtures, and books patients without chaos or burnout.
                    </p>
                    <p className="text-[13px] sm:text-lg lg:text-xl md:font-semibold md:leading-6 mb-2">
                        Our system works silently while you're in surgery or on
                        rounds, filling tomorrow’s calendar with qualified
                        patients.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Groth;