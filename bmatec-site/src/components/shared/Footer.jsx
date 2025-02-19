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
              Calle Industria 123, Zona Industrial <br />
              Ciudad, País <br />
              +52 123 456 7890
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Horarios de Atención:
            </h3>
            <p className="text-gray-400">
              Lunes - Viernes: 09:00 - 18:00 hrs <br />
              Sábado: 09:00 - 14:00 hrs <br />
              Domingo: Cerrado
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Contacto:</h3>
            <p className="text-gray-400">contacto@boilersmatec.com</p>
          </div>

          {/* Mapa */}
          <div className="flex items-center justify-center text-gray-300 text-sm">
            <iframe
              className="w-full h-64 rounded-lg border-matec-red border-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799165398!2d-74.2598716872043!3d40.69767006682913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUyLjciTiA3NMKwMTUnMDUuNiJX!5e0!3m2!1ses-419!2s!4v1630941669613!5m2!1ses-419!2s"
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
