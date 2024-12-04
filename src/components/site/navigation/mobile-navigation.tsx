"use client";

import React, { useState } from "react";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { navigationLinks } from "@/lib/data";
import clsx from "clsx";
import { ChevronLeft, CircleGauge, Menu, X } from "lucide-react";
import { UserResource } from "@clerk/types";
import { useTranslations } from "next-intl";
import LoginBtn from "@/components/global/login-btn";
import LangSwitcher from "@/components/global/lang-switcher";
import MobileItemsWrapper from "@/components/global/mobile-items-wrapper";

type NavigationProps = {
  user?: UserResource | null;
};

const MobileNavigation: React.FC<NavigationProps> = ({ user }) => {
  const tHeader = useTranslations("site.header");
  const tCommon = useTranslations("common");
  const { locale } = useParams();
  const currentPath = usePathname();
  const [isMobileItemsOpen, setIsMobileItemsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto text-center">
            <DrawerHeader className="text-sm">
              <DrawerTitle className="text-base font-medium opacity-85">
                {tCommon("brandFullName")}
              </DrawerTitle>
              <DrawerDescription>{tCommon("slogan")}</DrawerDescription>
            </DrawerHeader>
          </div>
          <ul className="mx-3 flex flex-col h-[15.6rem] overflow-scroll">
            {isMobileItemsOpen ? (
              <MobileItemsWrapper
                setIsMobileItemsOpen={setIsMobileItemsOpen}
                isMobileItemsOpen={isMobileItemsOpen}
              />
            ) : (
              navigationLinks.map((item, index) => (
                <div key={index}>
                  {item.hasSubmenu ? (
                    <div
                      className={clsx(
                        "relative w-fit flex items-center gap-2 mb-4 pb-1.5 text-[0.97rem] hover:text-gray-500 transform translate-all",
                        {
                          "text-gray-400 z-10":
                            currentPath === `/${locale}${item.href}` ||
                            (currentPath === `/${locale}` && item.href === "/"),
                        }
                      )}
                    >
                      {React.createElement(item.icon, {
                        className: "w-6 h-6",
                        strokeWidth: 1.2,
                      })}
                      <span
                        onClick={() => setIsMobileItemsOpen(true)}
                        className="flex items-center gap-1 mt-0.5"
                      >
                        {tHeader(item.title)}{" "}
                        <ChevronLeft className="w-4 h-4" />
                      </span>
                    </div>
                  ) : (
                    <DrawerClose asChild>
                    <Link
                      href={item.href}
                      className={clsx(
                        "relative w-fit flex items-center gap-2 mb-4 pb-1.5 text-[0.97rem] hover:text-gray-500 transform translate-all",
                        {
                          "text-gray-400 z-10":
                            currentPath === `/${locale}${item.href}` ||
                            (currentPath === `/${locale}` && item.href === "/"),
                        }
                      )}
                    >
                      {React.createElement(item.icon, {
                        className: "w-6 h-6",
                        strokeWidth: 1.2,
                      })}
                      <span className="pt-1 hover:text-gray-500">
                        {tHeader(item.title)}
                      </span>
                    </Link>
                    </DrawerClose>
                  )}
                </div>
              ))
            )}
          </ul>
          <div className="py-4 px-3 border-t-[0.012rem] border-white/40 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <DrawerClose asChild>
                <Button variant="outline" size={"default"}>
                  <X className="text-red-500 w-6 h-6" />
                </Button>
              </DrawerClose>
              {!user ? (
                <LoginBtn />
              ) : (
                <>
                  <Button
                    variant="link"
                    size={"default"}
                    className="bg-gray-100 hover:bg-gray-400 text-primary transition-all"
                  >
                    <Link href={"/admin-dashboard"}>
                      <CircleGauge className="w-6 h-6" />
                    </Link>
                  </Button>
                </>
              )}
            </div>
            <div className="block md:hidden">
              <LangSwitcher />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNavigation;
