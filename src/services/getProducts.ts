import fs from 'fs/promises';
import path from 'path';

export const getAllProducts = async () => {
    const filePath = path.join(process.cwd(), 'products.json'); 
  const jsonData = await fs.readFile(filePath, 'utf-8'); 
  const products = JSON.parse(jsonData); 
  return products;
}

export const getProductBySlug = async (slug: string) => {
    const products = await getAllProducts(); 
  const product = products.find((p: { slug: string }) => p.slug === slug); 
  return product;
}