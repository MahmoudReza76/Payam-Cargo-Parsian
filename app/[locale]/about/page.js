"use client";
import React, {useRef, useEffect} from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Award,
  Target,
  Check,
  Truck,
  Globe,
  FileText,
  Star
} from "lucide-react";
import {useLocale} from "next-intl";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView
} from "framer-motion";

export default function AboutUs() {
  const locale = useLocale();
  // Refs for scroll-triggered animations
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  // Scroll progress for parallax effects
  const {scrollY} = useScroll();
  // Parallax transformations
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const dotsBgY = useTransform(scrollY, [0, 500], [0, -50]);
  // Animation controls for scroll-triggered sections
  const storyControls = useAnimation();
  const valuesControls = useAnimation();
  const teamControls = useAnimation();
  const contactControls = useAnimation();
  // Check if sections are in view
  const storyInView = useInView(storyRef, {once: false, amount: 0.3});
  const valuesInView = useInView(valuesRef, {once: false, amount: 0.3});
  const teamInView = useInView(teamRef, {once: false, amount: 0.3});
  const contactInView = useInView(contactRef, {once: false, amount: 0.3});
  // Trigger animations when sections come into view
  useEffect(() => {
    if (storyInView) storyControls.start("visible");
    if (valuesInView) valuesControls.start("visible");
    if (teamInView) teamControls.start("visible");
    if (contactInView) contactControls.start("visible");
  }, [storyInView, valuesInView, teamInView, contactInView]);
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
      dir={locale === "en" ? "ltr" : "rtl"}
      className="bg-gray-50 min-h-screen"
    >
      {/* Hero Section with Parallax */}
      <section
        className="min-h-[60vh] bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden"
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
          className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center gap-8 relative z-10 text-center"
        >
          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.6}}
            className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-2"
          >
            <Award className="w-4 h-4" />
            درباره هلدینگ پیام کارگو
          </motion.div>
          <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.4, duration: 0.8}}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            شریکی مطمئن برای
            <motion.span
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.6, duration: 0.6}}
              className="block text-blue-300 mt-2"
            >
              حمل و نقل بین‌المللی
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.8, duration: 0.8}}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            ما با سال‌ها تجربه در خدمات حمل و نقل، تعهد به کیفیت و رضایت مشتری
            را سرلوحه کار خود قرار داده‌ایم
          </motion.p>
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
      {/* Our Story Section */}
      <motion.section
        ref={storyRef}
        className="py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate={storyControls}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            >
              داستان ما
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto mb-6"
              initial={{width: 0}}
              whileInView={{width: 96}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            />
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: false, amount: 0.8}}
            >
              هلدینگ پیام کارگو، متشکل از شرکت‌های تخصصی در حوزه حمل و نقل
              زمینی، ریلی، دریایی و هوایی، با تکیه بر ناوگان اختصاصی، دفاتر فعال
              در داخل و خارج از کشور و تیمی حرفه‌ای، به عنوان یکی از مجموعه‌های
              پیشرو در صنعت لجستیک و حمل و نقل منطقه شناخته می‌شود. ما با ارائه
              راهکارهای هوشمند، خدمات یکپارچه، قیمت رقابتی و پشتیبانی ۲۴ ساعته،
              مسیر تجارت شما را هموار می‌کنیم. اعتماد شما پشتوانه ماست. از اولین
              مشاوره تا تحویل نهایی، در کنار شما هستیم.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">
                    آغاز فعالیت
                  </h3>
                </div>
                <p className="text-gray-600 pr-10">
                  هلدینگ پیام کارگو فعالیت خود را با چشم‌اندازی روشن برای تبدیل
                  شدن به یکی از پیشگامان صنعت حمل و نقل آغاز کرد.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Globe className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">
                    گسترش خدمات
                  </h3>
                </div>
                <p className="text-gray-600 pr-10">
                  با گذشت زمان، ما شبکه خدمات خود را گسترش داده و توانستیم پوشش
                  بین‌المللی قابل توجهی را برای مشتریان خود فراهم کنیم.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Award className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">
                    افتخارات و دستاوردها
                  </h3>
                </div>
                <p className="text-gray-600 pr-10">
                  ما مفتخریم که توانسته‌ایم اعتماد صدها مشتری را جلب کنیم و به
                  عنوان شریکی قابل اعتماد در صنعت حمل و نقل شناخته شویم.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Target className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">
                    چشم‌انداز آینده
                  </h3>
                </div>
                <p className="text-gray-600 pr-10">
                  ما همواره به دنبال نوآوری و بهبود خدمات خود هستیم تا بتوانیم
                  همچنان پاسخگوی نیازهای رو به رشد مشتریان باشیم.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] bg-gradient-to-br from-blue-900 to-blue-700"
              variants={itemVariants}
              whileHover={{scale: 1.02}}
              transition={{duration: 0.3}}
            >
              <div className="absolute inset-0 bg-blue-900/50 flex flex-col items-center justify-center p-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <h3 className="text-white text-2xl font-bold mb-4">
                    ماموریت ما
                  </h3>
                  <p className="text-blue-100 mb-6">
                    ارائه خدمات حمل و نقل بین‌المللی با بالاترین استانداردها و
                    قیمت‌های رقابتی، همراه با تعهد به رضایت مشتری و حفظ محیط
                    زیست
                  </p>
                  <div className="space-y-3">
                    {[
                      "تضمین ایمنی و امنیت محموله‌ها",
                      "ارائه خدمات شخصی‌سازی شده",
                      "پایبندی به زمان‌بندی و قول‌های داده شده",
                      "استفاده از فناوری‌های نوین در فرآیندهای کاری"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 text-white"
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.4, delay: index * 0.1}}
                        viewport={{once: true}}
                      >
                        <Check className="w-5 h-5 text-blue-300 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "15px 15px"
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.2, 0.3]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Our Values Section */}
      <motion.section
        ref={valuesRef}
        className="py-20 bg-blue-50 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={valuesControls}
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
              ارزش‌های ما
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto mb-6"
              initial={{width: 0}}
              whileInView={{width: 96}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            />
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: false, amount: 0.8}}
            >
              ارزش‌های بنیادین ما در هلدینگ پیام کارگو هدایت‌کننده تمام
              فعالیت‌ها و تصمیم‌گیری‌های ما هستند
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
              variants={cardVariants}
              whileHover={{y: -10, transition: {duration: 0.3}}}
            >
              <div className="h-32 bg-blue-900 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"
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
                    duration: 8
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                  whileHover={{scale: 1.2, rotate: 5}}
                  transition={{duration: 0.3}}
                >
                  <Award className="w-16 h-16" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  کیفیت و تعالی
                </h3>
                <p className="text-gray-600 mb-6">
                  ما به ارائه خدمات با بالاترین استانداردها و کیفیت متعهد هستیم.
                  تلاش مداوم برای بهبود فرآیندها و عملکرد از اولویت‌های اصلی
                  ماست.
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <motion.div
                    className="flex justify-center"
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.3}}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-blue-600 fill-blue-600"
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
              variants={cardVariants}
              whileHover={{y: -10, transition: {duration: 0.3}}}
            >
              <div className="h-32 bg-blue-800 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-90"
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
                    duration: 10,
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                  whileHover={{scale: 1.2, rotate: -5}}
                  transition={{duration: 0.3}}
                >
                  <Users className="w-16 h-16" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  مشتری‌مداری
                </h3>
                <p className="text-gray-600 mb-6">
                  رضایت مشتریان مهم‌ترین هدف ماست. ما با گوش دادن به نیازهای
                  مشتریان و ارائه راهکارهای شخصی‌سازی شده، سعی در جلب رضایت آنها
                  داریم.
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <motion.div
                    className="flex justify-center"
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.3}}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-blue-600 fill-blue-600"
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
              variants={cardVariants}
              whileHover={{y: -10, transition: {duration: 0.3}}}
            >
              <div className="h-32 bg-blue-700 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-90"
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
                    duration: 12,
                    delay: 2
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                  whileHover={{scale: 1.2, rotate: 5}}
                  transition={{duration: 0.3}}
                >
                  <FileText className="w-16 h-16" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  شفافیت و اعتماد
                </h3>
                <p className="text-gray-600 mb-6">
                  ما به شفافیت در تمام مراحل همکاری باور داریم. اعتماد متقابل با
                  مشتریان و شرکای تجاری، پایه‌ای قوی برای روابط بلندمدت می‌سازد.
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <motion.div
                    className="flex justify-center"
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.3}}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-blue-600 fill-blue-600"
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Our Team Section */}
      <motion.section
        ref={teamRef}
        className="py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate={teamControls}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            >
              تیم متخصص ما
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto mb-6"
              initial={{width: 0}}
              whileInView={{width: 96}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            />
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: false, amount: 0.8}}
            >
              تیم ما متشکل از متخصصان با تجربه در صنعت حمل و نقل است که با دانش
              و تخصص خود، خدمات برتری را به مشتریان ارائه می‌دهند
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.2}}
          >
            {[
              {
                role: "مدیریت",
                desc: "هدایت تیم با استراتژی‌های نوآورانه و چشم‌اندازی روشن برای آینده شرکت"
              },
              {
                role: "کارشناسان لجستیک",
                desc: "ارائه راهکارهای بهینه برای حمل و نقل و برنامه‌ریزی مسیرهای حمل کالا"
              },
              {
                role: "تیم عملیات",
                desc: "اجرای دقیق فرآیندهای حمل و نقل و نظارت بر جابجایی محموله‌ها"
              },
              {
                role: "پشتیبانی مشتریان",
                desc: "همراهی با مشتریان در تمام مراحل و پاسخگویی به نیازها و سوالات"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 rounded-2xl p-6 text-center"
                variants={cardVariants}
                whileHover={{y: -10, backgroundColor: "#eff6ff"}}
                transition={{duration: 0.3}}
              >
                <motion.div
                  className="w-24 h-24 bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center"
                  whileHover={{scale: 1.1, rotate: 5}}
                  transition={{duration: 0.3}}
                >
                  <Users className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {member.role}
                </h3>
                <p className="text-gray-600">{member.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {/* Contact Information Section */}
      <motion.section
        ref={contactRef}
        className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={contactControls}
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
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            >
              تماس با ما
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-300 mx-auto mb-6"
              initial={{width: 0}}
              whileInView={{width: 96}}
              transition={{duration: 0.8}}
              viewport={{once: false, amount: 0.8}}
            />
            <motion.p
              className="text-blue-100 max-w-2xl mx-auto"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: false, amount: 0.8}}
            >
              برای کسب اطلاعات بیشتر و استفاده از خدمات ما، از طریق راه‌های
              ارتباطی زیر با ما در تماس باشید
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl"
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.6}}
              viewport={{once: false, amount: 0.5}}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-8">
                اطلاعات تماس
              </h3>
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.6}}
              >
                <motion.div
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <motion.div
                    className="bg-blue-100 p-3 rounded-xl mt-1"
                    whileHover={{scale: 1.1, backgroundColor: "#dbeafe"}}
                    transition={{duration: 0.3}}
                  >
                    <Phone className="w-6 h-6 text-blue-700" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">شماره تماس</div>
                    <div className="text-lg font-bold text-blue-900 mb-1">
                      00989128390597
                    </div>
                    <div className="text-lg font-bold text-blue-900">
                      00989193636218
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <motion.div
                    className="bg-blue-100 p-3 rounded-xl mt-1"
                    whileHover={{scale: 1.1, backgroundColor: "#dbeafe"}}
                    transition={{duration: 0.3}}
                  >
                    <Globe className="w-6 h-6 text-blue-700" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">وب‌سایت</div>
                    <a
                      href="https://www.payamcargo.com"
                      className="text-lg font-bold text-blue-900 hover:underline"
                    >
                      www.payamcargo.com
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <motion.div
                    className="bg-blue-100 p-3 rounded-xl mt-1"
                    whileHover={{scale: 1.1, backgroundColor: "#dbeafe"}}
                    transition={{duration: 0.3}}
                  >
                    <Mail className="w-6 h-6 text-blue-700" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">ایمیل</div>
                    <div className="text-lg font-bold text-blue-900">
                      info@payamcargo.com
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <motion.div
                    className="bg-blue-100 p-3 rounded-xl mt-1"
                    whileHover={{scale: 1.1, backgroundColor: "#dbeafe"}}
                    transition={{duration: 0.3}}
                  >
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      آدرس دفتر تهران
                    </div>
                    <div className="text-lg font-bold text-blue-900">
                      تهران، میرداماد، خیابان رودبار شرقی، کوچه فلسفی، پلاک ۲،
                      ساختمان فلسفی، طبقه ۶، واحد ۲۷
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <motion.div
                    className="bg-blue-100 p-3 rounded-xl mt-1"
                    whileHover={{scale: 1.1, backgroundColor: "#dbeafe"}}
                    transition={{duration: 0.3}}
                  >
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      آدرس دفتر البرز
                    </div>
                    <div className="text-lg font-bold text-blue-900">
                      کرج، جهانشهر، خیابان انقلاب، خیابان شرقی، پلاک ۲۷۸
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.6, delay: 0.3}}
              viewport={{once: false, amount: 0.5}}
              className="bg-blue-800 p-8 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                  فرم تماس با ما
                </h3>
                <p className="text-blue-100 mb-8">
                  برای ارسال درخواست یا سوالات خود، فرم زیر را پر کنید
                </p>
                <form className="space-y-6">
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.6}}
                  >
                    <motion.div variants={itemVariants}>
                      <input
                        type="text"
                        placeholder="نام و نام خانوادگی"
                        className="w-full bg-blue-700 border border-blue-600 text-white placeholder-blue-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <input
                        type="tel"
                        placeholder="شماره تماس"
                        className="w-full bg-blue-700 border border-blue-600 text-white placeholder-blue-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
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
                    <input
                      type="email"
                      placeholder="ایمیل"
                      className="w-full bg-blue-700 border border-blue-600 text-white placeholder-blue-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
                    />
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.4}}
                    viewport={{once: false, amount: 0.6}}
                  >
                    <textarea
                      rows="4"
                      placeholder="پیام شما"
                      className="w-full bg-blue-700 border border-blue-600 text-white placeholder-blue-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none"
                    ></textarea>
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full bg-white text-blue-900 py-3 rounded-xl hover:bg-blue-50 transition-colors font-medium"
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                    viewport={{once: false, amount: 0.6}}
                  >
                    ارسال پیام
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Map Section */}
      <section className="h-96 bg-gray-100 relative">
        <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg max-w-md text-center"
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            viewport={{once: false, amount: 0.5}}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              موقعیت دفاتر ما
            </h3>
            <p className="text-gray-600 mb-6">
              برای مشاهده موقعیت دقیق دفاتر تهران و البرز روی نقشه، به لینک زیر
              مراجعه کنید
            </p>
            <div className="flex justify-center">
              <motion.button
                className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors font-medium"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.98}}
              >
                مشاهده روی نقشه
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
