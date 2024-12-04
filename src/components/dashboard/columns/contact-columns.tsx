import { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "@/lib/utils";
import { Contact } from "@/types/contact";
import SupportOrderActionsCell from "../cells/contact-actions-cell";

export const contactColumns: ColumnDef<Contact>[] = [
  {
    accessorKey: "fullName",
    header: "clientName",
  },
  {
    accessorKey: "email",
    header: "email",
  },
  {
    accessorKey: "createdAt",
    header: "orderCreatedAt",
    cell: ({ row }) => formatDate(row.original.createdAt),
  },
  {
    header: "actions",
    id: "actions",
    cell: ({ row }) => <SupportOrderActionsCell contactId={row.original.id} />,
  },
];
