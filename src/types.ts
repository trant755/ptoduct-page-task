export interface Color {
  name: string;
  hex: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  characteristics: [];
  images: [];
  inStock: boolean;
  price: number;
  slug: string;
  colors: Color[];
}