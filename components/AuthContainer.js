"use client";

import React, {useState, useEffect} from "react";
import {User} from "lucide-react";
import {useTranslations, useLocale} from "next-intl";
import {useSearchParams} from "next/navigation";
import LoginForm from "@/components/register/LoginForm";
import SignupForm from "@/components/register/SignupForm";

function AuthContainer() {
  const t = useTranslations("register");
  const searchParams = useSearchParams();
  const [isLogin, setIsLogin] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    const loginParam = searchParams.get("login");
    setIsLogin(loginParam === "true");
  }, [searchParams]);

  const toggleToLogin = () => setIsLogin(true);
  const toggleToSignup = () => setIsLogin(false);

  return (
    <div
      dir={locale === "fa" || locale === "ar" ? "rtl" : "ltr"}
      className="min-h-screen flex items-center justify-center bg-input/10 p-4 sm:p-6"
    >
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl" />

          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-900/50">
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 p-6 sm:p-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {isLogin ? t("loginTitle") : t("register")}
                </h2>
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-white/80 mt-2 text-sm sm:text-base">
                {isLogin ? t("loginSubtitle") : t("registerSubtitle")}
              </p>
            </div>

            <div className="p-6 sm:p-8">
              {isLogin ? (
                <LoginForm onSwitchToSignup={toggleToSignup} />
              ) : (
                <SignupForm onSwitchToLogin={toggleToLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthContainer;
