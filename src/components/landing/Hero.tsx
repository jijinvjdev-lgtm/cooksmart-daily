import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMeal from "@/assets/hero-meal.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-20 pt-12 md:pb-28 md:pt-20">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="container px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Early access now open
            </span>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Stop Thinking About <span className="bg-gradient-primary bg-clip-text text-transparent">What to Cook</span> Every Day
            </h1>
            <p className="mt-5 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
              Get daily meal suggestions, smart grocery lists, and never repeat meals again.
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row">
              <Button asChild size="xl" variant="hero">
                <a href="#signup">
                  Join Early Access <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="xl" variant="soft">
                <a href="#how">See How It Works</a>
              </Button>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">Free to join · No credit card required</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <Image
                src={heroMeal}
                alt="Healthy meal bowl with fresh vegetables"
                priority
                sizes="(min-width: 768px) 40rem, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-4 bottom-6 rounded-2xl bg-card/95 p-4 shadow-card backdrop-blur md:-left-8"
            >
              <div className="text-xs text-muted-foreground">Today's suggestion</div>
              <div className="text-sm font-semibold">Mediterranean Bowl</div>
              <div className="mt-1 text-[11px] text-primary">25 min · 480 kcal</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-3 top-6 rounded-2xl bg-card/95 p-3 shadow-card backdrop-blur md:-right-6"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-base" role="img" aria-label="vegetables">
                  🥬
                </span>
                <div>
                  <div className="text-xs font-semibold">Grocery ready</div>
                  <div className="text-[11px] text-muted-foreground">12 items · auto</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
