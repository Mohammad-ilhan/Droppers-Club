import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Monogram } from "./Monogram";

export function SplashScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Subtle background */}
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 grid-bg opacity-40" />

          {/* Top + bottom navy bars sliding away */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ delay: 2.4, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ delay: 2.4, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 1 }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-primary"
          />

          {/* Gold hairline meeting in the center */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-gold origin-center"
          />

          {/* Center block */}
          <div className="relative flex flex-col items-center text-center px-6 z-10">
            <motion.div
              initial={{ y: 30, opacity: 0, rotate: -8 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Monogram size={120} />
            </motion.div>

            <div className="mt-8 overflow-hidden">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-primary-foreground mix-blend-difference">
                  Dropper's <span className="italic">Club</span>
                </h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.6, duration: 0.7 }}
              className="mt-6 h-px w-24 bg-gradient-gold origin-center"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.7 }}
              className="mt-5 text-[10px] md:text-xs tracking-[0.6em] uppercase text-primary-foreground mix-blend-difference"
            >
              Est · Bhopal · Crafting Toppers
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
