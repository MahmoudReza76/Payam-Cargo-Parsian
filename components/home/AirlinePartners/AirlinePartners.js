"use client";

import React, {useState, useEffect} from "react";
import {useTranslations, useLocale} from "next-intl";

function AirlinePartners() {
  const t = useTranslations("airlinePartners");
  const locale = useLocale();
  const isRTL = locale === "fa" || locale === "ar";
  const [animateIn, setAnimateIn] = useState(false);

  // Get translated partners data
  const airlinePartners = t.raw("partners").map((partner) => ({
    ...partner,
    logo:
      partner.logo ||
      `https://via.placeholder.com/150x50?text=${encodeURIComponent(
        partner.name
      )}`
  }));

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full py-20 flex flex-col gap-12 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-10 top-40 w-40 h-40 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-0 top-20 w-80 h-80 rounded-full bg-blue-900/30 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 w-60 h-60 rounded-full bg-indigo-100/30 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-70" />
      </div>

      <div className={`container sm:px-8 px-2 ${isRTL ? "rtl" : "ltr"}`}>
        <div
          className={`text-start mb-8 transition-all duration-1000 ease-out transform ${
            animateIn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="sm:text-2xl text-base font-semibold relative">
            {t("featuresTitle")}
            <span
              className={`absolute -bottom-3 ${
                locale === "fa" || locale === "ar" ? "right-0" : "left-0"
              } left-0 w-96 h-1 bg-[linear-gradient(to_right,_transparent_0%,_#2563EB_20%,_#1E3A8A_50%,_#2563EB_80%,_transparent_100%)]`}
            ></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {airlinePartners.map((partner, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ease-out delay-${
                index * 100
              } transform ${
                animateIn
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
            >
              <div className="group h-full min-h-[280px] bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:border-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-gray-300 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />

                <div className="relative h-full flex flex-col">
                  <div className="flex-grow flex items-center justify-center mb-5 py-4">
                    <img
                      src={partner?.logo}
                      alt={`${partner?.name} Logo`}
                      className="h-16 w-auto object-contain transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 text-sm max-h-20 min-h-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {partner.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 min-h-[40px]">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center justify-center w-full">
                      <span>{t("viewDetails")}</span>
                      <svg
                        className={`w-4 h-4 ${
                          isRTL ? "mr-1 rotate-180" : "ml-1"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 ease-out delay-500 transform ${
            animateIn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-gray-300 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            {t("viewAllPartners")}
            <svg
              className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AirlinePartners;
