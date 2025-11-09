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
import { usePageMetadata } from "@/hooks/usePageMetadata";

const Index = () => {
  usePageMetadata({
    title: "BIOKIN - Centre de Kinésithérapie du Sport à Bertrange",
    description:
      "Découvrez BIOKIN, centre de kinésithérapie du sport à Bertrange (Luxembourg). Rééducation active, prise en charge personnalisée et équipe spécialisée pour vos performances.",
    canonical: "https://www.biokin.lu/",
  });

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
