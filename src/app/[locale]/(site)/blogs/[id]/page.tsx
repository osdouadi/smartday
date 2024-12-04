import React from "react";
import BlogPageContainer from "@/containers/blog-page/blog-page-container";
import { getBlogById } from "@/queries/blog";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const id = params.id;
  const data = await getBlogById(id);
  return (
    <>
      <BlogPageContainer data={data} />
    </>
  );
};

export default page;
