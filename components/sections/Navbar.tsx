"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Impacto", href: "#impacto" },
    { name: "Analytics", href: "#analytics" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-bg-primary/80 backdrop-blur-xl border-border py-4 shadow-sm"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-2 z-50">
                    <Image src="/logo.svg" alt="Sol Fung Monogram" width={32} height={32} />
                    <span className="font-serif text-xl font-bold tracking-tight text-text-primary">
                        Sol.Fung
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Button size="sm" className="bg-accent text-white hover:bg-accent-hover font-medium">Let's Talk</Button>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="flex md:hidden items-center gap-4 z-50">
                    <ThemeToggle />
                    <button
                        className="text-text-primary"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-bg-primary/95 backdrop-blur-lg flex flex-col items-center justify-center z-40 md:hidden"
                        >
                            <nav className="flex flex-col items-center gap-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl font-serif text-text-primary hover:text-accent transition-colors font-bold tracking-tight"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button className="mt-4 bg-accent text-white" size="lg" onClick={() => setMobileMenuOpen(false)}>Let's Talk</Button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
