import partnerMonkine from "@/assets/partner-monkine.png";
import partnerPhysioPro from "@/assets/partner-physiopro.png";
import partnerKreate from "@/assets/partner-kreate.png";
import partnerGarage from "@/assets/partner-garage.png";
import partnerM4 from "@/assets/partner-m4entreprise.svg";

const partners = [
  { name: "Mon Kiné", logo: partnerMonkine },
  { name: "Physio Pro", logo: partnerPhysioPro },
  { name: "Kreate", logo: partnerKreate },
  { name: "The Garage Club", logo: partnerGarage },
  { name: "M4 Entreprise", logo: partnerM4 },
];

const Partners = () => {
  return (
    <section className="py-20 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-center">NOS PARTENAIRES</h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {/* Premier set de logos */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplication pour effet continu */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
