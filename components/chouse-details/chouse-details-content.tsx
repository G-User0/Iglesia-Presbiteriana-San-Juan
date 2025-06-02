"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Calendar, ArrowLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslations, useLocale } from "next-intl"
import { churchHousesData, type ChurchHouseData } from "@/data/church-houses"

export default function ChurchHouseDetailPage() {
  const t = useTranslations("chouse")
  const params = useParams()
  const router = useRouter()
  const locale = useLocale() as "es" | "en" | "ko"
  const [churchHouse, setChurchHouse] = useState<ChurchHouseData | null>(null)

  // Efecto para cargar los datos de la casa iglesia seleccionada
  useEffect(() => {
    // Encontrar la casa iglesia correspondiente al ID de la URL
    const id = params.id as string
    const selectedHouse = churchHousesData.find((house) => house.id === id)

    if (selectedHouse) {
      setChurchHouse(selectedHouse)
    }
  }, [params.id])

  // Manejar el cambio de selección en el dropdown
  const handleChurchHouseChange = (value: string) => {
    router.push(`/${locale}/chouse-details/${value}`)
  }

  // Animaciones
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

  if (!churchHouse) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <Image
          src={churchHouse.image} // Cambia esto por la URL de la imagen de la casa iglesia || "/image.svg"
          alt={churchHouse.title[locale]}
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{churchHouse.title[locale]}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">{t("detail.subtitle")}</p>
        </motion.div>
      </section>

      {/* Search and Navigation */}
      <section className="py-8 bg-muted/10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.push(`/${locale}/chouse`)} className="self-start">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("detail.backToList")}
            </Button>

            <div className="flex-1 max-w-md">
              <Select value={params.id as string} onValueChange={handleChurchHouseChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("detail.selectPlaceholder")} />
                </SelectTrigger>
                <SelectContent className="max-h-80 overflow-y-auto">
                  {churchHousesData.map((house) => (
                    <SelectItem key={house.id} value={house.id}>
                      {house.title[locale]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button>{t("detail.contactButton")}</Button>
          </div>
        </div>
      </section>

      {/* Church House Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Main Info */}
            <motion.div variants={item} className="lg:col-span-2">
              <Card className="border-primary/30 shadow-md overflow-hidden">
                <div className="relative h-72 bg-muted">
                  <Image
                    src={churchHouse.image || "/0.png"}
                    alt={churchHouse.title[locale]}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{churchHouse.title[locale]}</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      <span>{churchHouse.calendar[locale]}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      <span>{churchHouse.time[locale]}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      <Link
                        href="https://maps.app.goo.gl/XkifbSSupdWdeWdU9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {churchHouse.location[locale]}
                      </Link>
                    </div>
                  </div>

                  <div className="prose max-w-none dark:prose-invert">
                    <p className="text-muted-foreground">{churchHouse.detailedDescription[locale]}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Leadership */}
            <motion.div variants={item}>
            <Card className="border-primary/30 shadow-md overflow-hidden h-full text-center">
              <CardContent className="p-0 flex flex-col h-full">
                <h3 className="text-xl p-2 mb-4 bg-primary font-bold">
                  {t("detail.leadership")}
                </h3>
            
                <div className="space-y-6 px-6 flex-grow flex flex-col justify-center items-center">
                  {/* Lay Pastor */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-3">
                      <Image
                        src={churchHouse.pastorImage} // Cambia esto por la URL de la imagen del pastor || "/image.svg"
                        alt={churchHouse.pastorName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-semibold">{churchHouse.pastorName}</h4>
                    <p className="text-sm text-muted-foreground">{t("detail.layPastor")}</p>
                  </div>
            
                  {/* Co-Pastor */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-3">
                      <Image
                        src={churchHouse.coPastorImage} // Cambia esto por la URL de la imagen del co-pastor || "/image.svg"
                        alt={churchHouse.coPastorName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-semibold">{churchHouse.coPastorName}</h4>
                    <p className="text-sm text-muted-foreground mb-4 md:mb-0">{t("detail.layCoPasstor")}</p>
                  </div>
                </div>
            
                <div className="mt-auto pt-1 border-t-2 border-t-blue-500 border-border">
                  <Button className="w-full p-6 rounded-t-none">{t("detail.contactLeaders")}</Button>
                </div>
              </CardContent>
            </Card>


              {/* Next Meeting */}
              {/* <Card className="border-primary/10 shadow-md overflow-hidden mt-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{t("detail.nextMeeting")}</h3>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      <span>{churchHouse.date[locale]}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      <span>{churchHouse.time[locale]}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">{t("detail.addToCalendar")}</Button>
                </CardContent>
              </Card> */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
