import { getBillboard } from '@/actions/getBillboard';
import { getProducts } from '@/actions/getProducts';
import BillboardView from '@/components/BillboardView';
import Container from '@/components/Container';
import ProductList from '@/components/ProductList';

export default async function Home() {
  const { data: products } = await getProducts({
    isFeatured: true,
  });
  const { data: billboard } = await getBillboard('cljnvf1460001pbr5f9s489zt');

  console.log('products: ', products);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillboardView data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
