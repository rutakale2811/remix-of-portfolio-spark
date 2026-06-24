import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  {
    value: 3.5,
    prefix: "$",
    suffix: "M+",
    decimals: 1,
    label: "Revenue Influenced",
  },
  {
    value: 10,
    prefix: "",
    suffix: "M+",
    decimals: 0,
    label: "Campaign Reach & Impressions Generated",
  },
  {
    value: 2000,
    prefix: "",
    suffix: "+",
    decimals: 0,
    useComma: true,
    label: "Event Participants & Registrations Driven",
  },
  {
    value: 5,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Digital Platforms Strategized & Managed",
  },
];

const formatValue = (num: number, decimals: number, useComma?: boolean) => {
  const raw = decimals > 0 ? num.toFixed(decimals) : String(Math.round(num));
  if (!useComma) return raw;
  const [whole, fraction] = raw.split(".");
  const formatted = Number(whole).toLocaleString("en-US");
  return fraction ? `${formatted}.${fraction}` : formatted;
};

const AnimatedCounter = ({
  value,
  prefix,
  suffix,
  decimals,
  useComma,
}: {
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
  useComma?: boolean;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(formatValue(0, decimals, useComma));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(formatValue(latest, decimals, useComma)),
    });

    return () => controls.stop();
  }, [isInView, value, decimals, useComma]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <div id="stats" className="mb-24 border border-border bg-card p-8 md:p-10">
      <AnimatedSection>
        <div className="flex items-center gap-4 mb-10">
          <div className="divider-line" />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-semibold">Impact</p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.08}>
            <div className="flex h-full flex-col border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
              <p className="font-display text-4xl md:text-5xl font-black text-accent leading-none mb-3 tabular-nums">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  useComma={stat.useComma}
                />
              </p>
              <p className="font-body text-xs md:text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
