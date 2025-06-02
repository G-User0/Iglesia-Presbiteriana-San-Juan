"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Church, BookOpen, Heart, LifeBuoy, Wind, Sun, Telescope, MessageCircleHeart, CalendarRange, HousePlus } from "lucide-react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"


function CircleByTheme() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // No renderiza nada en SSR

  return theme === "dark" ? (
    <Image src="/Cwhite.png" alt="Inicio" width={250} height={250} priority />
  ) : (
    <Image src="/Cblue.png" alt="Inicio" width={250} height={250} priority />
  );
}

// Componente principal
export default function AboutContent() {
  const t = useTranslations("about")

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
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image src="/0.png" alt={t("hero.imageAlt")} fill className="object-cover brightness-[0.7]" priority/>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t("hero.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">{t("hero.subtitle")}</p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-6">{t("story.title")}</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">{t("story.paragraph1")}</p>
                <p className="text-muted-foreground">{t("story.paragraph2")}</p>
                <p className="text-muted-foreground">{t("story.paragraph3")}</p>
              </div>
            </motion.div>
            <motion.div variants={item} className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/0.png" alt={t("story.imageAlt")} fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("mission.title")}</h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{t("mission.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 "
          >
            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/5 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("mission.missionCard.title")}</h3>
                    <p className="text-muted-foreground">{t("mission.missionCard.description")}</p>
                    <p className="text-muted-foreground">{t("mission.missionCard.description1")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/5 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Telescope className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("mission.visionCard.title")}</h3>
                    <p className="text-muted-foreground">{t("mission.visionCard.description")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/5 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MessageCircleHeart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("mission.valuesCard.title")}</h3>
                    <p className="text-muted-foreground">{t("mission.valuesCard.description")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bases */}
      <section className="relative py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Título y subtítulo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("base.stitle") || "Nuestras Bases"}</h2>
            <p className="text-lg max-w-6xl mx-auto text-muted-foreground">
              {t.rich("base.subtitle", {
                highlight: (chunks) => <span className="text-primary/80">{chunks}</span>
              })}
            </p>
          </motion.div>
      
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {/* Diagrama con círculos */}
            <div className="relative w-full max-w-md aspect-square">
              {/* Líneas SVG solo visibles en md+ */}
              {/* <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none"> */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none  text-blue-400 dark:text-white">
                    {/* Líneas principales del triángulo */}
                    <line x1="50%" y1="15%" x2="25%" y2="70%" stroke="currentColor" strokeWidth="3" />
                    <line x1="50%" y1="15%" x2="75%" y2="70%" stroke="currentColor" strokeWidth="3" />
                    <line x1="25%" y1="84%" x2="75%" y2="84%" stroke="currentColor" strokeWidth="3" />
                    {/* Líneas secundarias */}
                    <line x1="50%" y1="8%" x2="25%" y2="63%" stroke="currentColor" strokeWidth="1" />
                    <line x1="50%" y1="8%" x2="75%" y2="63%" stroke="currentColor" strokeWidth="1" />
                    <line x1="25%" y1="83%" x2="75%" y2="83%" stroke="currentColor" strokeWidth="1" />
                    {/* Líneas de secuandarias 1 */}
                    <line x1="50%" y1="18%" x2="25%" y2="73%" stroke="currentColor" strokeWidth="1" />
                    <line x1="50%" y1="18%" x2="75%" y2="73%" stroke="currentColor" strokeWidth="1" />
                    <line x1="25%" y1="87%" x2="75%" y2="87%" stroke="currentColor" strokeWidth="1" />
                  </svg>
      
              {/* Círculo superior */}
              <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 w-[36%] aspect-square bg-background rounded-full flex items-center justify-center shadow-md border border-muted">
                <CircleByTheme />
                <span className="absolute text-lg text-center text-foreground font-semibold w-[80%]">{t("base.main") || "Culto Unido"}</span>
              </div>
      
              {/* Círculo inferior izquierdo */}
              <div className="absolute left-[20%] bottom-[15%] -translate-x-1/2 translate-y-1/2 w-[36%] aspect-square bg-background rounded-full flex items-center justify-center shadow-md border border-muted">
                <CircleByTheme />
                <span className="absolute text-lg text-center text-foreground font-semibold w-[80%]">{t("base.left") || "Casa Iglesia"}</span>
              </div>
      
              {/* Círculo inferior derecho */}
              <div className="absolute right-[20%] bottom-[15%] translate-x-1/2 translate-y-1/2 w-[36%] aspect-square bg-background rounded-full flex items-center justify-center shadow-md border border-muted">
                <CircleByTheme />
                <span className="absolute text-lg text-center text-foreground font-semibold w-[80%]">{t("base.right") || "Estudio Bíblico"}</span>
              </div>
            </div>
      
            {/* Paneles informativos */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col w-full md:w-1/2 gap-6"
            >
              {/* Superior */}
              <motion.div variants={item} className="flex gap-3">
                <div className="bg-muted/50 p-6 rounded-lg flex-1 text-sm text-foreground">
                  <p className="leading-relaxed">
                    {t("base.topText") || "Contenido superior..."}
                  </p>
                </div>
                {/* <Church className="h-6 w-6 text-primary hidden md:block mt-2" /> */}
                <div className="bg-muted/60 p-6 rounded-lg hidden md:flex items-center">
                  <Church className="h-6 w-6 text-primary" />
                </div>
              </motion.div>

               {/* Inferior */}
              <motion.div variants={item} className="flex gap-3">
                <div className="bg-muted/50 p-6 rounded-lg flex-1 text-sm text-foreground">
                  <p className="leading-relaxed">
                    {t("base.leftText") || "Contenido inferior..."}
                  </p>
                </div>
                <div className="bg-muted/60 p-6 rounded-lg hidden md:flex items-center">
                  <HousePlus className="h-6 w-6 text-primary" />
                </div>
              </motion.div>
      
              {/* Cursos */}
              <motion.div variants={item} className="flex gap-3">
                <div className="bg-muted/50 p-6 rounded-lg flex-1 text-foreground">
                  <h3 className="text-lg font-semibold mb-4 text-center bg-primary/5 py-2 rounded">{t("base.title") || "Cursos de Vida"}</h3>
                  <div className="space-y-2 px-1 text-sm">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="flex justify-between">
                        <span>{t(`base.course${i}`)}</span>
                        <span>{t(`base.duration${i}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/60 p-6 rounded-lg hidden md:flex items-center">
                  <CalendarRange className="h-6 w-6 text-primary" />
                </div>
              </motion.div>
      
             
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 "
        >
          <h2 className="text-3xl font-bold mb-4">{t("leadership.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("leadership.subtitle")}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
          {[
            {
              avatar: "/Villalta.png",
              name: t("leadership.leaders.leader1.name"),
              role: t("leadership.leaders.leader1.role"),
              bio: t("leadership.leaders.leader1.bio"),
            },
            {
              avatar: "/Hong.jpg",
              name: t("leadership.leaders.leader2.name"),
              role: t("leadership.leaders.leader2.role"),
              bio: t("leadership.leaders.leader2.bio"),
            },
            {
              avatar: "/0.png",
              name: t("leadership.leaders.leader3.name"),
              role: t("leadership.leaders.leader3.role"),
              bio: t("leadership.leaders.leader3.bio"),
            },
            {
              avatar: "/0.png",
              name: t("leadership.leaders.leader4.name"),
              role: t("leadership.leaders.leader4.role"),
              bio: t("leadership.leaders.leader4.bio"),
            },
            {
              avatar: "/0.png",
              name: t("leadership.leaders.leader5.name"),
              role: t("leadership.leaders.leader5.role"),
              bio: t("leadership.leaders.leader5.bio"),
            },
            {
              avatar: "/0.png",
              name: t("leadership.leaders.leader6.name"),
              role: t("leadership.leaders.leader6.role"),
              bio: t("leadership.leaders.leader6.bio"),
            },
          ].map((leader, i) => (
            <motion.div key={i} variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/5 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-muted mb-4 overflow-hidden">
                      <Image src={leader.avatar} alt={leader.name} width={96} height={96} className="w-full h-full" />
                    </div>
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-primary mb-2">{leader.role}</p>
                    <p className="text-muted-foreground">{leader.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-16 bg-gradient-to-b from-muted/5 to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto "
          >
            <h2 className="text-4xl font-bold mb-3 text-center">
              {t("beliefs.title")}
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              {t("beliefs.introduction")}
            </p>
      
            {/* Lista de creencias con íconos */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
            >
              {[
                {
                  title: t("beliefs.items.subtitle1"),
                  text: t("beliefs.items.item1"),
                  icon: BookOpen,
                },
                {
                  title: t("beliefs.items.subtitle2"),
                  text: t("beliefs.items.item2"),
                  icon: Sun,
                },
                {
                  title: t("beliefs.items.subtitle3"),
                  text: t("beliefs.items.item3"),
                  icon: Heart,
                },
                {
                  title: t("beliefs.items.subtitle4"),
                  text: t("beliefs.items.item4"),
                  icon: LifeBuoy,
                },
                {
                  title: t("beliefs.items.subtitle5"),
                  text: t("beliefs.items.item5"),
                  icon: Wind,
                },
                {
                  title: t("beliefs.items.subtitle6"),
                  text: t("beliefs.items.item6"),
                  icon: Church,
                },
              ].map((belief, index) => {
                const Icon = belief.icon;
                return (
                  <motion.div
                    key={index}
                    variants={container}
                    className="bg-card rounded-lg p-6 shadow-sm border hover:bg-slate-500/10 transition duration-500"
                  >
                    <div className="flex items-center mb-3">
                      <div className="mr-4 bg-primary/10 p-2 rounded-full">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{belief.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{belief.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
      
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center text-muted-foreground max-w-3xl mx-auto"
            >
              {t("beliefs.conclusion")}
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
