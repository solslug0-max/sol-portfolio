import type { Metadata } from "next";
import { jakarta, sora } from "./fonts";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Sol Nam Sang Fung Sanes | Commercial Analyst & Digital Strategist",
  description: "Transformo datos en decisiones estratégicas. Combino análisis comercial, planificación de producción y desarrollo de soluciones digitales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${sora.variable} font-sans antialiased bg-bg-primary text-text-primary min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
