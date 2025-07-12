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

                <div className="my-2 text-xl sm:text-3xl md:text-[40px] font-extrabold underline">
                    Dear Doctors, Medical Professionals & Clinic Owners
                </div>
                <p className="text-xl sm:text-4xl mt-5 font-semibold">
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
                </div>
            </div>
        </div>
    );
}
