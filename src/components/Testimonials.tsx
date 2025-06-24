
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marco Rossi",
      company: "Azienda Tech Solutions",
      text: "Olosoft ha trasformato completamente la nostra presenza online. Il nuovo sito è moderno, veloce e ha aumentato le nostre conversioni del 300%.",
      rating: 5
    },
    {
      name: "Laura Bianchi",
      company: "Studio Legale Bianchi",
      text: "Professionalità e competenza eccezionali. Il team di Olosoft ha capito perfettamente le nostre esigenze e ha creato un sito web che rispecchia la nostra serietà.",
      rating: 5
    },
    {
      name: "Giuseppe Verde",
      company: "Ristorante Il Giardino",
      text: "Grazie al nuovo sito web realizzato da Olosoft, abbiamo triplicato le prenotazioni online. Design elegante e funzionalità perfette!",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="text-yellow-400">⭐</span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cosa dicono i nostri <span className="text-blue-600">clienti</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra priorità
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
