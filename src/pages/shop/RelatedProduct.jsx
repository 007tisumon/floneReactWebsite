import React from 'react'
import './RelatedProduct.css'
import { ShopProductData as Product } from "../../ShopProductData";
import ShopProductCard from './ShopProductCard';

const RelatedProduct = () => {
  return (
    <>
      <div className="fc my-10">
        <h3 className="relatedH2 relative inline-block text-center">
          Related Prodducts
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-20">
        {
            Product.slice(0,4).map(product=>(
                <ShopProductCard key={product.id} product={product}  />
            ))
        }
      </div>
    </>
  );
}

export default RelatedProduct