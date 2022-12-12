import React from 'react'
import { Link } from "react-router-dom";
import p1 from "../../assets/shop/1.jpg";
import { AiOutlineHeart, AiOutlineEye, AiOutlineStar } from "react-icons/ai";
import { Rating } from "@mui/material";

const ShopProductCard = ({product}) => {
  return (
    <div className="relative">
      <div className="overflow-hidden relative group">
        <Link
          to="/product-details"
          state={{ product }}
          className="relative group overflow-hidden"
        >
          <img src={product.img} alt={product.title} />
          <img
            src={p1}
            alt={product.title}
            className="absolute top-0 left-0 w-full h-full opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0  duration-500 "
          />
        </Link>
        <div className="flex  overflow-hidden absolute bottom-0 left-0 h-10 items-center  divide-x  justify-around w-full">
          <div className=" text-white cursor-pointer group-hover:translate-y-0 translate-y-full duration-200 bg-primary flex-1 fc h-full hover:bg-black hover:text-white border-r-gray-200">
            <AiOutlineHeart />
          </div>
          <div className="py-3 text-white font-medium uppercase group-hover:translate-y-0 bg-primary translate-y-full duration-500 hover:bg-black hover:text-white border-r-gray-200 flex-[3] fc">
            <button className="">Select Option</button>
          </div>
          <div className=" text-white cursor-pointer  group-hover:translate-y-0 h-12 duration-700 bg-primary translate-y-full hover:bg-black hover:text-white border-r-gray-200 flex-1 fc">
            <AiOutlineEye />
          </div>
        </div>

        <div className="absolute top-2 space-y-1 right-5">
          {product.oldPrice && (
            <p className="bg-primary text-white px-2 text-sm rounded-sm">
              -{product.oldPrice}%
            </p>
          )}
          {product.status && (
            <p className="bg-primary text-white px-2 text-sm  rounded-sm">
              {product.status}
            </p>
          )}
        </div>
      </div>

      <div className="text-center space-y-2">
        <p className="px-3"> {product.title}</p>
        <Rating
          readOnly
          value={product.ratings}
          size="small"
          precision={0.5}
          icon={<AiOutlineStar />}
          emptyIcon={<AiOutlineStar />}
        />
        <div className="font-medium">
          ${product.price}
          {product.oldPrice && (
            <span>
              {" "}
              -<del className="text-gray-500 pl-3">${product.oldPrice}</del>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopProductCard