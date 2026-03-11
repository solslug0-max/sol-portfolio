"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        period: "Abril 2024 — Presente",
        badge: "Actual",
        role: "Analista Comercial & Planificador de Planta",
        company: "TEXCORP S.A.C.",
        description: [
            "Diseño y despliegue de WeaveFlow, +55% productividad (76K→118K m/mes)",
            "Gestión comercial cuentas corporativas: John Holden, Van Heusen (S/.1.3M+)",
            "Dashboards Power BI, reportes automatizados SQL Server + PowerShell",
            "InsightFlow, ActionFlow, Barcode Validator, DDP Pro",
        ],
        tags: ["SQL Server", "Power BI", "React", "Firebase", "SAP S/4HANA", "PowerShell"],
        current: true,
    },
    {
        period: "Agosto 2020 — Marzo 2023",
        badge: "Pasado",
        role: "Asistente de Planificación",
        company: "STAR FILL",
        description: [
            "Análisis de demanda e indicadores históricos para proyecciones de abastecimiento",
            "Auditoría de datos e inventario físico, integridad de info en SAP",
        ],
        tags: ["SAP", "Excel Avanzado", "Análisis de Demanda"],
        current: false,
    },
    {
        period: "Octubre 2019 — Julio 2020",
        badge: "Pasado",
        role: "Practicante de Estrategia y Análisis",
        company: "BELCORP",
        description: [
            "Soporte analítico en embudo comercial para ésika, L'BEL, Cyzone — 12 países LATAM",
        ],
        tags: ["Trade Marketing", "LATAM", "Data Analysis"],
        current: false,
    }
];

export default function Experience() {
    return (
        <section className="py-24 relative z-10" id="experiencia">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">

                {/* Section Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="text-xs font-bold tracking-widest text-text-tertiary uppercase mb-2">
                            Experiencia
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tighter text-text-primary mb-4">
                            Mi Trayectoria <span className="text-accent">Profesional</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-border/50 ml-4 md:ml-6 space-y-12">
                    {/* Fading line effect at bottom */}
                    <div className="absolute bottom-0 left-[-2px] w-[2px] h-32 bg-gradient-to-b from-transparent to-bg-primary" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center bg-bg-secondary ${exp.current ? 'border-success' : 'border-border-hover'}`}>
                                {exp.current && (
                                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col space-y-3">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h3 className="text-2xl font-serif font-bold text-text-primary tracking-tight">{exp.role}</h3>
                                    {exp.current && (
                                        <span className="text-xs font-bold uppercase tracking-wider text-success py-1 px-2 bg-success/10 rounded-full border border-success/20">
                                            Actual
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                                    <h4 className="text-lg text-text-secondary font-semibold">{exp.company}</h4>
                                    <span className="text-sm font-medium text-text-tertiary">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-text-secondary flex items-start text-base">
                                            <span className="text-accent mr-3 mt-1.5 text-xs opacity-70">◆</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {exp.tags.map((tag, i) => (
                                        <Badge key={i} variant="secondary" className="bg-bg-tertiary text-text-primary hover:bg-bg-elevated border border-border/50 transition-colors cursor-default font-mono text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
