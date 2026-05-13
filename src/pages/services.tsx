import { motion } from "framer-motion";
import { Pill, ShieldCheck, HeartHandshake, Users } from "lucide-react";
import { PageLayout } from "@/components/templates/PageLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { FAQSection, FAQItem } from "@/components/organisms/FAQSection";
import { BulletItem } from "@/components/atoms/BulletItem";
import { SectionLabel } from "@/components/atoms/SectionLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SERVICES = [
  {
    icon: <Pill className="h-8 w-8 text-primary" />,
    title: "Medication for Addiction Treatment (MAT)",
    description:
      "Our medication-assisted treatment program combines FDA-approved medications with clinical counseling to address the full scope of recovery needs.",
    items: [
      { name: "Suboxone, Zubsolv, and Subutex", note: "Help manage cravings and withdrawal symptoms safely." },
      { name: "Brixadi, Sublocade, and Vivitrol", note: "Monthly injections for patients who prefer not to take daily medications." },
      { name: "Naltrexone and Acamprosate", note: "Medications for alcohol use disorder." },
    ],
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Infectious Disease Screening and Treatment",
    description:
      "Comprehensive infectious disease screening is part of our initial assessment, creating a strong foundation for long-term recovery.",
    items: [
      { name: "Hepatitis C and HIV", note: "Testing and treatment included." },
      { name: "Fibroscan Technology", note: "Specialized ultrasound to assess liver stiffness." },
      { name: "Overall Health Support", note: "Comprehensive safety monitoring during recovery." },
    ],
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Harm Reduction Counseling",
    description:
      "Harm reduction is a core component of our care. We educate and empower patients to make informed choices that align with their unique recovery path.",
    items: [
      { name: "Risk Reduction Education", note: "Practical strategies to stay safe during recovery." },
      { name: "Overdose Prevention", note: "Naloxone access and training." },
      { name: "Non-Judgmental Support", note: "Meeting you exactly where you are." },
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Referrals for Additional Needs",
    description:
      "We provide referrals beyond substance use disorder treatment to support all aspects of your life and wellbeing.",
    items: [
      { name: "Community Resources", note: "Housing, employment, and essential support networks." },
      { name: "Fibroscans", note: "Non-invasive liver health screening." },
      { name: "Healthcare Connections", note: "Linking patients with additional specialized services." },
    ],
  },
];

const FAQS: FAQItem[] = [
  {
    q: "What is medication-assisted treatment for substance use disorders, and how does it help?",
    a: "MAT combines medications with counseling and behavioral therapies to provide a comprehensive approach to recovery. This treatment reduces cravings, minimizes withdrawal symptoms, and improves patient outcomes by addressing both the physical and psychological aspects of addiction.",
  },
  {
    q: "How does Kasama Philly determine the best substance use disorder treatment?",
    a: "We begin with an assessment to evaluate each patient's specific health needs, addiction history, and personal goals. Based on this, our team develops a personalized treatment plan that may include medication-assisted options, counseling, and additional support services.",
  },
  {
    q: "What medications for alcohol use disorder are available?",
    a: "We offer several FDA-approved options including naltrexone and acamprosate. These medications reduce cravings and prevent return to drinking, helping patients maintain sobriety.",
  },
  {
    q: "Why choose a buprenorphine treatment center like Kasama Philly?",
    a: "As a specialized buprenorphine treatment center, Kasama Philly provides targeted care for patients dealing with opioid addiction. Buprenorphine reduces withdrawal symptoms and cravings, making it an effective option for MAT when combined with counseling.",
  },
];

export default function Services() {
  return (
    <PageLayout>
      <HeroSection
        label="Comprehensive Care"
        title="Our Services"
        subtitle="Empowering recovery through integrated addiction care that addresses the medical, social, and emotional dimensions of your journey."
      />

      {/* Service Blocks */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-3xl border border-border bg-card p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-3 text-foreground">
                    {idx + 1}. {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <BulletItem key={item.name}>
                        <strong className="font-medium">{item.name}</strong>{" "}
                        <span className="text-muted-foreground">— {item.note}</span>
                      </BulletItem>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQSection
        label="Services FAQ"
        title="Common Questions"
        faqs={FAQS}
        idPrefix="services"
        bg="bg-muted"
      />
    </PageLayout>
  );
}
