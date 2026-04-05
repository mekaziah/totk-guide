import { Map } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { MAP_URL, ALT_MAP_URL } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function InteractiveMap() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] p-4 md:p-6 lg:p-8">
      <PageHeader 
        title="Interactive Map" 
        description="Explore the full map of Hyrule. Filter by Shrines, Koroks, and more."
        icon={<Map className="h-12 w-12" />}
      />
      
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-muted-foreground">Embedded via Zelda Dungeon</p>
        <Button variant="outline" size="sm" asChild>
          <a href={ALT_MAP_URL} target="_blank" rel="noopener noreferrer" className="border-primary/50 text-primary">
            Open Alternative Map <Map className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      <div className="flex-1 w-full rounded-lg overflow-hidden border border-border hylian-border">
        <iframe 
          src={MAP_URL} 
          className="w-full h-full"
          title="TOTK Interactive Map"
          loading="lazy"
        />
      </div>
    </div>
  );
}
