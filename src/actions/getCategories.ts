import fetcher from '@/lib/fetcher';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategories() {
  return fetcher.get<Category[]>(URL);
}
