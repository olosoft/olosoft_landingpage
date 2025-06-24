
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Iniziamo insieme il tuo progetto
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            📩 Contattaci su Instagram o via email per collaborazioni
          </p>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Instagram</h3>
                  <Button 
                    asChild
                    variant="outline" 
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                  >
                    <a 
                      href="https://instagram.com/olosoft.dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      @olosoft.dev
                    </a>
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
                  <Button 
                    asChild
                    variant="outline" 
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                  >
                    <a 
                      href="mailto:info@olosoft.dev"
                      className="inline-flex items-center"
                    >
                      info@olosoft.dev
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-white/80 text-center">
                  Rispondiamo entro 24 ore a tutte le richieste di preventivo
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
