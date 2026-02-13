import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative section-padding overflow-hidden bg-foreground text-background">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <p className="font-body text-xs tracking-[0.5em] uppercase text-accent mb-6 font-semibold">xoxo</p>
          <h2 className="font-display text-6xl md:text-8xl font-black mb-8 leading-[0.9]">
            Let's make<br />something <span className="italic font-normal text-accent">iconic</span>
          </h2>
          <div className="w-20 h-[2px] bg-accent mx-auto mb-10" />
          <p className="font-body text-lg text-background/60 max-w-xl mx-auto mb-14 leading-[1.8]">
            Whether you're looking for a marketing strategist, a creative collaborator, or just
            want to chat about ideas — I'd love to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
            <motion.a
              href="https://linkedin.com/in/rutakale"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 px-10 py-4 bg-accent text-accent-foreground font-body text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={14} />
            </motion.a>

            <motion.a
              href="mailto:kale.ru@northeastern.edu"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 px-10 py-4 border-2 border-background/30 text-background font-body text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
              Email Me
              <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="pt-10 border-t border-background/10 flex items-center justify-center gap-2">
            <p className="font-body text-xs text-background/40 tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} Ruta Prakash Kale · Made with
            </p>
            <Heart size={12} className="text-accent fill-accent" />
            <p className="font-body text-xs text-background/40 tracking-[0.2em] uppercase">in NYC</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
