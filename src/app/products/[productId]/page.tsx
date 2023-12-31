import { getProduct } from "@/actions/getProduct";
import { getProducts } from "@/actions/getProducts";
import Container from "@/components/Container";
import Gallery from "@/components/Gallery";
import ProductInfo from "@/components/products/ProductInfo";
import ProductList from "@/components/products/ProductList";
import { Metadata } from "next";
import React from "react";

interface ProductDetailPageProps {
  params: {
    productId: string;
  };
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { data: product } = await getProduct(params.productId);

  return {
    title: `${product?.name} - Next-Ecommerce`,
    description: product?.name,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  // product 불러오기
  const { data: product } = await getProduct(params.productId);
  // 연관된 상품들 불러오기
  const { data: suggestedProducts } = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <Gallery images={product?.images} />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfo product={product} />
            </div>
          </div>

          <hr className="my-10" />

          <ProductList title="연관된 상품들" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
}
