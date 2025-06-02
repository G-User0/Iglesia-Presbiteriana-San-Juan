"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function EventsContent() {
  const t = useTranslations("events")

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
        <Image src="/0.png" alt={t("hero.title")} fill className="object-cover brightness-[0.7]" priority/>
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

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("upcomingEvents.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("upcomingEvents.subtitle")}</p>
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
                title: t("events.event1.title"),
                date: t("events.event1.date"),
                time: t("events.event1.time"),
                location: t("events.event1.location"),
                description:t ("events.event1.description"),
                image: "worship",
              },
              {
                title: t("events.event2.title"),
                date: t("events.event2.date"),
                time: t("events.event2.time"),
                location: t("events.event2.location"),
                description:t ("events.event2.description"),
                image: "bible",
              },
              {
                title: t("events.event3.title"),
                date: t("events.event3.date"),
                time: t("events.event3.time"),
                location: t("events.event3.location"),
                description:t ("events.event3.description"),
                image: "outreach",
              },
              {
                title: t("events.event4.title"),
                date: t("events.event4.date"),
                time: t("events.event4.time"),
                location: t("events.event4.location"),
                description:t ("events.event4.description"),
                image: "youth",
              },
              {
                title: t("events.event5.title"),
                date: t("events.event5.date"),
                time: t("events.event5.time"),
                location: t("events.event5.location"),
                description:t ("events.event5.description"),
                image: "women",
              },
              {
                title: t("events.event6.title"),
                date: t("events.event6.date"),
                time: t("events.event6.time"),
                location: t("events.event6.location"),
                description:t ("events.event6.description"),
                image: "men",
              },
            ].map((event, i) => (
              <motion.div key={i} variants={item}>
                <Card className="border-primary/10 shadow-md overflow-hidden h-full">
                  <div className="relative h-52 bg-muted">
                    <Image
                      src= "/Timeline.svg"
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                      {event.date}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm">
                        {t("upcomingEvents.learnMore")}
                      </Button>
                      <Button size="sm">{t("upcomingEvents.rsvp")}</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("calendar.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("calendar.subtitle")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-lg shadow-md p-6 max-w-5xl mx-auto"
          >
            <div className="text-center p-8 border-2 border-dashed border-border rounded-lg">
              <Calendar className="h-16 w-16 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("calendar.fullView")}</h3>
              <p className="text-muted-foreground mb-4">{t("calendar.description")}</p>
              <Button>{t("calendar.viewButton")}</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Registration */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-6">{t("registration.title")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("registration.description")}</p>
                <p>{t("registration.benefits.title")}</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t("registration.benefits.item1")}</li>
                  <li>{t("registration.benefits.item2")}</li>
                  <li>{t("registration.benefits.item3")}</li>
                  <li>{t("registration.benefits.item4")}</li>
                </ul>
                <p>{t("registration.questions")}</p>
                <div className="pt-4">
                  <Button asChild>
                    <Link href="/contact">{t("registration.contactButton")}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div variants={item} className="bg-primary/5 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">{t("registration.featured.title")}</h3>
              <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                <h4 className="text-lg font-bold mb-2">{t("registration.featured.eventTitle")}</h4>
                <p className="text-muted-foreground mb-4">{t("registration.featured.eventDate")}</p>
                <p className="text-muted-foreground mb-4">{t("registration.featured.eventDescription")}</p>
                <Button className="w-full">{t("registration.featured.registerButton")}</Button>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/events" className="flex items-center text-primary font-medium">
                  {t("registration.viewAllLink")} <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Community Groups */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("groups.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("groups.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("groups.neighborhood.title")}</h3>
                    <p className="text-muted-foreground mb-4">{t("groups.neighborhood.description")}</p>
                    <Button variant="outline">{t("groups.neighborhood.button")}</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("groups.interest.title")}</h3>
                    <p className="text-muted-foreground mb-4">{t("groups.interest.description")}</p>
                    <Button variant="outline">{t("groups.interest.button")}</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("groups.support.title")}</h3>
                    <p className="text-muted-foreground mb-4">{t("groups.support.description")}</p>
                    <Button variant="outline">{t("groups.support.button")}</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
