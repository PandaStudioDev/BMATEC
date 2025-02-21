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
    <div className="max-w-xl mx-auto overflow-hidden bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-xl h-60 object-cover transition-transform duration-300 hover:scale-105"
          src={imagen}
          alt={`${nombre} ${modelo}`}
        />
      </div>
      <div className="px-4 py-4">
        <h3 className="font-bold text-2xl mb-2 text-gray-800">
          {nombre} ({modelo})
        </h3>
        <p className="text-gray-600 text-base mb-2">{descripcion}</p>
        <p className="text-gray-600 text-base mb-2">
          <strong>Alimentación:</strong> {alimentacion}
        </p>
        {incluye && (
          <p className="text-gray-600 text-base mb-2">
            <strong>Incluye:</strong> {incluye}
          </p>
        )}
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-gradient-to-r from-matec-blue to-technical-blue hover:from-technical-blue hover:to-matec-blue text-white font-bold py-3 px-4 rounded transition-colors duration-300"
        >
          Cotizar Ahora
        </button>
      </div>
    </div>
  );
};

export default ProductoCard;
