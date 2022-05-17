import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Badge } from "@chakra-ui/react";

const BlogItem = ({ blog: { description, title, cover, category, id } }) => {
  return (
    <Link to={`/news/${id}`} className="title">
      <div className="blogItem-wrap">
        <img className="blogItem-cover" src={cover} alt="cover" />

        <div style={{ marginTop: "7px" }}>
          <Badge colorScheme="green">{category}</Badge>
        </div>

        <h3 style={{ fontWeight: "600", fontSize: "22px" }}>{title}</h3>

        <p className="blogItem-desc" style={{ fontSize: "14px" }}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
