"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";

export function Navbar() {
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
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                            {siteConfig.name}
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {siteConfig.nav.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            {siteConfig.cta.primary}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`block h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${mobileMenuOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {siteConfig.nav.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-700 dark:text-gray-300 hover:text-primary font-medium transition-colors py-2"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-5 py-3 bg-primary text-white rounded-full font-medium text-center hover:bg-primary-dark transition-all"
                        >
                            {siteConfig.cta.primary}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
