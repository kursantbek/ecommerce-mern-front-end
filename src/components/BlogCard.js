import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" alt="blog" className="img-fluid w-100" />
      </div>
      <div className="blog-content">
        <p className="date">11.June.2023</p>
        <h6 className="title">A beautiful sunday morning renaissance</h6>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          laboriosam dolorum voluptates sed tempora recusandae vel perspiciatis
          eaque illo maxime tenetur voluptatum culpa labore a, libero, sunt
          nesciunt ad vitae?
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
