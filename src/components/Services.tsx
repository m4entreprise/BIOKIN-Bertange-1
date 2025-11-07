import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import serviceKineSportive from "@/assets/service-kine-sportive.jpg";
import serviceRehabPostOp from "@/assets/service-rehab-post-op.jpg";
import serviceReathlestisation from "@/assets/service-reathlestisation.jpg";
import serviceTherapieManuelle from "@/assets/service-therapie-manuelle.jpg";
import serviceScreening from "@/assets/service-screening.jpg";

const services = [
  {
    title: "KINÉSITHÉRAPIE SPORTIVE",
    image: serviceKineSportive,
  },
  {
    title: "RÉHABILITATION POST-OPÉRATOIRE",
    image: serviceRehabPostOp,
  },
  {
    title: "RÉATHLÉTISATION / PERFORMANCE",
    image: serviceReathlestisation,
  },
  {
    title: "THÉRAPIE MANUELLE",
    image: serviceTherapieManuelle,
  },
  {
    title: "SCREENING D'ÉQUIPE",
    image: serviceScreening,
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(services[(currentIndex + i) % services.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">DES SERVICES COMPLETS</h2>
          <p className="text-muted-foreground">
            Notre cabinet propose tout un panel complet de services pour vous garantir une prise en charge optimale.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleServices().map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[500px] flex flex-col">
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-black p-6 h-24 flex items-center justify-center">
                    <h3 className="text-white font-bold text-xl text-center">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-background shadow-lg"
            onClick={prev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-background shadow-lg"
            onClick={next}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
