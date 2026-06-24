import AnimatedSection from "./AnimatedSection";
import { MapPin } from "lucide-react";

const experiences = [
  {
    role: "Marketing & Communications Assistant",
    company: "Community-Engaged Teaching & Research (CETR), Northeastern University",
    location: "Boston, MA",
    period: "Jan 2026 – Present",
    summary:
      "Increased digital engagement by 30% through integrated marketing campaigns, social media strategy, communications outreach, and event promotion. Managed content calendars, redesigned the institutional website, conducted usability testing, accessibility audits, and journey mapping, while coordinating communications for initiatives engaging 150+ attendees and 100+ community partners.",
  },
  {
    role: "Social Media Coordinator",
    company: "Husky Communicators, Northeastern University",
    location: "Boston, MA",
    period: "May 2025 – Jun 2026",
    summary:
      "Promoted from Social Media Team Member to Social Media Coordinator, leading digital strategy, content creation, and community engagement initiatives to strengthen organizational visibility. Launched the Husky Talks Podcast and executed networking events, co-op panels, LinkedIn photoshoots, and professional development initiatives to drive student engagement and community growth.",
  },
  {
    role: "Teaching & Research Assistant – Marketing Research",
    company: "Northeastern University",
    location: "Boston, MA",
    period: "Sep 2025 – Dec 2025",
    summary:
      "Supported the academic success of 130+ students by managing course operations, performance reporting, and large-scale datasets. Conducted data analysis, maintained academic records, and provided instructional and research support.",
  },
  {
    role: "Digital Marketing Associate Co-op",
    company: "TeamLogic IT",
    location: "Cincinnati, OH",
    period: "Apr 2025 – Jun 2025",
    summary:
      "Generated $70K+ in revenue within three months by executing B2B digital marketing initiatives, creating 50+ content assets, and developing automated email campaigns and nurture journeys. Conducted market research, audience segmentation, and content optimization to support lead generation.",
  },
  {
    role: "Marketing Intern",
    company: "Homework Studio",
    location: "Mumbai, India",
    period: "Mar 2023 – Aug 2023",
    summary:
      "Contributed to integrated marketing campaigns for Spotify India, Uber India, and Sony LIV, driving a 15% increase in lead conversions through content creation, campaign execution, community engagement, and cross-functional collaboration.",
  },
  {
    role: "Social Media Intern",
    company: "iProspect Dentsu",
    location: "Mumbai, India",
    period: "Apr 2022 – May 2022",
    summary:
      "Contributed to $2.45M+ in campaign revenue and achieved a 20% increase in engagement by developing social and paid media strategies, managing budget allocations, campaign optimization, A/B testing, and performance reporting for leading financial brands.",
  },
  {
    role: "Promotions & Marketing Head",
    company: "MONETA – PAN India Financial Fest, R.A. Podar College of Commerce & Economics",
    location: "Mumbai, India",
    period: "Jan 2022",
    summary:
      "Generated 300+ registrations and attracted participants from across India by leading digital marketing, social media promotions, creative campaign development, and nationwide outreach for a PAN India-level financial festival.",
  },
];

const rowOne = experiences.slice(0, 4);
const rowTwo = experiences.slice(4, 7);

const METRIC_SPLIT = /(\$[\d.,]+[KMB]?\+?|\d[\d,]*\+?%?|\d+%)/g;
const METRIC_TEST = /^(\$[\d.,]+[KMB]?\+?|\d[\d,]*\+?%?|\d+%)$/;

const HighlightMetrics = ({ text }: { text: string }) => {
  const parts = text.split(METRIC_SPLIT);

  return (
    <>
      {parts.map((part, i) =>
        METRIC_TEST.test(part) ? (
          <span key={i} className="font-semibold text-accent">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative section-padding overflow-hidden bg-card">
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="divider-line" />
            <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-semibold">Experience</p>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-4 leading-tight">
            My <span className="italic font-normal text-accent">experiences</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xl mb-14">
            A roadmap from Mumbai to Boston — marketing, research, and community impact at every stop.
          </p>
        </AnimatedSection>

        <div className="space-y-5">
          <RoadmapRow items={rowOne} startIndex={0} />
          <RoadmapRow items={rowTwo} startIndex={4} />
        </div>
      </div>
    </section>
  );
};

type Experience = (typeof experiences)[number];

const RoadmapRow = ({
  items,
  startIndex,
}: {
  items: Experience[];
  startIndex: number;
}) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
    {items.map((exp, i) => (
      <AnimatedSection key={exp.role + exp.period} delay={(startIndex + i) * 0.05} className="h-full min-h-0">
        <ExperienceCard exp={exp} />
      </AnimatedSection>
    ))}
  </div>
);

const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <article className="group flex h-full min-h-[26rem] flex-col border border-border bg-background transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-20px_hsl(var(--rose)/0.18)]">
    <div className="h-1 w-full shrink-0 bg-gradient-to-r from-accent via-[hsl(var(--rose-light))] to-accent/20" aria-hidden />

    <div className="flex flex-1 flex-col p-5 md:p-6">
      <div className="mb-3 min-h-7">
        <span className="inline-flex min-h-7 items-center rounded-sm bg-[hsl(var(--blush))] px-2.5 py-1 font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
          {exp.period}
        </span>
      </div>

      <h3 className="min-h-[3.5rem] font-display text-[0.9rem] font-bold leading-snug text-foreground md:text-base">
        {exp.role}
      </h3>

      <p className="mt-2 min-h-[3rem] font-body text-[11px] leading-snug text-foreground/75">
        {exp.company}
      </p>

      <p className="mt-2 flex min-h-4 items-center gap-1 font-body text-[10px] text-muted-foreground">
        <MapPin size={10} className="shrink-0 text-accent" aria-hidden />
        {exp.location}
      </p>

      <p className="mt-4 flex-1 font-body text-xs leading-relaxed text-muted-foreground">
        <HighlightMetrics text={exp.summary} />
      </p>
    </div>
  </article>
);

export default ExperienceSection;
