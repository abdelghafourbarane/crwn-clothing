import cartTypes from "./cart.types";

export const toggleDropDownCart = () => ({
  type: cartTypes.TOGGLE_CART_DROPDOW,
});

export const addCartItem = (item) => ({
  type: cartTypes.ADD_CART_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: cartTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});
