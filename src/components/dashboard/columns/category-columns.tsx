import { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "@/lib/utils";
import { Category } from "@/types/category";
import CategoryActionsCell from "../cells/category-cations-cell";

export const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "title.ar",
    header: "categoryTitle",
  },
  {
    accessorKey: "createdAt",
    header: "categoryCreatedAt",
    cell: ({ row }) => formatDate(row.original.createdAt),
  },
  {
    header: "actions",
    id: "actions",
    cell: ({ row }) => <CategoryActionsCell categoryId={row.original._id} />,
  },
];
