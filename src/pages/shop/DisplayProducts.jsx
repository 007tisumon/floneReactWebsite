import React from "react";
import { ShopProductData as Product } from "../../ShopProductData";

import {useDispatch} from 'react-redux'
import ShopProductCard from "./ShopProductCard";

const DisplayProducts = () => {
  const dispatch = useDispatch()
  return (
    <div className="grid grid-cols-3 gap-4">
      {Product.map((product) => (
        <ShopProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default DisplayProducts;
