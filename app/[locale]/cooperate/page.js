"use client";
import React from "react";
import {
  Shield,
  CreditCard,
  Building2,
  Handshake,
  Users,
  CheckCircle,
  Mail,
  Phone
} from "lucide-react";

export default function AgencyTermsPage() {
  const sections = [
    {
      title: "شرایط عمومی متقاضی نمایندگی",
      icon: Shield,
      items: [
        "دارای تابعیت ایرانی و عدم سوءپیشینه کیفری.",
        "نداشتن تعهد یا نمایندگی همزمان از شرکت رقیب در حوزه بار هوایی."
      ]
    },
    {
      title: "شرایط مالی",
      icon: CreditCard,
      items: [
        "پرداخت مبلغ ورودی نمایندگی: ۵۰ میلیون تومان.",
        "سپرده ضمانت: ۵۰ میلیون تومان ضمانت‌نامه بانکی جهت حسن انجام تعهدات.",
        "مبلغ پرداختی به نماینده از سود طبق جدول پیوستی."
      ]
    },
    {
      title: "امکانات و منابع",
      icon: Building2,
      items: [
        "داشتن دفتر مجهز به تجهیزات کامپیوتری و اداری با حداقل مساحت ۲۰ متر.",
        "حداقل ۲ نیروی انسانی متخصص (مسئول فروش و مسئول هماهنگی عملیات).",
        "دسترسی به انبار یا همکاری با انبارهای مجاز جهت تجمیع بار.",
        "توانایی ارسال گزارش‌های منظم عملکرد ماهانه و مالی."
      ]
    },
    {
      title: "تعهدات نماینده",
      icon: Handshake,
      items: [
        "رعایت نرخ‌نامه و سیاست‌های قیمت‌گذاری شرکت اصلی.",
        "استفاده از برند، لوگو و سامانه شرکت مادر مطابق دستورالعمل برندینگ.",
        "حفظ کیفیت خدمات و پاسخگویی مناسب به مشتریان.",
        "عدم افشای اطلاعات مشتریان یا فرآیندهای داخلی شرکت."
      ]
    },
    {
      title: "حمایت شرکت مادر",
      icon: Users,
      items: [
        "آموزش اولیه و مستمر به نیروهای نماینده.",
        "ارائه سیستم مدیریت سفارشات، پورتال آنلاین و مواد تبلیغاتی.",
        "تأمین قراردادهای چارتر و مجوزهای گمرکی از سمت دفتر مرکزی.",
        "همکاری در مذاکرات با مشتریان کلان یا بین‌المللی در استان‌ها."
      ]
    }
  ];

  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[50vh] bg-blue-900 text-white flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          شرایط اعطای نمایندگی شرکت البرز ترابر سپهر
        </h1>
        <p className="text-blue-100 text-lg max-w-2xl">
          این صفحه به معرفی ضوابط، الزامات و حمایت‌های شرکت مادر برای نمایندگان
          رسمی می‌پردازد.
        </p>
      </section>

      {/* Terms Sections */}
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
          برای کسب اطلاعات بیشتر و ارسال درخواست نمایندگی
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
