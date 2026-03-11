"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        if (isInView) {
            animate(
                "span.typewriter-char",
                {
                    opacity: 1,
                },
                {
                    duration: 0.1,
                    delay: stagger(0.04),
                    onComplete: () => {
                        setAnimationCompleted(true);
                    }
                }
            );
        }
    }, [isInView, animate]);

    const renderWords = () => {
        return (
            <div ref={scope} className="inline-block">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(
                                        "typewriter-char opacity-0 inline-block",
                                        word.className
                                    )}
                                >
                                    {char}
                                </span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <div
                className="overflow-hidden pb-2"
            >
                <div className="text-3xl sm:text-5xl md:text-7xl xl:text-8xl font-serif font-extrabold tracking-tighter" style={{ whiteSpace: "nowrap" }}>
                    {renderWords()}{" "}
                </div>
            </div>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className={cn(
                    "inline-block rounded-sm w-[4px] md:w-[8px] h-8 sm:h-12 md:h-16 xl:h-20 bg-accent",
                    cursorClassName,
                    animationCompleted && "opacity-50"
                )}
            ></motion.span>
        </div>
    );
};
