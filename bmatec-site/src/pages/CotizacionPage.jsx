import React, { useState } from "react";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import { Catalogo } from "../data/catalogoBank";

// Componente Dropdown personalizado para seleccionar el producto con miniatura
const ProductDropdown = ({ selectedProduct, setSelectedProduct }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-full p-2 border rounded text-left flex items-center justify-between focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedProduct
          ? `${selectedProduct.nombre} (${selectedProduct.modelo})`
          : "Selecciona un producto"}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border rounded mt-1 shadow-lg max-h-60 overflow-y-auto">
          {Catalogo.map((prod, idx) => (
            <div
              key={idx}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedProduct(prod);
                setIsOpen(false);
              }}
            >
              <img
                src={prod.imagen}
                alt={prod.nombre}
                className="w-10 h-10 object-cover rounded mr-2"
              />
              <div>
                <div className="font-semibold text-gray-800">{prod.nombre}</div>
                <div className="text-sm text-gray-500">{prod.modelo}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CotizacionPage = () => {
  const [nombre, setNombre] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [tamano, setTamano] = useState("");
  const [perso, setPerso] = useState("");
  const [cperso, setCperso] = useState("");
  const [energia, setEnergia] = useState("");
  const [capacidad, setCapacidad] = useState("");
  const [instalacion, setInstalacion] = useState("No");
  const [detalles, setDetalles] = useState("");

  const enviarWhatsApp = () => {
    const numeroMatec = "5217751485546";
    const mensaje = `Hola, ¿Qué tal? Mi Nombre es *${nombre}*

Me gustaría solicitar una cotización sobre un equipo con ustedes.

Producto de interés: *${
      selectedProduct
        ? `${selectedProduct.nombre} (${selectedProduct.modelo})`
        : "No seleccionado"
    }*
Tamaño Aproximado: *${tamano || "No especificado"}*
Tamaño Personalizado: *${perso || "No necesario"}*
Tipo de Energía: *${energia || "No especificado"}*
Capacidad Estimada: *${capacidad || "No especificado"}*
Capacidad Específica: *${cperso || "No necesario"}*
¿Necesita instalación?: *${instalacion}*
Detalles adicionales: *${detalles || "Sin detalles adicionales"}*`;

    const url = `https://wa.me/${numeroMatec}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  const enviarWhatsAppServicio = (servicio) => {
    const numeroMatec = "5217751485546";
    const mensaje = `¡Hola! ¿Podrían apoyarme con una *${servicio}*, Por favor?`;
    const url = `https://wa.me/${numeroMatec}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <NavBar />

      {/* Formulario de Cotización */}
      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Solicita tu Cotización
          </h2>

          <label className="block font-semibold mb-1">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-matec-blue"
          />

          <label className="block font-semibold mb-1">
            Producto de Interés:
          </label>
          <ProductDropdown
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
          <p className="text-sm text-gray-500 mb-3">
            Seleccione un producto de nuestro catálogo.
          </p>

          <label className="block font-semibold mb-1">Tamaño Aproximado:</label>
          <select
            value={tamano}
            onChange={(e) => setTamano(e.target.value)}
            className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-matec-blue"
          >
            <option value="">Selecciona</option>
            <option value="Pequeño">Pequeño (-2m)</option>
            <option value="Mediano">Mediano (2m a 4m)</option>
            <option value="Grande">Grande (+4m)</option>
            <option value="Personalizado">Personalizado</option>
          </select>
          {tamano === "Personalizado" && (
            <>
              <label className="block font-semibold mb-1">
                Ingrese un Tamaño Personalizado:
              </label>
              <input
                type="text"
                placeholder="Ingresa el tamaño aproximado que busca en su equipo"
                value={perso}
                onChange={(e) => setPerso(e.target.value)}
                className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-matec-blue"
              />
            </>
          )}

          <label className="block font-semibold mb-1">Tipo de Energía:</label>
          <select
            value={energia}
            onChange={(e) => setEnergia(e.target.value)}
            className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-matec-blue"
          >
            <option value="">Selecciona</option>
            <option value="Gas LP">Gas LP</option>
            <option value="Gas Natural">Gas Natural</option>
            <option value="Eléctrico">Eléctrica</option>
            <option value="Diesel">Electrogas</option>
            <option value="Otro">Otro</option>
          </select>

          <label className="block font-semibold mb-1">
            Capacidad Estimada:
          </label>
          <select
            value={capacidad}
            onChange={(e) => setCapacidad(e.target.value)}
            className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-matec-blue"
          >
            <option value="">Selecciona</option>
            <option value="2 Planchas">2 Planchas</option>
            <option value="4 Planchas">4 Planchas</option>
            <option value="6 Planchas">6 Planchas</option>
            <option value="10 HP">10 HP</option>
            <option value="15 HP">15 HP</option>
            <option value="Otro">Otro</option>
          </select>
          {capacidad === "Otro" && (
            <>
              <label className="block font-semibold mb-1">
                Ingrese una Capacidad Personalizada:
              </label>
              <input
                type="text"
                placeholder="La capacidad específica que busca en su equipo"
                value={cperso}
                onChange={(e) => setCperso(e.target.value)}
                className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-matec-blue"
              />
            </>
          )}

          <label className="block font-semibold mb-1">
            ¿Necesita instalación?
          </label>
          <select
            value={instalacion}
            onChange={(e) => setInstalacion(e.target.value)}
            className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-matec-blue"
          >
            <option value="No">No</option>
            <option value="Sí">Sí</option>
          </select>

          <label className="block font-semibold mb-1">
            Detalles adicionales:
          </label>
          <textarea
            value={detalles}
            onChange={(e) => setDetalles(e.target.value)}
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-matec-blue"
          ></textarea>

          <button
            onClick={enviarWhatsApp}
            className="w-full bg-matec-blue hover:bg-technical-blue text-white font-bold py-3 rounded transition-colors duration-300"
          >
            Enviar Cotización por WhatsApp
          </button>
        </div>

        {/* Sección de Servicios Extra */}
        <div className="max-w-lg mx-auto mt-10 text-center">
          <h3 className="text-xl font-bold mb-4">Otros Servicios</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => enviarWhatsAppServicio("Instalación de Equipo")}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-4 rounded transition transform hover:scale-105"
            >
              Solicitar Instalación
            </button>
            <button
              onClick={() =>
                enviarWhatsAppServicio("Revisión de Mantenimiento")
              }
              className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-3 px-4 rounded transition transform hover:scale-105"
            >
              Mantenimiento Preventivo
            </button>
            <button
              onClick={() => enviarWhatsAppServicio("Asesoría Técnica")}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-4 rounded transition transform hover:scale-105"
            >
              Asesoría Técnica
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CotizacionPage;
