import React from 'react'
import { FaSearch } from 'react-icons/fa';


const BlogRecent = ({tags,category,recentProject}) => {
  return (
    <div className="lg:col-span-3   ml-3">
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
      <div className="mx-auto md:mx-5 lg:mx-0 mt-10 ">
        <div className="divide-y">
          {recentProject.map((item) => (
            <div className="mx-2 flex gap-5 py-3" key={item.id}>
              <div className="">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="">
                <p className="uppercase text-sm">{item.ctg}</p>
                <p className="uppercase">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-lg font-medium my-5">Categories</p>
        {category.map((ctg) => (
          <div className="fs " key={ctg.ctg}>
            <label htmlFor="" className="py-0.5 capitalize">
              <input type="checkbox" name="" id={ctg.ctg} /> {ctg.ctg}
            </label>
            <p className="w-6 h-6 rounded bg-gray-300 fc">{ctg.blognum}</p>
          </div>
        ))}
        <p className="text-lg font-medium mt-3">Tag</p>
        <div className="space-x-0.5 inline-flex flex-wrap">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className="px-5 py-2 mt-3 capitalize bg-gray-300 rounded-full duration-300 hover:bg-primary hover:text-white"
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogRecent