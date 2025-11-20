"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, CheckCircle, ParkingSquare } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ContactPage() {
  const t = useTranslations("contact")

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

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
          alt="Church contact"
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

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("info.visit.title")}</h3>
                    <p className="text-muted-foreground">
                      {t("info.visit.address1")}
                      <br />
                      {/* {t("info.visit.address2")} */}
                    </p>
                    <Link
                      href="#map"
                    //   target="_blank"
                      className="text-primary mt-2"
                    >
                      {t("info.visit.directions")}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("info.call.title")}</h3>
                    <p className="text-muted-foreground">{t("info.call.phone")}</p>
                    <p className="text-sm text-muted-foreground mt-2">{t("info.call.hours")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("info.email.title")}</h3>
                    <p className="text-muted-foreground">{t("info.email.address")}</p>
                    <p className="text-sm text-muted-foreground mt-2">{t("info.email.response")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md h-full hover:bg-slate-500/10 transition duration-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t("info.service.title")}</h3>
                    <p className="text-muted-foreground">
                      {t("info.service.sunday")}
                      <br />
                      {t("info.service.wednesday")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto"
          >
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold mb-6">{t("form.title")}</h2>
              <p className="text-muted-foreground mb-6">{t("form.description")}</p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("social.title")}</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                      <span className="sr-only">YouTube</span>
                    </Link>
                  </div>
                </div>

                {/* <div>
                  <h3 className="text-xl font-bold mb-2">{t("hours.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("hours.weekdays")}
                    <br />
                    {t("hours.saturday")}
                    <br />
                    {t("hours.sunday")}
                  </p>
                </div> */}
              </div>
            </motion.div>

            <motion.div variants={item}>
              <Card className="border-primary/10 shadow-md">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{t("form.success.title")}</h3>
                      <p className="text-muted-foreground mb-4">{t("form.success.message")}</p>
                      <Button onClick={() => setIsSubmitted(false)}>{t("form.success.button")}</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          {t("form.fields.name.label")} <span className="text-red-500">*</span>
                        </label>
                        <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            {t("form.fields.email.label")} <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-1">
                            {t("form.fields.phone.label")}
                          </label>
                          <Input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                          {t("form.fields.subject.label")} <span className="text-red-500">*</span>
                        </label>
                        <Select value={formState.subject} onValueChange={handleSelectChange} required>
                          <SelectTrigger id="subject" className="w-full">
                            <SelectValue placeholder={t("form.fields.subject.placeholder")}/>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="General Inquiry">{t("form.fields.subject.options.general")}</SelectItem>
                            <SelectItem value="Prayer Request">{t("form.fields.subject.options.prayer")}</SelectItem>
                            <SelectItem value="Pastoral Care">{t("form.fields.subject.options.pastoral")}</SelectItem>
                            <SelectItem value="Membership">{t("form.fields.subject.options.membership")}</SelectItem>
                            <SelectItem value="Volunteering">
                              {t("form.fields.subject.options.volunteering")}
                            </SelectItem>
                            <SelectItem value="Other">{t("form.fields.subject.options.other")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          {t("form.fields.message.label")} <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="pt-2">
                        <Button type="submit" className="w-full" size="lg">
                          {t("form.submit")}
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="py-16 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("map.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("map.subtitle")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] relative rounded-lg overflow-hidden shadow-md"
          >
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.8747097092127!2d-76.96215926287164!3d-12.173847675244138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b90051be1765%3A0x6009d4fc2ee711c8!2sIglesia%20Presbiteriana%20San%20Juan!5e0!3m2!1ses!2spe!4v1746369785085!5m2!1ses!2spe" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Church location">
            </iframe>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="max-w-6xl mx-auto mt-8"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card de Dirección */}
              {/* <motion.div
                variants={item}
                className="border border-primary/20 shadow-lg rounded-lg p-6 bg-background"
              >
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="text-primary text-3xl" />
                  <h3 className="text-xl font-bold">{t("directions.title")}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{t("directions.from")}</p>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>{t("directions.steps.step1")}</li>
                  <li>{t("directions.steps.step2")}</li>
                  <li>{t("directions.steps.step3")}</li>
                  <li>{t("directions.steps.step4")}</li>
                  <li>{t("directions.steps.step5")}</li>
                </ol>
              </motion.div> */}
            
              {/* Card de Estacionamiento */}
              {/* <motion.div
                variants={item}
                className="border border-primary/20 shadow-lg rounded-lg p-6 bg-background"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ParkingSquare className="text-primary text-3xl" />
                  <h3 className="text-xl font-bold">{t("parking.title")}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{t("parking.description")}</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>{t("parking.options.option1")}</li>
                  <li>{t("parking.options.option2")}</li>
                  <li>{t("parking.options.option3")}</li>
                </ul>
                <p className="text-muted-foreground mt-4">{t("parking.handicap")}</p>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staff Directory */}
      <section id="staff" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("staff.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("staff.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                image: "/user.svg",
                name: "Pastor John Smith",
                role: t("staff.pastors.members.member1.role"),
                email: "john@gracechurch.org",
                phone: "(555) 123-4567 ext. 101",
              },
              {
                image: "/user.svg",
                name: "Sarah Johnson",
                role: t("staff.pastors.members.member2.role"),
                email: "sarah@gracechurch.org",
                phone: "(555) 123-4567 ext. 102",
              },
              {
                image: "/user.svg",
                name: "Michael Brown",
                role: t("staff.pastors.members.member3.role"),
                email: "michael@gracechurch.org",
                phone: "(555) 123-4567 ext. 103",
              },
              {
                image: "/user.svg",
                name: "Rebecca Martinez",
                role: t("staff.pastors.members.member4.role"),
                email: "rebecca@gracechurch.org",
                phone: "(555) 123-4567 ext. 104",
              },
              {
                image: "/user.svg",
                name: "James Thompson",
                role: t("staff.pastors.members.member5.role"),
                email: "james@gracechurch.org",
                phone: "(555) 123-4567 ext. 105",
              },
              {
                image: "/user.svg",
                name: "Lisa Chen",
                role: t("staff.pastors.members.member6.role"),
                email: "lisa@gracechurch.org",
                phone: "(555) 123-4567 ext. 100",
              },
            ].map((staff, i) => (
              <motion.div key={i} variants={item}>
                <Card className="border-primary/10 shadow-md h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-muted mb-4 overflow-hidden">
                        <Image
                          src={staff.image || "/user.svg"} 
                          alt={staff.name}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{staff.name}</h3>
                      <p className="text-primary mb-2">{staff.role}</p>
                      <p className="text-muted-foreground text-sm">{staff.email}</p>
                      <p className="text-muted-foreground text-sm mb-4">{staff.phone}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`mailto:${staff.email}`}>{t("staff.contactButton")}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("faq.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("faq.subtitle")}
            </p>
          </motion.div>
      
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {[...Array(5)].map((_, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border-primary/10 shadow-md h-full w-full hover:bg-slate-500/10 transition duration-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {t(`faq.questions.q${index + 1}.question`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`faq.questions.q${index + 1}.answer`)}
                    </p>
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
