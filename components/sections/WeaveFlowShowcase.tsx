"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function WeaveFlowShowcase() {
    return (
        <section className="relative w-full overflow-hidden py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tighter text-text-primary">
                                Construido desde cero<br />
                                <span className="text-accent">WeaveFlow V12</span>
                            </h1>
                            <p className="mt-4 text-text-secondary max-w-xl mx-auto text-lg">
                                Sistema MES que incrementó la productividad de tejeduría en +55%.
                                Planificación, control en tiempo real, y analytics integrado.
                            </p>
                        </>
                    }
                >
                    <Image
                        src="/images/weaveflow-showcase.png"
                        alt="WeaveFlow Dashboard Showcase"
                        height={1080}
                        width={1920}
                        className="w-full h-full object-cover object-center"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
        </section>
    );
}
