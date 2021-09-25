import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions/index.js";
import { useParams } from "react-router";
import CategoryUI from "../UI/categoryUI/CategoryUI.js";

const Category = () => {
  const { category } = useParams();

  //Actions Area
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.categoriesActions.fetchSpecificCategory(category));
    // eslint-disable-next-line
  }, []);

  const { specificCategory } = useSelector((state) => state.specificCategory);

  const [products, setProducts] = useState([]);

  const getData = async () => {
    if (specificCategory.length > 0) {
      setProducts(specificCategory);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [specificCategory]);

  const addToCartHandler = (prod) => {
    console.log(prod);
  };

  return (
    <>
      {products ? (
        <CategoryUI products={products} addToCartHandler={addToCartHandler} />
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default Category;
