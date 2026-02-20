import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Users, GraduationCap, Palette, Mic } from "lucide-react";
import northeasternImg from "@/assets/northeastern-img.jpg";

const activities = [
  {
    icon: <Users className="text-accent" size={28} />,
    title: "Social Media Coordinator",
    org: "Husky Communicators",
    description: "Leading digital growth and community engagement strategy. Developed content strategy, launched the Husky Talks podcast, and organized signature events — co-op panels, LinkedIn photoshoots, and Friendsgiving networking.",
  },
  {
    icon: <GraduationCap className="text-accent" size={28} />,
    title: "Teaching & Research Assistant",
    org: "Northeastern University",
    description: "Bridging theory and practice. As a TA, I mentor students and facilitate learning. As an RA, I dive deep into communications research — sharpening analytical skills while contributing to academic knowledge.",
  },
  {
    icon: <Palette className="text-accent" size={28} />,
    title: "Costume Designer & Tech Crew",
    org: "New Renaissance Theatre Company",
    description: "Bringing characters to life through costume design. Managing budget allocation, material sourcing, and wardrobe logistics — balancing artistic vision with financial constraints and production deadlines.",
  },
  {
    icon: <Mic className="text-accent" size={28} />,
    title: "Event Producer & Community Builder",
    org: "Campus Leadership",
    description: "Organized and hosted signature campus events blending digital marketing strategy with community building and experiential branding — from networking panels to creative showcases.",
  },
];

const NortheasternSection = () => {
  return (
    <section id="northeastern" className="relative section-padding overflow-hidden bg-card">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-16 items-center">
          <AnimatedSection>
            <div className="aspect-square overflow-hidden max-w-md">
              <img src={northeasternImg} alt="Northeastern campus" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-4 mb-4">
              <div className="divider-line" />
              <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-semibold">Life at Northeastern</p>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-6">
              Beyond the<br /><span className="italic font-normal text-accent">classroom</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-[1.9]">
              My time at Northeastern is defined by doing — not just learning. From leading communications
              to designing costumes to producing events, every role has shaped who I am as a marketer and creative strategist.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="relative p-8 bg-background border-t-2 border-t-accent border border-border hover-lift h-full"
              >
                <div className="mb-5">{activity.icon}</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{activity.title}</h3>
                <p className="font-body text-sm text-accent font-medium mb-4">{activity.org}</p>
                <p className="font-body text-sm text-muted-foreground leading-[1.9]">{activity.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NortheasternSection;
