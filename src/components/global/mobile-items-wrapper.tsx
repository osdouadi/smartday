"use client";

import React, { useEffect, useState } from "react";
import { CircleChevronRight } from "lucide-react";
import { getCategoryList } from "@/queries/category";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { DrawerClose } from "../ui/drawer";
import SpinnerLight from "../loaders/spinner-light";

type MobileItemsWrapperProps = {
  setIsMobileItemsOpen: (val: boolean) => void;
  isMobileItemsOpen: boolean; 
};


type Item = {
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

const MobileItemsWrapper: React.FC<MobileItemsWrapperProps> = ({
  setIsMobileItemsOpen,
}) => {
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { locale } = useParams();
  const tCallToAction = useTranslations("callToAction");

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
    <ul className="relative px-2">
      <div
        onClick={() => setIsMobileItemsOpen(false)}
        className="py-1.5 flex items-center gap-1.5 fixed top-1"
      >
        <CircleChevronRight className="h-5 w-5" />
        <span className="pt-0.5">{tCallToAction("back")}</span>
      </div>
      {isLoading || error ? (
        <div className="flex items-center justify-center p-10">
          <SpinnerLight />
        </div>
      ) : (
        categoryData?.map((item: Item, i: number) => (
          <DrawerClose key={i} asChild>
            <Link
              href={`/categories/${item?.id}`}
              className="flex flex-col py-2.5 border-b-2 border-gray-800"
            >
              <h3 className="text-gray-100 tracking-wide">
                {locale === "ar" ? item?.title.ar : item?.title.en}
              </h3>
              <p className="text-gray-300 text-sm tracking-wide line-clamp-2">
                {locale === "ar" ? item?.summary.ar : item?.summary.en}
              </p>
            </Link>
          </DrawerClose>
        ))
      )}
    </ul>
  );
};

export default MobileItemsWrapper;
