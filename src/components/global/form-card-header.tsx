import React from "react";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Undo2 } from "lucide-react";

type FormCardHeaderProps = {
  title: string;
  description: string;
  href: string;
  callToAction: string;
};

const FormCardHeader: React.FC<FormCardHeaderProps> = ({
  title,
  description,
  href,
  callToAction,
}) => {
  return (
    <CardHeader className="w-full flex md:flex-row flex-col justify-between md:gap-0 pb-4 md:pb-0">
      <div>
        <CardTitle className="pb-1.5">{title}</CardTitle>
        <CardDescription className="md:text-lg">{description}</CardDescription>
      </div>
      <Link
        href={href}
        className="bg-primary hover:bg-primary/90 transform transition-all font-medium text-white py-2.5 px-4 rounded-md flex items-center gap-1 w-fit text-sm md:text-base"
      >
        {callToAction}
        <Undo2 strokeWidth={1.4} className="mb-1 w-4 h-4 md:h-6 md:w-6" />
      </Link>
    </CardHeader>
  );
};

export default FormCardHeader;
