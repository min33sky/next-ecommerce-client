"use client";

import Modal from "./Modal";
import { useModal } from "@/hooks/useModal";

export default function ProductPreviewModal() {
  const { isOpen, onClose } = useModal();

  return (
    <Modal
      type="product-preview"
      title="상품 미리보기"
      description="상품의 상세 정보를 확인할 수 있습니다."
      isOpen={isOpen}
      onClose={onClose}
    >
      하하하하하
    </Modal>
  );
}
