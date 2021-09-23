import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions/index.js";
import { Link } from "react-router-dom";

const Categories = () => {
  //Actions Area
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.categoriesActions.fetchAllCategories());
    // eslint-disable-next-line
  }, []);

  //Local Category State
  const [categoriesList, setCategoriesList] = useState([]);

  const { categories } = useSelector((state) => state.categories);
  console.log(categories , "testing cat")
  const setCategories = () => {
    if (categories.length > 0) {
      setCategoriesList(categories);
    }
  };

  //Set Categories everytime redux state changes
  useEffect(() => {
    setCategories();
    // eslint-disable-next-line
  }, [categories]);

  return (
    <div>
      {categoriesList ? (
        <div>
          <ul>
            {categoriesList.map((category) => (
              <li key={category}>
                <Link to={`/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Categories;
