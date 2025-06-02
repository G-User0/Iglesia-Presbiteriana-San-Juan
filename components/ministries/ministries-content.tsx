"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Music, BookOpen, Baby, UserPlus, Globe, Coffee } from "lucide-react"
import { useTranslations } from "next-intl"

export default function MinistriesContent() {
  const t = useTranslations("ministries")

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
        <Image
          src="/0.png"
          alt="Church ministries"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
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

      {/* Ministry Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("overview.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">{t("overview.description")}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: t("ministries.children.title"),
                description: t("ministries.children.description"),
                icon: Baby,
                image: "children",
              },
              {
                title: t("ministries.youth.title"),
                description: t("ministries.youth.description"),
                icon: Users,
                image: "youth",
              },
              {
                title: t("ministries.worship.title"),
                description: t("ministries.worship.description"),
                icon: Music,
                image: "worship",
              },
              {
                title: t("ministries.adult.title"),
                description: t("ministries.adult.description"),
                icon: BookOpen,
                image: "adult",
              },
              {
                title: t("ministries.outreach.title"),
                description: t("ministries.outreach.description"),
                icon: Globe,
                image: "outreach",
              },
              {
                title: t("ministries.care.title"),
                description: t("ministries.care.description"),
                icon: Heart,
                image: "care",
              },
              {
                title: t("ministries.welcome.title"),
                description: t("ministries.welcome.description"),
                icon: UserPlus,
                image: "welcome",
              },
              {
                title: t("ministries.prayer.title"),
                description: t("ministries.prayer.description"),
                icon: Heart,
                image: "prayer",
              },
              {
                title: t("ministries.hospitality.title"),
                description: t("ministries.hospitality.description"),
                icon: Coffee,
                image: "hospitality",
              },
            ].map((ministry, i) => (
              <motion.div key={i} variants={item}>
                <Card className="border-primary/10 shadow-md overflow-hidden h-full">
                  <div className="relative h-48 bg-white">
                    <Image
                      src="/road.svg"
                      alt={ministry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <ministry.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{ministry.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{ministry.description}</p>
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/ministries/${ministry.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          {t("common.learnMore")}
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={`/contact?subject=Ministry%20Interest`}>{t("common.getInvolved")}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Ministry */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={item} className="relative h-full rounded-lg overflow-hidden shadow-xl bg-white">
              <Image
                src="/team.svg"
                alt="Youth Ministry"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div variants={item}>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-4">
                {t("featured.badge")}
              </div>
              <h2 className="text-3xl font-bold mb-6">{t("featured.title")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("featured.description")}</p>
                <p>{t("featured.gatherings.title")}</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t("featured.gatherings.item1")}</li>
                  <li>{t("featured.gatherings.item2")}</li>
                  <li>{t("featured.gatherings.item3")}</li>
                  <li>{t("featured.gatherings.item4")}</li>
                </ul>
                <p>{t("featured.leadership")}</p>
                <div className="pt-4 flex gap-4">
                  <Button asChild>
                    <Link href="/ministries/youth">{t("common.learnMore")}</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact?subject=Youth%20Ministry">{t("featured.contactButton")}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("volunteer.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("volunteer.description")}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={item}>
              <Card className="border-primary/20 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Music className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t("volunteer.opportunities.worship.title")}</h3>
                      <p className="text-muted-foreground mb-4">{t("volunteer.opportunities.worship.description")}</p>
                      <div className="text-sm text-muted-foreground mb-4">
                        <p>
                          <strong>{t("volunteer.commitment")}:</strong>{" "}
                          {t("volunteer.opportunities.worship.commitment")}
                        </p>
                        <p>
                          <strong>{t("volunteer.skills")}:</strong> {t("volunteer.opportunities.worship.skills")}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contact?subject=Worship%20Team">{t("volunteer.applyButton")}</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/20 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Baby className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t("volunteer.opportunities.children.title")}</h3>
                      <p className="text-muted-foreground mb-4">{t("volunteer.opportunities.children.description")}</p>
                      <div className="text-sm text-muted-foreground mb-4">
                        <p>
                          <strong>{t("volunteer.commitment")}:</strong>{" "}
                          {t("volunteer.opportunities.children.commitment")}
                        </p>
                        <p>
                          <strong>{t("volunteer.skills")}:</strong> {t("volunteer.opportunities.children.skills")}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contact?subject=Children%27s%20Ministry">{t("volunteer.applyButton")}</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/20 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <UserPlus className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t("volunteer.opportunities.welcome.title")}</h3>
                      <p className="text-muted-foreground mb-4">{t("volunteer.opportunities.welcome.description")}</p>
                      <div className="text-sm text-muted-foreground mb-4">
                        <p>
                          <strong>{t("volunteer.commitment")}:</strong>{" "}
                          {t("volunteer.opportunities.welcome.commitment")}
                        </p>
                        <p>
                          <strong>{t("volunteer.skills")}:</strong> {t("volunteer.opportunities.welcome.skills")}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contact?subject=Welcome%20Team">{t("volunteer.applyButton")}</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/20 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t("volunteer.opportunities.outreach.title")}</h3>
                      <p className="text-muted-foreground mb-4">{t("volunteer.opportunities.outreach.description")}</p>
                      <div className="text-sm text-muted-foreground mb-4">
                        <p>
                          <strong>{t("volunteer.commitment")}:</strong>{" "}
                          {t("volunteer.opportunities.outreach.commitment")}
                        </p>
                        <p>
                          <strong>{t("volunteer.skills")}:</strong> {t("volunteer.opportunities.outreach.skills")}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contact?subject=Outreach%20Team">{t("volunteer.applyButton")}</Link>
                      </Button>
                    </div>
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
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">{t("volunteer.assessment.description")}</p>
            <Button asChild>
              <Link href="/spiritual-gifts">{t("volunteer.assessment.button")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Ministry Leaders */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("leaders.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("leaders.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: "Sarah Johnson", role: t("leaders.roles.worship"), email: "sarah@gracechurch.org", image: "/user.svg" },
              { name: "Michael Brown", role: t("leaders.roles.youth"), email: "michael@gracechurch.org", image: "/user.svg" },
              { name: "Rebecca Martinez", role: t("leaders.roles.children"), email: "rebecca@gracechurch.org", image: "/user.svg" },
              { name: "James Thompson", role: t("leaders.roles.outreach"), email: "james@gracechurch.org", image: "/user.svg" },
              { name: "Lisa Chen", role: t("leaders.roles.prayer"), email: "lisa@gracechurch.org", image: "/user.svg" },
              { name: "David Wilson", role: t("leaders.roles.adult"), email: "david@gracechurch.org", image: "/user.svg" },
            ].map((leader, i) => (
              <motion.div key={i} variants={item}>
                <Card className="border-primary/10 shadow-md h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-muted mb-4 overflow-hidden">
                        <Image
                          src={leader.image || "/user.svg"}
                          alt={leader.name}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{leader.name}</h3>
                      <p className="text-primary mb-2">{leader.role}</p>
                      <p className="text-muted-foreground mb-4">{leader.email}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`mailto:${leader.email}`}>{t("leaders.contactButton")}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
