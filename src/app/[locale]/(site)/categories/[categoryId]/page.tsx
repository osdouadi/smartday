import React from "react";
import { getCategoryById } from "@/queries/category";
import CategoryPageContainer from "@/containers/category-page/category-page-container";

type Props = {
  params: {
    categoryId: string;
  };
};

const page = async ({ params }: Props) => {
  const { categoryId } = params;
  const data = await getCategoryById(categoryId);
  return (
    <>
      <CategoryPageContainer data={data} />
    </>
  );
};

export default page;
