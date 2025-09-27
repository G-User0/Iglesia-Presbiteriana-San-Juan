"use client"

import { useState, useEffect } from "react"
import { Link, usePathname } from "@/navigation"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import * as icons from "lucide-react"
import { useTheme } from "next-themes"
import LanguageSwitcher from "@/components/language-switcher"
import { useMobile } from "@/hooks/use-mobile"
import Image from "next/image"

function LogoByTheme() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return theme === "dark" ? (
    <Image src="/isot-white.png" alt="Inicio" width={80} height={62} priority />
  ) : (
    <Image src="/isot-black.png" alt="Inicio" width={80} height={62} priority />
  )
}

export default function Navbar() {
  const t = useTranslations("common.navbar")
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const isMobile = useMobile()

  useEffect(() => setMounted(true), [])

  // Cerrar el menú cuando se cambia de ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevenir el desplazamiento cuando el menú está abierto en dispositivos móviles
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen, isMobile])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/sermons", label: t("sermons") },
    { href: "/events", label: t("events") },
    { href: "/ministries", label: t("ministries") },
    { href: "/chouse", label: t("chouse") },
    { href: "/contact", label: t("contact") },
  ]

  const Menu = icons.Menu
  const X = icons.X
  const Sun = icons.Sun
  const Moon = icons.Moon

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl flex items-center">
            <LogoByTheme />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                asChild
                className={pathname === item.href ? "text-primary" : ""}
              >
                <Link href={item.href} prefetch={true}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <LanguageSwitcher />
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSwitcher />
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label={t("menu")}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute right-4 top-20 z-50 w-56 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-lg p-4 md:hidden">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                asChild
                className={`justify-start w-full text-left ${pathname === item.href ? "text-primary" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href={item.href} prefetch={true}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}



// export default function Navbar() {
//   const t = useTranslations("common.navbar")
//   const pathname = usePathname()
//   const { theme, setTheme } = useTheme()
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const isMobile = useMobile()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   // Cerrar el menú cuando se cambia de ruta
//   useEffect(() => {
//     setIsMenuOpen(false)
//   }, [pathname])

//   // Prevenir el desplazamiento cuando el menú está abierto en dispositivos móviles
//   useEffect(() => {
//     if (isMobile) {
//       if (isMenuOpen) {
//         document.body.style.overflow = "hidden"
//       } else {
//         document.body.style.overflow = "auto"
//       }
//     }

//     return () => {
//       document.body.style.overflow = "auto"
//     }
//   }, [isMenuOpen, isMobile])

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark")
//   }

//     useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 500
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [scrolled])

//   const navItems = [
//     { href: "/", label: t("home") },
//     { href: "/about", label: t("about") },
//     { href: "/services", label: t("services") },
//     { href: "/sermons", label: t("sermons") },
//     { href: "/events", label: t("events") },
//     { href: "/ministries", label: t("ministries") },
//     { href: "/chouse", label: t("chouse") },
//     { href: "/contact", label: t("contact") },
//   ]

//   // Usando iconos de Lucide-react
//   const Menu = icons.Menu
//   const X = icons.X
//   const Sun = icons.Sun
//   const Moon = icons.Moon

//   return (
//     <>
//       <RoutePrefetcher />
//       {/* <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"> */}
//       <header className="fixed top-4 right-4 z-50 flex justify-end bg-background/50 backdrop-blur-sm shadow-md rounded-full">
//         {/* <div className="container mx-auto px-4"> */}
//           {/* <div className="flex items-center justify-between"> */}
//             {/* <Link href="/" className="font-bold text-xl">
//               {t("home")}
//             </Link> */}

//             {/* Desktop Navigation */}
//             {/* <nav className="hidden md:flex items-center space-x-1"> */}
//            <nav className={cn("flex items-center gap-1 sm:gap-2 rounded-full py-2 px-4 transition-all duration-300 w-full",
//                  scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-background/50 backdrop-blur-sm"
//                )} >
//               {navItems.map((item) => (
//                 <Button
//                   key={item.href}
//                   variant="ghost"
//                   size="sm"
//                   asChild
//                   className={pathname === item.href ? "text-primary" : ""}
//                 >
//                   <Link href={item.href}>{item.label}</Link>
//                 </Button>
//               ))}
//             </nav>

//             <div className="hidden md:flex items-center space-x-2">
//               <LanguageSwitcher />
//               {mounted && (
//                 <Button variant="ghost" size="icon" onClick={toggleTheme}>
//                   {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//                 </Button>
//               )}

//             </div>

//             {/* Mobile Menu Button */}
//             <div className="flex md:hidden items-center space-x-2">
//               <LanguageSwitcher />
//               {mounted && (
//                 <Button variant="ghost" size="icon" onClick={toggleTheme}>
//                   {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//                 </Button>
//               )}

//               <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={t("menu")}>
//                 {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//               </Button>
//             </div>
//           {/* </div> */}
//         {/* </div> */}

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-background border-t border-border">
//             <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
//               {navItems.map((item) => (
//                 <Button
//                   key={item.href}
//                   variant="ghost"
//                   size="sm"
//                   asChild
//                   className={`justify-start ${pathname === item.href ? "text-primary" : ""}`}
//                 >
//                   <Link href={item.href}>{item.label}</Link>
//                 </Button>
//               ))}
//             </nav>
//           </div>
//         )}
//       </header>
//     </>
//   )
// }



