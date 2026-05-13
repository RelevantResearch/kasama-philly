import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft, Calendar } from "lucide-react";
import { PageLayout } from "@/components/templates/PageLayout";
import { BulletItem } from "@/components/atoms/BulletItem";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const WHY_EFFECTIVE = [
  { title: "Reduces Risks", desc: "Tools like overdose prevention kits and sterile equipment programs lower immediate dangers tied to substance use." },
  { title: "Builds Trust", desc: "By creating a judgment-free environment, harm reduction fosters open communication between patients and providers." },
  { title: "Supports Individual Goals", desc: "Patients choose their own health objectives, whether safer usage, reducing use, or achieving abstinence." },
  { title: "Addresses Overall Health", desc: "Harm reduction often includes housing support, mental health counseling, and infectious disease care." },
];

const STRATEGIES = [
  { name: "Education for Safer Use", desc: "Teaching patients safer ways to use substances, such as avoiding dangerous combinations or using sterile equipment." },
  { name: "Overdose Prevention", desc: "Providing naloxone (Narcan) and training patients to prevent fatal overdoses." },
  { name: "Sterile Needle Programs", desc: "Reducing the spread of infections like Hepatitis C and HIV by providing sterile supplies." },
  { name: "Medication for Addiction Treatment (MAT)", desc: "Using medications like buprenorphine or naltrexone to manage cravings and withdrawal symptoms." },
  { name: "Access to Resources", desc: "Connecting patients with support for housing, employment, and healthcare." },
];

const KASAMA_IMPLEMENTS = [
  { name: "Harm Reduction Counseling", desc: "Educating and empowering patients to make informed decisions about their health and recovery." },
  { name: "Medication for Addiction Treatment (MAT)", desc: "Options like Suboxone, Sublocade, and naltrexone help reduce cravings and withdrawal symptoms." },
  { name: "Infectious Disease Screening", desc: "Testing and treatment for conditions like Hepatitis C and HIV." },
  { name: "Telemedicine Services", desc: "A hybrid model ensuring high-quality care whether at home or in the Philadelphia clinic." },
];

const INLINE_FAQS = [
  { q: "Is harm reduction only for people actively using substances?", a: "No, harm reduction supports individuals at all stages of recovery. Whether managing substance use, maintaining abstinence, or seeking help for the first time, harm reduction strategies can enhance safety and well-being." },
  { q: "Does harm reduction promote substance use?", a: "Not at all. Harm reduction focuses on reducing risks and supporting healthier choices. It respects each individual's journey and builds a foundation for long-term recovery." },
  { q: "Can harm reduction be part of comprehensive treatment?", a: "Yes. Harm reduction works seamlessly alongside counseling, behavioral therapy, and medication for addiction treatment (MAT) to provide holistic care." },
];

export default function BlogHarmReduction() {
  return (
    <PageLayout>
      {/* Article Hero */}
      <section className="bg-gradient-to-br from-[hsl(141,20%,88%)] via-background to-[hsl(183,20%,90%)] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-6">
              <Link href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <ChevronLeft className="h-4 w-4 mr-1" /> Back to Resources
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="text-primary font-medium tracking-widest text-sm uppercase mb-3">
              Harm Reduction Counseling
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-semibold mb-5 text-foreground leading-tight">
              What Is Harm Reduction? A Beginner's Guide to Safer Recovery Strategies
            </motion.h1>
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="h-4 w-4" />
              <span>January 15, 2025</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-12">

            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              Harm reduction plays a crucial role in substance use disorder treatment by focusing on health and safety without requiring immediate abstinence. At Kasama Philly, we believe supporting individuals through their recovery journey means meeting them where they are and providing practical, compassionate care.
            </motion.p>

            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-3xl font-semibold mb-4 text-foreground">What Is Harm Reduction?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Harm reduction includes strategies and practices designed to reduce the negative consequences of substance use. Instead of demanding abstinence right away, harm reduction allows individuals to set their own goals for recovery while staying safe and supported. This approach centers on your health and autonomy, ensuring your recovery journey reflects your needs and circumstances.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">Why Is Harm Reduction Effective?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_EFFECTIVE.map((item) => (
                  <div key={item.title} className="bg-muted rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">Examples of Harm Reduction Strategies</h2>
              <ul className="space-y-4">
                {STRATEGIES.map((s) => (
                  <BulletItem key={s.name}>
                    <strong className="font-medium">{s.name}:</strong>{" "}
                    <span className="text-muted-foreground">{s.desc}</span>
                  </BulletItem>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">How Kasama Philly Implements Harm Reduction</h2>
              <div className="space-y-4">
                {KASAMA_IMPLEMENTS.map((item) => (
                  <div key={item.name} className="flex items-start gap-4 bg-muted rounded-xl p-5">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{item.name}: </span>
                      <span className="text-muted-foreground">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">FAQs About Harm Reduction</h2>
              <div className="space-y-5">
                {INLINE_FAQS.map((faq) => (
                  <div key={faq.q} className="border-l-2 border-primary/30 pl-5">
                    <p className="font-medium text-foreground mb-2">{faq.q}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-[hsl(141,20%,88%)] to-[hsl(183,25%,88%)] p-8">
              <h2 className="font-serif text-2xl font-semibold mb-4 text-foreground">Why Harm Reduction Matters for Philadelphia</h2>
              <p className="text-muted-foreground leading-relaxed">
                In a city like Philadelphia, where substance use disorder impacts many lives, harm reduction saves lives and strengthens communities. By meeting patients where they are, harm reduction addresses the unique challenges of the local population. Kasama Philly is proud to offer compassionate care that respects your journey and empowers you to achieve your goals.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
