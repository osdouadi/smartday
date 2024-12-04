"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Blog } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import { Clock } from "lucide-react";
import { useTranslations } from "next-intl";

type BlogPageContainerProps = {
  data: Blog;
};

const BlogPageContainer: React.FC<BlogPageContainerProps> = ({ data }) => {
  const { locale } = useParams();
  const tBlog = useTranslations("site.blog");
  return (
    <div>
      <div className="h-[48vw] w-full md:h-[29vw]">
        <img
          src={data.blogImage}
          alt={locale === "ar" ? data.title.ar : data.title.en}
          className="h-[48vw] w-full md:h-[29vw]"
        />
      </div>
      <div className="py-3 px-3 md:p-7">
        <h2 className="font-medium text-center text-lg md:text-3xl md:leading-relaxed text-gray-100 opacity-90 pb-4">
          {locale === "ar" ? data.title.ar : data.title.en}
        </h2>
        <div className=" text-xs mb-3 text-muted-foreground md:text-base md:mb-7">
          <div className="flex items-center gap-1 md:gap-2">
            <Clock className="w-4 h-4 md:w-6 md:h-6" />
            <span className="pt-1">
              {tBlog("blogPostedAt")} {formatDate(data?.createdAt)}
            </span>
          </div>
        </div>
        <div
          className="leading-relaxed whitespace-pre-line prose dark:prose-invert max-w-full text-black dark:text-white"
          dangerouslySetInnerHTML={{
            __html:
              locale === "ar"
                ? data.longDescription.ar
                : data.longDescription.en,
          }}
        ></div>
      </div>
    </div>
  );
};

export default BlogPageContainer;
