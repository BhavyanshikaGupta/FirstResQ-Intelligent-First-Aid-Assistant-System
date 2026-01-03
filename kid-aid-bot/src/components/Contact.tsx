import Header from "@/components/Header";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background pt-24 pb-24">
        <section className="px-6 md:px-12">
          {/* 🔹 Title */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us 💬
            </h1>
            <p className="text-lg text-muted-foreground">
              We’d love to hear from you! Reach out to us anytime through the
              following details.
            </p>
          </div>

          {/* 🔹 Contact Info Section */}
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-sm p-8 space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/30 transition-all">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground leading-relaxed">
                  bhavyanshikagupta@gmail.com <br />
                  vanshu.ch15@gmail.com <br />
                  tpiyush095@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/30 transition-all">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground leading-relaxed">
                  +91 70177 29094 <br />
                  +91 79834 51429 <br />
                  +91 89886 63051
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/30 transition-all">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Office</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <a
                    href="https://www.google.com/maps?q=A-10,+A+Block,+Industrial+Area,+Sector+62,+Noida,+Uttar+Pradesh+201309"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    A-10, A Block, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309
                  </a>
                  <br />
                  <a
                    href="https://www.google.com/maps?q=Jaypee+Institute+of+Information+Technology,+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Jaypee Institute of Information Technology
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
