import About from "./components/About";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import SolutionSection from "./components/SolutionSection";
import WhyChooseUs from "./components/WhyChooseUs";
export default function Home() {

  return (
    <div >
      <NavBar />
      <HeroSection />
      <SolutionSection />
      <Services />
      <BlogSection />
      <About />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  )
}
