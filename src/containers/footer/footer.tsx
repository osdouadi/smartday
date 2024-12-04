"use client";

import { media } from "@/config/media";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const tFooter = useTranslations("site.footer");
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full min-h-[200px]">
      <div className="w-full pt-[60px] px-2 md:px-12 pb-4 md:pb-6 gap-8 flex items-center justify-center">
        <div className="w-full px-4 flex flex-col items-center">
          <div className="flex flex-col items-center text-center pb-2.5 md:pb-0">
            <Image
              src={media.images.logos.brandLogo}
              alt="abak"
              width={170}
              height={170}
              className="w-[5rem] md:w-[6.3rem]"
            />
            <p className="text-[#f9fafa] text-sm pt-2.5 text-center text-muted-foreground ">
              info@sd.com.sa
            </p>
            <p className="text-[#f9fafa] text-[1.1rem] pt-2.5 text-sm md:text-lg">
              {tFooter("description")}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0.7, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:pt-4 flex items-center gap-4"
          >
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer pt-0.5"
            >
              <Link
                href="https://www.instagram.com/smartday.sa?igsh=ZHk2cmpuejZlaHA5"
                className="text-gray-50"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                color="currentColor"
                fill="none"
              >
                <path
                  d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M17.5078 6.5L17.4988 6.5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </motion.div>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <Link
                href="https://www.linkedin.com/in/smart-day-284807292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-gray-50 cursor-pointer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                color="currentColor"
                fill="none"
              >
                <path
                  d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </motion.div>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer pt-0.5"
            >
              <Link
                href="https://twitter.com/smartday_sa"
                className="text-gray-50"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="currentColor"
                fill="none"
              >
                <path
                  d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div>
        <hr className="border-gray-50/20" />
        <div className="text-[#f9fafa] py-4 pt-2 px-8 flex flex-col items-center justify-center">
          <hr className="pt-1 w-1/2 text-center mx-auto hidden text-gray-50" />
          <span className="pb-1.5 pt-0 text-xs md:text-sm mt-1.5 md:mt-2">
            {tFooter("coyrights")} &copy; {currentYear}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
