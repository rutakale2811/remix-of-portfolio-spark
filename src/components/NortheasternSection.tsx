import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Users, GraduationCap, Palette } from "lucide-react";

const activities = [
  {
    icon: <Users className="text-accent" size={28} />,
    title: "Social Media Coordinator",
    org: "Husky Communicators",
    description: "Leading digital strategy for Northeastern's student-run communications organization. I manage content creation, oversee editorial calendars, and drive engagement across platforms — turning student stories into compelling narratives.",
  },
  {
    icon: <GraduationCap className="text-accent" size={28} />,
    title: "Teaching & Research Assistant",
    org: "Northeastern University",
    description: "Bridging the gap between theory and practice. As a TA, I mentor students and facilitate learning. As an RA, I dive deep into communications research — sharpening my analytical skills while contributing to academic knowledge.",
  },
  {
    icon: <Palette className="text-accent" size={28} />,
    title: "Costume Designer",
    org: "New Renaissance Theatre Company",
    description: "Bringing characters to life through costume design. This creative outlet feeds my understanding of visual storytelling, brand identity, and the power of first impressions — skills that directly translate to marketing.",
  },
];

const NortheasternSection = () => {
  return (
    <section id="northeastern" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Life at Northeastern</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-6">
            Beyond the <span className="italic text-gradient">classroom</span>
          </h2>
          <div className="divider-line mb-6" />
          <p className="font-body text-base text-muted-foreground max-w-3xl leading-[1.8] mb-16">
            My time at Northeastern is defined by doing — not just learning. From leading communications
            to designing costumes, every role has shaped who I am as a marketer and a person.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="relative p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 h-full"
              >
                <div className="mb-5">{activity.icon}</div>
                <h3 className="font-display text-xl font-medium text-foreground mb-1">{activity.title}</h3>
                <p className="font-body text-sm text-accent mb-4">{activity.org}</p>
                <p className="font-body text-sm text-muted-foreground leading-[1.8]">{activity.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NortheasternSection;
