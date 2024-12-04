"use client";

import React, { useEffect, useState } from "react";

import { AlertDialog } from "../ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import BtnLoading from "../global/btn-loading";

import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTranslations } from "next-intl";
import { getMetadata, updateMetadata } from "@/queries/app-settings";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import InputGroup from "../global/input-group";
import { CardHeader } from "../ui/card";
import { useMetadataSchema } from "@/lib/zod-schema/meta-data";

type Data = {
  homePageMetadata: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  };
  aboutUsPageMetadata: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  };
  pricingPageMetadata: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  };
  contactPageMetadata: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  };
  blogsPageMetadata: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  };
};

const SEOSettingsForm: React.FC = () => {
  const MetadataSchema = useMetadataSchema();
  const [metadata, setMetadata] = useState<Data | null>(null);
  const tResponse = useTranslations("responses");
  const tCallToAction = useTranslations("callToAction");
  const tSettigns = useTranslations("dashboard.settings");
  const { toast } = useToast();

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await getMetadata();

        if (response) {
          setMetadata(response);
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: tResponse("fetchFail"),
          description: tResponse("pleaseTryAgain"),
        });
      }
    };

    fetchMetadata();
  }, [toast, tResponse]);

  const form = useForm<z.infer<typeof MetadataSchema>>({
    mode: "onChange",
    resolver: zodResolver(MetadataSchema),
    defaultValues: {
      homePageMetadata: {
        title: {
          ar: "",
          en: "",
        },
        description: {
          ar: "",
          en: "",
        },
      },
      aboutUsPageMetadata: {
        title: {
          ar: "",
          en: "",
        },
        description: {
          ar: "",
          en: "",
        },
      },
      pricingPageMetadata: {
        title: {
          ar: "",
          en: "",
        },
        description: {
          ar: "",
          en: "",
        },
      },
      contactPageMetadata: {
        title: {
          ar: "",
          en: "",
        },
        description: {
          ar: "",
          en: "",
        },
      },
      blogsPageMetadata: {
        title: {
          ar: "",
          en: "",
        },
        description: {
          ar: "",
          en: "",
        },
      },
    },
  });

  useEffect(() => {
    if (metadata) {
      form.reset({
        homePageMetadata: {
          title: {
            ar: metadata?.homePageMetadata?.title?.ar || "",
            en: metadata?.homePageMetadata?.title?.en || "",
          },
          description: {
            ar: metadata?.homePageMetadata?.description?.ar || "",
            en: metadata?.homePageMetadata?.description?.en || "",
          },
        },
        aboutUsPageMetadata: {
          title: {
            ar: metadata?.aboutUsPageMetadata?.title?.ar || "",
            en: metadata?.aboutUsPageMetadata?.title?.en || "",
          },
          description: {
            ar: metadata?.aboutUsPageMetadata?.description?.ar || "",
            en: metadata?.aboutUsPageMetadata?.description?.en || "",
          },
        },
        pricingPageMetadata: {
          title: {
            ar: metadata?.pricingPageMetadata?.title?.ar || "",
            en: metadata?.pricingPageMetadata?.title?.en || "",
          },
          description: {
            ar: metadata?.pricingPageMetadata?.description?.ar || "",
            en: metadata?.pricingPageMetadata?.description?.en || "",
          },
        },
        contactPageMetadata: {
          title: {
            ar: metadata?.contactPageMetadata?.title?.ar || "",
            en: metadata?.contactPageMetadata?.title?.en || "",
          },
          description: {
            ar: metadata?.contactPageMetadata?.description?.ar || "",
            en: metadata?.contactPageMetadata?.description?.en || "",
          },
        },
        blogsPageMetadata: {
          title: {
            ar: metadata?.blogsPageMetadata?.title?.ar || "",
            en: metadata?.blogsPageMetadata?.title?.en || "",
          },
          description: {
            ar: metadata?.blogsPageMetadata?.description?.ar || "",
            en: metadata?.blogsPageMetadata?.description?.en || "",
          },
        },
      });
    }
  }, [metadata, form]);

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof MetadataSchema>) => {
    try {
      await updateMetadata(values);
      toast({
        title: tResponse("updateSuccess"),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: tResponse("updateFail"),
        description: tResponse("pleaseTryAgain"),
      });
    }
  };

  return (
    <AlertDialog>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CardHeader className="text-lg text-center">
            {tSettigns("homepage")}
          </CardHeader>
          <InputGroup>
            <FormField
              control={form.control}
              name="homePageMetadata.title.ar"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("homePageTitleAR")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={tSettigns("homePageTitleAR")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="homePageMetadata.title.en"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("homePageTitleEN")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={tSettigns("homePageTitleEN")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </InputGroup>
          <InputGroup>
            <FormField
              control={form.control}
              name="homePageMetadata.description.ar"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("homePageDescriptionAR")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={tSettigns("homePageDescriptionAR")}
                      {...field}
                      className="h-44 md:h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="homePageMetadata.description.en"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("homePageDescriptionEN")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={tSettigns("homePageDescriptionEN")}
                      {...field}
                      className="h-44 md:h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </InputGroup>
          <CardHeader className="text-lg text-center">
            {tSettigns("aboutUsPage")}{" "}
          </CardHeader>
          <InputGroup>
            <FormField
              control={form.control}
              name="aboutUsPageMetadata.title.ar"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("aboutUsPageTitleAR")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={tSettigns("aboutUsPageTitleAR")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutUsPageMetadata.title.en"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("aboutUsPageTitleEN")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={tSettigns("aboutUsPageTitleEN")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </InputGroup>
          <InputGroup>
            <FormField
              control={form.control}
              name="aboutUsPageMetadata.description.ar"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("aboutUsPageDescriptionAR")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={tSettigns("aboutUsPageDescriptionAR")}
                      {...field}
                      className="h-44 md:h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutUsPageMetadata.description.en"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("aboutUsPageDescriptionEN")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={tSettigns("aboutUsPageDescriptionEN")}
                      {...field}
                      className="h-44 md:h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </InputGroup>
          <CardHeader className="text-lg text-center">
            {tSettigns("contactPage")}
          </CardHeader>
          <InputGroup>
            <FormField
              control={form.control}
              name="contactPageMetadata.title.ar"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("contactPageTitleAR")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={tSettigns("contactPageTitleAR")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactPageMetadata.title.en"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("contactPageTitleEN")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={tSettigns("contactPageTitleEN")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </InputGroup>
          <InputGroup>
            <FormField
              control={form.control}
              name="contactPageMetadata.description.ar"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("contactPageDescriptionAR")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={tSettigns("contactPageDescriptionAR")}
                      {...field}
                      className="h-44 md:h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactPageMetadata.description.en"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("contactPageDescriptionEN")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={tSettigns("contactPageDescriptionEN")}
                      {...field}
                      className="h-44 md:h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </InputGroup>
          <CardHeader className="text-lg text-center">
            {tSettigns("pricingPage")}
          </CardHeader>
          <InputGroup>
            <FormField
              control={form.control}
              name="pricingPageMetadata.title.ar"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("pricingPageTitleAR")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={tSettigns("pricingPageTitleAR")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pricingPageMetadata.title.en"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("pricingPageTitleEN")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={tSettigns("pricingPageTitleEN")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </InputGroup>
          <InputGroup>
            <FormField
              control={form.control}
              name="pricingPageMetadata.description.ar"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("pricingPageDescriptionAR")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={tSettigns("pricingPageDescriptionAR")}
                      {...field}
                      className="h-44 md:h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pricingPageMetadata.description.en"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("pricingPageDescriptionEN")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={tSettigns("pricingPageDescriptionEN")}
                      {...field}
                      className="h-44 md:h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </InputGroup>
          <CardHeader className="text-lg text-center">
            {tSettigns("blogsPage")}{" "}
          </CardHeader>
          <InputGroup>
            <FormField
              control={form.control}
              name="blogsPageMetadata.title.ar"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("blogsPageTitleAR")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={tSettigns("blogsPageTitleAR")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="blogsPageMetadata.title.en"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("blogsPageTitleEN")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={tSettigns("blogsPageTitleEN")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </InputGroup>
          <InputGroup>
            <FormField
              control={form.control}
              name="blogsPageMetadata.description.ar"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("blogsPageDescriptionAR")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={tSettigns("blogsPageDescriptionAR")}
                      {...field}
                      className="h-44 md:h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="blogsPageMetadata.description.en"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{tSettigns("blogsPageDescriptionEN")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={tSettigns("blogsPageDescriptionEN")}
                      {...field}
                      className="h-44 md:h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </InputGroup>
          <div className="flex justify-center">
            <Button
              disabled={isSubmitting}
              type="submit"
              size={"lg"}
            >
              {isSubmitting ? <BtnLoading /> : tCallToAction("saveEdits")}
            </Button>
          </div>
        </form>
      </Form>
    </AlertDialog>
  );
};

export default SEOSettingsForm;
