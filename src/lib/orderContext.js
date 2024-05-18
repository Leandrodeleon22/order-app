"use client";

import React, { createContext, useState } from "react";

// Create a context
export const OrderContext = createContext();

// Create a provider component
export const OrderProvider = ({ children }) => {
  const [orders, setAllOrders] = useState([]);

  return (
    <OrderContext.Provider value={{ orders, setAllOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
