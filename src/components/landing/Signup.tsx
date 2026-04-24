import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "You're on the list! 🎉", description: "We'll be in touch soon with early access details." });
  };

  return (
    <section id="signup" className="bg-secondary/40 py-20 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl rounded-3xl bg-card p-8 shadow-card md:p-10"
        >
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Early access</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Join the waitlist</h2>
            <p className="mt-3 text-sm text-muted-foreground">Be the first to cook smarter. No spam, ever.</p>
          </div>

          {submitted ? (
            <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-secondary p-8 text-center">
              <CheckCircle2 className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold">You're in!</h3>
              <p className="text-sm text-muted-foreground">We'll email you as soon as your spot is ready.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Alex Cook" className="mt-1.5 h-12 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@example.com" className="mt-1.5 h-12 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="problem">What's your biggest cooking problem? <span className="text-muted-foreground">(optional)</span></Label>
                <Textarea id="problem" placeholder="I never know what to cook on weeknights..." className="mt-1.5 min-h-[90px] rounded-xl" />
              </div>
              <Button type="submit" size="xl" variant="hero" className="w-full">
                Join Early Access <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Signup;
