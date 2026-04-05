import { useState } from "react";
import { Map, Maximize2, ArrowLeft, ExternalLink, Info, ChevronDown, ChevronUp } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ALT_MAP_URL } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

function CoordHint() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 rounded-lg border border-primary/20 bg-primary/5 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-primary/10 transition-colors"
      >
        <Info className="h-4 w-4 text-primary shrink-0" />
        <span className="text-sm font-medium text-primary flex-1">How to find any location using coordinates</span>
        {open
          ? <ChevronUp className="h-4 w-4 text-primary shrink-0" />
          : <ChevronDown className="h-4 w-4 text-primary shrink-0" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 border-t border-primary/15 space-y-3 text-sm text-foreground/80">
              <p>
                Every item in this guide shows a coordinate in the format{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-xs">X, Y, Z</code>.
                These match the in-game map coordinates exactly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-muted/30 rounded p-3">
                  <p className="font-medium text-foreground mb-1">X axis</p>
                  <p className="text-xs text-muted-foreground">East–West. Negative = West, positive = East.</p>
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <p className="font-medium text-foreground mb-1">Y axis</p>
                  <p className="text-xs text-muted-foreground">North–South. Negative = South, positive = North.</p>
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <p className="font-medium text-foreground mb-1">Z axis</p>
                  <p className="text-xs text-muted-foreground">Elevation. Negative = Depths, positive = Sky islands.</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-foreground">Finding a spot on the map:</p>
                <ol className="list-decimal list-inside space-y-1 text-xs text-muted-foreground">
                  <li>Open the interactive map (use <strong className="text-foreground">Full Screen</strong> for the best view).</li>
                  <li>Click anywhere on the map — the X and Y coordinates appear in the URL or a popup.</li>
                  <li>Use the map's <strong className="text-foreground">Search / filter</strong> panel to jump to a named location, then fine-tune using the coordinate grid.</li>
                  <li>Negative X coordinates are <strong className="text-foreground">west</strong> of Hyrule Castle; positive X is <strong className="text-foreground">east</strong>.</li>
                  <li>Negative Y coordinates are <strong className="text-foreground">south</strong> of Hyrule Castle; positive Y is <strong className="text-foreground">north</strong>.</li>
                  <li>Z below <code className="bg-muted px-1 rounded font-mono">0</code> means the location is underground in the <strong className="text-foreground">Depths</strong>.</li>
                </ol>
              </div>

              <p className="text-xs text-muted-foreground border-t border-border pt-2">
                💡 Tip: In-game, press <strong className="text-foreground">–</strong> to open the map, move the cursor to any spot, and the coordinates appear in the bottom-right corner of the screen.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function InteractiveMap() {
  const [fullscreen, setFullscreen] = useState(false);

  const MapFrame = ({ className }: { className?: string }) => (
    <iframe
      src={ALT_MAP_URL}
      className={className}
      title="TOTK Interactive Map"
      allow="fullscreen"
      style={{ border: "none" }}
    />
  );

  return (
    <>
      {/* ── Full-screen overlay ─────────────────────────────── */}
      {fullscreen && (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-background">
          <div className="flex items-center justify-between gap-3 px-4 py-2 bg-sidebar-background border-b border-border shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFullscreen(false)}
              className="gap-2 text-primary hover:text-primary hover:bg-primary/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Guide
            </Button>
            <span className="text-muted-foreground text-sm font-serif tracking-widest uppercase select-none">
              Interactive Map — Full Screen
            </span>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <a href={ALT_MAP_URL} target="_blank" rel="noopener noreferrer">
                Open in new tab
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
          <MapFrame className="flex-1 w-full" />
        </div>
      )}

      {/* ── Normal page ─────────────────────────────────────── */}
      <div className="p-4 md:p-6 lg:p-8 pb-16">
        <PageHeader
          title="Interactive Map"
          description="Explore the full map of Hyrule. Filter by Shrines, Koroks, caves, Depths entrances, and more."
          icon={<Map className="h-12 w-12" />}
        />

        <CoordHint />

        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-muted-foreground">Interactive Hyrule map</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFullscreen(true)}
            className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
          >
            <Maximize2 className="h-4 w-4" />
            Full Screen
          </Button>
        </div>

        <div className="w-full rounded-lg overflow-hidden border border-border hylian-border" style={{ height: "calc(100vh - 18rem)" }}>
          <MapFrame className="w-full h-full" />
        </div>
      </div>
    </>
  );
}
