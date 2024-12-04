"use client";

import Error from "@/components/global/error";
import { SkeletonCard } from "@/components/global/skeleton-card";
import { getCounts } from "@/queries/stats";
import {
  ExternalLink,
  MessageCircleQuestion,
  Network,
  ShoppingCart,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface CountData {
  categoryCount: number;
  ordersCount: number;
  contactCount: number;
}

const Stats = () => {
  const [count, setCount] = useState<CountData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const tDashboardHome = useTranslations("dashboard.home");

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchStats = async () => {
        const response = await getCounts();
        if (response) {
          setIsLoading(false);
          setCount(response);
        }
      };
      fetchStats();
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  return error ? (
    <Error />
  ) : isLoading ? (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  ) : (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 justify-center mx-auto">
      <Link
        href={"admin-dashboard/categories"}
        className="bg-red-600/85 shadow-md rounded-lg flex flex-col justify-between p-2 md:p-3 md:text-lg"
      >
        <div className="w-full flex items-center justify-between flex-col md:flex-row md:pb-4">
          <h2>{tDashboardHome("categoryCount")}</h2>
          <Network className="w-5 h-5 md:h-6 md:w-6 mb-1" strokeWidth={1.6} />
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-base md:text-xl">
            {count?.categoryCount}
          </span>
          <ExternalLink className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.6} />
        </div>
      </Link>

      <Link
        href={"admin-dashboard/orders"}
        className="bg-blue-600/85 shadow-md rounded-lg flex flex-col justify-between p-2 md:p-3 md:text-lg"
      >
        <div className="w-full flex items-center justify-between flex-col md:flex-row md:pb-4">
          <h2>{tDashboardHome("serviceOrdersCount")}</h2>
          <ShoppingCart
            className="w-5 h-5 md:h-6 md:w-6 mb-1"
            strokeWidth={1.6}
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-base md:text-xl">
            {count?.ordersCount}
          </span>
          <ExternalLink className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.6} />
        </div>
      </Link>

      <Link
        href={"admin-dashboard/contact"}
        className="bg-orange-600/85 shadow-md rounded-lg flex flex-col justify-between p-2 md:p-3 md:text-lg"
      >
        <div className="w-full flex items-center justify-between flex-col md:flex-row md:pb-4">
          <h2>{tDashboardHome("contactCount")}</h2>
          <MessageCircleQuestion
            className="w-5 h-5 md:h-6 md:w-6 mb-1"
            strokeWidth={1.6}
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-base md:text-xl">
            {count?.contactCount}
          </span>
          <ExternalLink className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.6} />
        </div>
      </Link>
    </div>
  );
};

export default Stats;
