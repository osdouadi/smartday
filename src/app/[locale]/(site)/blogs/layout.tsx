import { getMetadata } from "@/queries/app-settings";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const metadata = await getMetadata();
  return {
    title:
      locale === "ar"
        ? metadata?.blogsPageMetadata?.title?.ar
        : metadata?.blogsPageMetadata?.title?.en,
    description:
      locale === "ar"
        ? metadata?.blogsPageMetadata?.description?.ar
        : metadata?.blogsPageMetadata?.description?.en,
  };
}

type BlogsLayout = {
  children: React.ReactNode;
};

const BlogsLayout: React.FC<BlogsLayout> = ({ children }) => {
  return children;
};

export default BlogsLayout;
