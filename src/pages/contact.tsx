import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageLayout } from "@/components/templates/PageLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { ContactInfoItem } from "@/components/molecules/ContactInfoItem";
import { SectionLabel } from "@/components/atoms/SectionLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const CONTACT_INFO = [
  { icon: <Phone className="h-5 w-5 text-primary" />, label: "Phone", value: "(267) 217-6438", href: "tel:2672176438" },
  { icon: <Mail className="h-5 w-5 text-primary" />, label: "Email", value: "marissa.tan@kasamaphilly.org", href: "mailto:marissa.tan@kasamaphilly.org" },
  { icon: <MapPin className="h-5 w-5 text-primary" />, label: "Address", value: "2418 E York St, Philadelphia, PA 19125", href: "https://maps.google.com/?q=2418+E+York+St+Philadelphia+PA+19125" },
  { icon: <Clock className="h-5 w-5 text-primary" />, label: "Hours", value: "Mon–Fri: Closed  |  Sat–Sun: 8:00 am – 5:00 pm" },
];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <Mail className="h-7 w-7 text-primary" />
        </div>
        <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">Message Received</h3>
        <p className="text-muted-foreground leading-relaxed">
          Thank you for reaching out. Dr. Tan and the team will be in touch with you soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-medium">Your Name</Label>
          <Input id="name" data-testid="input-name" required placeholder="Jane Smith" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-xl border-border bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
          <Input id="email" type="email" data-testid="input-email" required placeholder="jane@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-xl border-border bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
          <Textarea id="message" data-testid="input-message" required placeholder="Tell us a little about what brings you here..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="rounded-xl border-border bg-background resize-none" />
        </div>
        <Button type="submit" data-testid="button-submit" size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
          Send Message
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          If affordability is a concern, please mention it — we will explore options together.
        </p>
      </form>
    </>
  );
}

export default function Contact() {
  return (
    <PageLayout>
      <HeroSection
        label="Begin Your Journey"
        title="Contact Us"
        subtitle="Whether you're ready to start or just have questions, Dr. Tan and the Kasama Philly team are here for you."
      />

      {/* Contact Info + Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Left: Info */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp}><SectionLabel>Get In Touch</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Begin Your Journey With Kasama
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8">
                Contact Kasama Philly for compassionate support and guidance on your journey to recovery. Dr. Marissa Tan and the team are here to provide accessible, understanding care.
              </motion.p>
              <motion.div variants={stagger} className="space-y-5 mb-8">
                {CONTACT_INFO.map((info) => (
                  <motion.div key={info.label} variants={fadeUp}>
                    <ContactInfoItem icon={info.icon} label={info.label} value={info.value} href={info.href} />
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}>
                <Button asChild size="lg" className="rounded-full px-7 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md w-full sm:w-auto">
                  <a href="https://www.zocdoc.com/doctor/marissa-tan-do-mph-570473" target="_blank" rel="noopener noreferrer">
                    <CalendarCheck className="h-4 w-4 mr-2" /> Book Appointment on ZocDoc
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialsSection bg="bg-muted" />
    </PageLayout>
  );
}
