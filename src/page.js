import About from "./app/components/About";
import BlogSection from "./app/components/BlogSection";
import ContactSection from "./app/components/ContactSection";
import Footer from "./app/components/Footer";
import HeroSection from "./app/components/HeroSection";
import NavBar from "./app/components/NavBar";
import Services from "./app/components/Services";
import SolutionSection from "./app/components/SolutionSection";
import WhyChooseUs from "./app/components/WhyChooseUs";
export default function Home() {

  return (
    <div>
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
