import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Add your groceries", text: "Quick-add what's in your pantry or fridge." },
  { n: "02", title: "Get daily meal suggestions", text: "Personalized picks every morning, ready to cook." },
  { n: "03", title: "Cook without thinking", text: "Follow simple steps and enjoy the meal." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="bg-gradient-warm py-20 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">How it works</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Three steps to stress-free meals</h2>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative rounded-3xl bg-card p-7 shadow-soft"
            >
              <span className="text-5xl font-extrabold text-primary/15">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
