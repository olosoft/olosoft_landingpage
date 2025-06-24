
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Chi Siamo
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              <strong className="text-blue-600">Olosoft</strong> è un team di sviluppatori e designer appassionati 
              che si dedica alla creazione di esperienze digitali eccezionali. Con anni di esperienza 
              nel settore del web design e sviluppo, aiutiamo aziende di ogni dimensione a 
              trasformare le loro idee in realtà digitali di successo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-600">Progetti Completati</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600">Clienti Soddisfatti</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <p className="text-gray-600">Anni di Esperienza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
