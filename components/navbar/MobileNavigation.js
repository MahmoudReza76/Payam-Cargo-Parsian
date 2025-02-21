import React from "react";
import {Menu} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Link from "next/link";
import LanguageSelector from "../LanguageSwitcher";
import {useTranslations, useLocale} from "next-intl";

function MobileNavigation({Logo, Register}) {
  const t = useTranslations("navbar");
  const locale = useLocale();

  const menuItems = [
    {
      trigger: t("parsianCargo.title"),
      items: [
        {href: "/about", label: t("parsianCargo.aboutUsTitle")},
        {href: "/services", label: t("parsianCargo.ourServicesTitle")},
        {href: "/contact", label: t("parsianCargo.contanTitle")}
      ]
    },
    {
      trigger: t("services.servicesTitle"),
      items: [
        {href: "/service1", label: t("services.passengersTitle")},
        {href: "/service2", label: t("services.freightCostTitle")},
        {href: "/service3", label: t("services.comercialCargoExportTitle")}
      ]
    },
    {
      trigger: t("freightPrice.freightPriceTitle"),
      items: [
        {href: "/price1", label: t("freightPrice.freightPriceTitle")},
        {href: "/price2", label: t("freightPrice.freightPriceTitle")}
      ]
    },
    {
      trigger: t("aboutUs.aboutUsTitle"),
      items: [
        {href: "/company", label: t("aboutUs.satisfactionTitle")},
        {href: "/team", label: t("aboutUs.cooperateWithUsTitle")},
        {href: "/history", label: t("aboutUs.licensesTitle")}
      ]
    },
    {
      trigger: t("guide.guideTitle"),
      items: [
        {href: "/howto", label: t("guide.howToUseTitle")},
        {href: "/faq", label: t("guide.faqTitle")},
        {href: "/support", label: t("guide.supportTitle")}
      ]
    }
  ];

  return (
    <Sheet>
      <div className="flex items-center gap-2">
        {/* Language Selector */}
        <LanguageSelector />

        {/* Menu Button */}
        <SheetTrigger asChild>
          <button className="p-2">
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
      </div>

      <SheetTitle></SheetTitle>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[540px]"
        dir={locale === "fa" || locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="py-4">
          <Logo />
        </div>
        <Accordion type="single" collapsible className="w-full">
          {menuItems.map((section, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{section.trigger}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="p-2 hover:bg-accent rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link
          href="/blog"
          className="block px-1 py-4 hover:bg-accent rounded-md transition-colors"
        >
          {t("parsianCargo.blogTitle")}
        </Link>
        <div className="mt-8">
          <Register />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;
