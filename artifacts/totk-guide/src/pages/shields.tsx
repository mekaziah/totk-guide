import { Shield } from "lucide-react";
import { SHIELDS } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { SortableTable } from "@/components/SortableTable";

export default function Shields() {
  const columns = [
    { key: "name" as const, label: "Name", sortable: true },
    { key: "defense" as const, label: "Base Defense", sortable: true },
    { key: "durability" as const, label: "Durability", sortable: true },
    { key: "effect" as const, label: "Special Effect", sortable: false },
    { key: "location" as const, label: "Location", sortable: false },
  ];

  return (
    <div className="p-6 lg:p-12 max-w-6xl mx-auto">
      <PageHeader 
        title="Shields Database" 
        description="Defend yourself against the Demon King's forces. Click column headers to sort."
        icon={<Shield className="h-12 w-12" />}
      />

      <SortableTable data={SHIELDS} columns={columns} />
    </div>
  );
}
