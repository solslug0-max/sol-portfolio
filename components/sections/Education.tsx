"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, BarChart3, Briefcase, Search, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
        icon: <Lock className="w-8 h-8 text-[#A078C8]" />,
        title: "NIST Cybersecurity Framework",
        institution: "MIT Affiliated Program",
        year: "—",
    },
];

export default function Education() {
    return (
        <section className="py-24 bg-bg-1 border-y border-border relative z-10" id="educacion">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-3xl md:text-5xl font-serif font-bold text-text-0 mb-4"
                    >
                        Educación Continua
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <Card className="h-full bg-bg-0 border-border hover:border-accent/50 transition-colors duration-300">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="bg-bg-1 p-3 rounded-xl border border-border group-hover:bg-bg-2 transition-colors duration-300">
                                        {edu.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text-0 text-lg leading-tight mb-1 group-hover:text-accent transition-colors duration-300">
                                            {edu.title}
                                        </h3>
                                        <p className="text-text-2 text-sm">{edu.institution}</p>
                                        <p className="text-text-3 text-xs mt-2 font-mono">{edu.year}</p>
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
