import { Shield } from "lucide-react";
import { SHIELDS, type ShieldItem } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { SortableTable } from "@/components/SortableTable";
import { VideoLink } from "@/components/VideoLink";
import { ItemImage } from "@/components/ItemImage";

export default function Shields() {
  const columns = [
    {
      key: "name" as const,
      label: "Name",
      sortable: true,
      render: (_: ShieldItem["name"], row: ShieldItem) => (
        <div className="flex items-center gap-2.5">
          <ItemImage name={row.name} type="shield" size={36} />
          <span className="font-medium text-foreground">{row.name}</span>
        </div>
      ),
    },
    { key: "defense" as const,    label: "Def",            sortable: true  },
    { key: "durability" as const, label: "Dur",            sortable: true  },
    { key: "effect" as const,     label: "Special Effect", sortable: false },
    { key: "location" as const,   label: "Location",       sortable: false },
    { key: "coords" as const,     label: "Coordinates",    sortable: false },
    {
      key: "name" as const,
      id: "video",
      label: "Video",
      sortable: false,
      render: (_: ShieldItem["name"], row: ShieldItem) => <VideoLink name={row.name} />,
    },
  ];

  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto">
      <PageHeader
        title="Shields Database"
        description={`${SHIELDS.length} shields catalogued — from the Battered Shield to the legendary Hylian Shield. Every entry shows the item icon, defense, durability, coordinates, and a video guide link.`}
        icon={<Shield className="h-12 w-12" />}
      />
      <SortableTable data={SHIELDS} columns={columns} />
    </div>
  );
}
