import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaLinkedin, FaBehanceSquare  } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="text-center py-5 bg-gradient-to-t from-orange-300 to-white">
                <div className="mt-10 sm:text-lg text-base font-semibold text-black">Stay in touch</div>
                <div className="flex justify-center gap-6 mt-4 text-xl">
                    <a href="#">
                        <ImFacebook2 className="md:size-8 size-6" />
                    </a>
                    <a href="#">
                        <FaInstagram className="md:size-8 size-6" />
                    </a>
                    <a href="#">
                        <FaBehanceSquare className="md:size-8 size-6" />
                    </a>
                    <a href="#">
                        <FaLinkedin className="md:size-8 size-6" />
                    </a>
                </div>
                <p className="sm:text-base text-sm font-bold text-black mt-4">
                    Copyright 2025 - All right Reserved by Winz Infotech
                </p>
            </footer>
        </div>
    )
}

export default Footer