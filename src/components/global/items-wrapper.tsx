"use client";

import { getCategoryList } from "@/queries/category";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Spinner from "../loaders/spinner";

type ItemsWrapperProps = {
  onLinkClick: () => void;
};

type ItemInterface = {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  summary: {
    ar: string;
    en: string;
  };
};

const ItemsWrapper: React.FC<ItemsWrapperProps> = ({ onLinkClick }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { locale } = useParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoryList();
        setCategoryData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <ul className="w-[31vw] lg:w-[35vw] h-[84vh] -mt-1 bg-gray-50 rounded-md overflow-y-scroll scrollbar">
      <div className="flex flex-col p-2 flex-wrap w-full">
        {isLoading || error ? (
          <div className="flex items-center justify-center p-10">
            <Spinner />
          </div>
        ) : (
          categoryData.map((item: ItemInterface, i: number) => (
            <li
              key={i}
              className="relative flex items-center gap-1 justify-between w-full overflow-hidden p-2 rtl:pl-7 ltr:pr-7 rounded-md hover:bg-gray-200 transition-all cursor-pointer"
              onClick={() => {
                router.push(`/categories/${item?.id}`);
                onLinkClick();
              }}
            >
              <div className="relative flex flex-col">
                <h3 className="text-gray-900">
                  {locale === "ar" ? item?.title.ar : item?.title.en}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {locale === "ar" ? item?.summary.ar : item?.summary.en}
                </p>
              </div>
              <div className="absolute rtl:left-1 ltr:!right-1 w-full h-full opacity-0 hover:opacity-100 transition-opacity">
                {locale === "ar" ? (
                  <ArrowLeft className="text-gray-800 h-4 w-4 left-1 top-1/2 -translate-y-1/2 absolute" />
                ) : (
                  <ArrowRight className="text-gray-800 h-4 w-4 right-1 top-1/2 -translate-y-1/2 absolute" />
                )}
              </div>
            </li>
          ))
        )}
      </div>
    </ul>
  );
};

export default ItemsWrapper;
