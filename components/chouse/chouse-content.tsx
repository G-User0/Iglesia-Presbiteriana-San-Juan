"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
// import { useLocale } from "next-intl"

export default function ChousePage() {
  const t = useTranslations("chouse")
  // const locale = useLocale()

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
        <Image src="/0.png" alt="Church Chouse" fill className="object-cover brightness-[0.7]" priority />
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

      {/* Chouses Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("info.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">{t("info.subtitle")}</p>
          </motion.div>
          <div className="max-h-[35rem] overflow-y-auto rounded-lg">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  image: "/CH/ncanete.webp",
                  title: t("events.event1.title"),
                  date: t("events.event1.date"),
                  calendar: t("events.event1.calendar"),
                  time: t("events.event1.time"),
                  location: t("events.event1.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event1.description"),
                  id: "1",
                },
                {
                  image: "/CH/morcolla.webp",
                  title: t("events.event2.title"),
                  date: t("events.event2.date"),
                  calendar: t("events.event2.calendar"),
                  time: t("events.event2.time"),
                  location: t("events.event2.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event2.description"),
                  id: "2",
                },
                {
                  image: "/CH/puno.webp",
                  title: t("events.event3.title"),
                  date: t("events.event3.date"),
                  calendar: t("events.event3.calendar"),
                  time: t("events.event3.time"),
                  location: t("events.event3.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event3.description"),
                  id: "3",
                },
                {
                  image: "/CH/arequipa.webp",
                  title: t("events.event4.title"),
                  date: t("events.event4.date"),
                  calendar: t("events.event4.calendar"),
                  time: t("events.event4.time"),
                  location: t("events.event4.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event4.description"),
                  id: "4",
                },
                {
                  image: "/CH/pasco.webp",
                  title: t("events.event5.title"),
                  date: t("events.event5.date"),
                  calendar: t("events.event5.calendar"),
                  time: t("events.event5.time"),
                  location: t("events.event5.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event5.description"),
                  id: "5",
                },
                {
                  image: "/CH/mexico.webp",
                  title: t("events.event6.title"),
                  date: t("events.event6.date"),
                  calendar: t("events.event6.calendar"),
                  time: t("events.event6.time"),
                  location: t("events.event6.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event6.description"),
                  id: "6",
                },
                {
                  image: "/CH/huanuco.webp",
                  title: t("events.event7.title"),
                  date: t("events.event7.date"),
                  calendar: t("events.event6.calendar"),
                  time: t("events.event7.time"),
                  location: t("events.event7.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event7.description"),
                  id: "7",
                },
                {
                  image: "/CH/ica.webp",
                  title: t("events.event8.title"),
                  date: t("events.event8.date"),
                  calendar: t("events.event8.calendar"),
                  time: t("events.event8.time"),
                  location: t("events.event8.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event8.description"),
                  id: "8",
                },
                {
                  image: "/CH/ecuador.webp",
                  title: t("events.event9.title"),
                  date: t("events.event9.date"),
                  calendar: t("events.event9.calendar"),
                  time: t("events.event6.time"),
                  location: t("events.event9.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event9.description"),
                  id: "9",
                },
                {
                  image: "/CH/ancash.webp",
                  title: t("events.event10.title"),
                  date: t("events.event10.date"),
                  calendar: t("events.event10.calendar"),
                  time: t("events.event10.time"),
                  location: t("events.event10.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event10.description"),
                  id: "10",
                },
                {
                  image: "/CH/404.svg",
                  title: t("events.event11.title"),
                  date: t("events.event11.date"),
                  calendar: t("events.event11.calendar"),
                  time: t("events.event11.time"),
                  location: t("events.event11.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event11.description"),
                  id: "11",
                },
                {
                  image: "/CH/lmerced.webp",
                  title: t("events.event12.title"),
                  date: t("events.event12.date"),
                  calendar: t("events.event12.calendar"),
                  time: t("events.event12.time"),
                  location: t("events.event12.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event12.description"),
                  id: "12",
                },
                {
                  image: "/CH/cuzco.webp",
                  title: t("events.event13.title"),
                  date: t("events.event13.date"),
                  calendar: t("events.event13.calendar"),
                  time: t("events.event13.time"),
                  location: t("events.event13.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event13.description"),
                  id: "13",
                },
                {
                  image: "/CH/chanchamayo.webp",
                  title: t("events.event14.title"),
                  date: t("events.event14.date"),
                  calendar: t("events.event14.calendar"),
                  time: t("events.event14.time"),
                  location: t("events.event14.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event14.description"),
                  id: "14",
                },
                {
                  image: "/CH/panamá.webp",
                  title: t("events.event15.title"),
                  date: t("events.event15.date"),
                  calendar: t("events.event15.calendar"),
                  time: t("events.event15.time"),
                  location: t("events.event15.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event15.description"),
                  id: "15",
                },
                {
                  image: "/CH/bolivia.webp",
                  title: t("events.event16.title"),
                  date: t("events.event16.date"),
                  calendar: t("events.event16.calendar"),
                  time: t("events.event16.time"),
                  location: t("events.event16.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event16.description"),
                  id: "16",
                },
                {
                  image: "/CH/amazonas.webp",
                  title: t("events.event17.title"),
                  date: t("events.event17.date"),
                  calendar: t("events.event17.calendar"),
                  time: t("events.event17.time"),
                  location: t("events.event17.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event17.description"),
                  id: "17",
                },
                {
                  image: "/CH/smartín.webp",
                  title: t("events.event18.title"),
                  date: t("events.event18.date"),
                  calendar: t("events.event18.calendar"),
                  time: t("events.event18.time"),
                  location: t("events.event18.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event18.description"),
                  id: "18",
                },
                {
                  image: "/CH/venezuela.webp",
                  title: t("events.event19.title"),
                  date: t("events.event19.date"),
                  calendar: t("events.event19.calendar"),
                  time: t("events.event19.time"),
                  location: t("events.event19.location"),
                  mapUrl: "https://goo.gl/maps/4v5x7Z1Q6k2g3J9K8",
                  description: t("events.event19.description"),
                  id: "19",
                },
              ].map((event, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="border-primary/10 shadow-md overflow-hidden h-full">
                    <div className="relative h-52 bg-muted">
                      <Image src={event.image} alt={event.title} fill className="object-cover" />
                      <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                        {event.date}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.calendar}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-blue-400">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          <Link
                            href={event.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>{event.location}</span>
                          </Link>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/chouse-details/${event.id}`}>{t("info.learnMore")}</Link>
                        </Button>
                        <Button size="sm">{t("info.rsvp")}</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-3 text-center">{t("beliefs.title")}</h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">{t("beliefs.introduction")}</p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
            >
              {[
                {
                  title: t("beliefs.subtitle0"),
                  text: t("beliefs.items.item0"),
                },
                {
                  title: t("beliefs.subtitle1"),
                  text: t("beliefs.items.item1"),
                },
                {
                  title: t("beliefs.subtitle2"),
                  text: t("beliefs.items.item2"),
                },
                {
                  title: t("beliefs.subtitle3"),
                  text: t("beliefs.items.item3"),
                },
                {
                  title: t("beliefs.subtitle4"),
                  text: t("beliefs.items.item4"),
                },
                {
                  title: t("beliefs.subtitle5"),
                  text: t("beliefs.items.item5"),
                },
              ].map((belief, index) => (
                <motion.div
                  key={index}
                  variants={container}
                  className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md border border-border hover:bg-slate-500/10 transition duration-500"
                >
                  <div className="flex items-center mb-3">
                    <div>
                      <span className="text-primary text-xl">
                      </span>
                    </div>
                    <h3 className="text-base font-semibold">{belief.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{belief.text}</p>
                </motion.div>
              ))}
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
