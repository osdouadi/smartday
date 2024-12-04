"use client";

import React from "react";
import { useParams } from "next/navigation";
import PageTitle from "@/components/global/page-title";
import PageDescription from "@/components/global/page-description";
import Banner from "@/components/global/banner";
import { Category } from "@/types/category";
import CategoryOrder from "@/components/forms/category-order";

type CategoryPageContainerProps = {
  data: Category;
};

const CategoryPageContainer: React.FC<CategoryPageContainerProps> = ({
  data,
}) => {
  const { locale } = useParams();

  return (
    <>
      <Banner
        src={data.categoryImage}
        alt={locale === "ar" ? data.title?.ar : data.description?.en}
      />
      <div className="w-full py-5 px-4 md:p-7">
        <PageTitle>{locale === "ar" ? data.title.ar : data.title.en}</PageTitle>
        <div className="w-full">
          <PageDescription>
            {locale === "ar" ? data.description.ar : data.description.en}
          </PageDescription>
        </div>
        <div className="pt-5">
          <CategoryOrder />
        </div>
      </div>
    </>
  );
};

export default CategoryPageContainer;
