import React from 'react'
import './homeShop.css'
import { ProductData } from '../../ProductData'
import ItemCard from '../../components/itemcard/ItemCard'
const HomeShop = () => {
  return (
    <>
        <div className="text-center space-y-8 my-5">
            <h2 className='relative flex justify-center homeBe'>New Arrival</h2>
            <p>Lorem ipsum dolor sit amet conse ctetu.</p>
        </div>
        <div className="md:px-14 sm:px-8 px-4 ">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 px-10 gap-4">
                {
                    ProductData.slice(0,10).map(product=>(
                        <ItemCard
                         key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default HomeShop