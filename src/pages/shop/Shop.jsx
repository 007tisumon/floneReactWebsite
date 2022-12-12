import { useState } from "react";
import Breadcrumbs from "../../components/breacrumbs/Breadcrumbs";
import { FaTh, FaListUl, FaThLarge, FaSearch } from "react-icons/fa";
import { Chip, Stack,Pagination } from "@mui/material";
import './shop.css'
import DisplayProducts from "./DisplayProducts.jsx";

const Shop = () => {
  const categories = [
    "All categories",
    "Fashion",
    "Men",
    "Women",
    "Electronics",
    "Furniture",
    "Plant",
    "Organic Food ",
    "Flower",
    "Cosmetics",
    "Accesories",
    "Handmade",
    "Kids",
    "Auto Parts",
    "Cakes",
    "Pet Food",
    "Medical",
    "Black Friday",
    "Chirsmas",
  ];
  const color = ["All Colors", "White", "Black", "Brown", "Blue"];
  const size = ["All Sizes", "X", "M", "XL", "XXL"];
  const tag = [
    "Fashion",
    "Men",
    "Jacket",
    "Full Sleeve",
    "Women",
    "Coat",
    "Top",
    "Sleveless",
    "Electronics",
    "Furniture",
    "Plant",
    "Organic Food",
    "Flower",
    "Book",
    "Cosmatis",
    "Handmade",
    "Kids",
    "Auto Parts",
    "Cakes",
    "Pet Food",
    "Medical",
    "Black Friday",
    "Chirsmas",
  ];
 
  const [val,setVal] =useState()
  const handleCtg=(text)=>{
    console.log(text);
    setVal(text)
  }
  return (
    <>
      <Breadcrumbs />
      <div className="grid lg:grid-cols-12 grid-cols-1   max-w-[1240px] mx-auto ">
        <div className="lg:col-span-3 lg:order-first order-last  ml-3">
          <div className="w-full">
            <p className="text-lg my-10 font-medium">Search</p>
            <form className="border md:grid md:col-span-3 py-1  flex items-center w-[80%]  relative">
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparnt px-5 w-full py-1 focus:outline-none text-gray-400 "
              />
              <FaSearch
                className="  cursor-pointer absolute top-0 right-2 border-l w-10 translate-y-[50%] text-gray-400"
                size={20}
              />
            </form>
          </div>
          <div className="mx-auto md:mx-5 lg:mx-0 grid grid-cols-12 lg:grid-cols-1 ">
            <ul className="col-span-3">
              <p className="text-lg font-medium my-6">Categories</p>
              {categories.map((ctg,ind) => (
                <li 
                  className="flex cursor-pointer radiobtn my-2 "
                  key={ctg}
                  onClick={(e) => handleCtg(ctg)}
                >
                  <input type="radio" className="mr-3" name="check" id={ctg} />
                  <label className="cursor-pointer font-medium" for={ctg}>
                    {ctg}
                  </label>
                </li>
              ))}
            </ul>
            <ul className="col-span-3 ">
              <p className="text-lg font-medium my-6">Colors</p>
              {color.map((color) => (
                <li className="flex my-2" key={color}>
                  <input
                    type="radio"
                    className="mr-3"
                    name="color"
                    id={color}
                  />
                  <label className="cursor-pointer " for={color}>
                    {color}
                  </label>
                </li>
              ))}
            </ul>
            <ul className="col-span-3">
              <p className="text-lg font-medium my-6">Size</p>
              {size.map((size) => (
                <li className="flex space-x-4" key={size}>
                  <input type="radio" name="radio" id={size} />
                  <label className="cursor-pointer " for={size}>
                    {size}
                  </label>
                </li>
              ))}
            </ul>
            <div className=" space-y-2 col-span-3">
              <p className="text-lg font-medium my-6">Tag</p>
              <Stack direction="row" flexWrap="wrap" whiteSpace={2}>
                {tag.map((tag) => (
                  <Chip
                   key={tag}
                    label={tag}
                    spacing={2}
                    sx={{ marginRight: 1, marginBottom: 0.5 }}
                  />
                ))}
              </Stack>
            </div>
          </div>
        </div>
        <div className="lg:col-span-9 px-10  ">
          <div className="flex items-center">
            <select
              name=""
              id=""
              className="border px-1 py-1 text-gray-600 focus:outline-none "
            >
              <option value="default">Default</option>
              <option value="high">Price - Heigh to low</option>
              <option value="default">Price - Low to heigh</option>
            </select>
            <p className="ml-5 text-gray-600">Showing 25 of 144 result</p>
            <ul className="flex ml-auto space-x-3 my-10 text-gray-600 cursor-pointer">
              <li>
                <FaThLarge size={22} />
              </li>
              <li>
                <FaTh size={22} />
              </li>
              <li className=" ">
                <FaListUl size={22} />
              </li>
            </ul>
          </div>
          <DisplayProducts />
          <div className="fc w-full my-20">
            <Pagination size="large" count={10} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
