import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation";
import { Navbar } from "@/components/ui/navbar";
import {
  ArrowRight,
  Droplets,
  Layers,
  Zap,
  Globe,
  Shield,
  Palette,
  Github,
  Twitter,
  Mail,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Liquid Dynamics",
    description:
      "Real-time fluid simulation powered by Three.js with physical material properties and displacement mapping.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Zap,
    title: "Blazing Performance",
    description:
      "GPU-accelerated rendering with optimized shaders for buttery-smooth 60fps animations on any device.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Layers,
    title: "Composable Layers",
    description:
      "Stack multiple visual effects and components with full z-index control and glassmorphic overlays.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Globe,
    title: "Universal Compatibility",
    description:
      "Works seamlessly across all modern browsers with WebGL fallbacks and responsive scaling.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description:
      "Built with TypeScript, fully typed, tree-shakeable, and tested for enterprise-grade applications.",
    gradient: "from-red-400 to-rose-500",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description:
      "Adjust metalness, roughness, displacement, and rain effects with a simple declarative API.",
    gradient: "from-indigo-400 to-violet-500",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Liquid Background — fixed behind everything */}
      <LiquidEffectAnimation />

      {/* Navbar */}
      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
      >
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 backdrop-blur-md text-sm text-[#E0E0E0] animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#fb8c00] animate-pulse" />
          Now with Three.js liquid effects
        </div>

        <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
          <span className="block bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
            Immersive
          </span>
          <span className="block bg-gradient-to-r from-[#fb8c00] via-[#ff6f00] to-[#ffb74d] bg-clip-text text-transparent mt-2">
            Liquid Worlds
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#E0E0E0] leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
          Transform any surface into a living, breathing liquid canvas.
          GPU-powered fluid dynamics meets stunning visual design.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#features"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#fb8c00]/30"
          >
            <div className="absolute inset-0 bg-[#fb8c00]" />
            <div className="absolute inset-0 bg-[#ff9d2f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Explore Features</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full text-white/80 border border-white/25 backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </section>

      {/* ─── FEATURES SECTION ─── */}
      <section id="features" className="relative z-10 py-32 px-6 bg-black/40 backdrop-blur-sm">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-[#ffb74d] bg-[#fb8c00]/10 rounded-full border border-[#fb8c00]/25">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              Built for the Future
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-[#E0E0E0]">
              Every detail is engineered for maximum visual impact with minimal
              performance overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-black/50 backdrop-blur-md border border-[#27272A] hover:bg-black/60 hover:border-white/[0.15] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Glow on hover */}
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 blur-xl`}
                />
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#E0E0E0] leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / SHOWCASE SECTION ─── */}
      <section id="about" className="relative z-10 py-32 px-6 bg-black/40 backdrop-blur-sm">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-[#ffb74d] bg-[#fb8c00]/10 rounded-full border border-[#fb8c00]/25">
                About
              </span>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent leading-tight">
                Redefining Digital
                <br />
                Experiences
              </h2>
              <p className="mt-6 text-lg text-[#E0E0E0] leading-relaxed">
                LiquidUI merges the boundaries between physical and digital
                through real-time fluid simulation. Our WebGL-powered engine
                transforms static images into mesmerising interactive canvases.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Physical material properties — metalness, roughness, and more",
                  "Dynamic displacement mapping with configurable intensity",
                  "Optional rain particle system for atmospheric effects",
                  "Zero-dependency client component — loads via CDN",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#E0E0E0]">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-[#fb8c00] to-[#ffb74d] shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#27272A] bg-black/40 backdrop-blur-md p-1">
                <div className="rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-[#fb8c00]/15 via-[#ff6f00]/10 to-[#ffb74d]/15 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Droplets className="w-16 h-16 text-[#fb8c00]/60 mx-auto mb-4" />
                    <p className="text-[#E0E0E0] text-sm">
                      Interactive liquid simulation running in the background
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#fb8c00]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#ffb74d]/15 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="relative z-10 py-32 px-6 bg-black/40 backdrop-blur-sm">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#ffb74d] via-[#fb8c00] to-[#ff6f00] bg-clip-text text-transparent">
            Ready to Dive In?
          </h2>
          <p className="mt-6 text-lg text-[#E0E0E0] max-w-xl mx-auto">
            Start building immersive liquid experiences in minutes. Drop in the
            component and watch your UI come alive.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-10 py-4 text-base font-semibold rounded-full text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#fb8c00]/30"
            >
              <div className="absolute inset-0 bg-[#fb8c00]" />
              <div className="absolute inset-0 bg-[#ff9d2f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get Started Free</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer id="contact" className="relative z-10 border-t border-[#27272A] bg-black/50 backdrop-blur-sm">
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#fb8c00] to-[#ff6f00] flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">LiquidUI</span>
              </div>
              <p className="text-[#9E9E9E] text-sm max-w-sm leading-relaxed">
                Crafting the next generation of immersive web experiences with
                real-time fluid dynamics and modern UI design.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {[Github, Twitter, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#fb8c00] hover:bg-[#fb8c00]/10 hover:border-[#fb8c00]/30 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                Product
              </h4>
              <ul className="space-y-3">
                {["Features", "Pricing", "Docs", "Changelog"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#9E9E9E] hover:text-[#fb8c00] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {["About", "Blog", "Careers", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#9E9E9E] hover:text-[#fb8c00] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#9E9E9E]">
              © 2026 LiquidUI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-[#9E9E9E] hover:text-white/80 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
