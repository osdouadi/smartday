"use client";

import React from "react";
import Link from "next/link";
import HeaderContainer from "../../global/header-container";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";
import { Button } from "../../ui/button";
import { ExternalLink, MenuIcon, Settings, X } from "lucide-react";
import { adminNavigationLinks } from "@/lib/data";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import LogoutButton from "../../global/logout-btn";
import LangSwitcher from "@/components/global/lang-switcher";
import { useParams, usePathname } from "next/navigation";

const Header = () => {
  const tCommon = useTranslations("common");
  const tHeader = useTranslations("dashboard.header");
  const tCallToAction = useTranslations("callToAction");
   const { locale } = useParams();
   const currentPath = usePathname();

  return (
    <HeaderContainer>
      <div className="w-full flex items-center justify-between md:px-5">
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <Button size={"default"}>
            <Link href={"/admin-dashboard/settings"}>
              <Settings />
            </Link>
          </Button>
        </div>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto text-center">
              <DrawerHeader className="text-sm">
                <DrawerTitle className="text-base md:text-lg font-medium opacity-85">
                  {tCommon("brandFullName")}
                </DrawerTitle>
                <DrawerDescription>{tCommon("slogan")}</DrawerDescription>
              </DrawerHeader>
            </div>
            <ul className="py-1.5 mx-4 md:mx-5 flex flex-col h-[18rem] md:h-[20rem] overflow-auto overflow-x-hidden">
              {adminNavigationLinks.map((item, index: number) => (
                <DrawerClose key={index} asChild>
                  <Link
                    href={item.href}
                    className={clsx(
                      "relative w-fit flex items-center gap-2 my-2 pb-1.5 md:my-2.5 md:pb-1.5 text-[0.97rem] hover:text-gray-400 transform translate-all",
                      {
                        "text-gray-400 z-10":
                          currentPath === `/${locale}${item.href}`,
                      }
                    )}
                  >
                    {React.createElement(item.icon, {
                      className: "w-6 h-6 md:w-7 md:h-7",
                      strokeWidth: 1.2,
                    })}
                    <span className="pt-1 md:text-base hover:active-link">
                      {tHeader(item.title)}
                    </span>
                  </Link>
                </DrawerClose>
              ))}
            </ul>
            <div className="py-4 mx-4 md:mx-5 border-t-[0.012rem] border-white/40 flex items-center justify-between gap-4">
              <Link
                href={"/"}
                target={"_blank"}
                className="text-secondary hover:text-gray-500 transition-all flex items-center gap-1 md:gap-2 text-sm md:text-base"
              >
                {tCallToAction("visitSite")}
                <ExternalLink
                  className="h-5 w-5 md:h-6 md:w-6"
                  strokeWidth={1.2}
                />
              </Link>
              <div className="flex items-center gap-3">
                <LogoutButton />
                <DrawerClose asChild>
                  <Button variant="outline" size={"default"}>
                    <X className="text-red-500 h-5 w-5" />
                  </Button>
                </DrawerClose>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
