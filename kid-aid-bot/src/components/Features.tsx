import Header from "@/components/Header";
import {
  Brain,
  ShieldCheck,
  Mic,
  Cpu,
  Globe,
  Layers,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "AI-Driven Symptom Understanding",
      icon: <Brain className="w-7 h-7 text-primary" />,
      desc: "Understands user-described symptoms instantly using a custom-trained medical LLM for highly accurate first-aid guidance.",
    },
    {
      title: "Real-Time Step-by-Step Guidance",
      icon: <BookOpen className="w-7 h-7 text-primary" />,
      desc: "Provides calm, structured, medically aligned first-aid instructions during burns, bleeding, dizziness, choking, or fractures.",
    },
    {
      title: "Intelligent Safety Layer",
      icon: <ShieldCheck className="w-7 h-7 text-primary" />,
      desc: "Automatically detects severe emergencies like unconsciousness, breathing issues, seizures, or heavy bleeding and gives urgent safety alerts.",
    },
    {
      title: "Voice-Activated Assistance",
      icon: <Mic className="w-7 h-7 text-primary" />,
      desc: "Hands-free support via speech-to-text and text-to-speech ensures safe and quick help when typing is not possible.",
    },
    {
      title: "Dedicated Hardware Prototype",
      icon: <Cpu className="w-7 h-7 text-primary" />,
      desc: "Raspberry Pi / ESP32 based device that works as a mini AI voice assistant for screen-free first-aid support.",
    },
    {
      title: "Clean & Multilingual Interface",
      icon: <Globe className="w-7 h-7 text-primary" />,
      desc: "Simple, accessible, and multilingual UI suitable for children, elderly users, and low-digital literacy audiences.",
    },
    {
      title: "Semantic Search Knowledge Base",
      icon: <Layers className="w-7 h-7 text-primary" />,
      desc: "Uses a verified first-aid dataset with semantic search to retrieve accurate, medically reviewed instructions.",
    },
    {
      title: "Smart Emergency Prioritization",
      icon: <AlertTriangle className="w-7 h-7 text-primary" />,
      desc: "The system prioritizes life-threatening queries and highlights critical actions first to help users respond immediately and safely.",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background pt-24 pb-24">
        <section className="px-6 md:px-12">

          {/* 🔹 Title Section */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Key Features ⚙️
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore the most powerful and innovative features that make
              FirstResQ your smart and reliable first-aid companion.
            </p>
          </div>

          {/* 🔹 Feature Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {features.map(({ title, desc, icon }, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl shadow-sm p-7 hover:bg-accent/20 transition-all flex gap-4 items-start"
              >
                <div className="bg-primary/10 p-3 rounded-xl flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </section>
      </main>
    </>
  );
};

export default Features;
