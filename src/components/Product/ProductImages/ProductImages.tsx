"use client";
import { useState } from "react";
import { Grid } from "@radix-ui/themes";
import ProductImage from "./ProductImage/ProductImage";
import ImageScrollBar from "./ImageScrollBar/ImageScrollBar";
import sc from "./ProductImages.module.scss";
import { Swiper } from "swiper";

interface ProductImagesProps {
  images: [{ src: string }];
}

const ProdutImages = ({ images }: ProductImagesProps) => {
  const [mainSwiper, setMainSwiper] = useState<Swiper | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<Swiper | null>(null);

  return (
    <Grid
      className={sc.clipPathWrapper}
      width={"100%"}
      columns={{
        initial: "1",
        sm: "1fr 200px",
        md: "1fr 120px",
        lg: "1fr 200px",
      }}
    >
      <ProductImage
        setMainSwiper={setMainSwiper}
        secondSwiper={secondSwiper}
        images={images}
      />
      <ImageScrollBar
        mainSwiper={mainSwiper}
        setSecondSwiper={setSecondSwiper}
        images={images}
      />
    </Grid>
  );
};

export default ProdutImages;
