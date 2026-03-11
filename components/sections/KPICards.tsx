"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { TrendingUp, DollarSign, Database, Trophy } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

function AnimatedCounter({ from, to, suffix, prefix, decimals = 0 }: { from: number; to: number; suffix?: string; prefix?: string; decimals?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });

    useEffect(() => {
        if (inView) {
            motionValue.set(to);
        }
    }, [inView, motionValue, to]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix || ""}${latest.toFixed(decimals)}${suffix || ""}`;
            }
        });
    }, [springValue, prefix, suffix, decimals]);

    return <span ref={ref}>{from}</span>;
}

const kpis = [
    {
        id: 1,
        icon: TrendingUp,
        prefix: "+",
        to: 55,
        suffix: "%",
        decimals: 0,
        title: "Incremento Productividad",
        detail: "76K → 118K metros/mes",
    },
    {
        id: 2,
        icon: DollarSign,
        prefix: "S/.",
        to: 1.3,
        suffix: "M",
        decimals: 1,
        title: "Ventas Gestionadas",
        detail: "Cuentas corporativas",
    },
    {
        id: 3,
        icon: Database,
        prefix: "",
        to: 92,
        suffix: "%",
        decimals: 0,
        title: "Reducción Firebase Reads",
        detail: "Optimización de costos",
    },
    {
        id: 4,
        icon: Trophy,
        prefix: "",
        to: 6,
        suffix: "",
        decimals: 0,
        title: "Apps en Producción",
        detail: "WeaveFlow, InsightFlow...",
    },
];

export default function KPICards() {
    return (
        <section className="py-12 md:py-24 relative z-10 -mt-10 md:-mt-20">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                >
                    {kpis.map((kpi) => (
                        <motion.div
                            key={kpi.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                            className="h-full aspect-auto md:aspect-[2/1] lg:aspect-auto"
                        >
                            <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} borderWidth={2}>
                                <div className="p-8 flex flex-col justify-center h-full group">
                                    <div className="w-12 h-12 rounded-full bg-accent-dim flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <kpi.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-text-primary mb-2 font-serif">
                                        <AnimatedCounter from={0} to={kpi.to} prefix={kpi.prefix} suffix={kpi.suffix} decimals={kpi.decimals} />
                                    </h3>
                                    <p className="text-base font-semibold text-text-secondary mb-1 tracking-tight">
                                        {kpi.title}
                                    </p>
                                    <p className="text-sm text-text-tertiary">
                                        {kpi.detail}
                                    </p>
                                </div>
                            </GlowingEffect>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
