import fetcher from "@/lib/fetcher";

export async function getSizes() {
  return fetcher.get<Size[]>(`/sizes`);
}
