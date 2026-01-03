"use client";

import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleStartClick = () => {
    window.location.href = "http://127.0.0.1:5000";
  };

  const handleLearnMore = () => {
    setTimeout(() => {
      const section = document.getElementById("how-to-use");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* 🔹 Background Image + Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, hsla(200, 75%, 92%, 0.92), hsla(0, 0%, 100%, 0.92)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 🔹 NEW: Soft spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),transparent_70%)] z-0" />

      {/* 🔹 NEW: Glow ring behind heading */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[580px] h-[580px] rounded-full 
                   bg-gradient-to-r from-blue-300/40 via-purple-300/40 to-pink-300/40 
                   blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 z-0"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 🔹 NEW: Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full backdrop-blur-sm"
          initial={{ x: Math.random() * 1200, y: Math.random() * 800, opacity: 0.3 }}
          animate={{
            y: [null, Math.random() * -200],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* 🔹 Floating Decorative Icons */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-24 right-16 text-accent opacity-25"
      >
        <Heart className="w-28 h-28" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 left-10 text-primary opacity-25"
      >
        <Sparkles className="w-20 h-20" />
      </motion.div>

      {/* 🔹 Main Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-white/60 backdrop-blur-md text-secondary-foreground mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Intelligent Care</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight 
                       text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 drop-shadow-lg"
          >
            FirstResQ
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl text-accent-foreground mb-6 font-semibold"
          >
            Your Smart First Aid Assistant
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Get instant, evidence-based, and empathetic first aid instructions — powered by AI
            and designed to save lives.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              onClick={handleStartClick}
            >
              <span className="relative z-10">Start Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-blue-400/30 animate-pulse rounded-2xl" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-secondary transition-all"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground"
          >
            {["24/7 Support", "Medical Verified", "Made for Everyone"].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
