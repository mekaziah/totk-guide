import { motion } from "framer-motion";
import { ScrollText, CheckCircle2 } from "lucide-react";
import { WALKTHROUGH_STEPS } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";

export default function Walkthrough() {
  return (
    <div className="p-6 lg:p-12 max-w-5xl mx-auto">
      <PageHeader 
        title="Walkthrough" 
        description="A step-by-step guide to the main quest, from your awakening on the Great Sky Island to the final confrontation beneath Hyrule Castle."
        icon={<ScrollText className="h-12 w-12" />}
      />

      <div className="space-y-12">
        {WALKTHROUGH_STEPS.map((section, idx) => (
          <motion.section 
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-8 border-l border-primary/30"
          >
            <div className="absolute w-4 h-4 rounded-full bg-primary -left-[8.5px] top-1 zonai-glow" />
            <h2 className="text-2xl font-serif text-accent mb-2">{section.title}</h2>
            <p className="text-muted-foreground mb-6">{section.description}</p>
            
            <div className="space-y-3">
              {section.steps.map((step, stepIdx) => (
                <div key={stepIdx} className="flex items-start gap-3 bg-card/40 p-4 rounded border border-border/50 hover:border-primary/50 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{step}</span>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
