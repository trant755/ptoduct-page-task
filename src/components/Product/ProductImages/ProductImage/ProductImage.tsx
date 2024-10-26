import { Box } from "@radix-ui/themes";
import Image from "next/image";
import sc from "./ProductImage.module.scss";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

interface ProductImageProps {
  src: string;
  alt: string;
  setMainSwiper?: (swiper: SwiperClass) => void;
  secondSwiper?: SwiperClass | null;
}

const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  setMainSwiper,
  secondSwiper,
}) => {
  return (
    <Box minWidth={"100%"} className={sc.imageWrapper}>
      <Box display={{ sm: "none" }} className={sc.clipPathElement} />
      <Swiper
        spaceBetween={10}
        className="mySwiper2"
        onSwiper={setMainSwiper}
        draggable="false"
        onSlideChange={(swiper: SwiperClass) => {
          if (secondSwiper) {
            secondSwiper.slideTo(swiper.activeIndex);
          }
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide>
          <Image
            layout="responsive"
            objectFit="contain"
            className={sc.image}
            width={400}
            height={400}
            src={src}
            alt={alt}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout="responsive"
            objectFit="contain"
            className={sc.image}
            width={400}
            height={400}
            src={src}
            alt={alt}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout="responsive"
            objectFit="contain"
            className={sc.image}
            width={400}
            height={400}
            src={src}
            alt={alt}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout="responsive"
            objectFit="contain"
            className={sc.image}
            width={400}
            height={400}
            src={src}
            alt={alt}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ProductImage;
