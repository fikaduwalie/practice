import { notFound } from "next/navigation";

interface Product {
  id: number;
  title: string;
}

const products: Product[] = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
];

function getProduct(id: number): Promise<Product | undefined> {
  return Promise.resolve(products.find((product) => product.id === id));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(Number(id));

  if (!product) {
    notFound();
  }

  return <div>{product.title}</div>;
}
