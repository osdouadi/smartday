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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import BtnLoading from "../global/btn-loading";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import { createOrder } from "@/queries/order";
import { useParams } from "next/navigation";
import { useCategoryOrderSchema } from "@/lib/zod-schema/category-order-schema";
import { Textarea } from "../ui/textarea";

const CategoryOrder = () => {
  const CategoryOrderSchema = useCategoryOrderSchema();
  const tFormContent = useTranslations("site.form.formContent.categoryOrder");
  const tFormInput = useTranslations("site.form.formInput");
  const tResponses = useTranslations("responses");
  const tCallToAction = useTranslations("callToAction");
  const { toast } = useToast();
  const { categoryId } = useParams();

  const form = useForm<z.infer<typeof CategoryOrderSchema>>({
    mode: "onChange",
    resolver: zodResolver(CategoryOrderSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      city: "",
      address: "",
      categoryId: categoryId.toString(),
      additionalNotes: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof CategoryOrderSchema>) => {
    try {
      await createOrder(values);
      toast({
        title: tResponses("sendOrderSuccess"),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: tResponses("sendOrderFail"),
        description: tResponses("pleaseTryAgain"),
      });
    }
  };

  return (
    <AlertDialog>
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle>{tFormContent("header")}</CardTitle>
          <CardDescription className="text-base md:text-lg">
            {tFormContent("subheader")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="w-full flex flex-col md:flex-row items-center gap-5">
                <FormField
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{tFormInput("fullName")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={tFormInput("fullName")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{tFormInput("email")}</FormLabel>
                      <FormControl>
                        <Input placeholder={tFormInput("email")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{tFormInput("phoneNumber")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={tFormInput("phoneNumber")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="w-full flex flex-col md:flex-row items-center gap-5">
                <FormField
                  name="city"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{tFormInput("city")}</FormLabel>
                      <FormControl>
                        <Input placeholder={tFormInput("city")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  name="address"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel> {tFormInput("address")}</FormLabel>
                      <FormControl>
                        <Input placeholder={tFormInput("address")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <FormField
                name="additionalNotes"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{tFormInput("additionalNotes")}</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-20"
                        placeholder={tFormInput("additionalNotes")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <div className="w-full flex flex-col md:flex-row items-center gap-5"></div>
              <div className="flex justify-center md:pt-2.5">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  size={"lg"}
                >
                  {isSubmitting ? <BtnLoading /> : tCallToAction("sendOrder")}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </AlertDialog>
  );
};

export default CategoryOrder;
