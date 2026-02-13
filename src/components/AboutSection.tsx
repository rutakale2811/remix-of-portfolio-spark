import AnimatedSection from "./AnimatedSection";
import { Sparkles, BookOpen, TrendingUp } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const skills = ["Content Strategy", "Social Media Marketing", "SEO / SEM", "Brand Development", "Email Marketing", "Data Analytics", "Copywriting", "Campaign Management", "Market Research", "Public Relations", "Digital Advertising", "UX Research"];

const highlights = [
  { icon: <Sparkles className="text-accent" size={24} />, title: "Creative Strategist", desc: "Blending data-driven insights with creative storytelling to build campaigns that resonate." },
  { icon: <BookOpen className="text-accent" size={24} />, title: "Continuous Learner", desc: "Currently pursuing MS in Corporate & Organizational Communication at Northeastern University." },
  { icon: <TrendingUp className="text-accent" size={24} />, title: "Results-Oriented", desc: "I don't just create content — I measure impact and iterate for better outcomes." },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">About Me</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-6">
            Marketing with <span className="italic text-gradient">purpose</span>
          </h2>
          <div className="divider-line mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-20 mb-24 items-start">
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-8">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden md:hidden">
                <img src={profileImg} alt="Ruta Prakash Kale" className="w-full h-full object-cover" />
              </div>
              <p className="font-body text-base leading-[1.8] text-muted-foreground">
                I'm Ruta Prakash Kale, a marketing professional and graduate student at Northeastern University.
                My work sits at the intersection of strategy, storytelling, and human connection.
              </p>
              <p className="font-body text-base leading-[1.8] text-muted-foreground">
                I strive to contribute meaningfully, think intentionally, and create work that resonates.
                Whether it's crafting a social media campaign or designing a brand narrative, I approach
                every project with curiosity and conviction.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-5">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-4 items-start p-6 rounded-xl bg-card border border-border hover-lift cursor-default transition-all duration-300">
                  <div className="shrink-0 mt-0.5">{h.icon}</div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-1">{h.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Skills */}
        <AnimatedSection delay={0.1}>
          <h3 className="font-display text-2xl font-medium text-foreground mb-8">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span key={i} className="px-5 py-2 font-body text-sm border border-border rounded-full text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
