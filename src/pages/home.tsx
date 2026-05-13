import { motion } from "framer-motion";
import { Link } from "wouter";
import { Pill, ShieldCheck, HeartHandshake, Users, ChevronRight, Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/templates/PageLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { CTABanner } from "@/components/organisms/CTABanner";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { PhilosophyCard } from "@/components/molecules/PhilosophyCard";
import { SectionLabel } from "@/components/atoms/SectionLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const SERVICES = [
  {
    icon: <Pill className="h-7 w-7 text-primary" />,
    title: "Medication-Assisted Treatment",
    desc: "Suboxone, Vivitrol, Naltrexone, and more — tailored to your recovery needs with clinical counseling.",
    href: "/services",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-primary" />,
    title: "Infectious Disease Care",
    desc: "Hepatitis C and HIV testing, treatment, and Fibroscan technology for comprehensive health monitoring.",
    href: "/services",
  },
  {
    icon: <HeartHandshake className="h-7 w-7 text-primary" />,
    title: "Harm Reduction Counseling",
    desc: "Empowering, judgment-free support that meets you where you are on your unique journey.",
    href: "/services",
  },
  {
    icon: <Users className="h-7 w-7 text-primary" />,
    title: "Community Referrals",
    desc: "Connections to housing, employment, and essential community resources to support your whole life.",
    href: "/services",
  },
];

const PHILOSOPHIES = [
  { title: "Open & Transparent", desc: "We believe in honest, empowering communication at every step." },
  { title: "Accessible to All", desc: "We accept multiple insurances and work to remove financial barriers." },
  { title: "Harm Reduction First", desc: "Meeting you where you are — with safety and compassion." },
  { title: "Your Self-Determination", desc: "Your goals, your pace, your journey. We walk alongside you." },
];

export default function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <HeroSection
        label="Addiction Medicine & Harm Reduction · Philadelphia, PA"
        title={
          <>
            Having a <em>kasama</em> along the journey
          </>
        }
        subtitle="Kasama means companion in Filipino. Dr. Marissa Tan and the Kasama Philly team walk beside you — through the ups, downs, and everything in between."
        actions={
          <>
            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              <a href="https://www.zocdoc.com/doctor/marissa-tan-do-mph-570473" target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="h-4 w-4 mr-2" /> Book Appointment
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary/40 text-foreground hover:bg-muted">
              <Link href="/services">
                Explore Services <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </>
        }
      />

      {/* Services */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-center mb-14">
            <motion.div variants={fadeUp}><SectionLabel>What We Offer</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Comprehensive Recovery Care
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              A full spectrum of services addressing the medical, emotional, and social dimensions of recovery.
            </motion.p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <ServiceCard icon={s.icon} title={s.title} description={s.desc} href={s.href} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Dr. Tan */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp}><SectionLabel>About Your Doctor</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
                Meet Dr. Marissa Tan
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-5 text-lg">
                Board certified in preventive medicine and addiction medicine, with 4+ years of dedicated experience. Local to Philadelphia and speaks both English and Spanish.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8">
                Kasama Philly was founded as an homage to her father, Dr. Edwin Tan — a Filipino psychiatrist who navigated multiple cultural contexts to create family and care for patients.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button asChild variant="outline" className="rounded-full px-6 border-primary/40 hover:bg-background">
                  <Link href="/our-philosophy">Our Philosophy <ChevronRight className="h-4 w-4 ml-1" /></Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {PHILOSOPHIES.map((p, i) => (
                <motion.div key={p.title} variants={fadeUp}>
                  <PhilosophyCard index={i + 1} title={p.title} description={p.desc} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <CTABanner
            label="Accessible Care"
            title="We Accept Most Major Insurances"
            subtitle="Including Aetna, Cigna, Medicare, Pennsylvania Medicaid, United Healthcare, and more. No insurance? Contact us anyway — financial concerns should never be a barrier to care."
            actions={
              <>
                <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow">
                  <Link href="/insurance">View Insurance Details</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary/40 hover:bg-background/60">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </>
            }
          />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection bg="bg-muted" limit={3} />

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <CTABanner
            title="Begin Your Journey With Kasama"
            subtitle="You don't have to walk this path alone. Call us, send a message, or book a consultation today."
            bg="bg-transparent"
            actions={
              <>
                <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                  <a href="https://www.zocdoc.com/doctor/marissa-tan-do-mph-570473" target="_blank" rel="noopener noreferrer">
                    <CalendarCheck className="h-4 w-4 mr-2" /> Book on ZocDoc
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary/40">
                  <a href="tel:2672176438"><Phone className="h-4 w-4 mr-2" /> (267) 217-6438</a>
                </Button>
              </>
            }
          />
        </div>
      </section>
    </PageLayout>
  );
}
