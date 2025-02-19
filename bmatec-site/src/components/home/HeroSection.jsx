import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="relative w-full h-[300px] md:h-[500px] bg-matec-blue flex items-center justify-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Imagen de fondo */}
      <img
        src="/banner.jpg"
        alt="Boilers Matec Portada"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Texto o slogan */}
      <div className="relative text-center text-white bg-matec-red p-6 rounded-2xl border-8 border-black">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Soluciones Profesionales de Planchado y Fusionado
        </h1>
      </div>
    </motion.section>
  );
};

export default HeroSection;
