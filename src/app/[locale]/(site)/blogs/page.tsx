import React from "react";
import BlogCard from "@/components/site/blog/blog-card";
import { getPaginatedBlogList } from "@/queries/blog";
import PaginationContainer from "@/components/global/pagination-container";
import { Blog } from "@/types/blog";
import { getLocale } from "next-intl/server";
import { SkeletonCard } from "@/components/global/skeleton-card";
import Error from "@/components/global/error";

const generatePaginationItems = (
  currentPage: number,
  totalPages: number
): (string | number)[] => {
  const delta = 2;
  const range = [];
  const rangeWithEllipsis = [];

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    range.push(i.toString());
  }

  if (currentPage - delta > 2) {
    rangeWithEllipsis.push("...");
  }
  for (let i of range) {
    rangeWithEllipsis.push(i);
  }
  if (currentPage + delta < totalPages - 1) {
    rangeWithEllipsis.push("...");
  }

  return rangeWithEllipsis;
};

type BlogsProps = {
  searchParams: {
    page: string;
  };
};

const Blogs: React.FC<BlogsProps> = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  let data = { blogList: [], totalPage: 0 };
  let isLoading = true;
  let error = null;
  try {
    data = await getPaginatedBlogList(page);
  } catch (err: any) {
    error = err.message;
  } finally {
    isLoading = false;
  }
  const { blogList, totalPage } = data;
  const currentLocale = await getLocale();
  const paginationItems = generatePaginationItems(page, totalPage);

  return (
    <div className="py-5 md:py-10 px-4 md:px-8">
      {error || blogList.length < 1 ? (
        <div className="flex justify-center">
          <Error />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center mx-auto gap-5 md:gap-5">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            blogList.map((item: Blog) => (
              <BlogCard
                key={item.id}
                title={currentLocale === "ar" ? item.title.ar : item.title.en}
                shortDescription={
                  currentLocale === "ar"
                    ? item.shortDescription.ar
                    : item.shortDescription.en
                }
                id={item.id}
                blogImage={item.blogImage}
              />
            ))
          )}
        </div>
      )}
      {!isLoading && !error && (
          <PaginationContainer
            page={page}
            paginationItems={paginationItems}
            totalPage={totalPage}
            currentLocale={currentLocale}
          />
        )}
    </div>
  );
};

export default Blogs;
