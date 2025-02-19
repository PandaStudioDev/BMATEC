// CatalogoPage.js
import React from "react";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import ProductoCard from "../components/ProductoCard";
import { Catalogo } from "../data/catalogoBank";

function CatalogoPage() {
  return (
    <div>
      <NavBar />

      {/* Products Main Section */}
      <h1 className="text-3xl font-bold my-8 text-center">
        Catálogo de Productos
      </h1>
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Catalogo.map((producto, index) => (
          <ProductoCard key={index} producto={producto} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default CatalogoPage;
