import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Brand Repositioning Campaign",
    category: "Brand Strategy",
    description:
      "Led a comprehensive brand repositioning effort that included market research, competitor analysis, messaging framework development, and a multi-channel launch strategy.",
    outcome: "Increased brand awareness by 40%",
  },
  {
    title: "Social Media Growth Strategy",
    category: "Social Media",
    description:
      "Designed and executed a 90-day social media growth plan for an emerging brand, leveraging content pillars, audience segmentation, and engagement-driven tactics.",
    outcome: "Grew following by 200% in 3 months",
  },
  {
    title: "Email Marketing Automation",
    category: "Email Marketing",
    description:
      "Built an automated email nurture sequence that personalized messaging based on user behavior, improving conversion rates and customer retention.",
    outcome: "35% increase in open rates",
  },
  {
    title: "Content Marketing Playbook",
    category: "Content Strategy",
    description:
      "Created a comprehensive content marketing playbook for a startup, including editorial calendar, SEO strategy, and content distribution framework.",
    outcome: "50% increase in organic traffic",
  },
  {
    title: "Event Marketing Campaign",
    category: "Event Marketing",
    description:
      "Planned and executed a multi-platform event marketing campaign including social media teasers, influencer partnerships, and post-event content repurposing.",
    outcome: "Sold out event with 500+ attendees",
  },
  {
    title: "Digital Ad Campaign Optimization",
    category: "Paid Media",
    description:
      "Optimized paid advertising campaigns across Google Ads and Meta, implementing A/B testing frameworks and audience refinement strategies.",
    outcome: "Reduced CPA by 45%",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work that <span className="italic text-gradient">speaks</span>
          </h2>
          <div className="divider-line mb-16" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group h-full p-7 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 flex flex-col"
              >
                <span className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-3">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <ExternalLink size={14} className="text-primary" />
                  <span className="font-body text-sm font-medium text-primary">{project.outcome}</span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
