export default function ClinicPromo() {
    return (
        <div className="min-h-screen font-rfdewi bg-gradient-to-b from-orange-100 to-white px-4 py-8 text-center font-sans">

            <header className="mb-8">

                {/* logos */}
                <h1 className="flex items-center justify-center font-bold text-black">
                    <img 
                        src="/logo-code.png" 
                        alt="logo"
                        className="size-56 -mt-20" 
                    />
                </h1>
                {/* logos */}
                <h1 className="flex items-center mb-5 justify-center font-bold text-black">
                    <img 
                        src="/machine.png" 
                        alt="logo"
                        className="size-12 -mt-10" 
                    />
                </h1>

                <div className="my-2 text-lg sm:text-3xl md:text-[40px] font-extrabold underline">
                    Dear Doctors, Medical Professionals & Clinic Owners
                </div>
                <p className="text-lg sm:text-4xl mt-5 font-semibold">
                    Get 3X More Patient Bookings in Just 90 Days
                </p>
                <p className="text-lg sm:text-3xl mt-2 font-semibold">
                    with Patient Growth Engine
                </p>
            </header>

            {/* image */}
            <div className="flex justify-center">
                <div className="relative w-full max-w-6xl text-white overflow-hidden shadow-lg">
                    <img
                        src="/doctor.png"
                        alt="Doctors"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 p-4">
                        <button className="bg-[#FC8A10] rounded-full p-2 sm:p-4 md:p-6 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 sm:w-10 sm:h-10 md:w-16 md:h-16"
                            >
                            <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
