import Link from "next/link";
import { getAllProducts } from "@/services/getProducts";

type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
};

export const revalidate = 60;

const ProductsPage: React.FC = async () => {
  const products: Product[] = await getAllProducts();

  return (
    <div>
      <h1>Products</h1>
      <p>
        Welcome to the products page. Here you will find a variety of items
        available for purchase.
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              borderRadius: "8px",
              width: "200px",
              cursor: "pointer",
            }}
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
