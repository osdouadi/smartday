import { getMetadata } from "@/queries/app-settings";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const metadata = await getMetadata();
  return {
    title:
      locale === "ar"
        ? metadata?.contactPageMetadata?.title?.ar
        : metadata?.contactPageMetadata?.title?.en,
    description:
      locale === "ar"
        ? metadata?.contactPageMetadata?.description?.ar
        : metadata?.contactPageMetadata?.description?.en,
  };
}

type ContactLayout = {
  children: React.ReactNode;
};

const ContactLayout: React.FC<ContactLayout> = ({ children }) => {
  return children;
};

export default ContactLayout;
