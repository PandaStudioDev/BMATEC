import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="relative w-full h-[300px] md:h-[500px] bg-matec-blue flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Imagen de Fondo */}
      <img
        src="/banner.jpg"
        alt="Boilers Matec Portada"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay degradado para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>

      {/* Contenedor de Texto */}
      <div className="relative z-10 text-center text-white p-6 md:p-10 bg-matec-red/80 backdrop-blur-sm rounded-2xl border-8 border-black shadow-lg max-w-3xl mx-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg">
          <span className="pfont">
            Soluciones Profesionales de Planchado y Fusionado
          </span>
        </h1>
      </div>
    </motion.section>
  );
};

export default HeroSection;
