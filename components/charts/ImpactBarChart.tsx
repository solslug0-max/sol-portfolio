"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { name: 'Digital', Impacto: 92 },
    { name: 'Producción', Impacto: 55 },
    { name: 'Comercial', Impacto: 40 },
    { name: 'Costos', Impacto: 35 },
];

export default function ImpactBarChart() {
    return (
        <Card className="bg-bg-primary/80 border-border h-full flex flex-col">
            <CardHeader className="pb-2">
                <CardTitle className="font-serif text-lg text-text-primary text-center font-bold tracking-tight">Impacto Promedio (%)</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
                        <XAxis type="number" stroke="var(--text-tertiary)" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} fontWeight={500} />
                        <Tooltip
                            cursor={{ fill: "var(--bg-tertiary)" }}
                            contentStyle={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)", color: "var(--text-primary)", borderRadius: "8px" }}
                        />
                        <Bar dataKey="Impacto" fill="var(--info)" radius={[0, 4, 4, 0]} barSize={24} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
