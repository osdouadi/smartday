import clsx from "clsx";
import { useParams } from "next/navigation";
import React from "react";

const UserInfoHeaderCard: React.FC = () => {
  const { locale } = useParams();

  return (
    <div
      className={clsx(
        "flex items-start gap-1.5 rounded-full py-1 px-2.5",
        locale === "ar" ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div
        className={clsx(
          "flex flex-col text-sm text-white",
          locale === "ar" ? "items-end" : "items-start"
        )}
      >
        <span className="font-semibold tracking-wide mb-[-2px]">Admin</span>
        <span className="tracking-wide text-gray-300">info@abak.com</span>
      </div>
      <div className=" bg-gradient-to-tr from-primary to-purple-400 w-2.5 h-2.5 rounded-full mt-[3px]"></div>
    </div>
  );
};

export default UserInfoHeaderCard;
