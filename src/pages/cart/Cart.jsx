import {useState} from "react";
import Breadcrumbs from "../../components/breacrumbs/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Cart.css";
import { removeCart,qtyIncreament ,qtyDecreament } from "../../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cartItems);
  const totalPrice = cartItems.map(item=>item.price).reduce((pr,acc)=>pr+acc,0)
 const incQty = (item) => {
  dispatch(qtyIncreament({...item}))
 };
 const decQty = (item) => {
  console.log('click');
  dispatch(qtyDecreament({...item}));
 };
  const deleteCart=(item)=>{
    dispatch(removeCart(item))
  }
  return (
    <>
      <Breadcrumbs className="my-5" />
      {cartItems.length <= 0 ? (
        <div className="fc w-full h-[70vh]">
          <div className="bg-white fc flex-col">
            <AiOutlineShoppingCart fontSize={100} className="font-thin " />
            {/* <img src={cart} alt="cart image" /> */}
            <p className="text-2xl py-3">No items found in cart</p>
            <Link to="/shop" className="btn mt-3">
              Shop Now
            </Link>
          </div>
        </div>
      ) : (
        <div className="lg:max-w-[1200px]  mx-auto  px-10">
          <div className="w-full overflow-x-auto ">
            <div className="table-auto w-[800px]  mx-auto">
              <h4 className="font-medium my-5">Your Cart items</h4>
              <table className="w-full border table-auto">
                <thead className="border bg-gray-100 text-left  py-10">
                  <tr className="py-5">
                    <th className="py-5 px-2 uppercase">Image</th>
                    <th className="py-5 px-2 uppercase">Product name</th>
                    <th className="py-5 px-2 w-28 uppercase">Unit Price</th>
                    <th className="py-5 px-2 uppercase">Quantity</th>
                    <th className="py-5 px-2 uppercase">subtotal</th>
                    <th className="py-5 px-2 uppercase">action</th>
                  </tr>
                </thead>
                <tbody className="divide-y ">
                  {cartItems?.map((item) => (
                    <tr key={item.id} className="">
                      <td className="p-5">
                        <img
                          className="w-20 "
                          src={item.img}
                          alt={item.title}
                        />
                      </td>
                      <td className="p-5 ">
                        <p className="font-medium text-blue">{item.title}</p>
                        <p className="text-gray-400">{item.categories}</p>
                      </td>
                      <td className="p-5 font-medium text-lg">
                        <p>
                          {item.oldPrice && (
                            <del className="font-medium text-red">
                              ${item.oldPrice}{" "}
                            </del>
                          )}{" "}
                          {item.oldPrice && <span> - </span>}
                          <span className="text-gray-800">${item.price}</span>
                        </p>
                      </td>
                      <td className="p-5 ">
                        <div className="flex item-center">
                          <button
                            onClick={() => decQty(item)}
                            className="relative overflow-hidden w-20 border fc"
                          >
                            -
                          </button>
                          <input
                            readOnly
                            className="w-14 pl-6  mx-auto border focus:outline-none qty"
                            type="number"
                            value={item.quantity}
                          />
                          <button
                            onClick={() => incQty(item)}
                            className="w-10 h-7 border fc"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-5">
                        <p className="font-medium">${item.price * item.quantity}</p>
                      </td>
                      <td className="p-5 ">
                        <button
                          onClick={() => deleteCart(item)}
                          className="text-xl cursor-pointer p-4"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-10 grid">
            <div className="my-5 bg-gray-100/60 p-6 border space-y-5">
              <div className="grid grid-cols-6 fc">
                <p className="text-lg col-span-2 font-medium">
                  Use Coupon Code
                </p>
                <div className="col-span-4">
                  <hr className="border-gray-500" />
                </div>
              </div>
              <div className="fc relative">
                <input type="text" className="w-full rounded-r-full cinput" />
                <button className="btn min-w-fit py-2 absolute right-0 top-0 h-full rounded-r-full">
                  Apply coupn
                </button>
              </div>
            </div>
            <div className="my-5 bg-gray-100/60 p-6 border space-y-5">
              <div className="grid grid-cols-5 fc">
                <p className="text-xl col-span-1 font-medium">Cart Total </p>
                <div className="col-span-4">
                  <hr className="border-gray-500" />
                </div>
              </div>
              <div className="text-medium font-medium  flex justify-between ">
                <p>Total Products</p>
                <p>$5</p>
              </div>
              <div className="text-medium font-medium text-xl text-primary flex justify-between ">
                <p className="text-xl ">Grand Total</p>
                <p>${totalPrice}</p>
              </div>
              <div className="px-4">
                <button className="btn uppercase w-full rounded-full">
                  Proceed to checkout
                </button>
              </div>
            </div>
            <div className="flex justify-between uppercase">
              <button className="btn uppercase">continue shopping</button>
              <button className="btn uppercase">clear cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
