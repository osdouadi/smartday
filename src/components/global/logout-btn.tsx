"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    try {
      await signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <Button variant="outline" size={"default"} onClick={handleLogout}>
      <LogOut className="h-5 w-5" />
    </Button>
  );
};

export default LogoutButton;
