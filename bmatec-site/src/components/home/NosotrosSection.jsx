import { motion } from "framer-motion";

/**
 * Variantes de animación:
 * - "hidden": estado inicial (elemento invisible/desplazado)
 * - "show": estado final (elemento visible/posición normal)
 */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const NosotrosSection = () => {
  return (
    <section className="w-full">
      {/* HISTORIA */}
      <div className="bg-matec-blue text-white py-16 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          Nosotros
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <p>
            Boilers Matec nació con el firme propósito de revolucionar el sector
            industrial mediante soluciones de planchado y fusionado de alta
            eficiencia. Desde nuestros inicios, nos hemos dedicado a diseñar y
            proporcionar equipos industriales que no solo cumplen, sino que
            superan las expectativas de nuestros clientes. Nuestra trayectoria
            se ha caracterizado por una constante innovación y un compromiso
            inquebrantable con la calidad, consolidándonos como líderes en
            tecnología industrial moderna.
          </p>
          <img
            src="/historia.jpg"
            alt="Historia Boilers Matec"
            className="w-96 h-auto mt-4 mx-auto rounded-3xl"
            // style={{
            //   maskImage: "linear-gradient(to bottom, black, 98%, transparent)",
            // }}
          />
        </motion.div>
      </div>

      {/* MISIÓN Y VISIÓN */}
      <div className="bg-matec-red text-white py-16 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Misión</h3>
          <p className="mb-8">
            Nuestra misión es ser el aliado estratégico de las empresas que
            buscan optimizar su productividad a través de equipos de planchado y
            fusionado de alto rendimiento. Nos dedicamos a ofrecer soluciones
            integrales que incluyen la venta de maquinaria industrial de
            vanguardia, refacciones de calidad y servicios de mantenimiento
            especializados. Todo ello respaldado por un equipo de expertos
            comprometidos con la excelencia y la satisfacción total de nuestros
            clientes.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-6">Visión</h3>
          <p>
            Aspiramos a consolidarnos como la empresa líder en soluciones
            industriales a nivel nacional, reconocida por nuestra capacidad de
            innovación, calidad superior y atención personalizada. Buscamos
            expandir nuestra presencia en el mercado, adaptándonos a las
            necesidades cambiantes de nuestros clientes y contribuyendo al
            desarrollo sostenible de la industria mediante prácticas
            responsables y productos eficientes.
          </p>
        </motion.div>
      </div>

      {/* TESTIMONIOS */}
      <div className="bg-gray-100 text-gray-800 py-16 px-6">
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          Testimonios de Nuestros Clientes
        </motion.h3>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded shadow"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <p>
              "Excelente servicio y equipos de alta calidad. Gracias a Boilers
              Matec, nuestro proceso de planchado es mucho más eficiente."
            </p>
            <div className="mt-4 text-right text-sm text-gray-500">
              – Texnova S.A.
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded shadow"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <p>
              "Con su asesoría, encontramos la máquina ideal para nuestra línea
              de producción. ¡Recomendadísimos!"
            </p>
            <div className="mt-4 text-right text-sm text-gray-500">
              – Planchado Tulancingo
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded shadow"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <p>
              "La calidad de sus productos y el servicio al cliente es
              inigualable. Sin duda, una excelente inversión para nuestra
              empresa."
            </p>
            <div className="mt-4 text-right text-sm text-gray-500">
              – Industrias López
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSection;
