import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-bg-1 py-12">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <Link href="/" className="flex items-center gap-1">
                        <span className="font-serif text-xl font-bold tracking-tight text-text-0">
                            Sol.Fung
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </Link>
                    <p className="text-text-2 text-sm max-w-md mx-auto">
                        © {new Date().getFullYear()} Sol Nam Sang Fung Sanes. Diseñado con datos y propósito.
                    </p>
                </div>
            </div>
        </footer>
    );
}
