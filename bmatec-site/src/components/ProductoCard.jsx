import React from "react";

const ProductoCard = ({ producto }) => {
  const { nombre, modelo, descripcion, incluye, precio_estimado, imagen } =
    producto;

  const handleWhatsAppClick = () => {
    const mensaje = `Hola, estoy interesado en el producto ${nombre} (${modelo}). ¿Podrían proporcionarme más información?`;
    const numeroTelefono = "5217751485546"; // Número de WhatsApp de Boilers MATEC
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imagen} alt={`${nombre} ${modelo}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {nombre} ({modelo})
        </div>
        <p className="text-gray-700 text-base">{descripcion}</p>
        <p className="text-gray-700 text-base">
          <strong>Incluye:</strong> {incluye}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Precio estimado:</strong> ${precio_estimado}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Comprar Ahora
        </button>
      </div>
    </div>
  );
};

export default ProductoCard;
