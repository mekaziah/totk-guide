import { Navigation } from "lucide-react";
import { ARMOR } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Gear() {
  return (
    <div className="p-6 lg:p-12 max-w-6xl mx-auto">
      <PageHeader 
        title="Gear & Armor" 
        description="Armors not only provide defense but essential environmental protections and powerful set bonuses."
        icon={<Navigation className="h-12 w-12" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ARMOR.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full bg-card/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-serif text-accent">{item.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Pieces</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.pieces.map(piece => (
                      <Badge key={piece} variant="secondary" className="bg-secondary/10 text-secondary">{piece}</Badge>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-border/50 pt-4">
                  <div>
                    <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Effect</h4>
                    <p className="text-primary font-medium">{item.effect}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-foreground/80">{item.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
