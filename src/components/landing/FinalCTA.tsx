import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-primary p-10 text-center shadow-glow md:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(0_0%_100%/0.15),transparent_50%)]" />
          <ChefHat className="relative mx-auto h-12 w-12 text-primary-foreground/90" />
          <h2 className="relative mt-5 text-3xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">
            Make cooking simple, fast, and stress-free
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Join thousands of home cooks getting daily inspiration straight to their kitchen.
          </p>
          <Button asChild size="xl" variant="onPrimary" className="relative mt-8">
            <a href="#signup">Start Now</a>
          </Button>
        </motion.div>
      </div>

      <footer className="container mt-20 px-4 pb-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} CookSmart. Made with love for home cooks.
      </footer>
    </section>
  );
};

export default FinalCTA;
