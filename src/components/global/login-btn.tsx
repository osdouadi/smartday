import React from "react";
import { constants } from "@/config/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";

const LoginBtn: React.FC = () => {
  const tCallToAction = useTranslations("callToAction");
  return (
    <Button
      size={"default"}
      className="bg-secondary hover:bg-gray-200 text-gray-900 transition-all rounded-full !text-sm font-semibold tracking-wide px-4 !py-1"
    >
      <Link href={constants.links.signIn}>{tCallToAction("login")}</Link>
    </Button>
  );
};

export default LoginBtn;
