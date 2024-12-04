"use server";

import { connect } from "@/db/database-config";

import Category from "@/models/category.model";
import Contact from "@/models/contact.model";
import Order from "@/models/order.model";

export const getCounts = async () => {
  await connect();

  try {
    const categoryCount = await Category.countDocuments();
    const ordersCount = await Order.countDocuments();
    const contactCount = await Contact.countDocuments();
    return JSON.parse(
      JSON.stringify({
        categoryCount,
        ordersCount,
        contactCount,
      })
    );
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch counts");
  }
};
