"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("common.footer")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-primary/0 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-4">{t("titlepage")}</h3>
            <p className="text-muted-foreground mb-4">{t("description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-foreground hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-foreground hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-foreground hover:text-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("events")}
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("sermons")}
                </Link>
              </li>
              <li>
                <Link href="/give" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("give")}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">{t("ministries")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ministries/children"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("childrenMinistry")}
                </Link>
              </li>
              <li>
                <Link href="/ministries/youth" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("youthMinistry")}
                </Link>
              </li>
              <li>
                <Link href="/ministries/worship" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("worshipTeam")}
                </Link>
              </li>
              <li>
                <Link
                  href="/ministries/outreach"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("communityOutreach")}
                </Link>
              </li>
              <li>
                <Link href="/ministries/prayer" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("prayerMinistry")}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">{t("contactUs")}</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{t("address")}</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{t("phone")}</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{t("email")}</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm"
        >
          <p>{t("copyright")}</p>
          <div className="mt-2">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              {t("privacyPolicy")}
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              {t("termsOfService")}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
