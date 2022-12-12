import { Link,useLocation } from "react-router-dom"
import Breadcrumbs from './../../components/breacrumbs/Breadcrumbs';
import BlogRecent from "./Blog-recent";
import { HiChatAlt2 } from "react-icons/hi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
const BlogDeatils = () => {
   
    const {state:{blog,category,tags,recentProject}} = useLocation()
    console.log(category);
  return (
    <>
      <Breadcrumbs />
      <div className="lg:grid lg:grid-cols-12 mt-20 px-16 md:px-0 flex flex-col-reverse  max-w-[1240px] mx-auto ">
        <BlogRecent
          tags={tags && tags}
          category={category && category}
          recentProject={recentProject && recentProject}
        />
        <div className="lg:col-span-9  order-2 md:px-10   w-full col-span-12 ">
          <img src={blog?.img} alt="" className="max-w-full w-full" />
          <div className="mt-5">
            <p className="uppercase fi font-normal  text-gray-700">
              {blog?.date}
              {"  "} <HiChatAlt2 className="ml-2" />
            </p>
            <p className="font-medium text-lg">{blog?.title}</p>
            <p className="my-4">{blog?.p1}</p>
            <em className="font-medium text-lg">{blog?.p2}</em>
            <p className="my-4">{blog?.p3}</p>
            <div className="grid gap-3 md:grid-cols-2 my-4">
              <img src={blog?.blogDetails2} alt={blog?.title} />
              <img src={blog?.blogDetails1} alt={blog?.title} />
            </div>
            <p className="my-5">{blog?.p3}</p>
            <div className="fs">
              <ul className="fi space-x-3">
                <li>
                  <Link className="hover:text-primary" to="/blog-details">
                    Lifestyle
                  </Link>
                  
                </li>
                <li>
                  <Link className="hover:text-primary" to="/blog-details">
                    Interior
                  </Link>
                  
                </li>
                <li>
                  <Link className="hover:text-primary" to="/blog-details">
                    Outdoor
                  </Link>
                </li>
              </ul>
              <div className="fi text-medium px-5">
                Share:{" "}
                <div className="flex pl-3">
                  <div className="   duration-500 cursor-pointer fc  hover:bg-transparent  hover:text-primary mr-2">
                    <FaFacebookF size={18} />
                  </div>
                  <div className="  duration-500  cursor-pointer fc  hover:bg-transparent  hover:text-primary  mr-2">
                    <BsTwitter size={18} />
                  </div>
                  <div className=" duration-500  fc hover:bg-transparent  hover:text-primary cursor-pointer  mr-2">
                    <ImInstagram size={18} />
                  </div>
                </div>
              </div>
            </div>
            <div className="fs border-b border-t my-4 py-4">
              <button className="hover:text-primary font-medium fc">
                {" "}
                <AiOutlineLeft className="mr-1" /> Prev Post
              </button>
              <button className="hover:text-primary font-medium fc">
                Next Post <AiOutlineRight className="ml-1" />
              </button>
            </div>
            <div className="">
              <p className="text-xl font-medium uppercase">Comments : 02</p>
              <div className="mt-5 space-y-3">
                {blog?.comment?.map((com) => (
                  <div key={com.id} className="">
                    <img src={com.img} alt={com.name} />
                    <p className="font-thin mt-3">{com?.date}</p>
                    <p className="font-medium ">{com?.name}</p>
                    <p>{com?.comment}</p>
                  </div>
                ))}
              </div>
            </div>
            <form className="mt-8 space-y-4">
              <h4 className="uppercase">Post a comment</h4>
              <div className="md:fs space-y-3 md:space-y-0 items-center">
                <div className="md:w-[48%] w-full">
                  <input
                    className="cinput"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className="md:w-[48%] w-full">
                  <input
                    className="cinput"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="">
                <textarea
                  className="cinput"
                  name="Message"
                  placeholder="Message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <input className="btn" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDeatils