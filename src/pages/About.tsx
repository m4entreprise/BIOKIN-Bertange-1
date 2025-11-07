import { Button } from "@/components/ui/button";
import { Activity, Users, Heart, Award, Columns, ClipboardCheck } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import biokinLogo from "@/assets/biokin-logo.webp";
const services = [{
  icon: Activity,
  title: "KINÉSITHÉRAPIE SPORTIVE"
}, {
  icon: Users,
  title: "KINÉSITHÉRAPIE GÉNÉRALE"
}, {
  icon: Heart,
  title: "RÉHABILITATION POST-OPÉRATOIRE"
}, {
  icon: Award,
  title: "RÉATHLÉTISATION / PERFORMANCE"
}, {
  icon: Columns,
  title: "THÉRAPIE MANUELLE"
}, {
  icon: ClipboardCheck,
  title: "SCREENING D'ÉQUIPE"
}];
const methods = [{
  number: "1",
  title: "LA PRISE DE RENDEZ-VOUS",
  content: "Une fois sur la page Notre équipe, sélectionnez le praticien de votre choix et prenez rendez-vous sur Doctolib ou bien simplement par téléphone au 00352 621 150 941."
}, {
  number: "2",
  title: "LE PREMIER RENDEZ-VOUS",
  content: "Votre rendez-vous se déroulera à Bertrange. Nous établirons un premier bilan et un encadrement personnalisé en fonction de vos objectifs sera mis en place."
}, {
  number: "3",
  title: "LE SUIVI",
  content: "Suite à notre première rencontre, un suivi sera établi pour maximiser votre guérison. Devenez acteur de votre rééducation."
}, {
  number: "4",
  title: "LA RÉCUPÉRATION OPTIMALE",
  content: "Votre objectif est atteint. Nous restons à votre disposition pour anticiper ou préparer vos futurs projets avec succès."
}];
const faqs = [{
  question: "Quels types de services proposez-vous chez BIOKIN ?",
  answer: "Nous proposons une gamme complète de services incluant la kinésithérapie sportive, la kinésithérapie générale, la réhabilitation post-opératoire, la réathlétisation/performance, la thérapie manuelle et le screening d'équipe."
}, {
  question: "Quels sont vos horaires d'ouverture ?",
  answer: "Nous sommes ouverts du lundi au vendredi de 8h00 à 20h00. Pour prendre rendez-vous, contactez-nous via Doctolib ou appelez le 00352 621 150 941."
}, {
  question: "Quel équipement utilisez-vous pour les séances de rééducation ?",
  answer: "Nous disposons d'équipements modernes et spécialisés pour la rééducation active, incluant du matériel de renforcement, des outils de thérapie manuelle et des technologies avancées pour optimiser votre récupération."
}, {
  question: "Que dois-je apporter pour ma première séance ?",
  answer: "Pour votre première séance, apportez votre prescription médicale, votre carte d'identité, votre carte de sécurité sociale et des vêtements confortables adaptés à l'exercice."
}, {
  question: "Quels types de pathologies traitez-vous ?",
  answer: "Nous traitons un large éventail de pathologies incluant les blessures sportives, les douleurs musculo-squelettiques, les pathologies post-opératoires, les troubles posturaux et bien plus encore."
}, {
  question: "Comment se déroule une première séance de kinésithérapie ?",
  answer: "La première séance commence par un bilan complet de votre condition, suivi d'un examen physique. Nous établissons ensuite un plan de traitement personnalisé adapté à vos objectifs et besoins spécifiques."
}, {
  question: "Offrez-vous des séances de groupe ou seulement des consultations individuelles ?",
  answer: "Nous proposons principalement des consultations individuelles pour garantir une prise en charge personnalisée. Cependant, nous offrons également des séances de screening d'équipe pour les groupes sportifs."
}];
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen">
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
              <p className="text-lg text-muted-foreground mb-6">
                BIOKIN est un centre de kinésithérapie spécialisé dans la rééducation sportive. Nous offrons des soins 
                personnalisés basés sur les dernières avancées scientifiques, en mettant l'accent sur une approche 
                active où chaque patient est acteur de sa guérison.
              </p>
              <Button size="lg" className="rounded-full" asChild>
                <Link to="/contact">
                  Prendre rendez-vous
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">NOS SERVICES</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Notre cabinet propose tout un panel complet de services pour vous garantir une prise en charge optimale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => <div key={index} className="bg-secondary/30 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 border-2 border-primary/20">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>)}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">NOTRE MÉTHODE</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {methods.map((method, index) => <div key={index} className="bg-card rounded-3xl p-8 shadow-lg border-2 border-primary/20 flex gap-6">
                <div className="text-7xl font-bold text-primary flex-shrink-0">
                  {method.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{method.content}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">QUESTIONS-RÉPONSES</h2>
            <p className="text-center text-muted-foreground mb-12 italic">
              Vous avez des questions ? Voici nos réponses aux plus fréquentes d'entre elles !
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border-2 border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-primary hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      <Footer />
    </div>;
};
export default AboutPage;