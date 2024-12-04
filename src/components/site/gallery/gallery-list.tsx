"use client";

import React from "react";
import { SkeletonCard } from "@/components/global/skeleton-card";
import SlikyItem from "@/components/global/sliky-item";
import Marquee from "react-fast-marquee";
import { Image } from "@/types/image";
import Error from "@/components/global/error";

type GalleryImageListProps = {
  galleryData: Image[];
  isLoading: boolean;
  error: any;
};

const GalleryImageList = ({
  galleryData,
  isLoading,
  error,
}: GalleryImageListProps) => {
  return error ? (
    <Error />
  ) : (
    <Marquee loop={0} className="w-full flex relative">
      {isLoading ? (
        <div className="flex items-center gap-5 flex-col md:flex-row">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        galleryData
          .filter((filteredItem: Image) => !filteredItem.isDisabled)
          .map((item: Image, index: number) => (
            <SlikyItem key={index}>
              <img
                src={item?.galleryImage}
                alt=""
                className="h-full rounded-lg"
              />
            </SlikyItem>
          ))
      )}
    </Marquee>
  );
};

export default GalleryImageList;
