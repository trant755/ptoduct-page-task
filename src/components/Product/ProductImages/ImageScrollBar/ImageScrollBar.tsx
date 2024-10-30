"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Box } from "@radix-ui/themes";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import sc from "./ImageScrollBar.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Mousewheel,
  Pagination,
  Scrollbar,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";

export interface ImageScrollBarProps {
  mainSwiper: SwiperClass | null;
  setSecondSwiper?: (swiper: SwiperClass) => void;
  images: { src: string }[];
}

const ImageScrollBar = ({
  mainSwiper,
  setSecondSwiper,
  images,
}: ImageScrollBarProps) => {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    console.log("isMobile", isMobile);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <Box className={sc.scrollBarWrapper}>
      <Swiper
        key={isMobile ? "mobile" : "desktop"}
        scrollbar={{
          hide: false,
        }}
        direction={isMobile ? "horizontal" : "vertical"}
        slidesPerView={4}
        spaceBetween={12}
        centeredSlides={true}
        grabCursor={true}
        autoHeight={isMobile ? false : true}
        slideToClickedSlide={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel, Pagination, Thumbs]}
        className={sc.swiper}
        onSwiper={setSecondSwiper}
        onSlideChange={(swiper: SwiperClass) => {
          if (mainSwiper) {
            mainSwiper.slideTo(swiper.activeIndex);
          }
        }}
      >
        {images &&
          images.map((image, index) => (
            <SwiperSlide className={sc.slide} key={index}>
              <Box className={sc.slideContent}>
                <Image
                  width={100}
                  height={100}
                  src={`/${image.src}`}
                  className={sc.image}
                  alt="product"
                />
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default ImageScrollBar;
