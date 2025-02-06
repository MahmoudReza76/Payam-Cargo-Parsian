"use client";

import React, {useRef} from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import {motion} from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import slide5 from "@/public/asset/5.png";
import slide2 from "@/public/asset/2.png";
import slide3 from "@/public/asset/3.png";
import slide4 from "@/public/asset/4.png";
import {useTranslations} from "next-intl";

function Hero() {
  const t = useTranslations("hero");

  const plugin = useRef(Autoplay({delay: 8000, stopOnInteraction: true}));

  const items = [
    {
      title: t("slide1Title"),
      description: t("slide1Description"),
      image: slide5
    },
    {
      title: t("slide2Title"),
      description: t("slide2Description"),
      image: slide2
    },
    {
      title: t("slide3Title"),
      description: t("slide3Description"),
      image: slide3
    },
    {
      title: t("slide4Title"),
      description: t("slide4Description"),
      image: slide4
    }
  ];

  const textVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  };

  return (
    <div dir="ltr" className="w-full h-full mx-auto px-4">
      <Carousel plugins={[plugin.current]} className="w-full md:h-[90vh] h-96">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="relative rounded-lg p-6 md:h-[80vh] h-80 flex flex-col items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg" />
                  <motion.div
                    className="relative z-10 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.3
                        }
                      }
                    }}
                  >
                    <motion.h2
                      className="text-3xl font-bold mb-3 text-white"
                      variants={textVariants}
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      className="text-xl text-white/90"
                      variants={textVariants}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}

export default Hero;
