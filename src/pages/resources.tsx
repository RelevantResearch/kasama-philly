import { motion } from "framer-motion";
import { PageLayout } from "@/components/templates/PageLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { BlogCard } from "@/components/molecules/BlogCard";
import { SectionLabel } from "@/components/atoms/SectionLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const RESOURCE_CATEGORIES = [
  "Medication for Addiction Treatment (MAT)",
  "Infectious Disease Screening and Treatment",
  "Harm Reduction Counseling",
  "Referrals for Additional Needs",
];

export default function Resources() {
  return (
    <PageLayout>
      <HeroSection
        label="Support In and Out of the Office"
        title="Resources"
        subtitle="Practical guides, harm reduction strategies, and the latest addiction treatment resources — all in one place."
      />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl font-semibold mb-5 text-foreground">
              Resources for Recovery
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-5 text-lg">
              At Kasama Philly, we know that access to the right resources can make all the difference in recovery. This section connects you to essential addiction recovery resources and information about harm reduction strategies.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-5">
              Have you ever wondered what harm reduction is? This evidence-based approach focuses on reducing the health risks associated with substance use. Our resources include practical guides on harm reduction strategies and how they fit into a recovery plan that prioritizes safety and support.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              Resources also cover health screenings and services that support recovery and overall wellness — including regular testing for bloodborne infections such as Hepatitis C, and emerging treatments like Brixadi and Sublocade. Our resources are updated regularly to keep you informed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Post */}
      <section className="py-8 pb-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp}><SectionLabel>Harm Reduction Counseling</SectionLabel></motion.div>
            <motion.div variants={fadeUp}>
              <BlogCard
                date="January 15, 2025"
                title="What Is Harm Reduction? A Beginner's Guide to Safer Recovery Strategies"
                excerpt="Discover how harm reduction strategies in Philadelphia support safe, compassionate substance use disorder treatment with practical, evidence-based care."
                href="/blog-posts/harm-reduction-in-substance-use-disorder-treatment-kasama-philly"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl font-semibold mb-8 text-foreground">
              Resource Categories
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RESOURCE_CATEGORIES.map((cat) => (
                <motion.div key={cat} variants={fadeUp} className="flex items-center gap-3 bg-muted rounded-xl px-6 py-5">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{cat}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
