import React, { useState, useEffect } from "react";
import Electronics from "../../components/categoriesUI/Electronics";
import Jewelery from "../../components/categoriesUI/Jewelery";
import Men from "../../components/categoriesUI/Men";
import Women from "../../components/categoriesUI/Women";
import OurServices from "../../components/ourServices/OurServices";
import CarSlider from "../../components/carousel";

const Home = () => {
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics?limit=4")
      .then((res) => res.json())
      .then((json) => setElectronics(json));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery?limit=4")
      .then((res) => res.json())
      .then((json) => setJewelery(json));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=4")
      .then((res) => res.json())
      .then((json) => setMen(json));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing?limit=4")
      .then((res) => res.json())
      .then((json) => setWomen(json));
  }, []);

  return (
    <>
      <CarSlider />
      <Electronics electronics={electronics} />
      <Jewelery jewelery={jewelery} />
      <Men men={men} />
      <Women women={women} />
      <OurServices />
    </>
  );
};

export default Home;
