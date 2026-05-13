import { motion } from "framer-motion";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export const TESTIMONIALS = [
  {
    quote:
      "The addiction recovery service was a beacon of hope for me. The compassionate approach of the staff made all the difference in my recovery journey.",
    initials: "E.E.",
  },
  {
    quote:
      "Thanks to this program, I have a new lease on life. The skills I learned have helped me stay sober and build healthier relationships.",
    initials: "D.D.",
  },
  {
    quote:
      "This service helped me find my strength again. The community support was invaluable, and I felt a sense of belonging that I hadn't experienced in years.",
    initials: "C.C.",
  },
  {
    quote:
      "I cannot express how grateful I am for the help I received. The program was well-structured, and the counselors were genuinely invested in my recovery.",
    initials: "B.B.",
  },
  {
    quote:
      "The addiction recovery service provided me with the tools I needed to reclaim my life. The staff was incredibly supportive and understanding.",
    initials: "A.A.",
  },
];

interface TestimonialsSectionProps {
  bg?: string;
  limit?: number;
}

export function TestimonialsSection({ bg = "bg-muted", limit }: TestimonialsSectionProps) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <section className={`py-16 md:py-24 ${bg}`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Patient Stories</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground"
          >
            What Patients Are Saying
          </motion.h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((t) => (
            <motion.div key={t.initials} variants={fadeUp}>
              <TestimonialCard quote={t.quote} initials={t.initials} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
