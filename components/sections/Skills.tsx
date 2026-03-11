"use client";

import { motion } from "framer-motion";

const skillsData = [
    {
        category: "DATA & ANALYTICS",
        skills: [
            { name: "SQL Server / T-SQL", progress: 95 },
            { name: "Power BI / DAX", progress: 92 },
            { name: "Excel Avanzado / VBA", progress: 95 },
            { name: "Data Storytelling", progress: 90 },
        ],
        color: "bg-accent",
    },
    {
        category: "ENTERPRISE SYSTEMS",
        skills: [
            { name: "SAP S/4HANA (SD/EWM)", progress: 85 },
            { name: "Power Automate Desktop", progress: 88 },
            { name: "PowerShell Scripting", progress: 85 },
        ],
        color: "bg-info",
    },
    {
        category: "DESARROLLO WEB",
        skills: [
            { name: "React / Next.js", progress: 88 },
            { name: "Firebase / Firestore", progress: 90 },
            { name: "Python", progress: 80 },
            { name: "Supabase / Vercel", progress: 82 },
        ],
        color: "bg-success",
    },
    {
        category: "AI & AUTOMATION",
        skills: [
            { name: "AI-Assisted Development", progress: 88 },
            { name: "n8n / Webhooks", progress: 78 },
            { name: "Google Apps Script", progress: 85 },
        ],
        color: "bg-accent",
    },
];

export default function Skills() {
    return (
        <section className="py-24 bg-bg-0 relative z-10" id="skills">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-3xl md:text-5xl font-serif font-bold text-text-0 mb-4"
                    >
                        Core <span className="text-accent">Competencies</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {/* Column 1 */}
                    <div className="space-y-12">
                        {skillsData.slice(0, 2).map((group, groupIndex) => (
                            <div key={groupIndex} className="space-y-6">
                                <h3 className="text-sm font-bold tracking-widest text-text-2 mb-4 pb-2 border-b border-border/50">
                                    {group.category}
                                </h3>
                                <div className="space-y-5">
                                    {group.skills.map((skill, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="font-medium text-text-1">{skill.name}</span>
                                                <span className="text-text-3 font-bold">{skill.progress}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-bg-2 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.progress}%` }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                                                    className={`h-full rounded-full ${group.color} shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-12">
                        {skillsData.slice(2, 4).map((group, groupIndex) => (
                            <div key={groupIndex} className="space-y-6">
                                <h3 className="text-sm font-bold tracking-widest text-text-2 mb-4 pb-2 border-b border-border/50">
                                    {group.category}
                                </h3>
                                <div className="space-y-5">
                                    {group.skills.map((skill, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="font-medium text-text-1">{skill.name}</span>
                                                <span className="text-text-3 font-bold">{skill.progress}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-bg-2 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.progress}%` }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                                                    className={`h-full rounded-full ${group.color} shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
