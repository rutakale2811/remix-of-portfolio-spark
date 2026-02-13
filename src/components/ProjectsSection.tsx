import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Star } from "lucide-react";
import projectsImg from "@/assets/projects-img.jpg";

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
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-4">
              <div className="divider-line" />
              <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-semibold">Selected Work</p>
            </div>
            <h2 className="font-display text-6xl md:text-7xl font-black text-foreground leading-[0.95]">
              Bold moves,<br /><span className="italic font-normal text-accent">big results</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="aspect-[16/9] overflow-hidden">
              <img src={projectsImg} alt="NYC skyline" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </AnimatedSection>
        </div>

        {/* Featured projects - editorial cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="group h-full p-10 bg-card border-l-4 border-l-accent border border-border hover:shadow-[0_25px_60px_-15px_hsl(var(--noir)/0.12)] transition-all duration-500 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-body text-[11px] tracking-[0.3em] uppercase font-semibold text-accent">
                    {project.category}
                  </span>
                  <Star size={12} className="fill-accent text-accent" />
                  <span className="font-body text-[10px] tracking-wider uppercase text-accent">Featured</span>
                </div>

                <h3 className="font-display text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-[1.9] mb-8 flex-1">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-accent" />
                    <span className="font-body text-sm font-bold text-foreground">{project.outcome}</span>
                  </div>
                  <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
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
                className="group h-full p-8 bg-card border border-border hover:border-accent/40 transition-all duration-500 flex flex-col"
              >
                <span className="font-body text-[10px] tracking-[0.3em] uppercase font-semibold text-accent mb-4 block">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-[1.8] mb-5 flex-1">
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
