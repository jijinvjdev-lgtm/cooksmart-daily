import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  const proPrice = yearly ? 6 : 9;

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Pricing</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Simple plans that fit your kitchen</h2>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-soft">
            <span className={`text-sm font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span className={`text-sm font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}>Yearly</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">Save 33%</span>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <h3 className="text-lg font-semibold">Free</h3>
            <p className="mt-1 text-sm text-muted-foreground">Get a taste of CookSmart</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">$0</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <Button variant="outline" size="lg" className="mt-6 w-full rounded-full">Get Started</Button>
            <ul className="mt-6 space-y-3 text-sm">
              {["Basic recipes", "Manual grocery list", "Limited meal suggestions"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border-2 border-primary bg-card p-8 shadow-card"
          >
            <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground shadow-glow">
              <Sparkles className="h-3 w-3" /> Most popular
            </span>
            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="mt-1 text-sm text-muted-foreground">For households that cook smart</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">${proPrice}</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{yearly ? "Billed yearly" : "Billed monthly"}</p>
            <Button variant="hero" size="lg" className="mt-6 w-full rounded-full">Get Started</Button>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "AI meal suggestions",
                "Smart grocery automation",
                "No-repeat meal system",
                "Nutrition insights",
                "Family collaboration",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
