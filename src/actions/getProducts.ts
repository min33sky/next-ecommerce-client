import fetcher from "@/lib/fetcher";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface ProductQuery {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export async function getProducts(query: ProductQuery) {
  const params = new URLSearchParams();
  params.set("categoryId", query.categoryId || "");
  params.set("colorId", query.colorId || "");
  params.set("sizeId", query.sizeId || "");
  params.set("isFeatured", query.isFeatured?.toString() || "");

  console.log("params: ", params.toString());

  return fetcher.get<Product[]>(`/products?${params.toString()}`);
}
