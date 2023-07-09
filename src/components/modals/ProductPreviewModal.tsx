"use client";

import { useCurrentProduct } from "@/hooks/useCurrentProduct";
import Modal from "./Modal";
import { useModal } from "@/hooks/useModal";
import Gallery from "../Gallery";
import ProductInfo from "../products/ProductInfo";

export default function ProductPreviewModal() {
  const { isOpen, onClose } = useModal();

  const { product } = useCurrentProduct();

  if (!product) {
    return null;
  }

  return (
    <Modal
      type="product-preview"
      title="상품 미리보기"
      description="상품의 상세 정보를 확인할 수 있습니다."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="grid w-full items-start gap-x-6 gap-y-8 grid-cols-3">
        <div className="col-span-1">
          <Gallery images={product.images} />
        </div>
        <div className="col-span-2">
          <ProductInfo product={product} />
        </div>
      </div>
    </Modal>
  );
}
