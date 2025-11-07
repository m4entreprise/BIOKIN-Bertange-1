import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Team from "@/components/Team";
import Cabinet from "@/components/Cabinet";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Philosophy />
      <Team />
      <Cabinet />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
