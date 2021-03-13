import React from "react";
import { connect } from "react-redux";

import toggleDropDownCart from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const cartIcon = ({ toggleCartDropDown }) => (
  <div className="cart-icon" onClick={toggleCartDropDown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDown: () => {
    dispatch(toggleDropDownCart());
  },
});

export default connect(null, mapDispatchToProps)(cartIcon);
