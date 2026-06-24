import AnimatedSection from "./AnimatedSection";
import StatsSection from "./StatsSection";
import aboutImg from "@/assets/about-img.jpg";

const skills = [
  "Content Strategy",
  "Social Media Marketing",
  "SEO / SEM",
  "Brand Development",
  "Email Marketing",
  "Data Analytics",
  "Copywriting",
  "Campaign Management",
  "Market Research",
  "Public Relations",
  "Digital Advertising",
  "UX Research",
];

const tools = [
  "WordPress",
  "Figma",
  "Canva",
  "Adobe Creative Suite",
  "Asana",
  "Microsoft Office",
  "Google Workspace",
  "Meta Business Suite",
  "Instagram",
  "LinkedIn",
  "Facebook",
  "CapCut",
  "Excel (Pivot Tables, VLOOKUP)",
  "SPSS",
  "Top Hat",
  "Qualtrics",
  "Marketo",
  "Google Analytics",
  "Google Trends",
  "Midjourney",
  "Claude",
  "Sora",
  "Salesforce",
  "Fanpage Karma",
  "Meta Ads Manager",
  "Video Editing Tools",
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

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <AnimatedSection delay={0.1}>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={aboutImg} alt="Editorial flat lay" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <p className="font-body text-base leading-[2] text-muted-foreground">
                I'm Ruta Prakash Kale — a marketing professional, storyteller, and graduate student at Northeastern University passionate about creating meaningful connections between brands and people. I believe great marketing goes beyond promotion; it's about understanding audiences, solving problems, and delivering real value.
              </p>
              <p className="font-body text-base leading-[2] text-muted-foreground">
                By combining strategy, creativity, psychology, and data-driven insights, I craft compelling narratives and experiences that resonate with audiences and drive impact. Whether developing campaigns, shaping brand stories, or building communities, I strive to create work that is thoughtful, authentic, and purpose-driven.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <StatsSection />

        <h3 className="font-display text-3xl font-bold text-foreground mb-8">My Skills</h3>

        <AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-2.5 font-body text-sm font-medium border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-default uppercase tracking-wider text-xs"
              >
                {skill}
              </span>
            ))}
          </div>

          <h4 className="font-display text-xl font-bold text-foreground mt-12 mb-6">Tools & Platforms</h4>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-5 py-2 font-body font-medium border border-border bg-card text-foreground hover:border-accent hover:text-accent transition-all duration-300 cursor-default tracking-wide text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
