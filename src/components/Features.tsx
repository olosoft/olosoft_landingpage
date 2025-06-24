
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "💻",
      title: "Design moderno",
      description: "Interfacce eleganti e intuitive che riflettono l'identità del tuo brand"
    },
    {
      icon: "📱",
      title: "Ottimizzato per mobile",
      description: "Esperienza perfetta su tutti i dispositivi, smartphone, tablet e desktop"
    },
    {
      icon: "🔍",
      title: "SEO-Friendly",
      description: "Ottimizzazione per i motori di ricerca per massimizzare la tua visibilità online"
    },
    {
      icon: "⚡",
      title: "Caricamento veloce",
      description: "Performance ottimizzate per tempi di caricamento fulminei"
    },
    {
      icon: "🔒",
      title: "Sicurezza garantita",
      description: "Protezione avanzata con certificati SSL e sistemi di sicurezza aggiornati"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perché scegliere <span className="text-blue-600">Olosoft</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Offriamo soluzioni complete per la tua presenza digitale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
