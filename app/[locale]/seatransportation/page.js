"use client";
import React from "react";
import {
  Ship,
  Waves,
  Package,
  Droplets,
  Globe2,
  CheckCircle,
  Mail,
  Phone
} from "lucide-react";

export default function SeaTransportPage() {
  const sections = [
    {
      title: "خدمات حمل‌ونقل دریایی",
      icon: Ship,
      items: [
        "هلدینگ پیام کارگو با بهره‌مندی از تجربه و تخصص گسترده در حمل‌ونقل دریایی، ارائه‌دهنده خدمات جامع در حمل انواع محموله‌های فله و کانتینری است.",
        "جابجایی با کشتی‌های مدرن با ظرفیت ۱۰۰۰ الی ۵۰,۰۰۰ تن به مقاصد بین‌المللی.",
        "همکاری با معتبرترین شرکت‌های کشتیرانی جهان برای تضمین حمل ایمن، سریع و مقرون‌به‌صرفه."
      ]
    },
    {
      title: "انواع محموله‌های قابل حمل",
      icon: Package,
      items: [
        "حمل تخصصی روغن آفتابگردان به مقاصد استراتژیک از جمله امارات، چین و کشورهای حوزه خلیج فارس.",
        "حمل کلینکر سیمان به بنادر کلیدی کنیا و تانزانیا با ارائه خدمات تخلیه سریع و ایمن.",
        "جابجایی IPG (گاز مایع) با کشتی‌های تانکر مجهز و استاندارد.",
        "حمل بنزین از روسیه به بنادر امیرآباد و انزلی ایران."
      ]
    },
    {
      title: "خدمات فله و مایع",
      icon: Droplets,
      items: [
        "حمل انواع فله بار خشک و مایع شامل مواد معدنی، پتروشیمی، روغن‌های صنعتی و خوراکی.",
        "رعایت دقیق استانداردهای ایمنی، بهداشتی و زیست‌محیطی در حمل مواد شیمیایی و فرآورده‌های نفتی.",
        "تجهیز ناوگان به سیستم‌های پایش و کنترل ایمنی پیشرفته."
      ]
    },
    {
      title: "خدمات کانتینری و لجستیکی",
      icon: Waves,
      items: [
        "حمل کانتینری کامل (FCL) و بارهای کم‌حجم (LCL) از مبدأ تا مقصد.",
        "ارائه خدمات Door-to-Door و Port-to-Port با مدیریت دقیق زمان‌بندی.",
        "پشتیبانی کامل شامل صدور اسناد حمل، بیمه کالا و رهگیری آنلاین ۲۴ ساعته."
      ]
    },
    {
      title: "پوشش بین‌المللی و تعهد ما",
      icon: Globe2,
      items: [
        "پوشش گسترده مقاصد جهانی در مسیرهای استراتژیک تجاری.",
        "همکاری با خطوط کشتیرانی معتبر بین‌المللی.",
        "تعهد کامل به تحویل ایمن و به‌موقع محموله‌های ارزشمند شما در بالاترین سطح استاندارد."
      ]
    }
  ];

  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[50vh] bg-blue-900 text-white flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">حمل‌ونقل دریایی</h1>
        <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
          هلدینگ پیام کارگو با بهره‌مندی از ناوگان پیشرفته و همکاری با برترین
          خطوط کشتیرانی، خدمات تخصصی حمل‌ونقل دریایی را با ایمنی و سرعت بالا
          ارائه می‌دهد.
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
          برای دریافت اطلاعات بیشتر و رزرو خدمات حمل‌ونقل دریایی
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
