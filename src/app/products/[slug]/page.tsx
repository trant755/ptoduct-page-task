import { Metadata } from "next";
import { getProductBySlug, getAllProducts } from "@/services/getProducts";
import { Box, Container, Grid, Heading } from "@radix-ui/themes";
import ProdutImages from "@/components/Product/ProductImages/ProductImages";
import ProductDetails from "@/components/Product/ProductDetails/ProductDetails";
import { Product } from "@/types";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 10;

export async function generateStaticParams() {
  const products: Product[] = await getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  return {
    title: `${product.name} | My Store`,
    description: product.description,
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  return (
    <Box
      pt={{
        initial: "32px",
        md: "64px",
      }}
    >
      <Container
        size={{
          initial: "3",
          lg: "4",
        }}
        pl={{
          lg: "24px",
        }}
        pr={{
          lg: "24px",
        }}
      >
        <Box display={{ initial: "block", md: "none" }}>
          <Heading as="h1" size={{ initial: "6", sm: "7" }} mb="7">
            {product.name}
          </Heading>
        </Box>
        <Grid
          gap={{
            initial: "64px",
            md: "16px",
          }}
          width={"100%"}
          align={"start"}
          justify={"center"}
          columns={{
            initial: "1",
            md: "2",
          }}
        >
          <ProdutImages images={product.images} />
          <ProductDetails product={product} slug={slug} />
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductPage;
