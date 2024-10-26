"use client";
import { useState } from "react";
import { Grid } from "@radix-ui/themes";
import ProductImage from "./ProductImage/ProductImage";
import ImageScrollBar from "./ImageScrollBar/ImageScrollBar";
import sc from "./ProductImages.module.scss";
import { Swiper } from "swiper";

const ProdutImages = () => {
  const [mainSwiper, setMainSwiper] = useState<Swiper | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<Swiper | null>(null);

  return (
    <Grid
      className={sc.clipPathWrapper}
      width={"100%"}
      columns={{
        initial: "1",
        sm: "1fr 200px",
      }}
    >
      <ProductImage
        src="/scooter-blue-1.png"
        alt="scooter"
        setMainSwiper={setMainSwiper}
        secondSwiper={secondSwiper}
      />
      <ImageScrollBar
        mainSwiper={mainSwiper}
        setSecondSwiper={setSecondSwiper}
      />
    </Grid>
  );
};

export default ProdutImages;
