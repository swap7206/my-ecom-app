import { use } from "react";
import ProductDetailsTemplate from '@/components/templates/ProductDetailsTemplate';

export default function ProductDetailPage({params}: {params: Promise<{ id: string }>}) {
  const { id } = use(params);
  return <ProductDetailsTemplate productId={Number(id)} />;
}
