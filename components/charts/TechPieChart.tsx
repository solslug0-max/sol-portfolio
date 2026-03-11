"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { name: 'React/Next', value: 28 },
    { name: 'Firebase', value: 22 },
    { name: 'SQL Server', value: 20 },
    { name: 'Python', value: 12 },
    { name: 'SAP', value: 10 },
    { name: 'PowerShell', value: 8 },
];

const COLORS = ['var(--primary-500)', 'var(--info)', 'var(--primary-700)', 'var(--text-tertiary)', 'var(--warning)', 'var(--success)'];

export default function TechPieChart() {
    return (
        <Card className="bg-bg-primary/80 border-border h-full flex flex-col">
            <CardHeader className="pb-2">
                <CardTitle className="font-serif text-lg text-text-primary text-center font-bold tracking-tight">Tech Mix</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)", color: "var(--text-primary)", borderRadius: "8px" }}
                            itemStyle={{ color: "var(--text-primary)", fontWeight: 500 }}
                        />
                        <Legend wrapperStyle={{ fontSize: "12px", fontWeight: 500 }} />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
