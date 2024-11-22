/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Searches from "./Searches";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <div>
      <nav class="navbar row">
        <div class="col-12 col-md-3">
          <div class="navbar-brand">
            <Link to={"/"}>
              <img
                width="150px"
                height="100px"
                src="https://share.ftimg.com/aff/flamingtext/2013/08/02/flamingtext__23076079694522370.png"
              />
            </Link>
          </div>
        </div>

        <div class="col-12 col-md-6 mt-2 mt-md-0">
          <Searches />
        </div>

        <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to={"/cart"}>
            <span id="cart" class="ml-3">
              Cart
            </span>
          </Link>

          <span class="ml-1" id="cart_count">
            {cartItems.length}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
