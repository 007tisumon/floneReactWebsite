import React from 'react'
import './itemCard.css'
import {Rating} from '@mui/material'
import p3 from '../../assets/6.jpg'
import {FaCartPlus,FaEye} from 'react-icons/fa'
import {BsHeartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const ItemCard = ({product}) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative group prod">
        <img
          src={product.img}
          alt={product.title}
          className="max-w-full h-[335px] group-hover:-translate-x-full duration-500 "
        />
        <img
          src={p3}
          alt={product.title}
          className="max-w-full h-[335px] absolute top-0 left-0 translate-x-full group-hover:translate-x-0 duration-500"
        />

        <div className="absolute top-0 left-0 fc h-full w-full space-x-4">
          <div className="w-11 h-11 bg-slate-500 icons-div rounded-full fc p-3 rotate text-white hover:bg-slate-400  duration-500 ">
            <FaCartPlus size={30} className="" />
          </div>
          <div className="w-11 h-11 bg-slate-500 icons-div rounded-full fc p-3 rotate text-white hover:bg-slate-400  duration-500 ">
            <BsHeartFill size={30} />
          </div>
          <div className="w-11 h-11 bg-slate-500 icons-div rounded-full fc p-3 rotate text-white hover:bg-slate-400  duration-500 ">
            <Link to="/product-details" state={{ product }}>
              <FaEye size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-3 px-2 space-y-2">
        <p className="text-base font-medium text-primary">{product.title}</p>
        <div className="flex justify-between items-center">
          <p>
            <sup className="text-rose-500 font-bold italic">
              <del>{product.oldPrice && `$${product.oldPrice}`}</del>
            </sup>
            <span className="pl-1 text-blue font-bold text-lg">
              ${product.price}
            </span>
          </p>
          <p className="">
            <Rating
              size="small"
              value={product.ratings && product.ratings}
              readOnly
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard