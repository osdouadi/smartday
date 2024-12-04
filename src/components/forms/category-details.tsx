"use client";

import React from "react";

import { AlertDialog } from "../ui/alert-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import FileUpload from "../global/file-upload";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import InputGroup from "../global/input-group";
import BtnLoading from "../global/btn-loading";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "../ui/use-toast";
import { useTranslations } from "next-intl";

import { useCategorySchema } from "@/lib/zod-schema/category-schema";
import { createCategory } from "@/queries/category";
import { constants } from "@/config/constants";
import FormCardHeader from "../global/form-card-header";

const CategoryDetails = () => {
  const CategorySchema = useCategorySchema();
  const tDashboardCategory = useTranslations(
    "dashboard.category"
  );
  const tResponse = useTranslations("responses");
  const tCallToAction = useTranslations("callToAction");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof CategorySchema>>({
    mode: "onChange",
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      title: {
        ar: "",
        en: "",
      },
      summary: {
        ar: "",
        en: "",
      },
      description: {
        ar: "",
        en: "",
      },
      SEOSettings: {
        pageTitle: {
          ar: "",
          en: "",
        },
        pageDescription: {
          ar: "",
          en: "",
        },
      },
      categoryImage: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof CategorySchema>) => {
    try {
      await createCategory(values);
      toast({
        title: tResponse("addSuccess"),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: tResponse("addFail"),
        description: tResponse("pleaseTryAgain"),
      });
    }
  };

  return (
    <AlertDialog>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Card>
            <FormCardHeader
              title={tDashboardCategory("detailsTitle")}
              description={tDashboardCategory("detailsDescription")}
              href={constants.links.adminCategories}
              callToAction={tCallToAction("backToCategories")}
            />
            <CardContent>
              <div>
                <FormField
                  name="categoryImage"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full py-4">
                      <FormLabel>
                        {tDashboardCategory("categoryImage")}
                      </FormLabel>
                      <FormControl>
                        <FileUpload
                          apiEndpoint="categoryImage"
                          onChange={field.onChange}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <InputGroup>
                <FormField
                  control={form.control}
                  name="title.ar"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel>{tDashboardCategory("titleAR")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={tDashboardCategory("titleAR")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title.en"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel>{tDashboardCategory("titleEN")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={tDashboardCategory("titleEN")}
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
                  name="summary.ar"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel>{tDashboardCategory("summaryAR")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={tDashboardCategory("summaryAR")}
                          {...field}
                          className="h-28 md:h-32"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="summary.en"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel>{tDashboardCategory("summaryEN")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={tDashboardCategory("summaryEN")}
                          {...field}
                          className="h-28 md:h-32"
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
                  name="description.ar"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel>
                        {tDashboardCategory("descriptionAR")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={tDashboardCategory("descriptionAR")}
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
                  name="description.en"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel>
                        {tDashboardCategory("descriptionEN")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={tDashboardCategory("descriptionEN")}
                          {...field}
                          className="h-44 md:h-48"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </InputGroup>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{tDashboardCategory("SEOSettings")}</CardTitle>
              <CardDescription>
                {tDashboardCategory("SEOSettingsDescription")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InputGroup>
                <FormField
                  control={form.control}
                  name="SEOSettings.pageTitle.ar"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel>{tDashboardCategory("pageTitleAR")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={tDashboardCategory("pageTitleAR")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="SEOSettings.pageTitle.en"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel>{tDashboardCategory("pageTitleEN")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={tDashboardCategory("pageTitleEN")}
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
                  name="SEOSettings.pageDescription.ar"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel>
                        {tDashboardCategory("pageDescriptionAR")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={tDashboardCategory("pageDescriptionAR")}
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
                  name="SEOSettings.pageDescription.en"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel>
                        {tDashboardCategory("pageDescriptionEN")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={tDashboardCategory("pageDescriptionEN")}
                          {...field}
                          className="h-44 md:h-48"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </InputGroup>
            </CardContent>
          </Card>
          <div className="flex justify-center">
            <Button disabled={isSubmitting} type="submit" size={"lg"}>
              {isSubmitting ? <BtnLoading /> : tCallToAction("addCategory")}
            </Button>
          </div>
        </form>
      </Form>
    </AlertDialog>
  );
};

export default CategoryDetails;
