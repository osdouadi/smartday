import { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "@/lib/utils";
import { Order } from "@/types/order";
import OrderActionsCell from "../cells/order-actions-cell";

export const orderColumns: ColumnDef<Order>[] = [
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
    cell: ({ row }) => <OrderActionsCell orderId={row.original.id} />,
  },
];
