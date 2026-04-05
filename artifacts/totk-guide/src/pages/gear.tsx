import { Navigation, MapPin } from "lucide-react";
import { ARMOR, type ArmorSet } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { VideoLink } from "@/components/VideoLink";
import { ItemImage } from "@/components/ItemImage";
import { ArmorImage } from "@/components/Lightbox";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ArmorCard({ item, idx }: { item: ArmorSet; idx: number }) {
  const imageSrc = `${import.meta.env.BASE_URL}armor/${item.id}.png`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
    >
      <Card className="h-full bg-card/50 hover:border-primary/50 transition-colors flex flex-col">
        {/* Armor set image with lightbox */}
        <ArmorImage
          src={imageSrc}
          alt={item.name}
          className="w-full aspect-[4/3] border-b border-border/40"
        />

        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg font-serif text-accent leading-tight">{item.name}</CardTitle>
            <Badge variant="secondary" className="shrink-0 bg-primary/10 text-primary text-xs">
              {item.pieces.length} {item.pieces.length === 1 ? "piece" : "pieces"}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 flex-1 flex flex-col">
          {/* Effect & Set Bonus */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground uppercase tracking-wider text-xs mb-1">Effect</p>
              <p className="text-primary font-medium">{item.effect}</p>
            </div>
            <div>
              <p className="text-muted-foreground uppercase tracking-wider text-xs mb-1">Set Bonus</p>
              <p className="text-foreground/80">{item.setBonus}</p>
            </div>
          </div>

          {/* Upgrade bonus */}
          <div className="text-sm border-t border-border/40 pt-3">
            <p className="text-muted-foreground uppercase tracking-wider text-xs mb-1">Upgrade Bonus</p>
            <p className="text-foreground/70 text-xs">{item.upgradeBonus}</p>
          </div>

          {/* Individual pieces with images + coordinates */}
          <div className="border-t border-border/40 pt-3 space-y-3 flex-1">
            <p className="text-muted-foreground uppercase tracking-wider text-xs">Piece Locations</p>
            {item.pieces.map((piece) => (
              <div key={piece.name} className="bg-muted/20 rounded-md p-3 space-y-1.5">
                <div className="flex items-center gap-3">
                  <ItemImage name={piece.name} type="armor" size={40} className="shrink-0 rounded" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-foreground font-medium text-sm">{piece.name}</span>
                      <span className="text-xs text-muted-foreground shrink-0">DEF {piece.defense}</span>
                    </div>
                    <p className="text-foreground/70 text-xs leading-snug">{piece.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 pl-1">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-primary shrink-0" />
                    <span className="text-primary font-mono text-xs">{piece.coords}</span>
                  </div>
                  <VideoLink name={piece.name} extraTerms="location totk" />
                </div>
              </div>
            ))}
          </div>

          {/* Full set guide */}
          <div className="border-t border-border/40 pt-3 flex items-center justify-between">
            <span className="text-muted-foreground text-xs">Full set guide</span>
            <VideoLink name={item.name} extraTerms="all pieces location totk" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Gear() {
  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto">
      <PageHeader
        title="Gear & Armor"
        description={`${ARMOR.length} armor sets — click any set image to view it up close. Each piece shows its exact coordinates and a video guide link. Set bonuses unlock at Great Fairy Fountains.`}
        icon={<Navigation className="h-12 w-12" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {ARMOR.map((item, idx) => (
          <ArmorCard key={item.id} item={item} idx={idx} />
        ))}
      </div>
    </div>
  );
}
