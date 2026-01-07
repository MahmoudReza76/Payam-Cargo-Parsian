"use client";
import React, {useRef, useEffect} from "react";
import Image from "next/image";
import image1 from "@/public/asset/license/1.jpg";
import image2 from "@/public/asset/license/2.jpg";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView
} from "framer-motion";
import {Award, FileText, Check} from "lucide-react";
import {useLocale} from "next-intl";

export default function LicensePage() {
  const locale = useLocale();
  const heroRef = useRef(null);
  const imagesRef = useRef(null);
  const {scrollY} = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  const imagesControls = useAnimation();
  const imagesInView = useInView(imagesRef, {once: false, amount: 0.3});
  useEffect(() => {
    if (imagesInView) imagesControls.start("visible");
  }, [imagesInView]);

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.2, delayChildren: 0.3}
    }
  };
  const itemVariants = {
    hidden: {y: 30, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.7, ease: "easeOut"}
    }
  };

  return (
    <div
      dir={locale === "en" ? "ltr" : "rtl"}
      className="bg-gray-50 min-h-screen"
    >
      {/* Hero Section */}{" "}
      <section
        ref={heroRef}
        className="min-h-[60vh] bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "15px 15px",
            y: heroY
          }}
        />
        <motion.div
          style={{y: heroY, opacity: heroOpacity}}
          className="max-w-5xl mx-auto px-4 py-24 flex flex-col items-center text-center z-10 relative"
        >
          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.6}}
            className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white mb-4"
          >
            {" "}
            <Award className="w-4 h-4" />
            مجوزهای رسمی پیام کارگو
          </motion.div>
          <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 0.8}}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            مجوزها و افتخارات رسمی ما
          </motion.h1>
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.7, duration: 0.8}}
            className="text-blue-100 max-w-2xl mx-auto leading-relaxed text-lg"
          >
            افتخار ما، اعتماد و اعتبار قانونی است که از طریق سال‌ها خدمت حرفه‌ای
            و باکیفیت به دست آورده‌ایم.
          </motion.p>
        </motion.div>{" "}
      </section>
      ```
      {/* License Images Section */}
      <motion.section
        ref={imagesRef}
        variants={containerVariants}
        initial="hidden"
        animate={imagesControls}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-8"
          >
            تصاویر مجوزها
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-blue-600 mx-auto mb-12"
          />
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center"
          >
            {[image1, image2].map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{scale: 1.05}}
                transition={{duration: 0.4}}
                className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100"
              >
                <Image
                  src={img}
                  alt={`License ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-blue-900/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
                  initial={{opacity: 0}}
                  whileHover={{opacity: 1}}
                >
                  <FileText className="w-10 h-10 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            <p>
              تمامی مجوزهای نمایش داده‌شده، تأییدیه‌های رسمی از مراجع ذی‌صلاح
              هستند که فعالیت‌های بین‌المللی و داخلی پیام کارگو را پشتیبانی
              می‌کنند.
            </p>
            <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 text-blue-700 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" /> مجوز رسمی حمل و نقل
                بین‌المللی
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" /> تأییدیه اتاق
                بازرگانی ایران
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
