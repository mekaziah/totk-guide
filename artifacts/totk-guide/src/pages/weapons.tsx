import { Sword } from "lucide-react";
import { WEAPONS } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { SortableTable } from "@/components/SortableTable";

export default function Weapons() {
  const columns = [
    { key: "name" as const, label: "Name", sortable: true },
    { key: "type" as const, label: "Type", sortable: true },
    { key: "attack" as const, label: "Base Attack", sortable: true },
    { key: "durability" as const, label: "Durability", sortable: true },
    { key: "effect" as const, label: "Special Effect", sortable: false },
    { key: "location" as const, label: "Location", sortable: false },
  ];

  return (
    <div className="p-6 lg:p-12 max-w-6xl mx-auto">
      <PageHeader 
        title="Weapons Database" 
        description="A complete record of the most notable weapons found in Hyrule. Click column headers to sort."
        icon={<Sword className="h-12 w-12" />}
      />

      <SortableTable data={WEAPONS} columns={columns} />
    </div>
  );
}
