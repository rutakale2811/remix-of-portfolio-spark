import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Social Media Coordinator",
    company: "Husky Communicators, Northeastern University",
    period: "2024 – Present",
    description: "Lead social media strategy for a student-run communications organization. Create engaging content, manage editorial calendars, and analyze performance metrics to grow audience engagement.",
    tags: ["Social Media", "Content Creation", "Analytics"],
  },
  {
    role: "Teaching Assistant",
    company: "Northeastern University",
    period: "2024 – Present",
    description: "Support faculty in delivering course material, grading assignments, and mentoring students. Facilitate classroom discussions and provide one-on-one feedback.",
    tags: ["Education", "Mentorship", "Communication"],
  },
  {
    role: "Research Assistant",
    company: "Northeastern University",
    period: "2024 – Present",
    description: "Conduct qualitative and quantitative research in communications and marketing. Assist in data collection, literature reviews, and analysis for academic publications.",
    tags: ["Research", "Data Analysis", "Academic Writing"],
  },
  {
    role: "Marketing Intern",
    company: "Previous Experience",
    period: "2022 – 2023",
    description: "Developed and executed digital marketing campaigns, managed social media accounts, and supported brand development initiatives across multiple channels.",
    tags: ["Digital Marketing", "Campaign Management", "Brand Strategy"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-card/30" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Experience</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-6">
            Where I've <span className="italic text-gradient">grown</span>
          </h2>
          <div className="divider-line mb-16" />
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-border to-transparent" />

          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  className="relative pl-8 md:pl-20"
                >
                  <div className="absolute left-0 md:left-8 top-2 w-2.5 h-2.5 rounded-full bg-accent -translate-x-[4px]" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-foreground">{exp.role}</h3>
                      <p className="font-body text-sm text-accent">{exp.company}</p>
                    </div>
                    <span className="font-body text-xs tracking-wider text-muted-foreground whitespace-nowrap uppercase">{exp.period}</span>
                  </div>

                  <p className="font-body text-sm text-muted-foreground leading-[1.8] mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 text-xs font-body bg-secondary text-secondary-foreground rounded-full">
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
    </section>
  );
};

export default ExperienceSection;
