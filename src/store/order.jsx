import { create } from "zustand";

export const orderStore = create((set) => ({
  order: {
    orders: false,
  },
  updateOrder: (isOrder) =>
    set((state) => ({
      order: {
        ...state.order,
        orders: !isOrder,
      },
    })),
}));
