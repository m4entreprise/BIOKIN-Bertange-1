import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const NotFound = () => {
  const location = useLocation();

  usePageMetadata({
    title: "404 - Page introuvable | BIOKIN",
    description:
      "La page que vous recherchez n'existe pas. Retrouvez les informations sur BIOKIN, centre de kinésithérapie du sport à Bertrange.",
    canonical: "https://www.biokin.lu/404",
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-secondary/30">
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-xl text-center space-y-6 bg-background/80 backdrop-blur rounded-3xl border border-border px-10 py-12 shadow-lg">
          <div className="text-primary text-sm font-semibold tracking-widest uppercase">Erreur 404</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Oups, cette page est introuvable
          </h1>
          <p className="text-muted-foreground">
            L'adresse « {location.pathname} » ne correspond à aucune page BIOKIN. Retournez à l'accueil ou explorez nos services pour trouver l'information recherchée.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/">Retour à l'accueil</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
              <Link to="/a-propos">Découvrir BIOKIN</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
