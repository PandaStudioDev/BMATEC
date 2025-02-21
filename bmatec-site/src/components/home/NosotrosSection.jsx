import { motion } from "framer-motion";

/**
 * Variantes de animación para el contenido textual.
 */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

/**
 * Variantes de animación para la imagen.
 * Se aplica un efecto de escalado para enfatizar la entrada de la imagen.
 */
const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const NosotrosSection = () => {
  return (
    <section className="w-full">
      {/* HISTORIA */}
      <div className="bg-matec-blue text-white py-16 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <span class="pfont">Nosotros</span>
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-lg leading-relaxed">
            Boilers Matec nació con el firme propósito de revolucionar el sector
            industrial mediante soluciones de planchado y fusionado de alta
            eficiencia. Desde nuestros inicios, nos hemos dedicado a diseñar y
            proporcionar equipos industriales que no solo cumplen, sino que
            superan las expectativas de nuestros clientes. Nuestra trayectoria
            se ha caracterizado por una constante innovación y un compromiso
            inquebrantable con la calidad, consolidándonos como líderes en
            tecnología industrial moderna.
          </p>
          <motion.img
            src="/historia.jpg"
            alt="Historia Boilers Matec"
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="w-3xl aspect-video mx-auto rounded-3xl object-cover object-top shadow-lg border-4 border-b-8 border-white"
          />
        </motion.div>
      </div>

      {/* MISIÓN Y VISIÓN */}
      <div className="bg-matec-red text-white py-16 px-6">
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 pfont">Misión</h3>
          <p className="text-lg leading-relaxed">
            Nuestra misión es ser el aliado estratégico de las empresas que
            buscan optimizar su productividad a través de equipos de planchado y
            fusionado de alto rendimiento. Ofrecemos soluciones integrales que
            incluyen maquinaria industrial de vanguardia, refacciones de calidad
            y servicios de mantenimiento especializados, respaldados por un
            equipo comprometido con la excelencia.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 pfont">
            Visión
          </h3>
          <p className="text-lg leading-relaxed">
            Aspiramos a consolidarnos como la empresa líder en soluciones
            industriales a nivel nacional, reconocida por nuestra innovación,
            calidad superior y atención personalizada. Buscamos expandir nuestra
            presencia, adaptándonos a las necesidades de nuestros clientes y
            contribuyendo al desarrollo sostenible de la industria.
          </p>
        </motion.div>
      </div>

      {/* TESTIMONIOS */}
      <div className="bg-gray-100 text-gray-800 py-16 px-6">
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-8 text-center pfont"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          Testimonios de Nuestros Clientes
        </motion.h3>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              testimonial:
                "Excelente servicio y equipos de alta calidad. Gracias a Boilers Matec, nuestro proceso de planchado es mucho más eficiente.",
              cliente: "Texnova S.A.",
            },
            {
              testimonial:
                "Con su asesoría, encontramos la máquina ideal para nuestra línea de producción. ¡Recomendadísimos!",
              cliente: "Planchado Tulancingo",
            },
            {
              testimonial:
                "La calidad de sus productos y el servicio al cliente es inigualable. Sin duda, una excelente inversión para nuestra empresa.",
              cliente: "Industrias López",
            },
            {
              testimonial:
                "La mejor eficiencia energética! No ayudó a mejorar la calidad de nuestros productos y a reducir costos. ¡Estamos muy satisfechos!",
              cliente: "Textiles San Miguel",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow duration-300"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <p className="text-base">{item.testimonial}</p>
              <div className="mt-4 text-right text-sm text-gray-500">
                – {item.cliente}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosotrosSection;
