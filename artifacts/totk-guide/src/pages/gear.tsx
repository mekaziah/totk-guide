import { Navigation, MapPin, Star, Sparkles } from "lucide-react";
import { ARMOR, type ArmorSet } from "@/lib/data";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { VideoLink } from "@/components/VideoLink";
import { ItemImage } from "@/components/ItemImage";
import { ArmorImage } from "@/components/Lightbox";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TIER_COLORS = ["text-amber-400", "text-amber-300", "text-yellow-300", "text-yellow-200"] as const;

function ArmorCard({ item, idx }: { item: ArmorSet; idx: number }) {
  const imageSrc = `${import.meta.env.BASE_URL}armor/${item.id}.png`;
  const [showMaterials, setShowMaterials] = useState(false);

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
          {/* Star upgrade rating */}
          <div className="flex items-center gap-2 mt-1.5">
            {item.maxStars > 0 ? (
              <>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${i < item.maxStars ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">Max ★{item.maxStars} upgradeable</span>
              </>
            ) : (
              <span className="text-xs text-muted-foreground/60 italic">Cannot be upgraded</span>
            )}
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

          {/* Upgrade Materials — collapsible */}
          {item.upgradeTiers.length > 0 && (
            <div className="border-t border-border/40 pt-3">
              <button
                onClick={() => setShowMaterials((v) => !v)}
                className="flex items-center justify-between w-full group"
              >
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
                  <span className="text-muted-foreground uppercase tracking-wider text-xs group-hover:text-foreground transition-colors">
                    Upgrade Materials
                  </span>
                  <span className="text-xs text-muted-foreground/50">(per piece)</span>
                </div>
                <span className="text-muted-foreground/60 text-xs">{showMaterials ? "▲ hide" : "▼ show"}</span>
              </button>

              {showMaterials && (
                <div className="mt-2.5 space-y-1.5">
                  {item.upgradeTiers.map((tier) => (
                    <div key={tier.star} className="flex items-start gap-2 bg-muted/20 rounded px-2.5 py-1.5">
                      <div className="flex items-center gap-0.5 shrink-0 mt-0.5">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-2.5 w-2.5 ${i < tier.star ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/20"}`}
                          />
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                        {tier.materials.map((mat) => (
                          <span key={mat} className={`text-xs ${TIER_COLORS[tier.star - 1]}`}>{mat}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

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
                      <span className="text-xs shrink-0">
                        {item.maxStars > 0 ? (
                          <span className="text-muted-foreground">
                            DEF <span className="text-foreground">{piece.defense}</span>
                            <span className="mx-1 text-muted-foreground/50">→</span>
                            <span className="text-yellow-400 font-semibold">{piece.maxDefense}</span>
                            <span className="text-muted-foreground/60 ml-0.5">★{item.maxStars}</span>
                          </span>
                        ) : (
                          <span className="text-muted-foreground">DEF {piece.defense}</span>
                        )}
                      </span>
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
