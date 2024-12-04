"use client";

import React from "react";
import { newsColumns } from "@/components/dashboard/columns/news-columns";
import { DataTable } from "@/components/dashboard/data-table/data-table";
import { News } from "@/types/news";

export type NewsListProps = {
  data: News[];
};

const NewsList: React.FC<NewsListProps> = ({ data }) => {
  return (
    <div className="mx-auto">
      <DataTable columns={newsColumns} data={data} />
    </div>
  );
};

export default NewsList;
