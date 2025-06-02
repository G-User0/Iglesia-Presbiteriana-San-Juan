"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, BookOpen, Calendar, User, ChevronLeft, ChevronRight, Share} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslations } from "next-intl"
import { useState } from "react";

export default function SermonsContent() {
  const t = useTranslations("sermons")
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const [openNotes, setOpenNotes] = useState<string | null>(null);

  const featuredUrl = "https://www.youtube.com/live/p0pNTciMVMY";
  const featuredId = getYoutubeId(featuredUrl);

  function getNotesForSermon(sermonKey: string) {
    const notes = t.raw(`archive.sermons.${sermonKey}.notes`) as string[] | undefined;
    return notes && notes.length > 0
      ? notes
      : [t("archive.noNotes")]; // global
  }

  function getYoutubeThumbnail(url: string) {
    const match = url.match(/youtu\.be\/([^\?]+)/) || url.match(/v=([^&]+)/);
    const id = match ? match[1] : "";
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "/NotFound.jpg";
  }

  function getYoutubeId(url: string) {
    const match =
      url.match(/youtu\.be\/([^\?&/]+)/) ||
      url.match(/youtube\.com\/watch\?v=([^\?&/]+)/) ||
      url.match(/youtube\.com\/live\/([^\?&/]+)/);
    return match ? match[1] : "";
  }

  interface Sermon {
    title: string;
    speaker: string;
    date: string;
    series: string;
    scripture: string;
    notes?: string[];
    image?: string;
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
        <Image src="/0.png" alt={t("hero.imageAlt")} fill className="object-cover brightness-[0.7]" priority />
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

      {/* Search and Filter */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 bg-background border-b border-border"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder={t("search.placeholder")} className="pl-10" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t("search.filters.series")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("search.options.allSeries")}</SelectItem>
                  <SelectItem value="faith">{t("search.options.faithThatWorks")}</SelectItem>
                  <SelectItem value="spiritual">{t("search.options.spiritualDisciplines")}</SelectItem>
                  <SelectItem value="peace">{t("search.options.peaceOfMind")}</SelectItem>
                  <SelectItem value="purpose">{t("search.options.lifesBigQuestions")}</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t("search.filters.speaker")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("search.options.allSpeakers")}</SelectItem>
                  <SelectItem value="john">{t("search.options.pastorAlfredo")}</SelectItem>
                  <SelectItem value="jane">{t("search.options.pastorVioleta")}</SelectItem>
                  <SelectItem value="sarah">{t("search.options.pastorSarah")}</SelectItem>
                  <SelectItem value="michael">{t("search.options.pastorMichael")}</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t("search.filters.date")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("search.options.allDates")}</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" aria-label={t("search.filterButton")}>
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Sermon */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("featured.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("featured.subtitle")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl mb-8 group">
              <Image
                src={`https://img.youtube.com/vi/${featuredId}/hqdefault.jpg`}
                alt={t("featured.imageAlt")}
                fill
                className="object-cover"
              />
              <button
                className="absolute inset-0 bg-black/30 flex items-center justify-center w-full h-full group-hover:scale-105 transition-transform"
                onClick={() => setOpenVideo(featuredId)}
                aria-label={t("featured.buttons.watchNow")}
                tabIndex={0}
              >
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>

            <Card className="border-primary/10 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{t("featured.sermon.title")}</h3>
                    <p className="text-primary">{t("featured.sermon.series")}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Share className="h-4 w-4 mr-2" /> {t("featured.buttons.share")}
                    </Button>
                    <Button size="sm" onClick={() => setOpenVideo(featuredId)}>
                      {t("featured.buttons.watchNow")}
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1 text-primary" />
                    <span>{t("featured.sermon.speaker")}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>{t("featured.sermon.date")}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1 text-primary" />
                    <span>{t("featured.sermon.scripture")}</span>
                  </div>
                </div>

                <p className="text-muted-foreground">{t("featured.sermon.description")}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Sermon Archive */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("archive.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("archive.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(t.raw("archive.sermons") as Record<string, Sermon>).map(([sermonKey, sermon], i) => (
              <motion.div key={i} variants={item}>
                <Card className="border-primary/10 shadow-md overflow-hidden h-full">
                  <div
                    className="relative h-48 bg-muted cursor-pointer group"
                    onClick={() => setOpenVideo(getYoutubeId(sermon.image || ""))}
                    tabIndex={0}
                    role="button"
                    aria-label={t("archive.buttons.watch")}
                    onKeyDown={e => { if (e.key === "Enter") setOpenVideo(getYoutubeId(sermon.image || "")); }}
                  >
                    <Image
                      src={getYoutubeThumbnail(sermon.image || "")}
                      alt={sermon.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary mb-1">{sermon.series}</div>
                    <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
                    <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1 text-primary" />
                        <span>{sermon.speaker}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 text-primary" />
                        <span>{sermon.date}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-3 w-3 mr-1 text-primary" />
                        <span>{sermon.scripture}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setOpenVideo(getYoutubeId(sermon.image || ""))}
                      >
                        {t("archive.buttons.watch")}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setOpenNotes(sermonKey)}
                      >
                        {t("archive.buttons.notes")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            {/* Popup video */}
            {openVideo && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                <div className="relative w-full max-w-5xl aspect-video">
                  <button
                    className="absolute -top-8 right-0 text-white text-3xl"
                    onClick={() => setOpenVideo(null)}
                    aria-label="Cerrar"
                  >
                    &times;
                  </button>
                  <iframe
                    src={`https://www.youtube.com/embed/${openVideo}?autoplay=1`}
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            )}
            {/* Popup de notas */}
            {openNotes && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                <div className="bg-background rounded-lg shadow-lg p-6 w-full max-w-md relative">
                  <button
                    className="absolute top-2 right-2 text-xl"
                    onClick={() => setOpenNotes(null)}
                    aria-label="Cerrar"
                  >
                    &times;
                  </button>
                  <h3 className="text-lg font-bold mb-4">{t("archive.buttons.notes")}</h3>
                  <ul className="space-y-2 max-h-60 overflow-y-auto">
                    {getNotesForSermon(openNotes).map((note, idx) => (
                      <li key={idx} className="bg-muted/50 rounded p-2">{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" aria-label={t("pagination.previous")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10">
                1
              </Button>
              <Button variant="outline" size="sm" className="w-10">
                2
              </Button>
              <Button variant="outline" size="sm" className="w-10">
                3
              </Button>
              <span className="mx-1">...</span>
              <Button variant="outline" size="sm" className="w-10">
                8
              </Button>
              <Button variant="outline" size="icon" aria-label={t("pagination.next")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sermon Series */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("series.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("series.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: t("series.items.item1.title"),
                count: t("series.items.item1.count"),
                image: "faith",
              },
              {
                title: t("series.items.item2.title"),
                count: t("series.items.item2.count"),
                image: "spiritual",
              },
              {
                title: t("series.items.item3.title"),
                count: t("series.items.item3.count"),
                image: "peace",
              },
              {
                title: t("series.items.item4.title"),
                count: t("series.items.item4.count"),
                image: "questions",
              },
              {
                title: t("series.items.item5.title"),
                count: t("series.items.item5.count"),
                image: "together",
              },
              {
                title: t("series.items.item6.title"),
                count: t("series.items.item6.count"),
                image: "warfare",
              },
              {
                title: t("series.items.item7.title"),
                count: t("series.items.item7.count"),
                image: "financial",
              },
              {
                title: t("series.items.item8.title"),
                count: t("series.items.item8.count"),
                image: "love",
              },
            ].map((series, i) => (
              <motion.div key={i} variants={item}>
                <Link href="#" className="block h-full">
                  <Card className="border-primary/10 shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                    <div className="relative h-48 bg-muted">
                      <Image src="/4.png" alt={series.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="text-xl font-bold">{series.title}</h3>
                          <p className="text-white/80 text-sm">{series.count}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">{t("subscribe.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t("subscribe.subtitle")}</p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div variants={item}>
                <Button className="hover:bg-red-500/20 w-full sm:w-auto text-current" variant="outline">
                  <Image
                    src="/youtube.svg"
                    alt="Apple Podcasts"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  {t("subscribe.platforms.youtube")}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
    </div>
  )
}
