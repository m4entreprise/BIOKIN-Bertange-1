import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dumbbell, Activity } from "lucide-react";
import magicPillPerson from "@/assets/magic-pill-person.png";
import biokinMat from "@/assets/biokin-mat.png";
import magicPillShirt from "@/assets/magic-pill-shirt.png";
import workoutPushup from "@/assets/workout-pushup.png";

const Philosophy = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">THERE IS NO MAGIC PILL</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Il n'existe pas de remède miracle. La guérison demande du temps, des efforts constants et
            une approche globale. Seul un engagement actif garantit des résultats durables.
          </p>
        </div>

        <div className="grid gap-4 w-full min-w-0" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gridTemplateRows: 'repeat(3, 280px)' }}>
          {/* E1: C1, L1-L2 */}
          <div className="col-start-1 col-span-1 row-start-1 row-span-2 bg-card rounded-2xl border-2 border-primary/20 shadow-lg overflow-hidden">
            <img
              src={magicPillPerson}
              alt="There is no magic pill"
              className="w-full h-full object-cover"
            />
          </div>

          {/* E2: C1, L3 */}
          <div className="col-start-1 col-span-1 row-start-3 row-span-1 bg-card rounded-2xl p-6 border-2 border-accent shadow-lg flex flex-col items-center justify-center">
            <Dumbbell className="w-10 h-10 mb-3 text-accent" />
            <h3 className="text-xl font-bold text-center mb-2">MATÉRIELS HAUTE-GAMME</h3>
            <p className="text-sm text-center text-muted-foreground">
              Notre centre est équipé avec tout l'équipement nécessaire pour vous assurer une prise en charge optimale.
            </p>
          </div>

          {/* E3: C2, L1 */}
          <div className="col-start-2 col-span-1 row-start-1 row-span-1 bg-card rounded-2xl overflow-hidden shadow-lg">
            <img
              src={biokinMat}
              alt="BIOKIN Mat"
              className="w-full h-full object-cover"
            />
          </div>

          {/* E4: C2, L2 */}
          <div className="col-start-2 col-span-1 row-start-2 row-span-1 bg-card rounded-2xl p-6 border-2 border-primary shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-primary mb-2">BIOKIN VOUS INTÉRESSE ?</h3>
            <Button
              variant="outline"
              size="sm"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6"
              asChild
            >
              <Link to="/a-propos">
                En savoir plus
              </Link>
            </Button>
          </div>

          {/* E5: C2-C3, L3 */}
          <div className="col-start-2 col-span-2 row-start-3 row-span-1 bg-card rounded-2xl overflow-hidden shadow-lg">
            <img
              src={workoutPushup}
              alt="Workout training"
              className="w-full h-full object-cover"
            />
          </div>

          {/* E6: C3, L1 */}
          <div className="col-start-3 col-span-1 row-start-1 row-span-1 bg-accent rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-accent-foreground">
            <Activity className="w-10 h-10 mb-3" />
            <h3 className="text-2xl font-bold mb-3 text-center">RÉÉDUCATION ACTIVE</h3>
            <p className="text-center text-sm">
              Notre approche de rééducation active vous engage pleinement dans votre processus de guérison.
            </p>
          </div>

          {/* E7: C3, L2 */}
          <div className="col-start-3 col-span-1 row-start-2 row-span-1 bg-card rounded-2xl overflow-hidden shadow-lg">
            <img
              src={magicPillShirt}
              alt="There is no magic pill"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
