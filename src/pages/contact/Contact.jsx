import React from 'react'
import GoogleMapReact from 'google-map-react';
import {FaPhone, FaFacebook,FaPinterest,FaTwitter,FaViacoin} from 'react-icons/fa'
import { GoLocation } from "react-icons/go";
import { BiWorld } from "react-icons/bi";
import Breadcrumbs from '../../components/breacrumbs/Breadcrumbs';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
     const defaultProps = {
       center: {
         lat: 10.99835602,
         lng: 77.01502627,
       },
       zoom: 11,
     };
    return (
        <>
        <Breadcrumbs />
      <div>
        <div className="md:px-20 px-10 mt-10">
          <div className="h-[60vh] w-full">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 mt-16">
            <div className="md:col-span-1 fc  bg-gray-100 py-10  ">
              <div className="space-y-5">
                <div className="fi space-x-3 ">
                  <div className="w-10 hover:bg-gray-800 hover:text-white duration-500 h-10 border-2 fc border-black rounded-full">
                    <FaPhone />
                  </div>
                  <div className="">
                    <p className="">+012 345 678 102</p>
                    <p className="">+012 345 678 102</p>
                  </div>
                </div>
                <div className="fi space-x-3">
                  <div className="w-10 hover:bg-gray-800 hover:text-white duration-500 h-10 border-2 fc border-black rounded-full">
                    <BiWorld />
                  </div>
                  <div className="">
                    <p className="">yourname@email.com</p>
                    <p className="">yourwebsitename.com</p>
                  </div>
                </div>
                <div className="fi space-x-3">
                  <div className="w-10 hover:bg-gray-800 hover:text-white duration-500 h-10 border-2 fc border-black rounded-full">
                    <GoLocation />
                  </div>
                  <div className="">
                    <p className="">Address goes here,</p>
                    <p className="">street, Crossroad 123.</p>
                  </div>
                </div>
                <div className="text-gray-500 fc flex-col">
                  <p className="text-3xl mb-5">Follow Us</p>
                  <div className="fi space-x-3">
                    <FaFacebook />
                    <FaPinterest />
                    <FaViacoin />
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 md:px-20 px-5 py-10 bg-gray-100 w-full">
              <form action="" className="space-y-4 space-x-2">
                <h2 className="self-start">Get in Touch</h2>

                <input
                  type="text"
                  className="cinput lg:w-[48%] before::content-[*]"
                  placeholder="Name *"
                />

                <input
                  type="text"
                  className="cinput lg:w-[48%]"
                  placeholder="Email *"
                />

                <input
                  type="text"
                  className="cinput before:content-['*']"
                  placeholder="Subject *"
                  />

                <textarea
                  cols="50"
                  rows="6"
                  type="text"
                  className="pl-3 pt-2 focus:outline-none bg-transparent border w-full border-gray-400"
                  placeholder="Message *"
                />
                <input
                  type="submit"
                  value="SENT"
                  className="bg-gray-500 py-3 px-10 text-lg font-medium text-white hover:bg-primary duration-300 cursor-pointer"
                  />
              </form>
            </div>
          </div>
        </div>
      </div>
                  </>
    );
}

export default Contact