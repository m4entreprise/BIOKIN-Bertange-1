import { Activity, Heart, TrendingUp, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

const features = [
  {
    icon: Activity,
    title: "BIO KIN",
    link: "PLUS",
    content: (
      <>
        <p className="mb-4">Bienvenue chez BIOKIN - Au-delà du nom, une mission pour votre santé.</p>
        <p className="mb-4">Découvrez pourquoi nous avons choisi de combiner 'BIO' et 'KIN' pour incarner notre mission.</p>
        <p className="mb-4 font-semibold">'BIO' signifie 'vie'.</p>
        <p className="mb-4">Chez BIOKIN, on sait que la vie, c'est le mouvement. Et notre mission, c'est de vous aider à retrouver ce mouvement, pour que vous puissiez vivre pleinement chaque instant.</p>
        <p className="mb-4 font-semibold">'KIN' provient du grec 'kinesis', signifiant 'mouvement'.</p>
        <p className="mb-4">Chez BIOKIN, nous sommes dédiés à rééduquer, réhabiliter et optimiser vos performances.</p>
        <p className="mb-4">Notre mission : vous aider à retrouver et maximiser chaque mouvement, pour que vous puissiez exceller dans votre pratique sportive et votre vie quotidienne.</p>
        <p className="mb-4">Notre approche est centrée sur vous. Chaque programme est personnalisé pour répondre à vos besoins spécifiques, qu'il s'agisse de rééducation, de réhabilitation ou d'optimisation des performances.</p>
        <p>Chez BIOKIN, nous ne faisons pas que traiter les blessures. Nous aidons nos patients à redécouvrir le plaisir du mouvement sans douleur.</p>
      </>
    ),
  },
  {
    icon: Heart,
    title: "PATIENT CENTRÉ",
    link: "PLUS",
    content: (
      <>
        <p className="mb-4">Nous mettons l'accent sur l'humain, car chaque patient mérite une prise en charge individualisée, adaptée à sa problématique.</p>
        <p className="mb-4 font-semibold">Le patient devient acteur de sa rééducation.</p>
        <p className="mb-4">Chez BIOKIN, nous croyons que vous êtes le meilleur acteur de votre propre rééducation. On vous guide pour comprendre votre blessure et les étapes nécessaires à sa guérison.</p>
        <p className="mb-4">Ensemble, on met en place un plan de traitement individualisé en rapport avec vos objectifs. Chaque effort compte, et chaque progrès vous rapproche de vos objectifs.</p>
        <p>On avance ensemble !</p>
      </>
    ),
  },
  {
    icon: TrendingUp,
    title: "RÉÉDUCATION ACTIVE",
    link: "PLUS",
    content: (
      <>
        <p className="mb-4">Nous offrons une nouvelle approche de la kinésithérapie, favorisant une rééducation active où le patient devient acteur de sa guérison, de la compréhension de sa pathologie et de sa douleur jusqu'à l'amélioration de sa qualité de vie et de ses performances.</p>
        <p>À l'heure actuelle, nous savons que les résultats les plus durables nécessitent une prise en charge active !</p>
      </>
    ),
  },
  {
    icon: Brain,
    title: "EVIDENCE-BASED PRACTICE",
    link: "PLUS",
    content: (
      <>
        <p className="mb-4 font-semibold">C'est quoi être Évidence-based practice ?</p>
        <p className="mb-4">L'EBP, c'est utiliser les meilleures preuves scientifiques pour guider nos décisions de soin. Chez BIOKIN, on combine la recherche, l'expertise clinique, et une prise en charge individualisée.</p>
        <p className="mb-4 font-semibold">Pourquoi l'EBP est-elle importante ?</p>
        <p className="mb-4">L'EBP garantit des traitements basés sur des faits. Mais il ne faut pas négliger l'importance de l'expérience du terrain. Allier les deux, avec une bonne dose de réflexion, c'est le meilleur combo pour des résultats optimaux.</p>
        <p className="mb-4 font-semibold">Comment BIOKIN applique l'EBP ?</p>
        <p className="mb-4">La science évolue constamment, et ce qui est vrai aujourd'hui peut changer demain. C'est pourquoi la formation continue est essentielle.</p>
        <p>Chez BIOKIN, nos kinésithérapeutes se forment continuellement pour vous offrir les soins les plus actuels et vous offrir une prise en charge optimale.</p>
      </>
    ),
  },
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`pt-20 pb-0 -mt-32 relative z-20 bg-secondary/30 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-2"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <button 
                onClick={() => setSelectedFeature(index)}
                className="text-primary font-semibold underline hover:text-primary/80 transition-colors"
              >
                {feature.link}
              </button>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedFeature !== null} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedFeature !== null && features[selectedFeature].title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 text-foreground text-justify">
            {selectedFeature !== null && features[selectedFeature].content}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Features;
