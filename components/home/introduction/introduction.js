"use client";
import React from "react";
import {
  Truck,
  Package,
  Globe,
  Shield,
  Plane,
  Clock,
  Headphones,
  MapPin,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import {useTranslations, useLocale} from "next-intl";
import {useRouter} from "next/navigation";

function Introduction() {
  const t = useTranslations("introduction");
  const s = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  return (
    <div className="min-h-80 sm:min-h-96 bg-input/30 py-2 sm:py-3 px-3 sm:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
        {/* Image Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-900 rounded-2xl sm:rounded-3xl rotate-6 transform transition-transform group-hover:rotate-8" />
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-900 to-blue-600">
            <div className="aspect-video p-4 sm:p-8 flex justify-center items-center">
              <div className="relative z-10 text-white space-y-2 sm:space-y-4 text-center">
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/20 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  {t("firstLabel")}
                </div>
                <h1 className="text-xl sm:text-4xl font-bold">
                  {s("name")}
                  <span className="block text-sm sm:text-base md:text-xl font-normal text-gray-200 mt-1 sm:mt-2">
                    {t("secondLabel")}
                  </span>
                </h1>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/10 p-2 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                <Plane className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white/10 p-2 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-white" />
              </div>
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "15px 15px"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 sm:gap-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {t("descriptionText")}
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-blue-900">
              <div className="flex items-center gap-2 sm:gap-3 text-blue-900 mb-2 sm:mb-3">
                <div className="bg-blue-90 p-1.5 sm:p-2 rounded-lg">
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="font-semibold text-sm sm:text-base">
                  {t("firstDevTitle")}
                </span>
              </div>
              <p className="text-gray-600 text-xs sm:text-base">
                {t("firstDevDescription")}
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="flex items-center gap-2 sm:gap-3 text-blue-600 mb-2 sm:mb-3">
                <div className="bg-blue-50 p-1.5 sm:p-2 rounded-lg">
                  <Shield className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="font-semibold text-sm sm:text-base">
                  {t("secondtDevTitle")}
                </span>
              </div>
              <p className="text-gray-600 text-xs sm:text-base">
                {t("secondDevDescription")}
              </p>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4">
            <button
              onClick={() => router.push(`/${locale}/landing`)}
              className="flex-1 bg-blue-900 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-blue-900 transition-colors duration-300 font-medium flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base group"
            >
              {t("mainButton")}
              {locale === "fa" || locale === "ar" ? (
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform"></ArrowLeft>
              ) : (
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
            <button className="flex-1 bg-blue-600 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-blue-700 transition-colors duration-300 font-medium text-sm sm:text-base">
              {t("secondaryButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
