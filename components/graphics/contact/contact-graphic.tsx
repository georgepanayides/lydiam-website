"use client";

import { motion } from "framer-motion";
import { MessageSquare, Clock, Globe2, ShieldCheck, User, Headphones } from "lucide-react";

export const ContactGraphic = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-primary-500/5 blur-3xl rounded-full scale-75" />

      {/* Rotating Rings (representing 24/7 cycles) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-dashed border-primary-200 dark:border-primary-900/30 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] border border-primary-100 dark:border-primary-900/20 rounded-full opacity-50"
      />

      {/* Central Hub */}
      <div className="relative z-10 w-24 h-24 bg-white dark:bg-dark-800 rounded-full shadow-xl shadow-primary-500/10 flex items-center justify-center border border-gray-100 dark:border-dark-700">
        <div className="absolute inset-0 bg-primary-500/10 rounded-full animate-ping opacity-20" />
        <Headphones className="w-10 h-10 text-primary-500" />
      </div>

      {/* Floating Elements */}
      
      {/* 1. Chat / Typing Indicator (Top Right) */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-[20%] right-[5%] md:right-[15%]"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white dark:bg-dark-800 p-4 rounded-2xl rounded-bl-none shadow-lg border border-gray-100 dark:border-dark-700 flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 bg-primary-500 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* 2. 24/7 Availability (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-[25%] left-[0%] md:left-[15%]"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="bg-white dark:bg-dark-800 px-4 py-3 rounded-xl shadow-lg border border-gray-100 dark:border-dark-700 flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Support</p>
            <p className="text-sm font-bold text-dark-900 dark:text-white">24/7 Online</p>
          </div>
        </motion.div>
      </motion.div>

      {/* 3. Global Reach (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-[30%] right-[10%] md:right-[20%]"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="bg-white dark:bg-dark-800 p-3 rounded-xl shadow-lg border border-gray-100 dark:border-dark-700"
        >
          <Globe2 className="w-6 h-6 text-primary-500" />
        </motion.div>
      </motion.div>

      {/* 4. Message Bubble (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute top-[25%] left-[5%] md:left-[15%]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="bg-primary-500 text-white px-4 py-2 rounded-xl rounded-br-none shadow-lg shadow-primary-500/20"
        >
          <p className="text-sm font-medium">How can we help?</p>
        </motion.div>
      </motion.div>

    </div>
  );
};
