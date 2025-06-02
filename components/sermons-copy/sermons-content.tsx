"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export default function SermonsContent() {
  const t = useTranslations("sermons")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/0.png"
          alt={t("hero.imageAlt")}
          fill
          className="object-cover"
          priority
        />
      
        {/* Capa oscura uniforme */}
        <div className="absolute inset-0 bg-slate-700/60 z-0" />
      
        {/* Degradado circular desde la izquierda */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(255,255,255,0.1),_transparent_80%)] z-10" /> */}
      
        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center  pl-4 max-w-1xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white">{t("hero.title")}</h1>
          <p className="text-base md:text-xl text-white/70 mb-4">{t("hero.subtitle")}</p>
          {/* <p className="mb-2">{t("hero.date")} ★★★★★ #924</p> */}
          <p className="mb-6 text-white/70">#IglesiaParaTodos #DiosEsAmor</p>
          <Button 
            className="text-white border-white bg-slate-900 hover:bg-slate-950"
            onClick={() => window.open("https://youtube.com/@iglesiapresbiterianasanjuan?si=ROsU4LamtBfNbucW", "_blank")}>

              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t("hero.cta")}
          </Button>
        </motion.div>
      </section>

    
      {/* Subscribe */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">{t("subscribe.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t("subscribe.subtitle")}</p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div variants={item}>
                <Button 
                  className="hover:bg-red-500/20 w-full sm:w-auto text-current" variant="outline"
                  onClick={() => window.open("https://youtube.com/@iglesiapresbiterianasanjuan?si=ROsU4LamtBfNbucW", "_blank")}>
                    <Image
                      src="/youtube.svg"
                      alt="Apple Podcasts"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                  {t("subscribe.platforms.youtube")}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
    </div>
  )
}
