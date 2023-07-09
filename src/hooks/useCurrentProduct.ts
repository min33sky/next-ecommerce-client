import { create } from "zustand";

interface CurrentProductState {
  product: Product | null;
  setProduct: (product: Product) => void;
}

export const useCurrentProduct = create<CurrentProductState>((set) => ({
  product: null,
  setProduct: (product) => set({ product }),
}));
