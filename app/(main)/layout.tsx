"use client";

import { redirect } from "next/navigation";

import { Sidebar } from "./_components/Sidebar";
import { useAuth } from "@clerk/nextjs";
import { Spinner } from "@/components/spinner";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isSignedIn) {
    return redirect("/sign-in");
  }

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Sidebar />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
