import Header from "@/components/Header";

const About = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background pt-24 pb-24">
        <section className="px-6 md:px-12">
          {/* 🔹 Title Section */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Our Team 👩‍💻
            </h1>
            <p className="text-lg text-muted-foreground">
              We’re a team of passionate innovators using technology to create
              real-world impact in healthcare, safety, and accessibility.
            </p>
          </div>

          {/* 🔹 Mission & Vision */}
          <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                🌍 Our Mission
              </h3>
              <p className="text-muted-foreground">
                To make essential first-aid knowledge easily available and
                actionable through intelligent, human-centered AI technology.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                💡 Our Vision
              </h3>
              <p className="text-muted-foreground">
                Building a future where every person can respond confidently
                during emergencies — guided by intelligent and empathetic
                systems.
              </p>
            </div>
          </div>

          {/* 🔹 Team Section */}
          <div className="max-w-5xl mx-auto mt-20 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Meet the Team Behind the Project 💫
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              We are students from{" "}
              <span className="text-blue-500 font-medium">
                Jaypee Institute of Information Technology, Noida
              </span>
              , united by our passion for innovation and our mission to make
              first-aid support smarter and more accessible.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Bhavyanshika Gupta
                </h3>
                <p className="text-muted-foreground">
                  Backend Developer & AI Integration
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Vanshika Chauhan
                </h3>
                <p className="text-muted-foreground">
                  Backend Developer & AI Integration
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Piyush Thakur
                </h3>
                <p className="text-muted-foreground">Frontend Developer</p>
              </div>
            </div>
          </div>

          {/* 🔹 Closing Line */}
          <div className="max-w-3xl mx-auto text-center mt-20">
            <p className="text-lg text-muted-foreground">
              Together, we combine design, intelligence, and empathy to build a
              safer and more informed tomorrow.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
