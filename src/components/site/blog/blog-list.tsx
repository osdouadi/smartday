"use client";

import React from "react";
import { useExtractLocaleFromPath } from "@/hooks/useExtractLocaleFromPath";
import { SkeletonCard } from "@/components/global/skeleton-card";
import BlogCard from "./blog-card";
import { Blog } from "@/types/blog";
import Error from "@/components/global/error";
import Link from "next/link";
import { useTranslations } from "next-intl";

type BlogListProps = {
  blogs: Blog[];
  isLoading: boolean;
  error: any;
};

const BlogList: React.FC<BlogListProps> = ({ blogs, isLoading, error }) => {
  const locale = useExtractLocaleFromPath();
  const tCallToAction = useTranslations("callToAction");

  return error ? (
    <Error />
  ) : (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1 md:pt-2 pb-5">
        {isLoading ? (
          <div className="flex items-center gap-5 flex-col md:flex-row">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          blogs.map((item, index) => (
            <BlogCard
              key={index}
              title={locale === "ar" ? item.title.ar : item.title.en}
              shortDescription={
                locale === "ar"
                  ? item.shortDescription.ar
                  : item.shortDescription.en
              }
              id={item.id}
              blogImage={item.blogImage}
            />
          ))
        )}
      </div>
      <Link
        href={"/blogs"}
        className="bg-primary text-white text-sm py-2.5 px-5 flex justify-center rounded-md dark:hover:bg-primary/80 hover:opacity-90 transition-all w-fit mx-auto"
      >
        {tCallToAction("showAllBlogs")}
      </Link>
    </div>
  );
};

export default BlogList;
