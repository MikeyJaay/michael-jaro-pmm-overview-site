import { motion } from "framer-motion";

const neverItems = [
  "Heard the dial tone for hours on a cold call just to get one connect that says, \u201cHow\u2019d you get this number?\u201d",
  "Frantically refreshed your inbox at 11:59 PM waiting for the DocuSign to come through at end of quarter.",
  "Put out sprint fires no one else sees while being asked, \u201cWhen can we sell this?\u201d",
  "Been told, \u201cWe need more pipeline campaigns,\u201d with no time to build them right.",
];

const InTheirShoesSection = () => (
  <section className="border-t border-border/30 py-14 md:py-24">
    <div className="container mx-auto">

      {/* Two-column grid for top content */}
      <div className="md:grid md:grid-cols-[2fr_3fr] md:items-start md:gap-16 lg:gap-24">

        {/* Left — sticky heading */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-0 md:sticky md:top-28"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            My Approach
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
            Strategic Empathy
          </h2>
          <img
            src="/home-page-images/robot-heart.png"
            alt="Robot with heart"
            className="mt-10 hidden w-full max-w-[260px] self-center object-contain md:block mx-auto"
          />
        </motion.div>

        {/* Right — narrative */}
        <div>

          {/* Zone 1 — Opening statements */}
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl font-semibold leading-snug text-foreground md:text-2xl"
            >
              Too often, we&rsquo;re so focused on being the hero of our own story &mdash; the deadlines, the pressure, the KPIs &mdash; that we don&rsquo;t realize we&rsquo;ve unintentionally become the antagonist in someone else&rsquo;s.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              That&rsquo;s where most GTM friction actually comes from.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Not bad strategy. Not bad people. Just the disconnect of never having stood in someone else&rsquo;s shoes.
            </motion.p>
          </div>

          {/* Zone 2 — "Because if you've never" numbered cards */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.5 }}
            className="mt-10"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Because if you&rsquo;ve never&hellip;
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {neverItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28 + i * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-xl border border-border/50 bg-secondary/40 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_30px_-4px_hsl(221_83%_53%/0.08)]"
                >
                  <p className="mb-3 text-3xl font-extrabold leading-none text-primary/20">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Zone 3 — Closing line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="mt-8 text-lg font-semibold leading-relaxed text-foreground"
          >
            &hellip;it&rsquo;s easy to misread what another team is actually carrying. And that&rsquo;s where the antagonist gets created.
          </motion.p>

        </div>
      </div>

      {/* Zone 4 — Pull quote (full-width breakout) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.2 }}
        className="relative mt-14 overflow-hidden rounded-2xl bg-dark-section px-8 py-14 text-center md:px-16 md:py-16"
      >
        {/* Decorative quote watermark */}
        <span className="pointer-events-none absolute left-6 top-0 select-none text-[9rem] font-extrabold leading-none text-white/[0.06] md:text-[12rem]">
          &ldquo;
        </span>

        <p className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-8">
          The Goal
        </p>

        <p className="relative mx-auto max-w-2xl text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl lg:text-[2rem]">
          As a PMM, my goal is never to be the antagonist of someone else&rsquo;s story.
        </p>
        <p className="relative mx-auto mt-4 max-w-2xl text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl lg:text-[2rem]">
          It&rsquo;s to win the Oscar for{" "}
          <span className="text-gradient">Best Supporting Actor</span>{" "}
          through shared perspective.
        </p>
      </motion.div>

    </div>
  </section>
);

export default InTheirShoesSection;
