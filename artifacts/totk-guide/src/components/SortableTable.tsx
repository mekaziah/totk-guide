import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpDown } from "lucide-react";
import { motion } from "framer-motion";

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
}

interface SortableTableProps<T> {
  data: T[];
  columns: Column<T>[];
}

export function SortableTable<T extends Record<string, any>>({ data, columns }: SortableTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" } | null>(null);

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
    if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const requestSort = (key: keyof T) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="rounded-md border border-border overflow-hidden bg-card/50 backdrop-blur-sm">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            {columns.map((col) => (
              <TableHead 
                key={String(col.key)} 
                className={`font-serif text-primary uppercase tracking-wider ${col.sortable ? "cursor-pointer hover:bg-accent/10" : ""}`}
                onClick={() => col.sortable && requestSort(col.key)}
              >
                <div className="flex items-center gap-1">
                  {col.label}
                  {col.sortable && <ArrowUpDown className="h-3 w-3 opacity-50" />}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((row, i) => (
            <TableRow key={row.id || i} className="hover:bg-accent/5 border-border">
              {columns.map((col) => (
                <TableCell key={String(col.key)} className="text-muted-foreground">
                  {row[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
