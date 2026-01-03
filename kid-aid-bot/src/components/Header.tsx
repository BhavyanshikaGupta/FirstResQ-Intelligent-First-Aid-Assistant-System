"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginDialog from "./LoginDialog";
import { useUser } from "./context/UserContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Auto scroll when hash changes (like #features)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [location]);

  // 🔹 Scroll smoothly to section or navigate with hash
  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn(`Section with ID '${id}' not found`);
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* 🔹 Logo + Title */}
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary fill-primary" aria-hidden="true" />
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-semibold hover:text-primary transition-colors duration-200"
            >
              AI First Aid Assistant
            </button>
          </div>

          {/* 🔹 Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-foreground/90">
            <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("features")} className="hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("journey")} className="hover:text-primary transition-colors">
              Journey
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
              Contact
            </button>

            {/* 🔹 Login / Profile */}
            {!user ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("http://127.0.0.1:5000/login", "_blank")}
              >
                Login
              </Button>
            ) : (
              <Link
                to="/profile"
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                {user.name || "Profile"}
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* 🔹 Login Dialog */}
      {isLoginOpen && (
        <LoginDialog onClose={() => setIsLoginOpen(false)} onLogin={() => setIsLoginOpen(false)} />
      )}
    </>
  );
};

export default Header;
