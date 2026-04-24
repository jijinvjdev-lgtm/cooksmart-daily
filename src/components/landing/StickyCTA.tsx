import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/90 p-3 backdrop-blur-xl md:hidden"
        >
          <Button asChild size="lg" variant="hero" className="w-full">
            <a href="#signup">Join Early Access</a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
