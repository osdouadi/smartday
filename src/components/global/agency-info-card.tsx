import React from "react";
import { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  details: string;
  icon: LucideIcon;
};

const AgencyInfoCard: React.FC<Props> = ({ details, icon }) => {
  const tContactUs = useTranslations("site.contactUsPage");
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="origin-center w-[26vw] h-[26vw] md:w-[7vw] md:h-[7vw] rotate-[45deg] overflow-hidden z-10">
        <div className="relative my-0 mx-auto origin-center rotate-[-45deg] w-[26vw] h-[26vw] md:w-[7vw] md:h-[7vw] flex justify-center items-center overflow-hidden bg-gray-50 after:absolute after:border-[0.4rem] md:after:border-[0.6rem] after:border-t-primary after:border-b-primary after:border-l-background after:border-r-background after:w-full after:h-full after:top-0">
          {React.createElement(icon, {
            className: "w-[10vw] h-[10vw] md:w-9 md:h-9 text-primary",
            strokeWidth: 1.4,
          })}
        </div>
      </div>

      <span className="font-medium tracking-wide text-primary text-center">
        {tContactUs(details)}
      </span>
    </div>
  );
};

export default AgencyInfoCard;
