"use client";

import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceLine } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { week: "W1", value: 0.18 },
    { week: "W2", value: 0.15 },
    { week: "W3", value: 0.14 },
    { week: "W4", value: 0.12 },
    { week: "W5", value: 0.11 },
    { week: "W6", value: 0.09 },
    { week: "W7", value: 0.08 },
    { week: "W8", value: 0.07 },
    { week: "W9", value: 0.06 },
    { week: "W10", value: 0.055 },
    { week: "W11", value: 0.05 },
    { week: "W12", value: 0.045 },
];

export default function AcidTestChart() {
    return (
        <Card className="bg-bg-primary/80 border-border h-full flex flex-col">
            <CardHeader className="pb-2">
                <CardTitle className="font-serif text-lg text-text-primary text-center font-bold tracking-tight">KAI: Prueba Ácida WeaveFlow</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis dataKey="week" stroke="var(--text-tertiary)" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="var(--text-tertiary)" fontSize={12} tickLine={false} axisLine={false} domain={[0, 0.2]} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)", color: "var(--text-primary)", borderRadius: "8px" }}
                        />
                        <ReferenceLine y={0.08} label={{ position: 'top', value: 'Objetivo', fill: 'var(--success)', fontSize: 10, fontWeight: 600 }} stroke="var(--success)" strokeDasharray="3 3" />
                        <Line type="monotone" dataKey="value" stroke="var(--accent)" strokeWidth={3} dot={{ r: 3, fill: "var(--bg-primary)", stroke: "var(--accent)", strokeWidth: 2 }} activeDot={{ r: 6 }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
