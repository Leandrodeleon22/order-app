"use client";
import React from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { products } from "../mock-data/placeholder-data";
import Image from "next/image";
import Counter from "./Counter";

// import { Cross2Icon } from "@radix-ui/react-icons";

const Product = () => {
  const imageLoader = ({ src, width, quality }) => {
    // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    return `https://res.cloudinary.com/da8jnpdza/image/upload/v1714873725/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <div className="bg-slate-100 mr-3 w-full p-4 rounded-md shadow-lg transform transition-transform hover:scale-105">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          {/* min-w-[16rem] */}
          {/* bg-slate-100 mr-3 w-full p-4 rounded-md */}
          <div className=" w-full cursor-pointer">
            <div className="flex justify-center mb-2 ">
              <Image
                loader={imageLoader}
                src="stjohns_burger_mwth9j.png"
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </div>
            <span className="font-bold text-red-500">Regina burger</span>
            <p className="text-gray-500 italic">
              Taste the prairie flavors with our Regina Burger, showcasing a
              juicy beef patty
            </p>
            <span className="font-semibold">Size:Medium </span>
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
                  src="stjohns_burger_mwth9j.png"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                />
              </div>
              <div className="w-1/2 flex flex-col justify-between">
                <div className="flex text-[1.5rem] font-semibold">
                  <span className="mr-4">Name:</span>
                  <span>Regina Burger</span>
                </div>

                <div>
                  <h1>Description:</h1>
                  <p>
                    Taste the prairie flavors with our Regina Burger, showcasing
                    a juicy beef patty topped with smoky bacon, melted Gouda
                    cheese, tangy barbecue sauce, crunchy onion rings, and a
                    dollop of creamy coleslaw, all served on a toasted sesame
                    seed bun.
                  </p>
                </div>

                <div className="flex font-semibold my-2 text-[1.2rem]">
                  <span className="mr-3">Size:</span>
                  <span>Medium</span>
                </div>

                <div className="flex font-semibold mb-2 text-[1.2rem]">
                  <span className="mr-3">Price:</span>
                  <span>$7.00</span>
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
                  <Dialog.Close asChild>
                    <button className="bg-red-500 hover:bg-red-600 text-white w-full inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none ">
                      ADD TO ORDER
                    </button>
                  </Dialog.Close>
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
        <span className="font-semibold">Price: $7</span>
        <button className="bg-gray-200 px-2 rounded-[5px]">
          <span className="font-bold text-orange-600">ADD</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
