import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Diferenciadores = () => {
  const mejorasRef = useRef([]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    mejorasRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom",
            scrub: 2,
            markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      <div>
        <img
          src="/secuencia/1.jpg"
          alt="Imagen fondo diferenciadores"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-linear"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenido de la sección */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-10 px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pfont">
          ¿Por qué Boilers MATEC?
        </h2>

        <div className="space-y-6">
          {[
            "Mayor eficiencia energética",
            "Materiales de alta calidad y durabilidad",
            "Soporte técnico casi 24/7 y asesoría experta",
            "Innovación y tecnología de vanguardia",
            "Instalación y mantenimiento integral",
            "Atención personalizada y compromiso con la excelencia",
          ].map((mejora, index) => (
            <div
              key={index}
              ref={(el) => (mejorasRef.current[index] = el)}
              className="flex items-center justify-center text-xl sm:text-2xl font-semibold opacity-0 transform translate-y-10"
            >
              <Check className="mr-2 text-3xl animate-pulse" />
              {mejora}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciadores;
