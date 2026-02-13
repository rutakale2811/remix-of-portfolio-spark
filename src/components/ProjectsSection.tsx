import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Star } from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";

const projects = [
  {
    title: "Brand Repositioning Campaign",
    category: "Brand Strategy",
    description: "Led a comprehensive brand repositioning effort that included market research, competitor analysis, messaging framework development, and a multi-channel launch strategy.",
    outcome: "Increased brand awareness by 40%",
    featured: true,
  },
  {
    title: "Social Media Growth Strategy",
    category: "Social Media",
    description: "Designed and executed a 90-day social media growth plan for an emerging brand, leveraging content pillars, audience segmentation, and engagement-driven tactics.",
    outcome: "Grew following by 200% in 3 months",
    featured: true,
  },
  {
    title: "Email Marketing Automation",
    category: "Email Marketing",
    description: "Built an automated email nurture sequence that personalized messaging based on user behavior, improving conversion rates and customer retention.",
    outcome: "35% increase in open rates",
    featured: false,
  },
  {
    title: "Content Marketing Playbook",
    category: "Content Strategy",
    description: "Created a comprehensive content marketing playbook for a startup, including editorial calendar, SEO strategy, and content distribution framework.",
    outcome: "50% increase in organic traffic",
    featured: true,
  },
  {
    title: "Event Marketing Campaign",
    category: "Event Marketing",
    description: "Planned and executed a multi-platform event marketing campaign including social media teasers, influencer partnerships, and post-event content repurposing.",
    outcome: "Sold out event with 500+ attendees",
    featured: false,
  },
  {
    title: "Digital Ad Campaign Optimization",
    category: "Paid Media",
    description: "Optimized paid advertising campaigns across Google Ads and Meta, implementing A/B testing frameworks and audience refinement strategies.",
    outcome: "Reduced CPA by 45%",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0">
        <img src={sectionBg} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Selected Work</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-6">
            Work that <span className="italic text-gradient">speaks</span>
          </h2>
          <div className="divider-line mb-16" />
        </AnimatedSection>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="group h-full p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-[0_20px_60px_-15px_hsl(var(--espresso)/0.1)] transition-all duration-500 flex flex-col relative overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-3 mb-5">
                  <span className="font-body text-[11px] tracking-[0.2em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 font-body text-[10px] tracking-wider uppercase text-accent/70">
                    <Star size={10} className="fill-accent text-accent" />
                    Featured
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-[1.8] mb-8 flex-1">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-accent" />
                    <span className="font-body text-sm font-medium text-foreground">{project.outcome}</span>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="group h-full p-7 rounded-2xl bg-card/60 border border-border hover:border-accent/30 transition-all duration-500 flex flex-col"
              >
                <span className="font-body text-[11px] tracking-[0.2em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full self-start mb-4">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-[1.7] mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <TrendingUp size={14} className="text-accent" />
                  <span className="font-body text-sm font-medium text-foreground">{project.outcome}</span>
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
