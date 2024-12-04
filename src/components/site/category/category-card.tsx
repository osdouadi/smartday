import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";

type CategoryCardProps = {
  id: string;
  title: string;
  icon: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ id, title, icon }) => {
  const tCallToAction = useTranslations("callToAction");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative w-[95%] md:min-w-full overflow-hidden rounded-lg transition-all duration-300 ease-out flex flex-col justify-between md:h-[17rem] md:min-h-[17rem] ${
        isHovered ? "shadow-lg" : "shadow-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-b from-gray-200 to-white opacity-100 transition-opacity duration-300 ${
          isHovered ? "opacity-0" : ""
        }`}
      />

      <CardHeader className="relative z-10 flex-grow flex flex-col items-center pt-4 pb-4">
        <div
          className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
            isHovered ? "shadow-md" : "shadow-sm"
          }`}
        >
          <Image
            src={icon}
            alt={title}
            width={1200}
            height={1200}
            className={`w-12 h-auto text-gray-600 transition-all duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          />
        </div>
        <h3 className="text-lg font-bold text-center text-gray-800">{title}</h3>
      </CardHeader>

      {/* Card Footer */}
      <CardFooter className="relative z-10 px-6 mt-auto pb-6 md:h-[3rem]">
        <Link
          href={`categories/${id}`}
          className={`w-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 text-center py-2.5 rounded-md ${
            isHovered ? "shadow-md" : "shadow-sm"
          }`}
        >
          {tCallToAction("orderNow")}
        </Link>
      </CardFooter>
    </div>
  );
};

export default CategoryCard;
