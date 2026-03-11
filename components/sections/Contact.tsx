"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
    const contactLinks = [
        {
            icon: <Mail className="w-5 h-5" />,
            text: "solfungsanes@outlook.com",
            href: "mailto:solfungsanes@outlook.com",
        },
        {
            icon: <Phone className="w-5 h-5" />,
            text: "(+51) 957 489 765",
            href: "tel:+51957489765",
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            text: "Lima, Perú",
            href: "https://maps.google.com/?q=Lima,Peru",
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/solfungsanes",
        },
    ];

    return (
        <section className="py-32 bg-bg-primary relative overflow-hidden z-10" id="contacto">
            {/* Radial Gradient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-7xl font-serif font-extrabold tracking-tighter text-text-primary mb-6 drop-shadow-sm">
                            {"¿Listo para trabajar "}<span className="text-accent inline-block">{"juntos?"}</span>
                        </h2>
                        <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            Busco oportunidades donde pueda combinar análisis comercial, data analytics y desarrollo de soluciones digitales para generar impacto real.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Link href="https://wa.me/51957489765?text=Hola%20Sol%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar." target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/25 h-14 px-8 text-lg transition-all hover:scale-105 rounded-2xl w-full sm:w-auto">
                                    Conversar ahora <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/cv-sol-fung.pdf" target="_blank">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-2xl w-full sm:w-auto border-border hover:bg-bg-tertiary transition-all hover:scale-105">
                                    <Download className="mr-2 w-5 h-5" /> Descargar CV
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                            {contactLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-bg-secondary/80 border border-border hover:border-accent/40 hover:bg-bg-tertiary transition-all duration-300 shadow-sm group backdrop-blur-sm"
                                >
                                    <div className="w-12 h-12 rounded-full bg-bg-elevated flex items-center justify-center text-text-secondary group-hover:text-accent group-hover:scale-110 transition-all border border-border/50">
                                        {link.icon}
                                    </div>
                                    <span className="font-semibold text-text-primary text-sm">{link.text}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
