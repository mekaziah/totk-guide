import { useState } from "react";
import { Maximize2, ArrowLeft, ExternalLink } from "lucide-react";
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

  if (fullscreen) {
    return (
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
    );
  }

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 3.5rem)" }}>
      <div className="shrink-0 flex items-center justify-between px-4 md:px-6 py-3 border-b border-border bg-background">
        <p className="text-sm text-muted-foreground">Interactive Hyrule Map</p>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <a href={ALT_MAP_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              New tab
            </a>
          </Button>
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
      </div>
      <MapFrame className="flex-1 w-full" />
    </div>
  );
}
