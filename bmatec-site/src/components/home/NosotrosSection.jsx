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
      <div className="bg-gray-900 text-white py-16 px-6">
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
            Aquí va la historia de la empresa: cómo nació Boilers Matec, su
            trayectoria y su compromiso con la industria de planchado y
            fusionado industrial.
          </p>
          <img
            src="/ruta-imagen-historia.jpg"
            alt="Historia Boilers Matec"
            className="w-full h-auto mt-4"
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
            Describir aquí la misión de la empresa, enfocada en proveer
            soluciones eficientes y de alta calidad en equipos industriales de
            planchado y fusionado.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-6">Visión</h3>
          <p>
            Explicar la visión de la empresa a largo plazo, su compromiso con la
            innovación y la satisfacción del cliente.
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
              – Cliente Satisfecho
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
              – Otro Cliente
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSection;
