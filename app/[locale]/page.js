import {useLocale} from "next-intl";
import Hero from "@/components/home/hero/hero";
import Features from "@/components/home/features/features";
import Blog from "@/components/home/blog/blog";
import Introduction from "@/components/home/introduction/introduction";
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
