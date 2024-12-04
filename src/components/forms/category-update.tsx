"use client";

import React, { useEffect, useState } from "react";

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
import { Button } from "../ui/button";
import InputGroup from "../global/input-group";
import BtnLoading from "../global/btn-loading";

import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { useTranslations } from "next-intl";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import FileUpload from "../global/file-upload";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import { useCategorySchema } from "@/lib/zod-schema/category-schema";
import { CategoryData } from "@/types/category-data";
import { constants } from "@/config/constants";
import { useParams } from "next/navigation";
import FormCardHeader from "../global/form-card-header";
import { SkeletonCard } from "../global/skeleton-card";
import { getCategoryById, updateCategory } from "@/queries/category";

const CategoryUpdate = () => {
  const CategorySchema = useCategorySchema();
  const [categoryData, setCategoryData] = useState<CategoryData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id }: { id: string } = useParams();

  const tDashboardCategory = useTranslations(
    "dashboard.category"
  );
  const tResponse = useTranslations("responses");
  const tCallToAction = useTranslations("callToAction");
  const { toast } = useToast();

  useEffect(() => {
    const fetchCategoryData = async (id: string) => {
      try {
        setIsLoading(true);
        const response = await getCategoryById(id);
        if (response) {
          setIsLoading(false);
          setCategoryData(response);
        }
      } catch (error) {
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: tResponse("fetchFail"),
          description: tResponse("pleaseTryAgain"),
        });
      }
    };

    fetchCategoryData(id ?? "");
  }, [id, toast]);

  const form = useForm<z.infer<typeof CategorySchema>>({
    mode: "onChange",
    resolver: zodResolver(CategorySchema),
  });

  useEffect(() => {
    if (categoryData) {
      form.reset({
        title: {
          ar: categoryData?.title?.ar || "",
          en: categoryData?.title?.en || "",
        },
        summary: {
          ar: categoryData?.summary?.ar || "",
          en: categoryData?.summary?.en || "",
        },
        description: {
          ar: categoryData?.description?.ar || "",
          en: categoryData?.description?.en || "",
        },
        SEOSettings: {
          pageTitle: {
            ar: categoryData?.SEOSettings?.pageTitle.ar || "",
            en: categoryData?.SEOSettings?.pageTitle.en || "",
          },
          pageDescription: {
            ar: categoryData?.SEOSettings?.pageDescription.ar || "",
            en: categoryData?.SEOSettings?.pageDescription.en || "",
          },
        },
        categoryImage: categoryData?.categoryImage || "",
      });
    }
  }, [categoryData, form]);

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof CategorySchema>) => {
    try {
      await updateCategory(id ?? "", values);
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
      {isLoading ? (
        <div className="flex flex-col gap-5">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Card>
              <FormCardHeader
                title={tDashboardCategory("editingCategoryMainDetails")}
                description={tDashboardCategory(
                  "editingCategoryMainDetailsDescription"
                )}
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
                          {tDashboardCategory("editingCategoryImage")}
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
                        <FormLabel>
                          {tDashboardCategory("editingCategoryTitleAR")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={tDashboardCategory(
                              "editingCategoryTitleAR"
                            )}
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
                        <FormLabel>
                          {tDashboardCategory("editingCategoryTitleEN")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={tDashboardCategory(
                              "editingCategoryTitleEN"
                            )}
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
                        <FormLabel>
                          {tDashboardCategory("editingCategorySummaryAR")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={tDashboardCategory(
                              "editingCategorySummaryAR"
                            )}
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
                        <FormLabel>
                          {tDashboardCategory("editingCategorySummaryEN")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={tDashboardCategory(
                              "editingCategorySummaryEN"
                            )}
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
                          {tDashboardCategory("editingCategoryDescriptionAR")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={tDashboardCategory(
                              "editingCategoryDescriptionAR"
                            )}
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
                          {tDashboardCategory("editingCategoryDescriptionEN")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={tDashboardCategory(
                              "editingCategoryDescriptionEN"
                            )}
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
                <CardTitle>
                  {tDashboardCategory("editingSEOSettings")}
                </CardTitle>
                <CardDescription>
                  {tDashboardCategory("editingSEOSettingsDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputGroup>
                  <FormField
                    control={form.control}
                    name="SEOSettings.pageDescription.ar"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel>
                          {tDashboardCategory("editingPageTitleAR")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={tDashboardCategory(
                              "editingPageTitleAR"
                            )}
                            {...field}
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
                          {tDashboardCategory("editingPageTitleEN")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={tDashboardCategory(
                              "editingPageTitleEN"
                            )}
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
                    name="description.ar"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel>
                          {tDashboardCategory("editingPageDescriptionAR")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={tDashboardCategory(
                              "editingPageDescriptionAR"
                            )}
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
                          {tDashboardCategory("editingPageDescriptionEN")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={tDashboardCategory(
                              "editingPageDescriptionEN"
                            )}
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
                {isSubmitting ? <BtnLoading /> : tCallToAction("saveEdits")}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </AlertDialog>
  );
};

export default CategoryUpdate;
