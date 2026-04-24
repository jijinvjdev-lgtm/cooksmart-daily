import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  { title: "Daily personalized meal suggestions", text: "Tailored to your taste, time, and pantry." },
  { title: "Auto-generated grocery list", text: "Build the week's shopping in one tap." },
  { title: "Cooking history to avoid repeats", text: "We track what you cook so meals stay fresh." },
  { title: "Family collaboration", text: "Suggest, vote, and plan meals together." },
];

const Solution = () => {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">The solution</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Meet your daily cooking assistant
            </h2>
            <p className="mt-4 text-muted-foreground">
              CookSmart turns daily decisions into a one-tap experience — so you cook more, stress less, and waste nothing.
            </p>
          </motion.div>

          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
