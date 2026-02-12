import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/10" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-8"
          >
            Ruta Prakash
            <br />
            <span className="text-gradient italic font-medium">Kale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-4"
          >
            I believe marketing is about delivering value — and that philosophy guides how I approach life too.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-base text-muted-foreground italic mb-12"
          >
            Graduate Certificate in Marketing · Masters of Professional Studies in Digital Media
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#about" className="px-8 py-3.5 font-body font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-300">
              Discover My Work
            </a>
            <a href="#contact" className="px-8 py-3.5 font-body font-medium border border-foreground/20 text-foreground rounded-full hover:border-primary hover:text-primary transition-all duration-300">
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.3)]">
              <img src={profileImg} alt="Ruta Prakash Kale" className="w-full h-full object-cover" />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-6 rounded-full border border-dashed border-primary/5" />
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
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="text-primary" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
