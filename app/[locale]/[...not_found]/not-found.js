"use client";
import React from "react";
import {Home, ArrowLeft, Construction} from "lucide-react";
import {useLocale} from "next-intl";
import {motion} from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  const locale = useLocale();

  return (
    <div
      dir={locale === "ar" || locale === "fa" ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "15px 15px"
        }}
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: Math.random() * 12 + 3,
              height: Math.random() * 12 + 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, Math.random() * 80 - 40],
              x: [0, Math.random() * 80 - 40],
              opacity: [0.2, 0.1, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center relative z-10">
        {/* Construction Icon */}
        <motion.div
          className="mb-8"
          initial={{opacity: 0, scale: 0.8, rotate: -10}}
          animate={{opacity: 1, scale: 1, rotate: 0}}
          transition={{duration: 0.8, type: "spring"}}
        >
          <div className="relative">
            <motion.div
              className="w-32 h-32 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm"
              whileHover={{scale: 1.05, rotate: 5}}
              transition={{duration: 0.3}}
            >
              <Construction className="w-16 h-16 text-white" />
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-sm font-bold px-3 py-1 rounded-full"
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: 0.5, duration: 0.5}}
            >
              404
            </motion.div>
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.h1
          className="text-8xl md:text-9xl font-bold text-white mb-4"
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
        >
          صفحه پیدا نشد
        </motion.h2>

        {/* Message */}
        <motion.p
          className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.6}}
        >
          صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.
        </motion.p>

        {/* Development Notice */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-lg"
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.6, delay: 0.8}}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-3"
            whileHover={{scale: 1.05}}
          >
            <Construction className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-lg">
              در حال توسعه
            </span>
          </motion.div>
          <p className="text-blue-100 text-sm">
            این صفحه در حال توسعه می‌باشد. لطفاً از صفحات دیگر وبسایت دیدن
            فرمایید.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 1}}
        >
          <Link href="/" className="flex-1 min-w-[200px]">
            <motion.button
              className="w-full bg-white text-blue-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3"
              whileHover={{scale: 1.05, backgroundColor: "#f8fafc"}}
              whileTap={{scale: 0.98}}
              transition={{duration: 0.2}}
            >
              <Home className="w-5 h-5" />
              بازگشت به صفحه اصلی
              {locale === "ar" || locale === "fa" ? null : (
                <ArrowLeft className="w-5 h-5 transform rotate-180" />
              )}
            </motion.button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex-1 min-w-[200px] border-2 border-white text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3"
          >
            {locale === "ar" || locale === "fa" ? (
              <ArrowLeft className="w-5 h-5 transform rotate-180" />
            ) : null}
            بازگشت به صفحه قبل
            {locale === "ar" || locale === "fa" ? null : (
              <ArrowLeft className="w-5 h-5" />
            )}
          </button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-blue-200 text-sm"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.6, delay: 1.2}}
        >
          <p>با تشکر از صبر و شکیبایی شما در حین توسعه وبسایت</p>
        </motion.div>
      </div>
    </div>
  );
}
