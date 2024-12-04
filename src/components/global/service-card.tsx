"use client";

import { constants } from "@/config/constants";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

type ServiceCardProps = {
  index: number;
  title: string;
  categoryId: string;
  id: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  title,
  categoryId,
  id,
}) => {
  const { locale } = useParams();

  return (
    <Link
      key={index}
      href={`${constants.links.siteCategories}${categoryId}/${id}`}
      className="bg-card text-sm p-3 md:p-4 border-2 border-primary/30 rounded-md cursor-pointer flex items-center justify-between"
    >
      <span className="md:text-lg">{title}</span>
      {locale === "ar" ? (
        <ChevronsLeft strokeWidth={1.5} className="md:h-6 md:w-6" />
      ) : (
        <ChevronsRight strokeWidth={1.5} className="md:h-6 md:w-6" />
      )}
    </Link>
  );
};

export default ServiceCard;
