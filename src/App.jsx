import ContactForm from "./components/Contact";
import Groth from "./components/Groth";
import GrowthFAQ from "./components/GrothFAQ";
import ClinicPromo from "./components/Home";
import Include from "./components/Include";
import Page from "./components/Page";
import Results from "./components/Result";
import Testimonial from "./components/Testimonials";
import SideShow from "./components/SideShow";
import Footer from "./components/Footer";
import useGA4 from "./hooks/useGA4";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

function App() {
    useGA4();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="font-[var(--font-primary)]">
            <ClinicPromo />
            <Page />
            <Groth />
            <Include />
            <Testimonial />
            <SideShow />
            <Results />

            <GrowthFAQ />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;
