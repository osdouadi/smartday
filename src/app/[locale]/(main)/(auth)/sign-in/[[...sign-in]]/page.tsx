import React from "react";
import { SignIn } from "@clerk/nextjs";

const page = () => {
  return <SignIn signUpUrl="sign-up" redirectUrl={"/admin-dashboard"}/>;
};

export default page;
