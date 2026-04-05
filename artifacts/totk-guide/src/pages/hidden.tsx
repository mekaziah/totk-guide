import { Eye } from "lucide-react";
import { HIDDEN_AREAS } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HiddenAreas() {
  return (
    <div className="p-6 lg:p-12 max-w-6xl mx-auto">
      <PageHeader 
        title="Hidden Areas" 
        description="Venture off the beaten path. These unmarked locations hold rare loot and formidable challenges."
        icon={<Eye className="h-12 w-12" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {HIDDEN_AREAS.map((area, idx) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full bg-card/40 hover:bg-card/60 transition-colors border-border/50 hylian-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-secondary">{area.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{area.description}</p>
                <div className="flex justify-between items-center text-sm border-t border-border/50 pt-4">
                  <span className="text-foreground/70">{area.location}</span>
                  <span className="font-mono text-primary bg-primary/10 px-2 py-1 rounded">{area.coords}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
