import React from 'react'
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/breacrumbs/Breadcrumbs'
import { useRef } from 'react';

const Signin = () => {
  const register = useRef()
  const signin = useRef()
  const signBtn = useRef()
  const registerBtn = useRef()
  console.log(register)
  const handleClick=()=>{
     registerBtn.current.classList.remove("text-primary");
     signBtn.current.classList.add("text-primary");
     register.current.classList.add("hidden");
     signin.current.classList.remove("hidden");
  }
   const handleClick1 = () => {
    registerBtn.current.classList.add('text-primary')
    signBtn.current.classList.remove('text-primary')
    register.current.classList.remove('hidden')
    signin.current.classList.add('hidden')
   };

  return (
    <>
      <Breadcrumbs />
      <div className="fc flex-col w-full h-[70vh] ">
        <div className="font-bold ">
          <button
            onClick={handleClick}
            ref={signBtn}
            className="px-5 py-3 text-2xl text-primary  border-r-2"
          >
            Sign In
          </button>
          <button ref={registerBtn} onClick={handleClick1} className="px-5 text-2xl py-3  ">
            Register
          </button>
        </div>
        <div className="w-full h-[50vh] relative mx-5 mt-10 overflow-hidden md:shadow-xl md:max-w-[60vw] md:mx-auto lg:w-[50vw]  ">
          <form className="p-20 space-y-5 " ref={signin}>
            <div className="">
              <input className="cinput" type="password" placeholder="Email" />
            </div>
            <div className="">
              <input className="cinput" type="text" placeholder="Password" />
            </div>
            <div className="fs">
              <div className="fc space-x-3 cursor-pointer">
                <input type="checkbox" name="remember" id="remember" />
                <label className='cursor-pointer' htmlFor="remember">Remember me</label>
              </div>
              <div className="">
                <Link
                  className="hover:text-primary space-2 hover:underline "
                  to="/forget-password"
                >
                  Forgot Password
                </Link>
              </div>
            </div>
            <input
              className="btn bg-gray-300 text-gray-600 hover:bg-primary hover:text-white duration-500 cursor-pointer"
              type="submit"
              value="Sign in"
            />
          </form >
          
            <form
              className="p-20 space-y-5  hidden" 
              ref={register}
            >
              <div className="">
                <input className="cinput" type="text" placeholder="Username" />
              </div>
              <div className="">
                <input
                  className="cinput"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="">
                <input className="cinput" type="email" placeholder="Email" />
              </div>

              <input
                className="btn bg-gray-300 text-gray-600 hover:bg-primary hover:text-white duration-500 cursor-pointer"
                type="submit"
                value="Register"
              />
            </form>
          
        </div>
      </div>
    </>
  );
}

export default Signin