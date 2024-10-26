import { Metadata } from "next";
import { getProductBySlug, getAllProducts } from "@/services/getProducts";
import { Container, Grid } from "@radix-ui/themes";
import ProdutImages from "@/components/Product/ProductImages/ProductImages";
import ProductDetails from "@/components/Product/ProductDetails/ProductDetails";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
}

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
  console.log(product);
  return (
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
      <Grid
        gap="16px"
        width={"100%"}
        align={"start"}
        justify={"center"}
        columns={{
          initial: "1",
          md: "2",
        }}
      >
        <ProdutImages />
        <ProductDetails />
      </Grid>
    </Container>
  );
};

export default ProductPage;
