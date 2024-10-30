import { Box } from "@radix-ui/themes";
import Image from "next/image";
import sc from "./ProductImage.module.scss";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

interface ProductImageProps {
  setMainSwiper?: (swiper: SwiperClass) => void;
  secondSwiper?: SwiperClass | null;
  images: { src: string }[];
}

const ProductImage: React.FC<ProductImageProps> = ({
  setMainSwiper,
  secondSwiper,
  images,
}) => {
  console.log("images", images);
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
        {images &&
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box className={sc.slideContent}>
                <Image
                  layout="responsive"
                  objectFit="contain"
                  className={sc.image}
                  width={400}
                  height={400}
                  src={`/${image.src}`}
                  alt={"scooter photo"}
                />
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default ProductImage;
