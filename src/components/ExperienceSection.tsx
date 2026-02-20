import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import experienceImg from "@/assets/experience-img.jpg";

const experiences = [
  {
    role: "Guest Experience Optimization",
    company: "New England Zoo",
    period: "Jan 2026 – April 2026",
    description: "Leading a service innovation project focused on improving the end-to-end guest check-in and entry experience. Applying the Gaps Model of Service Quality (SERVQUAL) to identify breakdowns, redesigning check-in processes, and mapping customer journeys to improve service blueprinting.",
    tags: ["Service Design", "Customer Journey Mapping", "SERVQUAL", "CX Strategy"],
  },
  {
    role: "Marketing Research Consultant",
    company: "Central Square Florist",
    period: "2025",
    description: "Partnering as a marketing researcher to improve brand positioning and customer acquisition strategy. Designing Qualtrics surveys, conducting competitive analysis, analyzing consumer buying behavior, and delivering insights for digital marketing optimization.",
    tags: ["Marketing Research", "Qualtrics", "Consumer Insights", "Competitive Analysis"],
  },
  {
    role: "UX Researcher",
    company: "Prescott Women's Suits",
    period: "Jan 2024 – Mar 2024",
    description: "Led user research and prototype development to enhance customer purchase experience. Defined user personas, conducted qualitative research, designed wireframes and prototypes in Figma, and optimized the user journey for product discoverability.",
    tags: ["UX Research", "Figma", "User Personas", "Wireframing"],
  },
  {
    role: "Costume Designer & Technical Crew",
    company: "New Renaissance Theatre Company",
    period: "2024",
    description: "Designed and styled costumes aligned with character arcs and production aesthetics. Managed budget allocation and material sourcing, coordinated wardrobe logistics, and supported backstage technical operations during live performances.",
    tags: ["Creative Direction", "Budget Management", "Production Design", "Live Events"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative section-padding overflow-hidden bg-card">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[0.4fr_1fr] gap-16">
          {/* Left: image + header */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-4">
                <div className="divider-line" />
                <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-semibold">Experience</p>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-10">
                The <span className="italic font-normal text-accent">journey</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="aspect-[3/4] overflow-hidden sticky top-24">
                <img src={experienceImg} alt="Working" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          </div>

          {/* Right: timeline */}
          <div>
            <div className="space-y-16 pt-8">
              {experiences.map((exp, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="relative border-b border-border pb-12"
                  >
                    <span className="font-body text-xs tracking-[0.3em] uppercase text-accent font-semibold">{exp.period}</span>
                    <h3 className="font-display text-3xl font-bold text-foreground mt-2 mb-1">{exp.role}</h3>
                    <p className="font-body text-sm text-accent mb-4">{exp.company}</p>
                    <p className="font-body text-sm text-muted-foreground leading-[1.9] mb-5">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 text-[11px] font-body font-medium uppercase tracking-wider bg-background text-foreground border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
