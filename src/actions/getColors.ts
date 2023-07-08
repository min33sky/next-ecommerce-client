import fetcher from "@/lib/fetcher";

export async function getColors() {
  return fetcher.get<Color[]>(`/colors`);
}
