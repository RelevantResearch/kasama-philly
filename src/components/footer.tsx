import { Link } from "wouter";
import { HeartHandshake, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-8">
          
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <HeartHandshake className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-semibold">Kasama Philly</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A compassionate addiction medicine and harm reduction clinic in Philadelphia, PA. 
              Having a companion along the journey.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-primary/80 pt-2">
              <span className="bg-primary/10 px-2 py-1 rounded">ABPM Certified</span>
              <span className="bg-primary/10 px-2 py-1 rounded">ASAM Certified</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link>
              <Link href="/our-philosophy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Philosophy</Link>
              <Link href="/insurance" className="text-muted-foreground hover:text-primary transition-colors text-sm">Insurance</Link>
              <Link href="/faqs" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQs</Link>
              <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors text-sm">Resources</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>2418 E York St<br/>Philadelphia, PA 19125</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:2672176438" className="hover:text-primary">(267) 217-6438</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:marissa.tan@kasamaphilly.org" className="hover:text-primary">marissa.tan@kasamaphilly.org</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Mon–Fri: Closed</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-4 w-4 shrink-0" />
                <span>Sat–Sun: 8:00 am – 5:00 pm</span>
              </li>
            </ul>
            <div className="pt-4">
              <a 
                href="https://www.zocdoc.com/doctor/marissa-tan-do-mph-570473" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90"
              >
                Book via ZocDoc
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kasama Philly. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
