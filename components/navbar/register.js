"use client";

import React from "react";
import {User, LogOut, LayoutDashboard} from "lucide-react";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import {useSession, signOut} from "next-auth/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {useRouter} from "next/navigation";

function Register() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const {data: session} = useSession();
  const router = useRouter();
  const isRTL = locale === "fa" || locale === "ar";

  const handleSelect = (value) => {
    if (value === "dashboard") {
      router.push("/dashboard");
    } else if (value === "logout") {
      signOut({callbackUrl: "/"});
    }
  };

  if (session) {
    // User is logged in, show Select dropdown
    return (
      <div
        dir={locale === "fa" || locale === "ar" ? "rtl" : "ltr"}
        className="relative flex items-center"
      >
        <Select onValueChange={handleSelect}>
          <SelectTrigger
            className={`flex justify-center items-center gap-2 border border-primary/20 hover:border-primary/60 transition-all duration-300 
                       rounded-lg py-2.5 px-4 text-sm bg-background/80 backdrop-blur-sm shadow-sm hover:shadow
                       `}
          >
            <div className="bg-primary/10 p-1.5 rounded-full ">
              <User className="w-4 h-4 text-primary" />
            </div>
            <SelectValue
              placeholder={session?.user.email}
              className="max-w-[150px] truncate"
            />
          </SelectTrigger>
          <SelectContent
            className="w-56 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg z-10 p-1"
            align={isRTL ? "end" : "start"}
            sideOffset={8}
          >
            <SelectItem
              value="dashboard"
              className={`flex items-center gap-3 py-2.5 px-3 my-1 rounded-md hover:bg-primary/10 transition-colors
                       cursor-pointer ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-full flex items-center gap-3 ${
                  isRTL ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <span>{t("dashboard")}</span>
                <LayoutDashboard className="w-4 h-4 text-primary" />
              </div>
            </SelectItem>
            <div className="h-px bg-gray-200 my-1" />
            <SelectItem
              value="logout"
              className={`flex items-center gap-3 py-2.5 px-3 my-1 rounded-md hover:bg-red-50 text-red-600 transition-colors
                       cursor-pointer ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-full flex items-center gap-3 ${
                  isRTL ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <span>{t("logout")}</span>
                <LogOut className="w-4 h-4" />
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  }

  // User is not logged in, show signup/login button
  return (
    <Link
      href="/register"
      className={`flex items-center justify-center text-sm gap-3 border border-primary/20 
                 hover:border-primary/60 bg-primary/5 hover:bg-primary/10 rounded-lg py-2.5 px-4
                 transition-all duration-300 shadow-sm hover:shadow ${
                   isRTL ? "flex-row-reverse" : ""
                 }`}
    >
      <div className="bg-primary/10 p-1.5 rounded-full">
        <User className="w-4 h-4 text-primary" />
      </div>
      <span>
        {t("register.signup")} / {t("register.login")}
      </span>
    </Link>
  );
}

export default Register;
