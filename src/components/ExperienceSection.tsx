import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import experienceImg from "@/assets/experience-img.jpg";
import tejaBhaiModalImg from "@/assets/teja-bhai-modal.png";
import tejaBhai2Img from "@/assets/teja-bhai-2.png";
import tejaBhai3Img from "@/assets/teja-bhai-3.png";

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
  const [notableCampaignOpen, setNotableCampaignOpen] = useState(false);

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
                    {exp.company === "iProspect Dentsu" && (
                      <button
                        type="button"
                        onClick={() => setNotableCampaignOpen(true)}
                        className="mt-4 px-6 py-2.5 font-body text-xs font-semibold tracking-widest uppercase border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      >
                        My Notable Campaign
                      </button>
                    )}
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {notableCampaignOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setNotableCampaignOpen(false)}
            />
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-[90%] max-w-3xl max-h-[70vh] bg-background border border-border shadow-2xl p-6 md:p-10 overflow-y-auto"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">My most Notable Campaign</h3>
              <h4 className="font-display text-xl font-bold text-accent mb-1">Teja Bhai Campaign</h4>
              <p className="font-body text-sm font-semibold text-foreground mb-4">Brand — Angel One</p>
              <p className="font-body text-sm text-muted-foreground leading-[1.9] mb-6">
                Angel One is a prestigious financial firm and a part of the Bombay Stock Exchange, National Stock Exchange of India, National Commodity & Derivatives Exchange Limited and Multi Commodity Exchange of India Limited.
              </p>
              {/* Campaign visuals gallery */}
              <div className="space-y-5 mb-6">
                <div className="overflow-hidden rounded-lg border border-border shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <img src={tejaBhaiModalImg} alt="From Concept to Conversion: The Teja Bhai Magic" className="w-full h-auto object-contain" />
                </div>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-lg border border-border shadow-[0_8px_30px_rgb(0,0,0,0.08)] aspect-[4/3]">
                    <img src={tejaBhai2Img} alt="Authorized shares - Financial education content" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative overflow-hidden rounded-lg border border-border shadow-[0_8px_30px_rgb(0,0,0,0.08)] aspect-[4/3]">
                    <img src={tejaBhai3Img} alt="Teja Bhai Campaign hero visual" className="w-full h-full object-cover" />
                  </div>
                  {/* Transparent stats card overlay between the 2 photos */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-auto sm:min-w-[200px] px-6 py-4 rounded-lg bg-white/15 backdrop-blur-[2px] border border-white/20 shadow-lg">
                    <ul className="space-y-2 font-body text-sm font-semibold text-foreground text-center">
                      <li>+12,500 Reach per post</li>
                      <li>+25,000 Impressions per post</li>
                      <li>4k+ Views per reel</li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setNotableCampaignOpen(false)}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
