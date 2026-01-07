"use client";
import React, {useEffect} from "react";
import {
  Shield,
  Plane,
  Headphones,
  MapPin,
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  Box
} from "lucide-react";
import {useTranslations, useLocale} from "next-intl";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView
} from "framer-motion";
import {useRef} from "react";

export default function TransportLanding() {
  const t = useTranslations("landingPage");
  const locale = useLocale();

  // Refs for scroll-triggered animations
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll progress for parallax effects
  const {scrollY} = useScroll();

  // Parallax transformations
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const dotsBgY = useTransform(scrollY, [0, 500], [0, -50]);

  // Animation controls for scroll-triggered sections
  const statsControls = useAnimation();
  const servicesControls = useAnimation();
  const contactControls = useAnimation();
  const ctaControls = useAnimation();

  // Check if sections are in view
  const statsInView = useInView(statsRef, {once: false, amount: 0.3});
  const servicesInView = useInView(servicesRef, {once: false, amount: 0.3});
  const contactInView = useInView(contactRef, {once: false, amount: 0.3});
  const ctaInView = useInView(ctaRef, {once: false, amount: 0.3});

  // Trigger animations when sections come into view
  useEffect(() => {
    if (statsInView) statsControls.start("visible");
    if (servicesInView) servicesControls.start("visible");
    if (contactInView) contactControls.start("visible");
    if (ctaInView) ctaControls.start("visible");
  }, [statsInView, servicesInView, contactInView, ctaInView]);

  // Variants for animations
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.6, ease: "easeOut"}
    }
  };

  const cardVariants = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.7, ease: "easeOut"}
    }
  };

  return (
    <div
      dir={locale === "ar" || locale === "fa" ? "rtl" : "ltr"}
      className="bg-gray-50 min-h-screen"
    >
      {/* Hero Section with Parallax */}
      <section
        className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden"
        ref={heroRef}
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "15px 15px",
            y: dotsBgY
          }}
        />

        <motion.div
          style={{y: heroY, opacity: heroOpacity}}
          className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10"
        >
          <motion.div
            className="flex-1 text-white"
            initial={{opacity: 0, x: locale === "ar" ? 100 : -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3, duration: 0.6}}
            >
              <Shield className="w-4 h-4" />
              {t("hero.trustBadge")}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.4, duration: 0.8}}
            >
              {t("hero.title")}
              <motion.span
                className="block text-blue-300 mt-2"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.6, duration: 0.6}}
              >
                {t("hero.subtitle")}
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 mb-8 leading-relaxed"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.8, duration: 0.8}}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 1, duration: 0.6}}
            >
              <motion.button
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.98}}
                transition={{duration: 0.2}}
              >
                {t("hero.startButton")}
                <ArrowLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                whileHover={{backgroundColor: "#fff", color: "#1e3a8a"}}
                whileTap={{scale: 0.98}}
                transition={{duration: 0.2}}
              >
                {t("hero.consultButton")}
                <Headphones className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{opacity: 0, y: 60}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.5, duration: 0.8}}
          >
            <motion.div
              className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl"
              whileHover={{scale: 1.03}}
              transition={{duration: 0.3}}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                {t("hero.trackingTitle")}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    {t("hero.trackingLabel")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("hero.trackingPlaceholder")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <motion.button
                  className="w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                  whileHover={{scale: 1.02, backgroundColor: "#1e40af"}}
                  whileTap={{scale: 0.98}}
                >
                  {t("hero.trackingButton")}
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>

                <div className="text-center mt-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    {t("hero.trackingGuide")}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating particles for hero background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-20"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
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
      </section>

      {/* Stats Section with animation */}
      <motion.section
        ref={statsRef}
        className="py-16 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate={statsControls}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["countries", "shipments", "satisfaction", "support"].map(
              (key) => (
                <motion.div
                  key={key}
                  className="text-center p-6 rounded-2xl hover:bg-blue-50 transition-colors"
                  variants={itemVariants}
                >
                  <motion.div
                    className="text-4xl font-bold text-blue-900 mb-2"
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6}}
                  >
                    {t(`stats.${key}.title`)}
                  </motion.div>
                  <div className="text-gray-600">
                    {t(`stats.${key}.description`)}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* Services Section with parallax and animations */}
      <motion.section
        ref={servicesRef}
        className="py-20 bg-gray-50 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={servicesControls}
      >
        <motion.div
          className="absolute right-0 top-0 w-64 h-64 rounded-full bg-blue-100 opacity-50"
          style={{
            filter: "blur(80px)",
            y: useTransform(scrollY, [600, 1200], [0, 100])
          }}
        />
        <motion.div
          className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-blue-200 opacity-30"
          style={{
            filter: "blur(100px)",
            y: useTransform(scrollY, [600, 1200], [100, 0])
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            >
              {t("services.title")}
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: false, amount: 0.8}}
            >
              {t("services.description")}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["express", "standard", "specialized"].map((service, index) => (
              <motion.div
                key={service}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group"
                variants={cardVariants}
                whileHover={{y: -10, transition: {duration: 0.3}}}
              >
                <div
                  className={`h-48 bg-blue-${
                    900 - index * 100
                  } relative overflow-hidden`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-${
                      900 - index * 100
                    } to-blue-${800 - index * 100} opacity-90`}
                    whileHover={{scale: 1.05, rotate: 1}}
                    transition={{duration: 0.6}}
                  />
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #fff 1px, transparent 1px)",
                      backgroundSize: "15px 15px"
                    }}
                    animate={{
                      y: [-5, 5],
                      x: [-2, 2]
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 8 + index * 2,
                      delay: index
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                    whileHover={{scale: 1.2, rotate: index % 2 === 0 ? 5 : -5}}
                    animate={
                      service === "specialized"
                        ? {x: [-8, 8]}
                        : service === "standard"
                        ? {y: [0, -5, 0, 5, 0]}
                        : {}
                    }
                    transition={{
                      repeat: Infinity,
                      repeatType:
                        service === "specialized" ? "reverse" : "loop",
                      duration: service === "specialized" ? 3 : 5
                    }}
                  >
                    {service === "specialized" ? (
                      <Box className="w-20 h-20" />
                    ) : (
                      <Plane className="w-20 h-20" />
                    )}
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {t(`services.${service}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t(`services.${service}.description`)}
                  </p>
                  <div className="space-y-3 mb-6">
                    {t.raw(`services.${service}.features`).map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                        initial={{opacity: 0, x: locale === "ar" ? 20 : -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.4, delay: idx * 0.1}}
                        viewport={{once: true}}
                      >
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    className="w-full py-3 bg-blue-50 text-blue-900 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 font-medium"
                    whileHover={{backgroundColor: "#dbeafe", scale: 1.02}}
                    whileTap={{scale: 0.98}}
                  >
                    {t("services.moreInfoButton")}
                    <ArrowLeft className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section with parallax and animations */}
      <motion.section
        ref={contactRef}
        className="py-20 bg-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={contactControls}
      >
        <motion.div
          className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-gray-100 to-transparent opacity-80"
          style={{
            y: useTransform(scrollY, [1200, 1800], [-40, 0])
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl overflow-hidden shadow-xl"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: false, amount: 0.3}}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div
                className="p-8 md:p-12"
                initial={{opacity: 0, x: locale === "ar" ? 50 : -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 0.2}}
                viewport={{once: false, amount: 0.5}}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  {t("contact.title")}
                </h2>
                <p className="text-blue-100 mb-8">{t("contact.description")}</p>

                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0.6}}
                >
                  {[
                    {
                      icon: Phone,
                      label: t("contact.phoneLabel"),
                      value: t("contact.phone")
                    },
                    {
                      icon: Phone,
                      label: t("contact.phoneLabel"),
                      value: t("contact.phoneb")
                    },
                    {
                      icon: Mail,
                      label: t("contact.emailLabel"),
                      value: t("contact.email")
                    },
                    {
                      icon: MapPin,
                      label: t("contact.addressLabel"),
                      value: t("contact.address")
                    },
                    {
                      icon: MapPin,
                      label: t("contact.addressLabel"),
                      value: t("contact.addressb")
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4"
                      variants={itemVariants}
                    >
                      <motion.div
                        className="bg-white/10 p-3 rounded-xl"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(255,255,255,0.2)"
                        }}
                        transition={{duration: 0.3}}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <div className="text-sm text-blue-200">
                          {item.label}
                        </div>
                        <div
                          dir={item.icon === Phone ? "ltr" : undefined}
                          className="text-white font-bold"
                        >
                          {item.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-white p-8 md:p-12"
                initial={{opacity: 0, x: locale === "ar" ? -50 : 50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                viewport={{once: false, amount: 0.5}}
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  {t("contact.formTitle")}
                </h3>
                <form className="space-y-6">
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.6}}
                  >
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.nameLabel")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.phoneFormLabel")}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.3}}
                    viewport={{once: false, amount: 0.6}}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.serviceLabel")}
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none">
                      {["express", "standard", "specialized", "customs"].map(
                        (option) => (
                          <option key={option} value={option}>
                            {t(`contact.serviceOptions.${option}`)}
                          </option>
                        )
                      )}
                    </select>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.4}}
                    viewport={{once: false, amount: 0.6}}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.detailsLabel")}
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-4 rounded-xl hover:bg-blue-800 transition-colors font-medium flex items-center justify-center gap-2"
                    whileHover={{scale: 1.02, backgroundColor: "#1e40af"}}
                    whileTap={{scale: 0.98}}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                    viewport={{once: false, amount: 0.6}}
                  >
                    {t("contact.submitButton")}
                    <ArrowLeft className="w-5 h-5" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section with parallax */}
      <motion.section
        ref={ctaRef}
        className="py-20 bg-blue-900 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={ctaControls}
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "15px 15px",
            y: useTransform(scrollY, [1800, 2500], [-30, 30])
          }}
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-30"
              style={{
                width: Math.random() * 15 + 5,
                height: Math.random() * 15 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, Math.random() * 60 - 30],
                x: [0, Math.random() * 60 - 30],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: false, amount: 0.3}}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: false, amount: 0.6}}
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p
            className="text-blue-100 mb-8 text-lg"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.4}}
            viewport={{once: false, amount: 0.6}}
          >
            {t("cta.description")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.6}}
            viewport={{once: false, amount: 0.6}}
          >
            <motion.button
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-medium"
              whileHover={{scale: 1.05, backgroundColor: "#f9fafb"}}
              whileTap={{scale: 0.98}}
              transition={{duration: 0.2}}
            >
              {t("cta.consultButton")}
            </motion.button>
            <motion.button
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-medium"
              whileHover={{scale: 1.05, backgroundColor: "#1d4ed8"}}
              whileTap={{scale: 0.98}}
              transition={{duration: 0.2}}
            >
              {t("cta.quoteButton")}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
