import {
  Link,
  useLocation,
  Breadcrumbs,
  Slider,
  Rating,
  Tab,
  Tabs,
  TabPanel,
  a11yProps,
  RelatedProduct,
  useState,
  useDispatch,
  LinkArr,
  addToCart
} from "./PDimport";
import "./productDetails.css";


const ProductDetails = () => {
  const dispatch = useDispatch()
  const {
    state: { product },
  } = useLocation();
  console.log(product);
  const images = [product?.img, product?.img, product?.img, product?.img];
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Add_Cart = (product) => {
  
    dispatch(addToCart({...product}))
  };
  return (
    <>
      <Breadcrumbs />
      <div className="px-10 lg:max-w-[1200px] mx-auto ">
        <div className="grid lg:grid-cols-4 grid-cols-1 justify-center">
          <div className=" pb-56 relative col-span-2">
            <Slider
              dots
              initiaSlide={4}
              customPaging={(i) => {
                return (
                  <div>
                    <img
                      className="w-full h-full object-cover"
                      src={images[i]}
                      alt="imageghkkj"
                    />
                  </div>
                );
              }}
              dotsClass="slick-dots custom-indicator"
            >
              {images.map((img, ind) => (
                <div className="" key={ind}>
                  <img
                    className="w-full h-[90vh] object-cover"
                    src={img}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-span-2 px-10 space-y-5">
            <p className="text-3xl">{product?.title}</p>
            <p className="text-3xl text-red ">${product?.price}</p>
            <p>
              <Rating value={product?.ratings} readOnly />
            </p>
            <p>{product?.desc}</p>
            <hr />
            <div className="">
              <button onClick={()=>Add_Cart(product)} className="btn uppercase">
                Buy now
              </button>
            </div>
            <p>
              Categories :{" "}
              <Link className="hover:text-blue duration-200" to="/shop">
                {product?.categories}
              </Link>{" "}
            </p>
            <p>
              Tags :{" "}
              <Link className="hover:text-blue duration-200" to="/shop">
                {product?.tags}
              </Link>{" "}
            </p>
            <div className="flex space-x-4 items-center">
              {LinkArr.map((item, ind) => (
                <Link
                  key={ind}
                  className="hover:text-blue duration-300"
                  to={item.link}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 w-full ">
          <div className="border-b w-full flex justify-center">
            <Tabs
              value={value}
              onChange={handleChange}
              area-label="basic tabs example"
            >
              <Tab label="Additional Information" {...a11yProps(0)} />
              <Tab label="Description" {...a11yProps(1)} />
              <Tab
                label={`Reviews (${product?.Reviews?.length})`}
                {...a11yProps(2)}
              />
            </Tabs>
          </div>
          <TabPanel value={value} index={0}>
            <ul className="p-10 space-y-5 ">
              <li>
                <span className="font-semibold w-28 inline-block">Weight</span>
                {product?.addInfo?.weight}
              </li>
              <li>
                <span className="font-semibold w-28 inline-block">
                  Dimensions
                </span>
                {product?.addInfo?.dimensions}
              </li>
              <li>
                <span className="font-semibold w-28 inline-block">
                  Materials
                </span>
                {product?.addInfo?.materials}
              </li>
              <li>
                <span className="font-semibold w-28 inline-block">
                  Other Info
                </span>
                {product?.addInfo?.otherInfo}
              </li>
            </ul>
          </TabPanel>
          <TabPanel value={value} index={1} className="p-10">
            <p>{product?.desc}</p>
          </TabPanel>
          <TabPanel value={value} index={2} className="p-5">
            <div className="grid md:grid-cols-2 gap-5 grid-cols-1 ">
              <div className="space-y-5">
                {product?.Reviews?.map((item, ind) => (
                  <div key={ind} className="flex space-x-3 w-full">
                    <img src={item.img} alt={item.name} />
                    <div className="w-full">
                      <div className="flex items-center w-full">
                        <div className="flex items-center flex-1">
                          <p className="font-semibold mr-4">{item.name}</p>

                          <Rating size="small" value={item?.rating} readOnly />
                        </div>
                        <p className="">
                          <Link
                            className="hover:text-blue font-medium cursor-pointer"
                            to="/"
                          >
                            Reply
                          </Link>
                        </p>
                      </div>
                      <p>
                        {item?.comment}{" "}
                        <Rating size="small" value={item?.rating} readOnly />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-3">
                <p className="font-medium text-lg">Add a Review</p>
                <p className="font-medium  flex items-center space-x-4">
                  Your Rating : <Rating size="small" />{" "}
                </p>
                <form action="" className="space-y-4  mt-5">
                  <textarea
                    cols="50"
                    rows="6"
                    type="text"
                    className="pl-3 pt-2 focus:outline-none bg-transparent border w-full border-gray-400"
                    placeholder="Comment *"
                  />
                  <input
                    type="submit"
                    value="SUBMIT"
                    className="bg-gray-500 py-3 px-10 text-lg font-medium text-white hover:bg-primary duration-300 cursor-pointer"
                  />
                </form>
              </div>
            </div>
          </TabPanel>
        </div>
        <RelatedProduct />
      </div>
    </>
  );
};

export default ProductDetails;
