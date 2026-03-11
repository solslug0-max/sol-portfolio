"use client";

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { subject: 'SQL Server', A: 95, fullMark: 100 },
    { subject: 'Power BI', A: 92, fullMark: 100 },
    { subject: 'SAP', A: 85, fullMark: 100 },
    { subject: 'React/Next', A: 88, fullMark: 100 },
    { subject: 'Firebase', A: 90, fullMark: 100 },
    { subject: 'Excel/VBA', A: 95, fullMark: 100 },
    { subject: 'Python', A: 80, fullMark: 100 },
    { subject: 'Data Story', A: 90, fullMark: 100 },
];

export default function TechRadarChart() {
    return (
        <Card className="bg-bg-primary/80 border-border h-full flex flex-col">
            <CardHeader className="pb-2">
                <CardTitle className="font-serif text-lg text-text-primary text-center font-bold tracking-tight">Competencias Core</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                        <PolarGrid stroke="var(--border)" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 10, fontWeight: 500 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar name="Sol Fung" dataKey="A" stroke="var(--accent)" fill="var(--accent)" fillOpacity={0.3} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)", color: "var(--text-primary)", borderRadius: "8px" }}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
