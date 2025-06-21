"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import "@fontsource-variable/playfair-display"
import "@fontsource-variable/inter"
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sümer İnşaat – Isparta'nın Güvenilir Yapı Firması</title>
        <meta name="description" content="Sümer İnşaat olarak Isparta'da kaliteli konut projeleri, lüks yaşam alanları ve güçlü altyapı hizmetleri sunuyoruz." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sümer İnşaat" />
        <meta property="og:description" content="Isparta'da modern ve lüks yaşam alanları inşa ediyoruz." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sumerinsaat.com" />
      </Helmet>
      <div className="bg-white text-blue-900 font-inter">
        {/* ... tüm içerik buraya ... */}
        <footer className="bg-blue-900 text-white text-center py-6 mt-12">
          <p className="text-sm">© 2025 Sümer İnşaat. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </>
  )
}
