"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Briefcase, GraduationCap, Sparkles } from "lucide-react";

export default function AboutMe() {
    return (
        <section className="py-24 bg-bg-primary relative z-10" id="sobre-mi">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Photo + Quick Facts */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/10 mb-8">
                            <Image
                                src="/images/profile-photo.png"
                                alt="Sol Nam Sang Fung Sanes"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                            {[
                                { icon: <MapPin className="w-4 h-4 text-accent" />, text: "Lima, Perú" },
                                { icon: <Briefcase className="w-4 h-4 text-accent" />, text: "4+ años exp." },
                                { icon: <GraduationCap className="w-4 h-4 text-accent" />, text: "Ing. Industrial" },
                                { icon: <Sparkles className="w-4 h-4 text-accent" />, text: "MIT AI Program" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="text-xs font-bold tracking-widest text-text-tertiary uppercase mb-2">
                            Sobre Mí
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tighter text-text-primary mb-6">
                            Ingeniero que <span className="text-accent">construye</span> soluciones
                        </h2>

                        <div className="space-y-4 text-text-secondary text-base md:text-lg leading-relaxed font-medium">
                            <p>
                                Soy <strong className="text-text-primary">Sol Nam Sang Fung Sanes</strong>, Ingeniero Industrial de la Universidad de Lima con especialización en análisis comercial, planificación de planta y desarrollo de soluciones digitales.
                            </p>
                            <p>
                                En TEXCORP, transformé la operación de producción textil: de hojas de Excel a un ecosistema digital completo con <strong className="text-text-primary">WeaveFlow</strong>, un sistema MES que incrementó la productividad en +55% y gestiona 31 telares en tiempo real.
                            </p>
                            <p>
                                Combino una mentalidad analítica (SQL, Power BI, SAP S/4HANA) con habilidades de desarrollo full-stack (React, Next.js, Firebase) para crear herramientas que generan impacto medible. Actualmente cursando el programa de <strong className="text-text-primary">Applied Agentic AI</strong> del MIT.
                            </p>
                            <p>
                                Mi filosofía: <em className="text-accent">&ldquo;Los datos sin acción son solo números. La acción sin datos es solo intuición.&rdquo;</em>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
