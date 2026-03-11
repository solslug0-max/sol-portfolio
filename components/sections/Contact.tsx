"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
    const contactLinks = [
        {
            icon: <Mail className="w-4 h-4" />,
            text: "solfungsanes@outlook.com",
            href: "mailto:solfungsanes@outlook.com",
        },
        {
            icon: <Phone className="w-4 h-4" />,
            text: "(+51) 957 489 765",
            href: "tel:+51957489765",
        },
        {
            icon: <MapPin className="w-4 h-4" />,
            text: "Lima, Perú",
            href: "#",
        },
        {
            icon: <Linkedin className="w-4 h-4" />,
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/solfungsanes",
        },
    ];

    return (
        <section className="py-32 bg-bg-0 relative overflow-hidden z-10" id="contacto">
            {/* Radial Gradient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-text-0 mb-6 drop-shadow-sm">
                            ¿Listo para trabajar <span className="text-accent">juntos?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-text-2 mb-12 leading-relaxed">
                            Busco oportunidades donde pueda combinar análisis comercial, data analytics y desarrollo de soluciones digitales para generar impacto real.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
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
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-bg-1 border border-border/60 text-text-1 hover:text-accent hover:border-accent/40 hover:bg-bg-2 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(212,136,58,0.15)] group"
                                >
                                    <span className="text-text-2 group-hover:text-accent transition-colors">
                                        {link.icon}
                                    </span>
                                    <span className="font-medium text-sm md:text-base">{link.text}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
