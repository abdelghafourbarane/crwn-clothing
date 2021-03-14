import cartTypes from "./cart.types";

export const toggleDropDownCart = () => ({
  type: cartTypes.TOGGLE_CART_DROPDOW,
});

export const addCartItem = (item) => ({
  type: cartTypes.ADD_CART_ITEM,
  payload: item,
});
