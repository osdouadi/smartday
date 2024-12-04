"use server";

import { currentUser } from "@clerk/nextjs";

export const getActiveUserDetails = async() => {
  try {
    const user = await currentUser();
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log("error", error);
  }
}
