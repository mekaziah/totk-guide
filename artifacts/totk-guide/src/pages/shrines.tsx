import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import { SHRINES } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { VideoLink } from "@/components/VideoLink";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const REGIONS = Array.from(new Set(SHRINES.map(s => s.region)));

export default function Shrines() {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");

  const filteredShrines = SHRINES.filter(shrine => {
    const matchesSearch = shrine.name.toLowerCase().includes(search.toLowerCase()) || shrine.hint.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = regionFilter === "All" || shrine.region === regionFilter;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="p-6 lg:p-12 max-w-6xl mx-auto">
      <PageHeader 
        title="Shrines of Light" 
        description="Discover all 152 Shrines across the Sky Islands and Surface. Use the filters to track down the ones you're missing."
        icon={<MapPin className="h-12 w-12" />}
      />

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search shrines or hints..." 
            className="pl-9 bg-card"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Select value={regionFilter} onValueChange={setRegionFilter}>
          <SelectTrigger className="w-full sm:w-[200px] bg-card">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Regions</SelectItem>
            {REGIONS.map(r => (
              <SelectItem key={r} value={r}>{r}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredShrines.map((shrine, idx) => (
          <motion.div
            key={shrine.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: Math.min(idx * 0.05, 0.5) }}
          >
            <Card className="h-full bg-card/50 hover:border-primary/50 transition-colors hylian-border">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-lg font-serif text-accent">{shrine.name}</CardTitle>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    {shrine.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-border/50 pb-1">
                    <span className="text-muted-foreground">Region:</span>
                    <span className="text-foreground">{shrine.region}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-1">
                    <span className="text-muted-foreground">Coordinates:</span>
                    <span className="text-secondary font-mono">{shrine.coords}</span>
                  </div>
                  <div className="pt-2 text-muted-foreground italic">
                    "{shrine.hint}"
                  </div>
                  <div className="pt-3 flex items-center justify-between border-t border-border/40 mt-1">
                    <span className="text-xs text-muted-foreground">Shrine solution</span>
                    <VideoLink name={shrine.name} extraTerms="shrine solution walkthrough totk" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {filteredShrines.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No shrines found matching your criteria.
        </div>
      )}
    </div>
  );
}
