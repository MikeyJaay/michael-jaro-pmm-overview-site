import { useState } from "react";
import { blogPosts, writingCategories, type WritingCategory } from "@/data/writing";

const Writing = () => {
  const [activeCategory, setActiveCategory] = useState<WritingCategory>("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A career-spanning archive of articles published across companies,
            platforms, and personal channels — one place for all my writing.
          </p>

          {/* Filter bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
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

          {/* Card grid */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => {
              const isPdf = post.url.endsWith(".pdf");
              const label = isPdf ? "View Datasheet →" : "Read Article →";

              return (
                <a
                  key={post.title}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-xl border border-border/40 bg-card/80 transition-all duration-200 hover:border-primary/20 hover:shadow-sm cursor-pointer"
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
                    {/* Publication badge */}
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
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writing;
