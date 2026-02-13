import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import experienceImg from "@/assets/experience-img.jpg";

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
