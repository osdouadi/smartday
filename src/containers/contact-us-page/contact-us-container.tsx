import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactForm from "@/components/forms/contact-form";
import PageDescription from "@/components/global/page-description";
import PageTitle from "@/components/global/page-title";
import { media } from "@/config/media";
import { agencyInfo } from "@/lib/data";
import Link from "next/link";

const ContactUsContainer: React.FC = () => {
  const tContactUs = useTranslations("site.contactUsPage");
  return (
    <>
      <div className="h-[48vw] w-full md:h-[35vw] relative">
        <Image
          src={"/assets/0.jpg"}
          alt={"abak"}
          width={2000}
          height={2000}
          className="h-[48vw] w-full md:h-[35vw] absolute"
        />
      </div>
      <div className="py-5 px-4 md:p-10">
        <PageTitle>{tContactUs("contactUS")}</PageTitle>
        <PageDescription>{tContactUs("content")}</PageDescription>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center content-center place-content-center gap-4 pt-5">
          {agencyInfo.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="bg-card flex items-center justify-center md:justify-start md:flex-row flex-col gap-3 md:gap-5 p-3 md:p-4 md:h-40 rounded-lg cursor-pointer group hover:bg-primary transition-all"
            >
              <div className="h-12 w-12 md:h-full md:min-w-[7.5rem] bg-white group-hover:bg-card transition-all text-primary group-hover:text-white rounded-full flex justify-center items-center duration-300">
                {React.createElement(item.icon, {
                  className: "w-7 h-7 md:w-11 md:h-11",
                  strokeWidth: 1.5,
                })}
              </div>
              <div className="text-center md:text-start">
                <h3 className="font-medium text-white transition-all text-lg md:text-2xl pb-1">
                  {tContactUs(item.title)}
                </h3>
                <p> {tContactUs(item.details)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default ContactUsContainer;
