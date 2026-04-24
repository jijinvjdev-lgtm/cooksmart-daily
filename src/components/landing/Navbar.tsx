import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <nav className="container flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <ChefHat className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="text-lg font-bold tracking-tight">CookSmart</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">Features</a>
          <a href="#how" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">How it works</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">Pricing</a>
        </div>
        <Button asChild size="sm" variant="hero" className="rounded-full">
          <a href="#signup">Join</a>
        </Button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
