"use client";
import React from "react";
import {
  Truck,
  Package,
  Factory,
  Globe2,
  CheckCircle,
  Mail,
  Phone,
  Network,
  Route
} from "lucide-react";

export default function RoadTransportPage() {
  const sections = [
    {
      title: "خدمات حمل‌ونقل زمینی",
      icon: Truck,
      items: [
        "هلدینگ پیام کارگو با بهره‌گیری از شبکه گسترده نمایندگان و ناوگان مجهز، خدمات حمل‌ونقل زمینی ایمن و به‌موقع به کشورهای ترکیه، روسیه، آلمان، افغانستان، پاکستان، رومانی، ترکمنستان، گرجستان، ازبکستان، قزاقستان و عراق ارائه می‌دهد.",
        "با بیش از ۲۵۰ دستگاه تریلی ترانزیت چادری، یخچالی، کفی و لبه‌دار، این شرکت قادر است خدمات سریع، مطمئن و با قیمت رقابتی ارائه دهد.",
        "تمامی فرآیندهای حمل از مبدا تا مقصد با رعایت استانداردهای بین‌المللی انجام می‌شود."
      ]
    },
    {
      title: "انواع محموله‌های قابل حمل",
      icon: Package,
      items: [
        "کالاهای صنعتی و فله شامل میلگرد، زغال‌سنگ، شیشه، مواد شیمیایی و مایعات.",
        "انواع محصولات حجیم و حساس که نیازمند تجهیزات ویژه حمل هستند.",
        "محصولات یخچالی و مواد غذایی با دمای کنترل‌شده."
      ]
    },
    {
      title: "ناوگان و تجهیزات",
      icon: Factory,
      items: [
        "بهره‌گیری از انواع کامیون‌های تریلر، یخچال‌دار، تانکر و کفی.",
        "نگهداری و سرویس دوره‌ای ناوگان برای افزایش ایمنی و بهره‌وری.",
        "امکان بارگیری سریع، ایمن و استاندارد برای کالاهای مختلف."
      ]
    },
    {
      title: "مقاصد بین‌المللی و مسیرها",
      icon: Globe2,
      items: [
        "ارائه خدمات به کشورهای همسایه و اروپایی از طریق مسیرهای زمینی مطمئن.",
        "مدیریت کامل عملیات ترانزیت قانونی از مبدا تا مقصد.",
        "حمل‌ونقل Door-to-Door با رعایت الزامات گمرکی و بین‌المللی."
      ]
    },
    {
      title: "ویژگی‌های لجستیکی و پشتیبانی",
      icon: Network,
      items: [
        "پشتیبانی ۲۴ ساعته و رهگیری آنلاین بار در تمام مراحل حمل.",
        "مدیریت زنجیره تأمین و هماهنگی کامل بین واحدهای عملیاتی.",
        "ارائه گزارش‌های دقیق برای مشتریان در هر مرحله از فرآیند حمل."
      ]
    },
    {
      title: "تعهد ما",
      icon: Route,
      items: [
        "ما متعهد به ارائه راهکارهای لجستیکی جامع با بالاترین استانداردهای بین‌المللی هستیم.",
        "تضمین ایمنی، سرعت و دقت در انتقال کالاهای شما.",
        "تلاش مستمر برای بهبود کیفیت خدمات و رضایت مشتریان."
      ]
    }
  ];

  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[50vh] bg-blue-900 text-white flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">حمل‌ونقل زمینی</h1>
        <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
          هلدینگ پیام کارگو با ناوگانی قدرتمند و تجربه‌ای گسترده در حوزه
          حمل‌ونقل زمینی، آماده ارائه خدمات سریع، ایمن و مقرون‌به‌صرفه در
          مسیرهای داخلی و بین‌المللی است.
        </p>
      </section>

      {/* Content Sections */}
      <section className="py-16 max-w-5xl mx-auto px-4 space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <section.icon className="w-6 h-6 text-blue-700" />
              <h2 className="text-xl font-bold text-blue-900">
                {section.title}
              </h2>
            </div>
            <ul className="list-disc pr-6 text-gray-700 space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 py-16 text-white text-center">
        <h3 className="text-2xl font-bold mb-6">
          برای دریافت اطلاعات بیشتر و رزرو خدمات حمل‌ونقل زمینی
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6" />
            <a
              href="mailto:info@payamcargo.com"
              className="text-blue-200 hover:text-white transition"
            >
              info@payamcargo.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <a
              href="tel:09058337011"
              className="text-blue-200 hover:text-white transition"
            >
              09058337011
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
