import { Target } from "lucide-react";
import { BOWS } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { SortableTable } from "@/components/SortableTable";

export default function Bows() {
  const columns = [
    { key: "name" as const, label: "Name", sortable: true },
    { key: "attack" as const, label: "Base Attack", sortable: true },
    { key: "durability" as const, label: "Durability", sortable: true },
    { key: "range" as const, label: "Range", sortable: true },
    { key: "effect" as const, label: "Special Effect", sortable: false },
    { key: "location" as const, label: "Location", sortable: false },
  ];

  return (
    <div className="p-6 lg:p-12 max-w-6xl mx-auto">
      <PageHeader 
        title="Bows Database" 
        description="Strike from afar with precision. Remember to fuse materials to your arrows for devastating effects."
        icon={<Target className="h-12 w-12" />}
      />

      <SortableTable data={BOWS} columns={columns} />
    </div>
  );
}
