import { motion } from "framer-motion";
import { Brain, Flame, Users, Heart, Cigarette } from "lucide-react";
import { PageLayout } from "@/components/templates/PageLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { FAQSection, FAQItem } from "@/components/organisms/FAQSection";
import { PhilosophyCard } from "@/components/molecules/PhilosophyCard";
import { SpecialtyCard } from "@/components/molecules/SpecialtyCard";
import { SectionLabel } from "@/components/atoms/SectionLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const SPECIALTIES = [
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Trauma-Informed Care",
    desc: "Dr. Tan specializes in treating patients with co-occurring mental health and substance use disorders, addressing both conditions simultaneously with a person-centered approach.",
  },
  {
    icon: <Flame className="h-6 w-6 text-primary" />,
    title: "MAT & Relapse Prevention",
    desc: "Offering buprenorphine and naltrexone to manage cravings, alongside relapse prevention coaching to help patients identify triggers and build coping mechanisms.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Holistic Care & Community Support",
    desc: "Through community resource navigation, Dr. Tan helps patients connect with housing, employment, and essential support services.",
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Stimulant Use & Behavioral Addictions",
    desc: "Specialized care for stimulant use disorders (cocaine, methamphetamine) and behavioral addictions (gambling) with tailored treatment plans.",
  },
  {
    icon: <Cigarette className="h-6 w-6 text-primary" />,
    title: "Nicotine Addiction & Smoking Cessation",
    desc: "Personalized smoking cessation programs and nicotine addiction care, often alongside other substance use disorder treatment for comprehensive health improvement.",
  },
];

const PHILOSOPHIES = [
  {
    title: "Open and Transparent",
    desc: "Open communication ensures patients feel informed and empowered at every stage of their recovery journey. Transparency fosters trust and true partnership.",
  },
  {
    title: "Accessible to All",
    desc: "Dr. Tan is dedicated to making treatment accessible. We help patients navigate insurance options and offer financial guidance so everyone can receive support.",
  },
  {
    title: "Prevention and Harm Reduction",
    desc: "Our clinic follows a harm reduction model that prioritizes safety and meets patients where they are, emphasizing practical steps to minimize risks.",
  },
  {
    title: "Self-Determination",
    desc: "Empowering patients to make their own choices is fundamental to sustainable recovery. We respect each individual's journey and encourage autonomy.",
  },
];

const FAQS: FAQItem[] = [
  {
    q: "What is Kasama Philly's approach to addiction treatment?",
    a: "Our philosophy is built on values-driven addiction care that respects each patient's dignity and autonomy. Using a person-centered recovery approach, Dr. Tan tailors treatment plans to meet each patient's unique needs.",
  },
  {
    q: "How does harm reduction work in your treatments?",
    a: "Our harm reduction model focuses on minimizing the risks associated with substance use rather than solely emphasizing abstinence. This creates a safe, non-judgmental environment wherever patients are in their recovery.",
  },
  {
    q: "Is Kasama Philly's approach suitable for holistic recovery?",
    a: "Yes. Dr. Tan integrates physical, emotional, and social aspects of healing into each treatment plan, ensuring patients receive well-rounded care that addresses all facets of their life.",
  },
];

export default function OurPhilosophy() {
  return (
    <PageLayout>
      <HeroSection
        label="Companionship Throughout Your Journey"
        title="Our Philosophy"
        subtitle="Grounded in compassion, guided by evidence, and driven by deep respect for every individual's unique path to recovery."
      />

      {/* Dr. Tan Bio */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp}><SectionLabel>About Your Doctor</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-foreground">
              Meet Dr. Tan
            </motion.h2>
            <motion.div variants={fadeUp} className="bg-muted rounded-3xl p-8 md:p-12 space-y-5">
              <p className="text-foreground leading-relaxed text-lg">
                Dr. Marissa Tan is board certified in preventive medicine and addiction medicine, with 4+ years working in addiction medicine. She is local to Philadelphia and speaks English and Spanish.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Tan started Kasama Philly to provide care to patients authentically and as an homage to her father, Dr. Edwin Tan, a Filipino psychiatrist who navigated multiple cultural contexts to create family and care for patients. On the journey of navigating substance use disorders, Kasama Philly offers having a <em>kasama</em> — a companion — along the ups, downs, and in-betweens.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In her spare time, Dr. Tan enjoys biking and walking in Philadelphia, playing board games with her spouse, learning Spanish, and cooking vegetarian dishes.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">Board Certified — ABPM</span>
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">Board Certified — ASAM</span>
                <span className="bg-secondary/10 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium">English & Spanish</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp}><SectionLabel>Areas of Expertise</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-semibold mb-10 text-foreground">
              Specialties
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SPECIALTIES.map((s) => (
                <motion.div key={s.title} variants={fadeUp}>
                  <SpecialtyCard icon={s.icon} title={s.title} description={s.desc} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophies */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp}><SectionLabel>What We Believe</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-semibold mb-10 text-foreground">
              Core Philosophies
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PHILOSOPHIES.map((p, i) => (
                <motion.div key={p.title} variants={fadeUp}>
                  <PhilosophyCard index={i + 1} title={p.title} description={p.desc} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FAQSection
        label="Philosophy FAQ"
        title="Common Questions"
        faqs={FAQS}
        idPrefix="philosophy"
        bg="bg-muted"
      />
    </PageLayout>
  );
}
