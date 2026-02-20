import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Users, GraduationCap, Palette, Mic, Award, Globe } from "lucide-react";
import northeasternImg from "@/assets/northeastern-img.jpg";

const activities = [
  {
    icon: <Users className="text-accent" size={28} />,
    title: "Social Media Coordinator",
    org: "Husky Communicators",
    description: "Leading digital growth and community engagement. Launched Husky Talks podcast, organized co-op panels, LinkedIn photoshoots, and Friendsgiving networking events.",
  },
  {
    icon: <GraduationCap className="text-accent" size={28} />,
    title: "Teaching & Research Assistant",
    org: "Northeastern University",
    description: "TA for Market Research and Entrepreneurship courses. As an RA, contributing to communications research — bridging theory and practice.",
  },
  {
    icon: <Palette className="text-accent" size={28} />,
    title: "Lead Costume Designer & Tech Crew",
    org: "New Renaissance Theatre Company",
    description: "Designing costumes aligned with character arcs and production aesthetics. Managing budget allocation, material sourcing, and wardrobe logistics for live performances.",
  },
  {
    icon: <Mic className="text-accent" size={28} />,
    title: "Professionally Trained Bharatnatyam Dancer",
    org: "Indian Classical Dance",
    description: "Trained in Bharatnatyam, one of the oldest classical dance forms of India — cultivating discipline, storytelling through movement, and artistic expression.",
  },
  {
    icon: <Award className="text-accent" size={28} />,
    title: "Marketing & Promotions Head",
    org: "MONETA — PAN India Financial Fest",
    description: "Led marketing and promotions for a national-level financial fest during undergrad at Mumbai University, driving event awareness and attendee engagement.",
  },
  {
    icon: <Globe className="text-accent" size={28} />,
    title: "Certified in A2 French",
    org: "Alliance Française de Bombay",
    description: "Certified in A2 French and nominated for the French Immersion Program — expanding cultural fluency and global communication abilities.",
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
              <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-semibold">Beyond the Resume</p>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-6">
              Leadership &<br /><span className="italic font-normal text-accent">extracurriculars</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-[1.9]">
              From classical dance to costume design to leading campus organizations — every role has shaped
              who I am as a marketer, a creative strategist, and a person.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
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
