import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "./../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex py-3 justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data d-flex py-3 mb-2 justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="product img" />
                </div>
                <div className="w-75">
                  <h5>Apple watch 4 Pro</h5>
                  <p>Color: White</p>
                  <p>Size: XL</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price mb-0">$99</h5>
              </div>
              <div className="cart-col-3 gap-15 d-flex align-items-center  ">
                <div>
                  <input
                    type="number"
                    name=""
                    className="form-control"
                    id=""
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger fs-5" />
                </div>
              </div>
              <div className="cart-col-4 ">
                <h5 className="price mb-0">$99</h5>
              </div>
            </div>
            <div className="col-12 py-2">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue To Shopping
                </Link>

                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $99</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    Chekout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
