
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Olosoft</h3>
            <p className="text-gray-400">Siti Web su Misura</p>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://www.instagram.com/olo.soft/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="mailto:info@olosoftvision@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Email
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Olosoft. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
