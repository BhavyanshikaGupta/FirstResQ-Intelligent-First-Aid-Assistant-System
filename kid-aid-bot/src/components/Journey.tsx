"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Rocket,
  HeartHandshake,
  Code2,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";

const Journey = () => {
  const milestones = [
    {
      title: "The Spark of an Idea 💡",
      icon: <HeartHandshake className="text-primary w-5 h-5" />,
      points: [
        "Identified gap in quick first-aid guidance for children & parents.",
        "Defined mission to build AI that gives empathetic emergency help.",
        "Outlined voice, multilingual & real-time assistance goals.",
        "Planned data collection and validation workflow.",
      ],
    },
    {
      title: "LLM Research & Experimentation 🧠",
      icon: <Brain className="text-primary w-5 h-5" />,
      points: [
        "Fine-tuned transformer (MiniLM-L6-v2) on custom Symptom→First-Aid dataset.",
        "Used semantic ranking & cosine similarity achieving >90% accuracy.",
        "Benchmarked with GPT-4 & LLaMA for safer, empathetic guidance.",
        "Integrated retrieval pipeline for context-aware responses.",
      ],
    },
    {
      title: "Prototype & Voice Integration 🧩",
      icon: <Code2 className="text-primary w-5 h-5" />,
      points: [
        "Developed React + TypeScript interface with OpenAI API.",
        "Enabled voice input and TTS for hands-free communication.",
        "Added session memory for contextual continuity.",
        "Deployed MVP on Vercel for user testing.",
      ],
    },
    {
      title: "Safety, Testing & Feedback 🔬",
      icon: <ShieldCheck className="text-primary w-5 h-5" />,
      points: [
        "Ran 200+ simulated emergencies validating timing & tone.",
        "Added fallback rules for unclear inputs.",
        "Collected feedback from medical students & parents.",
        "Implemented logs & analytics for model tracking.",
      ],
    },
    {
      title: "Launch & Beyond 🚀",
      icon: <Rocket className="text-primary w-5 h-5" />,
      points: [
        "Launched public app with secure login & profiles.",
        "Reduced latency <1.2 s via caching & streaming.",
        "Added analytics for real-world usage tracking.",
        "Expanding: language support, pediatric mode, offline help.",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 bg-muted/30 text-foreground">
        <section id="journey" className="px-6 md:px-12">
          {/* 🔹 Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The evolution of <b>AI First Aid Assistant</b> — from an idea to a
            reliable, empathetic life-saving companion.
          </motion.p>

          {/* 🔹 Milestone Cards */}
          <div className="relative max-w-6xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-start gap-6">
            {milestones.map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center w-full md:w-[18%] relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-soft hover:shadow-hover rounded-2xl flex flex-col justify-between min-h-[300px]">
                  <CardContent className="p-5 text-left flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      {step.icon}
                      <h3 className="text-base font-semibold leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      {step.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* 🔗 Connector Line */}
                {i !== milestones.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-[-14px] w-7 h-[2px] bg-primary/50 rounded-full"></div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Journey;
