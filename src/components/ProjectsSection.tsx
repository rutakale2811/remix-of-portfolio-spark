import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp, Star } from "lucide-react";
import projectsImg from "@/assets/projects-img.jpg";
import tejaBhaiImg from "@/assets/teja-bhai-campaign.png";

const projects = [
  {
    title: "Metta Mindfulness Music",
    category: "Digital Branding — Capstone",
    description: "Led an end-to-end digital marketing strategy for a global mindfulness brand in collaboration with 6x Grammy-nominated artist Yuval Ron. Conducted platform audits for Bandcamp and SoundCloud, designed social content calendars aligned with audience segmentation.",
    outcome: "Increased Bandcamp sales by 10% · Featured on Northeastern's official platform",
    featured: true,
    image: null,
  },
  {
    title: "\"The Teja Bhai Campaign\" – Angel One",
    category: "Financial Marketing",
    description: "Developed social media strategies for Angel One at iProspect Dentsu, including the iconic TEJA BHAI campaign. Created creative storytelling aligned with retail investor psychology and leveraged short-form video for financial literacy awareness.",
    outcome: "+12,500 reach · +25,000 impressions · 20% engagement increase",
    featured: true,
    image: tejaBhaiImg,
  },
  {
    title: "Guest Experience Optimization",
    category: "Service Design",
    description: "Service innovation project at New England Zoo focused on improving guest check-in and entry experience. Applied SERVQUAL Gaps Model, redesigned processes to reduce friction, and delivered a complete service blueprint.",
    outcome: "End-to-end service blueprint delivered",
    featured: true,
    image: null,
  },
  {
    title: "We Grow Microgreens: SEO Strategy",
    category: "SEO & Brand Implementation",
    description: "Identified limited online reach and implemented targeted SEO and keyword optimization using MOZ and Semrush to benchmark, providing actionable insights for market positioning and boosting online visibility.",
    outcome: "Boosted online visibility & positioning",
    featured: false,
    image: null,
  },
  {
    title: "Marketing Research – Central Square Florist",
    category: "Marketing Research",
    description: "Designed Qualtrics surveys, conducted competitive analysis, analyzed consumer buying behavior and seasonal demand patterns to improve brand positioning and customer acquisition strategy.",
    outcome: "Actionable digital marketing insights delivered",
    featured: false,
    image: null,
  },
  {
    title: "UX Research – Prescott Women's Suits",
    category: "UX Research",
    description: "Led user research and prototype development. Defined user personas, mapped behavioral patterns, designed wireframes in Figma, and optimized the user journey for product discoverability.",
    outcome: "Improved conversion strategy & brand experience",
    featured: false,
    image: null,
  },
];

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-4">
              <div className="divider-line" />
              <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-semibold">Academic Projects</p>
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

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2 md:h-[calc(100vh-20rem)]">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveIndex(i)}
                className="group h-full min-h-0 p-6 md:p-7 bg-card border border-border hover:shadow-[0_25px_60px_-15px_hsl(var(--noir)/0.12)] transition-all duration-500 flex flex-col cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase font-semibold text-accent">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-4 font-body text-xs uppercase tracking-widest text-muted-foreground">
                  Click to view details
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setActiveIndex(null)}
            />
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-[90%] max-w-3xl h-[70vh] bg-background border border-border shadow-2xl p-6 md:p-10 overflow-y-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-body text-[11px] tracking-[0.3em] uppercase font-semibold text-accent">
                  {activeProject.category}
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {activeProject.title}
              </h3>
              <p className="font-body text-base text-muted-foreground leading-[1.9] mb-6">
                {activeProject.description}
              </p>
              {activeProject.image && (
                <div className="mb-6 overflow-hidden border border-border">
                  <img src={activeProject.image} alt={activeProject.title} className="w-full h-auto object-contain" />
                </div>
              )}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-accent" />
                  <span className="font-body text-base font-semibold text-foreground">{activeProject.outcome}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
