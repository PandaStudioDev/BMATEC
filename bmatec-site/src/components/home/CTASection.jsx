import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
        Descubre Nuestro Catálogo de Equipos Industriales
      </h2>
      <p className="text-gray-600 mt-4 max-w-xl mx-auto">
        Encuentra la solución ideal para tus necesidades de planchado y
        fusionado.
      </p>
      <a
        href="/catalogo"
        className="mt-6 inline-block px-6 py-3 bg-red-600 text-white text-lg font-bold rounded-md hover:bg-red-700 transition"
      >
        Ver Catálogo
      </a>
    </motion.section>
  );
};

export default CTASection;
