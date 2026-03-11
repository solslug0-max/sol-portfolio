"use client";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    proximity?: number;
    spread?: number;
    borderWidth?: number;
    inactiveZone?: number;
    glow?: boolean;
}

export const GlowingEffect = ({
    children,
    className,
    disabled = false,
    proximity = 64,
    spread = 40,
    borderWidth = 2,
    inactiveZone = 0.01,
    glow = true,
}: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        if (disabled) return;
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        if (disabled) return;
        setOpacity(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn("relative group/glow h-full w-full", className)}
        >
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 rounded-[inherit]"
                style={{
                    opacity,
                    background: `radial-gradient(${proximity}px circle at ${position.x}px ${position.y}px, var(--accent-glow), transparent)`,
                }}
            />

            {!disabled && glow && (
                <div
                    className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
                    style={{
                        opacity,
                        padding: `${borderWidth}px`,
                        background: `radial-gradient(${proximity * 1.5}px circle at ${position.x}px ${position.y}px, var(--accent), transparent)`,
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                    }}
                />
            )}

            <div className="relative z-20 h-full w-full rounded-[inherit] bg-bg-primary/90 backdrop-blur-sm border border-border/50 overflow-hidden">
                {children}
            </div>
        </div>
    );
};
