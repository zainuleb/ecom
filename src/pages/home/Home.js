import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions/index.js";

import OurServices from "../../components/ourServices/OurServices";
import CarSlider from "../../components/carousel";
import HomeCategoriesUI from "../../components/UI/homeCategoriesUI/HomeCategoriesUI.js";

const Home = () => {
  //Actions Area
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.categoriesActions.fetchAllCategories());
    dispatch(allActions.productsActions.fetchAllProducts());
    // eslint-disable-next-line
  }, []);

  //Selectors
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  //Get Products of Respective Categories
  let firstRun = false;

  const getProducts = async (prods, category) => {
    let result = await prods.filter((item) => item.category === category);
    result = await result.slice(0, 4);
    return result;
  };

  const [homeData, setHomeData] = useState();

  const getInitialData = async () => {
    if (
      categories.length === 4 &&
      products.length === 20 &&
      firstRun === false
    ) {
      firstRun = true;

      for (let i = 0; i < 4; i++) {
        let prods = products;
        let result = await getProducts(prods, categories[i]);
        setHomeData((item) => {
          return { ...item, [categories[i]]: result };
        });
      }
    }
  };

  useEffect(() => {
    getInitialData();
    // eslint-disable-next-line
  }, [categories]);

  console.log(homeData);

  return (
    <>
      <CarSlider />
      {homeData ? (
        Object.keys(homeData).map((key, item) => (
          <HomeCategoriesUI key={key} category={key} products={homeData[key]} />
        ))
      ) : (
        <div>Loading</div>
      )}
      <OurServices />
    </>
  );
};

export default Home;
