import React from "react";

const ProductsWrapper = ({ children }) => {
  return (
    <div className="bg-white mx-5 w-full p-8 min-h-screen rounded-lg max-w-[60rem] min-w-min  ">
      {children}
    </div>
  );
};

export default ProductsWrapper;
