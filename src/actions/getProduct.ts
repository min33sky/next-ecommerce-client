import fetcher from "@/lib/fetcher";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export async function getProduct(productId: string) {
  return fetcher.get<Product>(`${URL}/${productId}`);
}
