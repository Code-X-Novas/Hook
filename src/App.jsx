import ContactForm from "./components/Contact";
import Groth from "./components/Groth";
import GrowthFAQ from "./components/GrothFAQ";
import ClinicPromo from "./components/Home";
import Include from "./components/Include";
import Page from "./components/Page";
import Results from "./components/Result";
import Testimonial from "./components/Testimonials";
import Trust from "./components/Trust";

function App() {

    return (
        <div>
            <ClinicPromo />
            <Page />
            <Groth />
            <Include />
            <Testimonial />
            <Trust />
            <Results />
            <GrowthFAQ />
            <ContactForm />
        </div>
    );
}

export default App;
