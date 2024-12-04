"use client"

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { media } from "@/config/media";
import { navigationLinks } from "@/lib/data";
import MobileNavigation from "./mobile-navigation";
import { UserResource } from "@clerk/types";
import LoginBtn from "@/components/global/login-btn";
import LangSwitcher from "@/components/global/lang-switcher";
import { ChevronDown, UserRoundCheck } from "lucide-react";
import ItemsWrapper from "@/components/global/items-wrapper";

type NavigationProps = {
  user?: UserResource | null;
};

const Navigation: React.FC<NavigationProps> = ({ user }) => {
  const tHeader = useTranslations("site.header");

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownVisible((prev) => !prev);

  const closeDropdown = () => setIsDropdownVisible(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 py-4 pr-8 pl-3 flex items-center justify-between bg-background z-[9999]">
      <aside className="flex items-center gap-2">
        <Link href={"/"} className="cursor-pointer">
          <Image
            src={media.images.logos.brandLogo}
            alt="abak"
            width={1000}
            height={1000}
            className="w-[5.5rem] md:w-[5.5rem] h-auto"
          />
        </Link>
      </aside>
      <nav className="hidden md:block absolute pt-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ul className="relative flex items-center justify-center gap-5 md:gap-7">
          {navigationLinks.map((item, index) => (
            <li key={index}>
              {item.hasSubmenu ? (
                <div className="group relative" ref={dropdownRef}>
                  <span
                    className="flex items-center gap-0.5 cursor-pointer"
                    onMouseEnter={toggleDropdown}
                    onClick={toggleDropdown}
                  >
                    {tHeader(item.title)}
                    <ChevronDown className="w-4 h-4" />
                  </span>
                  {isDropdownVisible && (
                    <div className="mt-1 absolute z-[9999] opacity-100 transition-all">
                      <ItemsWrapper
                        onLinkClick={closeDropdown}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="relative text-base active-link pb-1 hover:after:w-full transform transition-all after:duration-300"
                >
                  {tHeader(item.title)}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <aside className="flex gap-3 items-center">
        <div className="hidden md:block">
          {!user ? (
            <LoginBtn />
          ) : (
            <Link
              href={"/admin-dashboard"}
              className="bg-secondary hover:bg-gray-300 transform text-primary flex items-center justify-center py-2 px-4 rounded-md transition-all text-base"
            >
              <UserRoundCheck />
            </Link>
          )}
        </div>
        <div className="hidden md:block">
          <LangSwitcher />
        </div>
        <MobileNavigation user={user} />
      </aside>
    </div>
  );
};

export default Navigation;
