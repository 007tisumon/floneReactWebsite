import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const aboutUs = [
    { link: "About us", url: "/aboutus" },
    { link: "Store location", url: "/store" },
    { link: "Contact", url: "/contact" },
    { link: "Orders tracking", url: "/orderstracking" },
  ];
  const useFullinks = [
    { link: "Returns", url: "/returns" },
    { link: "Supply Policy", url: "/supplyPolicy" },
    { link: "Size guide", url: "/size_gide" },
    { link: "FAQs", url: "/faqs" },
  ];
  const followus = [
    { link: "Facebook", url: "#" },
    { link: "Twitter", url: "#" },
    { link: "Instragram", url: "#" },
    { link: "Youtube", url: "#" },
  ];
  const options =[
    {title:'About us' ,arr:aboutUs},
    {title:'Usefull Links' ,arr:useFullinks},
    {title:'Follow us' ,arr:followus},
]
  return (
    <div className="my-5 bg-gray-100  py-20">
      <div className="grid lg:grid-cols-6 grid-cols-3 gap-4 px-5 justify-between lg:items-center lg:max-w-[1200px] md:max-w-[700px] mx-auto">
        <div className=" col-span-2 sm:col-auto space-y-1">
            <h2>Ecommerce</h2>
            <p className="text-gray-800/50"> © 2022 Ecommerce.</p>
            <p  className="text-gray-400">All Right Reserved</p>
        </div>
        {options.map(item=>(
             <ul key={item.title} className="space-y-2">
                <p className="text-lg font-medium uppercase">{item.title}</p>
                {
                item.arr?.map(item=>(
                    <li key={item.link} >
                        <Link className="font-normal 
                        cursor-pointer hover:text-blue
                        first-letter: text-gray-500" to={item.url}>{item.link}</Link>
                    </li>
                ))}
                </ul>
           ))}
        <div className="lg:col-span-2 sm:col-span-2 col-span-3">
        <p className="text-lg font-medium uppercase">Subscribe</p>
            <div className="space-y-4 mt-2">
            <p className="text-gray-400">Get E-mail updates about our latest shop and special offers.</p>
            <form className="space-y-5 lg:space-y-2">
             <input className="bg-trasparent w-full border-b-2 focus:outline-none border-gray-400 bg-gray-100 py-1 text-gray-400 " placeholder="Enter your email..." type="email" name="" id="" /> <br />
             <input type="submit" value="Subscribe"
             className="uppercase hover:text-blue border-b-2 border-gray-500 cursor-pointer "
             />
            </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
