const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM_SUCCESS":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        loading: false,
      };
    case "ADD_CART_ITEM_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "DEL_CART_ITEM_SUCCESS":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case "DEL_CART_ITEM_FAILURE":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
