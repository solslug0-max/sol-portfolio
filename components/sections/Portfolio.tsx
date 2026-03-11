"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const projects = [
    {
        title: "WeaveFlow V12",
        status: "🏆 Premiado",
        description: "Sistema MES: Gantt, Intelligence module, KPI Prueba Ácida. +55% productividad",
        tags: ["React", "Firebase", "SQL Server", "Chart.js", "PowerShell"],
        image: "/images/project_weaveflow_v2.png",
        gridClass: "md:col-span-12 lg:col-span-8 lg:row-span-2",
    },
    {
        title: "InsightFlow Z",
        status: "✅ Producción",
        description: "Workflow de aprobaciones multi-nivel (Z000-Z003). Soft-delete, rollback",
        tags: ["React", "Vercel", "Apps Script"],
        image: "/images/project_insightflow_v2.png",
        gridClass: "md:col-span-6 lg:col-span-4 lg:row-span-1",
    },
    {
        title: "ActionFlow",
        status: "✅ Producción",
        description: "Task management: Kanban, Gantt, AI chatbot, webhooks n8n",
        tags: ["Next.js", "n8n", "AI Chatbot"],
        image: "/images/project_actionflow_v2.png",
        gridClass: "md:col-span-6 lg:col-span-4 lg:row-span-1",
    },
    {
        title: "Mars B2B",
        status: "🔧 Desarrollo",
        description: "Marketplace industrial textil. TEXCORP como primer proveedor",
        tags: ["Next.js", "Supabase", "B2B"],
        image: "/images/project_mars_v2.png",
        gridClass: "md:col-span-6 lg:col-span-4",
    },
    {
        title: "Barcode Validator",
        status: "✅ Producción",
        description: "Validación etiquetas QC proveedores. OCR + zxingcpp",
        tags: ["Python", "Next.js", "zxingcpp"],
        image: "/images/project_barcode_v2.png",
        gridClass: "md:col-span-6 lg:col-span-4",
    },
    {
        title: "DINOSOL VISION",
        status: "🔧 Consultoría",
        description: "ERP completo empresa química. Inventario, producción, ventas",
        tags: ["Full-Stack", "ERP"],
        image: "/images/project_dinosol_v2.png",
        gridClass: "md:col-span-12 lg:col-span-4",
    }
];

export default function Portfolio() {
    return (
        <section className="py-24 relative z-10 bg-bg-secondary/50" id="portfolio">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="text-xs font-bold tracking-widest text-text-tertiary uppercase mb-2">
                            Portfolio
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tighter text-text-primary mb-4">
                            Proyectos <span className="text-accent">Destacados</span>
                        </h2>
                    </motion.div>
                </div>

                <motion.div
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(300px,auto)] gap-6"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            className={`${project.gridClass} h-full`}
                        >
                            <GlowingEffect glow={true} disabled={false} proximity={64} borderWidth={1} className="h-full">
                                <div className="flex flex-col h-full bg-bg-secondary overflow-hidden group">
                                    <div className="relative w-full aspect-video sm:aspect-[16/7] md:aspect-video lg:aspect-auto flex-1 overflow-hidden border-b border-border">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="text-xs font-bold uppercase tracking-wider py-1 px-3 bg-bg-primary/90 text-text-primary backdrop-blur-md rounded-full border border-border/50 shadow-sm">
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col justify-between shrink-0">
                                        <div>
                                            <h3 className="text-2xl font-serif font-bold text-text-primary mb-2 tracking-tight group-hover:text-accent transition-colors">{project.title}</h3>
                                            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 font-medium">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-xs font-mono px-2.5 py-1 bg-bg-tertiary rounded-md text-text-secondary border border-border/50">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlowingEffect>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
