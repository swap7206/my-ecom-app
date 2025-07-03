import ProductDetailsTemplate from '@/components/templates/ProductDetailsTemplate';

interface ProductDetailPageProps {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const {id} = await params;
  return <ProductDetailsTemplate productId={Number(id)} />;
}
