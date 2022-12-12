import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { HomePage, Shop, Blog, Contact, Navbar, Cart } from './ImportHelper'
import BlogDeatils from "./pages/blog/BlogDeatils";
import Signin from "./pages/Sign in/Signin";
import Profile from './components/profile/Profile';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./pages/shop/ProductDetails";


function App() {
  return (
    <>
      <ToastContainer position="bottom-left" pauseOnHover={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog-details" element={<BlogDeatils />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
