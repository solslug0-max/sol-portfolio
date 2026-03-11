"use client";

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

const data = [
    { month: "M1", pre: 76, post: 0 },
    { month: "M2", pre: 74, post: 0 },
    { month: "M3", pre: 78, post: 0 },
    { month: "M4", pre: 75, post: 0 },
    { month: "M5", pre: 72, post: 0 },
    { month: "M6", pre: 0, post: 90 },
    { month: "M7", pre: 0, post: 98 },
    { month: "M8", pre: 0, post: 105 },
    { month: "M9", pre: 0, post: 110 },
    { month: "M10", pre: 0, post: 114 },
    { month: "M11", pre: 0, post: 116 },
    { month: "M12", pre: 0, post: 118 },
];

export default function ProductionChart() {
    return (
        <Card className="bg-bg-primary/80 border-border h-full flex flex-col relative overflow-hidden">
            <BorderBeam size={300} duration={12} colorFrom="var(--accent)" colorTo="var(--info)" />
            <CardHeader className="relative z-10">
                <CardTitle className="font-serif text-xl text-text-primary font-bold tracking-tight">Evolución de Productividad</CardTitle>
                <CardDescription className="text-text-secondary font-medium mt-1">Metros producidos por mes · Tejeduría TEXCORP</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 min-h-[300px] relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis dataKey="month" stroke="var(--text-tertiary)" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="var(--text-tertiary)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}K`} />
                        <Tooltip
                            cursor={{ fill: "var(--bg-tertiary)" }}
                            contentStyle={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)", color: "var(--text-primary)", borderRadius: "8px" }}
                        />
                        <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px", fontWeight: "500" }} />
                        <Bar dataKey="pre" name="Pre-WeaveFlow" fill="var(--text-tertiary)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="post" name="Post-WeaveFlow" fill="var(--accent)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
