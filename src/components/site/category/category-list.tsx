"use client";

import React, { useState } from "react";
import { SkeletonCard } from "@/components/global/skeleton-card";
import { Category } from "@/types/category";
import Image from "next/image";
import Slider from "react-slick";
import { useParams } from "next/navigation";
import clsx from "clsx";

type CategoryListProps = {
  categories: Category[];
  isLoading: boolean;
  error: any;
};

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  isLoading,
  error,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { locale } = useParams();

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    lazyLoad: "ondemand" as "ondemand" | "progressive" | undefined,
    autoplay: true,
    autoplaySpeed: 1700,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (currentSlide: number, nextSlide: number) => {
      setActiveSlide(nextSlide);
    },
    afterChange: (current: number) => {
      setActiveSlide(current);
    },
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="flex items-center gap-5 flex-col md:flex-row">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : error ? (
        <div>Somthing went wrong</div>
      ) : (
        <div className="category-list flex items-center justify-between flex-col md:flex-row md:pb-14">
          <div className="slider-container w-full md:w-1/2 md:rtl:pl-6 md:ltr:pr-6">
            <Slider {...settings}>
              {categories.map((item, i) => (
                <div
                  key={i}
                  className={clsx(
                    "h-[5rem] md:h-[6rem] overflow-y-hidden flex flex-col items-center justify-center gap-2 !pb-24 md:[&:not(:last-child)]:pb-0 rtl:text-right opacity-80",
                    {
                      "!opacity-100": activeSlide === i,
                    }
                  )}
                >
                  <div className="flex items-start gap-1.5 justify-end ltr:flex-row-reverse rtl:flex-row rtl:text-right mb-2">
                    <h3 className="text-base md:text-xl text-gray-100">
                      {locale === "ar" ? item?.title.ar : item?.title.en}
                    </h3>
                    <Image
                      src={"/assets/circles-scroll-nav.svg"}
                      alt="smartday"
                      width={500}
                      height={500}
                      className="w-[1.2rem] h-[1.2rem] md:w-[1.5rem] md:h-[1.5rem] mb-1"
                    />
                  </div>
                  <p
                    className="text-sm md:font-lg text-gray-200 line-clamp-2"
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    {locale === "ar" ? item?.summary.ar : item?.summary.en}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full md:w-2/3 flex items-center justify-center">
            <div className="relative w-full h-[65vw] md:h-[33vw] rounded-lg overflow-hidden">
              <Image
                src={categories[activeSlide]?.categoryImage}
                alt=""
                width={1000}
                height={1000}
                className="absolute w-full h-[65vw] md:h-[33vw]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
