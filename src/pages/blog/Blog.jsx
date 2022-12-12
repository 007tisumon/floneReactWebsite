import React from "react";
import sideImg1 from "../../assets/blg_details/sidebar-1.jpg";
import sideImg2 from "../../assets/blg_details/sidebar-2.jpg";
import sideImg3 from "../../assets/blg_details/sidebar-3.jpg";
import Breadcrumbs from "../../components/breacrumbs/Breadcrumbs";
import { blogData } from "./blogData";
import { FaSearch, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import BlogRecent from "./Blog-recent";
const Blog = () => {
  const navigate = useNavigate();
  const category = [
    { ctg: "women", blognum: 4 },
    { ctg: "men", blognum: 4 },
    { ctg: "bags", blognum: 4 },
    { ctg: "accessiories", blognum: 4 },
  ];
  const tags = [
    { name: "clothing" },
    { name: "accessories" },
    { name: "for men" },
    { name: "women" },
    { name: "Fashion" },
  ];
  const recentProject = [
    { id: 1, ctg: "photography", name: "T-Shirt and jeans", img: sideImg1 },
    { id: 2, ctg: "design", name: "T-Shirt and jeans", img: sideImg3 },
    { id: 3, ctg: "branding", name: "T-Shirt and jeans", img: sideImg2 },
    { id: 4, ctg: "photography", name: "T-Shirt and jeans", img: sideImg1 },
  ];
  return (
    <>
      <div>
        <Breadcrumbs />
      </div>
      <div className="lg:grid lg:grid-cols-12 mt-20 flex flex-col-reverse  max-w-[1240px] mx-auto ">
       <BlogRecent tags={tags&&tags} category={category&&category} recentProject={recentProject&&recentProject} />
        <div className="lg:col-span-9 px-10 order-2   w-full col-span-12 ">
          <div className="grid  overflow-hidden md:grid-cols-2 grid-cols-1 gap-8">
            {blogData.map((blg) => (
              <div className="shadow-lg group pb-4 rounded" key={blg.id}>
                <div className="overflow-hidden group ">
                  <img
                    src={blg.img}
                    className="group-hover:scale-110 duration-500"
                    alt=""
                  />
                </div>
                <div className="px-5 mt-4">
                  <p className="font-medium text-gray-600">{blg.date}</p>
                  <p className="py-2 text-lg text-gray-700">
                    <strong>{blg.title}</strong>
                  </p>
                  <p className="text-gray-600">
                    {blg.p1.split(" ").slice(0, 15).join(" ")}...
                  </p>
                  <div className="fs mt-5">
                    <p>
                      <Link
                        state={{blog:blg,category,tags,recentProject}}
                        className="uppercase font-medium hover:text-primary text-gray-500"
                        to={`/blog-details`}
                      >
                        Read More
                      </Link>
                    </p>
                    <div className="fi text-medium px-5">
                      Share:{" "}
                      <div className="flex pl-3">
                        <div className=" h-6 w-6 border duration-500 border-primary cursor-pointer fc bg-primary hover:bg-transparent text-white hover:text-primary rounded-full mr-2">
                          <FaFacebookF size={15} />
                        </div>
                        <div className="h-6 w-6 border duration-500 border-primary cursor-pointer fc bg-primary hover:bg-transparent text-white hover:text-primary rounded-full mr-2">
                          <AiOutlineTwitter size={15} />
                        </div>
                        <div className="h-6 w-6 border duration-500 border-primary cursor-pointer fc bg-primary hover:bg-transparent text-white hover:text-primary rounded-full mr-2">
                          <AiFillInstagram size={15} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="fc w-full my-20">
            <Pagination size="large" count={10} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
