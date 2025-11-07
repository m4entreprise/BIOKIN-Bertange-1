import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import jayPhoto from "@/assets/jay-photo.png";
import mathisPhoto from "@/assets/mathis-photo.png";
import quentinPhoto from "@/assets/quentin-photo.png";

const team = [
  {
    name: "JAY AERTS",
    role: "KINÉSITHÉRAPEUTE",
    image: jayPhoto,
    description: [
      "Je m'appelle Jay, kinésithérapeute spécialisé dans le sport, avec une expertise en préparation physique. Ma pratique se concentre principalement sur les sports de combat, un domaine en pleine expansion où la prise en charge reste souvent mal comprise.",
      "Passionné par la formation continue, j'ai suivi plusieurs spécialisations, notamment en kinésithérapie du sport, en pathologies de l'épaule, en neuropathies, polyneuropathies et syndromes canalaires, ainsi qu'en troubles vasculaires.",
      "J'ai également approfondi mes connaissances en préparation physique et en pathologies spécifiques aux boxeurs. Chaque année, j'enrichis mon parcours par de nouvelles formations et la lecture d'articles scientifiques, afin de rester à jour et d'approfondir mes compétences.",
      "Parallèlement à mon activité, j'ai fondé « The Garage Club », une entreprise dédiée au suivi à distance des combattants, tant pour leur réhabilitation que pour leur préparation physique.",
    ],
    bookingUrl: "https://www.doctena.lu/fr/specialite/kinesitherapeute/jay-aerts-1475862#23371",
  },
  {
    name: "MATHIS BIZIMANA",
    role: "KINÉSITHÉRAPEUTE",
    image: mathisPhoto,
    description: [
      "Je m'appelle Mathis Bizimana, kinésithérapeute diplômé de l'Université catholique de Louvain. J'ai également obtenu un master complémentaire en musculo-squelettique également connu sous le nom de thérapie manuelle orthopédique, reconnu par l'IFOMT, l'organisation mondiale de la thérapie manuelle.",
      "Je suis convaincu que la communication et la compréhension approfondie de votre pathologie sont essentielles pour une rééducation réussie. Ensemble, nous élaborerons un plan de traitement fondé sur les dernières avancées scientifiques entrant dans le spectre de l'évidence base practice, afin de garantir une rééducation efficace et adaptée à vos besoins spécifiques.",
      "En parallèle, je travaille en tant qu'expert en kinésithérapie dans une entreprise spécialisée en santé à Bruxelles, ce qui me permet de rester constamment informé des dernières avancées dans le domaine. J'ai également eu l'opportunité de collaborer avec diverses équipes professionnelles lors d'événements majeurs, notamment avec une équipe de basket en Eurocup et l'équipe nationale belge espoirs de basket.",
      "En tant que joueur de basket de haut niveau, je comprends les défis et les objectifs auxquels vous êtes confronté, que vous soyez professionnel ou amateur.",
      "Je suis persuadé que la rééducation active est la clé pour retrouver vos capacités optimales.",
      "N'hésitez pas à me contacter pour discuter de vos besoins et commencer ensemble votre parcours de rééducation !",
    ],
    bookingUrl: "https://www.doctena.lu/fr/specialite/kinesitherapeute/mathis-bizimana-1796139#23369",
  },
  {
    name: "QUENTIN AULIGINE",
    role: "KINÉSITHÉRAPEUTE",
    image: quentinPhoto,
    description: [
      "Je m'appelle Quentin Auligine, diplômé en kinésithérapie depuis 2021. J'ai travaillé pendant 2 ans dans un centre spécialisé en réhabilitation cardiaque dans lequel j'ai suivi différents formations spécifiques, où l'accompagnement et la prise de conscience sont essentielles pour obtenir les meilleurs résultats dans la prise en charge.",
      "En dehors de cette expérience, j'ai travaillé dans différents cabinets libéraux avant de m'installer définitivement dans un cabinet qui me ressemble et qui vous offre une expérience et une vision moderne de la rééducation.",
      "Passionné de handball depuis plus de vingt ans, j'ai évolué au niveau Nationale 3 et assuré la préparation physique de mon équipe. Cette expérience sportive enrichit ma vision du mouvement, de la performance et de la prévention.",
      "Mon approche dans la réhabilitation est centré sur vos objectifs personnels, chaque patient a un traitement en accord avec ses capacités, ses motivations et son évolution.",
      "Ici, vous serez acteurs de votre propre rééducation, les différents formations et études récentes nous ont montré que le traitement actif offrait des résultats bien supérieurs et c'est dans ce contexte que je suis ravi de pouvoir vous accompagner dans votre prise en charge.",
      "A très bientôt !",
    ],
    bookingUrl: "https://www.doctena.lu/fr/specialite/kinesitherapeute/quentin-auligine-1965110#24984",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<(typeof team)[0] | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">NOTRE ÉQUIPE</h2>
          <p className="text-muted-foreground">Vous souhaitez prendre rendez-vous ? Voici nos différents praticiens.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-muted relative">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <Button
                  variant="outline"
                  className="border-2 border-foreground hover:bg-foreground hover:text-background rounded-none w-full"
                  onClick={() => setSelectedMember(member)}
                >
                  PRENDRE RENDEZ-VOUS
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedMember.name}</DialogTitle>
                <p className="text-sm font-semibold text-primary">{selectedMember.role}</p>
              </DialogHeader>
              <div className="grid md:grid-cols-[300px,1fr] gap-6 mt-4">
                <div className="w-full aspect-square rounded-lg overflow-hidden flex-shrink-0">
                  <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="space-y-4">
                    {selectedMember.description.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed text-sm text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <Button className="w-full mt-6" size="lg" asChild>
                    <a href={selectedMember.bookingUrl} target="_blank" rel="noopener noreferrer">
                      PRENDRE RENDEZ-VOUS
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Team;
