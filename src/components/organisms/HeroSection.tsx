import { motion } from "framer-motion";
import { SectionLabel } from "@/components/atoms/SectionLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

interface HeroSectionProps {
  label: string;
  title: React.ReactNode;
  subtitle: string;
  actions?: React.ReactNode;
}

export function HeroSection({ label, title, subtitle, actions }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(141,20%,88%)] via-[hsl(40,33%,96%)] to-[hsl(183,20%,90%)] py-20 md:py-32">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, hsl(183,30%,80%) 0%, transparent 60%)",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{label}</SectionLabel>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-foreground mb-5"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
          {actions && (
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              {actions}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
