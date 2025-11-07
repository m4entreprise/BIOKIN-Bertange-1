import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cabinetEquipment1 from "@/assets/cabinet-equipment-1.jpg";
import cabinetEquipment2 from "@/assets/cabinet-equipment-2.jpg";
import cabinetFloor from "@/assets/cabinet-floor.jpg";
import cabinetEquipment3 from "@/assets/cabinet-equipment-3.jpg";
import cabinetEquipment4 from "@/assets/cabinet-equipment-4.jpg";

const cabinetImages = [
  cabinetEquipment1,
  cabinetEquipment2,
  cabinetFloor,
  cabinetEquipment3,
  cabinetEquipment4,
];

const Cabinet = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = cabinetImages.length;

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">NOTRE CABINET</h2>
          <p className="text-primary">Découvrez quelques images de notre cabinet</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={cabinetImages[currentSlide]}
              alt={`Cabinet BIOKIN - Photo ${currentSlide + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 shadow-lg"
            onClick={prev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 shadow-lg"
            onClick={next}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabinet;
