"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2.5 group">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-300 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent tracking-tight">
                            LiquidUI
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5 group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#fb8c00] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="#contact"
                            className="relative px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-[#fb8c00] transition-all duration-300 rounded-full" />
                            <div className="absolute inset-0 bg-[#ff9d2f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                            <span className="relative z-10">Get Started</span>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 py-4 bg-black/60 backdrop-blur-2xl border-t border-white/5 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 mt-2 text-sm font-semibold text-center text-white bg-[#fb8c00] rounded-xl"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    )
}
