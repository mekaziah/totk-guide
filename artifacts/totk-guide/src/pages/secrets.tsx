import { Sparkles } from "lucide-react";
import { SECRETS } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function Secrets() {
  return (
    <div className="p-6 lg:p-12 max-w-4xl mx-auto">
      <PageHeader 
        title="Secrets & Easter Eggs" 
        description="Hyrule is filled with hidden mechanics, lore callbacks, and secret interactions. Uncover the unseen."
        icon={<Sparkles className="h-12 w-12" />}
      />

      <div className="space-y-8">
        {SECRETS.map((secret, idx) => (
          <motion.div
            key={secret.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-lg bg-card/30 border border-border hover:border-primary/50 transition-colors hylian-border"
          >
            <h2 className="text-2xl font-serif text-accent mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              {secret.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{secret.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
