import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import textureBg from "@/assets/texture-bg.jpg";

const pillars = [
  { number: "01", title: "Clarity before communication", description: "Before crafting any message, I ensure the idea is clear. Clarity is the foundation of all great communication." },
  { number: "02", title: "Intention before execution", description: "Every action should be purposeful. I don't create for the sake of creating — I create with direction and meaning." },
  { number: "03", title: "Connection before conversion", description: "People buy from people they trust. Building genuine connections always comes before asking for anything in return." },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={textureBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Philosophy</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-6">
            How I <span className="italic text-gradient">approach</span> marketing
          </h2>
          <div className="divider-line mb-16" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="text-center md:text-left">
                <span className="font-display text-6xl font-light text-border mb-4 block">{pillar.number}</span>
                <h3 className="font-display text-xl font-medium text-foreground mb-3 italic">{pillar.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-[1.8]">{pillar.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="relative rounded-2xl bg-card border border-border p-10 md:p-16 overflow-hidden">
            <div className="max-w-3xl">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">What Sets Me Apart</p>
              <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8 leading-tight">
                I believe marketing is about delivering <span className="italic text-gradient">value</span>
              </h3>
              <p className="font-body text-base text-muted-foreground leading-[1.8] mb-8">
                And that philosophy guides how I approach life too. I strive to contribute meaningfully,
                think intentionally, and create work that resonates.
              </p>
              <div className="p-6 rounded-xl border border-border bg-background/50">
                <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
                  "Hiring me might feel like a gamble — but so is every decision that leads to <span className="text-accent">growth.</span>"
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-20 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 mr-8">
                  {["Strategy", "Storytelling", "Impact", "Creativity", "Analytics", "Growth", "Innovation", "Connection"].map((word, j) => (
                    <span key={j} className="font-display text-4xl md:text-6xl font-light text-border whitespace-nowrap">
                      {word}<span className="text-accent/30 mx-4">·</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PhilosophySection;
