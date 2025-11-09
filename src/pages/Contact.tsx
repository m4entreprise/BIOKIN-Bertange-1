import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import biokinLogo from "@/assets/biokin-logo.webp";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const Contact = () => {
  usePageMetadata({
    title: "Prendre rendez-vous chez BIOKIN - Kinésithérapeutes à Bertrange",
    description:
      "Prenez rendez-vous chez BIOKIN, cabinet de kinésithérapie du sport à Bertrange. Choisissez votre praticien sur Doctolib ou contactez-nous au 00352 621 150 941.",
    canonical: "https://www.biokin.lu/prendre-rendez-vous",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary/30 py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
            <div className="w-64 h-64 bg-[#2c76bb] rounded-full flex items-center justify-center shadow-2xl flex-shrink-0">
              <div className="text-center">
                <img src={biokinLogo} alt="BIOKIN Logo" className="w-32 h-32 object-contain mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-primary-foreground">BIOKIN</h2>
              </div>
            </div>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">BIOKIN Luxembourg</h1>
              <p className="text-lg text-muted-foreground mb-2">
                Pour prendre rendez-vous, il suffit de cliquer sur la fiche du praticien de votre choix 
                ou de téléphoner au <span className="font-semibold text-foreground">00352 621 150 941</span> durant 
                les heures d'ouverture afin de prendre contact avec le secrétariat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Partners Section */}
      <Partners />

      <Footer />
    </div>
  );
};

export default Contact;
