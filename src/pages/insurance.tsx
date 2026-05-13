import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/templates/PageLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { CTABanner } from "@/components/organisms/CTABanner";
import { InsuranceItem } from "@/components/molecules/InsuranceItem";
import { SectionLabel } from "@/components/atoms/SectionLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const INSURERS = [
  "Aetna", "Ambetter", "Cigna Healthcare", "Clover Health", "First Health",
  "PA Health and Wellness", "Medicare", "Pennsylvania Medicaid", "United Healthcare", "Wellcare",
];

export default function Insurance() {
  return (
    <PageLayout>
      <HeroSection
        label="Accessibility for All"
        title="Insurance"
        subtitle="Dr. Tan believes in making healthcare accessible to everyone. We accept a wide range of insurance plans so you can focus on healing, not finances."
      />

      {/* Accepted Insurers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp}><SectionLabel>Coverage</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl font-semibold mb-5 text-foreground">
              Accepting Insurance
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-10 text-lg max-w-2xl">
              At Kasama Philly, we understand that navigating insurance for substance use disorder treatment can be challenging. That's why we accept a wide range of plans. Our substance use disorder treatment — including medication-assisted treatment — is often covered by insurance.
            </motion.p>
            <motion.h3 variants={fadeUp} className="font-serif text-2xl font-semibold mb-6 text-foreground">
              Current Insurances Accepted
            </motion.h3>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {INSURERS.map((ins) => (
                <motion.div key={ins} variants={fadeUp}>
                  <InsuranceItem name={ins} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* No Insurance CTA */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <CTABanner
            title="No Insurance? Contact Us Anyway"
            subtitle="Please reach out even if you don't have insurance — we will do our best to accommodate you. At Kasama Philly, financial concerns should never be a barrier to quality care. Whether through insurance or community resources, we're committed to helping you find the support you need."
            actions={
              <>
                <Button asChild size="lg" className="rounded-full px-7 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                  <Link href="/contact"><Mail className="h-4 w-4 mr-2" /> Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 border-primary/40 hover:bg-background/60">
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
