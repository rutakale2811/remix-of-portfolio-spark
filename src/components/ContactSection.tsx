import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">Let's Connect</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to create something{" "}
            <span className="italic text-gradient">meaningful</span>?
          </h2>
          <div className="divider-line mx-auto mb-10" />
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Whether you're looking for a marketing strategist, a creative collaborator, or just 
            want to chat about ideas — I'd love to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.a
              href="https://linkedin.com/in/rutakale"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-body font-medium transition-shadow duration-300 hover:shadow-lg"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
              <ArrowUpRight size={16} />
            </motion.a>

            <motion.a
              href="mailto:kale.ru@northeastern.edu"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-foreground/15 text-foreground rounded-2xl font-body font-medium transition-all duration-300 hover:border-primary hover:text-primary"
            >
              <Mail size={20} />
              kale.ru@northeastern.edu
              <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="pt-10 border-t border-border">
            <p className="font-body text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ruta Prakash Kale. Crafted with intention.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
