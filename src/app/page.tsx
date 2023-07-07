import { getBillboard } from '@/actions/getBillboard';
import BillboardView from '@/components/BillboardView';
import Container from '@/components/Container';

export default async function Home() {
  const { data: billboard } = await getBillboard('cljnvf1460001pbr5f9s489zt');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillboardView data={billboard} />
      </div>
    </Container>
  );
}
