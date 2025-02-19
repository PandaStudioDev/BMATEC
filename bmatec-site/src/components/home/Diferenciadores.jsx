import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Diferenciadores = () => {
  const images = [
    "/secuencia/1.png",
    "/secuencia/2.png",
    "/secuencia/3.png",
    "/secuencia/4.png",
    "/secuencia/5.png",
  ];

  const [currentFrame, setCurrentFrame] = useState(0);
  const sectionRef = useRef(null);
  const mejorasRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    // 🎞️ Cambia la imagen de fondo conforme al scroll
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=100%",
      scrub: 0.5, // 🔹 Más responsivo
      onUpdate: (self) => {
        const index = Math.round(self.progress * (images.length - 1));
        setCurrentFrame(index);
      },
    });

    // ✨ Animación de las mejoras progresivas
    mejorasRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[150vh] bg-black text-white overflow-hidden"
    >
      {/* Imagen de Fondo Dinámica */}
      <img
        src={images[currentFrame]}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        alt="Animación Scroll"
      />

      {/* Contenido de la Sección */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-10 px-6 text-center">
        <h2 className="text-4xl font-bold">¿Por qué elegir Boilers Matec?</h2>

        {/* Mejoras con animación */}
        <div className="space-y-8">
          {[
            "Mayor eficiencia energética",
            "Materiales de alta calidad",
            "Soporte técnico 24/7",
            "Innovación y tecnología avanzada",
          ].map((mejora, index) => (
            <div
              key={index}
              ref={(el) => (mejorasRef.current[index] = el)}
              className="text-2xl font-semibold opacity-0 transform translate-y-10"
            >
              <Check className="inline text-3xl font-extrabold" /> {mejora}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciadores;
