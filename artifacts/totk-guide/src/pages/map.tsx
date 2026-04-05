import { useState } from "react";
import { Map, Maximize2, ArrowLeft, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ALT_MAP_URL } from "@/lib/data";
import { Button } from "@/components/ui/button";

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
      <div className="flex flex-col h-[calc(100vh-4rem)] p-4 md:p-6 lg:p-8">
        <PageHeader
          title="Interactive Map"
          description="Explore the full map of Hyrule. Filter by Shrines, Koroks, caves, Depths entrances, and more."
          icon={<Map className="h-12 w-12" />}
        />

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

        <div className="flex-1 w-full rounded-lg overflow-hidden border border-border hylian-border">
          <MapFrame className="w-full h-full" />
        </div>
      </div>
    </>
  );
}
