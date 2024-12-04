"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useTranslations } from "next-intl";
import { useToast } from "@/components/ui/use-toast";

import { blogColumns } from "@/components/dashboard/columns/blog-columns";
import { DataTable } from "@/components/dashboard/data-table/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { constants } from "@/config/constants";
import { deleteBlogList } from "@/queries/blog";
import { ChevronDown } from "lucide-react";
import { Blog } from "@/types/blog";
import TableTitle from "@/components/dashboard/ui/table-title";
import AddMoreBtn from "@/components/global/add-more-btn";
import DashPageTitle from "@/components/dashboard/ui/dash-page-title";

export type BlogListProps = {
  data: Blog[];
};

const BlogList: React.FC<BlogListProps> = ({ data }) => {
  const tResponse = useTranslations("responses");
  const tDashboardBlog = useTranslations("dashboard.blog");
  const tCallToAction = useTranslations("callToAction");

  const { toast } = useToast();
  const router = useRouter();

  const handleDeleteBlogList = async () => {
    try {
      await deleteBlogList();
      toast({
        title: tResponse("deleteSuccess"),
      });
      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: tResponse("deleteFail"),
        description: tResponse("pleaseTryAgain"),
      });
    }
  };

  return (
    <>
      <div className="pb-2 flex justify-between items-center flex-col md:flex-row">
        <DashPageTitle title={tDashboardBlog("blogs")} />
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <AddMoreBtn href={constants.links.adminNewBlog} title="addNewBlog" />
          <DropdownMenu>
            <DropdownMenuTrigger className="border-[0.014rem] border-primary py-2.5 px-4 rounded-md text-sm md:text-base flex items-center gap-1">
              {tCallToAction("additionalSettings")}
              <ChevronDown
                strokeWidth={1.3}
                className="h-5 w-5 md:h-5 md:w-5"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-3">
              <DropdownMenuItem
                onClick={() => handleDeleteBlogList()}
                className="cursor-pointer py-1.5"
              >
                {tCallToAction("deleteAllBlogs")}
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer w-full flex justify-end py-1.5">
                <Link href={constants.links.adminDashboard}>
                  {tCallToAction("backToDashboard")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <TableTitle title={tDashboardBlog("allBlogs")} />
      <div className="mx-auto">
        <DataTable columns={blogColumns} data={data} />
      </div>
    </>
  );
};

export default BlogList;
