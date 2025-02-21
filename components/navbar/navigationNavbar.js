import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";

const ListItem = React.forwardRef(
  ({className, title, children, ...props}, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

function NavigationNavbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();

  return (
    <NavigationMenu dir={locale === "fa" || locale === "ar" ? "rtl" : "ltr"}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {t("parsianCargo.title")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {t("parsianCargo.title")}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {t("parsianCargo.description")}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title={t("parsianCargo.aboutUsTitle")}>
                {t("parsianCargo.aboutUsDescription")}
              </ListItem>
              <ListItem
                href="/services"
                title={t("parsianCargo.ourServicesTitle")}
              >
                {t("parsianCargo.ourServicesDescription")}
              </ListItem>
              <ListItem href="/contact" title={t("parsianCargo.contanTitle")}>
                {t("parsianCargo.contanDescription")}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {t("services.servicesTitle")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/service1" title={t("services.passengersTitle")}>
                {t("services.passengersDescription")}
              </ListItem>
              <ListItem href="/service2" title={t("services.freightCostTitle")}>
                {t("services.freightCostDescription")}
              </ListItem>
              <ListItem
                href="/service2"
                title={t("services.comercialCargoExportTitle")}
              >
                {t("services.ComercialCargoExportDescription")}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {t("freightPrice.freightPriceTitle")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/price1" title="Price Category 1">
                {t("freightPrice.freightPriceTitle")}
              </ListItem>
              <ListItem href="/price2" title="Price Category 2">
                {t("freightPrice.freightPriceTitle")}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {t("freightTracking.freightTrackingTitle")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/price1" title="Tracking Category 1">
                {t("freightTracking.freightTrackingTitle")}
              </ListItem>
              <ListItem href="/price2" title="Tracking Category 2">
                {t("freightTracking.freightTrackingTitle")}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {t("aboutUs.aboutUsTitle")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                href="/satisfaction"
                title={t("aboutUs.satisfactionTitle")}
              >
                {t("aboutUs.satisfactionDescription")}
              </ListItem>
              <ListItem
                href="/cooperate"
                title={t("aboutUs.cooperateWithUsTitle")}
              >
                {t("aboutUs.cooperateWithUsDescription")}
              </ListItem>
              <ListItem href="/licenses" title={t("aboutUs.licensesTitle")}>
                {t("aboutUs.licensesDescription")}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("guide.guideTitle")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/howto" title={t("guide.howToUseTitle")}>
                {t("guide.howToUseDescription")}
              </ListItem>
              <ListItem href="/faq" title={t("guide.faqTitle")}>
                {t("guide.faqDescription")}
              </ListItem>
              <ListItem href="/support" title={t("guide.supportTitle")}>
                {t("guide.SupportDescription")}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              {t("parsianCargo.blogTitle")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavigationNavbar;
