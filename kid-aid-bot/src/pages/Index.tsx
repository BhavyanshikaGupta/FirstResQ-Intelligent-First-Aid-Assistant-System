import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowToUse from "@/components/HowToUse";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="how-to-use">
          <HowToUse />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="journey">
          <Journey />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
