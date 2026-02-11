import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Northeastern", href: "#northeastern" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border)/0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-2">
          <div className="relative w-9 h-9 rounded-lg bg-primary flex items-center justify-center overflow-hidden group-hover:rounded-xl transition-all duration-500">
            <span className="font-display text-base font-bold text-primary-foreground relative z-10">
              RK
            </span>
            <motion.div
              className="absolute inset-0 bg-foreground"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-sm font-semibold tracking-tight text-foreground">
              Ruta Kale
            </span>
            <span className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
              Marketing
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center bg-muted/50 rounded-full px-1.5 py-1.5 gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-4 py-1.5 font-body text-[13px] tracking-wide transition-colors duration-300 rounded-full"
                >
                  {/* Active / hover pill background */}
                  {(isActive || hoveredLink === link.href) && (
                    <motion.div
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full ${
                        isActive ? "bg-background shadow-sm" : "bg-background/60"
                      }`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="ml-5 group flex items-center gap-2 px-5 py-2 text-[13px] font-body font-medium bg-foreground text-background rounded-full hover:gap-3 transition-all duration-300"
          >
            Let's Talk
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 text-foreground"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={18} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, ease: "easeOut" }}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl font-body text-base transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-muted text-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 px-5 py-3.5 font-body font-medium bg-foreground text-background rounded-xl"
              >
                Let's Talk
                <ArrowRight size={14} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
