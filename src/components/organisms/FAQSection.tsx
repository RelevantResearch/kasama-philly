import { motion } from "framer-motion";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  label?: string;
  title?: string;
  faqs: FAQItem[];
  idPrefix: string;
  bg?: string;
}

export function FAQSection({
  label = "FAQ",
  title = "Common Questions",
  faqs,
  idPrefix,
  bg = "bg-muted",
}: FAQSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${bg}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{label}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl font-semibold mb-10 text-foreground"
          >
            {title}
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`${idPrefix}-${i}`}
                  className="bg-background rounded-2xl border border-border px-6"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
