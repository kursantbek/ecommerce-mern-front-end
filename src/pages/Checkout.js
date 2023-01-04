import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "./../components/Container";
import CustomInput from "./../components/CustomInput";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Dev Kursantbek</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item active" aria-current="page">
                    Shipping
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="total">Contact Information</h4>
              <p className="user-details total">
                Kursantbek (kursantbek18@gmail.com)
              </p>

              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex flex-wrap gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select
                    defaultValue={"Select Country"}
                    name=""
                    className="form-control form-select"
                    id=""
                  >
                    <option value="Select Country" disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="First Name" />
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="Last Name" />
                </div>
                <div className="w-100">
                  <CustomInput type="text" placeholder="Address" />
                </div>
                <div className="w-100">
                  <CustomInput type="text" placeholder="Apartment,Suite,etc" />
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="City" />
                </div>
                <div className="flex-grow-1">
                  <select
                    defaultValue={"Select State"}
                    name=""
                    className="form-control form-select"
                    id=""
                  >
                    <option value="Select State" disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="zipCode" />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img src={watch} className="img-fluid" alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">dsfjkl</h5>
                    <p className="total-price">jsdafkj fhasfj </p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$ 99</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-cneter">
                <p className="total">Subtotal</p>
                <p className="total-price">$9999</p>
              </div>
              <div className="d-flex justify-content-between align-items-cneter">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$9999</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-cneter py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$9999</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
