import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Let's Connect</p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mb-6">
            Ready to create something <span className="italic text-gradient">meaningful</span>?
          </h2>
          <div className="divider-line mx-auto mb-10" />
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mb-12 leading-[1.8]">
            Whether you're looking for a marketing strategist, a creative collaborator, or just
            want to chat about ideas — I'd love to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <motion.a
              href="https://linkedin.com/in/rutakale"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-body text-sm font-medium transition-all duration-300"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
              <ArrowUpRight size={14} />
            </motion.a>

            <motion.a
              href="mailto:kale.ru@northeastern.edu"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 px-8 py-4 border border-foreground/20 text-foreground rounded-full font-body text-sm font-medium transition-all duration-300 hover:border-foreground/50"
            >
              <Mail size={18} />
              kale.ru@northeastern.edu
              <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="pt-10 border-t border-border">
            <p className="font-body text-xs text-muted-foreground tracking-wider">
              © {new Date().getFullYear()} Ruta Prakash Kale · Crafted with intention
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
