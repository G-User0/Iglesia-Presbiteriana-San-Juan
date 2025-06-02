"use client"

import { useRef, useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function TestimonialsSection() {
  const t = useTranslations("home.testimonials")
  // const scrollRef = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: t("testimonial1.name"),
      since: t("testimonial1.since"),
      text: t("testimonial1.text"),
      avatar: "/img/1.png",
    },
    {
      id: 2,
      name: t("testimonial2.name"),
      since: t("testimonial2.since"),
      text: t("testimonial2.text"),
      avatar: "/img/1.png",
    },
    {
      id: 3,
      name: t("testimonial3.name"),
      since: t("testimonial3.since"),
      text: t("testimonial3.text"),
      avatar: "/img/1.png",
    },
    {
      id: 4,
      name: t("testimonial4.name"),
      since: t("testimonial4.since"),
      text: t("testimonial4.text"),
      avatar: "/img/1.png",
    },
    {
      id: 5,
      name: t("testimonial5.name"),
      since: t("testimonial5.since"),
      text: t("testimonial5.text"),
      avatar: "/img/1.png",
    },
    {
      id: 6,
      name: t("testimonial6.name"),
      since: t("testimonial6.since"),
      text: t("testimonial6.text"),
      avatar: "/img/1.png",
    },
  ]

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationId: number;
    // Pausar el scroll al pasar el mouse o tocar la pantalla
    let scrollPos = scrollElement.scrollLeft || 0
    const speed = 0.5

    const animate = () => {
      if (!isPaused) {
        scrollPos += speed
        if (scrollElement && scrollPos >= scrollElement.scrollWidth / 2) {
          scrollPos = 0
        }
        if (scrollElement) {
          scrollElement.scrollLeft = scrollPos
        }
      } else {
        // Cuando está pausado, actualizamos la posición para mantener la continuidad
        scrollPos = scrollElement.scrollLeft
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isPaused])

  // Añadir un efecto adicional para mostrar solo 3 tarjetas en desktop y 1 en móvil
  useEffect(() => {
    const handleResize = () => {
      const container = scrollRef.current;
      if (!container) return;
  
      // Calcular el ancho del contenedor y ajustar el ancho de las tarjetas
      const containerWidth = container.clientWidth;
      const isMobile = window.innerWidth < 768;

      // Determinar cuántas tarjetas mostrar basado en el tamaño de pantalla
      const cardsToShow = isMobile ? 1 : 3;
      const gapSize = 16;
  
      // Calcular el ancho de cada tarjeta con un espacio para el gap
      const cardWidth = Math.floor(
        (containerWidth / cardsToShow) - (gapSize * (cardsToShow - 1) / cardsToShow)
      );
  
      (document.querySelectorAll(".testimonial-card") as NodeListOf<HTMLElement>).forEach((card: HTMLElement) => {
        card.style.width = `${cardWidth}px`;
      });
    };
  
    // Ejecutar al montar y cuando cambie el tamaño de la ventana
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <section id="testimonials" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-6 py-4 px-4"
          style={{
            width: "100%",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Double the testimonials for infinite scroll effect */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card 
              key={`${testimonial.id}-${index}`} 
              className="testimonial-card inline-block flex-shrink-0 whitespace-normal transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={testimonial.avatar || "/img/1.png"} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {/* <p className="mb-4 italic">{testimonial.text}</p> */}
                <p className="mb-4 italic min-h-[70px]">{testimonial.text}</p>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.since}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gradient overlays for smooth fade effect - Adaptados para distintos tamaños de pantalla */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
      </div>
    </section>
  )
}