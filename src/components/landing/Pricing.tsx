import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Free",
    tagline: "Get a taste of CookSmart",
    monthly: 0,
    yearly: 0,
    cta: "Start Free",
    features: [
      "Basic recipe access",
      "Manual grocery list",
      "Limited daily meal suggestions",
      "Cooking history tracking",
    ],
  },
  {
    name: "Pro",
    tagline: "For households that cook smart",
    monthly: 199,
    yearly: 1499,
    cta: "Upgrade to Pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Smart daily meal suggestions",
      "Auto-generated grocery list",
      "No-repeat meal system",
      "Basic nutrition insights",
      "Priority updates",
    ],
  },
  {
    name: "Family",
    tagline: "Cook together, eat better",
    monthly: 299,
    yearly: 1999,
    cta: "Start Family Plan",
    features: [
      "Everything in Pro",
      "Family group access",
      "Shared grocery list",
      "Suggestions from family",
      "Voting system for meals",
      "Multi-user support",
    ],
  },
];

const formatPrice = (n: number) => `₹${n.toLocaleString("en-IN")}`;

const Pricing = () => {
  const [yearly, setYearly] = useState(true);

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
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Simple plans that fit your kitchen
          </h2>
          <p className="mt-3 text-muted-foreground">Choose a plan. Upgrade or cancel anytime.</p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-soft">
            <span className={`text-sm font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <Switch checked={yearly} onCheckedChange={setYearly} aria-label="Toggle yearly billing" />
            <span className={`text-sm font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly
            </span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              Save 20%
            </span>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-6xl items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly;
            const suffix = plan.monthly === 0 ? "forever" : yearly ? "/year" : "/month";

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={plan.highlight ? "md:-my-4" : ""}
              >
                <Card
                  className={`relative flex h-full flex-col rounded-3xl p-8 transition-shadow ${
                    plan.highlight
                      ? "border-2 border-primary bg-card shadow-card hover:shadow-glow"
                      : "border-border bg-card shadow-soft hover:shadow-card"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground shadow-glow">
                      <Sparkles className="h-3 w-3" /> {plan.badge}
                    </span>
                  )}

                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">{formatPrice(price)}</span>
                    <span className="text-sm text-muted-foreground">{suffix}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {plan.monthly === 0
                      ? "No credit card required"
                      : yearly
                      ? `Just ${formatPrice(Math.round(plan.yearly / 12))}/mo, billed yearly`
                      : "Billed monthly"}
                  </p>

                  <Button
                    variant={plan.highlight ? "hero" : "outline"}
                    size="lg"
                    className="mt-6 w-full rounded-full"
                  >
                    {plan.cta}
                  </Button>

                  <ul className="mt-6 space-y-3 text-sm">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 ${
                          plan.highlight ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
