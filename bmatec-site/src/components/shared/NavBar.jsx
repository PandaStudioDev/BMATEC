import { useState } from "react";
import { Menu, X } from "lucide-react";

import LogoSrc from "../../assets/BOILERS.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
        {/* Botón Menú */}
        <button onClick={() => setIsOpen(true)}>
          <Menu className="w-8 h-8 text-white cursor-pointer" />
        </button>

        {/* Logo */}
        <img src={LogoSrc} alt="Logo" className="h-auto w-24 md:ml-20" />

        {/* Botón Cotización */}
        <a
          href="/cotizar"
          className="hidden lg:block border-b border-white hover:text-gray-300"
        >
          Hacer una Cotización
        </a>
      </nav>

      {/* MENÚ DESPLEGABLE */}
      <div
        className={`fixed inset-0 bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 shadow-lg w-64`}
      >
        {/* Cerrar Menú */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
        >
          <X className="w-8 h-8 text-black cursor-pointer" />
        </button>

        {/* Contenido del Menú */}
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-bold text-matec-red">Menú</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <a href="/" className="hover:text-technical-blue">
                Inicio
              </a>
            </li>
            <li>
              <a href="/catalogo" className="hover:text-technical-blue">
                Catálogo
              </a>
            </li>
            <li>
              <a href="/cotizar" className="hover:text-technical-blue">
                Hacer una Cotización
              </a>
            </li>
          </ul>
          <hr />
          {/* <a
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-black lg:mt-[60vh]"
          >
            <span>⚙️</span> Configuración
          </a> */}
          <a
            href="https://www.facebook.com/matecmonse"
            className="flex items-center gap-2 text-gray-600 hover:text-black"
          >
            <span>🚪</span> Visitanos en Facebook
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
