import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="animate-spin rounded-full h-72 w-72 border-b-4 border-gray-900">
          <div className="absolute inset-0 flex justify-center items-center text-gray-900 text-2xl font-semibold">
            Loading . . .
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;