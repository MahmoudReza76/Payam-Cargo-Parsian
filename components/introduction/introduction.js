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

function Introduction() {
  const t = useTranslations("introduction");
  const s = useTranslations();
  const locale = useLocale();
  return (
    <div className="min-h-96 bg-gradient-to-br from-blue-50 to-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500 rounded-3xl rotate-6 transform transition-transform group-hover:rotate-8" />
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800">
            <div className="aspect-video p-8 flex justify-center items-center">
              <div className="relative z-10 text-white space-y-4 text-center">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  <Shield className="w-4 h-4" />
                  {t("firstLabel")}
                </div>
                <h1 className="md:text-4xl text-xl font-bold">
                  {s("name")}
                  <span className="block md:text-xl text-base font-normal text-blue-200 mt-2">
                    {t("secondLabel")}
                  </span>
                </h1>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <Plane className="md:w-12 md:h-12 h-8 w-8 text-white" />
              </div>
              <div className="absolute bottom-8 left-8 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <Globe className="md:w-12 md:h-12 h-8 w-8 text-white" />
              </div>
              {/* Grid Pattern */}
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
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("descriptionText")}
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 text-blue-700 mb-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="font-semibold"> {t("firstDevTitle")}</span>
              </div>
              <p className="text-gray-600">{t("firstDevDescription")}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 text-blue-700 mb-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="font-semibold">{t("secondtDevTitle")}</span>
              </div>
              <p className="text-gray-600">{t("secondDevDescription")}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-medium flex items-center justify-center gap-2 group">
              {t("mainButton")}
              {locale === "fa" || locale === "ar" ? (
                <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform"></ArrowLeft>
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
            <button className="flex-1 bg-gray-50 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 font-medium">
              {t("secondaryButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
