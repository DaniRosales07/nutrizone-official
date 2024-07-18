import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";



const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Cecilia",
      testimonial: "Muy buenos productos pero sobre todo: Muy buena atencion.",
      image: "https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/usuario1.png?alt=media&token=28539f33-013d-4682-be46-839ccc212845"
    },
    {
      name: "Valeria",
      testimonial: "El único lugar que puedo conseguir snacks ricos y sanos para mis hijos.",
      image: "https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/usuario2.png?alt=media&token=28539f33-013d-4682-be46-839ccc212845"
    },
    {
      name: "Maria Elena",
      testimonial: "Amo todo lo que venden, super recomendable.",
      image: "https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/usuario3.png?alt=media&token=28539f33-013d-4682-be46-839ccc212845"
    },
    {
      name: "Mariana",
      testimonial: "Imposible no querer llevarte todo, cuando ves todo lo que venden",
      image: "https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/usuario4.png?alt=media&token=28539f33-013d-4682-be46-839ccc212845"
    },
    {
      name: "Julia",
      testimonial: "No puedo creer que no supiera de ellos, ahora no los dejo nunca jamás.",
      image: "https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/usuario5.png?alt=media&token=28539f33-013d-4682-be46-839ccc212845"
    },
    {
      name: "Lucía",
      testimonial: "Mi día feliz es cada vez que me llega mi pedido a casa.",
      image: "https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/usuario6.png?alt=media&token=28539f33-013d-4682-be46-839ccc212845"
    }
  ];

  return (
    <div className="espacios-verticales">
    <h2 className="titulos">Nuestras Clientas</h2>
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
    >
      {testimonials.map((testimonial, index) => (

        <SwiperSlide key={index}>
          <div className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} />
            <h4>{testimonial.testimonial}</h4>
            <h3>{testimonial.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default TestimonialSlider;