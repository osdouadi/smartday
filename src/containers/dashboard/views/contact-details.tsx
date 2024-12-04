"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { SkeletonCard } from "@/components/global/skeleton-card";
import Error from "@/components/global/error";
import { getContactById } from "@/queries/contact";
import { CalendarClockIcon, Mail, MessageCircle, Phone, User } from "lucide-react";

const ContactDetails = () => {
  const [orderData, setOrderData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const tOrderView = useTranslations("dashboard.orderView");
  const { contactId } = useParams() as { contactId: string };

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        setIsLoading(true);
        const response = await getContactById(contactId);
        setOrderData(response);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContactDetails();
  }, [contactId]);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-center text-2xl text-white mb-5">
        {tOrderView("contactDetails")}
      </h3>
      {error ? (
        <Error />
      ) : isLoading ? (
        <SkeletonCard />
      ) : (
        orderData && (
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg flex items-center flex-col md:flex-row">
              <User className="text-white mb-2 md:mb-0 md:mx-2" />
              <div>
                <span className="text-white">{tOrderView("fullName")}: </span>
                <span className="text-gray-300">{orderData.fullName}</span>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex items-center flex-col md:flex-row">
              <Mail className="text-white mb-2 md:mb-0 md:mx-2" />
              <div>
                <span className="text-white">{tOrderView("email")}: </span>
                <span className="text-gray-300">{orderData.email}</span>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex items-center flex-col md:flex-row">
              <Phone className="text-white mb-2 md:mb-0 md:mx-2" />
              <div>
                <span className="text-white">
                  {tOrderView("phoneNumber")}:{" "}
                </span>
                <span className="text-gray-300">{orderData.phoneNumber}</span>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex items-center flex-col md:flex-row">
              <MessageCircle className="text-white mb-2 md:mb-0 md:mx-2" />
              <div>
                <span className="text-white">
                  {tOrderView("letterTitle")}:{" "}
                </span>
                <span className="text-gray-300">{orderData.letterTitle}</span>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex items-center flex-col md:flex-row">
              <MessageCircle className="text-white mb-2 md:mb-0 md:mx-2" />
              <div>
                <span className="text-white">
                  {tOrderView("letterSubject")}:{" "}
                </span>
                <span className="text-gray-300">{orderData.letterSubject}</span>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex items-center flex-col md:flex-row">
              <CalendarClockIcon className="text-white mb-2 md:mb-0 md:mx-2" />
              <div>
                <span className="text-white">
                  {tOrderView("orderCreatedAt")}:{" "}
                </span>
                <span className="text-gray-300">
                  {formatDate(orderData.createdAt)}
                </span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ContactDetails;
