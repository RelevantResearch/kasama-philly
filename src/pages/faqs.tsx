import { motion } from "framer-motion";
import { PageLayout } from "@/components/templates/PageLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { FAQItem } from "@/components/organisms/FAQSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FAQ_CATEGORIES: { id: string; label: string; faqs: FAQItem[] }[] = [
  {
    id: "treatment",
    label: "Treatment Options",
    faqs: [
      { q: "What is substance use disorder treatment, and why is it effective?", a: "Substance use disorder treatment combines medical, psychological, and behavioral interventions to help individuals overcome substance dependence. Effective treatments often include counseling, therapy, and medication-assisted treatment (MAT) to support recovery from both physical cravings and mental health challenges." },
      { q: "What are the main options for medication-assisted treatment, and who are they for?", a: "MAT for opioid use disorder includes buprenorphine (Suboxone) and extended-release naltrexone (Vivitrol). For alcohol dependence, medications such as naltrexone and acamprosate are used to reduce cravings and prevent relapse. Each option is tailored to the specific needs of the patient." },
      { q: "How does Kasama Philly ensure treatment is person-centered?", a: "We start with an assessment that includes understanding each patient's medical history, mental health, and goals. This enables us to create a personalized treatment plan aligned with the individual's unique situation." },
      { q: "What is the harm reduction model, and how does it support recovery?", a: "The harm reduction model focuses on minimizing negative consequences of substance use rather than enforcing immediate abstinence. This includes safer usage strategies, education on preventing overdose, or needle exchange programs. This model meets patients where they are, promoting health and safety." },
      { q: "Is telemedicine available for substance use disorder treatments?", a: "Yes, Kasama Philly offers telemedicine for substance use disorder treatments, allowing patients to access counseling and follow-up appointments from home. This is particularly beneficial for patients who have transportation challenges." },
      { q: "How does outpatient treatment differ from traditional detox?", a: "Traditional detox involves a stay of several days where providers medically supervise withdrawal symptoms around the clock. Outpatient treatment allows a patient to continue working and spending time with family and involves visits on a weekly, monthly, and every few months basis." },
    ],
  },
  {
    id: "medication",
    label: "Medication & Recovery",
    faqs: [
      { q: "What is medication-assisted treatment for substance use disorders, and how does it work?", a: "MAT combines FDA-approved medications with counseling and behavioral therapies. Medications like buprenorphine or naltrexone help reduce cravings and manage withdrawal symptoms, making it easier for patients to stay engaged in the recovery process." },
      { q: "Are medications for alcohol use disorder safe for long-term use?", a: "Yes, medications for alcohol use disorder like naltrexone are safe for long-term use when monitored by a healthcare professional. These medications help manage cravings and reduce the risk of relapse." },
      { q: "What can I expect at a buprenorphine treatment center?", a: "At Kasama Philly, patients receive buprenorphine (often as Suboxone) combined with counseling and behavioral therapies to support a full recovery journey, emphasizing both physical and emotional healing." },
      { q: "How is an assessment for substance use disorder conducted?", a: "An assessment involves a comprehensive review of a patient's health, substance use history, and personal goals. This helps design an effective, individualized treatment plan." },
      { q: "Can medication-assisted treatment be combined with other therapies?", a: "Yes. At Kasama Philly, MAT is integrated with counseling, behavioral therapy, and family support, addressing both physical and emotional aspects of addiction." },
      { q: "What are the different medications for alcohol use disorder?", a: "Kasama Philly offers naltrexone and acamprosate — medications effective in reducing cravings and preventing relapse, supporting long-term sobriety." },
    ],
  },
  {
    id: "family",
    label: "Family & Support",
    faqs: [
      { q: "How can families support a loved one in substance use disorder treatment?", a: "Families can stay informed, attend clinical sessions, and provide emotional support. Understanding harm reduction principles can help family members approach their loved one's journey with empathy and patience." },
      { q: "What is the role of family in creating a treatment plan?", a: "At Kasama Philly, family involvement is encouraged where possible. We work with families to support the patient's treatment plan, strengthening the recovery process." },
      { q: "Does harm reduction counseling include family education?", a: "Yes. Harm reduction counseling often includes education for families to help them understand recovery as a gradual process, making it easier to maintain a stable, supportive environment." },
      { q: "Can family therapy be part of substance use disorder treatment?", a: "Yes, family therapy is often integrated to help improve communication, resolve conflicts, and build a support system around the patient." },
      { q: "What should families know about medication-assisted treatment?", a: "MAT is a well-supported, evidence-based approach. Knowing that medications help reduce cravings and stabilize recovery can empower families to support their loved one's journey with confidence." },
      { q: "How can families help prevent relapse?", a: "Families can encourage regular follow-ups, participate in counseling, and be aware of triggers. Medications can also help sustain recovery with family encouragement." },
    ],
  },
  {
    id: "longterm",
    label: "Long-Term Recovery",
    faqs: [
      { q: "How does Kasama Philly support patients in long-term recovery?", a: "Our values-driven addiction care focuses on continuous support, from initial treatment through many years after. We provide resources, counseling, and regular check-ins to help patients sustain their recovery and make long-term lifestyle changes." },
      { q: "What is included in a treatment plan after a person stops using substances?", a: "Aftercare may include ongoing medication, relapse prevention counseling, and referrals to community resources. This personalized approach helps maintain progress throughout treatment." },
      { q: "How do medications for alcohol use disorder support lasting sobriety?", a: "Medications like naltrexone help by reducing cravings and providing stability, making it easier for individuals to avoid alcohol. Combined with counseling, they create a balanced, long-term approach to recovery." },
      { q: "What are common strategies for preventing relapse?", a: "Relapse prevention includes identifying triggers, building a support network, and using tools like MAT. By staying proactive, patients can reduce the risk of relapse and maintain their progress." },
      { q: "How often should patients return for follow-up assessments?", a: "Regular follow-up assessments, based on individual needs, allow monitoring of progress and adjustments to the treatment plan to ensure patients remain on track." },
      { q: "Does Kasama Philly offer harm reduction as part of aftercare treatment?", a: "Yes. The harm reduction model continues into all stages of treatment, providing practical strategies to reduce risks and avoid relapse, including education on managing triggers." },
    ],
  },
];

export default function FAQs() {
  return (
    <PageLayout>
      <HeroSection
        label="Understanding Your Care, One Question at a Time"
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about treatment options, medications, family support, and long-term recovery."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Tabs defaultValue="treatment">
              <TabsList className="flex flex-wrap h-auto gap-2 bg-muted p-2 rounded-2xl mb-10">
                {FAQ_CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="rounded-xl text-sm px-4 py-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {FAQ_CATEGORIES.map((cat) => (
                <TabsContent key={cat.id} value={cat.id}>
                  <Accordion type="single" collapsible className="space-y-3">
                    {cat.faqs.map((faq, i) => (
                      <AccordionItem
                        key={i}
                        value={`${cat.id}-${i}`}
                        className="bg-card rounded-2xl border border-border px-6"
                      >
                        <AccordionTrigger className="text-left font-medium text-foreground py-5 hover:no-underline hover:text-primary">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
