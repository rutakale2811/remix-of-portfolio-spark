import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp } from "lucide-react";
import projectsImg from "@/assets/projects-img.jpg";

const projects = [
  {
    title: "Marketing Strategy & Digital Branding – Metta Mindfulness Music",
    category: "Digital Branding — Capstone",
    duration: "Sept 2025 – Dec 2025",
    projectFocus: "Developed end-to-end marketing strategies and digital branding for a professional music label.",
    strategy: [
      "Collaborated with Yuval Ron, a 6x Grammy-nominated artist, to strengthen online presence and optimize digital sales channels. Conducted platform audits, designed content strategies, and implemented digital campaigns to drive audience engagement, discoverability, and revenue growth.",
    ],
    keyActions: [
      "Collaborated with the artist to define brand identity, audience, and marketing goals.",
      "Audited and optimized Bandcamp and SoundCloud pages for discoverability, user experience, and content alignment.",
      "Developed a social content plan to engage audiences and increase platform traffic.",
      "Implemented marketing strategies resulting in a 10% increase in Bandcamp sales.",
      "Achieved recognition through a feature on the college's official platform.",
    ],
    competencies: ["Digital Marketing Strategy", "Content Planning", "Social Media Optimization", "Branding & Positioning", "Platform Audit & Optimization", "Revenue Growth", "Collaboration with Industry Professionals", "Marketing Analytics"],
    featured: true,
    image: null,
  },
  {
    title: "Product Launch Strategy – Retrofit Strap Liner Kit",
    category: "Product Marketing",
    duration: "Jan 2026 – Present",
    projectFocus: "End-to-end development and launch strategy for a newly created consumer product.",
    strategy: [
      "Develop a market-entry strategy using the 3Cs framework (Customer, Company, Competition) to identify target segments, differentiation opportunities, and competitive positioning. Gather insights from industry experts in procurement and manufacturing to validate operational feasibility and inform strategic decisions.",
      "Based on these insights, design a scalable go-to-market plan using the 4Ps (Product, Price, Place, Promotion) to ensure alignment between value proposition, pricing, distribution channels, and promotional strategies. Apply lean budget principles to maximize early traction and validate product-market fit.",
    ],
    keyActions: [
      "Secure product proposal approval and validate concept viability.",
      "Conduct interviews with industry experts to understand procurement and manufacturing processes.",
      "Analyze insights to refine target market definition and positioning strategy.",
      "Define preliminary marketing strategies for launch, including pricing, distribution, and promotion.",
      "Prepare for execution phase of go-to-market plan.",
    ],
    status: "Currently in research and strategy formulation phase.",
    competencies: ["Product Marketing", "Go-to-Market Strategy", "3Cs & 4Ps Application", "Industry Research & Expert Interviews", "Strategic Planning", "Competitive Positioning", "Budget Planning", "Brand Development", "Entrepreneurial Leadership"],
    featured: true,
    image: null,
  },
  {
    title: "Guest Experience Strategy – Franklin Park Zoo (New England Zoo)",
    category: "Service Design",
    duration: "Jan 2026 – Present",
    projectFocus: "Redesigning the guest journey by using post-core experience insights to strategically inform and enhance pre-core services.",
    strategy: [
      "Apply a reverse customer journey approach by starting with post-core touchpoints (exit feedback, follow-up communication, retail engagement, membership conversion, repeat visit intent) to identify what guests value most after their visit.",
      "Use these insights to redesign the pre-core experience — including digital communication, website information flow, promotional messaging, and expectation setting — so that anticipation aligns with the most meaningful aspects of the visit.",
      "The strategy centers on: Identifying satisfaction drivers and retention triggers; Understanding expectation gaps revealed post-visit; Redesigning pre-visit messaging to prime guests for high-value experiences; Creating continuity between anticipation, experience, and retention. This ensures the zoo is not just delivering a visit, but building long-term engagement.",
    ],
    keyActions: [
      "Map post-core engagement and feedback mechanisms.",
      "Analyze themes in guest satisfaction and unmet expectations.",
      "Identify high-impact experiences that drive repeat visitation.",
      "Propose strategic adjustments to pre-core communication and promotion.",
      "Recommend retention-focused engagement initiatives.",
    ],
    competencies: ["Customer Journey Strategy", "Experience Design", "Retention Marketing", "Behavioral Analysis", "Service Design", "Strategic Alignment", "Insight-Driven Decision Making"],
    featured: true,
    image: null,
  },
  {
    title: "We Grow Microgreens – SEO Strategy and Brand Implementation",
    category: "SEO & Brand Implementation",
    duration: "Sept 2025 – Dec 2025",
    projectFocus: "Increase online visibility and strengthen brand positioning for a microgreens business through targeted SEO strategies.",
    strategy: [
      "Analyze online reach and identify gaps in digital discoverability. Implement SEO optimization and keyword strategy to improve search engine ranking, enhance online presence, and support long-term brand growth. Use benchmarking tools to align digital strategy with competitors and industry standards.",
    ],
    keyActions: [
      "Conducted competitive benchmarking using MOZ and SEMrush to assess market positioning and online reach.",
      "Implemented targeted SEO strategies and keyword optimization to improve search visibility.",
      "Provided actionable insights to refine content strategy and enhance brand discoverability.",
      "Monitored results and adjusted strategy to maximize online engagement and traffic.",
    ],
    competencies: ["Digital Marketing", "SEO Strategy", "Keyword Research", "Competitive Benchmarking", "Brand Positioning", "Content Optimization", "Market Analysis", "Analytics-Driven Decision Making"],
    featured: false,
    image: null,
  },
  {
    title: "Marketing Research – Central Square Florist",
    category: "Marketing Research",
    duration: "Jan 2026 – Present",
    projectFocus: "Optimizing digital discovery and improving customer shortlisting.",
    strategy: [
      "Translate the Marketing Decision Problem (MDP) — \"How should Central Square Florist allocate marketing efforts across digital discovery channels to reach more potential customers and improve shortlisting?\" — into actionable Research Proposals (RPs). Use a mixed-method approach combining quantitative and qualitative research to identify which digital discovery platforms (SEO, Google Ads, social media, local directories) most influence customer awareness, consideration, and shortlisting.",
      "Leverage secondary research (industry benchmarks, competitor analysis, digital trends) and primary research (surveys via Qualtrics, customer interviews) to generate insights. Apply funnel analysis and benchmarking to inform strategic recommendations for channel allocation and marketing focus.",
    ],
    keyActions: [
      "Develop multiple Research Proposals (RPs) aligned with the MDP to test hypotheses about customer discovery behavior.",
      "Design and launch Qualtrics surveys to gather primary quantitative and qualitative data.",
      "Conduct secondary research on competitors, digital channel performance, and customer trends.",
      "Analyze data to identify high-impact channels and patterns in customer shortlisting behavior.",
      "Formulate actionable, data-driven recommendations for marketing channel allocation and optimization.",
    ],
    status: "Currently ongoing.",
    competencies: ["Marketing Research", "Quantitative & Qualitative Analysis", "Survey Design & Administration", "Data Analysis", "Competitive Benchmarking", "Digital Marketing Strategy", "Funnel Optimization", "Consumer Decision-Making"],
    featured: false,
    image: null,
  },
  {
    title: "User Research and Brand Experience Optimization – Prescott Women's Suits Prototype",
    category: "UX Research",
    duration: "Jan 2024 – Mar 2024",
    projectFocus: "Enhance the customer buying experience and optimize brand positioning for a women's fashion brand.",
    strategy: [
      "Develop data-driven insights by analyzing user behavior and defining user personas to guide brand positioning and product strategy. Use UX principles to ensure the customer journey aligns with user expectations, improves engagement, and supports purchase decisions.",
    ],
    keyActions: [
      "Defined user personas and analyzed behavior patterns to inform buying experience improvements.",
      "Designed content strategies and wireframes using Figma to optimize navigation and overall user journey.",
      "Gathered insights to refine product offerings and align brand messaging with user needs.",
    ],
    competencies: ["UX Research", "User Persona Development", "Customer Journey Mapping", "Brand Positioning", "Content Strategy", "Wireframing & Prototyping", "Figma", "Analytical Thinking"],
    featured: false,
    image: null,
  },
];

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-4">
              <div className="divider-line" />
              <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-semibold">Academic Projects</p>
            </div>
            <h2 className="font-display text-6xl md:text-7xl font-black text-foreground leading-[0.95]">
              Bold moves,<br /><span className="italic font-normal text-accent">big results</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="aspect-[16/9] overflow-hidden">
              <img src={projectsImg} alt="NYC skyline" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </AnimatedSection>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2 md:h-[calc(100vh-20rem)]">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveIndex(i)}
                className="group h-full min-h-0 p-6 md:p-7 bg-card border border-border hover:shadow-[0_25px_60px_-15px_hsl(var(--noir)/0.12)] transition-all duration-500 flex flex-col cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase font-semibold text-accent">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-4 font-body text-xs uppercase tracking-widest text-muted-foreground">
                  Click to view details
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setActiveIndex(null)}
            />
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-[90%] max-w-3xl h-[70vh] bg-background border border-border shadow-2xl p-6 md:p-10 overflow-y-auto"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-body text-[11px] tracking-[0.3em] uppercase font-semibold text-accent">
                  {activeProject.category}
                </span>
                {"duration" in activeProject && activeProject.duration && (
                  <span className="font-body text-xs text-muted-foreground">{activeProject.duration}</span>
                )}
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {activeProject.title}
              </h3>

              {"projectFocus" in activeProject && activeProject.projectFocus ? (
                <>
                  <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-2">Project Focus</h4>
                  <p className="font-body text-base text-muted-foreground leading-[1.9] mb-4">{activeProject.projectFocus}</p>

                  {"strategy" in activeProject && activeProject.strategy && activeProject.strategy.length > 0 && (
                    <>
                      <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-2">Strategy</h4>
                      <div className="space-y-3 mb-4">
                        {activeProject.strategy.map((p: string, idx: number) => (
                          <p key={idx} className="font-body text-base text-muted-foreground leading-[1.9]">{p}</p>
                        ))}
                      </div>
                    </>
                  )}

                  {"keyActions" in activeProject && activeProject.keyActions && activeProject.keyActions.length > 0 && (
                    <>
                      <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-2">Key Actions</h4>
                      <ul className="list-disc list-inside space-y-1.5 mb-4 font-body text-base text-muted-foreground leading-[1.7]">
                        {activeProject.keyActions.map((action: string, idx: number) => (
                          <li key={idx}>{action}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {"status" in activeProject && activeProject.status && (
                    <p className="font-body text-sm italic text-muted-foreground mb-4">{activeProject.status}</p>
                  )}

                  {"competencies" in activeProject && activeProject.competencies && activeProject.competencies.length > 0 && (
                    <>
                      <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-2">Competencies</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {activeProject.competencies.map((c: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 font-body text-xs border border-border text-foreground">{c}</span>
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  {"description" in activeProject && (activeProject as { description?: string }).description && (
                    <p className="font-body text-base text-muted-foreground leading-[1.9] mb-6">
                      {(activeProject as { description: string }).description}
                    </p>
                  )}
                  {activeProject.image && (
                    <div className="mb-6 overflow-hidden border border-border">
                      <img src={activeProject.image} alt={activeProject.title} className="w-full h-auto object-contain" />
                    </div>
                  )}
                  {"outcome" in activeProject && (activeProject as { outcome?: string }).outcome && (
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp size={16} className="text-accent" />
                      <span className="font-body text-base font-semibold text-foreground">{(activeProject as { outcome: string }).outcome}</span>
                    </div>
                  )}
                </>
              )}

              <div className="flex justify-end pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
