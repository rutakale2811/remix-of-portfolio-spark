import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import philosophyImg from "@/assets/philosophy-img.jpg";

const pillars = [
  { number: "01", title: "Clarity before communication", description: "Before crafting any message, I ensure the idea is clear. Clarity is the foundation of all great communication." },
  { number: "02", title: "Intention before execution", description: "Every action should be purposeful. I don't create for the sake of creating — I create with direction and meaning." },
  { number: "03", title: "Connection before conversion", description: "People buy from people they trust. Building genuine connections always comes before asking for anything in return." },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_0.5fr] gap-16 mb-20 items-start">
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-4">
                <div className="divider-line" />
                <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-semibold">Philosophy</p>
              </div>
              <h2 className="font-display text-6xl md:text-7xl font-black text-foreground mb-16">
                My marketing<br /><span className="italic font-normal text-accent">manifesto</span>
              </h2>
            </AnimatedSection>

            <div className="grid gap-14">
              {pillars.map((pillar, i) => (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.4 }} className="flex gap-8 items-start">
                    <span className="font-display text-7xl font-black text-border shrink-0 leading-none">{pillar.number}</span>
                    <div className="pt-2">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2 italic">{pillar.title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-[1.9]">{pillar.description}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="sticky top-24">
              <div className="aspect-[3/4] overflow-hidden mb-8">
                <img src={philosophyImg} alt="NYC coffee shop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Quote block */}
        <AnimatedSection>
          <div className="relative bg-foreground text-background p-12 md:p-20">
            <div className="max-w-3xl">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-accent mb-6 font-semibold">What Sets Me Apart</p>
              <h3 className="font-display text-4xl md:text-5xl font-black leading-tight mb-8">
                I believe marketing is about delivering <span className="italic font-normal text-accent">value</span>
              </h3>
              <p className="font-body text-base text-background/60 leading-[1.9] mb-10">
                And that philosophy guides how I approach life too. I strive to contribute meaningfully,
                think intentionally, and create work that resonates.
              </p>
              <blockquote className="border-l-4 border-accent pl-8">
                <p className="font-display text-2xl md:text-3xl italic leading-snug">
                  "Hiring me might feel like a gamble — but so is every decision that leads to <span className="text-accent">growth.</span>"
                </p>
              </blockquote>
            </div>
          </div>
        </AnimatedSection>

        {/* Marquee */}
        <AnimatedSection delay={0.2}>
          <div className="mt-20 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-6 mr-6">
                  {["Strategy", "Storytelling", "Impact", "Creativity", "Analytics", "Growth", "Innovation", "Connection"].map((word, j) => (
                    <span key={j} className="font-display text-5xl md:text-7xl font-black text-border/30 whitespace-nowrap uppercase">
                      {word}<span className="text-accent/40 mx-4">✦</span>
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
