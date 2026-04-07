import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/common/MagneticButton";
import { blogPosts, writingCategories, type WritingCategory } from "@/data/writing";

const Writing = () => {
  const [activeCategory, setActiveCategory] = useState<WritingCategory>("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-28 lg:py-32">
        <div className="container relative mx-auto">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16 lg:gap-20">

            {/* Left — text */}
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                  Writing
                </p>
                <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                  Putting Pen to Paper
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                A small archive of writings published across companies, platforms, and personal channels.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <MagneticButton href="https://www.linkedin.com/in/michaeljaro/">
                  Connect on LinkedIn <ArrowRight size={15} />
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center mt-2 md:mt-0 md:w-[42%] lg:w-[45%] xl:w-[48%] shrink-0 items-start"
            >
              <img
                src="/home-page-images/robot-pen.png"
                alt="Robot writing"
                className="w-auto max-h-48 md:max-h-[22rem] object-contain"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Blog content */}
      <section className="border-t border-border/30 py-14 md:py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-14"
          >
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Archive
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                All Articles
              </h2>
            </div>

            {/* Filter bar */}
            <div className="flex flex-wrap items-center gap-2">
              {writingCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Card grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, index) => {
              const isPdf = post.url.endsWith(".pdf");
              const label = isPdf ? "View Datasheet →" : "Read Article →";

              return (
                <motion.a
                  key={post.title}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_30px_-4px_hsl(221_83%_53%/0.10)] cursor-pointer"
                >
                  {/* Thumbnail */}
                  {post.thumbnail ? (
                    <div className="h-40 w-full overflow-hidden bg-muted">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="flex h-40 w-full items-center justify-center bg-muted/50">
                      <span className="text-xs text-muted-foreground">No preview</span>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    {/* Blue top bar + publication badge */}
                    <div className="mb-3 h-1 w-8 rounded-full bg-primary" />
                    <span className="w-fit rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-foreground">
                      {post.publication}
                    </span>

                    {/* Title */}
                    <h2 className="mt-3 text-base font-bold leading-snug text-foreground">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>

                    {/* Footer */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
                        {label}
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Writing;
