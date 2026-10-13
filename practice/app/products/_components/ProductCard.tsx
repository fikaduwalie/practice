import React from "react";
import { Product } from "../types";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  if (!product) return null;

  return (
    <div>
      <h2>{product.title}</h2>
    </div>
  );
};

export default ProductCard;
