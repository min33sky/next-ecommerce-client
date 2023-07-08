import fetcher from "@/lib/fetcher";

export async function getProduct(productId: string) {
  return fetcher.get<Product>(`/products/${productId}`);
}
