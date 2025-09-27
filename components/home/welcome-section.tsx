"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Calendar, HousePlus, Users } from "lucide-react"
// import * as icons from "lucide-react"
import Link from "next/link"

export default function WelcomeSection() {
  const t = useTranslations("home.welcome")

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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1: Upcoming events */}
          <motion.div variants={item} className="h-full">
            <Card className="relative h-full overflow-hidden group">
              <div className="flex flex-col h-full relative z-10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-primary" />
                    <CardTitle>{t("upcomingEvents.title")}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 flex-grow">
                  <div>
                    <h4 className="font-medium">{t("upcomingEvents.event1.title")}</h4>
                    <p className="text-sm text-muted-foreground">{t("upcomingEvents.event1.date0")}</p>
                    <p className="text-sm text-muted-foreground">{t("upcomingEvents.event1.date1")}</p>
                    <p className="text-sm text-muted-foreground">{t("upcomingEvents.event1.date2")}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">{t("upcomingEvents.event2.title")}</h4>
                    <p className="text-sm text-muted-foreground">{t("upcomingEvents.event2.date")}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">{t("upcomingEvents.event3.title")}</h4>
                    <p className="text-sm text-muted-foreground">{t("upcomingEvents.event3.date")}</p>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                <Link href="/contact#staff" className="w-full">
                  <Button
                    variant="outline" 
                    className="w-full relative overflow-hidden group-hover:bg-primary/10 transition-colors duration-300"
                  >
                    {t("upcomingEvents.viewAll")}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Button>
                </Link>
                </CardFooter>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Latest sermon */}
          {/* <motion.div variants={item} className="h-full">
            <Card className="relative h-full overflow-hidden group">
              <div className="flex flex-col h-full relative z-10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Book className="h-6 w-6 text-primary" />
                    <CardTitle>{t("latestSermon.title")}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 flex-grow">
                  <div>
                    <h4 className="font-medium">{t("latestSermon.sermon1.title")}</h4>
                    <p className="text-sm text-muted-foreground">{t("latestSermon.sermon1.pastor")}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">{t("latestSermon.sermon2.title")}</h4>
                    <p className="text-sm text-muted-foreground">{t("latestSermon.sermon2.pastor")}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">{t("latestSermon.sermon3.title")}</h4>
                    <p className="text-sm text-muted-foreground">{t("latestSermon.sermon3.pastor")}</p>
                  </div>
                </CardContent>
                
                <CardFooter className="mt-auto">
                  <Link href="/sermons" className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full relative overflow-hidden group-hover:bg-primary/10 transition-colors duration-300"
                  >
                    {t("latestSermon.viewAll")}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>
          </motion.div> */}

          {/* Card 2: Get Involved */}
          <motion.div variants={item} className="h-full">
            <Card className="relative h-full overflow-hidden group">
              <div className="flex flex-col h-full relative z-10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <HousePlus className="h-6 w-6 text-primary" />
                    <CardTitle>{t("getInvolvedCh.title")}</CardTitle>
                  </div>
                  <CardDescription>
                    {t("getInvolvedCh.description")}
                  </CardDescription>
                </CardHeader>
                
               <CardContent className="space-y-4 flex-grow">
                  <div>
                    <Link href="/chouse-details/4">
                      <Button variant="secondary" className="w-full relative overflow-hidden group-hover:bg-secondary/80 transition-colors duration-300">
                        {t("getInvolvedCh.ministry1")}
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/chouse-details/6">
                      <Button variant="secondary" className="w-full relative overflow-hidden group-hover:bg-secondary/80 transition-colors duration-300">
                        {t("getInvolvedCh.ministry2")}
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/chouse-details/15">
                      <Button variant="secondary" className="w-full relative overflow-hidden group-hover:bg-secondary/80 transition-colors duration-300">
                        {t("getInvolvedCh.ministry3")}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
                
                <CardFooter className="mt-auto">
                <Link href="/chouse" className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full relative overflow-hidden group-hover:bg-primary/10 transition-colors duration-300"
                  >
                    {t("getInvolvedCh.viewAll")}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Button>
                </Link>
                </CardFooter>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: Get Involved */}
          <motion.div variants={item} className="h-full">
            <Card className="relative h-full overflow-hidden group">
              <div className="flex flex-col h-full relative z-10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    <CardTitle>{t("getInvolved.title")}</CardTitle>
                  </div>
                  <CardDescription>
                    {t("getInvolved.description")}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4 flex-grow">
                  <div>
                    <Link href="/ministries">
                      <Button variant="secondary" className="w-full relative overflow-hidden group-hover:bg-secondary/80 transition-colors duration-300">
                        {t("getInvolved.ministry1")}
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/ministries">
                      <Button variant="secondary" className="w-full relative overflow-hidden group-hover:bg-secondary/80 transition-colors duration-300">
                        {t("getInvolved.ministry2")}
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/ministries">
                      <Button variant="secondary" className="w-full relative overflow-hidden group-hover:bg-secondary/80 transition-colors duration-300">
                        {t("getInvolved.ministry3")}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
                
                <CardFooter className="mt-auto">
                <Link href="/ministries" className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full relative overflow-hidden group-hover:bg-primary/10 transition-colors duration-300"
                  >
                    {t("getInvolved.viewAll")}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Button>
                </Link>
                </CardFooter>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}