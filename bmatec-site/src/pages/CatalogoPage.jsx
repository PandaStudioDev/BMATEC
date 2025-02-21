import React from "react";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import ProductoCard from "../components/ProductoCard";
import { Catalogo } from "../data/catalogoBank";

function CatalogoPage() {
  return (
    <div>
      <NavBar />
      <main className="py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Catálogo de Productos
        </h1>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {Catalogo.map((producto, index) => (
            <ProductoCard key={index} producto={producto} />
          ))}
        </div>

        {/* Sección "Próximamente" */}
        <section className="mt-16 px-4 py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Próximamente
            </h2>
            <p className="text-lg text-gray-600">
              Estamos trabajando constantemente para ampliar nuestro catálogo y
              ofrecer equipos adaptados a tus necesidades. ¡Mantente atento a
              nuestras novedades!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CatalogoPage;
