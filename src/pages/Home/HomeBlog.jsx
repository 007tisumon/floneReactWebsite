import React from 'react'
import './blog.css'
import blog1 from '../../assets/blog-1.jpg'
import blog2 from '../../assets/blog-2.jpg'
import blog3 from '../../assets/blog-3.jpg'

const HomeBlog = () => {
    const blogs=[
        {img:blog1, title:'A guide to latest trends',createBy:'Admin', content:'lifestyle',content2:'men'},
        {img:blog2, title:'Five ways to lead a happy life',createBy:'Admin', content:'lifestyle'},
        {img:blog3, title:'Tips on having a happy life',createBy:'Admin', content:'lifestyle'},
    ]
    return (
      <>
        <div className="fc my-20">
          <h3 className="relative blog-h2 uppercase">Our blog</h3>
        </div>
        <div className="max-w-[1240px] lg:h-[50vh] mx-auto gap-4  md:px-5 grid md:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-3 relative ">
          {blogs.map((blog) => (
            <div className=" mx-4 md:mx-0 relative" key={blog.title}>
              <div className="relative flex flex-col items-center  group md:h-[35vh]  fc">
                <div className="overflow-hidden group">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="group-hover:scale-110 duration-500"
                  />
                </div>
                <div className="absolute top-5 left-5 flex space-x-2">
                  <p className="bg-primary text-white px-2">{blog.content}</p>
                  {blog.content2 && (
                    <p className="bg-primary text-white px-2">
                      {blog.content2}
                    </p>
                  )}
                </div>
                <div className="lg:absolute lg:top-[60%] lg:w-[80%] px-10 text-center lg:py-10 lg:px-10 flex items-center flex-col lg:bg-white">
                  <p className="text-gray-900 font-medium lg:text-2xl md:text-xl text-2xl  ">
                    {blog.title}
                  </p>
                  <p className="italic text-gray-500"> By {blog.createBy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}

export default HomeBlog