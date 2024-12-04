import { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "@/lib/utils";
import { Blog } from "@/types/blog";
import BlogActionsCell from "../cells/blog-actions-cell";

export const blogColumns: ColumnDef<Blog>[] = [
  {
    accessorKey: "title.ar",
    header: "blogTitle",
  },
  {
    accessorKey: "createdAt",
    header: "blogCreatedAt",
    cell: ({ row }) => formatDate(row.original.createdAt),
  },
  {
    header: "actions",
    id: "actions",
    cell: ({ row }) => <BlogActionsCell blogId={row.original.id} />,
  },
];
