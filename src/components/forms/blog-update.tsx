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
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import InputGroup from "../global/input-group";
import BtnLoading from "../global/btn-loading";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FileUpload from "../global/file-upload";

import { useToast } from "../ui/use-toast";

import { BlogData } from "@/types/blog-data";
import { getBlogById, updateBlog } from "@/queries/blog";
import { useBlogSchema } from "@/lib/zod-schema/blog-schema";
import { useTranslations } from "next-intl";
import { constants } from "@/config/constants";
import FormCardHeader from "../global/form-card-header";
import { useParams } from "next/navigation";
import { SkeletonCard } from "../global/skeleton-card";
import Tiptap from "../dashboard/ui/editor/tiptap";

const BlogUpdate = () => {
  const BlogSchema = useBlogSchema();
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const tDashboardBlog = useTranslations("dashboard.blog");
  const tResponse = useTranslations("responses");
  const tCallToAction = useTranslations("callToAction");

  const { id, locale }: { id: string; locale: string } = useParams();
  const { toast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    const fetchBlogData = async (id: string) => {
      try {
        const response = await getBlogById(id);
        if (response) {
          setIsLoading(false);
          setBlogData(response);
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

    fetchBlogData(id ?? "");
  }, [id, toast]);

  const form = useForm<z.infer<typeof BlogSchema>>({
    mode: "onChange",
    resolver: zodResolver(BlogSchema),
  });

  useEffect(() => {
    if (blogData) {
      form.reset({
        title: {
          ar: blogData?.title?.ar || "",
          en: blogData?.title?.en || "",
        },
        shortDescription: {
          ar: blogData?.shortDescription?.ar || "",
          en: blogData?.shortDescription?.en || "",
        },
        longDescription: {
          ar: blogData?.longDescription?.ar || "",
          en: blogData?.longDescription?.en || "",
        },
        blogImage: blogData?.blogImage || "",
        SEOSettings: {
          pageTitle: {
            ar: blogData?.SEOSettings?.pageTitle.ar || "",
            en: blogData?.SEOSettings?.pageTitle.en || "",
          },
          pageDescription: {
            ar: blogData?.SEOSettings?.pageDescription.ar || "",
            en: blogData?.SEOSettings?.pageDescription.en || "",
          },
        },
      });
    }
  }, [blogData, form]);

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof BlogSchema>) => {
    try {
      await updateBlog(id ?? "", values);
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
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 py-4"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <Card>
              <FormCardHeader
                title={tDashboardBlog("EditingBlogMainDetails")}
                description={tDashboardBlog(
                  "EditingBlogMainDetailsDescription"
                )}
                href={constants.links.adminBlogs}
                callToAction={tCallToAction("backToBlogs")}
              />
              <CardContent>
                <FormField
                  name="blogImage"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full mb-5 md:pb-6 py-4">
                      <FormLabel>
                        {tDashboardBlog("editingBlogImage")}
                      </FormLabel>
                      <FormControl>
                        <FileUpload
                          apiEndpoint="blogImage"
                          onChange={field.onChange}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <InputGroup>
                  <FormField
                    control={form.control}
                    name="title.ar"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel>
                          {tDashboardBlog("editingBlogTitleAR")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={tDashboardBlog("editingBlogTitleAR")}
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
                          {tDashboardBlog("editingBlogTitleEN")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={tDashboardBlog("editingBlogTitleEN")}
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
                    name="shortDescription.ar"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel>
                          {tDashboardBlog("editingBlogShortDescriptionAR")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={tDashboardBlog(
                              "editingBlogShortDescriptionAR"
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
                    name="shortDescription.en"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel>
                          {tDashboardBlog("editingBlogShortDescriptionEN")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={tDashboardBlog(
                              "editingBlogShortDescriptionEN"
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
                <FormField
                  control={form.control}
                  name="longDescription.ar"
                  render={({ field }) => (
                    <FormItem className="w-full mb-10">
                      <FormLabel>
                        {tDashboardBlog("editingBlogLongDescriptionAR")}
                      </FormLabel>
                      <FormControl>
                        <Tiptap
                          {...field}
                          content={blogData?.longDescription?.ar}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longDescription.en"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        {tDashboardBlog("editingBlogLongDescriptionEN")}
                      </FormLabel>
                      <FormControl>
                        <Tiptap
                          {...field}
                          content={blogData?.longDescription?.en}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{tDashboardBlog("editingSEOSettings")}</CardTitle>
                <CardDescription>
                  {tDashboardBlog("editingSEOSettingsDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputGroup>
                  <FormField
                    control={form.control}
                    name="SEOSettings.pageTitle.ar"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel>
                          {tDashboardBlog("editingPageTitleAR")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={tDashboardBlog("editingPageTitleEN")}
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
                        <FormLabel>
                          {tDashboardBlog("editingPageTitleEN")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={tDashboardBlog("editingPageTitleEN")}
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
                          {tDashboardBlog("editingPageDescriptionAR")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={tDashboardBlog(
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
                    name="SEOSettings.pageDescription.en"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel>
                          {tDashboardBlog("editingPageDescriptionEN")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={tDashboardBlog(
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
      )}
    </AlertDialog>
  );
};

export default BlogUpdate;
