"use client";

import React from "react";
import { FileIcon, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { UploadDropzone } from "@/lib/uploadThing";
import { useTranslations } from "next-intl";

type Props = {
  apiEndpoint:
    | "categoryImage"
    | "galleryImage"
    | "blogImage";
  onChange: (url?: string) => void;
  value?: string;
};

const FileUpload = ({ apiEndpoint, onChange, value }: Props) => {
  const fileType = value?.split(".").pop();
  const callToAction = useTranslations("callToAction");

  if (value) {
    return (
      <div className="w-full flex flex-col justify-center items-center overflow-hidden rounded-lg">
        {fileType !== "pdf" ? (
          <div className="relative mb-2 rounded-lg">
            <img
              src={value}
              alt="uploaded image"
              className="object-fill w-full h-full"
            />
          </div>
        ) : (
          <div className="relative flex items-center p-2 my-2 rounded-md bg-background/10">
            <FileIcon />
            <a
              href={value}
              target="_blank"
              rel="noopener_noreferrer"
              className="ml-2 text-sm text-primary hover:underline"
            >
              View PDF
            </a>
          </div>
        )}
        <Button onClick={() => onChange("")} variant="ghost" type="button">
          <Trash className="h-4 w-4 mx-1 mb-1" />
          {callToAction("deleteImage")}
        </Button>
      </div>
    );
  }
  return (
    <div className="w-full bg-muted/30">
      <UploadDropzone
        endpoint={apiEndpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
        className="ut-button:bg-primary ut-label:text-gray-300 cursor-pointer"
      />
    </div>
  );
};

export default FileUpload;
