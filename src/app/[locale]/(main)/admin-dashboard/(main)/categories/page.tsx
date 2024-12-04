import React from "react";
import CategoryList from "@/containers/dashboard/category-list";
import { getCategoryList } from "@/queries/category";

const page = async () => {
  const data = await getCategoryList();

  return (
    <>
      <CategoryList data={data} />
    </>
  );
};

export default page;
