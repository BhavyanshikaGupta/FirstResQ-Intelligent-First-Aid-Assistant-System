import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        {/* 🔹 Main Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* 🔸 Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <span className="text-xl font-semibold text-foreground">
                AI First Aid Assistant
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering caregivers with instant, empathetic first aid guidance 
              for children with special needs — powered by intelligent, real-time AI support.
            </p>
          </div>

          {/* 🔸 Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/journey"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Journey
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 🔸 Founders */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Founders</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>Bhavyanshika Gupta</li>
              <li>Vanshika Chauhan</li>
              <li>Piyush Thakur</li>
            </ul>
          </div>
        </div>

        {/* 🔹 Bottom Bar */}
        <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-primary font-medium">AI First Aid Assistant</span> — 
            Built with ❤️ by our team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
