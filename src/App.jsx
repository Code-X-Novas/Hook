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

function App() {

    return (
        <div>
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
