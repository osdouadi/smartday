"use client";

import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import Marquee from "react-fast-marquee";
import { News } from "@/types/news";
import { getNewsList } from "@/queries/news";
import { useParams } from "next/navigation";

const NewsTapeContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState<News[] | []>([]);
  const { locale } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getNews = async () => {
      const response = await getNewsList();
      if (response) {
        setIsLoading(false);
        setNewsData(response);
      }
    };
    getNews();
  }, []);

  return (
    !isLoading && (
      <section
        className="w-full bg-secondary py-1.5 md:h-14 ltr:md:pt-4 rtl:md:pt-5 flex items-center"
        dir="ltr"
      >
        <Marquee loop={0} direction="right">
          {newsData &&
            newsData.map((item, index) => (
              <div
                key={index}
                className="mx-2.5 px-2.5 border-x-[0.014rem] border-x-primary/40 text-primary flex items-center gap-2"
              >
                <span className="bg-gray-primary/40 rounded-full h-7 w-7 flex items-center justify-center">
                  <Globe className="h-5 w-5 rtl:mb-0.5" strokeWidth={1.4} />
                </span>
                <p className="text-sm md:text-base h-5">
                  {locale === "ar" ? item.newsAR : item.newsEN}
                </p>
              </div>
            ))}
        </Marquee>
      </section>
    )
  );
};

export default NewsTapeContainer;
