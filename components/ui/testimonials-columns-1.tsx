"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const TestimonialsColumns = ({
    testimonials,
    speed = "normal",
    className,
}: {
    testimonials: {
        text: string;
        image: string;
        name: string;
        role: string;
    }[];
    speed?: "fast" | "normal" | "slow";
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollRef.current) {
            const scrollContent = Array.from(scrollRef.current.children);

            scrollContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollRef.current) {
                    scrollRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                "normal" // or reverse
            );
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollRef}
                className={cn(
                    "flex flex-col min-w-full shrink-0 gap-4 py-4 w-full",
                    start && "animate-scroll-vertical"
                )}
            >
                {testimonials.map((item, idx) => (
                    <li
                        className="w-full max-w-full relative rounded-2xl flex-shrink-0 border border-border bg-bg-secondary p-6 hover:border-accent/40 shadow-sm transition-colors duration-300"
                        key={item.name}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className="relative z-20 text-sm leading-[1.6] text-text-primary font-normal">
                                "{item.text}"
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center gap-3">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border">
                                    <Image src={item.image} fill className="object-cover" alt={item.name} />
                                </div>
                                <span className="flex flex-col gap-1">
                                    <span className="text-sm leading-[1.6] text-text-primary font-bold">
                                        {item.name}
                                    </span>
                                    <span className="text-xs leading-[1.6] text-text-secondary font-medium">
                                        {item.role}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
