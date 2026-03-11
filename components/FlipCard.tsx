"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
    title: string;
    status: string;
    image: string;
    description: string;
    tags: string[];
}

export default function FlipCard({ title, status, image, description, tags }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    // Status color map
    const getStatusColor = (status: string) => {
        if (status.includes("Premiado")) return "bg-accent text-bg-0 font-bold border-accent hover:bg-accent-light";
        if (status.includes("Producción")) return "bg-success/20 text-success border-success/30 hover:bg-success/30";
        if (status.includes("Desarrollo")) return "bg-info/20 text-info border-info/30 hover:bg-info/30";
        return "bg-[#A078C8]/20 text-[#A078C8] border-[#A078C8]/30 hover:bg-[#A078C8]/30"; // purple for consultoría
    };

    return (
        <div
            className="group perspective-1000 w-full h-[350px] cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={cn(
                    "relative w-full h-full duration-700 preserve-3d transition-transform rounded-2xl shadow-xl",
                    isFlipped && "rotate-y-180"
                )}
            >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden bg-bg-1 border border-border flex flex-col group-hover:shadow-[0_0_30px_rgba(212,136,58,0.15)] transition-shadow">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={`/images/${image}`}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-0 via-bg-0/60 to-transparent z-10" />

                    <div className="absolute top-4 right-4 z-20">
                        <Badge variant="outline" className={cn("px-3 py-1 text-xs backdrop-blur-md", getStatusColor(status))}>
                            {status}
                        </Badge>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                        <h3 className="text-2xl font-serif font-bold text-text-0 mb-1">{title}</h3>
                        <div className="w-10 h-1 bg-accent rounded-full transition-all duration-300 group-hover:w-20" />
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden bg-bg-1/95 backdrop-blur-xl border border-border/80 rotate-y-180 flex flex-col p-6 shadow-inner">
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        <h3 className="text-2xl font-serif font-bold text-accent mb-4 flex items-center justify-between">
                            {title}
                            <ExternalLink className="w-5 h-5 text-text-2 opacity-50" />
                        </h3>
                        <p className="text-text-1 text-sm leading-relaxed mb-6">
                            {description}
                        </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border/50">
                        <div className="flex flex-wrap gap-1.5">
                            {tags.map((tag, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider font-medium text-text-2 bg-bg-2 px-2 py-1 rounded-md border border-border/30">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
