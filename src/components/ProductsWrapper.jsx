import React from "react";

const ProductsWrapper = ({ children }) => {
  return (
    <div className="bg-white mx-5 w-full p-8 h-min rounded-lg max-w-[60rem] ">
      {children}
    </div>
  );
};

export default ProductsWrapper;
