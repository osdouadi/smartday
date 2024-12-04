"use server";

import { connect } from "@/db/database-config";
import Order from "@/models/order.model";
import { OrderData } from "@/types/service-order-data";

export const getOrdersList = async () => {
  try {
    await connect();

    const orderList = await Order.find({}).sort({
      createdAt: -1,
    });

    return JSON.parse(JSON.stringify(orderList));
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch order list");
  }
};

export const getOrderById = async (orderId: string) => {
  try {
    await connect();

    if (!orderId) {
      throw new Error("Id was not provided");
    }
    const orderById = await Order.findById(orderId).populate({
      path: "categoryId",
      select: "title",
    });

    if (!orderById) {
      throw new Error("Order not found");
    }

    return JSON.parse(JSON.stringify(orderById));
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch get order details");
  }
};

export const createOrder = async (orderData: OrderData) => {
  try {
    await connect();

    const orderDetails = await Order.create({
      fullName: orderData.fullName,
      email: orderData.email,
      phoneNumber: orderData.phoneNumber,
      city: orderData.city,
      address: orderData.address,
      categoryId: orderData.categoryId,
      additionalNote: orderData.additionalNotes,
    });

    return JSON.parse(JSON.stringify(orderDetails));
  } catch (error: any) {
    throw new Error(error.message || "Failed to create order");
  }
};

export const deleteOrder = async (orderId: string) => {
  try {
    await connect();

    if (!orderId) {
      throw new Error("Id was not provided");
    }
    return await Order.findByIdAndDelete(orderId);
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete order");
  }
};

export const deleteOrderList = async () => {
  try {
    await connect();

    return await Order.deleteMany({});
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete order");
  }
};
