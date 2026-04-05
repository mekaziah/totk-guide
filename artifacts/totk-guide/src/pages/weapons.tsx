import { Sword } from "lucide-react";
import { WEAPONS, type Weapon } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { SortableTable } from "@/components/SortableTable";
import { VideoLink } from "@/components/VideoLink";
import { ItemImage } from "@/components/ItemImage";

export default function Weapons() {
  const columns = [
    {
      key: "name" as const,
      label: "Name",
      sortable: true,
      render: (_: Weapon["name"], row: Weapon) => (
        <div className="flex items-center gap-2.5">
          <ItemImage name={row.name} type="weapon" size={36} />
          <span className="font-medium text-foreground">{row.name}</span>
        </div>
      ),
    },
    { key: "type" as const,       label: "Type",           sortable: true  },
    { key: "attack" as const,     label: "Atk",            sortable: true  },
    { key: "durability" as const, label: "Dur",            sortable: true  },
    { key: "effect" as const,     label: "Special Effect", sortable: false },
    { key: "location" as const,   label: "Location",       sortable: false },
    { key: "coords" as const,     label: "Coordinates",    sortable: false },
    {
      key: "name" as const,
      id: "video",
      label: "Video",
      sortable: false,
      render: (_: Weapon["name"], row: Weapon) => <VideoLink name={row.name} />,
    },
  ];

  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto">
      <PageHeader
        title="Weapons Database"
        description={`${WEAPONS.length} weapons catalogued — one-handed swords, two-handed claymores, and spears. Every entry shows the item icon, stats, exact map coordinates, and a video guide link.`}
        icon={<Sword className="h-12 w-12" />}
      />
      <SortableTable data={WEAPONS} columns={columns} />
    </div>
  );
}
