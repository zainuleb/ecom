const toggleCartHidden = () => async (dispatch) => {
  dispatch(requestProducts());
  try {
    dispatch({ type: "TOGGLE_CART_HIDDEN_SUCCESS" });
  } catch (error) {
    dispatch({ type: "TOGGLE_CART_HIDDEN_FAILURE", payload: error });
  }
};

const requestProducts = () => {
  return {
    type: "TOGGLE_CART_HIDDEN_REQUEST",
  };
};

// eslint-disable-next-line
export default {
  toggleCartHidden,
};
