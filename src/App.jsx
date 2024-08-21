import About from "./components/About";
// import Achievements from "./components/Achievements";
import ContactForm from "./components/ContactForm";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
    return (
        <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
            <Navbar />
            <HeroSection />
            <About />
            <Skills />
            <Project />
            <Experience />
            {/* <Achievements /> */}
            <Testimonials />
            <ContactForm />
            <Footer />
        </main>
    );
}
