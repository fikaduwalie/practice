import { notFound } from "next/navigation";
import { Product } from "./types";
import ProductList from "./_components/ProductList";

const products: Product[] = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
];

export default async function ProductPage() {
  if (!products || products.length === 0) {
    notFound();
  }

  return (
    <div>
      <h2>Products LIst</h2>
      <ProductList products={products} />
    </div>
  );
}
