import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import experienceImg from "@/assets/experience-img.jpg";

const experiences = [
  {
    role: "Marketing & Comms Assistant",
    company: "Community Engaged Teaching & Research, Northeastern University",
    location: "Boston, USA",
    period: "Jan 2026 – Present",
    description: "Manage and execute CETR's marketing strategies, driving social media presence using Canva and Adobe. Lead WordPress website design and updates. Plan, promote, and coordinate high-impact academic and community events including workshops and orientations.",
    tags: ["Social Media", "WordPress", "Event Marketing", "Adobe Suite"],
  },
  {
    role: "Digital Marketing Associate Co-op",
    company: "TeamLogicIT",
    location: "Ohio, USA",
    period: "Apr 2025 – June 2025",
    description: "Designed and scheduled daily social posts and monthly email newsletters using Adobe Suite, Canva, Sora, and Midjourney. Conducted B2B market research using AI-driven sentiment analysis tools and Google Trends. Brainstormed targeted outreach strategies for B2B decision makers.",
    tags: ["B2B Marketing", "AI Tools", "Email Marketing", "Content Design"],
  },
  {
    role: "Marketing Intern",
    company: "Homework Studios",
    location: "Mumbai, India",
    period: "Mar 2023 – Aug 2023",
    description: "Executed multi-channel marketing campaigns for Uber India, Spotify India, and Sony LIV. Collaborated on the Spotify × IFP \"Mellow Hours\" campaign, managing event logistics and live coverage. Increased page lead conversions by 15%.",
    tags: ["Campaign Management", "Brand Strategy", "Spotify", "Uber India"],
  },
  {
    role: "Social Media Intern",
    company: "iProspect Dentsu",
    location: "Mumbai, India",
    period: "Apr 2022 – May 2022",
    description: "Developed social media strategies for SBI, ICICI Direct, and Angel One — including the iconic TEJA BHAI campaign driving 20% engagement increase. Executed bid management for paid search campaigns and delivered bi-weekly KPI reports to the marketing director.",
    tags: ["Paid Media", "Financial Marketing", "Salesforce", "Campaign Analytics"],
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
                    <p className="font-body text-sm text-accent mb-1">{exp.company}</p>
                    <p className="font-body text-xs text-muted-foreground mb-4">{exp.location}</p>
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
