"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useTranslations } from "next-intl";

type PaginationItemType = string | number;

type PaginationContainerProps = {
  page: number;
  paginationItems: PaginationItemType[];
  totalPage: number;
  currentLocale: string;
};

const PaginationContainer: React.FC<PaginationContainerProps> = ({
  page,
  paginationItems,
  totalPage,
}) => {
  const tCommon = useTranslations("common");


  return (
    <Pagination className="my-5">
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${page - 1}`}
              label={tCommon("previous")}
            />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href={`?page=1`}>1</PaginationLink>
        </PaginationItem>
        {paginationItems.map((item, index) =>
          item === "..." ? (
            <PaginationEllipsis key={index} />
          ) : (
            <PaginationItem key={index}>
              <PaginationLink href={`?page=${item}`}>{item}</PaginationLink>
            </PaginationItem>
          )
        )}
        {totalPage > 1 && (
          <PaginationItem>
            <PaginationLink href={`?page=${totalPage}`}>
              {totalPage}
            </PaginationLink>
          </PaginationItem>
        )}
        {page < totalPage && (
          <PaginationItem>
            <PaginationNext
              href={`?page=${page + 1}`}
              label={tCommon("next")}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationContainer;
