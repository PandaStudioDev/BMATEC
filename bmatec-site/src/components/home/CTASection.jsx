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
        Somos Boilers Matec – Innovación y Calidad Industrial
      </h2>
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
        Descubre equipos de planchado y fusionado diseñados para transformar la
        productividad de tu negocio. Cada máquina refleja eficiencia, robustez y
        tecnología de punta.
      </p>
      <a
        href="/catalogo"
        className="mt-6 inline-block px-8 py-4 bg-red-600 text-white text-lg font-bold pfont rounded-md hover:bg-red-700 transition transform animate-catalogPulse"
      >
        Ver Catálogo
      </a>
    </motion.section>
  );
};

export default CTASection;
