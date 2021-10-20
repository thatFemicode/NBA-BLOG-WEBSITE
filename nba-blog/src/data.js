// import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { GiBasketballBasket } from "react-icons/gi";
import { BiBasketball } from "react-icons/all";
import React from "react";
const sublinks = [
  {
    page: "home",
    links: [{ label: "Home", icon: <FaBasketballBall />, url: "/" }],
  },
  {
    page: "features",
    links: [
      { label: "blog", icon: <BiBasketball />, url: "/blog" },
      { label: "players", icon: <BiBasketball />, url: "/players" },
      { label: "teams", icon: <BiBasketball />, url: "/teams" },
    ],
  },
  {
    page: "gallery",
    links: [
      { label: "gallery", icon: <GiBasketballBasket />, url: "/gallery" },
    ],
  },
];

export default sublinks;
