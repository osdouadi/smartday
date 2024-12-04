"use client";

import React from "react";

import { DataTable } from "@/components/dashboard/data-table/data-table";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { deleteOrderList } from "@/queries/order";
import { ServiceOrder } from "@/types/service-order";
import TableTitle from "@/components/dashboard/ui/table-title";
import DashPageTitle from "@/components/dashboard/ui/dash-page-title";
import { orderColumns } from "@/components/dashboard/columns/order-columns";

export type OrderListProps = {
  data: ServiceOrder[];
};

const OrderList: React.FC<OrderListProps> = ({ data }) => {
  const tDashboardServiceOrder = useTranslations("dashboard.order");
  const tCallToAction = useTranslations("callToAction");
  const tResponses = useTranslations("responses");

  const { toast } = useToast();
  const router = useRouter();

  const handleDeleteOrders = async () => {
    try {
      await deleteOrderList();
      toast({
        title: tResponses("deleteSuccess"),
      });
      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: tResponses("deleteSuccess"),
        description: tResponses("pleaseTryAgain"),
      });
    }
  };

  return (
    <>
      <div className="pb-2 flex justify-between items-center">
        <div className="mb-[-12px]">
          <DashPageTitle title={tDashboardServiceOrder("orders")} />
        </div>
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <button
            onClick={() => handleDeleteOrders()}
            className="bg-primary hover:bg-primary/90 py-2.5 px-4 rounded-md text-sm md:text-base flex items-center gap-1"
          >
            {tCallToAction("deleteAllOrders")}
          </button>
        </div>
      </div>
      <TableTitle title={tDashboardServiceOrder("allOrders")} />
      <div className="mx-auto">
        <DataTable columns={orderColumns} data={data} />
      </div>
    </>
  );
};

export default OrderList;
