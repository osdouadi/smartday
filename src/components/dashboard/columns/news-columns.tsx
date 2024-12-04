import { ColumnDef } from "@tanstack/react-table";
import { formatDate } from "@/lib/utils";
import { News } from "@/types/news";
import NewsActionsCell from "../cells/news-actions-cell ";
import NewsTitleCell from "../cells/news-title-cell";

export const newsColumns: ColumnDef<News>[] = [
  {
    accessorKey: "newsAR",
    header: "newsTitle",
    cell: ({ row }) => <NewsTitleCell title={row.original.newsAR} />,
  },
  {
    accessorKey: "createdAt",
    header: "newsCreatedAt",
    cell: ({ row }) => formatDate(row.original.createdAt),
  },
  {
    header: "actions",
    id: "actions",
    cell: ({ row }) => <NewsActionsCell newsId={row.original.id} />,
  },
];
