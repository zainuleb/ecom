import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions/index.js";
import { useParams } from "react-router";

const Category = () => {
  const { category } = useParams();

  //Actions Area
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.categoriesActions.fetchSpecificCategory(category));
    // eslint-disable-next-line
  }, []);

  const { specificCategory } = useSelector((state) => state.specificCategory);

  console.log(specificCategory);

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

  console.log(products);

  return (
    <div>
      {products ? (
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <img alt={item.title} src={item.image} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Category;
