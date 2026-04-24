import { motion } from "framer-motion";
import { Brain, Repeat, ShoppingCart, Clock } from "lucide-react";

const problems = [
  { icon: Brain, title: "Running out of ideas", text: "Same brain freeze every evening at 6pm." },
  { icon: Repeat, title: "Repeating same meals", text: "Pasta again? Your week feels on autopilot." },
  { icon: ShoppingCart, title: "No grocery planning", text: "Three trips a week, half ingredients missing." },
  { icon: Clock, title: "Wasting time deciding", text: "20 minutes scrolling before even starting." },
];

const Problem = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">The problem</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Cooking shouldn't feel like a daily puzzle</h2>
          <p className="mt-4 text-muted-foreground">If any of these sound familiar, you're not alone.</p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
