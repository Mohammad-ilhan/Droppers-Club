import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg";

export function SplashScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 grid-bg opacity-50" />

          {/* Animated gradient orbs */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute top-1/3 -left-20 w-[40rem] h-[40rem] rounded-full bg-primary/30 blur-3xl"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-1/3 -right-20 w-[40rem] h-[40rem] rounded-full bg-secondary/30 blur-3xl"
          />

          {/* Curtain reveal bars */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ delay: 1.4, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ delay: 1.4, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-foreground"
          />

          {/* Center reveal */}
          <div className="relative flex flex-col items-center text-center px-6">
            <motion.img
              src={logo}
              alt="Dropper's Club"
              initial={{ scale: 0.6, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-40 md:w-56 drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              style={{ background: "transparent" }}
            />

            <motion.h1
              initial={{ opacity: 0, y: 20, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-8 text-5xl md:text-7xl font-bold"
            >
              Dropper's <span className="text-gradient-brand">Club</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-6 h-[2px] w-40 bg-gradient-brand origin-left"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.7 }}
              className="mt-5 text-xs md:text-sm tracking-[0.5em] text-muted-foreground uppercase"
            >
              Crafting Toppers
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
