import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group align-items-center">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="You Email Address"
                  aria-label="You Email Address"
                  aria-describedby="basic-addon2"
                />

                <span
                  className="input-group-text align-items-center p-1"
                  id="basic-addon2"
                >
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <h5 className="text-white mb-4">Contact Us</h5>
              <div>
                <address className="text-white adrr">
                  Asia Kyrgyzstan,
                  <br /> city: Bishkek <br />
                  street: Manas 77 <br />
                </address>
                <a
                  href="tel:+996 779 779 718"
                  className="mt-2 d-block mb-2 text-white"
                >
                  Phone: +996 779 779 718
                </a>
                <a
                  href="mailto:kursantbek18@gamil.com"
                  className="mt-2 d-block mb-2 text-white"
                >
                  Email: kursantbek18@gamil
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <Link to="" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link to="" className="text-white">
                    <BsInstagram className="fs-4" />
                  </Link>
                  <Link to="" className="text-white">
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link to="" className="text-white">
                    <BsYoutube className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h5 className="text-white mb-4">Information</h5>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-1 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-1 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-1 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/trem-condiotions" className="text-white py-1 mb-1">
                  Terms or Service
                </Link>
                <Link to="/blogs" className="text-white py-1 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="text-white mb-4">Account</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 mb-1">Search</Link>
                <Link className="text-white py-1 mb-1">About us</Link>
                <Link className="text-white py-1 mb-1">Faq</Link>
                <Link className="text-white py-1 mb-1">Contact</Link>
                <Link className="text-white py-1 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="text-white mb-4">Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 mb-1">Accessories</Link>
                <Link className="text-white py-1 mb-1">Laptops</Link>
                <Link className="text-white py-1 mb-1">Contact</Link>
                <Link className="text-white py-1 mb-1">Headphones</Link>
                <Link className="text-white py-1 mb-1">Smart Watches</Link>
                <Link className="text-white py-1 mb-1">Tablets</Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className="text-white mb-4">Our App</h5>
              <div className="footer-links d-flex flex-column">
                <p className="text-white">
                  Download our App and get extra 15% Discount on your first
                  Order..!
                </p>
                <Link className="text-white py-1 mb-1">Google Play</Link>
                <Link className="text-white py-1 mb-1">App Store</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Developer's
                Kursantbek
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
