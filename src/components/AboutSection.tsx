import AnimatedSection from "./AnimatedSection";
import { Sparkles, BookOpen, TrendingUp } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";
import profileImg from "@/assets/profile-placeholder.jpg";

const skills = ["Content Strategy", "Social Media Marketing", "SEO / SEM", "Brand Development", "Email Marketing", "Data Analytics", "Copywriting", "Campaign Management", "Market Research", "Public Relations", "Digital Advertising", "UX Research"];

const highlights = [
  { icon: <Sparkles className="text-accent" size={22} />, title: "Creative Strategist", desc: "Blending data-driven insights with creative storytelling to build campaigns that resonate." },
  { icon: <BookOpen className="text-accent" size={22} />, title: "Continuous Learner", desc: "Currently pursuing MS in Corporate & Organizational Communication at Northeastern University." },
  { icon: <TrendingUp className="text-accent" size={22} />, title: "Results-Oriented", desc: "I don't just create content — I measure impact and iterate for better outcomes." },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="divider-line" />
            <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-semibold">About Me</p>
          </div>
          <h2 className="font-display text-6xl md:text-7xl font-black text-foreground mb-16">
            The girl behind<br />the <span className="italic font-normal text-accent">brand</span>
          </h2>
        </AnimatedSection>

        {/* Editorial two-column with images */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={aboutImg} alt="Editorial flat lay" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="font-body text-base leading-[2] text-muted-foreground">
                I'm Ruta Prakash Kale — a marketing professional, storyteller, and graduate student at Northeastern University who believes that the best marketing feels like a conversation, not a campaign.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <p className="font-body text-base leading-[2] text-muted-foreground">
                My work sits at the intersection of strategy, storytelling, and human connection.
                I strive to contribute meaningfully, think intentionally, and create work that resonates —
                whether it's a social media campaign, brand narrative, or a bold new idea.
              </p>
              <div className="aspect-[3/4] overflow-hidden max-w-sm">
                <img src={profileImg} alt="Ruta Prakash Kale" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {highlights.map((h, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-8 border-t-2 border-accent hover-lift cursor-default bg-card">
                <div className="mb-4">{h.icon}</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{h.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Skills */}
        <AnimatedSection>
          <h3 className="font-display text-3xl font-bold text-foreground mb-8">My Toolkit</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span key={i} className="px-6 py-2.5 font-body text-sm font-medium border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-default uppercase tracking-wider text-xs">
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
