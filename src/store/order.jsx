import { create } from "zustand";

export const orderStore = create((set) => ({
  order: {
    orders: ["test"],
  },
  updateOrder: (allOrders) =>
    set((state) => ({
      order: {
        ...state.order,
        orders: allOrders,
      },
    })),
}));
