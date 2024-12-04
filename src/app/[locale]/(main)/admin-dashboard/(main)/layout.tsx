import React from "react";
import Header from "@/components/dashboard/ui/header";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "سمارت داي | لوحة التحكم"
};

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="py-8 pt-[5.2222rem] px-2.5 md:px-10 md:py-12 md:pt-24">
        {children}
      </main>
    </>
  );
};

export default AdminLayout;
