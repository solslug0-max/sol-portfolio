"use client";

import { motion } from "framer-motion";
import ProductionChart from "@/components/charts/ProductionChart";
import TechRadarChart from "@/components/charts/RadarChart";
import TechPieChart from "@/components/charts/TechPieChart";
import ImpactBarChart from "@/components/charts/ImpactBarChart";
import AcidTestChart from "@/components/charts/AcidTestChart";

export default function Analytics() {
    return (
        <section className="py-24 bg-bg-1 relative z-10" id="analytics">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-accent/5 rounded-[100%] blur-[100px] -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="text-xs font-bold tracking-widest text-text-tertiary uppercase mb-2">
                            Insights & Analytics
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tighter text-text-primary mb-4">
                            Dashboard de <span className="text-accent">competencias</span>
                        </h2>
                        <p className="text-text-secondary max-w-3xl text-lg font-medium">
                            Métricas clave y stack tecnológico. Datos estructurados para visualizar el impacto real cruzando desarrollo de software y rentabilidad comercial.
                        </p>
                    </motion.div>
                </div>

                {/* Top Grid: 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-8"
                    >
                        <ProductionChart />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-4"
                    >
                        <TechRadarChart />
                    </motion.div>
                </div>

                {/* Bottom Grid: 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.3 }}
                    >
                        <TechPieChart />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.4 }}
                    >
                        <ImpactBarChart />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.5 }}
                    >
                        <AcidTestChart />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
