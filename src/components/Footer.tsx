import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t py-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">REJOIGNEZ NOTRE NEWSLETTER</h3>
              <p className="text-foreground font-semibold mb-6">
                Restez informé des dernières actualités et
                <br />
                conseils en kinésithérapie sportive !
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-foreground">89-91 Route de Longwy, L-8080 Bertrange</p>
              <p className="text-foreground">Lun – vendredi : 8h00 – 20h00,</p>
              <a href="mailto:ask@biokin.lu" className="text-primary hover:underline block">
                ask@biokin.lu
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:003526211509411" className="text-xl font-semibold hover:text-primary transition-colors">
                00352 621 150 941
              </a>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-4">SUIVEZ-NOUS</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/physiotherapiebiokin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-secondary transition-colors group"
                >
                  <Facebook className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/biokin.lu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-secondary transition-colors group"
                >
                  <Instagram className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/company/biokin/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-secondary transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.874658466!2d6.050891976544982!3d49.608900671494524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548f8e6c3c6d9%3A0x8e0b0b0b0b0b0b0b!2s89-91%20Route%20de%20Longwy%2C%20L-8080%20Bertrange%2C%20Luxembourg!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BIOKIN Location - 89-91 Route de Longwy, L-8080 Bertrange"
            />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-muted-foreground">
          <p>
            &copy; 2025 BIOKIN. Tous droits réservés. | Site web réalisé avec ❤️ par M4 Entreprise, designed by KREATE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
