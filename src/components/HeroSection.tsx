import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center pt-20">
        {/* Text */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-8"
          >
            Marketing · Strategy · Storytelling
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground mb-8 tracking-tight"
          >
            Ruta
            <br />
            Prakash
            <br />
            <span className="text-gradient italic font-medium">Kale</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="divider-line mb-8 mx-auto md:mx-0"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-base text-muted-foreground max-w-md leading-relaxed mb-10"
          >
            I believe marketing is about delivering value — and that philosophy guides how I approach life too.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#about" className="px-8 py-3.5 font-body text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-all duration-300 tracking-wide">
              Discover My Work
            </a>
            <a href="#contact" className="px-8 py-3.5 font-body text-sm font-medium border border-foreground/20 text-foreground rounded-full hover:border-foreground/60 transition-all duration-300 tracking-wide">
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_hsl(var(--espresso)/0.15)]">
              <img src={profileImg} alt="Ruta Prakash Kale" className="w-full h-full object-cover" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-[2.5rem] border border-border" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <ArrowDown className="text-muted-foreground" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
