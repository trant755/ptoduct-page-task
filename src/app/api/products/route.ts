import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'products.json');
  
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const products = JSON.parse(jsonData);
  
  return NextResponse.json(products);
}





