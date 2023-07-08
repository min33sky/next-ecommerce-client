import fetcher from "@/lib/fetcher";

export async function getCategory(categoryId: string) {
  return fetcher.get<Category>(`/categories/${categoryId}`);
}
