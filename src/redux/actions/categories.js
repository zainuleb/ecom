import { productApi } from "../services/productsApi";

const prodObj = new productApi();

const fetchAllCategories = () => async (dispatch) => {
  dispatch(requestCategories());
  try {
    const categoriesData = await prodObj.getAllCategories();
    dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: categoriesData });
  } catch (error) {
    dispatch({ type: "FETCH_CATEGORIES_FAILURE", payload: error });
  }
};

const requestCategories = () => {
  return {
    type: "FETCH_CATEGORIES_REQUEST",
  };
};

// eslint-disable-next-line
export default {
  fetchAllCategories,
};
