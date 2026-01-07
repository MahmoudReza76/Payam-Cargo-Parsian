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
  ArrowLeft,
  CheckCircle,
  RefreshCw,
  Activity,
  Building,
  Home,
  CheckSquare,
  Users,
  Briefcase,
  Ship,
  Train
} from "lucide-react";
import {useTranslations, useLocale} from "next-intl";
import {useRouter} from "next/navigation";

function WhyPayamCargo() {
  const t = useTranslations("whyPayamCargo");

  const locale = useLocale();

  const benefits = [
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: t("benefits.0.title")
    },
    {
      icon: <Plane className="w-5 h-5 text-white" />,
      title: t("benefits.1.title")
    },
    {
      icon: <Briefcase className="w-5 h-5 text-white" />,
      title: t("benefits.2.title")
    },
    {
      icon: <Activity className="w-5 h-5 text-white" />,
      title: t("benefits.3.title")
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: t("benefits.4.title")
    },
    {
      icon: <Home className="w-5 h-5 text-white" />,
      title: t("benefits.5.title")
    },
    {
      icon: <Package className="w-5 h-5 text-white" />,
      title: t("benefits.6.title")
    },
    {
      icon: <CheckSquare className="w-5 h-5 text-white" />,
      title: t("benefits.7.title")
    },
    {
      icon: <Globe className="w-5 h-5 text-white" />,
      title: t("benefits.8.title")
    }
  ];

  return (
    <div className="min-h-80 sm:min-h-96 bg-input/30 py-8 sm:py-16 px-3 sm:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="w-full sm:px-8 px-2 flex flex-col gap-10 md:mt-20 mt-32 ">
          <h1 className="sm:text-2xl text-base font-semibold relative">
            {t("title")}
            <span
              className={`absolute -bottom-3 ${
                locale === "fa" || locale === "ar" ? "right-0" : "left-0"
              } left-0 w-96 h-1 bg-[linear-gradient(to_right,_transparent_0%,_#2563EB_20%,_#1E3A8A_50%,_#2563EB_80%,_transparent_100%)]`}
            ></span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto my-3">
            {t("description")}
          </p>
        </div>

        {/* Desktop view */}
        <div className="hidden sm:block mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-900/5 rounded-3xl transform -rotate-1"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden border border-blue-900/10 shadow-lg">
              <div className="grid grid-cols-3 gap-0.5 bg-blue-50/50">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="relative p-6 bg-white hover:bg-blue-50/70 transition-colors group"
                  >
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-l-[50px] border-t-blue-900/5 border-l-transparent -translate-x-1/2 -translate-y-1/2 transform rotate-45"></div>

                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-2.5 rounded-lg shadow-md flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                        {benefit.icon}
                      </div>
                      <p className="text-blue-900 font-medium leading-tight">
                        {benefit.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="sm:hidden">
          <div className="bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-md">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center p-4 gap-3 ${
                  index !== benefits.length - 1 ? "border-b border-blue-50" : ""
                }`}
              >
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-2 rounded-lg shadow-sm flex-shrink-0">
                  {benefit.icon}
                </div>
                <p className="text-blue-900 text-sm font-medium">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-10 sm:mt-16">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 p-6 sm:p-10 relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />
              </div>

              <div className="relative z-10 text-center sm:text-right">
                <h3 className="text-white text-xl sm:text-3xl font-bold mb-4">
                  {t("cta.title")}
                </h3>
                <p className="text-blue-50 mb-6 sm:mb-8 text-sm sm:text-base max-w-3xl sm:mr-0 mx-auto">
                  {t("cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
                  <button className="bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-blue-50 transition-colors duration-300 font-bold flex items-center justify-center gap-2 text-sm sm:text-base">
                    {t("cta.consultButton")}
                    {locale === "fa" || locale === "ar" ? (
                      <ArrowLeft className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                  <button className="bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-blue-800 transition-colors duration-300 font-bold text-sm sm:text-base border border-blue-500">
                    {t("cta.contactButton")}
                  </button>
                </div>
              </div>

              {/* Decorative transportation icons */}
              <div className="hidden sm:block absolute -top-6 -left-0 transform -rotate-12 opacity-15">
                <Truck className="w-32 h-32 text-white" />
              </div>
              <div className="hidden sm:block absolute -bottom-8 -left-0 transform rotate-6 opacity-20">
                <Ship className="w-40 h-40 text-white" />
              </div>
              <div className="hidden sm:block absolute -top-4 right-20 transform rotate-15 opacity-15">
                <Train className="w-36 h-36 text-white" />
              </div>
              <div className="hidden sm:block absolute -bottom-10 right-0 transform -rotate-8 opacity-20">
                <Plane className="w-44 h-44 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyPayamCargo;
