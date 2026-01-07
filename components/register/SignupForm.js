"use client";

import React, {useState} from "react";
import {
  User,
  Lock,
  Mail,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import {useTranslations, useLocale} from "next-intl";
import {useRouter} from "next/navigation";

function SignupForm({onSwitchToLogin}) {
  const t = useTranslations("register");
  const locale = useLocale();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmPassword: ""
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

    if (formData.password !== formData.confirmPassword) {
      setError(t("signup.passwordMismatch"));
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || t("signup.error"));
        return;
      }

      router.push("/");
    } catch (err) {
      setError(t("signup.error"));
    }
  };

  return (
    <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
      {error && <div className="text-red-600 text-sm text-center">{error}</div>}

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 block">
          {t("signup.email")}
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
            placeholder={t("signup.emailPlaceholder")}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 block">
          {t("signup.username")}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 outline-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
            placeholder={t("signup.usernamePlaceholder")}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 block">
          {t("signup.phone")}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 outline-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
            placeholder={t("signup.phonePlaceholder")}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 block">
          {t("signup.password")}
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
            placeholder={t("signup.passwordPlaceholder")}
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

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 block">
          {t("signup.confirmPassword")}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Lock className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full pl-11 pr-11 py-3 bg-gray-50 border border-gray-200 outline-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
            placeholder={t("signup.confirmPasswordPlaceholder")}
            required
          />
        </div>
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="text-gray-600">
            {t("signup.termsAgreement")}{" "}
            <a href="#" className="text-blue-600 hover:underline">
              {t("signup.termsLink")}
            </a>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white p-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        {t("signup.registerButton")}
        <ArrowIcon
          className={`w-4 h-4 group-hover:${
            isRTL ? "-translate-x-1" : "translate-x-1"
          } transition-transform`}
        />
      </button>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          {t("signup.alreadyHaveAccount")}{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="font-medium text-blue-600 hover:text-blue-500 hover:underline transition-colors"
          >
            {t("signup.loginNow")}
          </button>
        </p>
      </div>
    </form>
  );
}

export default SignupForm;
