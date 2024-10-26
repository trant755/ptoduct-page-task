import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), 'products.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  // Знаходимо продукт за slug
  const product = products.find((p: { slug: string }) => p.slug === slug);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: slug }, { status: 404 });
  }
}
