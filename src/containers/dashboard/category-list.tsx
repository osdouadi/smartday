"use client";

import React from "react";

import { categoryColumns } from "@/components/dashboard/columns/category-columns";
import { DataTable } from "@/components/dashboard/data-table/data-table";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { constants } from "@/config/constants";
import { deleteCategoriesList } from "@/queries/category";
import { Category } from "@/types/category";
import AddMoreBtn from "@/components/global/add-more-btn";
import DashPageTitle from "@/components/dashboard/ui/dash-page-title";
import TableTitle from "@/components/dashboard/ui/table-title";
import { Button } from "@/components/ui/button";

export type CategoriesListProps = {
  data: Category[];
};

const CategoryList: React.FC<CategoriesListProps> = ({ data }) => {
  const tDashboardCategory = useTranslations(
    "dashboard.category"
  );
  const tCallToAction = useTranslations("callToAction");
  const tResponses = useTranslations("responses");

  const { toast } = useToast();
  const router = useRouter();

  const handleDeleteCategoryList = async () => {
    try {
      await deleteCategoriesList();
      toast({
        title: tResponses("deleteSuccess"),
      });
      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: tResponses("deleteFail"),
        description: tResponses("pleaseTryAgain"),
      });
    }
  };

  return (
    <>
      <div className="mb-2 flex justify-between items-center flex-col md:flex-row">
        <DashPageTitle title={tDashboardCategory("categories")} />
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <AddMoreBtn
            href={constants.links.adminNewCategory}
            title="addCategory"
          />
          <Button onClick={() => handleDeleteCategoryList()}>
            {tCallToAction("deleteAllCategories")}
          </Button>
        </div>
      </div>
      <TableTitle title={tDashboardCategory("allCategories")} />
      <div className="mx-auto">
        <DataTable columns={categoryColumns} data={data} />
      </div>
    </>
  );
};

export default CategoryList;
