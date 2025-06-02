"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Music, BookOpen, Heart, CalendarPlus, BookHeart, Clock7, Clock9 } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ServicesContent() {
  const t = useTranslations("services")

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
        <Image src="/1.png" alt={t("hero.imageAlt")} fill className="object-cover brightness-[0.7]" priority />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("hero.title")}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">{t("hero.subtitle")}</p>
        </motion.div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("serviceTimes.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("serviceTimes.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            // className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-8xl mx-auto"
          >
            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Clock7 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("serviceTimes.sunday.title")}</h3>
                    <p className="text-muted-foreground mb-2">{t("serviceTimes.sunday.time")}</p>
                    <p className="text-muted-foreground">{t("serviceTimes.sunday.description")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Clock9 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("serviceTimes.MidMorning.title")}</h3>
                    <p className="text-muted-foreground mb-2">{t("serviceTimes.MidMorning.time")}</p>
                    <p className="text-muted-foreground">{t("serviceTimes.MidMorning.description")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Music className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("serviceTimes.evening.title")}</h3>
                    <p className="text-muted-foreground mb-2">{t("serviceTimes.evening.time")}</p>
                    <p className="text-muted-foreground">{t("serviceTimes.evening.description")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("serviceTimes.wednesday.title")}</h3>
                    <p className="text-muted-foreground mb-2">{t("serviceTimes.wednesday.time")}</p>
                    <p className="text-muted-foreground">{t("serviceTimes.wednesday.description")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("serviceTimes.week.title")}</h3>
                    <p className="text-muted-foreground mb-2">{t("serviceTimes.week.time")}</p>
                    <p className="text-muted-foreground mb-2">{t("serviceTimes.week.satit")}</p>
                    <p className="text-muted-foreground">{t("serviceTimes.week.description")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center justify-center p-4 bg-primary/5 rounded-lg mb-4">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span>{t("location.address")}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild size="lg">
                <Link href="/contact">{t("buttons.planVisit")}</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/about">{t("buttons.learnMore")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={item} className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/0.png" alt={t("whatToExpect.imageAlt")} fill className="object-cover" />
            </motion.div>
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-6">{t("whatToExpect.title")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("whatToExpect.paragraph1")}</p>
                <p>{t("whatToExpect.paragraph2")}</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t("whatToExpect.list.item1")}</li>
                  <li>{t("whatToExpect.list.item2")}</li>
                  <li>{t("whatToExpect.list.item3")}</li>
                  {/* <li>{t("whatToExpect.list.item4")}</li> */}
                </ul>
                <p>{t("whatToExpect.paragraph3")}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Sermons */}
      {/* <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("latestSermons.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("latestSermons.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: t("latestSermons.sermons.sermon1.title"),
                speaker: t("latestSermons.sermons.sermon1.speaker"),
                date: t("latestSermons.sermons.sermon1.date"),
                series: t("latestSermons.sermons.sermon1.series"),
              },
              {
                title: t("latestSermons.sermons.sermon2.title"),
                speaker: t("latestSermons.sermons.sermon2.speaker"),
                date: t("latestSermons.sermons.sermon2.date"),
                series: t("latestSermons.sermons.sermon2.series"),
              },
              {
                title: t("latestSermons.sermons.sermon3.title"),
                speaker: t("latestSermons.sermons.sermon3.speaker"),
                date: t("latestSermons.sermons.sermon3.date"),
                series: t("latestSermons.sermons.sermon3.series"),
              },
              {
                title: t("latestSermons.sermons.sermon4.title"),
                speaker: t("latestSermons.sermons.sermon4.speaker"),
                date: t("latestSermons.sermons.sermon4.date"),
                series: t("latestSermons.sermons.sermon4.series"),
              },
              {
                title: t("latestSermons.sermons.sermon5.title"),
                speaker: t("latestSermons.sermons.sermon5.speaker"),
                date: t("latestSermons.sermons.sermon5.date"),
                series: t("latestSermons.sermons.sermon5.series"),
              },
              {
                title: t("latestSermons.sermons.sermon6.title"),
                speaker: t("latestSermons.sermons.sermon6.speaker"),
                date: t("latestSermons.sermons.sermon6.date"),
                series: t("latestSermons.sermons.sermon6.series"),
              },
            ].map((sermon, i) => (
              <motion.div key={i} variants={item}>
                <Card className="border-primary/10 shadow-md overflow-hidden h-full">
                  <div className="relative h-48 bg-muted">
                    <Image src="/2.png" alt={sermon.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary mb-1">{sermon.series}</div>
                    <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {sermon.speaker} • {sermon.date}
                    </p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        {t("latestSermons.buttons.watch")}
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        {t("latestSermons.buttons.listen")}
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        {t("latestSermons.buttons.notes")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg">
              <Link href="/sermons">{t("latestSermons.buttons.viewAll")}</Link>
            </Button>
          </motion.div>
        </div>
      </section> */}

      {/* Special Services */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("specialServices.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("specialServices.subtitle")}
            </p>
          </motion.div>
      
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                title: t("specialServices.services.service1.title"),
                description: t("specialServices.services.service1.description"),
                icon: CalendarPlus,
              },
              {
                title: t("specialServices.services.service2.title"),
                description: t("specialServices.services.service2.description"),
                icon: Heart,
              },
              {
                title: t("specialServices.services.service3.title"),
                description: t("specialServices.services.service3.description"),
                icon: Heart,
              },
              {
                title: t("specialServices.services.service4.title"),
                description: t("specialServices.services.service4.description"),
                icon: BookHeart,
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={i} variants={item}>
                  <Card className="border-primary/10 shadow-md h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

    </div>
  )
}
