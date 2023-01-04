import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "./../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { services } from "./../utils/Data";

const Home = () => {
  return (
    <>
      <Meta title="Home" />
      <Container class1="home-wrapper-1 py-4">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative py-3">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute  ">
                <h5>SPERCHARGED FOR PROS.</h5>
                <h6>iPad S13+ Pro.</h6>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center  gap-10 py-3">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h5>best sale</h5>
                  <h6>Laptops Max.</h6>
                  <p>
                    From $999.00 or <br /> $41.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h5>SUPERCHARGED FOR PROS.</h5>
                  <h6>iPad S13+ Pro.</h6>
                  <p>
                    From $999.00 or <br /> $41.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h5>SUPERCHARGED FOR PROS.</h5>
                  <h6>iPad S13+ Pro.</h6>
                  <p>
                    From $999.00 or <br /> $41.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h5>SUPERCHARGED FOR PROS.</h5>
                  <h6>iPad S13+ Pro.</h6>
                  <p>
                    From $999.00 or <br /> $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div key={j} className="d-flex align-items-center gap-15">
                    <img src={i.image} alt="" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0 service-p">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="categories flex-wrap d-flex justify-content-between align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute text-white">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative  ">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute ">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute ">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Smart Watch Series 7</h6>
                <p className="text-dark">From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper p-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Special Products</h3>
          </div>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="merquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand  " />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png " alt="brand " />
                </div>
                <div className="mx-4 w-25">
                  <img src=" images/brand-03.png" alt="brand " />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png " alt="brand " />
                </div>
                <div className="mx-4 w-25">
                  <img src=" images/brand-05.png" alt="brand " />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand " />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png " alt="brand " />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png " alt="brand " />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
