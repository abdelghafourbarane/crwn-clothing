import React from "react";
import { connect } from "react-redux";

import {
  clearItem,
  removeItem,
  addCartItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem, clearItem, addCartItem, removeItem }) => {
  const { imageUrl, quantity, name, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (cartItem) => dispatch(clearItem(cartItem)),
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
  addCartItem: (cartItem) => dispatch(addCartItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
