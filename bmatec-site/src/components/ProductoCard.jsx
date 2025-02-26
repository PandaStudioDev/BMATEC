import React from "react";

const ProductoCard = ({ producto }) => {
  const { nombre, modelo, descripcion, alimentacion, incluye, imagen } =
    producto;

  const handleWhatsAppClick = () => {
    const mensaje = `Hola, estoy interesado en uno de sus equipos\nMe gustaría cotizar una ${nombre} (${modelo}).\n¿Podrían apoyarme con más información?`;
    const numeroTelefono = "5217751485546"; // Número de WhatsApp de Boilers Matec
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-[280px] h-[500px] lg:w-[400px] lg:h-[600px] mx-auto bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col">
      {/* Imagen */}
      <div className="h-60 lg:h-80">
        <img
          src={imagen}
          alt={`${nombre} ${modelo}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="flex-grow flex flex-col justify-between p-4">
        <div>
          <h3 className="font-bold text-lg lg:text-xl text-gray-800 mb-2">
            {nombre} ({modelo})
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-1 whitespace-pre-line">
            {descripcion}
          </p>
          <p className="text-gray-600 text-sm sm:text-base mb-1">
            <strong>Alimentación:</strong> {alimentacion}
          </p>
          {incluye && (
            <p className="text-gray-600 text-sm sm:text-base mb-1">
              <strong>Incluye:</strong> {incluye}
            </p>
          )}
        </div>

        {/* Botón */}
        <div className="mt-4">
          <button
            onClick={handleWhatsAppClick}
            className="w-full z-10 cursor-pointer bg-gradient-to-r from-matec-blue to-technical-blue hover:from-technical-blue hover:to-matec-blue text-white font-bold py-2 rounded-xl transition-colors duration-300"
          >
            Cotizar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;
