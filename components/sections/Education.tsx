"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, BarChart3, Briefcase, Search, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

const education = [
    {
        icon: <GraduationCap className="w-8 h-8 text-accent" />,
        title: "Ingeniería Industrial",
        institution: "Universidad de Lima",
        year: "—",
    },
    {
        icon: <BookOpen className="w-8 h-8 text-info" />,
        title: "Applied Agentic AI for Business",
        institution: "MIT Professional Education",
        year: "En curso",
        highlight: true,
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-success" />,
        title: "Data Analytics y Storytelling",
        institution: "Universidad de Lima",
        year: "2024",
    },
    {
        icon: <Briefcase className="w-8 h-8 text-accent-light" />,
        title: "Gestión Comercial",
        institution: "Pacífico Business School",
        year: "—",
    },
    {
        icon: <Search className="w-8 h-8 text-info" />,
        title: "Data Analytics Professional Certificate",
        institution: "Google",
        year: "—",
    },
    {
        icon: <Lock className="w-8 h-8 text-text-tertiary" />,
        title: "NIST Cybersecurity Framework",
        institution: "MIT Affiliated Program",
        year: "—",
    },
];

export default function Education() {
    return (
        <section className="py-24 bg-bg-secondary/40 border-y border-border/50 relative z-10" id="educacion">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="text-xs font-bold tracking-widest text-text-tertiary uppercase mb-2">
                            Formación Académica
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tighter text-text-primary mb-4">
                            Educación <span className="text-accent">Continua</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <Card className={`h-full relative overflow-hidden transition-colors duration-300 ${edu.highlight ? 'bg-bg-primary border-transparent' : 'bg-bg-secondary border-border hover:border-accent/50'} `}>
                                {edu.highlight && (
                                    <BorderBeam size={200} duration={8} colorFrom="var(--accent)" colorTo="var(--info)" />
                                )}
                                <CardContent className="p-6 flex items-start gap-4 relative z-10">
                                    <div className="bg-bg-tertiary p-3 rounded-xl border border-border/50 group-hover:bg-bg-elevated transition-colors duration-300 shrink-0">
                                        {edu.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text-primary text-lg leading-tight mb-1 group-hover:text-accent transition-colors duration-300">
                                            {edu.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm font-medium">{edu.institution}</p>
                                        <p className="text-text-tertiary text-xs mt-2 font-mono font-bold">{edu.year}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
