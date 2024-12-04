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
import BtnLoading from "../global/btn-loading";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useToast } from "../ui/use-toast";

import { useContactSchema } from "@/lib/zod-schema/contact-schema";
import { createContact } from "@/queries/contact";

const ContactForm = () => {
  const ContactSchema = useContactSchema();
  const tFormContent = useTranslations("site.form.formContent.contact");
  const tFormInput = useTranslations("site.form.formInput");
  const tResponses = useTranslations("responses");
  const tCallToAction = useTranslations("callToAction");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof ContactSchema>>({
    mode: "onChange",
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      letterTitle: "",
      letterSubject: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof ContactSchema>) => {
    try {
      await createContact(values);
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
      <Card className="w-full border-none bg-transparent px-3 md:px-12 pt-0">
        <CardHeader className="text-center px-0 pt-3">
          <CardTitle className="px-0 text-lg md:text-3xl font-semibold text-gray-900">
            {tFormContent("header")}
          </CardTitle>
          <CardDescription className="px-0 text-base md:text-2xl text-gray-800">
            {tFormContent("subheader")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="w-full flex items-center flex-col md:flex-row gap-5">
                <FormField
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-800">
                        {tFormInput("fullName")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-gray-50 border-gray-300"
                          placeholder={tFormInput("fullName")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-800">
                        {tFormInput("email")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-gray-50 border-gray-300"
                          placeholder={tFormInput("email")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full flex items-center flex-col md:flex-row gap-5">
                <FormField
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-800">
                        {tFormInput("phoneNumber")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-gray-50 border-gray-300"
                          placeholder={tFormInput("phoneNumber")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="letterTitle"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-800">
                        {tFormInput("letterTitle")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-gray-50 border-gray-300"
                          placeholder={tFormInput("letterTitle")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full flex items-center flex-col md:flex-row gap-5">
                <FormField
                  name="letterSubject"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-gray-800">
                        {tFormInput("letterSubject")}
                      </FormLabel>
                      <FormControl className="h-[8rem]">
                        <Input
                          className="bg-gray-50 border-gray-300 h-[8rem]"
                          placeholder={tFormInput("letterSubject")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-center pt-2.5">
                <Button disabled={isSubmitting} type="submit" className="text-sm md:text-base text-gray-50 bg-primary hover:bg-primary/90">
                  {isSubmitting ? <BtnLoading /> : tCallToAction("sendLetter")}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </AlertDialog>
  );
};

export default ContactForm;
