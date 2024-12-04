"use client";

import React from "react";

import { DataTable } from "@/components/dashboard/data-table/data-table";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { deleteContactList } from "@/queries/contact";
import { Contact } from "@/types/contact";
import { contactColumns } from "@/components/dashboard/columns/contact-columns";
import TableTitle from "@/components/dashboard/ui/table-title";
import DashPageTitle from "@/components/dashboard/ui/dash-page-title";

export type ContactListProps = {
  data: Contact[];
};

const ContactList: React.FC<ContactListProps> = ({ data }) => {
  const tDashboardSupportOrder = useTranslations("dashboard.contact");
  const tCallToAction = useTranslations("callToAction");
  const tResponses = useTranslations("responses");

  const { toast } = useToast();
  const router = useRouter();

  const handleDeleteOrders = async () => {
    try {
      await deleteContactList();
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
      <div className="pb-2 flex justify-between items-center">
        <div className="mb-[-12px]">
          <DashPageTitle title={tDashboardSupportOrder("contactMessages")} />
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
      <TableTitle title={tDashboardSupportOrder("allContactMessages")} />
      <div className="mx-auto">
        <DataTable columns={contactColumns} data={data} />
      </div>
    </>
  );
};

export default ContactList;
