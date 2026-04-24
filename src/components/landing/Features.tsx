import { motion } from "framer-motion";
import { Sparkles, Salad, ShoppingBasket, Users } from "lucide-react";

const features = [
  { icon: Sparkles, title: "No Repeat Dishes", text: "Smart memory keeps every week's menu fresh and exciting." },
  { icon: Salad, title: "Balanced Nutrition", text: "Daily picks balanced for protein, fiber, and variety." },
  { icon: ShoppingBasket, title: "Smart Grocery List", text: "Auto-built lists from your meal plan — sorted by aisle." },
  { icon: Users, title: "Family Connect", text: "Suggest meals, vote together, and plan as a household." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Features</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Everything you need to cook smarter</h2>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7 shadow-soft transition-smooth hover:shadow-card"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-smooth group-hover:opacity-20" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
