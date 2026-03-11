"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import dynamic from "next/dynamic";
import Link from "next/link";

const WebGLBackground = dynamic(() => import("@/components/effects/WebGLBackground"), {
    ssr: false,
});

export default function Hero() {
    const typewriterWords = [
        { text: "Transformo" },
        { text: "datos" },
        { text: "en" },
        { text: "decisiones", className: "text-accent" },
        { text: "estratégicas.", className: "text-accent" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <WebGLBackground />

            <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 mb-8 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                    </span>
                    <span className="text-xs font-semibold text-success uppercase tracking-wider">
                        Disponible para nuevas oportunidades
                    </span>
                </motion.div>

                <TypewriterEffectSmooth words={typewriterWords} className="justify-center" cursorClassName="bg-accent" />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-2 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-medium"
                >
                    Analista Comercial &amp; Planificador de Planta. SQL, Power BI, SAP S/4HANA y desarrollo de soluciones digitales con impacto medible en productividad y revenue.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="https://wa.me/51957489765?text=Hola%20Sol%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar." target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/25 h-12 px-8 text-base transition-all hover:scale-105 rounded-xl">
                            Conversemos <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                    <Link href="#portfolio">
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-border bg-transparent hover:bg-bg-tertiary transition-all hover:scale-105 rounded-xl">
                            Ver Portfolio
                        </Button>
                    </Link>
                    <Link href="/cv-sol-fung.pdf" target="_blank">
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-border bg-transparent hover:bg-bg-tertiary transition-all hover:scale-105 rounded-xl">
                            <Download className="mr-2 w-4 h-4" /> Descargar CV
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="mt-16 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-text-tertiary font-bold tracking-wide uppercase"
                >
                    <span>+55% Productividad</span>
                    <span className="hidden sm:inline w-1 h-1 rounded-full bg-border-hover"></span>
                    <span>S/.1.3M+ Ventas</span>
                    <span className="hidden sm:inline w-1 h-1 rounded-full bg-border-hover"></span>
                    <span>31 Telares</span>
                    <span className="hidden sm:inline w-1 h-1 rounded-full bg-border-hover"></span>
                    <span>6 Apps Producción</span>
                </motion.div>

            </div>
        </section>
    );
}
