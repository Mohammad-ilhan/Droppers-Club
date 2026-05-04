import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg";

export function SplashScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-0 bg-gradient-hero" />
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ boxShadow: ["0 0 60px oklch(0.62 0.18 145 / 0.6)", "0 0 120px oklch(0.72 0.18 55 / 0.6)", "0 0 60px oklch(0.62 0.18 145 / 0.6)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-full"
            >
              <img src={logo} alt="Dropper's Club" className="w-40 h-40 md:w-56 md:h-56 rounded-full" />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-20 text-center"
          >
            <p className="text-sm tracking-[0.4em] text-muted-foreground uppercase">Crafting Toppers</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
