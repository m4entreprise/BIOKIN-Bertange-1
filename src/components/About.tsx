import { Button } from "@/components/ui/button";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            À PROPOS DU CENTRE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 border-2 border-primary/20 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Notre Approche</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    BIOKIN est un centre de kinésithérapie du sport, où nos kinésithérapeutes proposent des prises en charge basées sur les preuves. Nous offrons une nouvelle approche favorisant une rééducation active.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border-2 border-primary/20 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Patient Acteur</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Le patient devient acteur de sa guérison, de la compréhension de sa pathologie et de sa douleur jusqu'à l'amélioration de sa qualité de vie et de ses performances.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border-2 border-primary/20 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Approche Individualisée</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nous mettons l'accent sur l'humain, car chaque patient mérite une prise en charge individualisée, adaptée à sa problématique unique.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border-2 border-primary/20 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Formation Continue</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Les kinésithérapeutes de BIOKIN s'engagent à suivre régulièrement des formations continues pour rester informés des dernières avancées et méthodes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border-2 border-primary/30 shadow-lg text-center">
            <p className="text-lg text-foreground mb-6 max-w-3xl mx-auto">
              En collaboration avec des partenaires qualifiés, partageant nos valeurs et travaillant en étroite collaboration pour un objectif commun : <span className="font-bold text-primary">la santé du patient et son évolution positive</span>.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
              asChild
            >
              <Link to="/about">
                En savoir plus
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
