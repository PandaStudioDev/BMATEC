import LogoSrc from "../../assets/BOILERS.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Contenedor Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información de Contacto */}
          <div>
            <img src={LogoSrc} alt="Logo Matec" className="w-24 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Visítanos:</h3>
            <p className="text-gray-400">
              Carretera Tulancingo - Cuautepec Km 5 <br />
              Las Cortinas del Pedregal <br />
              +52 775 148 5546
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Horarios de Atención:
            </h3>
            <p className="text-gray-400">
              Lunes - Viernes: 09:00 - 19:00 hrs <br />
              Sábado: 09:00 - 16:00 hrs <br />
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Contacto:</h3>
            <a
              href="mailto:almeidamonserrath66@gmail.com"
              className="text-gray-400"
            >
              almeidamonserrath66@gmail.com
            </a>
          </div>

          {/* Mapa */}
          <div className="flex items-center justify-center text-gray-300 text-sm">
            <iframe
              className="w-full h-64 rounded-lg border-matec-red border-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468.49948739643435!2d-98.33290621641945!3d20.05061450011133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d057378875598f%3A0x4c36e121895a9f5d!2sFerreter%C3%ADa%20Y%20Torniller%C3%ADa%20%22Las%20Cortinas%22!5e0!3m2!1ses!2smx!4v1740169449139!5m2!1ses!2smx"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
