import React from "react";
import Link from "next/link";
const PayButton = () => {
  return (
    <Link
      href="https://buy.stripe.com/test_14k17ucGh4BS7Di8ww"
      className="bg-green-500 px-4 py-1 ml-4 rounded-md text-white hover:bg-green-400"
    >
      Pay now
    </Link>
  );
};

export default PayButton;
