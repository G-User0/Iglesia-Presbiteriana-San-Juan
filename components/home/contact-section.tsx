"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function ContactSection() {
  const t = useTranslations("home.contact")
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to backend in real implementation
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert(t("sendMessage.successMessage"))
  }

  return (
    <section id="contact" className="py-20">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Visit Us Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full" // Aseguramos que el motion.div ocupe todo el alto disponible
          >
            <Card className="h-full flex flex-col"> {/* Añadimos flex-col para organizar el contenido verticalmente */}
              <CardContent className="p-6 flex flex-col h-full"> {/* Flex-col y h-full para que ocupe todo el espacio */}
                <div className="space-y-6 flex-grow"> {/* flex-grow para que este div ocupe todo el espacio disponible */}
                  <h3 className="text-2xl font-bold mb-4">{t("visitUs.title")}</h3>
          
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("visitUs.address.label")}</p>
                      <p className="text-muted-foreground">{t("visitUs.address.value")}</p>
                    </div>
                  </div>
          
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("visitUs.serviceHours.label")}</p>
                      <p className="text-muted-foreground">{t("visitUs.serviceHours.week")}</p>
                      <p className="text-muted-foreground">{t("visitUs.serviceHours.week1")}</p>
                      <p className="text-muted-foreground">{t("visitUs.serviceHours.sunday")}</p>
                      <p className="text-muted-foreground">{t("visitUs.serviceHours.wednesday")}</p>
                    </div>
                  </div>
          
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("visitUs.email.label")}</p>
                      <p className="text-muted-foreground">{t("visitUs.email.value")}</p>
                      <p className="text-muted-foreground">{t("visitUs.phone.value")}</p>
                    </div>
                  </div>
                </div>
                
                {/* Botón al final con espacio superior adicional */}
                <div className="mt-auto pt-6">
                  <Button className="w-full relative overflow-hidden group-hover:bg-primary/90 transition-colors duration-300">
                    {t("visitUs.contactButton")}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <Card className="h-full rounded-xl overflow-hidden">
              <CardContent className="p-0 h-full ">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.8747097092127!2d-76.96215926287164!3d-12.173847675244138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b90051be1765%3A0x6009d4fc2ee711c8!2sIglesia%20Presbiteriana%20San%20Juan!5e0!3m2!1ses!2spe!4v1746369785085!5m2!1ses!2spe" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="visitUs.address.label">
                  </iframe>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">{t("sendMessage.title")}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t("sendMessage.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("sendMessage.namePlaceholder")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t("sendMessage.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("sendMessage.emailPlaceholder")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t("sendMessage.message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("sendMessage.messagePlaceholder")}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {t("sendMessage.sendButton")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}