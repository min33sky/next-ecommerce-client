import { getCategory } from "@/actions/getCategory";
import { getColors } from "@/actions/getColors";
import { getProducts } from "@/actions/getProducts";
import { getSizes } from "@/actions/getSizes";
import BillboardView from "@/components/BillboardView";
import Container from "@/components/Container";
import Filters from "@/components/Filters";
import NoResult from "@/components/NoResult";
import ProductCard from "@/components/ProductCard";
import React from "react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

interface CategoryDetailPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    color: string;
    size: string;
  };
}

export default async function CategoryDetailPage({
  params,
  searchParams,
}: CategoryDetailPageProps) {
  const { data: sizes } = await getSizes();
  const { data: colors } = await getColors();
  const { data: category } = await getCategory(params.categoryId);

  //? 검색을 할 때 id값이 필요하므로 쿼리스트링으로 받은 값을 id값으로 변환
  const selectedColor = colors.find(
    (color) => color.name === searchParams.color,
  )?.id;

  const selectedSize = sizes.find((size) => size.name === searchParams.size)
    ?.id;

  const { data: products } = await getProducts({
    categoryId: params.categoryId,
    colorId: selectedColor,
    sizeId: selectedSize,
    isFeatured: true,
  });

  return (
    <div className="bg-white scroll-smooth">
      <Container>
        <BillboardView data={category.billboard} />

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Add Mobile Filters */}
            <div className="hidden lg:block">
              <Filters data={sizes} name="사이즈" valueKey="size" />
              <Filters data={colors} name="색상" valueKey="color" />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
