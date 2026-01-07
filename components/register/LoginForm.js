"use client";

import React, {useState} from "react";
import {Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft} from "lucide-react";
import {useTranslations, useLocale} from "next-intl";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

function LoginForm({onSwitchToSignup}) {
  const t = useTranslations("register");
  const locale = useLocale();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const isRTL = locale === "fa" || locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password
    });

    if (result?.error) {
      setError(t("login.error"));
    } else {
      router.push("/");
    }
  };

  return (
    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
      {error && <div className="text-red-600 text-sm text-center">{error}</div>}

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 block">
          {t("login.email")}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 outline-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
            placeholder={t("login.emailPlaceholder")}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 block">
          {t("login.password")}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Lock className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pl-11 pr-11 py-3 bg-gray-50 border border-gray-200 outline-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
            placeholder={t("login.passwordPlaceholder")}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-700"
          >
            {t("login.rememberMe")}
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            {t("login.forgotPassword")}
          </a>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white p-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-700 transition Les than a minute ago-all duration-300 flex items-center justify-center gap-2 group"
      >
        {t("login.loginButton")}
        <ArrowIcon
          className={`w-4 h-4 group-hover:${
            isRTL ? "-translate-x-1" : "translate-x-1"
          } transition-transform`}
        />
      </button>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          {t("login.noAccount")}{" "}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="font-medium text-blue-600 hover:text-blue-500 hover:underline transition-colors"
          >
            {t("login.registerNow")}
          </button>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
