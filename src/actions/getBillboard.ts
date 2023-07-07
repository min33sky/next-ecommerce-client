import fetcher from '@/lib/fetcher';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export async function getBillboard(billboardId: string) {
  return fetcher.get<Billboard>(`${URL}/${billboardId}`);
}
