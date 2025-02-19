import React, { useState } from "react";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

function LandingPage() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [producto, setProducto] = useState("");
  const [similar, setSimilar] = useState("");
  const [tamano, setTamano] = useState("");
  const [energia, setEnergia] = useState("");
  const [capacidad, setCapacidad] = useState("");
  const [instalacion, setInstalacion] = useState("No");
  const [detalles, setDetalles] = useState("");

  const enviarWhatsApp = () => {
    const numeroMatec = "5217751485546";

    const mensaje = `¡Hola! Quiero solicitar una cotización en Boilers Matec.\n\n
    🔹 Producto de interés: *${producto || "No seleccionado"}*\n
    🔹 Busco algo similar a: *${similar || "No especificado"}*\n
    🔹 Tamaño Aproximado: *${tamano || "No especificado"}*\n
    🔹 Tipo de Energía: *${energia || "No especificado"}*\n
    🔹 Capacidad Estimada: *${capacidad || "No especificado"}*\n
    🔹 ¿Necesita instalación?: *${instalacion}*\n
    🔹 Detalles adicionales: *${detalles || "Sin detalles adicionales"}*\n\n
    📌 *Mis Datos:*\n
    👤 *Nombre:* ${nombre}\n
    📞 *Teléfono:* ${telefono}`;

    const url = `https://wa.me/${numeroMatec}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <NavBar />

      {/* Formulario Cotización */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Solicita tu Cotización
        </h2>

        <label className="block font-semibold">Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />

        <label className="block font-semibold">Teléfono:</label>
        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />

        <label className="block font-semibold">Producto de interés:</label>
        <input
          type="text"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          placeholder="Ej: Generador de Vapor"
        />

        <label className="block font-semibold">Busco algo similar a:</label>
        <input
          type="text"
          value={similar}
          onChange={(e) => setSimilar(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          placeholder="Ej: Generador Alta Presión"
        />

        <label className="block font-semibold">Tamaño Aproximado:</label>
        <select
          value={tamano}
          onChange={(e) => setTamano(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="">Selecciona</option>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
          <option value="Personalizado">Personalizado</option>
        </select>

        <label className="block font-semibold">Tipo de Energía:</label>
        <select
          value={energia}
          onChange={(e) => setEnergia(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="">Selecciona</option>
          <option value="Gas LP">Gas LP</option>
          <option value="Gas Natural">Gas Natural</option>
          <option value="Eléctrico">Eléctrico</option>
          <option value="Otro">Otro</option>
        </select>

        <label className="block font-semibold">Capacidad Estimada:</label>
        <select
          value={capacidad}
          onChange={(e) => setCapacidad(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="">Selecciona</option>
          <option value="5 HP">5 HP</option>
          <option value="10 HP">10 HP</option>
          <option value="15 HP">15 HP</option>
          <option value="Otro">Otro</option>
        </select>

        <label className="block font-semibold">¿Necesita instalación?</label>
        <select
          value={instalacion}
          onChange={(e) => setInstalacion(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="No">No</option>
          <option value="Sí">Sí</option>
        </select>

        <label className="block font-semibold">¿Detalles adicionales?</label>
        <textarea
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        ></textarea>

        <button
          onClick={enviarWhatsApp}
          className="bg-matec-blue text-white font-bold p-3 rounded w-full"
        >
          Enviar Cotización por WhatsApp
        </button>
      </div>

      {/* Botones 'Otros Servicios' */}
      <div className="flex-col text-center justify-center mt-6 space-x-4">
        <h3> Otros Servicios</h3>
        <button className="bg-blue-500 text-white font-bold p-3 rounded">
          Solicitar una Instalación
        </button>
        <button className="bg-red-500 text-white font-bold p-3 rounded">
          Mantenimiento Preventivo
        </button>
        <button className="bg-yellow-500 text-white font-bold p-3 rounded">
          Asesoría Técnica
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
