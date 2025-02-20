import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const clientes = [
  { nombre: "Boilers Inc.", logo: "/clientes/boilers-inc.png" },
  { nombre: "SteamWorks", logo: "/clientes/steamworks.png" },
  { nombre: "IronMasters", logo: "/clientes/ironmasters.png" },
  { nombre: "HeatWave Co.", logo: "/clientes/heatwave-co.png" },
  { nombre: "Precision Boilers", logo: "/clientes/precision-boilers.png" },
];

const ClientesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Clientes MATEC
        </h2>
        <div className="border-t-4 border-matec-red w-24 md:w-32 mx-auto mb-8"></div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="px-4"
        >
          {clientes.map((cliente, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center w-56 transition-transform duration-300 hover:scale-105">
                <img
                  src={cliente.logo}
                  alt={cliente.nombre}
                  className="w-24 h-24 object-contain mb-4"
                />
                <span className="text-xl font-semibold text-gray-700">
                  {cliente.nombre}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientesSection;
