import { Target } from "lucide-react";
import { BOWS, type Bow } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { SortableTable } from "@/components/SortableTable";
import { VideoLink } from "@/components/VideoLink";

export default function Bows() {
  const columns = [
    { key: "name" as const,       label: "Name",           sortable: true  },
    { key: "attack" as const,     label: "Atk",            sortable: true  },
    { key: "durability" as const, label: "Dur",            sortable: true  },
    { key: "range" as const,      label: "Range",          sortable: true  },
    { key: "multishot" as const,  label: "Multishot",      sortable: true  },
    { key: "effect" as const,     label: "Special Effect", sortable: false },
    { key: "location" as const,   label: "Location",       sortable: false },
    { key: "coords" as const,     label: "Coordinates",    sortable: false },
    {
      key: "name" as const,
      label: "Video",
      sortable: false,
      render: (_: Bow["name"], row: Bow) => <VideoLink name={row.name} />,
    },
  ];

  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto">
      <PageHeader
        title="Bows Database"
        description={`${BOWS.length} bows catalogued — from the basic Traveler's Bow to the 5-shot Savage Lynel Bow. Includes multishot count, range, exact coordinates, and a video guide link for every bow.`}
        icon={<Target className="h-12 w-12" />}
      />
      <SortableTable data={BOWS} columns={columns} />
    </div>
  );
}
