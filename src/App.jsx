import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import RecentWork from "./components/RecentWork";
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
            <RecentWork />
            <Experience />
            <Testimonials />
            <ContactForm />
            <Footer />
        </main>
    );
}
