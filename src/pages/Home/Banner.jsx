import React, { useEffect,useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/slider-2-2.jpg";
import image2 from "../../assets/slider-2.jpg";
import "./banner.css";
import { motion } from "framer-motion";

const Banner = () => {
  const id = useRef()

  
  const arr = [
    {
      img: image1,
      span: "stylish",
      bigText: "Female Clothes",
      dis: "30% Off Summer Vacation",
    },
    {
      img: image2,
      span: "stylish",
      bigText: "Male Clothes",
      dis: "30% Off Summer Vacation",
    },
  ];
  const settings = {
    infinite: true,
    autoplay: true,
    duration: 30000,
  };
  // const [ind, setInd] = useState();
  useEffect(() => {}, []);
  return (
    <>
      <div className="relative overflow-hidden ">
        <Slider {...settings} className="">
          {arr.map((item) => (
            <div key={item.bigText} ref={id} className="relative ">
              <img 
                src={item.img}
                alt={item.bigText}
                className="w-full  lg:h-[90vh] md:h-[70vh] sm:h-[50vh] h-[40vh] object-cover "
              />
              <div className="absolute top-0 left-0 w-full h-full   flex items-center md:items-end justify-center flex-col">
                <div className="text-center space-y-5 md:mr-32">
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl bp font-medium capitalize flex justify-center items-center space-x-7  duration-500"
                  >
                    <div className="border-b-[3px] w-20 border-gray-900"></div>
                    <div>{item.span}</div>
                    <div className="border-b-[3px] w-20 border-gray-900"></div>
                  </motion.div>
                  <p className="text-4xl md:text-7xl lg:text-8xl duration-300">
                    {item.bigText}
                  </p>
                  <p className="text-xl ">{item.dis}</p>
                  <div>
                    <button
                      className="border border-black px-10 
                    btnAni font-medium duration-400
                    py-3 text-lg uppercase hover:text-white "
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Banner;
