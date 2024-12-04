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
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import BtnLoading from "../global/btn-loading";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Textarea } from "../ui/textarea";
import { useNewsSchema } from "@/lib/zod-schema/news-schema";
import { createNews } from "@/queries/news";

const AddNews = () => {
  const NewsSchema = useNewsSchema();
  const tFormContent = useTranslations("site.form.formContent.news");
  const tFormInput = useTranslations("site.form.formInput");
  const tResponses = useTranslations("responses");
  const tCallToAction = useTranslations("callToAction");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof NewsSchema>>({
    mode: "onChange",
    resolver: zodResolver(NewsSchema),
    defaultValues: {
      newsAR: "",
      newsEN: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof NewsSchema>) => {
    try {
      await createNews(values);
      toast({
        title: tResponses("addNewsSuccess"),
      });
      location.reload()
    } catch (error) {
      toast({
        variant: "destructive",
        title: tResponses("addNewsFail"),
        description: tResponses("pleaseTryAgain"),
      });
    }
  };

  return (
    <AlertDialog>
      <Card className="w-full">
        <CardHeader className="text-center md:text-start">
          <CardTitle>{tFormContent("header")}</CardTitle>
          <CardDescription className="text-base md:text-lg">
            {tFormContent("subheader")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <div className="w-full flex flex-col md:flex-row items-center gap-5">
                <FormField
                  name="newsAR"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{tFormInput("newsAR")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={tFormInput("newsAR")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  name="newsEN"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{tFormInput("newsEN")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={tFormInput("newsEN")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="flex justify-center pt-2.5">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  size={"lg"}
                >
                  {isSubmitting ? <BtnLoading /> : tCallToAction("addNews")}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </AlertDialog>
  );
};

export default AddNews;
