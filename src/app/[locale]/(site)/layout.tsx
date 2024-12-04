import React from "react";
import { Metadata } from "next";
import { getActiveUserDetails } from "@/queries/user";
import Navigation from "@/components/site/navigation/navigation";
import { getMetadata } from "@/queries/app-settings";
import Footer from "@/containers/footer/footer";
import FixedSupportCTA from "@/components/global/fixed-cta-btn";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const metadata = await getMetadata();
  return {
    title:
      locale === "ar"
        ? metadata?.homePageMetadata?.title?.ar
        : metadata?.homePageMetadata?.title?.en,
    description:
      locale === "ar"
        ? metadata?.homePageMetadata?.description?.ar
        : metadata?.homePageMetadata?.description?.en,
  };
}

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getActiveUserDetails();
  return (
    <main className="h-full">
      <Navigation user={user} />
      <div className="pt-[4.4rem] md:pt-14">
        {children}
        <FixedSupportCTA />
      </div>
      <Footer />
    </main>
  );
};

export default layout;
