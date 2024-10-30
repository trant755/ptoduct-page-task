import { Flex, Text, Heading, RadioCards } from "@radix-ui/themes";
import { Product } from "@/types";
import sc from "./ProductDetails.module.scss";

interface ProductDetailsProps {
  product: Product;
  slug: string;
}

const ProductDetails = ({ product, slug }: ProductDetailsProps) => {
  const currentColor = product.colors.find((color) => color.slug === slug);
  return (
    <Flex width={"100%"} className={sc.wrapper}>
      <Flex
        display={{ initial: "none", md: "flex" }}
        className={sc.titleWrapper}
      >
        <Heading as="h1" size={{ md: "6", lg: "7" }} className={sc.title}>
          {product.name}
        </Heading>
      </Flex>
      <Flex direction="column">
        <Flex align={"center"} justify={"center"} gap={""}>
          <Text>Color</Text>
          <RadioCards.Root
            className={sc.colorSwitcher}
            defaultValue={currentColor?.name}
            size={"1"}
          >
            {product.colors.map((color) => (
              <RadioCards.Item
                className={sc.coloSwitherItem}
                key={color.slug}
                value={color.name}
              >
                <Flex
                  className={sc.color}
                  style={{ backgroundColor: color.hex }}
                ></Flex>
              </RadioCards.Item>
            ))}
          </RadioCards.Root>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductDetails;
