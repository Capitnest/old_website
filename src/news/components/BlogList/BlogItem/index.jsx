import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Button, Badge } from "@chakra-ui/react";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <Link to={`/news/${id}`}>
      <div className="blogItem-wrap">
        <a href={`/news/${id}`}>
          <img className="blogItem-cover" src={cover} alt="cover" />
        </a>
        <div style={{ marginTop: "7px" }}>
          <Badge colorScheme="green">{category}</Badge>
        </div>
        <a className="title" href={`/news/${id}`}>
          <h3 style={{ fontWeight: "600", fontSize: "22px" }}>{title}</h3>
        </a>
        <p className="blogItem-desc" style={{ fontSize: "14px" }}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
