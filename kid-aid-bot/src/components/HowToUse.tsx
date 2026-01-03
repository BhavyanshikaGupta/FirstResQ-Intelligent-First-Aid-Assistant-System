"use client";

import { motion } from "framer-motion";
import { BookOpen, Mic, HeartPulse, Globe, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: <HeartPulse className="w-6 h-6 text-primary" />,
    title: "Instant Symptom Understanding",
    desc: "Simply type or speak your problem. The assistant quickly identifies the issue and prepares accurate first-aid steps.",
  },
  {
    icon: <Mic className="w-6 h-6 text-primary" />,
    title: "Real-Time Emergency Guidance",
    desc: "Receive calm, structured, step-by-step instructions for burns, bleeding, choking, dizziness and more — without panic.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Learn First Aid Anytime",
    desc: "Explore helpful first-aid learning content, explanations, examples and tips to build your emergency-response knowledge.",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Safe, Fast & Accessible Everywhere",
    desc: "Fully responsive, multilingual and voice-enabled so help is always within reach — anytime, anywhere.",
  },
];

const HowToUse = () => {
  return (
    <section id="how-to-use" className="py-28 bg-background">
      <div className="container mx-auto px-6 text-center">

        {/* ⭐ MAIN INTRODUCTION ABOUT THE WEBSITE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Learn More About FirstResQ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          FirstResQ is your intelligent first-aid assistant designed to guide you during
          everyday health issues and sudden emergencies. Whether you're dealing with
          dizziness, burns, bleeding, fainting, or any common symptoms, the system
          provides instant, medically aligned instructions you can follow immediately.
          The platform combines a clean UI, smart AI analysis, and optional voice features
          to ensure you always know what to do — calmly and confidently.
        </motion.p>

        {/* ⭐ LINE DIVIDER */}
        <div className="w-32 h-[2px] bg-primary/40 rounded-full mx-auto mb-14"></div>

        {/* ⭐ WEBSITE CAPABILITIES SECTION */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6"
        >
          What You Can Do on the Website
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-16"
        >
          The website gives you a smooth, panic-free experience with direct access to
          first-aid responses, voice-based commands, learning modules and real-time safety checks.
        </motion.p>

        
        {/* Model Info */}
  <div className="text-center mb-8">
    <p className="text-lg font-semibold text-primary">
      📌 Model Used: <span className="text-black">all-MiniLM-L6-v2 (Sentence Transformer)</span>
    </p>

    <p className="text-muted-foreground mt-2">
      A lightweight transformer model fine-tuned specifically for First-Aid symptom-to-solution retrieval.
    </p>
  </div>
          {/* ⭐ MODEL ACCURACY / EVALUATION SECTION */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10 border border-border/40 my-20"
>
  <h3 className="text-3xl font-semibold mb-5 text-center">
    Model Evaluation & Accuracy
  </h3>

  <p className="text-muted-foreground leading-relaxed text-center mb-6 max-w-2xl mx-auto">
    The FirstResQ AI model has been trained and evaluated on a curated 
    first-aid dataset. The chart below shows strong performance metrics 
    such as Recall@1, Recall@3, Recall@5, MRR and MAP, indicating reliable 
    first-aid retrieval accuracy.
  </p>

  {/* Image */}
  <div className="flex justify-center">
    <img
      src="/output.png"
      alt="Model Evaluation Metrics"
      className="rounded-xl shadow-md w-full max-w-3xl"
    />
  </div>
</motion.div>
        {/* ⭐ HARDWARE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10 border border-border/40"
        >
          <div className="flex justify-center mb-4">
            <Cpu className="w-10 h-10 text-primary" />
          </div>

          <h3 className="text-3xl font-semibold mb-4">
            Learn About the Hardware Prototype
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            FirstResQ also comes with a custom-built hardware prototype powered by the
            Raspberry Pi / ESP32 module. This physical device acts like a small AI-powered
            emergency assistant that listens to your voice and responds instantly — without
            needing to open the website. It is designed for situations where users may not
            have easy access to a screen or when hands-free guidance is required.
          </p>

          <ul className="text-left text-muted-foreground mx-auto max-w-xl space-y-3">
            <li>✔ Voice-activated first-aid assistance</li>
            <li>✔ Speech-to-text & quick AI interpretation</li>
            <li>✔ Text-to-speech audio responses</li>
            <li>✔ Works like a mini Alexa-style first-aid device</li>
            <li>✔ Useful for elderly people, children and urgent scenarios</li>
          </ul>
        </motion.div>

        {/* ⭐ CTA */}
        <motion.div
          className="mt-16 text-muted-foreground text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Ready to explore more? Scroll up and start using FirstResQ for smart,
          safe and instant first-aid assistance.
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;
