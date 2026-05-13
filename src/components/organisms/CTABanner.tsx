import { motion } from "framer-motion";
import { SectionLabel } from "@/components/atoms/SectionLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

interface CTABannerProps {
  label?: string;
  title: string;
  subtitle: string;
  actions: React.ReactNode;
  bg?: string;
}

export function CTABanner({
  label,
  title,
  subtitle,
  actions,
  bg = "bg-gradient-to-br from-[hsl(141,20%,88%)] to-[hsl(183,25%,88%)]",
}: CTABannerProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`rounded-3xl ${bg} p-8 md:p-12 lg:p-16 text-center`}
    >
      {label && (
        <motion.div variants={fadeUp}>
          <SectionLabel>{label}</SectionLabel>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-serif text-3xl md:text-4xl font-semibold mb-5 text-foreground"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg leading-relaxed"
      >
        {subtitle}
      </motion.p>
      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
        {actions}
      </motion.div>
    </motion.div>
  );
}
