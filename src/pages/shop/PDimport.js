import {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "./../../components/breacrumbs/Breadcrumbs";
import Slider from "react-slick";
import { Rating, Tab, Tabs } from "@mui/material";
import TabPanel, { a11yProps } from "./TabPanel";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineDribbble } from "react-icons/ai";
import RelatedProduct from "./RelatedProduct";
import {useDispatch} from 'react-redux'
import { addToCart } from "../../redux/cartSlice";
 const LinkArr = [
   { icon: <FaFacebookF size={20} />, link: "facebook.com" },
   { icon: <AiOutlineDribbble size={20} />, link: "dribble.com" },
   { icon: <FaPinterestP size={20} />, link: "pintarest.com" },
   { icon: <FaTwitter />, link: "twitter.com" },
   { icon: <FaLinkedinIn size={20} />, link: "linkdin.com" },
 ];

export {
  LinkArr,
  useDispatch,
  useState,
  Link,
  useLocation,
  Breadcrumbs,
  Slider,
  Rating,
  Tab,
  Tabs,
  TabPanel,
  a11yProps,
  AiOutlineDribbble,
  RelatedProduct,
  addToCart,
};