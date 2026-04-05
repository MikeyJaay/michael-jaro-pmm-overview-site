// STAGED FOR V2 — Route disabled in App.tsx. Re-enable /:category route when sub-pages are ready.
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { artifactCategories } from "@/data/portfolioData";

const ComingSoon = () => {
  const { category } = useParams();
  const cat = artifactCategories.find((c) => c.slug === category);

  return (
    <section className="flex min-h-[70vh] items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Coming Soon</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          {cat?.title ?? "Section"}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          {cat?.description ?? "This section is under development."}
        </p>
      </motion.div>
    </section>
  );
};

export default ComingSoon;
