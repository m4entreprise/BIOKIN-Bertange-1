import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
    <div className="flex min-h-screen items-center justify-center bg-secondary/30 px-4">
      <div className="max-w-xl text-center space-y-6">
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
    </div>
  );
};

export default NotFound;
