import { Shield } from "lucide-react";
import { SHIELDS } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { SortableTable } from "@/components/SortableTable";

export default function Shields() {
  const columns = [
    { key: "name" as const,       label: "Name",           sortable: true  },
    { key: "defense" as const,    label: "Def",            sortable: true  },
    { key: "durability" as const, label: "Dur",            sortable: true  },
    { key: "effect" as const,     label: "Special Effect", sortable: false },
    { key: "location" as const,   label: "Location",       sortable: false },
    { key: "coords" as const,     label: "Coordinates",    sortable: false },
  ];

  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto">
      <PageHeader
        title="Shields Database"
        description={`${SHIELDS.length} shields catalogued — from the common Battered Shield to the legendary Hylian Shield with 800 durability. Includes defense, durability, special effects, and exact map coordinates.`}
        icon={<Shield className="h-12 w-12" />}
      />
      <SortableTable data={SHIELDS} columns={columns} />
    </div>
  );
}
