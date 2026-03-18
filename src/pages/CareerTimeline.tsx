import { motion } from "framer-motion";

const roles = [
  { company: "TrustLayer", role: "Head of Product Marketing", period: "2023 – Present", summary: "Led GTM strategy for AI-powered trust and compliance platform, driving 3× pipeline growth through security-aware messaging." },
  { company: "PlatformX", role: "Sr. Product Marketing Manager", period: "2021 – 2023", summary: "Owned positioning and launch execution for enterprise SaaS platform, enabling $12M ARR expansion." },
  { company: "CloudSync", role: "Product Marketing Manager", period: "2019 – 2021", summary: "Built sales enablement programs and competitive intelligence frameworks from scratch, supporting 40% YoY revenue growth." },
  { company: "DataForge", role: "GTM Lead", period: "2017 – 2019", summary: "Defined go-to-market playbooks for data analytics product line, driving adoption across mid-market segments." },
  { company: "VeloTech", role: "Marketing Manager", period: "2015 – 2017", summary: "Managed demand generation and content strategy for early-stage B2B SaaS startup through Series A." },
];

export default function CareerTimeline() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Experience</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Career <span className="text-gradient">Timeline</span>
        </h1>
        <p className="mt-4 text-muted-foreground">A track record of GTM ownership across high-growth SaaS and enterprise platforms.</p>
      </div>

      <div className="relative mx-auto max-w-2xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        {roles.map((r, i) => (
          <motion.div
            key={r.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative mb-12 pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
          >
            {/* Dot */}
            <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1.5" />

            <div className={i % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}>
              <p className="text-xs font-medium text-primary">{r.period}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{r.company}</h3>
              <p className="text-sm font-medium text-muted-foreground">{r.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
