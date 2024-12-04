import React from "react";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type AddMoreBtnProps = {
  href: string;
  title: string;
};

const AddMoreBtn: React.FC<AddMoreBtnProps> = ({ href, title }) => {
  const tCallToAction = useTranslations("callToAction");
  
  return (
    <Link
      href={href}
      className="bg-gray-800 hover:bg-gray-700 transition-all rounded-md py-2 px-4 text-sm flex items-center gap-1 text-white"
    >
      {tCallToAction(title)}
      <Plus strokeWidth={1.3} className="h-5 w-5 md:h-5 md:w-5" />
    </Link>
  );
};

export default AddMoreBtn;
