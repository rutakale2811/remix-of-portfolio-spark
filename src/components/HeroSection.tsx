import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-img.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden pb-20">
      {/* Full bleed background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
        {/* Bold text */}
        <div className="order-2 md:order-1">
          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.5em] uppercase text-accent mb-6"
          >
            And just like that...
          </motion.p> */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] text-foreground mb-6 tracking-tight"
          >
            Ruta
            <br />
            <span className="italic font-normal text-accent">Kale</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="divider-line mb-6 origin-left"
          />

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed mb-4 italic"
          >
            "I couldn't help but wonder... what if marketing was really about delivering value?"
          </motion.p> */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-body text-lg text-black mb-10"
          >
            Marketing Professional · Growth Thinker · Strategist · Media Strategist
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="px-10 py-4 font-body text-sm font-semibold tracking-widest uppercase bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              See My Work
            </a>
            <a href="#contact" className="px-10 py-4 font-body text-sm font-semibold tracking-widest uppercase border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
              Let's Talk
            </a>
          </motion.div>
        </div>

        {/* Profile image - editorial crop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 md:w-72 lg:w-80">
            <div className="aspect-[3/4] overflow-hidden shadow-[0_40px_80px_-20px_hsl(var(--noir)/0.2)]">
              <img src={profileImg} alt="Ruta Prakash Kale" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent" />
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <ArrowDown className="text-accent" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
