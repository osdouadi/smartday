"use server";

import React from "react";
import AddNews from "@/components/forms/add-news";
import NewsList from "./news-list";
import { getNewsList } from "@/queries/news";

const NewsContainer = async () => {
  const data = await getNewsList();

  return (
    <section className="w-full">
      <AddNews />
      <NewsList data={data} />
    </section>
  );
};

export default NewsContainer;
