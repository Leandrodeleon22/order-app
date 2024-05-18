import { useQuery } from "@tanstack/react-query";

import { getAllOrders } from "./data";

export const useFetchOrders = (tableId) => {
  const {
    data: allOrders,

    isLoading,
  } = useQuery({
    queryKey: ["orders", tableId],
    queryFn: () => getAllOrders(tableId),
  });

  return { allOrders, isLoading };
};
