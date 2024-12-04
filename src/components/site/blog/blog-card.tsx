"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Share2 } from "lucide-react";
import { constants } from "@/config/constants";
import { useTranslations } from "next-intl";

import {
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
} from "react-share";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "react-social-icons";
import { useParams } from "next/navigation";

type BlogCardProps = {
  title: string;
  shortDescription: string;
  id: string;
  blogImage: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  shortDescription,
  id,
  blogImage,
}) => {
  const tCallToAction = useTranslations("callToAction");
  const { locale } = useParams();

  return (
    <Card className="w-full h-[23rem] md:h-[28rem] text-center overflow-hidden">
      <div className="w-full h-[11rem] md:h-[14rem] relative flex justify-center mt-[-5px]">
        <Image
          src={blogImage}
          alt="test"
          width={700}
          height={700}
          quality={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-[11rem] md:h-[14rem] py-4 pb-0 md:pb-[10px] px-2 flex flex-col justify-between">
        <div>
          <CardTitle className="mb-2 w-full line-clamp-1 !leading-[34px] font-medium md:text-lg">
            {title}
          </CardTitle>
          <CardDescription className="w-full line-clamp-3 md:line-clamp-5">
            {shortDescription}
          </CardDescription>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link
            href={`${constants.links.siteBlogs}${id}`}
            className="bg-primary text-sm h-[40px] px-2.5 rounded-md flex justify-center items-center text-white dark:hover-bg-primary hover:opacity-90 transition-all"
          >
            <span>{tCallToAction("readMore")}</span>
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-sm h-[41px] px-2.5 rounded-md"
              >
                {tCallToAction("share")}
                <Share2 strokeWidth={1.4} className="w-4 h-4 mb-[0.02rem]" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-center">
                  {tCallToAction("sharingTheBlog")}
                </AlertDialogTitle>
                <AlertDialogDescription className="text-center">
                  {tCallToAction("sharingTheBlogDescription")}
                  <div className="flex justify-center items-center gap-3 mt-2">
                    <EmailShareButton
                      url={`${process.env.NEXT_PUBLIC_URL}${locale}${constants.links.siteBlogs}${id}`}
                    >
                      <SocialIcon url="https://email.com" />
                    </EmailShareButton>
                    <LinkedinShareButton
                      url={`${process.env.NEXT_PUBLIC_URL}${locale}${constants.links.siteBlogs}${id}`}
                    >
                      <SocialIcon url="https://linkedin.com" />
                    </LinkedinShareButton>
                    <TwitterShareButton
                      url={`${process.env.NEXT_PUBLIC_URL}${locale}${constants.links.siteBlogs}${id}`}
                    >
                      <SocialIcon url="https://x.com" />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={`${process.env.NEXT_PUBLIC_URL}${locale}${constants.links.siteBlogs}${id}`}
                    >
                      <SocialIcon url="https://whatsapp.com" />
                    </WhatsappShareButton>
                    <TelegramShareButton
                      url={`${process.env.NEXT_PUBLIC_URL}${locale}${constants.links.siteBlogs}${id}`}
                    >
                      <SocialIcon url="https://telegram.com" />
                    </TelegramShareButton>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mx-auto">
                <AlertDialogCancel className="bg-primary text-white">
                  {tCallToAction("close")}
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
