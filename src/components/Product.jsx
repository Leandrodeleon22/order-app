"use client";
import React from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { products } from "../mock-data/placeholder-data";
import Image from "next/image";
import Counter from "./Counter";
// import { formattedPrice } from "@/utils/utils";
import { formattedPrice } from "../utils/utils";
import { IoClose } from "react-icons/io5";

// import { Cross2Icon } from "@radix-ui/react-icons";

const Product = ({
  productId,
  productCategoryId,
  image,
  name,
  weight,
  description,
  price,
  note,
}) => {
  // const parts = image.split("/");
  const parts = image ? image.split("/") : []; //replaced - Andrew
  const fileName = parts[parts.length - 1];

  const formattedUrl = parts.slice(0, parts.length - 1).join("/") + "/";
  const shortDescription = description.slice(0, 78) + "...";
  const productPrice = formattedPrice(price);
  console.log(parts);

  const imageLoader = ({ src, width, quality }) => {
    // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    // return `https://res.cloudinary.com/da8jnpdza/image/upload/v1714873725/${src}?w=${width}&q=${
    //   quality || 75
    // }`;
    return `${formattedUrl}${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="flex flex-col justify-between bg-slate-100 mr-3 w-full p-4 rounded-md shadow-lg transform transition-transform hover:scale-105">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          {/* min-w-[16rem] */}
          {/* bg-slate-100 mr-3 w-full p-4 rounded-md */}
          <div className=" w-full cursor-pointer">
            <div className="flex justify-center mb-2 bg-white rounded-md h-[12rem] ">
              <div className="flex items-center justify-center">
                <Image
                  loader={imageLoader}
                  src={fileName}
                  width={
                    name === "Dr Pepper"
                      ? 85
                      : name === "Fanta"
                        ? 85
                        : name === "Canada Dry"
                          ? 85
                          : 150
                  }
                  height={
                    name === "Dr Pepper"
                      ? 85
                      : name === "Fanta"
                        ? 85
                        : name === "Canada Dry"
                          ? 85
                          : 150
                  }
                  alt={name}
                />
              </div>
            </div>
            <span className="font-bold text-red-500">{name}</span>
            <p className="text-gray-500 italic">
              {/* Taste the prairie flavors with our Regina Burger, showcasing a
              juicy beef patty */}
              {shortDescription}
            </p>
            <span className="font-semibold">Weight:{weight} </span>
          </div>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/[.90] data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[900px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            {/* <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              Table 1
            </Dialog.Title> */}

            {/* <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description> */}
            <fieldset className="flex  gap-8 justify-between">
              <div className="bg-gray-100 rounded-md shadow-md h-[500px] w-1/2 flex justify-center items-center ">
                <Image
                  loader={imageLoader}
                  src={fileName}
                  width={
                    name === "Dr Pepper"
                      ? 200
                      : name === "Fanta"
                        ? 200
                        : name === "Canada Dry"
                          ? 200
                          : 400
                  }
                  height={400}
                  alt={name}
                />
              </div>
              <div className="w-1/2 flex flex-col justify-between">
                <div className="flex text-[1.5rem] font-semibold justify-between items-center">
                  <div>
                    <span className="mr-4">Name:</span>
                    <span>{name}</span>
                  </div>
                  <Dialog.Close>
                    <IoClose className="cursor-pointer" />
                  </Dialog.Close>
                </div>

                <div>
                  <h1>Description:</h1>
                  <p>{description}</p>
                </div>

                <div className="flex font-semibold my-2 text-[1.2rem]">
                  <span className="mr-3">Weight:</span>
                  <span>{weight}</span>
                </div>

                <div className="flex font-semibold mb-2 text-[1.2rem]">
                  <span className="mr-3">Price:</span>
                  <span>CAD ${productPrice}</span>
                </div>

                <div className="flex justify-between mb-4">
                  <span className="text-[1.2rem] font-bold">Quantity</span>
                  <Counter />
                </div>

                <div>
                  {/* <label for="myTextArea">Enter your text:</label> */}
                  <textarea
                    id="myTextArea"
                    name="myTextArea"
                    rows="4"
                    cols="40"
                    className="bg-slate-100 w-full p-2 rounded-md"
                    placeholder="Note"
                  ></textarea>
                </div>

                <div className="mt-[25px] flex justify-end">
                  <button className="bg-red-500 hover:bg-red-600 text-white w-full inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none ">
                    ADD TO ORDER
                  </button>
                </div>
              </div>
              {/* <label
                className="text-violet11 w-[90px] text-right text-[15px]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="name"
                defaultValue="Pedro Duarte"
              /> */}
            </fieldset>
            {/* <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="text-violet11 w-[90px] text-right text-[15px]"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="username"
                defaultValue="@peduarte"
              />
            </fieldset> */}

            {/* <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close> */}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div className="mt-4 flex justify-between">
        <span className="font-semibold">Price: CAD ${productPrice}</span>
        <button className="bg-gray-200 px-2 rounded-[5px]">
          <span className="font-bold text-orange-600">ADD</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
