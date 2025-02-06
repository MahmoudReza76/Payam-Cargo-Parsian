import {useLocale} from "next-intl";
import Hero from "@/components/hero/hero";
import Features from "@/components/features/features";
import Blog from "@/components/blog/blog";
import Introduction from "@/components/introduction/introduction";
export default function Home() {
  const locale = useLocale();

  return (
    <div
      dir={locale === "fa" || locale === "ar" ? "rtl" : "ltr"}
      className="flex flex-col"
    >
      <Hero />
      <Introduction />
      <Features />
      <Blog />
    </div>
  );
}
