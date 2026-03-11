"use client";

import { motion } from "framer-motion";
import { TestimonialsColumns } from "@/components/ui/testimonials-columns-1";

const testimonials = [
    {
        text: "Sol transformó completamente nuestra visibilidad de producción. WeaveFlow nos permitió pasar de Excel a tiempo real.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Carlos Mendoza",
        role: "Gerente de Planta, TEXCORP"
    },
    {
        text: "La precisión en el análisis de datos y la capacidad de construir soluciones propias es lo que diferencia a Sol del resto.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "María Elena Vargas",
        role: "Directora Comercial"
    },
    {
        text: "InsightFlow nos ahorró horas semanales en aprobaciones. Un sistema a medida que superó lo que SAP nos ofrecía.",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        name: "Roberto Sánchez",
        role: "Jefe de Operaciones"
    },
    {
        text: "Su enfoque data-driven combinado con habilidades de desarrollo es una combinación rara y valiosa.",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        name: "Ana Lucía Torres",
        role: "HR Manager, Headhunter"
    },
    {
        text: "Implementó dashboards en Power BI que cambiaron la forma en que la dirección toma decisiones.",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "Fernando Ruiz",
        role: "Director General"
    },
    {
        text: "El sistema de validación de códigos de barras redujo nuestros errores de etiquetado en un 90%.",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
        name: "Patricia Huamán",
        role: "QC Manager"
    },
    {
        text: "Sol no solo analiza datos — construye las herramientas para analizarlos. Eso es otro nivel.",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        name: "Diego Castillo",
        role: "CTO, Tech Startup"
    },
    {
        text: "La automatización con PowerShell y Google Apps Script nos liberó de procesos manuales que nos tomaban días.",
        image: "https://randomuser.me/api/portraits/women/72.jpg",
        name: "Claudia Mejía",
        role: "Operations Lead"
    },
    {
        text: "Su capacidad de conectar SQL Server legacy con Firebase moderno es impresionante. Puente perfecto.",
        image: "https://randomuser.me/api/portraits/men/88.jpg",
        name: "Andrés Villanueva",
        role: "IT Director"
    }
];

export default function Testimonials() {
    // Split into 3 columns for desktop, 2 for tablet, 1 for mobile
    const col1 = testimonials.slice(0, 3);
    const col2 = testimonials.slice(3, 6);
    const col3 = testimonials.slice(6, 9);

    return (
        <section className="py-24 bg-bg-primary relative z-10 overflow-hidden" id="testimonios">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="text-xs font-bold tracking-widest text-text-tertiary uppercase mb-2">
                            Testimonios
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tighter text-text-primary mb-4">
                            Lo que dicen de mi <span className="text-accent">trabajo</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
                            Referencias profesionales de colegas, gerentes y stakeholders con los que he colaborado.
                        </p>
                    </motion.div>
                </div>

                <div className="relative h-[600px] md:h-[740px] w-full mt-10">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg-primary to-transparent z-30 pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-primary to-transparent z-30 pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                        <div className="h-full">
                            <TestimonialsColumns testimonials={col1} speed="slow" />
                        </div>
                        <div className="h-full hidden md:block">
                            <TestimonialsColumns testimonials={col2} speed="fast" />
                        </div>
                        <div className="h-full hidden lg:block">
                            <TestimonialsColumns testimonials={col3} speed="normal" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
