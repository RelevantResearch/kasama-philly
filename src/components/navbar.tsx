import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/our-philosophy", label: "Our Philosophy" },
    { href: "/insurance", label: "Insurance" },
    { href: "/faqs", label: "FAQs" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <HeartHandshake className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
          <span className="font-serif text-2xl font-semibold text-foreground tracking-wide">
            Kasama Philly
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="https://www.zocdoc.com/doctor/marissa-tan-do-mph-570473" target="_blank" rel="noopener noreferrer">
              Book Appointment
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium px-4 py-2 rounded-md ${
                  location === link.href ? "bg-muted text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90">
                <a href="https://www.zocdoc.com/doctor/marissa-tan-do-mph-570473" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
